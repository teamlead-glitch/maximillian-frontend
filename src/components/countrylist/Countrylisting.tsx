"use client";
import BespokeJourney from "@/components/home/BespokeJourney";
import LogoCarousel from "@/components/home/LogoCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

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

export default function Countrylisting() {


    return (

        <>

            <section className="relative  pt-15 pb-0 md:pt-20 overflow-hidden bg-white">
                <div className="w-full relative  aspect-[16/9]   md:aspect-[16/4]"><img src="images/country_landing_bg.webp" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-0  md:bottom-[50px] left-1/2 
-translate-x-1/2  -translate-y-1/2
w-[90%] sm:w-[80%] md:w-auto
px-4 sm:px-0 text-center">
                        <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-white text-center ">
                            COUNTRY
                        </h1>
                    </div>
                </div>
            </section >
            <section className="relative  py-10 md:pt-20 md:pb-10   xl:pt-30 xl:pb-15 px-5 overflow-hidden bg-white">
                <div className="max-w-[1300px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5">
                        <div className="pr-0 md:pr-15 xl:pr-80">
                            <h2 className="font-my-font-regular text-break text-4xl xl:text-5xl  text-(--color-secondary) mb-5 ">Short Headline featuring India Region</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet malesuada est, id laoreet mi mattis ut. Aenean ultrices convallis sagittis. Nullam posuere, tortor a fringilla condimentum, dui justo facilisis sem, ac varius dolor leo ac ex.</p>
                        </div>
                        <div className="pl-0 md:pl-10">
                            <div className="aspect-[4/2]">
                                <img src="images/region_landing_sideimg.webp" alt="" className="w-full h-full object-cover rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-10 md:py-15  xl:py-20 px-5 overflow-hidden bg-white ">
                <div className="max-w-[1000px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-end items-start md:items-center w-full gap-4 md:gap-8">
                        <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">Our <br />
                            Signature Journeys</h3></div>
                        <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                        <div className="w-full md:w-[200px]"><p>A selection of our carefully curated Indian travel experiences.</p></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-15 mt-5 lg:mt-10">
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
                                <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-xl md:text-2xl text-center py-2 line-clamp-2">A Mesmerizing Journey Across Cambodia</h4></a>
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
                                <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-xl md:text-2xl text-center py-2 line-clamp-2">A Mesmerizing Journey Across Cambodia</h4></a>
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
                                <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-2xl text-center py-2 line-clamp-2">Sri Lanka and the Maldives: Elephants & Emerald Isles</h4></a>
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
                                <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-xl md:text-2xl text-center py-2 line-clamp-2">The Ultimate Escape: A Journey of Discovery</h4></a>
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
                                <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-xl md:text-2xl text-center py-2 line-clamp-2">A Mesmerizing Journey Across Cambodia</h4></a>
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
                                <a href=""><h4 className="text-(--color-secondary) font-my-font-semibold text-xl md:text-2xl text-center py-2 line-clamp-2">A Mesmerizing Journey Across Cambodia</h4></a>
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
                    <div className="w-full flex justify-center">
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
                    </div>
                </div>
            </section>



            {/* insights */}
            <section className="bg-white pb-10 md:pb-20 xl:pb-40 ">
                <div className="mx-auto px-0 md:px-5">
                    <div className="w-full">
                        <div className="max-w-5xl mx-auto">
                            <div className="relative">
                                <button className="insights-prev hidden lg:flex text-sm sm:text-base absolute md:left-0 xl:-left-25 top-1/2  z-20
    w-20 h-24 items-center justify-center cursor-pointer">
                                    <img src="images/left-arrow.svg" alt="" />
                                </button>

                                <button className="insights-next hidden lg:flex text-sm sm:text-base absolute md:right-0 xl:-right-25 top-1/2  z-20
    w-20 h-24  items-center justify-center cursor-pointer">
                                    <img src="images/right-arrow.svg" alt="" />
                                </button>
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    loop={true}
                                    spaceBetween={0}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false, // ⭐ VERY IMPORTANT
                                        pauseOnMouseEnter: true,
                                    }}

                                    navigation={{
                                        prevEl: ".insights-prev",
                                        nextEl: ".insights-next",
                                    }}
                                    speed={800}
                                    className="insights-swiper"
                                >
                                    {insights.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="relative flex flex-col md:flex-row items-center gap-3 md:gap-10 xl:gap-20 p-10 md:p-15 xl:p-20 z-10">

                                                {/* BACKGROUND (70%) */}
                                                <div
                                                    className="
                    absolute inset-y-0 left-0
                    w-full md:w-[80%]
                    bg-[#f7f3ef]
                    rounded-none md:rounded-md
                    z-0
                  "
                                                />

                                                {/* LEFT CONTENT */}
                                                <div className="relative z-10 w-full md:w-1/2 pr-0 md:pr-10 py-0 md:py-10  xl:pr-20 ">
                                                    <p className="tracking-wide text-(--color-secondary) mb-4">
                                                        {item.mainheading}
                                                    </p>

                                                    <h2 className="text-2xl font-my-font-semibold text-(--color-secondary) leading-snug mb-4 md:mb-6 line-clamp-2">
                                                        {item.heading}
                                                    </h2>

                                                    <p className="text-(--color-secondary) mb-5 max-w-md line-clamp-4">
                                                        {item.text || item.content}
                                                    </p>

                                                    <button className="group flex items-center text-black text-sm sm:text-base font-my-font-semibold py-3 cursor-pointer  ">
                                                        <span className="mr-3">Read More</span>
                                                        <svg className="transition-transform duration-300 ease-out group-hover:translate-x-[10px]"
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

                                                {/* RIGHT IMAGE */}
                                                <div className="relative z-10 w-full md:w-1/2">
                                                    <img
                                                        src={item.insight_image}
                                                        alt={item.heading}
                                                        className="rounded-2xl object-cover shadow-2xl w-full "
                                                    />
                                                </div>

                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*insights close */}

            <BespokeJourney />
            <LogoCarousel />

        </>
    );
}