
import { generateSeoMetadata } from "@/lib/seo";
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchPageBySlug } from "@/lib/page-api";
import Allstyle from "@/components/commonstructure/Allstyle";
import TopMenu from "@/components/common/header/TopMenu";
import Footer from "@/components/common/footer/footer";

import BackToTop from "@/components/common/BackToTop";




const slug = PAGE_SLUGS.HOME;

export const generateMetadata = async () => {
    return generateSeoMetadata(slug);
};


const page = await fetchPageBySlug(slug);


export default function Home() {
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

            <TopMenu />
            <Allstyle />

            <Footer />
            <BackToTop />

        </>
    );
}

