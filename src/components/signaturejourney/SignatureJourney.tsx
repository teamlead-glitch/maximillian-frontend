"use client";
import { useEffect, useState, useRef } from "react";

import BespokeJourney from "@/components/home/BespokeJourney";
import { PackagesResponse } from "@/types/packages";
import Loader from "../common/Loader";
import { apiService } from "@/services/api";
import PackageCard from "../package/PackageCard";



export default function Experiencespeciality() {

    const [packages, setPackages] = useState<PackagesResponse["packages"]>([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    const observerRef = useRef<HTMLDivElement | null>(null);





    // Fetch packages
    const fetchPackages = async () => {
        if (!hasMore) return;

        try {
            setLoading(true);

            const res = await apiService.get<PackagesResponse>(
                `/signature-packages`
            );

            setPackages(res.packages);

        } catch (error) {
            console.error("packages API error:", error);
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchPackages();
    }, []);

    return (

        <>
            <section className="relative pt-32  xl:pt-40  pb-20 overflow-hidden bg-white ">
                <div className="max-w-[1300px] flex mx-auto  px-5">
                    <div className="flex flex-col w-full justify-center">
                        <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-(--color-secondary) text-center ">Signature Journeys</h1>


                            { (!loading && !packages?.length)  ? (
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