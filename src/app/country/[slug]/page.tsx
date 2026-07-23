import Countrylist from "@/components/countrylanding/Countrylist";
import { Metadata } from "next";
import { fetchCountryBySlug } from "@/lib/server-fetchs";
import { mapSeoToMetadata } from "@/lib/seo-mapper";
import { notFound, permanentRedirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

/* ---------- helper to normalize the redirect path ---------- */
function normalizeRedirectPath(url: string): string {
    // API sends "country\/test-country-one" -> "country/test-country-one"
    const clean = url.replace(/\\\//g, "/");
    return clean.startsWith("/") ? clean : `/${clean}`;
}

/* ---------- SEO (SERVER) ---------- */
export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {

    const { slug } = await params;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const region_pages: any = await fetchCountryBySlug(slug);

    // ✅ old slug — no metadata to build; the page render will redirect
    if (region_pages?.redirect === true) {
        return {};
    }

    // ✅ handle array shape (same as region) — find exact match for SEO
    const seoSource = Array.isArray(region_pages)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ? region_pages.find((c: any) => c.short_slug === slug)
        : region_pages;

    return mapSeoToMetadata(seoSource?.seoDetail ?? null);
}

export default async function Country({ params }: PageProps) {

    const { slug } = await params;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const raw: any = await fetchCountryBySlug(slug);

    // ✅ REDIRECT: slug was renamed — send a permanent redirect
    if (raw?.redirect === true && raw?.redirect_url) {
        const path = normalizeRedirectPath(raw.redirect_url);
        permanentRedirect(path);
    }

    // ✅ handle array shape — find exact match by short_slug (same as region)
    const page = Array.isArray(raw)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ? raw.find((c: any) => c.short_slug === slug)
        : raw;

    if (!page) {
        notFound();
    }

    return (
        <>
            {/* ✅ JSON-LD SCHEMA (SERVER RENDERED) */}
            {page?.seoDetail?.schema_markup && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: page.seoDetail.schema_markup,
                    }}
                />
            )}
            <Countrylist slug={slug} regionDetails={page} />
        </>
    );
}