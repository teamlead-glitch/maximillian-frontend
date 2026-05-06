"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
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
                <></>
            ) : (
                <section className="bg-[#f9f7f5] pt-20 pb-10 md:pt-20 md:pb-20 xl:pt-40">
                    <div className="mx-auto max-w-6xl px-5">
                        <div className="mx-auto mb-4 flex justify-center">
                            <img src="/images/quote-icon.svg" alt="" />
                        </div>

                        <div className="mx-auto my-10 w-full max-w-4xl text-center md:py-10">
                            <Swiper
                                modules={[Autoplay, EffectFade]}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                                loop
                                spaceBetween={10}
                                speed={1000}
                                autoHeight
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            >
                                {testimonials.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="flex flex-col items-center px-1 sm:px-4">
                                            <p className="mb-0 break-words text-base leading-normal text-(--color-secondary) md:mb-10 md:text-xl lg:text-2xl">
                                                {item.message}
                                            </p>

                                            <div className="py-3">
                                                <h4 className="font-grape-nuts text-2xl text-(--color-secondary)">{item.name}</h4>
                                                {item.designation && (
                                                    <p className="mt-1 text-sm text-gray-600">
                                                        {item.designation}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
                                {testimonials.map((u, index) => (
                                    <Image
                                        key={index}
                                        src={u.author_image}
                                        alt={u.name}
                                        width={70}
                                        height={70}
                                        onClick={() => swiperRef.current?.slideToLoop(index)}
                                        className={`h-12 w-12 rounded-full object-cover cursor-pointer transition-all duration-300 sm:h-14 sm:w-14
                                ${index === activeIndex
                                                ? "scale-125 opacity-100"
                                                : "scale-90 opacity-40 grayscale"
                                            }
                            `}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
