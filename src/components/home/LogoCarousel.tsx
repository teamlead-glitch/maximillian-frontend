"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { useEffect, useState } from "react";
import { PartnerType } from "@/types/LogoCarouselTypes";
import { apiService } from "@/services/api";
import Image from "next/image";




/* const logos = [
    "/images/logo1.png",
    "/images/logo2.png",
    "/images/logo3.png",
    "/images/logo4.png",
    "/images/logo5.png",
    "/images/logo1.png",
    "/images/logo2.png",
    "/images/logo3.png",
    "/images/logo4.png",
    "/images/logo5.png",

]; */

export default function LogoCarousel() {

    //partners api
    const [carousel, setCarousel] = useState<PartnerType[]>([]);

    useEffect(() => {

        const fetchSettings = async () => {
            try {
                const res = await apiService.get<PartnerType[]>("/partners");

                /* console.log("FINAL SETTINGS DATA:", res); */

                setCarousel(res); // ✅ directly set

            } catch (error) {
                console.error("Settings API Error:", error);
            }
        };

        fetchSettings();

    }, []);

    return (
        <>


            {carousel.length > 0 && (
                <section className="bg-white w-full py-8 md:py-14 border-t border-gray-200">
                    <Swiper
                        key={carousel.length}
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={4000}
                        slidesPerView={3}
                        spaceBetween={0}
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 8 },
                        }}
                        className="flex items-center"
                    >
                        {carousel.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex items-center justify-center">
                                    <div className="relative h-20 w-auto   px-15 ">
                                        <Image
                                            src={item.image}
                                            alt={item.alt_text}
                                            fill
                                            className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            )}
        </>
    )
}