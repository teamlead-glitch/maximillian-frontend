// ---------- SEO TYPE ----------
export type Seo = {
  id: number;
  seoable_type: string;
  seoable_id: number;

  meta_title: string;
  meta_description: string;
  meta_keywords: string;

  slug: string;

  canonical_url: string | undefined;

  og_title: string | undefined;
  og_description: string | undefined;
  og_image: string | undefined;

  twitter_title: string | undefined;
  twitter_description: string | undefined;
  twitter_image: string | undefined;

  schema_markup: string;

  is_indexed: number;
  is_followed: number;
  is_in_sitemap: number;

  priority: number;
  change_frequency: string;

  llm_generated_meta_title: string | null;
  llm_generated_meta_description: string | null;
  llm_generated_schema_markup: string | null;
  llm_model_used: string | null;
  llm_prompt: string | null;
  llm_generated_at: string | null;
  llm_approved: number;

  created_at: string;
  updated_at: string;
};


// ---------- BLOG DETAIL ----------
export type BlogDetailType = {
  id: number;
  title: string;

  description: string;
  second_description: string;
  third_description: string;

  image: string;
  banner_image: string;
  banner_mob_image: string;

  slug: string;
  short_slug: string;

  // ⭐ FIX HERE
  seoDetail: Seo | null;

  author: {
    id: number;
    name: string;
    image: string;
  };

  region: {
    title: string;
    slug: string;
    short_slug: string;
  };

  tags: {
    id: number;
    title: string;
    slug: string;
    short_slug: string;
  }[];

  countries: {
    id: number;
    title: string;
    slug: string;
    short_slug: string;
  }[];
};