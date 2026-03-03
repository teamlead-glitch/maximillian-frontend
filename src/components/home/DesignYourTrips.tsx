"use client";

import Link from "next/link";
export default function DesignYourTrips() {

    return (
        <>
            {/* design your trips */}
            <section className="bg-white py-20 md:py-20 xl:py-40">
                <div className="max-w-[1300px]  mx-auto px-5">
                    <div className="flex flex-col md:flex-row justify-end items-start md:items-center w-full gap-4 md:gap-8">
                        <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">Design <br />
                            Your Trip</h3></div>
                        <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                        <div className="w-full md:w-[200px]"><p>Some journeys can’t be templated. Design a fully personalised journey with us.</p></div>
                        <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                        <div className="inline-block">
                            <Link href="/designyourtrip" className="group flex items-center font-my-font-semibold text-black text-sm sm:text-base justify-center py-3 mt-3 cursor-pointer">
                                <span className="mr-3">Start Designing</span>
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
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1300px]  mx-auto px-5 md:px-10 w-full mt-3 md:mt-10">
                    <img src="images/design-your-trips.svg" alt="" className="hidden md:block" />
                    <img src="images/design-your-trips-mobile.svg" alt="" className="block md:hidden" />
                </div>
            </section>

            {/* design your trips close */}
        </>
    )
}