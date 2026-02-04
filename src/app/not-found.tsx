"use client";

import Link from "next/link";
import TopMenu from "@/components/common/header/TopMenu";
import Footer from "@/components/common/footer/footer";

import BackToTop from "@/components/common/BackToTop";

export default function NotFound() {
    return (
        <>
            <TopMenu />
            {/* HEADER */}
            <section
                className="relative py-40 bg-black bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/404.jpg')",
                }}
            >
                {/* overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                <h1 className="relative z-10 text-center text-white text-4xl font-my-font-semibold">
                    404 Error
                </h1>
            </section>
            <div className=" flex items-center justify-center bg-white px-6 py-20 md:py-40">
                <div className="flex flex-col items-center text-center not-found">

                    <img src="/images/404.gif" alt="" className="w-50" />




                    <h2 className="text-3xl md:text-4xl  font-my-font-regular  text-(--color-secondary)">
                        Sorry, this page is unavailable.
                    </h2>
                    <a href="/">  <button className="group flex items-center font-my-font-semibold text-sm sm:text-base justify-center py-3 mt-3 cursor-pointer">
                        <span className="mr-3">Go back home</span>

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
                    </button></a>

                </div>

            </div>
            <Footer />
            <BackToTop />
        </>
    );
}
