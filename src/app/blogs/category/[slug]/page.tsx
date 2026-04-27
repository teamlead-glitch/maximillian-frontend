
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchPageBySlug } from "@/lib/page-api";
import { generateSeoMetadata } from "@/lib/seo";
import BlogsList from "@/components/blogs/BlogsList";
import { getCategories } from "@/lib/server-fetchs";
import { BlogCategory } from "@/types/blogs";

export const dynamic = "force-dynamic";
export const revalidate = 0;



// export const generateMetadata = async () => {
//   return generateSeoMetadata(slug);
// };





export default async function Blogs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) { // ✅ renamed component

  const { slug } = await params;
const page = await fetchPageBySlug(slug);
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
