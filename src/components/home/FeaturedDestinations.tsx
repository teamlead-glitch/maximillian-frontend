

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const slides = [
    {
        id: 1,
        title: "Rajasthan",
        desc: "Discover breathtaking destinations and thrilling experiences.",
        image: "/images/destination-img1.jpg",
    },
    {
        id: 2,

        title: "Maldives",
        desc: "Premium journeys designed for comfort and elegance.",
        image: "/images/destination-img2.jpg",
    },
    {
        id: 3,

        title: "Paris",
        desc: "Perfect trips for families to enjoy together.",
        image: "/images/destination-img3.jpg",
    },
    {
        id: 4,

        title: "Dubai",
        desc: "Unforgettable moments for newlyweds.",
        image: "/images/destination-img4.jpg",
    },
    {
        id: 5,

        title: "Greece",
        desc: "Go on a journey of self-discovery.",
        image: "/images/destination-img5.jpg",
    },
    {
        id: 6,

        title: "Kerala",
        desc: "Fun-filled trips with like-minded explorers.",
        image: "/images/destination-img6.jpg",
    },
    {
        id: 7,

        title: "Rajasthanr",
        desc: "Fun-filled trips with like-minded explorers.",
        image: "/images/destination-img1.jpg",
    },
    {
        id: 8,

        title: "Maldives",
        desc: "Fun-filled trips with like-minded explorers.",
        image: "/images/destination-img2.jpg",
    },
    {
        id: 9,

        title: "Paris",
        desc: "Fun-filled trips with like-minded explorers.",
        image: "/images/destination-img3.jpg",
    },
];

export default function FeaturedDestinations() {

    return (
        <>
            {/* featured destination */}
            <section className="bg-[#F5F2EE] pt-10 md:pt-20 pb-10 md:pb-20">
                <div className="max-w-[1300px]  mx-auto px-5">
                    <div className="flex flex-col md:flex-row  items-start md:items-center w-full gap-4 md:gap-8">
                        <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">
                            Featured <br />
                            Destinations</h3></div>
                        <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                        <div className="w-full md:w-[200px]"><p className="text-sm text-(--color-secondary) ">Check out our carefully curated destination experiences.</p></div>
                        <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                        <div className="inline-block">
                            <button className="group flex items-center font-my-font-semibold text-black text-sm sm:text-base justify-center py-3 mt-3 cursor-pointer">
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
                            </button></div>
                    </div>

                </div>
                <div className="w-full ">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4.5}
                        centeredSlides={true}
                        spaceBetween={50}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1.3, spaceBetween: 20 },
                            480: { slidesPerView: 2.3, spaceBetween: 20 },
                            1024: { slidesPerView: 4.5, },
                        }}
                        className="w-full overflow-visible"
                    >
                        {slides.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div
                                    className="bg-white rounded-xl overflow-hidden
  transition-all duration-300 my-10 md:my-15
  hover:shadow-2xl
  group"
                                >
                                    {/* Image */}
                                    <div className="w-full aspect-3/3 overflow-hidden">
                                        <img
                                            src={item.image}
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

                                        <h3 className="text-lg font-semibold mt-1 font-my-font-regular line-clamp-1">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </section>

            {/* featured destination close */}
        </>
    )
} 