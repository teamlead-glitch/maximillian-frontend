
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";




const logos = [
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

];

export default function LogoCarousel(){

    return(
        <>
        

            {/* logo carousel */}
            <section className="w-full  py-10 md:py-20 ">
                <Swiper
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
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt={`logo-${index}`}
                                    className="h-16 w-auto object-contain 
               "
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            {/* logo carousel close */}
        </>
    )
}