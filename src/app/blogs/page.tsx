
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchPageBySlug } from "@/lib/page-api";
import { generateSeoMetadata } from "@/lib/seo";
import BlogsList from "@/components/blogs/BlogsList";

const slug = PAGE_SLUGS.BLOGS;

export const generateMetadata = async () => {
  return generateSeoMetadata(slug);
};


const page = await fetchPageBySlug(slug);


export default function Blogs() { // ✅ renamed component



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
     <BlogsList/>   
    
    </>
  );
}
