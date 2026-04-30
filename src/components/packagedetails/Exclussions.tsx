"use client";
import { useState, useEffect } from "react";
import { InclusionExclusion } from "@/types/PackageDetailsType";
import { CircleArrowRight } from "lucide-react";

export default function Exclussions({ excludes }: { excludes: InclusionExclusion[] }) {

    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile screen
    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // Apply limit only on mobile
    const visibleItems = isMobile && !showAll
        ? excludes.slice(0, 2)
        : excludes;

    return (
        <section className="bg-white pt-10 pb-10 md:py-5 px-5 mt-0">
            <div className="max-w-[1300px] mx-auto flex flex-col items-end">

                <div className="w-full">

                    {/* Header */}
                    <div className="grid grid-cols-1 md:grid-cols-[25%_75%] lg:grid-cols-[15%_85%] w-full  py-0 md:py-5">

                        <div className="flex  gap-4">
                            <h3 className="font-my-font-regular text-3xl md:text-4xl text-(--color-secondary)">
                                Exclusions
                            </h3>
                            <div className="w-px h-10 bg-gray-300 hidden lg:block"></div>
                        </div>
                        <div><div className="w-full md:w-[200px]">
                            <p>What’s not included by default in your journey.</p>
                        </div>
                            <div className="w-full mt-5 md:mt-10">
                                {/* bulletpoint */}
                                <div className="w-full">
                                    <ul className=" gap-5 flex flex-wrap">

                                        {excludes?.map((item) => (
                                            <li className="flex items-start gap-2 text-(--color-secondary)">
                                                <CircleArrowRight className="mt-1 w-4 h-4 text-secondary flex-shrink-0" />
                                                <span>{item.title}</span>
                                                {/* <span>{item.title}</span> */}
                                            </li>
                                        ))}


                                    </ul>
                                </div>
                                {/* bulletpoint */}
                            </div>

                        </div>


                    </div>






                    {/* List */}
                    {/* {visibleItems?.map((item) => (
                        <div key={item.id} className="w-full flex flex-col md:flex-row mb-3">

                            <div className="w-full md:w-1/4">
                                <h5 className="text-base font-bold text-(--color-secondary)">
                                    {item.title}
                                </h5>
                            </div>
                            <div className="w-full md:w-3/4">
                                <p>{item.short_description}</p>
                            </div>
                        </div>
                    ))} */}

                    {/* Show More Button (mobile only) */}
                    {/* {isMobile && excludes.length > 2 && (
                        <div className="mt-3 text-center">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="text-(--color-secondary) underline"
                            >
                                {showAll ? "Show Less" : "Show More"}
                            </button>
                        </div>
                    )} */}

                </div>
            </div>
        </section>
    );
}