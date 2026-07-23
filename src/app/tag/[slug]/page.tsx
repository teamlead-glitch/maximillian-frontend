import { Metadata } from "next";
import TagwisePackageList from "@/components/tags/TagwisePackageList";
import { mapSeoToMetadata } from "@/lib/seo-mapper";
import { fetchTagBySlug } from "@/lib/server-fetchs";
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
  // API sends "tag\/test-tag-one" -> "tag/test-tag-one"
  const clean = url.replace(/\\\//g, "/");
  return clean.startsWith("/") ? clean : `/${clean}`;
}

/* ---------- SEO (SERVER) ---------- */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {

  const { slug } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const region_pages: any = await fetchTagBySlug(slug);

  // ✅ old slug — no metadata to build; the page render will redirect
  if (region_pages?.redirect === true) {
    return {};
  }

  return mapSeoToMetadata(region_pages?.seoDetail ?? null);
}

export default async function Tag({ params }: PageProps) {

  const { slug } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const page: any = await fetchTagBySlug(slug);

  // ✅ REDIRECT: slug was renamed — send a permanent redirect
  if (page?.redirect === true && page?.redirect_url) {
    const path = normalizeRedirectPath(page.redirect_url);
    permanentRedirect(path);
  }

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

      <TagwisePackageList
        slug={slug}
        title={page?.title ?? ""}
        description={page?.short_description ?? ""}
      />
    </>
  );
}