import { tagResponse } from "@/types/TagTypes";
import Image from "next/image";
import Link from "next/link";

interface Props {
  tag: tagResponse;
}

export default function TagCard({ tag }: Props) {

  return (
    <Link href={`/tag/${tag.short_slug}`} className="group block w-full sm:w-1/2 py-2  md:py-3">
      <div className=" pb-3 md:pb-5">
        <img src={tag.icon} alt={tag.title} className="transition-transform duration-500 group-hover:translate-x-[10px] w-[45px] h-[45px]" />
      </div>
      <h4 className="text-1xl font-my-font-semibold text-black">{tag.title}</h4>
      <p className="text-(--color-secondary)">{tag.short_description}</p>
    </Link>
  );
}