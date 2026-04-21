"use client";
import { useState, useEffect } from "react";
import { InclusionExclusion } from "@/types/PackageDetailsType";
import Image from "next/image";

export default function Inclussions({ includes }: { includes: InclusionExclusion[] }) {

    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // Apply slice ONLY for mobile
    const visibleItems = isMobile && !showAll
        ? includes//includes.slice(0, 2)
        : includes;

    return (
        <section className="bg-white pb-5 py-15  md:pb-10 md:py-20 xl:pb-15  xl:py-30 px-5">
            <div className="max-w-[1300px] mx-auto">
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[25%_75%] lg:grid-cols-[15%_85%] w-full gap-4 lg:gap-8 py-0 md:py-5">


                        <div className="flex  gap-4">
                            <h3 className="font-my-font-regular text-3xl md:text-4xl text-(--color-secondary)">
                                Inclusions
                            </h3>
                            <div className="w-px h-10 bg-gray-300 hidden lg:block"></div>
                        </div>

                        {/* RIGHT (70%) */}
                        <div>
                            <div className="w-full md:w-[200px]"> <p>What’s included by default in your journey.</p></div>


                            <div className="w-full mt-5 md:mt-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-0 ">
                                    {visibleItems.map((item) => (
                                        <div key={item.id}>
                                            <h3 className="flex items-center gap-2 text-base  text-(--color-secondary)  pb-4">

                                                {/* Image Icon */}
                                                <Image
                                                    width={8}
                                                    height={8}
                                                    src={item.icon}
                                                    alt="icon"
                                                    className="w-8 h-8 pr-2 object-contain"
                                                />

                                                {item.title}
                                            </h3>
                                            {/* <p>{item.short_description}</p> */}
                                        </div>
                                    ))}
                                </div>

                                {/* Button only on mobile */}
                                {false && isMobile && includes.length > 2 && (
                                    <div className="mt-4 text-center">
                                        <button
                                            onClick={() => setShowAll(!showAll)}
                                            className="text-(--color-secondary) font-my-font-semibold underline cursor-pointer"
                                        >
                                            {showAll ? "Show Less" : "Show More"}
                                        </button>
                                    </div>
                                )}

                            </div>

                        </div>

                    </div>

                </div>
                {/* Header */}
                {/* <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <h3 className="text-3xl md:text-4xl text-(--color-secondary)">
                        Inclusions
                    </h3>
                    <p>What’s included by default in your journey.</p>
                </div> */}

                {/* Content */}
            </div>
        </section>
    );
}