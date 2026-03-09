"use client";

import { PackageItem } from "@/types/packages";
import Image from "next/image";
import Link from "next/link";
import TagListing from "../common/TagListing";

export default function PackageCard({ details }: { details: PackageItem }) {

    return (

        <div className="py-3 group">
            <div className="rounded-md w-full aspect-square relative overflow-hidden">
                <Link href={`/${details.slug}`}>
                    <Image fill src={details.image_path} alt="" className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-lg font-my-font-semibold text-center">{details.days} Days</p>
                    </div>
                </Link>
            </div>
            <div className=" px-0 md:px-5  py-5">
                <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                    {details.countries.map((country, index) => (
                        <Link href={`/${country.slug}`} key={country.id}>
                            <li

                                className={`relative text-[#818c94] ${index !== details.countries.length - 1
                                    ? "pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#818c94]"
                                    : ""
                                    }`}
                            >
                                {country.title}
                            </li>
                        </Link>
                    ))}
                </ul>
                <Link href={`/${details.slug}`}><h4 className="text-(--color-secondary) font-my-font-semibold text-xl md:text-2xl text-center py-2 line-clamp-2">{details.title}</h4></Link>
                {/* <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                    {details.tags.map((tag, index) => (
                        <Link href={`/${tag.slug}`} key={tag.id}>
                            <li className="flex items-center text-(--color-secondary)">
                                {tag.title}
                                {index !== details.tags.length - 1 && (
                                    <span className="mx-3">⬥</span>
                                )}
                            </li>
                        </Link>
                    ))}
                </ul> */}

                <TagListing
                    tags={details.tags}
                />

            </div>
        </div>
    )
}