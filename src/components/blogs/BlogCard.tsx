"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogType } from "@/types/blogs";
import { formatLongDate } from "@/utils/formatDate";

type Props = {
  blog: BlogType;
  variant?: "large" | "default";
};

export default function BlogCard({
  blog,
  variant = "default",
}: Props) {
  return (
    <div className="group flex flex-col">
      {/* IMAGE */}
      <div
        className={`relative overflow-hidden rounded-lg ${variant === "large"
            ? "aspect-[2/1]"
            : "aspect-square"
          }`}
      >
        {blog?.image_path && (
          <Link href={`/${blog.slug}`}>
            <Image
              src={blog.image_path}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority={variant === "large"}
            />
          </Link>
        )}

        <div className="absolute bottom-0 left-0 right-2 p-4 ">
                                    <div className="absolute bottom-0 left-0 right-2 p-4 ">
                                        <p className="text-white text-sm md:text-lg  text-right">4 min read</p>
                                    </div>
                                </div>

        
      </div>

      {/* CONTENT */}
      <div className="pt-5 flex flex-col flex-grow">
        <Link href={`/${blog.slug}`}>
          <h3
            className={`font-my-font-semibold text-break text-(--color-secondary)  line-clamp-2 ${variant === "large"
                ? "text-2xl md:text-3xl"
                : "text-lg md:text-xl"
              }`}
          >
            {blog.title}
          </h3>
        </Link>

        {/* Tags */}
        {blog.tags?.length > 0 && (
          <ul className="flex flex-wrap items-center text-sm gap-2 mt-3">
            {blog.tags.map((tag, index) => (
              <li
                key={tag.id}
                className={`relative text-(--color-secondary) ${index !== blog.tags.length - 1
                    ? "pr-5 after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2"
                    : ""
                  }`}
              >
                {tag.title}
              </li>
            ))}
          </ul>
        )}

        {/* <p className="text-sm text-gray-500 mt-2">
          {formatLongDate(blog.created_at)}
        </p> */}
      </div>
    </div>
  );
}
