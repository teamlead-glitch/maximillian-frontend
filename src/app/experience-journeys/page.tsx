import Experiencespeciality from "@/components/experiencetour/Experiencespeciality";
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchTagGroupeBySlug } from "@/lib/server-fetchs";
// import LogoCarousel from "@/components/home/LogoCarousel"
import { mapSeoToMetadata } from "@/lib/seo-mapper";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const slug = PAGE_SLUGS.EXPERIENCE;


/* ---------- SEO (SERVER) ---------- */
export async function generateMetadata(): Promise<Metadata> {

    const pageInfo = await fetchTagGroupeBySlug(slug);
    //console.log(region_pages,'region_pages++')

    return mapSeoToMetadata(pageInfo?.seoDetail ?? null);
}

export default async function ExperiencePage() {
    const page = await fetchTagGroupeBySlug(slug);
    //console.log(page,'page++')

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

            <Experiencespeciality />
            {/* <LogoCarousel /> */}
        </>
    );
}
