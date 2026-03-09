"use client";

import { CheckCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { PageResponse } from "@/types/pagesTypes";
import NotFound from "../not-found";


export default function DynamicPageClient({
  page
}: {
  page: PageResponse
}) {






  if (!page) {
    return <NotFound />; // ✅ NO redirect, default UI
  }

  return (
    <>


      {/* HEADER */}
      <section
        className="relative py-40 bg-black bg-cover bg-center"
        style={{
          backgroundImage: `url(${page?.banner_image ?? "/images/inner-bg.jpg"})`,
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <h1 className="relative z-10 text-center text-white text-4xl font-my-font-semibold">
          {page?.title}
        </h1>
      </section>



      {/* CONTENT */}
      <section className="relative py-20 bg-white ">

        <div className="max-w-[1300px] mx-auto px-5 space-y-3">

          <div className="detail_breadcrumps py-3">
            <div className="container">
              <nav className="flex flex-wrap items-center space-x-2 text-sm text-(--color-secondary)">
                <Link
                  href="/"
                  className="text-(--color-secondary)  transition-colors duration-200 no-underline font-light hover:text-[#c43131]"
                >
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-(--color-secondary) font-medium">
                  {page?.title}
                </span>
              </nav>
            </div>
          </div>

          <div
            className="content"
            style={{ minHeight: "150px" }}
            dangerouslySetInnerHTML={{ __html: page?.content ?? '' }}
          />

        </div>

      </section >








    </>
  );
}
