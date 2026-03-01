"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper";

const testimonials = [
    {
        id: 1,
        name: "Ethan Miller",
        designation: "Product Manager",
        text: "Our private journey with Maximillian Holidays was truly transformative. The cinematic landscapes of Swiss and it’s unhurried, editorial - style pace allowed us to connect deeply with the culture. It felt like a curated story, not a catalogue.",
        avatar: "/images/testi-1.png",
    },
    {
        id: 2,
        name: "Sophia Brown",
        designation: "Product Manager",
        text: "Our private journey with Maximillian Holidays was truly transformative. The cinematic landscapes of Swiss and it’s unhurried, editorial - style pace allowed us to connect deeply with the culture. It felt like a curated story, not a catalogue.",
        avatar: "/images/testi-2.png",
    },
    {
        id: 3,
        name: "Daniel Lee",
        designation: "Product Manager",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Our private journey with Maximillian Holidays was truly transformative. The cinematic landscapes of Swiss and it’s unhurried, editorial - style pace allowed us to connect deeply with the culture. It felt like a curated story, not a catalogue.",
        avatar: "/images/testi-3.png",
    },
    {
        id: 4,
        name: "Ethan Miller",
        designation: "Product Manager",
        text: "Our private journey with Maximillian Holidays was truly transformative. The cinematic landscapes of Swiss and it’s unhurried, editorial - style pace allowed us to connect deeply with the culture. It felt like a curated story, not a catalogue.",
        avatar: "/images/testi-1.png",
    },
];

export default function Testimonials() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
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
                            delay: 3000,
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

                                    <p className="text-lg md:text-2xl lg:text-3xl text-(--color-secondary) mb-10 leading-normal">
                                        {item.text}
                                    </p>

                                    <div className="py-3">
                                        <h4 className="font-grape-nuts text-2xl text-(--color-secondary)">
                                            {item.name}
                                        </h4>
                                        <p>{item.designation}</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* AVATAR THUMBNAILS */}
                    <div className="flex items-center justify-center gap-6 mt-5">

                        {testimonials.map((u, index) => (
                            <img
                                key={u.id}
                                src={u.avatar}
                                alt={u.name}
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
    );
}