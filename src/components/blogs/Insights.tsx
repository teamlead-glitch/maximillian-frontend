import { BlogType } from "@/types/blogs"
import Image from "next/image";

interface Props {
  blog: BlogType;
}

export default function InsightCard({ blog }: Props) {

  return (
    <div className="relative flex flex-col md:flex-row items-center gap-3 md:gap-10 xl:gap-20 py-15 px-5 md:p-20 xl:p-20 z-10">
      {/* BACKGROUND (70%) */}
      <div
        className="absolute inset-y-0 left-0 w-full md:w-[80%] bg-[#f7f3ef] rounded-none md:rounded-md z-0 "/>

      {/* LEFT CONTENT */}
      <div className="relative z-10 w-full md:w-1/2 pr-0 md:pr-5 py-0 md:py-0  xl:pr-20 ">
        <p className="tracking-wide  mb-4">{blog.category.title}</p>

        <h2 className="text-2xl font-my-font-semibold text-(--color-secondary) leading-snug mb-4 md:mb-6 line-clamp-2">
          {blog.title}
        </h2>

        <p className="mb-5 max-w-md line-clamp-4">
          {blog.short_description}
        </p>

        <button className="group flex items-center text-black text-sm sm:text-base font-my-font-semibold py-3 cursor-pointer  ">
          <span className="mr-3">Read More</span>
          <svg
            className="transition-transform duration-300 ease-out group-hover:translate-x-[10px]"
            width="53"
            height="8"
            viewBox="0 0 53 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M52.3536 4.03556C52.5488 3.8403 52.5488 3.52372 52.3536 3.32845L49.1716 0.146473C48.9763 -0.0487893 48.6597 -0.0487893 48.4645 0.146473C48.2692 0.341735 48.2692 0.658318 48.4645 0.85358L51.2929 3.68201L48.4645 6.51043C48.2692 6.7057 48.2692 7.02228 48.4645 7.21754C48.6597 7.4128 48.9763 7.4128 49.1716 7.21754L52.3536 4.03556ZM0 3.68201V4.18201H52V3.68201V3.18201H0V3.68201Z"
              fill="#3A3F42"
            />
          </svg>
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative z-10 w-full md:w-1/2">
        <Image
          src={blog.image_path}
          alt={blog.title}
          className="rounded-2xl object-cover shadow-2xl w-full "
          width="650"
          height="450"
        />
      </div>
    </div>
  );
}
