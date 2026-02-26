
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";


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
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
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
    return (
        <>

            {/* testimonials */}
            <section className="bg-[#f9f7f5] pt-20   md:pt-20   xl:pt-40 pb-10 md:pb-20">
                <div className="  mx-auto px-5">
                    <div className="mb-4 mx-auto flex justify-center">
                        <img src="images/quote-icon.svg" alt="" />
                    </div>
                    <div className="w-full my-10 md:py-5 xl:py-10">
                        <div className="max-w-4xl mx-auto text-center">

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                navigation={false}   // 👈 no arrows
                                loop
                                spaceBetween={10}
                                autoplay={{
                                    delay: 3000,          // 3 seconds per slide
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true, // optional: pause on hover
                                }}

                                className="testimonial-swiper"
                            >
                                {testimonials.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="flex flex-col items-center">
                                            <p className="text-lg md:text-2xl lg:text-3xl text-(--color-secondary)  mb-10 leading-normal">
                                                {item.text}
                                            </p>

                                            <div className="flex items-center gap-4 md:gap-10 mb-10 overflow-hidden justify-center min-h-[80px]">
                                                {(() => {
                                                    const currentIndex = testimonials.findIndex((t) => t.id === item.id);
                                                    const total = testimonials.length;
                                                    const visibleAvatars = [-2, -1, 0, 1, 2].map((offset) => {
                                                        const index = (currentIndex + offset + total) % total;
                                                        return testimonials[index];
                                                    });

                                                    return visibleAvatars.map((u, idx) => (
                                                        <img
                                                            key={`${u.id}-${idx}`}
                                                            src={u.avatar}
                                                            alt={u.name}
                                                            className={`w-12 h-12 rounded-full object-cover transition-all duration-300
                                ${idx === 2
                                                                    ? "ring-0 scale-150 grayscale-0 opacity-100 z-10"
                                                                    : "opacity-40 grayscale scale-90"
                                                                }`}
                                                        />
                                                    ));
                                                })()}
                                            </div>

                                            <h4 className="font-grape-nuts text-2xl text-(--color-secondary)">{item.name}</h4>
                                            <p className="text-(--color-secondary)">
                                                {item.designation}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="mb-4 mx-auto flex justify-center">
                        <div className="inline-block">  <button className="group flex items-center font-my-font-semibold text-black text-sm sm:text-base justify-center py-3 mt-3 cursor-pointer">
                            <span className="mr-3">View All Testimonials</span>

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
            </section>
            {/* testimonials close */}
        </>
    )
}