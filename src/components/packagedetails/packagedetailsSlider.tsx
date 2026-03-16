"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Gallery } from '@/types/PackageDetailsType';
import Image from 'next/image';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";

import { useState } from 'react';
import { TalktoUS_Errors, TalktoUS_types, TalktoUsEnquiryResponse } from '@/types/packagePopupTypes';
import { toast, ToastContainer } from 'react-toastify';
import { apiService } from '@/services/api';
import SimpleCaptcha from '../Captcha';
interface PackageSliderprops {
    gallery?: Gallery[];
    price_text?: string;
    title?: string;
    id?: number;
}

function PackagedetailsSlider({ gallery, price_text, title, id }: PackageSliderprops) {


    useEffect(() => {
        const options = {
            Toolbar: {
                display: ["zoom", "close"],
            },
        } as any;

        Fancybox.bind("[data-fancybox='gallery']", options);

        return () => Fancybox.unbind("[data-fancybox='gallery']");
    }, []);

    // useEffect(() => {
    //     Fancybox.bind("[data-fancybox='gallery']", {
    //         Thumbs: false,
    //         Toolbar: {
    //             display: [
    //                 "zoom",
    //                 "close",
    //             ],
    //         },
    //     });

    //     return () => {
    //         Fancybox.destroy();
    //     };
    // }, []);

    const [talkOpen, setTalkOpen] = useState(false);
    //loader
    const [loading, setLoading] = useState(false);
    //for captcha validation
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const [captchaResetKey, setCaptchaResetKey] = useState(0);

    const [formData, setFormData] = useState<TalktoUS_types>({
        name: "",
        email: "",
        phone: "",
        message: "",
        tour_id: ""

    });
    console.log(formData);

    const [errors, setErrors] = useState<TalktoUS_Errors>({
        name: "",
        phone: "",
        email: "",
        message: "",
    });



    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };



    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    /* -----------------------------------------------------------------------
          FORM VALIDATION (STRONG + CLEAN)
       ----------------------------------------------------------------------- */
    const validate = (): boolean => {
        const newErrors: Partial<TalktoUS_Errors> = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            newErrors.name = "Name cannot contain numbers or special characters";
        }

        // Mobile validation
        if (!formData.phone.trim()) {
            newErrors.phone = "Mobile number is required";
        } else if (!/^[+]?[0-9\s-]+$/.test(formData.phone)) {
            newErrors.phone = "Mobile number should contain only numbers";
        } else if (!/^[1-9]\d{9,14}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid mobile number";
        } else if (!/^\d{1,13}$/.test(formData.phone)) {
            newErrors.phone = "Mobile number cannot exceed 13 digits";
        }


        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 5) {
            newErrors.message = "Message must be at least 5 characters";
        }

        setErrors(newErrors as TalktoUS_Errors);

        return Object.keys(newErrors).length === 0; // true → no errors
    };


    //submit form
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return; // 🔥 extra safety (prevents double click)
        // form validation
        if (!validate()) return;
        if (!isCaptchaVerified) {
            toast.error("Please verify captcha before submitting");
            return;
        }


        try {

            setLoading(true); // ⭐ start loader

            const payload = {
                name: formData.name.trim(),
                phone: formData.phone,
                email: formData.email,
                message: formData.message,
                tour_id: id


            };

            const res = await apiService.post<TalktoUsEnquiryResponse>(
                "/package-enquiry", // ✅ remove /api if BASE_URL already contains it
                payload
            );

            console.log(res);

            if (res.result === "success") {
                toast.success(res.message || "Package Enquiry Sent Successfully")
                // Reset form
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    message: "",
                    tour_id: ""
                });
                setTimeout(() => {
                    setTalkOpen(false);
                }, 2300);
                setIsCaptchaVerified(false);
                setCaptchaResetKey((prev) => prev + 1); // 🔄 refresh captcha

            } else {
                toast.error(res.message || "Something went wrong"); // ✅ fixed syntax
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error("CONTACT FORM ERROR:", error);

            // ✅ show backend validation error
            toast.error("Failed to send. Please try again!");
        } finally {
            setLoading(false); // ⭐ stop loader
        }
    };

    return (
        <>
            <section className="bg-[#F5F2EE] w-full py-15 md:py-30 ">
                <div className="flex flex-col md:flex-row justify-center items-start md:items-center w-full gap-4 md:gap-8 px-5">
                    <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right w-[200px]">{price_text} </h3></div>
                    <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                    <div className="w-3/4 md:w-[400px] px-0 md:px-5"><p>{title} is a <span className="font-bold">customisable FIT journey</span>. Pricing varies based on travel dates, hotel category, and personal preferences.
                    </p></div>
                    <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                    <div className="inline-block">
                        <button onClick={() => setTalkOpen(true)} className="group flex items-center font-my-font-semibold text-black text-sm sm:text-base justify-center py-2 md:py-3 mt-3 cursor-pointer">
                            <span className="mr-3">Talk to Us</span>

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
                        </button>
                    </div>
                </div>


                {talkOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                        onClick={() => setTalkOpen(false)}
                    >
                        <div
                            className="bg-white rounded-xl shadow-xl w-[90%] md:w-[500px] p-8 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setTalkOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
                            >
                                ✕
                            </button>

                            <h2 className="text-2xl font-my-font-semibold text-(--color-secondary) mb-6 text-center">
                                Talk To Us
                            </h2>

                            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

                                <div>
                                    <input
                                        id='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Full Name"
                                        className="border border-[#5b5e60] rounded-lg p-3 outline-none text-(--color-secondary) placeholder:text-gray-500 w-full"
                                    />
                                    {errors.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>}
                                </div>

                                <div>
                                    <input
                                        id='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="Email Address"
                                        className="border border-[#5b5e60] rounded-lg p-3 outline-none text-(--color-secondary) placeholder:text-gray-500 w-full"
                                    />
                                    {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>}
                                </div>

                                <div>
                                    <input
                                        id='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="border border-[#5b5e60] rounded-lg p-3 outline-none text-(--color-secondary) placeholder:text-gray-500 w-full"
                                    />
                                    {errors.phone && <p style={{ color: "red", fontSize: "12px" }}>{errors.phone}</p>}
                                </div>

                                {/* Extra fields */}

                                <div>
                                    <input
                                        type="text"
                                        placeholder={title} readOnly
                                        className="border border-[#5b5e60] rounded-lg p-3 outline-none text-(--color-secondary) placeholder:text-gray-500 w-full"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        id='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows={3}
                                        className="border border-[#5b5e60] rounded-lg p-3 outline-none text-(--color-secondary) placeholder:text-gray-500 w-full"
                                    />
                                    {errors.message && <p style={{ color: "red", fontSize: "12px" }}>{errors.message}</p>}
                                </div>
                                <SimpleCaptcha onVerify={setIsCaptchaVerified} resetTrigger={captchaResetKey} />

                                <button type="submit" disabled={loading} className="
relative overflow-hidden
bg-black/90 backdrop-blur-md text-white cursor-pointer
px-4 py-3 md:px-6 md:py-4 rounded-lg font-my-font-semibold
shadow-lg text-xs sm:text-base
transition-all duration-300
hover:bg-black/100
before:absolute before:inset-0
before:-translate-x-full
before:bg-gradient-to-r 
before:from-transparent before:via-white/40 before:to-transparent
before:transition-transform before:duration-700
hover:before:translate-x-full
">
                                    {loading ? (
                                        <span className="flex justify-center items-center text-white  w-full gap-2">

                                            Sending.......
                                            <span className="inline-block animate-spin h-4 w-4 border-2 border-red-500 border-t-transparent rounded-full"></span>
                                        </span>
                                    ) : (
                                        "Send Enquiry"
                                    )}


                                </button>

                            </form>
                            {/* Toast */}
                            <ToastContainer position="top-right" autoClose={2000} theme="colored" />
                        </div>
                    </div>
                )}



                {/* slide */}


                <div className="w-full mt-20 relative">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView="auto"
                        centeredSlides
                        spaceBetween={30}
                        loop={true}
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: ".featured-prev",
                            nextEl: ".featured-next",
                        }}



                        allowTouchMove={true}
                        className="w-full"
                    >
                        {gallery?.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className="!w-[260px] md:!w-[280px] lg:!w-[300px]"
                            >
                                <a
                                    href={item.image_path}
                                    data-fancybox="gallery"
                                    className="block bg-white rounded-md overflow-hidden mt-20 group"
                                >
                                    <div className="w-full aspect-4/3 overflow-hidden">
                                        <Image
                                            src={item.image_path}
                                            alt={`Gallery ${index}`}
                                            fill
                                            className="w-full h-full object-cover rounded-md transition-transform duration-500 "
                                        />
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}


                        <button className="featured-prev absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition hover:bg-white/30 hover:backdrop-blur-lg hover:text-white ">
                            <svg width="18" height="18" viewBox="0 0 24 24">
                                <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" fill="none" />
                            </svg>
                        </button>

                        {/* Right Arrow */}
                        <button className="featured-next absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition hover:bg-white/30 hover:backdrop-blur-lg hover:text-white ">
                            <svg width="18" height="18" viewBox="0 0 24 24">
                                <path d="M9 18L15 12L9 6" stroke="#000" strokeWidth="2" fill="none" />
                            </svg>
                        </button>
                    </Swiper>


                    {selectedImage && (
                        <div
                            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <div
                                className="relative max-w-5xl w-full h-[80vh]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300 transition cursor-pointer"
                                >
                                    ✕
                                </button>

                                <Image
                                    src={selectedImage}
                                    alt="Popup Image"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </section >



        </>
    )
}

export default PackagedetailsSlider