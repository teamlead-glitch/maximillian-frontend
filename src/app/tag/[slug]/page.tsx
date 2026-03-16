
import { Metadata } from "next";
import TagwisePackageList from "@/components/tags/TagwisePackageList";
import { mapSeoToMetadata } from "@/lib/seo-mapper";
import { fetchTagBySlug } from "@/lib/server-fetchs";
import { notFound } from "next/navigation";
import Link from "next/link";

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
    const region_pages = await fetchTagBySlug(slug);

    return mapSeoToMetadata(region_pages?.seoDetail ?? null);
}


export default async function Tag({ params }: PageProps) { // ✅ renamed component

const { slug } = await params;

const page = await fetchTagBySlug(slug);

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
     
     <TagwisePackageList slug={slug} title={page?.title??''}/>
    
    </>
  );
}
