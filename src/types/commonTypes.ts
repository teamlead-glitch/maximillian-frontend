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


export interface Country {
  id: number;
  title: string;
  slug: string;
}

export interface Region {
  id: number;
  title: string;
  slug: string;
  image: string;
  countries: Country[];
  menu_title?: string;
}

/**
 * Full API response type
 */
export type Regions = Region[];

export interface Settings {
  company_name: string;
  contact_email: string;
  package_enquiry_email: string;
  fit_enquiry_email: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  address_link: string | null;
  address_2: string;
  address_link_2: string | null;
  fb_url: string | null;
  twitter_url: string | null;
  youtube_url: string | null;
  linked_in: string | null;
  insta_url: string | null;
}