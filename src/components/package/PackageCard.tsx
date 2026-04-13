"use client";

import { PackageItem } from "@/types/packages";
import Image from "next/image";
import Link from "next/link";
import TagListingForSignature from "../common/TagListingForSignature";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function PackageCard({ details }: { details: PackageItem }) {
  return (
    <div className="py-3 group">
      
      {/* Image Section */}
      <div className="rounded-md w-full aspect-square relative overflow-hidden">
        <Link href={`/${details.slug}`}>
          
          {/* Image */}
          <Image
            fill
            src={details.image_path}
            alt=""
            className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>

          {/* 🔥 Animated Content (Days + Tags together) */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10 overflow-hidden">
            
            <div
              className="flex flex-col items-center gap-2
              translate-y-[40%]
              group-hover:translate-y-0
              transition-all duration-500 ease-out"
            >
              
              {/* Days */}
              <p className="text-white text-lg font-my-font-semibold text-center">
                {details.days} Days
              </p>

              {/* Tags */}
              <div className="opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                <TagListingForSignature tags={details.tags} />
              </div>

            </div>

          </div>

        </Link>
      </div>

      {/* Bottom Content */}
      <div className="px-0 md:px-5 py-5">
        
        {/* Countries */}
        <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
          {details.countries.map((country, index) => (
            <Link href={`/${country.slug}`} key={country.id}>
              <li
                className={`relative text-[#818c94] ${
                  index !== details.countries.length - 1
                    ? "pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#818c94]"
                    : ""
                }`}
              >
                {country.title}
              </li>
            </Link>
          ))}
        </ul>

        {/* Title */}
        <Link href={`/${details.slug}`}>
          <h4 className="text-(--color-secondary) font-my-font-semibold text-xl md:text-2xl text-center py-2 line-clamp-2">
            {details.title}
          </h4>
        </Link>

        <div className="md:hidden mt-1">
  <Swiper
  modules={[Autoplay]}
  direction="horizontal"
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 2200,
    disableOnInteraction: true,
  }}
  className="h-6"
>
  {details.tags?.map((item, i) => {
    const href =
      item.type === "region"
        ? `/region/${item.short_slug}`
        : `/tag/${item.short_slug}`;

    return (
      <SwiperSlide key={i}>
        <Link href={href} className="text-sm text-black-500 text-center block">
          {item.title}
        </Link>
      </SwiperSlide>
    );
  })}
</Swiper>
</div>

      </div>
    </div>
  );
}