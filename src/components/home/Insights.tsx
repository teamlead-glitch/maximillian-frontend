
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";



const insights = [
    {
        id: 1,
        mainheading: "Travel Insights",
        heading: "Top ten destinations of Europe in 2026.",
        content: "Product Manager",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien.",
        insight_image: "/images/insight-img.jpg",
    },
    {
        id: 2,
        mainheading: "Travel Insights",
        heading: "Top ten destinations of Europe in 2026.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien.",

        insight_image: "/images/insight-img.jpg",
    },
    {
        id: 3,
        mainheading: "Travel Insights",
        heading: "Top ten destinations of Europe in 2026.",
        content: "Product Manager",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien. lorum ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien.",
        insight_image: "/images/insight-img.jpg",
    },


];


export default function Insights() {

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
                                            <div className="relative flex flex-col md:flex-row items-center gap-3 md:gap-10 xl:gap-20 py-15 px-5 md:p-20 xl:p-20 z-10">

                                                {/* BACKGROUND (70%) */}
                                                <div
                                                    className="
                    absolute inset-y-0 left-0
                    w-full md:w-[80%]
                    bg-[#f7f3ef]
                    rounded-none md:rounded-md
                    z-0
                  "
                                                />

                                                {/* LEFT CONTENT */}
                                                <div className="relative z-10 w-full md:w-1/2 pr-0 md:pr-5 py-0 md:py-0  xl:pr-20 ">
                                                    <p className="tracking-wide  mb-4">
                                                        {item.mainheading}
                                                    </p>

                                                    <h2 className="text-2xl font-my-font-semibold text-(--color-secondary) leading-snug mb-4 md:mb-6 line-clamp-2">
                                                        {item.heading}
                                                    </h2>

                                                    <p className="mb-5 max-w-md line-clamp-4">
                                                        {item.text || item.content}
                                                    </p>

                                                    <button className="group flex items-center text-black text-sm sm:text-base font-my-font-semibold py-3 cursor-pointer  ">
                                                        <span className="mr-3">Read More</span>
                                                        <svg className="transition-transform duration-300 ease-out group-hover:translate-x-[10px]"
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

                                                {/* RIGHT IMAGE */}
                                                <div className="relative z-10 w-full md:w-1/2">
                                                    <img
                                                        src={item.insight_image}
                                                        alt={item.heading}
                                                        className="rounded-2xl object-cover shadow-2xl w-full "
                                                    />
                                                </div>

                                            </div>
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