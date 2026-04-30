"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { apiService } from "@/services/api";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

type HomeInclusion = {
    id: number;
    icon: string;
    title: string;
    short_description: string;
    sort_order?: number;
};

export default function WhatMakeExc() {
    const [homeInclusions, setHomeInclusions] = useState<HomeInclusion[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiService.get<HomeInclusion[]>("/home-inclusions");
                setHomeInclusions(response);
            } catch (error) {
                console.error("Settings API Error:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {homeInclusions.length > 0 && (
                <section className="bg-white py-10 md:pt-20 md:pb-0 lg:pb-0 lg:pt-40">
                    <div className="max-w-[1300px] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mx-auto px-5">
                        <div className="w-[60px]">
                            <Image src="/images/logo-icon.svg" alt="logo" width={60} height={60} />
                        </div>

                        <div>
                            <h2 className="font-my-font-regular text-3xl md:text-4xl text-(--color-secondary)">
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

                    <div className="max-w-[1300px] flex items-start gap-8 mx-auto mt-10 md:mt-20 px-5">
                        <div className="hidden md:block md:w-[10%]"></div>

                        <div className="w-full md:w-[90%]">
                            <div className="md:hidden">
                                <Swiper
                                    modules={[Pagination, Autoplay, EffectFade]}
                                    effect="fade"
                                    fadeEffect={{ crossFade: true }}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    speed={1000}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    pagination={{
                                        el: ".whatmakes-pagination",
                                        clickable: true,
                                    }}
                                >
                                    {homeInclusions.map((item, i) => (
                                        <SwiperSlide key={item.id ?? `${item.icon}-${i}`}>
                                            <div className="group block pb-5 md:pb-10 pr-5 transition-all duration-700 scale-95 opacity-80 swiper-slide-active:scale-100 swiper-slide-active:opacity-100">
                                                <div className="pb-5 flex justify-center items-center">
                                                    <Image
                                                        src={item.icon}
                                                        alt={item.title}
                                                        width={65}
                                                        height={65}
                                                        className="transition-transform duration-500 w-[65px] h-[65px]"
                                                    />
                                                </div>
                                                <p className="text-center"> {item.short_description}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className="whatmakes-pagination flex justify-center py-3 bg-white"></div>
                            </div>

                            <div className="hidden md:grid sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
                                {homeInclusions.map((item, i) => (
                                    <div key={item.id ?? `${item.icon}-${i}`} className="group block pb-10">
                                        <div className="pb-5">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={45}
                                                height={45}
                                                className="transition-transform duration-500 group-hover:translate-x-[10px] w-[45px] h-[45px]"
                                            />
                                        </div>

                                        <p className="text-(--color-secondary)">
                                            {item.short_description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <style jsx global>{`
                .whatmakes-pagination {
                    background: white;
                }

                .whatmakes-pagination-bullet {
                    display: flex;
                    gap: 10px;
                    width: 10px;
                    height: 10px;
                }

                .whatmakes-pagination .swiper-pagination-bullet {
                    background: #171717;
                    width: 10px;
                    height: 10px;
                }

                .whatmakes-pagination .swiper-pagination-bullet-active {
                    background: #171717;
                }
            `}</style>
        </>
    );
}
