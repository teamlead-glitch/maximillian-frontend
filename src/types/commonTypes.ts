export interface Seo {
   id: number;
  slug: string;
  meta_title: string;
  meta_description: string;
  meta_keywords?: string;
  canonical_url?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string | null;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string | null;
  schema_markup?: string | null;
  is_indexed: number;
  is_followed: number;
  is_in_sitemap?: number;
  priority?: number;
  change_frequency?: string;
  og_image_url?: string | null;
  twitter_image_url?: string | null;
}