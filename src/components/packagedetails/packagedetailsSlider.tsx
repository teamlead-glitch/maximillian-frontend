import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Gallery } from '@/types/PackageDetailsType';
import Image from 'next/image';
import { useState } from 'react';
interface PackageSliderprops {
    gallery?: Gallery[];
    price_text?: string;
    title?: string;
}

function PackagedetailsSlider({ gallery, price_text, title }: PackageSliderprops) {

    const [talkOpen, setTalkOpen] = useState(false);



    /*  const slides = [
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
 
 
 ]; */
    return (
        <>
            <section className="bg-[#F5F2EE] w-full py-15 md:py-30 ">
                <div className="flex flex-col md:flex-row justify-center items-start md:items-center w-full gap-4 md:gap-8 px-5">
                    <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right w-[200px]">{price_text} </h3></div>
                    <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                    <div className="w-full md:w-[200px]"><p>{title} is a <span className="font-bold">customisable FIT journey</span>. Pricing varies based on travel dates, hotel category, and personal preferences.
                    </p></div>
                    <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                    <div className="inline-block">
                        <button onClick={() => setTalkOpen(true)} className="group flex items-center font-my-font-semibold text-black text-sm sm:text-base justify-center py-2 md:py-3 mt-3 cursor-pointer">
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


                {talkOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                        onClick={() => setTalkOpen(false)}
                    >
                        <div
                            className="bg-white rounded-xl shadow-xl w-[90%] md:w-[500px] p-8 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setTalkOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
                            >
                                ✕
                            </button>

                            <h2 className="text-2xl font-my-font-semibold text-(--color-secondary) mb-6 text-center">
                                Talk To Us
                            </h2>

                            <form className="flex flex-col gap-4">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="border border-[#5b5e60] rounded-lg p-3 outline-none text-(--color-secondary) placeholder:text-gray-500"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="border border-[#5b5e60] rounded-lg p-3 outline-none text-(--color-secondary) placeholder:text-gray-500"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="border border-[#5b5e60] rounded-lg p-3 outline-none text-(--color-secondary) placeholder:text-gray-500"
                                />

                                {/* Extra fields */}

                                <input
                                    type="text"
                                    placeholder="EURO 3 – Alpine Europe at an Easy Pace" readOnly
                                    className="border border-[#5b5e60] rounded-lg p-3 outline-none text-(--color-secondary) placeholder:text-gray-500"
                                />

                                <textarea
                                    placeholder="Your Message"
                                    rows={3}
                                    className="border border-[#5b5e60] rounded-lg p-3 outline-none text-(--color-secondary) placeholder:text-gray-500"
                                />

                                <button type="submit" className="
relative overflow-hidden
bg-black/90 backdrop-blur-md text-white cursor-pointer
px-4 py-3 md:px-6 md:py-4 rounded-lg font-my-font-semibold
shadow-lg text-xs sm:text-base
transition-all duration-300
hover:bg-black/100
before:absolute before:inset-0
before:-translate-x-full
before:bg-gradient-to-r 
before:from-transparent before:via-white/40 before:to-transparent
before:transition-transform before:duration-700
hover:before:translate-x-full
">
                                    Send Enquiry
                                </button>

                            </form>
                        </div>
                    </div>
                )}



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
                        {gallery?.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className="!w-[280px] md:!w-[340px] lg:!w-[420px]"
                            >
                                <div className="bg-white rounded-md overflow-hidden mt-20 group">
                                    <div className="w-full h-72 overflow-hidden relative">
                                        <Image
                                            src={item.image_path}
                                            alt={`Gallery ${index}`}
                                            fill
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section >



        </>
    )
}

export default PackagedetailsSlider