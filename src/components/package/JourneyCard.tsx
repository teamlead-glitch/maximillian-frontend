import { journeyResponse } from "@/types/journeyTypes";
import Image from "next/image";

interface Props {
  journey: journeyResponse;
}

export default function JourneyCard({ journey  }: Props) {
    return (
    <div className="div">
        <a href="" className="group block">
            <div className="rounded-md relative aspect-[3/4] overflow-hidden">

                {/* Image */}
                <img src={journey.image_path} className="rounded-md w-full h-full object-cover transition-transform duration-700 ease-out  group-hover:scale-110" alt={journey.title} />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t rounded-md from-black/80 via-black/40 to-transparent">
                </div>

                {/* Bottom Content */}
                <div className=" absolute w-full bottom-0 left-0 p-5 flex flex-col items-center transition-transform duration-500 ease-out group-hover:-translate-y-5">
                    <h3 className="font-my-font-regular text-white text-2xl">
                        {journey.title}
                    </h3>

                    <div className="text-white text-xs">
                        <ul className="flex flex-wrap justify-center items-center gap-2 mt-1">
                            <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                                {journey.region.title}
                            </li>

                            {journey.tags.map((tag,index) => (
                                <li
                                    key={tag.id}
                                    className={
                                    index !== journey.tags.length - 1
                                        ? "relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white"
                                        : "relative"
                                    }
                                >
                                    {tag.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </a>
    </div>
    );
}