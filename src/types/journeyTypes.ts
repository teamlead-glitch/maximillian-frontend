import { tagResponse } from "@/types/TagTypes";

export interface journeyResponse {
  id: number;
  title: string;
  image_path: string;
  short_description: string | null;
  description: string | null;
  is_active: number;
  tags: [
    {
      id: number;
      title: string;
      icon: string;
    }
  ],
  region:{
    id: number;
    title: string;
    slug:string;
  },
  country:string|number[],
  tag_group:string|number[],
}