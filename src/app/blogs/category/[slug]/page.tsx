
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchCategoryBySlug } from "@/lib/server-fetchs";
import { mapSeoToMetadata } from "@/lib/seo-mapper";
import BlogsList from "@/components/blogs/BlogsList";
import { getCategories } from "@/lib/server-fetchs";
import { BlogCategory } from "@/types/blogs";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
    const cateory_pages = await fetchCategoryBySlug(slug);
    //console.log(region_pages,'region_pages++')

    return mapSeoToMetadata(cateory_pages?.seoDetail ?? null);
}






export default async function Blogs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) { // ✅ renamed component

  const { slug } = await params;
const page = await fetchCategoryBySlug(slug);
const categories:BlogCategory[] = await getCategories();

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
     <BlogsList categories={categories} slug={slug}/>   
    
    </>
  );
}
