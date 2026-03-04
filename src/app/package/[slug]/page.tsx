import { Metadata } from "next";
import { cache } from "react";
import { mapSeoToMetadata } from "@/lib/seo-mapper";
import NotFound from "@/app/not-found";
import { API_CONFIG } from "@/constants/config";
import { PackageResponse } from "@/types/PackageDetailsType";
import Details from "@/components/packagedetails/Details";


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};



/* ---------- SERVER FETCH ---------- */
const fetchDetailsBySlug = cache(
  async (short_slug: string): Promise<PackageResponse | null> => {
    try {

      const res = await fetch(
        `${API_CONFIG.BASE_URL}/package/${short_slug}`,
        {
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("STATUS:", res);

      if (!res.ok) return null;

      const json = await res.json();

      console.log("DATA:", json);

      // ✅ return direct response
      return json ?? null;

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
  const package_details = await fetchDetailsBySlug(slug);

  return mapSeoToMetadata(package_details?.seoDetail ?? null);
}



/* ---------- PAGE ---------- */
export default async function Page({ params }: PageProps) {

  const { slug } = await params;
  const package_details = await fetchDetailsBySlug(slug);

  if (!package_details) {
    return <NotFound />;
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

       <Details details={package_details}/> 
    </>
  );
}