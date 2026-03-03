
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchPageBySlug } from "@/lib/page-api";
import { generateSeoMetadata } from "@/lib/seo";
import TagwisePackageList from "@/components/tags/TagwisePackageList";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const slug = 'tag'//PAGE_SLUGS.TAG;

export const generateMetadata = async () => {
  return generateSeoMetadata(slug);
};


const page = await fetchPageBySlug(slug);


export default async function Tag({ params }: PageProps) { // ✅ renamed component

const { slug } = await params;

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
     
     <TagwisePackageList slug={slug}/>
    
    </>
  );
}
