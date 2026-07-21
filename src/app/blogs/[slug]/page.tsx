import { Metadata } from "next";
import { cache } from "react";
import { redirect } from "next/navigation";
import { mapSeoToMetadata } from "@/lib/seo-mapper";
import NotFound from "@/app/not-found";
import { API_CONFIG } from "@/constants/config";
import { BlogDetailType } from "@/types/blogTypes";
import Blogdetails from "@/components/blogs/BlogDetails";
import { permanentRedirect } from "next/navigation";
export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ---------- REDIRECT SHAPE ---------- */
type RedirectResponse = {
  redirect: true;
  redirect_url: string;
  status_code?: number;
  message?: string;
};

type FetchResult =
  | { type: "redirect"; data: RedirectResponse }
  | { type: "blog"; data: BlogDetailType }
  | { type: "not_found" };

/* ---------- SERVER FETCH ---------- */
const fetchDetailsBySlug = cache(
  async (short_slug: string): Promise<FetchResult> => {
    try {
      const res = await fetch(`${API_CONFIG.BASE_URL}/blog/${short_slug}`, {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) return { type: "not_found" };

      const json = await res.json();
      console.log("API JSON:", json);

      if (json?.redirect === true && json?.redirect_url) {
        return { type: "redirect", data: json as RedirectResponse };
      }

      if (!json) return { type: "not_found" };

      return { type: "blog", data: json as BlogDetailType };
    } catch (error) {
      console.error("SERVER DETAILS FETCH ERROR:", error);
      return { type: "not_found" };
    }
  }
);

/* ---------- helper to normalize the redirect path ---------- */
function normalizeRedirectPath(url: string): string {
  // API sends "blogs\/test-blog-1" -> "blogs/test-blog-1"
  const clean = url.replace(/\\\//g, "/");
  return clean.startsWith("/") ? clean : `/${clean}`;
}

/* ---------- SEO (SERVER) ---------- */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await fetchDetailsBySlug(slug);

  if (result.type === "redirect") {
    // don't build metadata for a page that's about to redirect
    return {};
  }

  if (result.type === "not_found") {
    return {};
  }

  const currentUrl = `https://festivontours.com/blogs/${slug}`;
  return mapSeoToMetadata(result.data.seoDetail ?? null, currentUrl);
}

/* ---------- PAGE ---------- */
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const result = await fetchDetailsBySlug(slug);
console.log("RESULT:", result);
 if (result.type === "redirect") {
  const path = normalizeRedirectPath(result.data.redirect_url);
  permanentRedirect(path);
}

  if (result.type === "not_found") {
    return <NotFound />;
  }

  const blog_pages = result.data;

  return (
    <>
      {blog_pages?.seoDetail?.schema_markup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: blog_pages.seoDetail.schema_markup,
          }}
        />
      )}

      <Blogdetails details={blog_pages} />
    </>
  );
}