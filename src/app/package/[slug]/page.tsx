import { Metadata } from "next";
import { cache } from "react";
import { notFound, permanentRedirect } from "next/navigation";
import { mapSeoToMetadata } from "@/lib/seo-mapper";
import { API_CONFIG } from "@/constants/config";
import { PackageResponse } from "@/types/PackageDetailsType";
import Details from "@/components/packagedetails/Details";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ---------- SERVER FETCH ---------- */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchDetailsBySlug = cache(async (short_slug: string): Promise<any> => {
  try {
    const res = await fetch(`${API_CONFIG.BASE_URL}/package/${short_slug}`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    console.log("STATUS:", res);

    if (!res.ok) return null;

    const json = await res.json();

    console.log("DATA:", json);

    // ✅ return direct response — may be redirect shape, array, or single object
    return json ?? null;
  } catch (error) {
    console.error("SERVER DETAILS FETCH ERROR:", error);
    return null;
  }
});

/* ---------- helper to normalize the redirect path ---------- */
function normalizeRedirectPath(url: string): string {
  // API sends "package\/test-package-one" -> "package/test-package-one"
  const clean = url.replace(/\\\//g, "/");
  return clean.startsWith("/") ? clean : `/${clean}`;
}

/* ---------- SEO (SERVER) ---------- */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const package_details = await fetchDetailsBySlug(slug);

  // ✅ old slug — no metadata to build; the page render will redirect
  if (package_details?.redirect === true) {
    return {};
  }

  return mapSeoToMetadata(package_details?.seoDetail ?? null);
}

/* ---------- PAGE ---------- */
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const package_details = await fetchDetailsBySlug(slug);

  // ✅ REDIRECT: slug was renamed — send a permanent redirect
  if (package_details?.redirect === true && package_details?.redirect_url) {
    const path = normalizeRedirectPath(package_details.redirect_url);
    permanentRedirect(path);
  }

  if (!package_details) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD SCHEMA */}
      {package_details?.seoDetail?.schema_markup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: package_details.seoDetail.schema_markup,
          }}
        />
      )}

      <Details details={package_details as PackageResponse} />
    </>
  );
}