"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

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

                    <button className="group flex items-center font-my-font-semibold text-black text-sm sm:text-base py-3 mt-3 cursor-pointer">
                        <span className="mr-3">Contact Us Now</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                            ➜
                        </span>
                    </button>
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
                                            <p className="text-(--color-secondary)">{item.text}</p>
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