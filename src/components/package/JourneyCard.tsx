import { PackageItem } from "@/types/packages"
import { PackagesResponse } from "@/types/packages";
import Image from "next/image";
import Link from "next/link";

interface Props {
    journey: PackageItem;
}

export default function JourneyCard({ journey }: Props) {
    return (
        <div className="div">
            <Link href={`/package/${journey.short_slug}`} className="group block">
                <div className="rounded-md relative aspect-[3/4] overflow-hidden">

                    {/* Image */}
                    <Image src={journey.image_path} className="rounded-md w-full h-full object-cover transition-transform duration-700 ease-out  group-hover:scale-110" alt={journey.title} width="600" height="600"/>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t rounded-md from-black/80 via-black/40 to-transparent">
                    </div>

                    {/* Bottom Content */}
                    <div className=" absolute w-full bottom-0 left-0 p-5 flex flex-col items-center transition-transform duration-500 ease-out group-hover:-translate-y-5">
                        <h3 className="font-my-font-regular text-white text-2xl text-center">
                            {journey.title}
                        </h3>

                        <div className="text-white text-xs">
                            <ul className="flex flex-wrap justify-center items-center gap-2 mt-1">
                                <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                                    <Link href={`/region/${journey.region.short_slug}`}>{journey.region.title}</Link>
                                </li>

                                {journey.tags.map((tag, index) => (
                                    <li
                                        key={tag.id}
                                        className={
                                            index !== journey.tags.length - 1
                                                ? "relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white"
                                                : "relative"
                                        }
                                    >
                                        <Link href={`/tag/${tag.short_slug}`}>{tag.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    );
}