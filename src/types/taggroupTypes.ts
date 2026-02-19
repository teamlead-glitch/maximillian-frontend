export interface taggroupResponse {
  id: number;
  title: string;
  image_path: string;
  short_description: string | null;
  description: string | null;
  is_active: number;
  tags: []
}