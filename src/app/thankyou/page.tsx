import Thankyou from "@/components/thankyoupage/Thankyou";
import { generateSeoMetadata } from "@/lib/seo";
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchPageBySlug } from "@/lib/page-api";


export const dynamic = "force-dynamic";
export const revalidate = 0;

const slug = PAGE_SLUGS.THANKYOU;

export const generateMetadata = async () => {
    return generateSeoMetadata(slug);
};

export default async function ThankyouPage() {
    const page = await fetchPageBySlug(slug);

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

            <Thankyou />
            {/* <LogoCarousel /> */}
        </>
    );
}
