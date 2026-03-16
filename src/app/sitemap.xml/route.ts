import { NextResponse } from "next/server";
import { API_CONFIG } from "@/constants/config";

export async function GET() {
  try {
    const res = await fetch(
      `${API_CONFIG.BASE_URL}/sitemap`,
      {
        headers: {
          Accept: "application/xml",
        },
        cache: "no-store", // always fresh
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch sitemap");
    }

    const xml = await res.text();

    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    return new NextResponse(
      `<?xml version="1.0" encoding="UTF-8"?>
       <error>Sitemap unavailable</error>`,
      { status: 500 }
    );
  }
}
