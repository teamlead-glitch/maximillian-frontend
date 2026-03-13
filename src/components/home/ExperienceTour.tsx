"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { apiService } from "@/services/api";
import Loader from "../common/Loader";
import { taggroupResponse } from "@/types/taggroupTypes";
import TagCard from "@/components/tags/tagCard"
import Link from "next/link";
export default function ExperienceTour() {
    const [taggroups, setTaggroups] = useState<taggroupResponse[]>([]);
    // const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchtaggroups = async () => {
            try {
                const res = await apiService.get<taggroupResponse[]>("/tag-groups?home=1");

                if (res) {
                    setTaggroups(res || []);

                } else {
                    console.error("Failed to load tags groups");
                }

                setLoading(false);
            } finally {
                setLoading(false);
            }

        };

        fetchtaggroups();
    }, []);

    const url = ['experience-journeys', 'specialty-tours'];
    // const chunkArray = <T,>(array: T[], size: number): T[][] => {
    //   const result: T[][] = [];
    //   for (let i = 0; i < array.length; i += 3) {
    //     result.push(array.slice(i, i + 3));
    //   }
    //   return result;
    // };
    function chunkArray<T>(array: T[], size: number): T[][] {
        const result: T[][] = [];
        for (let i = 0; i < array.length; i += 3) {
            result.push(array.slice(i, i + 3));
        }
        return result;
    }

    return (
        <>
            {/* experience tour */}
            {loading ? (
                <Loader />
            ) : taggroups.length === 0 ? (
                // <p>No journeys available</p>
                <></>
            ) : (
                <>
                    {taggroups.map((group, index) => (
                        <section className="bg-white pt-15 pb-10 md:pt-10 md:py-10    xl:py-20" key={group.id}>
                            <div className="max-w-[1300px]  mx-auto px-5">
                                <div className={`flex gap-8 ${index % 2 == 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse sm:flex-col"} `} >
                                    <div className={` w-full md:w-1/4 relative mr-0 ${index % 2 == 0 ? "md:pr-10" : "md:pl-10"} `}>
                                        <h3 className={`font-my-font-regular text-3xl md:text-4xl  text-(--color-secondary) ${index % 2 == 0 ? "md:text-right" : "md:text-left"}`}>{group.title} <br /> Tours</h3>
                                        <div className={`absolute w-px h-10 bg-gray-400 md:block hidden ${index % 2 === 1 ? "left-0 top-0" : "right-0 top-0"}`}></div>
                                    </div>
                                    <div className="w-full md:w-3/4">
                                        {/* <div class="flex flex-col sm:flex-row w-full gap-5 md:gap-10 mb-4 md:mb-10"></div> */}
                                        {chunkArray(group.tags, 2).map((row, rowIndex) => (
                                            <div
                                                key={rowIndex}
                                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                                            >
                                                {row.map((item) => (
                                                    <TagCard key={item.id} tag={item} />
                                                ))}





                                            </div>

                                        ))}


                                        <Link href={`/${url[index]}`} className="group flex items-center font-my-font-semibold text-black text-sm sm:text-base  py-3 mt-3 cursor-pointer">
                                            <span className="mr-3">View All Journeys</span>

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
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </>
            )}
            {/* experience tour close */}
        </>
    )
}