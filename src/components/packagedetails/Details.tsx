"use client";
import BespokeJourney from "@/components/home/BespokeJourney";
import LogoCarousel from "@/components/home/LogoCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { useState } from "react";
import { Plus, Minus, Circle } from "lucide-react";
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
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
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
                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 1:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2">
                                Arrival in Munich

                            </h3>
                            <p>Arrive in Munich and transfer to your hotel. After check-in, the day is kept intentionally light, allowing you to settle in and recover from your journey. Depending on arrival time, you may enjoy a short neighbourhood walk or a relaxed dinner nearby.
                            </p>
                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Airport transfer</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Hotel check-in assistance
                                    </span>
                                </li>

                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/euro3-day1.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>
                    <div className="py-5 md:py-10 w-full"><hr /> </div>
                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 2:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2">Munich – Historic Heart & City Life

                            </h3>
                            <p>After breakfast, begin exploring Munich’s historic centre. Walk through Marienplatz, admire the grand town hall, and wander through surrounding streets filled with cafés, shops, and everyday local life.
                            </p>
                            <p>The afternoon is left flexible — ideal for the English Garden, a museum visit, or simply relaxing at a café. Evening is free to enjoy Munich’s welcoming dining culture.
                            </p>
                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base"> Breakfast </span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Guided city exploration
                                    </span>
                                </li>

                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/noimg.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>
                    <div className="py-5 md:py-10 w-full"><hr /> </div>
                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 3:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2">
                                Bavarian Fairytales – Neuschwanstein Castles
                            </h3>
                            <p>Today is dedicated to one of Bavaria’s most iconic experiences. Travel through scenic countryside towards Füssen to visit the fairytale castles of Neuschwanstein and Hohenschwangau, set against dramatic alpine backdrops.
                            </p>
                            <p>After ample time at the castle grounds, return to Munich by evening.
                            </p>
                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Breakfast</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Scenic rail travel</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/group-transfer.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Group transfers</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/euro3-day3.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>
                    <div className="py-5 md:py-10 w-full"><hr /> </div>
                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 4:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2">
                                Alpine Landscapes – Zugspitze or Garmisch

                            </h3>
                            <p>Journey towards the Bavarian Alps for a day surrounded by mountain scenery. Ascend Germany’s highest peak by mountain railway and cable car, or explore the charming alpine town of Garmisch-Partenkirchen.</p>
                            <p>The experience is comfortable and non-strenuous, offering panoramic views without physical strain. Return to Munich by evening.
                            </p>
                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Breakfast</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Mountain excursion</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/group-transfer.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Transport</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/euro3-day4.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>
                    <div className="py-5 md:py-10 w-full"><hr /> </div>


                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 5:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2">
                                Munich to the Black Forest

                            </h3>
                            <p>After breakfast and check-out, board a scenic train journey into Germany’s forested heartland. Enjoy changing landscapes as you travel towards the Black Forest region.

                            </p>
                            <p>Arrive in Freiburg, check into your hotel, and spend the evening exploring the old town with its cathedral, cobbled streets, and lively squares.</p>

                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Breakfast</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Scenic rail journey</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/group-transfer.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Hotel transfer
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/noimg.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>


                    <div className="py-5 md:py-10 w-full"><hr /> </div>


                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 6:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2">
                                Black Forest – Lakes & Waterfalls


                            </h3>
                            <p>Explore the highlights of the Black Forest today. Visit tranquil lakes and scenic waterfalls, with time for gentle walks, photography, and relaxed moments in nature.
                            </p>

                            <p>Lunch is at leisure, and the evening is spent back in Freiburg, enjoying the town’s relaxed atmosphere.
                            </p>

                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Breakfast</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base"> Local sightseeing</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/group-transfer.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Transfers
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/euro3-day6.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>

                    <div className="py-5 md:py-10 w-full"><hr /> </div>

                    {/* day7 */}

                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 7:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2">Into Switzerland – Arrival in Lucerne </h3>
                            <p>Travel by train into Switzerland, passing through scenic valleys and lakes. On arrival in Lucerne, check into your hotel and explore the city on foot.

                            </p>

                            <p>A gentle walk across the Chapel Bridge and through the Old Town introduces you to Lucerne’s lakeside charm. Evening is relaxed along the waterfront. </p>

                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Breakfast</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Scenic rail travel</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/group-transfer.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Orientation walk</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/euro3-day7.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>

                    {/* day7 close */}
                    <div className="py-5 md:py-10 w-full"><hr /> </div>

                    {/* day8 */}
                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 8:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2">Lucerne – Lakes & Mountain Views
                            </h3>
                            <p>Enjoy a classic Swiss mountain experience today. Travel by boat and mountain railway to Mount Pilatus or Mount Rigi, where panoramic views of lakes and alpine peaks unfold effortlessly.


                            </p>

                            <p>The afternoon is deliberately unhurried, ideal for café visits, shopping, or lakeside strolls.

                            </p>

                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Breakfast</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Mountain excursion</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/group-transfer.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Transport

                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/euro3-day8.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>
                    {/* day8 close */}
                    <div className="py-5 md:py-10 w-full"><hr /> </div>

                    {/* day9 */}
                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 9:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2">Lucerne to Interlaken

                            </h3>
                            <p>Board one of Switzerland’s most scenic train routes to Interlaken. After check-in, spend the rest of the day settling in or enjoying a relaxed walk through the town.
                            </p>


                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Breakfast</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Scenic rail journey</span>
                                </li>

                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/noimg.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>
                    {/* day9 close */}
                    <div className="py-5 md:py-10 w-full"><hr /> </div>

                    {/* day10 */}
                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 10:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2">Jungfraujoch – Top of Europe
                            </h3>
                            <p>A highlight of the journey. Travel by mountain railway to Jungfraujoch, often called the “Top of Europe,” where you enjoy glacier views, observation decks, and the Ice Palace.

                            </p>
                            <p>Descend at a comfortable pace and return to Interlaken in the evening.
                            </p>


                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Breakfast</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Alpine rail journey</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Entrance fees
                                    </span>
                                </li>

                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/euro3-day10.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>
                    {/* day10 close */}
                    <div className="py-5 md:py-10 w-full"><hr /> </div>
                    {/* day11 */}
                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 11:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2"> Interlaken – A Gentle Alpine Day

                            </h3>
                            <p>This day is kept flexible. You may explore nearby lakes, visit alpine villages, or simply relax and enjoy the mountain scenery at your own pace.
                            </p>



                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Breakfast</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Free time
                                    </span>
                                </li>


                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/noimg.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>
                    {/* day11 close */}
                    <div className="py-5 md:py-10 w-full"><hr /> </div>

                    {/* day12 */}
                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 12:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2">  Interlaken to Zurich

                            </h3>
                            <p>Travel by train to Zurich. After check-in, explore the Old Town, lakeside promenades, and elegant streets reflecting Switzerland’s refined urban character
                            </p>
                            <p>The evening is calm and relaxed, offering a gentle transition from the Alps to Austria.
                            </p>



                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Breakfast</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base"> Rail travel
                                    </span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base"> City exploration

                                    </span>
                                </li>

                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/euro3-day12.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>
                    {/* day12 close */}
                    <div className="py-5 md:py-10 w-full"><hr /> </div>

                    {/* day13*/}
                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 13:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2">  Zurich to Salzburg


                            </h3>
                            <p>Board a comfortable train to Salzburg. After arrival, explore the compact Old Town, framed by alpine scenery and baroque architecture.
                            </p>
                            <p>A leisurely evening walk sets the mood for this charming city.
                            </p>



                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Breakfast</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base"> Rail travel
                                    </span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base"> Orientation walk


                                    </span>
                                </li>

                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/noimg.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>
                    {/* day13 close */}
                    <div className="py-5 md:py-10 w-full"><hr /> </div>

                    {/* day14*/}
                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 14:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2"> Arrival in Vienna – First Impressions</h3>
                            <p>Continue by train to Vienna. After check-in, enjoy a gentle introduction to the city with an orientation walk through historic neighbourhoods or along the Ringstrasse.

                            </p>
                            <p>Evening is free for a relaxed dinner or café visit.

                            </p>



                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Breakfast</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base"> Rail travel
                                    </span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base"> Orientation walk


                                    </span>
                                </li>

                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/noimg.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>
                    {/* day14 close */}
                    <div className="py-5 md:py-10 w-full"><hr /> </div>

                    {/* day15*/}
                    <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                        <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                            <h5 className="text-(--color-secondary) text-small">Day 15:</h5>
                            <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) 
