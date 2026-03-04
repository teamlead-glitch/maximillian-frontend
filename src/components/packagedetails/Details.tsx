"use client";
import BespokeJourney from "@/components/home/BespokeJourney";
import LogoCarousel from "@/components/home/LogoCarousel";
import "swiper/css/navigation";
import "swiper/css";
import { useState } from "react";
import { Circle } from "lucide-react";
import DaywiseCard from "./daywiseCard";
import PackagedetailsSlider from "./packagedetailsSlider";
import Faq from "./Faq";
import { PackageResponse } from "@/types/PackageDetailsType";
import Image from "next/image";
import Related_journels from "./Related_journels";



export default function Details({ details }: { details: PackageResponse }) {

    const banner_image = details?.banner_image;
    const title = details?.title ?? "";
    const package_tagline = details?.package_tagline ?? "";
    const season = details?.season ?? "";
    const duration = details?.duration_text ?? "";
    const group_size = details?.package_size ?? "";
    const countries = details?.countries || [];
    const journey_overview = details?.description ?? "";
    const journey_flow = details?.journey_flow ?? "";
    const journey_image = details?.image_path ?? "";
    const journey_styles = details?.journey_style?.split(",") ?? [];
    const price_text = details?.price_text ?? "";
    const faq = details?.faqs || [];
    const faq_image = details?.faq_image ?? "";
    const includes = details?.inclusion || [];
    const excludes = details?.exclusion || [];
    const mobile_banner_image = details?.banner_mob_image;
    const taggroups = details?.taggroups || [];
    const region_slug = details?.regions?.short_slug;
    return (

        <>
            <section className="relative  pt-15 pb-0 md:pt-20 overflow-hidden bg-white">
                <div className="w-full relative  aspect-[16/6]   lg:aspect-[16/4]">
                    {/* MOBILE IMAGE */}
                    {mobile_banner_image && (
                        <Image
                            src={mobile_banner_image}
                            alt={title}
                            fill
                            className="object-cover w-full h-full md:hidden"
                        />
                    )}

                    {/* DESKTOP IMAGE */}
                    {banner_image && (
                        <Image
                            src={banner_image}
                            alt={title}
                            fill
                            className="object-cover w-full h-full hidden md:block"
                        />
                    )}
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-0  md:bottom-[50px] left-1/2 
                        -translate-x-1/2  -translate-y-1/2
                        w-[90%] sm:w-[80%] md:w-auto
                        px-4 sm:px-0 text-center">

                    </div>
                </div></section>
            <section className=" bg-white py-10 md:py-30  px-5">
                <div className="max-w-[800px] mx-auto   ">
                    <div className="flex flex-wrap items-center gap-5 justify-center">
                        <h1 className="font-my-font-regular text-break xl:text-5xl md:text-4xl text-3xl text-(--color-secondary) text-center ">{title}</h1>
                        <p className="text-center">{package_tagline}
                        </p>
                    </div></div>
                <div className="max-w-[1300px] mx-auto pt-5 lg:pt-16">
                    <div className="flex flex-wrap align-center  gap-y-2 gap-x-3 md:gap-8 xl:gap-12">
                        {taggroups.map((group) => (
                            <div key={group.group_id} className="pb-2 md:pb-0">
                                <span className="text-sm sm:text-base text-(--color-secondary)">
                                    {group.group_title}
                                </span>

                                <ul className="flex flex-wrap items-start md:items-center text-sm gap-2 mt-1">
                                    {group.tags.map((tag, index) => (
                                        <li
                                            key={tag.id}
                                            className={`relative text-sm sm:text-base font-my-font-semibold pr-5 text-(--color-secondary)
                                                 ${index !== group.tags.length - 1
                                                    ? "after:content-['⬥'] after:text-base after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)"
                                                    : ""
                                                }`}
                                        >
                                            {tag.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="pb-2 md:pb-0">
                            <span className="text-sm sm:text-base text-(--color-secondary)">Duration</span>
                            <h4 className="text-sm sm:text-base text-(--color-secondary) font-my-font-semibold mt-1"> {duration}</h4>
                        </div>
                        <div className="pb-2 md:pb-0">
                            <span className="text-sm sm:text-base text-(--color-secondary)">Countries covered</span>
                            <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1">
                                {countries.map((country, index) => (
                                    <li
                                        key={country.id}
                                        className="flex items-center text-sm sm:text-base font-my-font-semibold text-(--color-secondary)"
                                    >
                                        {country.title}

                                        {/* Show dot only if NOT last item */}
                                        {countries.length > 1 && index !== countries.length - 1 && (
                                            <span className="mx-2">⬥</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {season && (
                            <div className="pb-2 md:pb-0">
                                <span className="text-sm sm:text-base text-(--color-secondary)">
                                    Best season
                                </span>
                                <h4 className="text-sm sm:text-base text-(--color-secondary) font-my-font-semibold mt-1">
                                    {season}
                                </h4>
                            </div>
                        )}
                        {journey_styles.length > 0 && (
                            <div className="pb-2 md:pb-0">
                                <span className="text-sm sm:text-base text-(--color-secondary)">
                                    Journey style
                                </span>

                                <ul className="flex flex-wrap items-center text-sm gap-2 mt-1">
                                    {journey_styles.map((style, index) => (
                                        <li
                                            key={index}
                                            className={`relative text-sm sm:text-base font-my-font-semibold pr-5 text-(--color-secondary)
          ${index !== journey_styles.length - 1
                                                    ? "after:content-['⬥'] after:text-base after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)"
                                                    : ""
                                                }`}
                                        >
                                            {style.trim()}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {group_size && (
                            <div className="pb-2 md:pb-0">
                                <span className="text-sm sm:text-base text-(--color-secondary)">
                                    Group size
                                </span>
                                <h4 className="text-sm sm:text-base text-(--color-secondary) font-my-font-semibold">
                                    {group_size}
                                </h4>
                            </div>
                        )}
                    </div>
                </div>
            </section >
            <section className="relative  py-5 md:py-10 px-5 overflow-hidden bg-white">
                <div className="max-w-[1000px] mx-auto w-full relative  ">
                    <div className="w-full flex md:flex-row flex-col  align-center justify-center">
                        <div className="w-full md:w-2/4 mb-10 md:mb-0">
                            <div className="aspect-square shadow-2xl relative">
                                <Image src={journey_image} fill alt="" className="w-full h-full object-cover rounded-lg" /></div>
                        </div>
                        <div className="w-full md:w-3/4 pl-0 md:pl-20 flex align-center justify-center flex-col">
                            <h2 className="font-my-font-regular text-break xl:text-4xl text-3xl text-(--color-secondary) mb-10
relative pb-2
before:content-[''] before:absolute before:-bottom-3 before:left-0 
before:w-16 before:h-[2px] before:bg-gray-300">
                                Journey overview
                            </h2>
                            <p className="content" dangerouslySetInnerHTML={{ __html: journey_overview }}>

                            </p>

                            {/*  <h3 className="font-my-font-regular text-break xl:text-3xl text-2xl text-(--color-secondary) mb-5">The Journey Flow
                            </h3> */}
                            <p className="content" dangerouslySetInnerHTML={{ __html: journey_flow }}>

                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative  py-5 md:py-20 px-5 overflow-hidden bg-white">
                <div className="max-w-[900px] mx-auto w-full relative  ">
                    <div className="w-full py-10 md:py-15">
                        <h2 className="relative text-center xl:text-6xl md:text-5xl text-4xl        font-my-font-regular text-(--color-secondary)
before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-1/4 before:h-[1px] before:bg-gray-400
after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-1/4 after:h-[1px] after:bg-gray-400
before:-translate-y-1/2 after:-translate-y-1/2">
                            Day-wise Itinerary </h2></div>


                    {/* daywise card component */}
                    {details?.itinerary?.map((day) => (
                        <DaywiseCard key={day.id} day={day} />
                    ))}
                    <div className="w-full text-center flex justify-center py-5      md:py-10">
                        <button className="group flex items-center font-my-font-semibold  text-sm text-black sm:text-base justify-center py-0 md:py-4 mt-3 cursor-pointer">
                            <span className="mr-3">Download This itinerary as PDF</span>

                            <img src="/images/download.svg" alt="" />
                        </button>
                    </div>
                </div>
            </section>

            <PackagedetailsSlider gallery={details?.gallery} price_text={price_text} title={title} />
            <Faq faq={faq} faq_image={faq_image} />

            <section className=" bg-white py-10   px-5">
                <div className="max-w-[1300px] mx-auto">
                    <div className="w-full">
                        <div className="flex flex-col md:flex-row  w-full gap-2 md:gap-8 py-0 md:py-5 ">
                            <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">Inclusions</h3></div>
                            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                            <div className="w-full md:w-[200px]"><p>What’s included by default in your journey.</p></div>
                        </div>

                    </div>
                    <div className="w-full lg:w-3/4 md:mt-5 mt-2">
                        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10">
                            <div className="w-full pr-0 md:pr-5"> <h3 className=" font-my-font-semibold text-xl text-(--color-secondary) ">Accommodation</h3>
                                <p>Three star or similar lodging / stay for the entire duration of the trip.</p>
                            </div>
                            <div className="w-full pr-0 md:pr-5"> <h3 className=" font-my-font-semibold text-xl text-(--color-secondary) ">Airport Transfers</h3>
                                <p>Pickup and drop-off between the airport/railway station and your hotel.</p>
                            </div>
                            <div className="w-full pr-0 md:pr-5"> <h3 className=" font-my-font-semibold text-xl text-(--color-secondary) ">Transportation</h3>
                                <p>Intercity / inter destination flights, trains, or buses between destinations.</p>
                            </div>
                            <div className="w-full pr-0 md:pr-5"> <h3 className=" font-my-font-semibold text-xl text-(--color-secondary) ">Sightseeing & Activities</h3>
                                <p>Pre-planned tours to major attractions, including a vehicle and a local guide.</p>
                            </div>
                            <div className="w-full pr-0 md:pr-5"> <h3 className=" font-my-font-semibold text-xl text-(--color-secondary) ">Support Services</h3>  <p> Assistance from a tour manager or local representative and 24/7 emergency support.</p>
                            </div>
                            <div className="w-full pr-0 md:pr-5"> <h3 className=" font-my-font-semibold text-xl text-(--color-secondary) ">Comprehensive Meal Plan</h3>
                                <p>Breakfast and one major meal (Lunch or Dinner) included in the duration of the trip.</p>
                            </div>
                        </div> */}

                        {/* includes */}

                        <ul className="space-y-2">
                            {includes.map((item) => (
                                <li key={item.id} className="flex items-start gap-2">
                                    <Circle className="w-2.5 h-2.5 fill-black mt-2" />
                                    <span className="text-(--color-secondary) text-base">
                                        {item.title}
                                    </span>
                                </li>
                            ))}

                        </ul>

                    </div>


                </div></section>

            <section className=" bg-white py-0 md:py-20  px-5">
                <div className="max-w-[1300px] mx-auto flex flex-col items-end  ">

                    <div className="w-full  lg:w-1/2 flex flex-col   ">

                        <div className="flex flex-col md:flex-row  w-full gap-4 md:gap-8 py-5 ">
                            <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">Exclusions</h3></div>
                            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                            <div className="w-full md:w-[200px]"><p>What’s not included by default in your journey.</p></div>
                        </div>
                        {/* excludes */}

                        <ul className="space-y-2">
                            {excludes?.length > 0 &&
                                excludes.map((item) => (
                                    <li key={item.id} className="flex items-start gap-2">
                                        <Circle className="w-2.5 h-2.5 fill-black mt-2" />
                                        <span className="text-(--color-secondary) text-base">
                                            {item.title}
                                        </span>
                                    </li>
                                ))}
                        </ul>
                        {/* <div className="w-full flex">
                            <div className="w-full md:w-1/4"><h5 className="text-base font-bold text-(--color-secondary)">Documents.</h5>  </div>
                            <div className="w-full md:w-3/4"><p>Visa fees, passport processing, and travel insurance (unless specified).</p></div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-full md:w-1/4"><h5 className="text-base font-bold text-(--color-secondary)">Entry Fees.</h5></div>
                            <div className="w-full md:w-3/4"><p>Tickets for monuments, museums, theme parks, or optional "add-on" safaris.</p></div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-full md:w-1/4"><h5 className="text-base font-bold text-(--color-secondary)">Personal..</h5></div>
                            <div className="w-full md:w-3/4"><p>Laundry, telephone calls, mini-bar usage, and tips/gratuities for drivers/guides.</p></div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-full md:w-1/4"><h5 className="text-base font-bold text-(--color-secondary)">Flexibility.</h5></div>
                            <div className="w-full md:w-3/4">
                                <p>Early check-in or late check-out charges at hotels.</p></div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-full md:w-1/4"><h5 className="text-base font-bold text-(--color-secondary)">Transport.</h5></div>
                            <div className="w-full md:w-3/4"><p>Airfare to the starting city (for domestic tours) and excess baggage fees.</p></div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/*related journels component  */}
            <Related_journels region_slug={region_slug} />



            <BespokeJourney />
            <LogoCarousel />

        </>
    );
}