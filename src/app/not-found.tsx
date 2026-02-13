"use client";

import Link from "next/link";
import TopMenu from "@/components/common/header/TopMenu";
import Footer from "@/components/common/footer/footer";
import LogoCarousel from "@/components/home/LogoCarousel";
import BackToTop from "@/components/common/BackToTop";

export default function NotFound() {
    return (
        <>
            <TopMenu />
            {/* HEADER */}

            <div className="max-w-[1300px] flex mx-auto  px-70 py-70 ">
                <div className="flex flex-col items-center text-center mx-auto">
                    <h1 className="font-my-font-regular text-break lg:text-5xl text-4xl text-(--color-secondary) mb-5">
                        404
                    </h1>
                    <p className="text-lg text-(--color-secondary)">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please try the following:</p>
                    <hr className="w-full mx-auto my-5 border-gray-300" />
                    <div className="w-full flex justify-between">
                        <div className="flex items-center gap-2 whitespace-nowrap"><img src="images/checkspelling-icon.svg" alt="" />
                            <a href="" className="text-(--color-secondary)">Check your spelling</a></div>
                        <div className="flex items-center gap-2 whitespace-nowrap"><img src="images/returnhome-icon.svg" alt="" />
                            <a href="" className="text-(--color-secondary) underline">Return to the Home page</a></div>
                        <div className="flex items-center gap-2 whitespace-nowrap"><img src="images/clickback-icon.svg" alt="" />
                            <a href="" className="text-(--color-secondary) underline">Click the Back button</a></div>
                    </div>
                    <hr className="w-full mx-auto my-5 border-gray-300" />
                    <div className="w-full flex gap-5 px-5 items-center justify-between">
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
            <Footer />
            <BackToTop />
        </>
    );
}
