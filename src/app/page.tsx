import HomePage from "@/components/home/HomePage";
import { generateSeoMetadata } from "@/lib/seo";
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchPageBySlug } from "@/lib/page-api";
import { PageResponse } from "@/types/pagesTypes";

const slug = PAGE_SLUGS.HOME;

export const generateMetadata = async () => {
  return generateSeoMetadata(slug);
};

export default async function Home() {
  // ✅ Fetch data on server
  const page: PageResponse | null = await fetchPageBySlug(slug);

  if (!page) {
    return <div>Page not found</div>;
  }

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

      {/* ✅ Pass data to HomePage */}
      <HomePage page={page} />
    </>
  );
}