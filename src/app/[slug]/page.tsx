import { generateSeoMetadata } from "@/lib/seo";
import DynamicPageClient from "./DynamicPageClient";
import { fetchPageBySlug } from "@/lib/page-api";
import NotFound from "@/app/not-found";
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params; // ✅ UNWRAP PARAMS

  if (!slug || slug === "home") {
    return {};
  }

  return generateSeoMetadata(slug);
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await fetchPageBySlug(slug);

  if (!page || slug == 'home') {
    // Optional: you can throw notFound() here
    return <NotFound />;
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

      <DynamicPageClient page={page} />
    </>
  );


}
