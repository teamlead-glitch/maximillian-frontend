import Regionlist from "@/components/regionlanding/Regionlist";
import { Metadata } from "next";
import { fetchRegionBySlug } from "@/lib/server-fetchs";
import { mapSeoToMetadata } from "@/lib/seo-mapper";
import { notFound } from "next/navigation";


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
    const region_pages = await fetchRegionBySlug(slug);

    return mapSeoToMetadata(region_pages?.seo_detail ?? null);
}



export default async function Region({ params }: PageProps) {


    const { slug } = await params;
    const page = await fetchRegionBySlug(slug);
    //console.log(page,'page++')
     if (!page) {
   notFound();
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
            <Regionlist slug={slug} regionDetails={page} />

        </>
    );
}

