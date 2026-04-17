"use client";
import { useState, useEffect } from "react";
import { InclusionExclusion } from "@/types/PackageDetailsType";

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
        ? includes.slice(0, 2)
        : includes;

    return (
        <section className="bg-white py-10 px-5">
            <div className="max-w-[1300px] mx-auto">
                <div className="w-full">
                    <div className="flex flex-col lg:flex-row  w-full gap-2 lg:gap-8 py-0 md:py-5 ">
                        <div className="inline-block">
                            <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) "> Inclusions</h3></div>
                        <div className="w-px h-10 bg-gray-300 hidden lg:block"></div>
                        <div className="w-full md:w-[200px]"><p>What’s included by default in your journey.</p></div>
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
                <div className="w-full  md:mt-5 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-3 mt-5">
                        {visibleItems.map((item) => (
                            <div key={item.id}>
                                <h3 className="flex items-center gap-2 text-base md:text-lg text-(--color-secondary)  pb-3">

                                    {/* Image Icon */}
                                    <img
                                        src="/images/alpine -ail-journey.png"
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
                    {isMobile && includes.length > 2 && (
                        <div className="mt-4 text-center">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="text-(--color-secondary) font-my-font-semibold underline cursor-pointer"
                            >
                                {showAll ? "Show Less" : "Show More"}
                            </button>
                        </div>
                    )}

                </div></div>
        </section>
    );
}