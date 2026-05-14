import { API_CONFIG } from "@/constants/config";
import { Region } from "@/types/region";
import { tagResponse } from "@/types/TagTypes";

export async function getRegions() {
  try {
    const res = await fetch(`${API_CONFIG.BASE_URL}/menu/`, {
      next: { revalidate: 60 }, // 3600 : ISR – cache for 1 hour
    });

    if (!res.ok) {
      throw new Error("Failed to fetch menu");
    }

    return res.json();
  } catch (error) {
    console.error("Menu API error:", error);
    return [];
  }
}

export async function fetchRegionBySlug(
  slug: string
): Promise<Region | null> {
  try {
    const res = await fetch(
      `${API_CONFIG.BASE_URL}/region/${slug}`,
      { next: { revalidate: 30 } }
    );

    if (!res.ok) return null;

    const json: Region = await res.json();
//console.log(json,'json+++')
    return json;
  } catch (error) {
    console.error("SERVER FETCH ERROR:", error);
    return null;
  }
}

export async function fetchCountryBySlug(
  slug: string
): Promise<Region | null> {
  try {
    const res = await fetch(
      `${API_CONFIG.BASE_URL}/country/${slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    const json: Region = await res.json();
//console.log(json,'json+++')
    return json;
  } catch (error) {
    console.error("SERVER FETCH ERROR:", error);
    return null;
  }
}


export async function getSettings() {
  try {
    const res = await fetch(`${API_CONFIG.BASE_URL}/settings/`, {
      next: { revalidate: 60 }, // 3600 : ISR – cache for 1 hour
    });

    if (!res.ok) {
      throw new Error("Failed to fetch menu");
    }

    return res.json();
  } catch (error) {
    console.error("Menu API error:", error);
    return [];
  }
}

export async function getTagGroups() {
  try {
    const res = await fetch(`${API_CONFIG.BASE_URL}/tag-groups/`, {
      next: { revalidate: 60 }, // 3600 : ISR – cache for 1 hour
    });

    if (!res.ok) {
      throw new Error("Failed to fetch menu");
    }

    return res.json();
  } catch (error) {
    console.error("Menu API error:", error);
    return [];
  }
}

export async function fetchTagBySlug(
  slug: string
): Promise<tagResponse | null> {
  try {
    const res = await fetch(
      `${API_CONFIG.BASE_URL}/tag-details/${slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    const json: tagResponse = await res.json();
//console.log(json,'json+++')
    return json;
  } catch (error) {
    console.error("SERVER FETCH ERROR:", error);
    return null;
  }
}

export async function fetchTagGroupeBySlug(
  slug: string
): Promise<tagResponse | null> {
  try {
    const res = await fetch(
      `${API_CONFIG.BASE_URL}/tag-group/${slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    const json: tagResponse = await res.json();
//console.log(json,'json+++')
    return json;
  } catch (error) {
    console.error("SERVER FETCH ERROR:", error);
    return null;
  }
}


export async function getCategories() {
  try {
    const res = await fetch(`${API_CONFIG.BASE_URL}/blogcategory/`, {
      next: { revalidate: 3600 }, // 3600 : ISR – cache for 1 hour
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogcategory");
    }

    return res.json();
  } catch (error) {
    console.error("blogcategory API error:", error);
    return [];
  }
}

export async function fetchCategoryBySlug(
  slug: string
): Promise<Region | null> {
  try {
    const res = await fetch(
      `${API_CONFIG.BASE_URL}/blogs/category/${slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    const json: Region = await res.json();
//console.log(json,'json+++')
    return json;
  } catch (error) {
    console.error("SERVER FETCH ERROR:", error);
    return null;
  }
}
