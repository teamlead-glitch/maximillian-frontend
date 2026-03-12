

import { generateSeoMetadata } from "@/lib/seo";
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchPageBySlug } from "@/lib/page-api";
import Packagedetails from "@/components/packagedetails/Details";

export const dynamic = "force-dynamic";
export const revalidate = 0;


const slug = PAGE_SLUGS.PACKAGE;

export const generateMetadata = async () => {
    return generateSeoMetadata(slug);
};


const page = await fetchPageBySlug(slug);


export default function Details() {
    return (
        <>
            {/* ✅ JSON-LD SCHEMA (SERVER RENDERED) */}
            {page?.seo?.schema_markup && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: page.seo.schema_markup,
                    }}
                />
            )}
           {/*  <Packagedetails /> */}

        </>
    );
}

