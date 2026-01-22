export default function WhatMakeExc() {

    return (
        <>


            {/* What makes our travel packages exceptional */}
            <section className="bg-white py-10 md:py-40">
                <div className="max-w-[1300px] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mx-auto  px-5  ">
                    <div className="w-[10%]"><img src="images/logo-icon.svg" alt="" /></div>
                    <div className="inline-block]">
                        <h2 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) ">What makes our travel <br /> packages exceptional</h2>
                        <div className="flex gap-5">
                        </div>

                    </div>
                    <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                    <div className="inline-block"> <button className="group flex items-center font-my-font-semibold text-sm sm:text-base justify-center py-3 mt-3 cursor-pointer">
                        <span className="mr-3">Our World</span>

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

                <div className="max-w-[1300px] flex items-center gap-8 mx-auto mt-10 md:mt-20  px-5  ">
                    <div className=" hidden md:block md:w-[10%]"></div>
                    <div className="w-[90%]">
                        <div className="grid  items-center   sm:grid-cols-2 md:gap-5 lg:gap-10 xl:gap-15   lg:grid-cols-4">
                            <div className="pb-10 pr-0 md:pr-5">
                                <div className="pb-5"><img src="images/package-exception-icon-1.svg" alt="" /></div>

                                <p className="text-(--color-secondary)">Experiences over checklists. Not photo tick-box tourism.</p>
                            </div>
                            <div className="pb-10 pr-0 md:pr-5">
                                <div className="pb-5"><img src="images/package-exception-icon-2.svg" alt="" /></div>

                                <p className="text-(--color-secondary)">Private guides & exclusive access.</p>
                            </div>
                            <div className="pb-10 pr-0 md:pr-5">
                                <div className="pb-5"><img src="images/package-exception-icon-3.svg" alt="" /></div>

                                <p className="text-(--color-secondary)">Handpicked luxury hotels & villas.</p>
                            </div>
                            <div className="pb-10 pr-0 md:pr-5">
                                <div className="pb-5"><img src="images/package-exception-icon-4.svg" alt="" /></div>

                                <p className="text-(--color-secondary)">Flexible itineraries, no rigid schedules.</p>
                            </div>
                            <div className="pb-10 pr-0 md:pr-5">
                                <div className="pb-5"><img src="images/package-exception-icon-5.svg" alt="" /></div>

                                <p className="text-(--color-secondary)">Thoughtful pacing. Space to explore, reflect & connect.</p>
                            </div>
                            <div className="pb-10 pr-0 md:pr-5">
                                <div className="pb-5"><img src="images/package-exception-icon-6.svg" alt="" /></div>

                                <p className="text-(--color-secondary)">Deeper immersion rather than rushed sightseeing.</p>
                            </div>
                            <div className="pb-10 pr-0 md:pr-5">
                                <div className="pb-5"><img src="images/package-exception-icon-7.svg" alt="" /></div>

                                <p className="text-(--color-secondary)">24/7 global concierge support.</p>
                            </div>
                            <div className="pb-10 pr-0 md:pr-5">
                                <div className="pb-5"><img src="images/package-exception-icon-8.svg" alt="" /></div>

                                <p className="text-(--color-secondary)">Discreet, personalised service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What makes our travel packages exceptional close */}
        </>
    )
}