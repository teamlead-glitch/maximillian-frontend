export type BlogsResponse = {
  blogs: BlogType[];
  total: number;
  post_per_page: string;
};

export type BlogType = {
  id: number;
  title: string;
  slug: string;
  short_slug:string;
  is_active: number;
  short_description: string;
  description: string;
  image_path: string;

  region: {
    title: string;
    slug: string;
  };

  created_at: string;
  updated_at: string;

  tags: {
    id: number;
    title: string;
    slug: string;
  }[];

  countries: {
    id: number;
    title: string;
    slug: string;
  }[];

  author: {
    name: string;
    image: string;
  };
};