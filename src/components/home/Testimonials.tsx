"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { apiService } from "@/services/api";
import { useRef, useState, useEffect } from "react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper";
import Loader from "../common/Loader";
import { testimonialResponse } from "@/types/testimonialTypes";






export default function Testimonials() {

    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const [testimonials, settestimonials] = useState<testimonialResponse[]>([]);
    // const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchtestimonials = async () => {
            try {
                const res = await apiService.get<testimonialResponse[]>("/testimonials?skip=0&take=5");

                if (res) {
                    settestimonials(res || []);

                } else {
                    console.error("Failed to load tags groups");
                }

                setLoading(false);
            } finally {
                setLoading(false);
            }

        };

        fetchtestimonials();
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : testimonials.length === 0 ? (
                // <p>No journeys available</p>
                <></>
            ) : (
                <section className="bg-[#f9f7f5] pt-20 md:pt-20 xl:pt-40 pb-10 md:pb-20">
                    <div className=" mx-auto px-5">
                        <div className="mb-4 mx-auto flex justify-center"> <img src="images/quote-icon.svg" alt="" /> </div>


                        <div className="max-w-4xl mx-auto text-center w-full my-10 md:py-10">

                            {/* MAIN SWIPER */}
                            <Swiper
                                modules={[Autoplay]}
                                loop
                                spaceBetween={10}
                                autoplay={{
                                    delay: 10000, // 10 seconds
                                    disableOnInteraction: false,
                                }}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                onSlideChange={(swiper) =>
                                    setActiveIndex(swiper.realIndex)
                                }
                            >
                                {testimonials.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="flex flex-col items-center">

                                            <p className="text-lg md:text-xl lg:text-2xl text-(--color-secondary) mb-10 leading-normal">
                                                {item.message}
                                            </p>

                                            <div className="py-3">
                                                <h4 className="font-grape-nuts text-2xl text-(--color-secondary)">{item.name}</h4>
                                                {item.designation && (
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        {item.designation}
                                                    </p>
                                                )}
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* AVATAR THUMBNAILS */}
                            <div className="flex items-center justify-center gap-6 mt-5">

                                {testimonials.map((u, index) => (
                                    <Image
                                        key={index}
                                        src={u.author_image}
                                        alt={u.name}
                                        width='70'
                                        height='70'
                                        onClick={() =>
                                            swiperRef.current?.slideToLoop(index)
                                        }
                                        className={`w-14 h-14 rounded-full object-cover cursor-pointer transition-all duration-300

                                ${index === activeIndex
                                                ? "scale-125 opacity-100"
                                                : "opacity-40 scale-90 grayscale"
                                            }
                            `}
                                    />
                                ))}

                            </div>

                        </div> </div>
                </section>
            )}
        </>
    );
}