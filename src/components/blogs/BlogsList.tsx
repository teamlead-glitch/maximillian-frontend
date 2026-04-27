"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import LogoCarousel from "@/components/home/LogoCarousel";
import Loader from "../common/Loader";
import BlogCard from "./BlogCard";
import { BlogsResponse } from "@/types/blogs";
import { apiService } from "@/services/api";
import BlogTabs from "./BlogTabs";
import { BlogCategory } from "@/types/blogs";

const TAKE = 5;

export default function BlogsList({categories, slug = 'All Blogs'}:{categories:BlogCategory[]; slug?:string}) {
  const [blogs, setBlogs] = useState<BlogsResponse["blogs"]>([]);
  const [loading, setLoading] = useState(true);

  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const [catId, setCatId] = useState<string|number>('');

  const slugToTitle = (slug: string) =>
  slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

 

  // ✅ Fetch blogs
  const fetchBlogs = async () => {
    if (!hasMore) return;

    try {
      setLoading(true);

      const res = await apiService.get<BlogsResponse>(
        `/blogs?take=${TAKE}&skip=${skip}&category_id=${(slug != 'All Blogs') ? slug : ''}`
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
  // if (!loading && !blogs.length) {
  //   return (
  //     <section className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center text-center">
  //       <h2>No blogs available</h2>
  //     </section>
  //   );
  // }

  return (
    <>
      <section className="pt-20 md:pt-30 xl:pt-28 pb-20 bg-white">
       
       <BlogTabs categories={categories} setCatId={setCatId}/>

        <div className="max-w-[1300px] pt-10 mx-auto px-5">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-(--color-secondary)">
              {slugToTitle(slug)}
            </h1>
          </div>


{(!loading && !blogs.length) ? (
   <section className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center text-center">
        <h2>No blogs available</h2>
      </section>

) :(
<>
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
          </>
)}
        </div>
      </section>

      <LogoCarousel />
    </>
  );
}