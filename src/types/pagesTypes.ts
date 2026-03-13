import { Seo } from "./commonTypes";

export interface PageResponse {
  id: number;
  title: string;
  short_description: string | null;
  content: string | null;
  is_removable: "yes" | "no";
  is_active: number;
  banner_image: string | null;
  banner_mob_image: string | null;
  web_banner: string;
  mobile_banner: string;
  seoDetail: Seo;
  faqs: any[];
  created_at: string;
  updated_at: string;
}