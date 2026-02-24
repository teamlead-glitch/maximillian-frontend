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


            {/* logo carousel */}
            <section className="bg-white w-full  py-10 md:py-20 border-t  border-gray-200 ">
                <Swiper
                    key={carousel.length} // 🔥 IMPORTANT
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
                    slidesPerView={3}
                    spaceBetween={10}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 6 },
                    }}
                    className="flex items-center"
                >
                    {carousel.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex items-center justify-center">
                                <div className="relative h-16 w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.alt_text}
                                        fill
                                        className="object-contain "
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            {/* logo carousel close */}
        </>
    )
}