import HomePage from "@/components/home/HomePage";
import { generateSeoMetadata } from "@/lib/seo";
import { PAGE_SLUGS } from "@/constants/pageSlugs";
import { fetchPageBySlug } from "@/lib/page-api";
import { getSettings } from "@/lib/server-fetchs";
import type { Settings } from "@/types/commonTypes";
import type { PageResponse } from "@/types/pagesTypes";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const slug = PAGE_SLUGS.HOME;

export const generateMetadata = async () => {
  return generateSeoMetadata(slug);
};

export default async function Home() {
  // ✅ Fetch data on server
  const [page, settings]: [PageResponse | null, Settings] = await Promise.all([
    fetchPageBySlug(slug),
    getSettings(),
  ]);

  if (!page) {
    notFound();
  }

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

      {/* ✅ Pass data to HomePage */}
      <HomePage page={page} settings={settings} />
    </>
  );
}
