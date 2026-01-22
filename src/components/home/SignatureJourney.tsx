export default function SignatureJourney() {

    return (
        <>
            {/* signature journey section */}

            <section className="bg-white pt-0 md:pt-20 md:pb-20">
                <div className="max-w-[1300px]  mx-auto px-5">
                    <div className="flex flex-col md:flex-row justify-end items-start md:items-center w-full gap-4 md:gap-8">
                        <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">Our <br />
                            Signature Journeys</h3></div>
                        <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                        <div className="w-full md:w-[200px]"><p className="text-sm text-(--color-secondary) ">A selection of our carefully curated international experiences.</p></div>
                        <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                        <div className="inline-block"> <button className="flex items-center text-sm sm:text-base font-my-font-semibold justify-center py-3 cursor-pointer  ">
                            <span className="mr-3 flex flex-wrap justify-start items-start">View All Signature Journeys</span>
                            <svg
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-4 lg:gap-10 mt-5 md:mt-20">
                        <div className="div">
                            <div className="rounded-md relative aspect-[3/4] overflow-hidden"><img src="images/signature-journey-1.jpg" className="rounded-md w-full h-full object-cover" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
                                </div>
                                <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                                    <h3 className="font-my-font-regular text-white text-2xl">Timeless Europe</h3>
                                    <div className="text-white text-xs">
                                        <ul className="flex flex-wrap justify-center items-center gap-2 mt-1">
                                            <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                                                Europe
                                            </li>
                                            <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                                                Cultural
                                            </li>
                                            <li className="relative">
                                                Small Group
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="div">
                            <div className="rounded-md relative aspect-[3/4] overflow-hidden">
                                <img src="images/signature-journey-2.jpg" className="rounded-md w-full h-full object-cover" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
                                </div>
                                <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                                    <h3 className="font-my-font-regular text-white text-2xl">Japan in Quiet Detail</h3>
                                    <div className="text-white text-xs">
                                        <ul className="flex flex-wrap justify-center items-center gap-2 mt-1">
                                            <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                                                Asia
                                            </li>
                                            <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                                                Slow Travel
                                            </li>

                                            <li className="relative ">
                                                Private
                                            </li>
                                        </ul>
                                    </div>
                                </div></div>
                        </div>
                        <div className="div">
                            <div className="rounded-md relative aspect-[3/4] overflow-hidden"><img src="images/signature-journey-3.jpg" className="rounded-md w-full h-full object-cover" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
                                </div>
                                <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                                    <h3 className="font-my-font-regular text-white text-2xl">American Landscapes</h3>
                                    <div className="text-white text-xs">
                                        <ul className="flex flex-wrap justify-center items-center gap-2 mt-1">
                                            <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                                                USA
                                            </li>
                                            <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                                                Scenic
                                            </li>
                                            <li className="relative ">
                                                Photography
                                            </li>
                                        </ul>
                                    </div>
                                </div></div>
                        </div>
                        <div className="div">
                            <div className="rounded-md relative aspect-[3/4] overflow-hidden"><img src="images/signature-journey-4.jpg" className="rounded-md w-full h-full object-cover" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
                                </div>
                                <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                                    <h3 className="font-my-font-regular text-white text-2xl">African Wilderness</h3>
                                    <div className="text-white text-xs">
                                        <ul className="flex flex-wrap justify-center items-center gap-2 mt-1">
                                            <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                                                Africa
                                            </li>
                                            <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                                                Slow Travel
                                            </li>
                                            <li className="relative ">
                                                Photography
                                            </li>
                                        </ul>
                                    </div>
                                </div></div>
                        </div>
                    </div>

                </div>
            </section>
            {/* signature journey section close */}
        </>
    )
}