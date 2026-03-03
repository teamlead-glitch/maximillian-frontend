"use client";
import BespokeJourney from "@/components/home/BespokeJourney";
import LogoCarousel from "@/components/home/LogoCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { useState } from "react";
import { Plus, Minus, Circle } from "lucide-react";
import DaywiseCard from "./daywiseCard";
import PackagedetailsSlider from "./packagedetailsSlider";
import Faq from "./Faq";
const insights = [
    {
        id: 1,
        mainheading: "Travel Insights",
        heading: "Top ten destinations of Europe in 2026.",
        content: "Product Manager",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien.",
        insight_image: "/images/insight-img.jpg",
    },
    {
        id: 2,
        mainheading: "Travel Insights",
        heading: "Top ten destinations of Europe in 2026.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien.",

        insight_image: "/images/insight-img.jpg",
    },
    {
        id: 3,
        mainheading: "Travel Insights",
        heading: "Top ten destinations of Europe in 2026.",
        content: "Product Manager",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien. lorum ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien.",
        insight_image: "/images/insight-img.jpg",
    },


];



const slides = [
    {
        id: 1,


        image: "/images/euro3-gallery-1.webp",
    },
    {
        id: 2,


        image: "/images/euro3-gallery-2.webp",
    },
    {
        id: 3,


        image: "/images/euro3-gallery-3.webp",
    },
    {
        id: 4,


        image: "/images/euro3-gallery-4.webp",
    },
    {
        id: 5,


        image: "/images/euro3-gallery-5.webp",
    },
    {
        id: 6,


        image: "/images/euro3-gallery-6.webp",
    },


];

const faqs = [
    {
        question: "Is this journey physically demanding?",
        answer: "No. Mountain experiences are cable-car and rail based, with minimal walking."
    },
    {
        question: "Can this journey be customised?",
        answer: "Yes. Duration, hotels, experiences, and meal plans can be tailored.",
    },
    {
        question: "Is this suitable for first-time Europe travellers?",
        answer: "Yes, especially for those who prefer a relaxed, well-planned pace."
    },



];


