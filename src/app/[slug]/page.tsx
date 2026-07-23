import { generateSeoMetadata } from "@/lib/seo";
import DynamicPageClient from "./DynamicPageClient";
import { fetchPageBySlug } from "@/lib/page-api";
import {  permanentRedirect } from "next/navigation";
import NotFound from "../not-found";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/* ---------- helper to normalize the redirect path ---------- */
function normalizeRedirectPath(url: string): string {
  // API sends "some-page\/new-slug" -> "some-page/new-slug"
  const clean = url.replace(/\\\//g, "/");
  return clean.startsWith("/") ? clean : `/${clean}`;
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const page: any = await fetchPageBySlug(slug);

  // ✅ REDIRECT: slug was renamed — send a permanent redirect
  if (page?.redirect === true && page?.redirect_url) {
    const path = normalizeRedirectPath(page.redirect_url);
    permanentRedirect(path);
  }

  if (!page || slug === "home") {
     return <NotFound />;
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

      <DynamicPageClient page={page} />
    </>
  );
}