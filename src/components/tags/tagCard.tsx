import { tagResponse } from "@/types/TagTypes";
import Image from "next/image";

interface Props {
  tag: tagResponse;
}

export default function TagCard({ tag  }: Props) {

    return (
      <a href="" className="group block w-full sm:w-1/2 py-3">
          <div className="pb-5">
              <img src={tag.icon} alt={ tag.title } className="transition-transform duration-500 group-hover:translate-x-[10px] w-[45px] h-[45px]" />
          </div>
          <h4 className="text-1xl font-my-font-semibold text-black">{ tag.title }</h4>
          <p className="text-(--color-secondary)">{ tag.short_description }</p>
      </a>
    );
}