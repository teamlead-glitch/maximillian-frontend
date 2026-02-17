"use client";

import Link from "next/link";
import TopMenuinner from "@/components/common/header/TopMenuinner";

import LogoCarousel from "@/components/home/LogoCarousel";


export default function NotFound() {
    return (
        <>
            <TopMenuinner />
            {/* HEADER */}

            <div className="max-w-[1300px] flex mx-auto px-10 md:px-24 lg:px-44 py-32 md:py-40 lg:py-70 ">
                <div className="w-full flex flex-col items-center text-center mx-auto">
                    <h1 className="font-my-font-regular text-break  text-4xl xl:text-5xl text-(--color-secondary) text-left sm:text-right ">  404</h1>
                    <p className="text-lg text-(--color-secondary)">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please try the following:</p>
                    <hr className="w-full  mx-auto my-5 border-gray-300" />
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5">
                        <div className="flex items-center gap-2 whitespace-nowrap"><img src="images/checkspelling-icon.svg" alt="" />
                            <a href="" className="text-(--color-secondary)">Check your spelling</a></div>
                        <div className="flex items-center gap-2 whitespace-nowrap"><img src="images/returnhome-icon.svg" alt="" />
                            <a href="" className="text-(--color-secondary) underline">Return to the&nbsp;Home&nbsp;page</a></div>
                        <div className="flex items-center gap-2 whitespace-nowrap"><img src="images/clickback-icon.svg" alt="" />
                            <a href="" className="text-(--color-secondary) underline">Click the&nbsp;Back&nbsp;button</a></div>
                    </div>
                    <hr className="w-full mx-auto my-5 border-gray-300" />
                    <div className="w-full flex flex-col md:flex-row gap-5 px-5 items-center justify-between">
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

                </div>

            </div>
            <LogoCarousel />

        </>
    );
}
