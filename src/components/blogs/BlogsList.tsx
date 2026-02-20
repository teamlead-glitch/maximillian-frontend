"use client";

import { useEffect, useState } from "react";
import LogoCarousel from "@/components/home/LogoCarousel";
import Loader from "../common/Loader";
import BlogCard from "./BlogCard";
import { BlogsResponse } from "@/types/blogs";
import { apiService } from "@/services/api";

export default function BlogsList() {
  const [blogData, setBlogData] = useState<BlogsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);

        const res = await apiService.get<BlogsResponse>(
          "/blogs?take=50&skip=0"
        );

        setBlogData(res);
      } catch (error) {
        console.error("Blog API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return (
  <section className="pt-32 xl:pt-40 pb-20 bg-white">    
  <Loader />
  </section>
  );

  if (!blogData?.blogs?.length) {
    return (
      <section className="pt-32 pb-20 text-center">
        <h2>No blogs available</h2>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 xl:pt-40 pb-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-5">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl xl:text-5xl text-(--color-secondary)">
              Travel Insights
            </h1>
          </div>

          {/* 🔥 Alternating Layout */}
          <div className="space-y-16">
            {(() => {
              const rows: React.ReactNode[] = [];
              let index = 0;
              let useHeroRow = true; // Start with 3:1 row

              while (index < blogData.blogs.length) {
                if (useHeroRow) {
                  // ---- 3:1 Layout (2 items) ----
                  const rowItems = blogData.blogs.slice(index, index + 2);

                  rows.push(
                    <div
                      key={index}
                      className={`grid gap-10 ${
                        rowItems.length === 1
                          ? "grid-cols-1"
                          : "grid-cols-1 sm:grid-cols-[2fr_1fr]"
                      }`}
                    >
                      {/* First Blog Large */}
                      <BlogCard
                        blog={rowItems[0]}
                        variant="large"
                      />

                      {/* Second Blog Small */}
                      {rowItems[1] && (
                        <BlogCard blog={rowItems[1]} />
                      )}
                    </div>
                  );

                  index += 2;
                } else {
                  // ---- 3 Column Layout ----
                  const rowItems = blogData.blogs.slice(index, index + 3);

                  rows.push(
                    <div
                      key={index}
                      // className={`grid gap-10 ${
                      //   rowItems.length === 1
                      //     ? "grid-cols-1"
                      //     : rowItems.length === 2
                      //     ? "grid-cols-1 sm:grid-cols-2"
                      //     : "grid-cols-1 sm:grid-cols-3"
                      // }`}
                       className={`grid gap-10 grid-cols-1 sm:grid-cols-3`}
                    >
                      {rowItems.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                      ))}
                    </div>
                  );

                  index += 3;
                }

                useHeroRow = !useHeroRow; // Toggle pattern
              }

              return rows;
            })()}
          </div>
        </div>
      </section>

      <LogoCarousel />
    </>
  );
}