export default function Details() {
    const [openIndex, setOpenIndex] = useState<number|null>(null);

    const toggle = (index:number|null) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (

        <>
            <section className="relative  pt-15 pb-0 md:pt-20 overflow-hidden bg-white">
                <div className="w-full relative  aspect-[16/6]   lg:aspect-[16/4]"><img src="images/euro3-hero-bg.webp" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-0  md:bottom-[50px] left-1/2 
-translate-x-1/2  -translate-y-1/2
w-[90%] sm:w-[80%] md:w-auto
px-4 sm:px-0 text-center"></div>
                </div></section>
            <section className=" bg-white py-10 md:py-30  px-5">
                <div className="max-w-[800px] mx-auto   ">
                    <div className="flex flex-wrap items-center gap-5 justify-center">
                        <h1 className="font-my-font-regular text-break xl:text-5xl md:text-4xl text-3xl text-(--color-secondary) text-center ">EURO 3 – Alpine Europe at an Easy Pace</h1>
                        <p className="text-center">A thoughtfully paced journey through Central Europe, designed for travellers who value comfort, scenery, and time to truly experience each destination.
                        </p>
                    </div></div>
                <div className="max-w-[1300px] mx-auto pt-5 lg:pt-16">
                    <div className="flex flex-wrap align-center  gap-y-2 gap-x-3 md:gap-8 xl:gap-12">
                        <div className="pb-2 md:pb-0">
                            <span className="text-sm sm:text-base text-(--color-secondary)">Experience type</span>
                            <ul className="flex flex-wrap items-start  md:items-center text-sm gap-2 mt-1">
                                <li className="relative text-sm sm:text-base  font-my-font-semibold  pr-5 text-(--color-secondary) after:content-['⬥'] after:text-base after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                    Slow Travel
                                </li>
                                <li className="relative text-sm sm:text-base font-my-font-semibold  text-(--color-secondary)">
                                    Scenic Europe
                                </li>
                            </ul>
                        </div>
                        <div className="pb-2 md:pb-0">
                            <span className="text-sm sm:text-base text-(--color-secondary)">Duration</span>
                            <h4 className="text-sm sm:text-base text-(--color-secondary) font-my-font-semibold"> 14–15 Days</h4>
                        </div>
                        <div className="pb-2 md:pb-0">
                            <span className="text-sm sm:text-base text-(--color-secondary)">Countries covered</span>
                            <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1">
                                <li className="relative text-sm sm:text-base font-my-font-semibold  pr-5 text-(--color-secondary) after:content-['⬥'] after:text-base after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                    Germany
                                </li>
                                <li className="relative text-sm sm:text-base font-my-font-semibold  pr-5 text-(--color-secondary) after:content-['⬥'] after:text-base after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                    Switzerland
                                </li>
                                <li className="relativetext-sm sm:text-base font-my-font-semibold  text-(--color-secondary)">
                                    Austria
                                </li>
                            </ul>
                        </div>
                        <div className="pb-2 md:pb-0">
                            <span className="text-sm sm:text-base text-(--color-secondary)">Best season</span>
                            <h4 className="text-sm sm:text-base text-(--color-secondary) font-my-font-semibold">May to September</h4>

                        </div>
                        <div className="pb-2 md:pb-0">
                            <span className="text-sm sm:text-base text-(--color-secondary)">Journey style</span>
                            <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1">
                                <li className="relative text-sm sm:text-base font-my-font-semibold  pr-5 text-(--color-secondary) after:content-['⬥'] after:text-base after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                    Rail-based
                                </li>
                                <li className="relative text-sm sm:text-base font-my-font-semibold  pr-5 text-(--color-secondary) after:content-['⬥'] after:text-base after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                    Easy pace
                                </li>
                                <li className="relative text-sm sm:text-base font-my-font-semibold pr-5 text-(--color-secondary)">
                                    FIT (Customisable)

                                </li>

                            </ul>
                        </div>
                        <div className="pb-2 md:pb-0">
                            <span className="text-sm sm:text-base text-(--color-secondary)">Group size</span>
                            <h4 className="text-sm sm:text-base text-(--color-secondary) font-my-font-semibold">Private journeys / Small groups only</h4>
                        </div>
                    </div>
                </div>
            </section >
            <section className="relative  py-5 md:py-10 px-5 overflow-hidden bg-white">
                <div className="max-w-[1000px] mx-auto w-full relative  ">
                    <div className="w-full flex md:flex-row flex-col  align-center justify-center">
                        <div className="w-full md:w-2/4 mb-10 md:mb-0">
                            <div className="aspect-square shadow-2xl">
                                <img src="images/euro3-journey-overview.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div>
                        </div>
                        <div className="w-full md:w-3/4 pl-0 md:pl-20 flex align-center justify-center flex-col">
                            <h2 className="font-my-font-regular text-break xl:text-4xl text-3xl text-(--color-secondary) mb-10
relative pb-2
before:content-[''] before:absolute before:-bottom-3 before:left-0 
before:w-16 before:h-[2px] before:bg-gray-300">
                                Journey overview
                            </h2>
                            <p>EURO 3 is created for travellers who prefer  <span className="font-semibold">depth over distance</span>.
                            </p>
                            <p>Instead of rushing across multiple countries, this journey settles into the heart of Central Europe — beginning in Bavaria, moving gently through Germany’s forested landscapes, entering the Swiss Alps at a relaxed pace, and concluding in Austria’s elegant cultural capitals.
                            </p>
                            <p>The journey is designed around <span className="font-semibold">longer stays, scenic rail travel, and unhurried days.</span>  Mountain experiences are accessible and non-strenuous, cities are explored at a comfortable rhythm, and travel days are thoughtfully planned to avoid fatigue.</p>
                            <p>EURO 3 is ideal for travellers who want Europe to feel <span className="font-semibold">calm, immersive, and beautifully balanced</span> , rather than rushed or overwhelming.
                            </p>

                            <h3 className="font-my-font-regular text-break xl:text-3xl text-2xl text-(--color-secondary) mb-5">The Journey Flow
                            </h3>
                            <p>The experience begins in <span className="font-semibold">Munich</span>, where Bavarian culture, historic streets, and alpine day trips provide a gentle introduction to Europe. From here, the journey moves into Germany’s forested heartland before crossing into Switzerland’s lakes and mountains.
                            </p>
                            <p>After experiencing the alpine regions around Lucerne and Interlaken, the journey pauses briefly in Zurich before continuing into Austria. A short stay in <span className="font-semibold">Salzburg</span> adds musical and baroque charm, before the journey concludes in <span className="font-semibold">Vienna</span>, where imperial architecture and café culture provide a refined finale.
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

                    <DaywiseCard/>
                    <DaywiseCard/>
                    <DaywiseCard/>
                    <DaywiseCard/>
                    <div className="w-full text-center flex justify-center py-5      md:py-10">
                        <button className="group flex items-center font-my-font-semibold  text-sm text-black sm:text-base justify-center py-0 md:py-4 mt-3 cursor-pointer">
                            <span className="mr-3">Download This itinerary as PDF</span>

                            <img src="images/download.svg" alt="" />
                        </button>
                    </div>
                </div>
            </section>
            <PackagedetailsSlider/>
            <Faq/>

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

                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <Circle className="w-2.5 h-2.5 fill-black mt-2" />
                                <span className="text-(--color-secondary) text-base">International flights





                                </span>
                            </li>

                            <li className="flex items-start gap-2">
                                <Circle className="w-2.5 h-2.5 fill-black mt-2" />
                                <span className="text-(--color-secondary) text-base">Visa assistance & travel insurance</span>
                            </li>

                            <li className="flex items-start gap-2">
                                <Circle className="w-2.5 h-2.5 fill-black mt-2" />
                                <span className="text-(--color-secondary) text-base">Accommodation with daily breakfast</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Circle className="w-2.5 h-2.5 fill-black mt-2" />
                                <span className="text-(--color-secondary) text-base">Scenic rail journeys & transfers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Circle className="w-2.5 h-2.5 fill-black mt-2" />
                                <span className="text-(--color-secondary) text-base">Guided city tours and entrance fees</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Circle className="w-2.5 h-2.5 fill-black mt-2" />
                                <span className="text-(--color-secondary) text-base">Mountain excursions and special experiences</span>
                            </li>

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

                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <Circle className="w-2.5 h-2.5 fill-black mt-2" />
                                <span className="text-(--color-secondary) text-base">Personal expenses such as laundry, minibar, or room service
                                </span>
                            </li>

                            <li className="flex items-start gap-2">
                                <Circle className="w-2.5 h-2.5 fill-black mt-2" />
                                <span className="text-(--color-secondary) text-base">Optional experiences not mentioned in the itinerary
                                </span>
                            </li>

                            <li className="flex items-start gap-2">
                                <Circle className="w-2.5 h-2.5 fill-black mt-2" />
                                <span className="text-(--color-secondary) text-base">Any services not specifically requested or customised
                                </span>
                            </li>
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

            <section className=" bg-white py-10 md:py-20  px-5">
                <div className="max-w-[1000px] mx-auto flex flex-col items-end  ">

                    <div className="flex flex-col w-full justify-center">
                        <h4 className="font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) text-center">Related Journeys</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-15 mt-5 lg:mt-20">
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
                                        <li className="relative text-(--color-secondary)">
                                            Small Group
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="py-3 group">
                                <div className="rounded-md w-full aspect-square  relative overflow-hidden">
                                    <a href=""><img src="images/expeience-img-2.png" alt="" className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white text-lg font-my-font-semibold text-center">08 days</p>
                                    </div>
                                </div>

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

                                </div>
                            </div>
                            <div className="py-3 group">
                                <div className="rounded-md w-full aspect-square relative overflow-hidden">
                                    <a href=""><img src="images/expeience-img-3.png" alt="" className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">

                                        <p className="text-white text-lg font-my-font-semibold text-center">10 days</p>
                                    </div>
                                </div>

                                <div className=" px-0 md:px-5  py-5">
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-3 text-[#818c94] after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#818c94]">
                                            Sri Lanka
                                        </li>
                                        <li className="relative text-[#818c94]">
                                            Maldives
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
                        </div>
                    </div>


                </div>
            </section>



            <BespokeJourney />
            <LogoCarousel />

        </>
    );
}