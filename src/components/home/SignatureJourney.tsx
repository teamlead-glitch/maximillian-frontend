"use client";

import { useState, useEffect } from "react";
import { apiService } from "@/services/api";
import Loader from "../common/Loader";
import { journeyResponse } from "@/types/journeyTypes";
import JourneyCard from "../package/JourneyCard";
export default function SignatureJourney() {
    const [signatureJournerys, setJourney] = useState<journeyResponse[]>([]);
    // const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSignatureJourneys = async () => {

            try {
                const res = await apiService.get<journeyResponse[]>("/signature-packages?count=4");

                if (res) {
                    setJourney(res || []);

                }
            } catch (err) {
                console.log("Failed to load Journeys:" + err);
            }
            finally {
                setLoading(false);
            }

        };

        fetchSignatureJourneys();
    }, []);
    return (
        <>
            {/* signature journey section */}
            {loading ? (
                <Loader />
            ) : signatureJournerys.length === 0 ? (
                // <p>No journeys available</p>
                <></>
            ) : (
                <section className="bg-white pt-0 md:pt-20 md:pb-20">
                    <div className="max-w-[1300px]  mx-auto px-5">
                        <div className="flex flex-col md:flex-row justify-end items-start md:items-center w-full gap-4 md:gap-8">
                            <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">Our <br />
                                Signature Journeys</h3></div>
                            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                            <div className="w-full md:w-[200px]"><p className="text-sm text-(--color-secondary) ">A selection of our carefully curated international experiences.</p></div>
                            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                            <div className="inline-block">
                                <button className="group flex items-center font-my-font-semibold text-black text-sm sm:text-base justify-center py-3 mt-3 cursor-pointer">
                                    <span className="mr-3">View All Signature Journeys</span>

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


                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-4 lg:gap-10 mt-5 md:mt-20">
                            {signatureJournerys.map((item) => (
                                <JourneyCard key={item.id} journey={item} />
                            ))}
                        </div>



                    </div>
                </section>
            )}
            {/* signature journey section close */}
        </>
    )
}