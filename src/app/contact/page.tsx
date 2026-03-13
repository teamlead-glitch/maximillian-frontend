import AddressForm from "@/components/contactpage/Addressform";

import { generateSeoMetadata } from "@/lib/seo";
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchPageBySlug } from "@/lib/page-api";

export const dynamic = "force-dynamic";
export const revalidate = 0;


const slug = PAGE_SLUGS.CONTACT;

export const generateMetadata = async () => {
    return generateSeoMetadata(slug);
};


const page = await fetchPageBySlug(slug);


export default function Contact() {
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
            <AddressForm />

        </>
    );
}

