"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { apiService } from "@/services/api";
import Loader from "../common/Loader";
import { taggroupResponse } from "@/types/taggtoupTypes";

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
                    { taggroups.map((group) => (
                        <>
                        <div className="flex gap-8 flex-col md:flex-row">
                            <div className="w-full md:w-1/4 relative mr-0 md:pr-10"><h3 className=" font-my-font-regular text-3xl md:text-4xl  text-(--color-secondary) md:text-right">{ group.title } <br /> Tours</h3>  <div className="absolute right-0 top-0  w-px h-10 bg-gray-400 md:block hidden"></div></div>
                            <div className="w-full md:w-3/4">

                                <div className="flex flex-col sm:flex-row w-full gap-5 md:gap-10 mb-4 md:mb-10">
                                    <a href="" className="group block w-full sm:w-1/2 py-3">
                                        <div className="pb-5">
                                            <Image
                                                src="images/experience-tour-icon1.svg"
                                                alt="Cultural Journeys"
                                                className="transition-transform duration-500 group-hover:translate-x-[10px] w-[45px] h-[45px]"
                                            />
                                        </div>
                                        <h4 className="text-1xl font-my-font-semibold text-black">Cultural Journeys</h4>
                                        <p className="text-(--color-secondary)">Immersive experiences rooted in history, art, and local traditions.</p>
                                    </a>
                                </div>

                            </div>
                        </div>
                        </>
                    )
                )}
                </div>
            </section>
        )}
            {/* experience tour close */}
        </>
    )
}