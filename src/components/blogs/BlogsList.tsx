"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import LogoCarousel from "@/components/home/LogoCarousel";
import Loader from "../common/Loader";
import BlogCard from "./BlogCard";
import { BlogsResponse } from "@/types/blogs";
import { apiService } from "@/services/api";

const TAKE = 5;

export default function BlogsList() {
  const [blogs, setBlogs] = useState<BlogsResponse["blogs"]>([]);
  const [loading, setLoading] = useState(true);

  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  // ✅ Sticky Tabs
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [tabsOffset, setTabsOffset] = useState(0);

  // ✅ Get original position ONCE
  useEffect(() => {
    if (tabsRef.current) {
      setTabsOffset(tabsRef.current.offsetTop);
    }
  }, []);

  // ✅ Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= tabsOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabsOffset]);

  // ✅ Fetch blogs
  const fetchBlogs = async () => {
    if (!hasMore) return;

    try {
      setLoading(true);

      const res = await apiService.get<BlogsResponse>(
        `/blogs?take=${TAKE}&skip=${skip}`
      );

      if (res.blogs.length < TAKE) {
        setHasMore(false);
      }

      setBlogs((prev) => [...prev, ...res.blogs]);
      setSkip((prev) => prev + TAKE);
    } catch (error) {
      console.error("Blog API error:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Initial load
  useEffect(() => {
    fetchBlogs();
  }, []);

  // ✅ Infinite scroll
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];

      if (target.isIntersecting && !loading) {
        fetchBlogs();
      }
    },
    [loading]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "200px",
      threshold: 0,
    });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [handleObserver]);

  // ✅ Empty state
  if (!loading && !blogs.length) {
    return (
      <section className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center text-center">
        <h2>No blogs available</h2>
      </section>
    );
  }

  return (
    <>
      <section className="pt-20 md:pt-30 xl:pt-28 pb-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-5 ">
          {/* ✅ Spacer to prevent jump */}
          {isSticky && <div className="h-[70px]" />}

          {/* ✅ Tabs */}
          <div
            ref={tabsRef}
            className={`
    flex items-center gap-6 px-2

    overflow-x-auto whitespace-nowrap no-scrollbar scroll-smooth
    [@media(min-width:576px)]:overflow-visible
    [@media(min-width:576px)]:flex-wrap
    [@media(min-width:576px)]:justify-center

    md:gap-28

    bg-white z-45 transition-all duration-300

    ${isSticky
                ? "fixed top-0 left-0 right-0 border-b border-gray-200 py-2"
                : "relative"}
  `}
          >
            <a
              href="#"
              className="font-my-font-semibold text-(--color-secondary) text-base cursor-pointer pb-1 border-b-2 border-[#c43131]"
            >
              Travel Stories
            </a>

            <a
              href="#"
              className="font-my-font-semibold text-(--color-secondary) text-base cursor-pointer pb-1 border-b-2 border-transparent hover:border-red-300"
            >
              Travel Insights
            </a>

            <a
              href="#"
              className="font-my-font-semibold text-(--color-secondary) text-base cursor-pointer pb-1 border-b-2 border-transparent hover:border-red-300"
            >
              Travel News
            </a>

            <a
              href="#"
              className="font-my-font-semibold text-(--color-secondary) text-base cursor-pointer pb-1 border-b-2 border-transparent hover:border-red-300"
            >
              Articles
            </a>
          </div>
        </div>

        <div className="max-w-[1300px] pt-10 mx-auto px-5">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-(--color-secondary)">
              Travel Insights
            </h1>
          </div>

          {/* Blog Layout */}
          <div className="space-y-16">
            {(() => {
              const rows: React.ReactNode[] = [];
              let index = 0;
              let useHeroRow = true;

              while (index < blogs.length) {
                if (useHeroRow) {
                  const rowItems = blogs.slice(index, index + 2);
                  const isReversed = Math.floor(index / 5) % 2 === 1;

                  rows.push(
                    <div
                      key={index}
                      className={`grid gap-10 ${rowItems.length === 1
                        ? "grid-cols-1"
                        : isReversed
                          ? "grid-cols-1 sm:grid-cols-[1fr_2fr]"
                          : "grid-cols-1 sm:grid-cols-[2fr_1fr]"
                        }`}
                    >
                      {rowItems.length === 1 && (
                        <BlogCard blog={rowItems[0]} variant="large" />
                      )}

                      {rowItems.length === 2 && (
                        <>
                          {isReversed ? (
                            <>
                              <BlogCard blog={rowItems[1]} />
                              <BlogCard
                                blog={rowItems[0]}
                                variant="large"
                              />
                            </>
                          ) : (
                            <>
                              <BlogCard
                                blog={rowItems[0]}
                                variant="large"
                              />
                              <BlogCard blog={rowItems[1]} />
                            </>
                          )}
                        </>
                      )}
                    </div>
                  );

                  index += 2;
                } else {
                  const rowItems = blogs.slice(index, index + 3);

                  rows.push(
                    <div
                      key={index}
                      className="grid gap-10 grid-cols-1 sm:grid-cols-3"
                    >
                      {rowItems.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                      ))}
                    </div>
                  );

                  index += 3;
                }

                useHeroRow = !useHeroRow;
              }

              return rows;
            })()}
          </div>

          {/* Loader */}
          <div ref={observerRef} className="h-10 flex justify-center mt-10">
            {loading && <Loader />}
          </div>
        </div>
      </section>

      <LogoCarousel />
    </>
  );
}