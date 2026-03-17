// lib/seo-mapper.ts
import { Metadata } from "next";
import { Seo } from "@/types/commonTypes";

export function mapSeoToMetadata(seo?: Seo | null): Metadata {
  const title = seo?.meta_title || "Festivon Tours";
  const description = seo?.meta_description || "Plan your perfect holiday with Festivon Tours";

  const ogImage = seo?.og_image
    ? [
        {
          url: seo.og_image,
          width: 1200,
          height: 630,
          alt: seo?.og_title ?? title,
        },
      ]
    : [];

  const twitterImage = seo?.twitter_image
    ? [
        {
          url: seo.twitter_image,
          alt: seo?.twitter_title ?? title,
        },
      ]
    : [];

  return {
    title,
    description,
    keywords: seo?.meta_keywords || [],

    alternates: seo?.canonical_url
      ? {
          canonical: seo.canonical_url,
        }
      : undefined,

    robots: {
      index: seo?.is_indexed === 1,
      follow: seo?.is_followed === 1,
    },

    openGraph: {
      title: seo?.og_title ?? title,
      description: seo?.og_description ?? description,
      url: seo?.canonical_url,
      type: "website",
      images: ogImage,
    },

    twitter: {
      card: "summary_large_image",
      title: seo?.twitter_title ?? title,
      description: seo?.twitter_description ?? description,
      images: twitterImage,
    },
  };
}