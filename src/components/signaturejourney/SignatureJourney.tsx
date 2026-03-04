"use client";
import { useEffect, useState, useRef, useCallback } from "react";

import BespokeJourney from "@/components/home/BespokeJourney";
import { PackageItem } from "@/types/packages";
import Loader from "../common/Loader";
import { apiService } from "@/services/api";
import PackageCard from "../package/PackageCard";

const TAKE = 15;

export default function Experiencespeciality({ type = "experience-journeys" }: { type?: string }) {

    const [packages, setPackages] = useState<PackageItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    const observerRef = useRef<HTMLDivElement | null>(null);

    const slug =
        type === "experience-journeys" ? "experience" : "specialty";



    // Fetch packages
    const fetchPackages = async () => {
        if (!hasMore) return;

        try {
            setLoading(true);

            const res = await apiService.get<PackageItem>(
                `/signature-packages`
            );



            setPackages(res || []);

        } catch (error) {
            console.error("packages API error:", error);
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    };

    // Initial Load
    useEffect(() => {
        fetchPackages();
    }, []);

    // Infinite Scroll Observer
    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {

            const target = entries[0];
            if (target.isIntersecting && !loading) {
                //alert(1)
                fetchPackages();
            }
        },
        [loading]
    );

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "200px",
            threshold: 0,
        };

        const observer = new IntersectionObserver(handleObserver, option);

        if (observerRef.current) observer.observe(observerRef.current);

        return () => observer.disconnect();
    }, [handleObserver]);






    return (

        <>
            <section className="relative pt-32  xl:pt-40  pb-20 overflow-hidden bg-white ">
                <div className="max-w-[1300px] flex mx-auto  px-5">
                    <div className="flex flex-col w-full justify-center">
                        <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-(--color-secondary) text-center ">Signature Journeys</h1>


                            { (!loading && !packages.length)  ? (
                                     <h2 className="text-center mt-20">No packages available</h2>

                                ) :
                                (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-15 mt-10 lg:mt-20">
                                    { packages.map((pckge) =>

                                <PackageCard key={pckge.id} details={pckge} />

                            )}
                            </div>
                        )
                        }




                        {/* Loader Trigger */}
                        <div ref={observerRef} className="h-10 flex justify-center mt-10">
                            {loading && <Loader />}
                        </div>

                    </div>
                </div>
            </section>
            <BespokeJourney />


        </>
    );
}