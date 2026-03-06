
import React, { useState, useEffect } from "react";
import { apiService } from "@/services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Loader from "../common/Loader";
import { CountryResponse } from "@/types/countryType";
import "swiper/css/navigation";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";


export default function FeaturedDestinations() {
    const [countries, setCountries] = useState<CountryResponse[]>([]);
    // const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const res = await apiService.get<CountryResponse[]>("/featured-countries");

                if (res) {
                    setCountries(res || []);

                } else {
                    console.error("Failed to load featured countries");
                }

                setLoading(false);
            } finally {
                setLoading(false);
            }

        };

        fetchCountry();
    }, []);
    return (
        <>
            {loading ? (
                <Loader />
            ) : countries.length === 0 ? (
                // <p>No journeys available</p>
                <></>
            ) : (
                <section className="bg-[#F5F2EE] pt-10 md:pt-20 pb-10 md:pb-20">
                    <div className="max-w-[1300px]  mx-auto px-5">
                        <div className="flex flex-col md:flex-row  items-start md:items-center w-full gap-4 md:gap-8">
                            <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">
                                Featured <br />
                                Destinations</h3></div>
                            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                            <div className="w-full md:w-[200px]"><p>Check out our carefully curated destination experiences.</p></div>
                            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                            <div className="inline-block">
                                <Link href="/destinations" className="group flex items-center font-my-font-semibold text-black text-sm sm:text-base justify-center py-3 mt-3 cursor-pointer">
                                    <span className="mr-3">View All Destinations</span>

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
                                </Link></div>
                        </div>

                    </div>
                    <div className="w-full ">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView="auto"

                            spaceBetween={30}
                            loop={true}
                            speed={4000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            allowTouchMove={true}
                            className="w-full"
                        >
                            {countries.map((item) => (
                                <SwiperSlide
                                    key={item.id}
                                    className="!w-[260px] md:!w-[280px] lg:!w-[300px]"
                                >
                                    <div
                                        className="bg-white rounded-xl overflow-hidden
  transition-all duration-300 my-10 md:my-15
  hover:shadow-2xl
  group"
                                    >
                                        {/* Image */}
                                        <div className="w-full aspect-3/3 overflow-hidden">
                                            <img
                                                src={item.image_path}
                                                alt={item.title}
                                                className="
        w-full h-full object-cover
        transition-transform duration-500 ease-out
        group-hover:scale-110
      "
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="py-5 px-6 text-center relative h-full flex flex-col min-h-[120px]">
                                            
                                            <Link href={`/country/${item.short_slug}`}>
                                            <div
                                                className="absolute -top-[40px] right-4 z-10
      w-12 h-12 rounded-full
      flex items-center justify-center
      bg-white/20 backdrop-blur-lg
      transition-all duration-300
      hover:bg-white/30 hover:scale-105
      cursor-pointer"
                                            >
                                                <img
                                                    src="images/arrow.svg"
                                                    className="w-5 h-5
        transition-all duration-300
        group-hover:rotate-45 "
                                                />
                                            </div>
                                            </Link>

                                            <h3 className="text-lg font-semibold mt-1 font-my-font-regular text-(--color-secondary) line-clamp-1">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                                {item.short_description}
                                            </p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </section>

            )} {/* featured destination close */}
        </>
    )
}