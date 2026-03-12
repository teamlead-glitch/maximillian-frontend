import Experiencespeciality from "@/components/experiencetour/Experiencespeciality";
import { generateSeoMetadata } from "@/lib/seo";
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchPageBySlug } from "@/lib/page-api";
import SignatureJourney from "@/components/signaturejourney/SignatureJourney";
// import LogoCarousel from "@/components/home/LogoCarousel"

export const dynamic = "force-dynamic";
export const revalidate = 0;



const slug = PAGE_SLUGS.EXPERIENCE;

export const generateMetadata = async () => {
    return generateSeoMetadata(slug);
};

export default async function ExperiencePage() {
    const page = await fetchPageBySlug(slug);

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

            <SignatureJourney />
            {/* <LogoCarousel /> */}
        </>
    );
}
