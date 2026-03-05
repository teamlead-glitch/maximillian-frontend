
export interface CountryResponse {
  id: number;
  title: string;
  short_description: string | null;
  short_slug:string;
  image_path: string ;
}

export interface IndiaOnlyData {
  id: number;
  title: string;
  slug: string;
  short_slug: string;
  short_description: string | null;
  description: string | null;
  icon: string | null;
  image: string | null;
  tag_group: string;
  seoDetail: any;
}