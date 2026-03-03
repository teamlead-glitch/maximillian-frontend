import Regionlist from "@/components/regionlanding/Regionlist";

import { generateSeoMetadata } from "@/lib/seo";
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchRegionBySlug } from "@/lib/server-fetchs";


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function  Region({ params }: PageProps) {

    
const { slug } = await params;
const page = await fetchRegionBySlug(slug);
//console.log(page,'page++')

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
            <Regionlist slug={slug} regionDetails={page}/>

        </>
    );
}

