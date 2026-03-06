export type PackagesResponse = {
  packages: PackageItem[];
  total: number;
  post_per_page: string;
};

export interface PackageItem {
  id: number;
  title: string;
  slug: string;
  short_slug: string;
  is_active: number;
  sort_order: number;
  short_description: string;
  description: string;
  image_path: string;
  region: Region;
  created_at: string;
  updated_at: string;
  tags: Tag[];
  countries: Country[];
  tag_groups: TagGroup[];
  days: string;
}

export interface Region {
  title: string;
  slug: string;
  type: string;
  short_slug: string;
}

export interface Tag {
  id: number;
  title: string;
  slug: string;
  type?: string;
  short_slug: string;
  group_id?: number;
}

export interface Country {
  id: number;
  title: string;
  slug: string;
  type: string;
  short_slug: string;
}

export interface TagGroup {
  group_id: number;
  group_title: string;
  slug: string | null;
  short_slug: string;
  tags: {
    id: number;
    title: string;
    slug: string;
    group_id: number;
    short_slug: string;
  }[];
}