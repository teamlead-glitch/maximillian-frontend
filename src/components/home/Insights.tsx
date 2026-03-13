
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import React, { useState, useEffect } from "react";
import { apiService } from "@/services/api";
import Loader from "../common/Loader";
import { BlogsResponse } from "@/types/blogs";
import InsightCard from "@/components/blogs/Insights"
import Image from "next/image";


export default function Insights({ filterRegionId = false }: { filterRegionId?: boolean | number }) {

    const [insights, setBlogs] = useState<BlogsResponse["blogs"]>([]);
    // const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const url = `/blogs?skip=0&take=10${filterRegionId ? `&region_id=${filterRegionId}` : ""}`;
                const res = await apiService.get<BlogsResponse>(url);

                if (res) {
                    setBlogs(res.blogs || []);

                } else {
                    console.error("Failed to load featured countries");
                }

                setLoading(false);
            } finally {
                setLoading(false);
            }

        };

        fetchBlogs();
    }, []);
    if (!loading && !insights.length) {
        return
    }
    if (loading) {
        return <Loader />
    }
    return (
        <>



            {/* insights */}



            <section className="bg-white  md:py-20 lg:py-40">
                <div className="mx-auto px-0 md:px-5">
                    <div className="w-full">
                        <div className="max-w-5xl mx-auto">
                            <div className="relative">
                                <button className="insights-prev hidden xl:flex text-sm sm:text-base absolute md:left-0 xl:-left-25 top-1/2  z-20
    w-12 h-14 md:w-14 md:h-16 lg:w-16 lg:h-20 xl:w-20 xl:h-24 items-center justify-center cursor-pointer">
                                    <Image fill src="/images/left-arrow.svg" alt="" />
                                </button>

                                <button className="insights-next hidden xl:flex text-sm sm:text-base absolute md:right-0 xl:-right-25 top-1/2  z-20
    w-12 h-14 md:w-14 md:h-16 lg:w-16 lg:h-20 xl:w-20 xl:h-24  items-center justify-center cursor-pointer">
                                    <Image fill src="/images/right-arrow.svg" alt="" />
                                </button>
                                <Swiper
                                    modules={[Navigation, Autoplay, Pagination]}
                                    loop={true}
                                    spaceBetween={0}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    pagination={{
                                        el: ".insights-pagination",
                                        clickable: true,
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
                                            <InsightCard blog={item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="insights-pagination flex justify-center pt-5 pb-15 xl:hidden"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*insights close */}


        </>
    )
}