import { Metadata } from "next";
import { cache } from "react";
import BlogsDetailsClient from "./BlogsDetailsClient";
import { NewsItem } from "@/types/news";
import { mapSeoToMetadata } from "@/lib/seo-mapper";
import NotFound from "@/app/not-found";
import { API_CONFIG } from "@/constants/config";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};


/* ---------- SERVER FETCH (MATCHES api.get) ---------- */
const fetchDetailsBySlug = cache(
  async (slug: string): Promise<NewsItem | null> => {
    try {
      
      const res = await fetch(
        `${API_CONFIG.BASE_URL}/blog/${slug}`,
        {
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("SERVER DETAILS FETCH STATUS:", res.status);

      if (!res.ok) return null;

      const json = await res.json();

      console.log("SERVER DETAILS RESPONSE:", json);

      // ✅ EXACT SAME CHECK AS CLIENT
      if (json?.success && json?.data) {
        return json.data;
      }

      return null;
    } catch (error) {
      console.error("SERVER DETAILS FETCH ERROR:", error);
      return null;
    }
  }
);



/* ---------- SEO (SERVER) ---------- */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const news = await fetchDetailsBySlug(slug);
  return mapSeoToMetadata(news?.seo_detail);
}



export default async function Page({ params }: PageProps) {

   const { slug } = await params;
   const news = await fetchDetailsBySlug(slug);

    if (!news) {
    // Optional: you can throw notFound() here
    return <NotFound />;
  }

  return (
     <>
      {/* ✅ JSON-LD SCHEMA (SERVER RENDERED) */}
      {news?.seo_detail?.schema_markup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: news.seo_detail.schema_markup,
          }}
        />
      )}
  <BlogsDetailsClient details={news}/>
  </>
  );
}