relative pb-2"> Vienna – Imperial Europe at Leisure
                            </h3>
                            <p>Explore Vienna’s imperial landmarks with a guided city tour covering palaces, boulevards, and cultural highlights.

                            </p>
                            <p>The afternoon is free for museums, shopping, or lingering at one of Vienna’s famous cafés, concluding the journey on a refined and unhurried note.
                            </p>
                            <ul className="w-full align-center flex flex-wrap gap-4">
                                <li className="flex items-center gap-1 ">
                                    <img src="images/hand_meal.png" alt="" className="w-5 h-5 " />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Breakfast</span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base"> Guided city tour
                                    </span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src="images/bed.png" alt="" className="w-5 h-5" />
                                    <span className="text-(--color-secondary) text-sm md:text-base">Entrance fees
                                    </span>
                                </li>

                            </ul>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="aspect-4/3">
                                <img src="images/euro3-day15.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
                    </div>
                    {/* day15 close */}


                    <div className="w-full text-center flex justify-center py-5      md:py-10">
                        <button className="group flex items-center font-my-font-semibold  text-sm text-black sm:text-base justify-center py-0 md:py-4 mt-3 cursor-pointer">
                            <span className="mr-3">Download This itinerary as PDF</span>

                            <img src="images/download.svg" alt="" />
                        </button>
                    </div>
                </div>
            </section>


            <section className="bg-[#F5F2EE] w-full py-15 md:py-30 ">
                <div className="flex flex-col md:flex-row justify-center items-start md:items-center w-full gap-4 md:gap-8 px-5">
                    <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">Pricing: <br />
                        On request
                    </h3></div>
                    <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                    <div className="w-full md:w-[200px]"><p>EURO 3 is a <span className="font-bold">customisable FIT journey</span> . Pricing varies based on travel dates, hotel category, and personal preferences.
                    </p></div>
                    <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                    <div className="inline-block">
                        <button className="group flex items-center font-my-font-semibold text-black text-sm sm:text-base justify-center py-2 md:py-3 mt-3 cursor-pointer">
                            <span className="mr-3">Talk to Us</span>

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
                </div>

                {/* slide */}


                <div className="w-full ">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView="auto"
                        centeredSlides
                        spaceBetween={20}
                        loop
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        className="w-full overflow-visible"
                    >
                        {slides.map((item) => (
                            <SwiperSlide key={item.id} className="!w-[280px] md:!w-[340px] lg:!w-[420px]">
                                <div className="bg-white rounded-md overflow-hidden mt-20  group">

                                    <div className="w-full h-72 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section >

            <section className=" bg-white py-10 md:py-30  px-5">
                <div className="max-w-[1000px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-center items-start md:items-center w-full gap-4 md:gap-8 py-0 md:py-5 px-5">
                        <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">FAQ’s</h3></div>
                        <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                        <div className="w-full md:w-[200px]"><p>We know you may have concerns. Check our FAQ’s.</p></div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center mt-0 md:mt-10">
                        <div className="w-full md:w-2/3 pr-0 md:pr-15 mb-5 md:mb-0">
                            <div className="max-w-2xl mx-auto space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b  overflow-hidden">

                                        {/* Question */}
                                        <button
                                            onClick={() => toggle(index)}
                                            className="w-full flex justify-between items-center p-4 cursor-pointer"
                                        >
                                            <span className="text-left text-(--color-secondary) font-my-font-semibold">
                                                {faq.question}
                                            </span>

                                            {/* ✅ Plus / Minus Icon */}
                                            {openIndex === index ? (
                                                <Minus size={18} className="text-(--color-secondary)" />
                                            ) : (
                                                <Plus size={18} className="text-(--color-secondary)" />
                                            )}
                                        </button>

                                        {/* Answer */}
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-40 p-4" : "max-h-0"
                                                }`}
                                        >
                                            <p >{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-3/4">
                                <img src="images/euro3-faq.webp" alt="" className="w-full h-full object-cover rounded-md" />
                            </div>
                        </div>
                    </div>


                </div>
            </section>

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