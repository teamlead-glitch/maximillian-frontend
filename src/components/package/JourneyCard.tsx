import { PackageItem } from "@/types/packages"
import { PackagesResponse } from "@/types/packages";
import Image from "next/image";
import Link from "next/link";
import TagListingForSignature from "../common/TagListingForSignature";

interface Props {
    journey: PackageItem;
}

export default function JourneyCard({ journey }: Props) {
    return (
        <div className="div">
            <Link href={`/package/${journey.short_slug}`}>
                <div className="group block">
                    <div className="rounded-md relative aspect-[1/1] overflow-hidden">

                        {/* Image */}
                        <Image src={journey.image_path} className="rounded-md w-full h-full object-cover transition-transform duration-700 ease-out  group-hover:scale-110" alt={journey.title} width="600" height="600" />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t rounded-md from-black/80 via-black/40 to-transparent">
                        </div>

                        {/* Bottom Content */}
                        <div className=" absolute w-full bottom-0 left-0 p-5 flex flex-col items-center transition-transform duration-500 ease-out group-hover:-translate-y-5">
                            <h3 className="font-my-font-regular text-white text-2xl text-center line-clamp-2">
                                {journey.title}
                            </h3>

                           
                            {/* Tags: one line default, full on hover */}
                            <div className="w-full overflow-hidden max-h-5 group-hover:max-h-40 transition-all duration-500 ease-out">
                                <TagListingForSignature
                                    tags={journey.tags}
                                    region={journey.region}
                                    initialShowCount={6}
                                />
                            </div>


                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
}