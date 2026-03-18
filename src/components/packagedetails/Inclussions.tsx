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

                {/* Header */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <h3 className="text-3xl md:text-4xl text-(--color-secondary)">
                        Inclusions
                    </h3>
                    <p>What’s included by default in your journey.</p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 mt-5">
                    {visibleItems.map((item) => (
                        <div key={item.id}>
                            <h3 className="text-xl text-(--color-secondary)">
                                {item.title}
                            </h3>
                            <p>{item.short_description}</p>
                        </div>
                    ))}
                </div>

                {/* Button only on mobile */}
                {isMobile && includes.length > 2 && (
                    <div className="mt-4 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-(--color-secondary) underline"
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}