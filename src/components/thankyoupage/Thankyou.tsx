"use client";
import LogoCarousel from "@/components/home/LogoCarousel"
export default function Thankyou() {


    return (

        <>

            <section className="relative pt-40 pb-20 overflow-hidden bg-[#F5F2EE] z-10">
                <div className="max-w-[1300px] flex mx-auto">
                    <div className="flex flex-col mx-auto justify-center w-xl px-5">
                        <h1 className="font-my-font-regular text-break text-center  text-4xl xl:text-5xl text-(--color-secondary) ">
                            Thanks,<br /> We got your enquiry.
                        </h1>
                        <p className="mt-5 ">
                            Every enquiry is personally reviewed by our travel design team. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet malesuada est, id laoreet mi mattis ut. Aenean ultrices convallis sagittis. Nullam posuere, tortor a fringilla condimentum.
                        </p>
                    </div >
                </div >
            </section >

            <section className="relative py-20 overflow-hidden bg-white z-10">
                <div className="max-w-[1200px] flex mx-auto px-10">
                    <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">

                        <div className="w-full mb-5 md:mb-0">
                            <div className="text-[#D3CABF] text-4xl font-my-font-regular mb-4">01</div>
                            <h3 className="text-(--color-secondary) text-xl font-my-font-semibold ">Our team will contact you</h3>
                            <p className="mt-2 ">
                                And will discuss & plan about your bespoke journey in detail.
                            </p>
                        </div>
                        <div className="flex justify-start md:justify-center items-start md:items-center py-10">
                            <img
                                src="images/arrow-right.svg"
                                alt=""
                                className="rotate-90 md:rotate-0"
                            />
                        </div>
                        <div className="w-full mb-5 md:mb-0">
                            <div className="text-[#D3CABF] text-4xl font-my-font-regular mb-4">02</div>
                            <h3 className="text-(--color-secondary) text-xl font-my-font-semibold ">We Curate the Experience</h3>
                            <p className=" mt-2 ">
                                Based on the conversation, we will craft a tailored travel experience for you.
                            </p>
                        </div>
                        <div className="flex justify-start md:justify-center items-start md:items-center py-10">
                            <img
                                src="images/arrow-right.svg"
                                alt=""
                                className="rotate-90 md:rotate-0"
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-[#D3CABF] text-4xl font-my-font-regular mb-4">03</div>
                            <h3 className="text-(--color-secondary) text-xl font-my-font-semibold ">Pack for the journey!</h3>
                            <p className=" mt-2 ">
                                When you’re happy with the package and itinerary, we’re good to pack!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1300px] mt-10 mx-auto flex flex-col md:flex-row gap-5 md:gap-10 md:pt-20 md:px-20 px-5 pt-8 items-center justify-center">
                    <a href="tel:+919998868866" className="flex gap-2 text-[#46545E] ">
                        <img src="/images/call-icon.svg" className="w-5" /> +91 999 886 8866
                    </a>
                    <a href="https://wa.me/919998868866" className="flex gap-2 text-[#46545E] ">
                        <img src="/images/whatsapp-icon.svg" className="w-5" /> WhatsApp
                    </a>
                    <a href="mailto:hello@maximilianholidays.com" className="flex gap-2 text-[#46545E] ">
                        <img src="/images/mail-icon.svg" className="w-5" />
                        hello@maximilianholidays.com
                    </a>
                </div>
            </section>
            <LogoCarousel />
        </>
    );
}