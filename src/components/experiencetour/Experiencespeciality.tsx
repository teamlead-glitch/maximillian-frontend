"use client";
import { useEffect, useState, useRef, useCallback } from "react";

import BespokeJourney from "@/components/home/BespokeJourney";
import { PackagesResponse } from "@/types/packages";
import Loader from "../common/Loader";
import { apiService } from "@/services/api";
import PackageCard from "../package/PackageCard";
import LogoCarousel from "../home/LogoCarousel";

const TAKE = 15;

export default function Experiencespeciality({ type = "experience-journeys" }: { type?: string }) {

    const [packages, setPackages] = useState<PackagesResponse["packages"]>([]);
    const [loading, setLoading] = useState(true);

    const [skip, setSkip] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const observerRef = useRef<HTMLDivElement | null>(null);

    const slug =
        type === "experience-journeys" ? "experience" : "specialty";



    // Fetch packages
    const fetchPackages = async () => {
        if (!hasMore) return;

        try {
            setLoading(true);

            const res = await apiService.get<PackagesResponse>(
                `/packages?type=tag-group&slug=${slug}&take=${TAKE}&skip=${skip}`
            );

            if (res.packages.length < TAKE) {
                setHasMore(false);
            }

            setPackages((prev) => [...prev, ...res.packages]);
            setSkip((prev) => prev + TAKE);
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


    if (!loading && !packages.length) {
        return (
            <section className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center text-center text-(--color-secondary)">
                <h2>No packages available</h2>
            </section>
        );
    }



    return (

        <>
            <section className="relative pt-32  xl:pt-40  pb-20 overflow-hidden bg-white ">
                <div className="max-w-[1300px] flex mx-auto  px-5">
                    <div className="flex flex-col w-full justify-center">
                        <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-(--color-secondary) text-center ">
                            {type === "experience-journeys" ? "Experience Journeys" : "Specialty Tours"}</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-15 mt-10 lg:mt-20">

                            {packages.map((pckge) =>

                                <PackageCard key={pckge.id} details={pckge} />
                            )}


                        </div>

                        {/* Loader Trigger */}
                        <div ref={observerRef} className="h-10 flex justify-center mt-10">
                            {loading && <Loader />}
                        </div>

                    </div>
                </div>
            </section>
            <BespokeJourney />
            <LogoCarousel />


        </>
    );
}