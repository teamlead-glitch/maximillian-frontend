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
                { taggroups.map((group,index) => (
                <section className="bg-white md:py-20 py-20 " key={group.id}>
                    <div className="max-w-[1300px]  mx-auto px-5">
                        <div className={`flex gap-8 ${index %2 == 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse sm:flex-col" } `} >
                             <div className={` w-full md:w-1/4 relative mr-0 ${index % 2 == 0 ? "md:pr-10" : "md:pl-10"} `}>
                                <h3 className={`font-my-font-regular text-3xl md:text-4xl  text-(--color-secondary) ${index % 2 == 0 ? "md:text-right" : "md:text-left"}`}>{group.title} <br /> Tours</h3>
                                <div className={`absolute w-px h-10 bg-gray-400 md:block hidden ${ index % 2 === 1 ? "left-0 top-0" : "right-0 top-0"}`}></div>
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
                    </div>
                </section>
            ))}
            </>
        )}
            {/* experience tour close */}
        </>
    )
}