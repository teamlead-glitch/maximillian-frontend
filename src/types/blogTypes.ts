// ---------- SEO TYPE ----------
export type Seo = {
  id: number;
  seoable_type: string;
  seoable_id: number;

  meta_title: string;
  meta_description: string;
  meta_keywords: string;

  slug: string;

  canonical_url: string;

  og_title: string;
  og_description: string ;
  og_image: string;

  twitter_title: string ;
  twitter_description: string 
  twitter_image: string ;

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
  created_at: string;
  updated_at: string;

  // ⭐ FIX HERE
  seoDetail: Seo | null;

    author: {
  id: number;
  name: string;
  image_path: string;
  tagline: string;
  is_active: number;
  description: string;
  instagram: string;
  linkedin: string;
  created_at: string;
  updated_at: string;
} | null;

  region: {
    title: string;
    slug: string;
    short_slug: string;
  };
  category: {
    id: number,
    title: string,
    created_at: string,
    updated_at: string,
  },

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