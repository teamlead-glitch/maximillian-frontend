import { Metadata } from "next";
import { fetchPageBySlug } from "./page-api";

export async function generateSeoMetadata(
  slug: string
): Promise<Metadata> {
  const page = await fetchPageBySlug(slug);
  const seo = page?.seoDetail;

  if (!seo) {
    console.log('no seo info found set deault')
    return {
      title: "Festivon Tours",
      description: "Plan your perfect holiday with Festivon Tours",
    };
  }


  return {
    title: seo.meta_title,
    description: seo.meta_description,
    keywords: seo.meta_keywords,
    alternates: {
      canonical: seo.canonical_url,
    },
    robots: {
      index: seo.is_indexed === 1,
      follow: seo.is_followed === 1,
    },
    openGraph: {
      title: seo.og_title ?? seo.meta_title,
      description: seo.og_description ?? seo.meta_description,
      images: seo.og_image_url ? [seo.og_image_url] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.twitter_title ?? seo.meta_title,
      description:
        seo.twitter_description ?? seo.meta_description,
      images: seo.twitter_image_url ? [seo.twitter_image_url] : [],
    },
  };
}
