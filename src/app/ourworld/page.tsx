import Ourworld from "@/components/aboutus/Ourworld";

import { generateSeoMetadata } from "@/lib/seo";
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchPageBySlug } from "@/lib/page-api";

export const dynamic = "force-dynamic";
export const revalidate = 0;


const slug = PAGE_SLUGS.OURWORLD;

export const generateMetadata = async () => {
    return generateSeoMetadata(slug);
};


const page = await fetchPageBySlug(slug);


export default function OurworldPage() {
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
            <Ourworld />

        </>
    );
}

