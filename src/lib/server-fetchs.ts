import { API_CONFIG } from "@/constants/config";

export async function getRegions() {
  try {
    const res = await fetch(`${API_CONFIG.BASE_URL}/menu/`, {
      next: { revalidate: 3600 }, // ISR – cache for 1 hour
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
