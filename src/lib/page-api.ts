import { PageResponse } from "@/types/pagesTypes";
import { API_CONFIG } from "@/constants/config";

export async function fetchPageBySlug(
  slug: string
): Promise<PageResponse | null> {
  try {
    const res = await fetch(
      `${API_CONFIG.BASE_URL}/page/${slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    const json: PageResponse  = await res.json();

    return json;
  } catch (error) {
    console.error("SERVER FETCH ERROR:", error);
    return null;
  }
}
