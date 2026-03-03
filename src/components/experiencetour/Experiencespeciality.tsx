"use client";
import { useEffect, useState, useRef, useCallback } from "react";

import BespokeJourney from "@/components/home/BespokeJourney";
import { PackagesResponse } from "@/types/packages";
import Loader from "../common/Loader";
import { apiService } from "@/services/api";
import PackageCard from "../package/PackageCard";

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
            <section className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center text-center">
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
<<<<<<< HEAD
                            <div className="py-3 group">
                                <div className="rounded-md w-full aspect-square relative overflow-hidden">
                                    <a href="">
                                        <img src="images/expeience-img-1.png" alt="" className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <p className="text-white text-lg font-my-font-semibold text-center">08 days</p>
                                        </div>
                                    </a>
                                </div>
                                <div className=" px-0 md:px-5  py-5">
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-3 text-[#818c94] after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#818c94]">
                                            Laos
                                        </li>
                                        <li className="relative text-[#818c94]">
                                            Cambodia
                                        </li>
                                    </ul>
                                    <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-lg md:text-xl text-center py-2 line-clamp-2">A Mesmerizing Journey Across Cambodia</h4></a>
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Cultural
                                        </li>
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Small Group
                                        </li>
                                        <li className="relative text-(--color-secondary)">
                                            +2 more
                                        </li>
                                    </ul>
=======
>>>>>>> 08252a802ad618db84c535e91f030cc5a797f100

                            {packages.map((pckge) =>

<<<<<<< HEAD
                                <div className=" px-0 md:px-5  py-5">
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-3 text-[#818c94] after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#818c94]">
                                            Madyapradesh
                                        </li>
                                        <li className="relative text-[#818c94]">
                                            India
                                        </li>
                                    </ul>
                                    <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-lg md:text-xl text-center py-2 line-clamp-2">A Mesmerizing Journey Across Cambodia</h4></a>
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Cultural
                                        </li>
                                        <li className="relative text-(--color-secondary)">
                                            Small Group
                                        </li>
                                    </ul>
=======
                                <PackageCard key={pckge.id} details={pckge} />
                            )}
>>>>>>> 08252a802ad618db84c535e91f030cc5a797f100


<<<<<<< HEAD
                                        <p className="text-white text-lg font-my-font-semibold text-center">10 days</p>
                                    </div>
                                </div>

                                <div className=" px-0 md:px-5  py-5">
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Cultural
                                        </li>
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Small Group
                                        </li>
                                        <li className="relative text-(--color-secondary)">
                                            +2 more
                                        </li>
                                    </ul>
                                    <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-lg md:text-xl text-center py-2 line-clamp-2">Sri Lanka and the Maldives: Elephants & Emerald Isles</h4></a>
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Cultural
                                        </li>
                                        <li className="relative text-(--color-secondary)">
                                            Small Group
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="py-3 group">
                                <div className="rounded-md w-full aspect-square relative overflow-hidden">
                                    <a href=""><img src="images/expeience-img-4.png" alt="" className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white text-lg font-my-font-semibold text-center">05 days</p>
                                    </div>
                                </div>
                                <div className=" px-0 md:px-5  py-5">
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-3 text-[#818c94] after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#818c94]">
                                            Laos
                                        </li>
                                        <li className="relative text-[#818c94]">
                                            Cambodia
                                        </li>
                                    </ul>
                                    <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-lg md:text-xl text-center py-2 line-clamp-2">The Ultimate Escape: A Journey of Discovery</h4></a>
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Cultural
                                        </li>
                                        <li className="relative text-(--color-secondary)">
                                            Small Group
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="py-3 group">
                                <div className="rounded-md w-full aspect-square  relative overflow-hidden">
                                    <a href=""><img src="images/expeience-img-5.png" alt="" className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">

                                        <p className="text-white text-lg font-my-font-semibold text-center">08 days</p>
                                    </div>
                                </div>

                                <div className=" px-0 md:px-5  py-5">
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-3 text-[#818c94] after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#818c94]">
                                            Laos
                                        </li>
                                        <li className="relative text-[#818c94]">
                                            Cambodia
                                        </li>
                                    </ul>
                                    <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-lg md:text-xl text-center py-2 line-clamp-2">A Mesmerizing Journey Across Cambodia</h4></a>
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Cultural
                                        </li>
                                        <li className="relative text-(--color-secondary)">
                                            Small Group
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="py-3 group">
                                <div className="rounded-md w-full aspect-square relative overflow-hidden">
                                    <a href=""><img src="images/expeience-img-6.png" alt="" className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">

                                        <p className="text-white text-lg font-my-font-semibold text-center">08 days</p>
                                    </div>
                                </div>

                                <div className=" px-0 md:px-5  py-5">
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-3 text-[#818c94] after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#818c94]">
                                            Laos
                                        </li>
                                        <li className="relative text-[#818c94]">
                                            Cambodia
                                        </li>
                                    </ul>
                                    <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-lg md:text-xl text-center py-2 line-clamp-2">A Mesmerizing Journey Across Cambodia</h4></a>
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Cultural
                                        </li>
                                        <li className="relative text-(--color-secondary)">
                                            Small Group
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="py-3 group">
                                <div className="rounded-md w-full aspect-square relative overflow-hidden">
                                    <a href=""><img src="images/expeience-img-7.png" alt="" className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white text-lg font-my-font-semibold text-center">08 days</p>
                                    </div>
                                </div>
                                <div className=" px-0 md:px-5  py-5">
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-3 text-[#818c94] after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#818c94]">
                                            Laos
                                        </li>
                                        <li className="relative text-[#818c94]">
                                            Cambodia
                                        </li>
                                    </ul>
                                    <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-lg md:text-xl text-center py-2 line-clamp-2">A Mesmerizing Journey Across Cambodia</h4></a>
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Cultural
                                        </li>
                                        <li className="relative text-(--color-secondary)">
                                            Small Group
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="py-3 group">
                                <div className="rounded-md w-full aspect-square  relative overflow-hidden">
                                    <a href=""><img src="images/expeience-img-8.png" alt="" className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">

                                        <p className="text-white text-lg font-my-font-semibold text-center">08 days</p>
                                    </div>
                                </div>

                                <div className=" px-0 md:px-5  py-5">
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-3 text-[#818c94] after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#818c94]">
                                            Laos
                                        </li>
                                        <li className="relative text-[#818c94]">
                                            Cambodia
                                        </li>
                                    </ul>
                                    <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-lg md:text-xl text-center py-2 line-clamp-2">A Mesmerizing Journey Across Cambodia</h4></a>
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Cultural
                                        </li>
                                        <li className="relative text-(--color-secondary)">
                                            Small Group
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="py-3 group">
                                <div className="rounded-md w-full aspect-square relative overflow-hidden">
                                    <a href=""><img src="images/expeience-img-9.png" alt="" className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">

                                        <p className="text-white text-lg font-my-font-semibold text-center">08 days</p>
                                    </div>
                                </div>
                                <div className=" px-0 md:px-5  py-5">
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-3 text-[#818c94] after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#818c94]">
                                            Laos
                                        </li>
                                        <li className="relative text-[#818c94]">
                                            Cambodia
                                        </li>
                                    </ul>
                                    <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-lg md:text-xl text-center py-2 line-clamp-2">A Mesmerizing Journey Across Cambodia</h4></a>
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Cultural
                                        </li>
                                        <li className="relative text-(--color-secondary)">
                                            Small Group
                                        </li>
                                    </ul>
                                </div>
                            </div>
=======
>>>>>>> 08252a802ad618db84c535e91f030cc5a797f100
                        </div>

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