"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import Link from "next/link";

const items = [
    { icon: 1, text: "Experiences over checklists. Not photo tick-box tourism." },
    { icon: 2, text: "Private guides & exclusive access." },
    { icon: 3, text: "Handpicked luxury hotels & villas." },
    { icon: 4, text: "Flexible itineraries, no rigid schedules." },
    { icon: 5, text: "Thoughtful pacing. Space to explore, reflect & connect." },
    { icon: 6, text: "Deeper immersion rather than rushed sightseeing." },
    { icon: 7, text: "24/7 global concierge support." },
    { icon: 8, text: "Discreet, personalised service." },
];

export default function WhatMakeExc() {
    return (
        <>
            {/* SECTION */}
            <section className="bg-white py-10 md:pt-20 md:pb-0   lg:pb-0 lg:pt-40">

                {/* HEADER */}
                <div className="max-w-[1300px] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mx-auto px-5">

                    <div className="w-[60px]">
                        <img src="images/logo-icon.svg" alt="logo" />
                    </div>

                    <div>
                        <h2 className="font-my-font-regular text-3xl md:text-4xl  text-(--color-secondary)">
                            What makes our travel <br /> packages exceptional
                        </h2>
                    </div>

                    <div className="w-px h-10 bg-gray-300 hidden md:block"></div>

                    <Link href="/contact" className="group flex items-center font-my-font-semibold text-black text-sm sm:text-base py-3 mt-3 cursor-pointer">
                        <span className="mr-3">Contact Us Now</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-2">
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
                        </span>
                    </Link>
                </div>

                {/* CONTENT */}
                <div className="max-w-[1300px] flex items-start gap-8 mx-auto mt-10 md:mt-20 px-5">

                    <div className="hidden md:block md:w-[10%]"></div>

                    <div className="w-full md:w-[90%]">

                        {/* ✅ MOBILE — SWIPER */}
                        <div className="md:hidden">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                pagination={{
                                    el: ".whatmakes-pagination",
                                    clickable: true,
                                }}
                                spaceBetween={16}
                                slidesPerView={1}
                                grabCursor

                                autoplay={{
                                    delay: 2000, // time between slides (ms)
                                    disableOnInteraction: false, // keep autoplay after swipe
                                    pauseOnMouseEnter: true, // optional (pause on hover)
                                }}
                                loop={true} // recommended for smooth infinite sliding
                            >
                                {items.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="group block pb-10 pr-5">
                                            <div className="pb-5">
                                                <img
                                                    src={`images/package-exception-icon-${item.icon}.svg`}
                                                    alt=""
                                                    className="transition-transform duration-500 group-hover:translate-x-[10px] w-[45px] h-[45px]"
                                                />
                                            </div>
                                            <p>{item.text}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="whatmakes-pagination flex justify-center py-3  bg-white"></div>
                        </div>

                        {/* ✅ DESKTOP — GRID */}
                        <div className="hidden md:grid sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">

                            {items.map((item, i) => (
                                <div key={i} className="group block pb-10">
                                    <div className="pb-5">
                                        <img
                                            src={`images/package-exception-icon-${item.icon}.svg`}
                                            alt=""
                                            className="transition-transform duration-500 group-hover:translate-x-[10px] w-[45px] h-[45px]"
                                        />
                                    </div>

                                    <p className="text-(--color-secondary)">
                                        {item.text}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </section>

            {/* PAGINATION STYLE */}
            <style jsx global>{`


 .whatmakes-pagination{
 background: white}

 .whatmakes-pagination-bullet{
 display:flex;
 gap:10px;
 width:10px;
 height:10px;
 }
        .whatmakes-pagination .swiper-pagination-bullet  {
          background: #171717;

          width: 10px;
          height: 10px;
        }

        .whatmakes-pagination .swiper-pagination-bullet-active {
        #171717

        }
      `}</style>
        </>
    );
}