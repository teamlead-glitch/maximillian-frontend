import { Seo } from "./commonTypes";
export interface Region {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  is_active: number;
  created_at: string;
  updated_at: string;
  image_path: string;
  banner_image: string;
  banner_mob_image: string;
  menu_title: string;
  what_makes_us_exceptional: string;
  faqs: any[]; // change to proper type if FAQ structure is known
  seoDetail: Seo;
}