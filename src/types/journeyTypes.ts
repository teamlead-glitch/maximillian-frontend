export interface journeyResponse {
  id: number;
  title: string;
  image_path: string;
  short_description: string | null;
  description: string | null;
  is_active: number;
  tags: string|number[],
  region:string|number[],
  country:string|number[],
  tag_group:string|number[],
}