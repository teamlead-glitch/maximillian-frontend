import { Seo } from "./commonTypes";
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

  seoDetail: Seo;
  tags: Tag[];
  countries?: Country[];
  country?: Country[];
  itinerary: Itinerary[];
  faqs: FAQ[];
  inclusion: InclusionExclusion[];
  exclusion: InclusionExclusion[];
  gallery: Gallery[];
  region: Region;
  seo_detail: Seo;
   taggroups: TagGroup[];
   regions: Region;
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
  seo_detail: Seo;
}

// export interface Country {
//   id: number;
//   title: string;
//   pivot: {
//     package_id: number;
//     country_id: number;
//   };
//   seo_detail: SeoDetail;
// }

export interface Country {
  id: number;
  title: string;
  slug: string;
  short_slug: string;
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
  image_path: string;
}
export interface TagGroup {
  group_id: number;
  group_title: string;
  slug: string | null;
  short_slug: string;
  tags: TagGroupTag[];
}

export interface TagGroupTag {
  id: number;
  title: string;
  slug: string | null;
  group_id: number;
  short_slug: string;
}
export interface Region {
  id: number;
  title: string;
  slug: string;
  type: string;
  short_slug: string;
}