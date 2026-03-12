
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

    return mapSeoToMetadata(region_pages?.seo_detail ?? null);
}


export default async function Tag({ params }: PageProps) { // ✅ renamed component

const { slug } = await params;

const page = await fetchTagBySlug(slug);

if (!page) {
 return (
  <div className="flex items-center justify-center min-h-[60vh] px-4">
    <div className="max-w-md w-full bg-white shadow-lg rounded-xl border border-gray-200 p-8 text-center">
      
      <h1 className="text-2xl font-semibold text-gray-800 mb-3">
        Tag not found
      </h1>

      <p className="text-gray-500 mb-6">
        The tag you are looking for does not exist or may have been removed.
      </p>

      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </Link>

    </div>
  </div>
);
    //notFound();
  }

  return (
    <>
    {/* ✅ JSON-LD SCHEMA (SERVER RENDERED) */}
      {page?.seo_detail?.schema_markup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: page.seo_detail.schema_markup,
          }}
        />
      )}
     
     <TagwisePackageList slug={slug} title={page?.title??''}/>
    
    </>
  );
}
