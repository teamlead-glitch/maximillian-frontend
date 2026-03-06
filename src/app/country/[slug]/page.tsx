import Countrylist from "@/components/countrylanding/Countrylist";
import { Metadata } from "next";
import { fetchCountryBySlug } from "@/lib/server-fetchs";
import { mapSeoToMetadata } from "@/lib/seo-mapper";
import { redirect } from "next/navigation";


type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

/* ---------- SEO (SERVER) ---------- */
export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {

    const { slug } = await params;
    const region_pages = await fetchCountryBySlug(slug);

    return mapSeoToMetadata(region_pages?.seo_detail ?? null);
}



export default async function Country({ params }: PageProps) {


    const { slug } = await params;
    const page = await fetchCountryBySlug(slug);
    //console.log(page,'page++')

    if (!page) {
    redirect("/");
  }

    return (
        <>
            {/* ✅ JSON-LD SCHEMA (SERVER RENDERED) */}
            {page?.seo_detail?.schema_markup && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: page.seo_detail.schema_markup,
                    }}
                />
            )}
            <Countrylist slug={slug} regionDetails={page} />

        </>
    );
}

