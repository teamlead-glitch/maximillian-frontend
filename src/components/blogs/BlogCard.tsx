"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogType } from "@/types/blogs";
import { formatLongDate } from "@/utils/formatDate";
import TagListingForSignature from "../common/TagListingForSignature";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade  } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

type Props = {
  blog: BlogType;
  variant?: "large" | "default";
};

export default function BlogCard({
  blog,
  variant = "default",
}: Props) {
  return (
    <Link href={`/blogs/${blog.short_slug}`}>   <div className="group flex flex-col">
      {/* IMAGE */}


      <div
        className={`relative overflow-hidden rounded-lg ${variant === "large"
          ? "aspect-[2/1]"
          : "aspect-square"
          }`}
      >



        {blog?.image_path && (

          <Image
            src={blog.image_path}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={variant === "large"}
          />

        )}

        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
  <div
    className="
      flex flex-col items-center gap-1
      translate-y-0
      md:translate-y-[40%]
      md:group-hover:translate-y-0
      transition-all duration-500 ease-out
    "
  >
    
    {/* ⏱ Estimated Time */}
    {blog.estimated_time && (
      <p className="text-white text-sm md:text-lg text-center">
        {blog.estimated_time} min read
      </p>
    )}

    {/* ✅ Swiper INSIDE (mobile only) */}
    <div className="md:hidden mt-1 w-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        speed={800}
        className="h-[28px] flex items-center justify-center"
      >
        {blog.tags?.map((item, i) => {
          const href = item.slug;
          return (
            <SwiperSlide key={i}>
              <Link href={href} className="text-sm text-white text-center block">
                {item.title}
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>

    {/* 💻 Tags (hover on desktop, always visible on mobile) */}
    <div className="hidden md:block opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500 delay-100">
      <TagListingForSignature
        tags={blog.tags}
        countries={blog.countries}
        region={blog.region}
        initialShowCount={6}
      />
    </div>

  </div>
</div>



      </div>

      {/* CONTENT */}
      <div className="pt-5 flex flex-col flex-grow">

        <h3
          className="font-my-font-semibold text-break  text-xl md:text-2xl text-(--color-secondary)  line-clamp-2"
        >
          {blog.title}
        </h3>



     

        {/* Tags */}
        {/* {(blog.tags?.length > 0 || blog.countries.length >0 || blog.region) && (
          <ul className="flex flex-wrap items-center text-sm gap-2 mt-3">
            {blog.tags.map((tag, index) => (
              <Link href={`/${tag.slug}`}>
              <li
                key={tag.id}
                className={`relative text-(--color-secondary) ${(index !== blog.tags.length - 1 || blog.countries.length >0 || blog.region )
                    ? "pr-5 after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2"
                    : ""
                  }`}
              >
                {tag.title}
              </li>
              </Link>
            ))}


            {blog.countries.map((country, index) => (
              <Link href={`/${country.slug}`}>
              <li
                key={country.id}
                className={`relative text-(--color-secondary) ${(index !== blog.countries.length - 1 || blog.region)
                    ? "pr-5 after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2"
                    : ""
                  }`}
              >
                {country.title}
              </li>
              </Link>
            ))}
{blog.region &&
            <Link href={`/${blog.region.slug}`}>
              <li
                key={blog.region.slug}
                className={`relative text-(--color-secondary)`}
              >
                {blog.region.title}
              </li>
              </Link>}
          </ul>
        )} */}

        {/* Tags ends*/}

        {/* <p className="text-sm text-gray-500 mt-2">
          {formatLongDate(blog.created_at)}
        </p> */}
      </div>
    </div > </Link>
  );
}
