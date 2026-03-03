export interface PackageResponse {
  id: number;
  title: string;
  region_id: number;
  package_tagline: string;
  short_description: string;
  description: string;
  image_path: string;
  journey_flow: string;
  season: string;
  price_per_person: number | null;
  duration: string;
  journey_style: string | null;
  package_size: string | null;
  group_count: number;
  duration_text: string;
  departure_date: string | null;
  itinerary_document: string | null;
  final_positioning_note: string;
  bescope_image: string | null;
  faq_image: string | null;
  is_active: number;
  created_at: string;
  updated_at: string;
  banner_image: string | null;
  banner_mob_image: string | null;
  price_text: string | null;
  sort_order: number;
  show_in_home: number;

  seoDetail: SeoDetail;
  tags: Tag[];
  countries: Country[];
  itinerary: Itinerary[];
  faqs: FAQ[];
  inclusion: InclusionExclusion[];
  exclusion: InclusionExclusion[];
  gallery: Gallery[];
  region: Region;
  seo_detail: SeoDetail;
}

export interface SeoDetail {
  id: number;
  seoable_type: string;
  seoable_id: number;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  slug: string;
  canonical_url: string;
  og_title: string;
  og_description: string;
  og_image: string;
  twitter_title: string;
  twitter_description: string;
  twitter_image: string;
  schema_markup: string;
  is_indexed: number;
  is_followed: number;
  is_in_sitemap: number;
  priority: number;
  change_frequency: string;
  llm_generated_meta_title: string;
  llm_generated_meta_description: string;
  llm_generated_schema_markup: string;
  llm_model_used: string;
  llm_prompt: string;
  llm_generated_at: string;
  llm_approved: number;
  created_at: string;
  updated_at: string;
}
export interface Tag {
  id: number;
  title: string;
  group_id: number;
  pivot: {
    package_id: number;
    tag_id: number;
  };
  group: {
    id: number;
    title: string;
  };
  seo_detail: SeoDetail;
}

export interface Country {
  id: number;
  title: string;
  pivot: {
    package_id: number;
    country_id: number;
  };
  seo_detail: SeoDetail;
}

export interface Itinerary {
  id: number;
  title: string;
  day: number;
  description: string;
  image: string | null;
  inclusions: ItineraryInclusion[];
}
export interface ItineraryInclusion {
  id: number;
  title: string;
  icon: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  is_active: number;
  faqable_id: number;
  faqable_type: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}
export interface InclusionExclusion {
  id: number;
  title: string;
  icon: string;
  short_description: string | null;
}
export interface Region {
  id: number;
  title: string;
}
export interface Gallery {
  id?: number;
  image?: string;
}