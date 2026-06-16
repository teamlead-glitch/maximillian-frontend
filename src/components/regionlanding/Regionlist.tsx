"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import BespokeJourney from "@/components/home/BespokeJourney";
import LogoCarousel from "@/components/home/LogoCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";

import { PackagesResponse } from "@/types/packages";
import Loader from "../common/Loader";
import { apiService } from "@/services/api";
import PackageCard from "../package/PackageCard";
import { Region } from "@/types/region";
import Insights from "../home/Insights";
import DestinationCardForRegion from "./DesinationCardForRegion";
import { CountryResponse } from "@/types/countryType";

const TAKE = 15;
const INITIAL_COUNTRY_COUNT = 10;


export default function Regionlist({ slug, regionDetails }: { slug: string; regionDetails: Region | null }) {


    const [packages, setPackages] = useState<PackagesResponse["packages"]>([]);
    const [countries, setCountries] = useState<CountryResponse[]>([]);

    const [showAll, setShowAll] = useState(false);





    const [loading, setLoading] = useState(true);

    const [skip, setSkip] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const observerRef = useRef<HTMLDivElement | null>(null);



    const [showSticky, setShowSticky] = useState(false);
    const lastScrollY = useRef(0);

    const region = regionDetails?.id;
    const region_name = regionDetails?.title;

    // Show two full rows on the lg 5-column grid.
    const visibleCountries = showAll
        ? countries
        : countries.slice(0, INITIAL_COUNTRY_COUNT);


    const divRef = useRef<HTMLDivElement | null>(null);
    const [topOffset, setTopOffset] = useState(0);

    useEffect(() => {
        if (divRef.current) {
            const topOffset = divRef.current.offsetTop;
            setTopOffset(topOffset + 120);
            // console.log("Top Offset:", topOffset);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > topOffset) {
                // Scrolling DOWN
                setShowSticky(true);
            } else {
                // Scrolling UP
                setShowSticky(false);
                // console.log(currentScrollY + '/////' + topOffset);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [topOffset]);




    // Fetch packages
    const fetchPackages = async () => {
        if (!hasMore) return;

        try {
            setLoading(true);

            const res = await apiService.get<PackagesResponse>(
                `/packages?type=region&slug=${slug}&take=${TAKE}&skip=${skip}&signature=1`
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


    // Fetch countries
    const fetchCountries = async () => {

        try {
            setLoading(true);

            const res = await apiService.get<CountryResponse[]>(
                `/countries?region_id=${region}`
            );
            setCountries(res);
        } catch (error) {
            console.error("Countries API error:", error);

        } finally {
            setLoading(false);
        }
    };


    // Initial Load
    useEffect(() => {
        fetchPackages();
        fetchCountries();
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

            <section className="relative  pt-15 pb-0 md:pt-20  bg-white">
                <div className="w-full relative  aspect-[16/9]   md:aspect-[16/4]">

                    <Image fill src={regionDetails?.banner_mob_image ? regionDetails?.banner_mob_image : regionDetails?.banner_image ?? ''} alt={regionDetails?.title ?? ''} className="w-full h-full object-cover  md:hidden" />

                    <Image fill src={regionDetails?.banner_image ?? ''} alt={regionDetails?.title ?? ''} className="w-full h-full object-cover hidden md:block" />

                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-0  md:bottom-[50px] left-1/2
-translate-x-1/2  -translate-y-1/2
w-[90%] sm:w-[80%] md:w-auto
px-4 sm:px-0 text-center">
                        <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-white text-center ">
                            {regionDetails?.title}
                        </h1>
                    </div>
                </div>
            </section >

            <div ref={divRef}
                className={`top-0 left-0 w-full z-49 bg-white transition-transform duration-500 ${!showSticky ? "translate-y-0 sticky" : "translate-y-fullw fixed "
                    }`}
            >
                <div className="max-w-[1300px] mx-auto py-5      md:py-10 xl:py-10 px-5">
                    <div className="flex flex-wrap items-center gap-10 md:gap-28 justify-center">

                        <a href="#overview" className="text-(--color-secondary) font-my-font-semibold cursor-pointer">
                            Overview
                        </a>

                        <a href="#journeys" className="text-(--color-secondary) font-my-font-semibold cursor-pointer">
                            Journeys
                        </a>

                        <a href="#inspirations" className="text-(--color-secondary) font-my-font-semibold cursor-pointer">
                            Inspirations
                        </a>

                    </div>
                </div>
            </div>



            {/* <section className="relative  py-10  md:py-15  bg-white">
                <div className="flex flex-wrap items-center gap-10 md:gap-28 justify-center">

                    <a href="#overview" className="text-(--color-secondary) font-my-font-semibold cursor-pointer">
                        Overview
                    </a>

                    <a href="#journeys" className="text-(--color-secondary) font-my-font-semibold cursor-pointer">
                        Journeys
                    </a>

                    <a href="#inspirations" className="text-(--color-secondary) font-my-font-semibold cursor-pointer">
                        Inspirations
                    </a>

                </div>
            </section> */}






            <section id="overview" className="relative  py-10 md:pt-10 md:pb-10   xl:pt-15 xl:pb-15 px-5  bg-white scroll-mt-16">
                <div className="max-w-[1300px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5 items-center">
                        <div className="pr-0 md:pr-10 xl:pr-20 content" dangerouslySetInnerHTML={{ __html: regionDetails?.description ?? '' }}>


                        </div>
                        <div className="pl-0 md:pl-10">
                            <div className="aspect-[4/3]">
                                <img src={regionDetails?.image_path ?? ''} alt="" className="w-full h-full object-cover rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {packages.length > 0 && <section id="journeys" className="relative py-10  md:py-15 px-5  bg-white scroll-mt-16">
                <div className="max-w-[1000px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-end items-start md:items-center w-full gap-4 md:gap-8">
                        <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">Our <br />
                            Signature Journeys</h3></div>
                        <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                        <div className="w-full md:w-[200px]"><p>A selection of our carefully curated international experiences.</p></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-15 mt-10 lg:mt-20">



                        {packages.map((pckge) =>

                            <PackageCard key={pckge.id} details={pckge} />
                        )}



                    </div>

                    {/* Loader Trigger */}
                    <div ref={observerRef} className="h-10 flex justify-center mt-10">
                        {loading && <Loader />}
                    </div>

                    {/* <div className="w-full flex justify-center">
                        <button className="group flex items-center font-my-font-semibold  text-sm text-black sm:text-base justify-center py-3 mt-3 cursor-pointer">
                            <span className="mr-3">View More Journeys</span>

                            <svg
                                className="transition-transform duration-300 ease-out group-hover:translate-x-[10px]"
                                width="53"
                                height="8"
                                viewBox="0 0 53 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M52.3536 4.03556C52.5488 3.8403 52.5488 3.52372 52.3536 3.32845L49.1716 0.146473C48.9763 -0.0487893 48.6597 -0.0487893 48.4645 0.146473C48.2692 0.341735 48.2692 0.658318 48.4645 0.85358L51.2929 3.68201L48.4645 6.51043C48.2692 6.7057 48.2692 7.02228 48.4645 7.21754C48.6597 7.4128 48.9763 7.4128 49.1716 7.21754L52.3536 4.03556ZM0 3.68201V4.18201H52V3.68201V3.18201H0V3.68201Z"
                                    fill="#3A3F42"
                                />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </section>}







            <div className="content px-5 text-center md:px-0 md:text-left" dangerouslySetInnerHTML={{ __html: regionDetails?.what_makes_us_exceptional || "" }}></div>
            {/* <section className="bg-white py-10">
                <div className="max-w-[1300px] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mx-auto  px-5  ">
                    <div className="inline-block]">
                        <h2 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) ">What Makes Our <br /> {regionDetails?.title} Journeys Exceptional</h2>
                        <div className="flex gap-5">
                        </div>
                    </div>
                </div>
                <div className="max-w-[1300px] flex items-center gap-8 mx-auto mt-10 md:mt-20  px-5  ">
                    <div className="grid  items-center   sm:grid-cols-2 md:gap-5 lg:gap-10 xl:gap-15   md:grid-cols-4">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: regionDetails?.what_makes_us_exceptional || "",
                            }}
                        />
                    </div>
                </div>
            </section> */}
            <section className="relative pt-10  xl:pt-10  pb-8 overflow-hidden bg-white ">
                <div className="max-w-[1300px] flex mx-auto  px-5">
                    <div className="flex flex-col w-full justify-center">
                        <div className="flex flex-col md:flex-row justify-end items-start md:items-center w-full gap-4 md:gap-8">
                        <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">More <br />
                            Destinations in {region_name}</h3></div>
                        <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                        <div className="w-full md:w-[200px]"><p>Discover exceptional destinations curated for unforgettable experiences.</p></div>
                    </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-5 lg:gap-5 mt-2 lg:mt-2">

                            {visibleCountries.map((item) => (
                                <DestinationCardForRegion
                                    key={item.id}
                                    country={item}
                                />
                            ))}


                        </div>
                        {/* View More Button */}
                        {countries.length > INITIAL_COUNTRY_COUNT && (
                            <div className="flex justify-center mt-6">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="group flex items-center font-my-font-semibold text-black text-sm sm:text-base justify-center py-3 mt-3 cursor-pointer"
                                >
                                    <span className="mr-3">
                                        {showAll ? "View Less Destinations" : "View More Destinations"}
                                    </span>
                                    <svg
                                        className="transition-transform duration-300 ease-out group-hover:translate-x-[10px]"
                                        width="53"
                                        height="8"
                                        viewBox="0 0 53 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M52.3536 4.03556C52.5488 3.8403 52.5488 3.52372 52.3536 3.32845L49.1716 0.146473C48.9763 -0.0487893 48.6597 -0.0487893 48.4645 0.146473C48.2692 0.341735 48.2692 0.658318 48.4645 0.85358L51.2929 3.68201L48.4645 6.51043C48.2692 6.7057 48.2692 7.02228 48.4645 7.21754C48.6597 7.4128 48.9763 7.4128 49.1716 7.21754L52.3536 4.03556ZM0 3.68201V4.18201H52V3.68201V3.18201H0V3.68201Z"
                                            fill="#3A3F42"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}

                        {/* Loader Trigger */}
                        <div ref={observerRef} className=" flex justify-center mt-2">
                            {loading && <Loader />}
                        </div>
                    </div>

                </div>
            </section>
            {/* insights */}
            <div id="inspirations" className="scroll-mt-16">
                <Insights filterRegionId={regionDetails?.id} />
            </div >
            {/*insights close */}

            < BespokeJourney />
            <LogoCarousel />

        </>
    );
}
