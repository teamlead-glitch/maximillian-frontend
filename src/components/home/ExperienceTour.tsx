"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { apiService } from "@/services/api";
import Loader from "../common/Loader";
import { taggroupResponse } from "@/types/taggroupTypes";
import TagCard from "@/components/tags/tagCard"
export default function ExperienceTour() {
    const [taggroups, setTaggroups] = useState<taggroupResponse[]>([]);
    // const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchtaggroups = async () => {
            try{
            const res = await apiService.get<taggroupResponse[]>("/tag-groups");

            if(res) {
                setTaggroups(res || []);

            } else {
                console.error("Failed to load tags groups");
            }

            setLoading(false);
            } finally{
                setLoading(false);
            }

        };

        fetchtaggroups();
    }, []);
const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += 3) {
    result.push(array.slice(i, i + 3));
  }
  return result;
};
    return (
        <>
        {/* experience tour */}
        {loading ? (
                    <Loader />
                ) : taggroups.length === 0 ? (
                    // <p>No journeys available</p>
                    <></>
                ) : (

            <section className="bg-white py-20">
                <div className="max-w-[1300px]  mx-auto px-5">
                    { taggroups.map((group,index) => (
                         <div className={`flex gap-8 ${index %2 == 0 ? "flex-col" : "flex-col-reverse" } md:flex-row`} key={group.id}>
                             <div className="w-full md:w-1/4 relative mr-0 md:pr-10">
                                <h3 className=" font-my-font-regular text-3xl md:text-4xl  text-(--color-secondary) md:text-right">{group.title} <br /> Tours</h3>
                                <div className="absolute right-0 top-0  w-px h-10 bg-gray-400 md:block hidden"></div>
                            </div>
                            <div className="w-full md:w-3/4">
                            {/* <div class="flex flex-col sm:flex-row w-full gap-5 md:gap-10 mb-4 md:mb-10"></div> */}
                             {chunkArray(group.tags, 2).map((row, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className="flex flex-col sm:flex-row w-full gap-5 md:gap-10 mb-4 md:mb-10"
                                >
                                    {row.map((item) => (
                                    <TagCard key={item.id} tag={item} />
                                    ))}
                                </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )}
            {/* experience tour close */}
        </>
    )
}