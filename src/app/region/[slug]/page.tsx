import Regionlist from "@/components/regionlanding/Regionlist";
import { Metadata } from "next";
import { cache } from "react";
import { permanentRedirect, notFound } from "next/navigation";
import { mapSeoToMetadata } from "@/lib/seo-mapper";
import { API_CONFIG } from "@/constants/config";
import type { Region } from "@/types/region";


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
  | { type: "region"; data: Region }
  | { type: "not_found" };

/* ---------- SERVER FETCH ---------- */
const fetchRegionBySlug = cache(
  async (short_slug: string): Promise<FetchResult> => {
    try {
      const res = await fetch(`${API_CONFIG.BASE_URL}/region/${short_slug}`, {
        cache: "no-store",
        headers: { Accept: "application/json" },
      });

      if (!res.ok) return { type: "not_found" };

      const json = await res.json();
      console.log("API JSON:", json);

      // ✅ redirect shape — single object with redirect: true
      if (json?.redirect === true && json?.redirect_url) {
        return { type: "redirect", data: json as RedirectResponse };
      }

      // ✅ array shape — find the exact match by short_slug
      if (Array.isArray(json)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const match = json.find((r: Region) => (r as any).short_slug === short_slug);
        return match ? { type: "region", data: match } : { type: "not_found" };
      }

      // ✅ fallback: single region object (non-array, non-redirect)
      if (json && typeof json === "object") {
        return { type: "region", data: json as Region };
      }

      return { type: "not_found" };
    } catch (error) {
      console.error("SERVER REGION FETCH ERROR:", error);
      return { type: "not_found" };
    }
  }
);

/* ---------- helper to normalize the redirect path ---------- */
function normalizeRedirectPath(url: string): string {
  // API sends "region\/test-region-one" -> "region/test-region-one"
  const clean = url.replace(/\\\//g, "/");
  return clean.startsWith("/") ? clean : `/${clean}`;
}

/* ---------- SEO (SERVER) ---------- */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await fetchRegionBySlug(slug);

  if (result.type === "redirect") {
    return {};
  }

  if (result.type === "not_found") {
    return {};
  }

  return mapSeoToMetadata(result.data.seoDetail ?? null);
}

/* ---------- PAGE ---------- */
export default async function Region({ params }: PageProps) {
  const { slug } = await params;
  const result = await fetchRegionBySlug(slug);
  console.log("RESULT:", result);

  if (result.type === "redirect") {
    const path = normalizeRedirectPath(result.data.redirect_url);
    permanentRedirect(path);
  }

  if (result.type === "not_found") {
    notFound();
  }

  const page = result.data;

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
      <Regionlist slug={slug} regionDetails={page} />
    </>
  );
}