
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import React, { useState, useEffect } from "react";
import { apiService } from "@/services/api";
import Loader from "../common/Loader";
import { BlogsResponse } from "@/types/blogs";
import InsightCard from "@/components/blogs/Insights"


export default function Insights() {

    const [insights, setBlogs] = useState<BlogsResponse["blogs"]>([]);
            // const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await apiService.get<BlogsResponse>("/blogs?skip=0&take=10");

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
    return (
<></>
    );
  }
    return (
        <>



            {/* insights */}



            <section className="bg-white pb-0 md:py-20 lg:py-40">
                <div className="mx-auto px-0 md:px-5">
                    <div className="w-full">
                        <div className="max-w-5xl mx-auto">
                            <div className="relative">
                                <button className="insights-prev hidden lg:flex text-sm sm:text-base absolute md:left-0 xl:-left-25 top-1/2  z-20
    w-12 h-14 md:w-14 md:h-16 lg:w-16 lg:h-20 xl:w-20 xl:h-24 items-center justify-center cursor-pointer">
                                    <img src="images/left-arrow.svg" alt="" />
                                </button>

                                <button className="insights-next hidden lg:flex text-sm sm:text-base absolute md:right-0 xl:-right-25 top-1/2  z-20
    w-12 h-14 md:w-14 md:h-16 lg:w-16 lg:h-20 xl:w-20 xl:h-24  items-center justify-center cursor-pointer">
                                    <img src="images/right-arrow.svg" alt="" />
                                </button>
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    loop={true}
                                    spaceBetween={0}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false, // ⭐ VERY IMPORTANT
                                        pauseOnMouseEnter: true,
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*insights close */}
        </>
    )
}