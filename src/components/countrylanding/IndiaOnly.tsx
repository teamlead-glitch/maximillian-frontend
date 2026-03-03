"use client";

export default function IndiaOnly(){

    return(
        <>
        <div className="w-full py-10  md:py-20 mx-auto flex  flex-col lg:flex-row justify-between items-center bg-white">
                <div className=" w-full lg:w-1/2 aspect-square relative group overflow-hidden">

                    <img
                        src="../../images/curated-left-img.webp"
                        className="w-full h-full object-cover rounded-0 md:rounded-r-[10px] z-10"
                    />

                    <div className="absolute top-10 right-10 z-10">
                        <img src="../../images/curated-india-img.svg" className="w-[80px] md:w-auto" />
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/80 to-transparent rounded-0 md:rounded-b-md"></div>

                    {/* TEXT — hidden by default, visible on hover */}
                    <div className="absolute bottom-0 wifull  md:w-1/2 pl-5 md:pl-15 pb-5 md:pb-15 
                   ">

                        <h4 className="text-white text-3xl font-my-font-regular">
                            Royal and Heritage Journeys
                        </h4>

                        <p className="text-white line-clamp-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non est autem rem! Autem animi ratione architecto maxime ex perspiciatis? Consectetur minus in provident culpa nemo at accusantium, eum fugit dolorem?
                        </p>

                        <button className="group flex items-center font-my-font-semibold text-sm text-white sm:text-base py-3 mt-3 cursor-pointer">
                            <span className="mr-3">View More Journeys</span>

                            <svg
                                className="transition-transform duration-300 ease-out group-hover:translate-x-[10px]"
                                width="53"
                                height="8"
                                viewBox="0 0 53 8"
                                fill="none"
                            >
                                <path
                                    d="M52.3536 4.03556C52.5488 3.8403 52.5488 3.52372 52.3536 3.32845L49.1716 0.146473C48.9763 -0.0487893 48.6597 -0.0487893 48.4645 0.146473C48.2692 0.341735 48.2692 0.658318 48.4645 0.85358L51.2929 3.68201L48.4645 6.51043C48.2692 6.7057 48.2692 7.02228 48.4645 7.21754C48.6597 7.4128 48.9763 7.4128 49.1716 7.21754L52.3536 4.03556ZM0 3.68201V4.18201H52V3.68201V3.18201H0V3.68201Z"
                                    fill="#fff"
                                />
                            </svg>
                        </button>
                    </div>

                </div>
                <div className="w-full lg:w-1/2 px-10 md:px-20  xl:px-40 h-full mt-15   lg:mt-0">
                    <div className="w-full flex flex-col items-center justify-between h-full gap-3">

                        <div className="w-full aspect-4/2.5 relative group overflow-hidden">
                            <img src="../../images/himalayan.webp" className="w-full h-full object-cover rounded-xl  opacity-0
                transition-all duration-500
                group-hover:opacity-100 group-hover:translate-y-0 " />
                            <div className="absolute bottom-0 left-0 right-0 h-full bg-black/50 to-transparent rounded-xl opacity-0 
                transition-all duration-500
                group-hover:opacity-100 group-hover:translate-y-0"></div>
                            <div className="absolute inset-0 flex flex-col items-start justify-center 
                px-10 py-5
              ">

                                <h4 className="text-(--color-secondary) text-3xl font-my-font-regular group-hover:text-white">
                                    Himalayan Landscapes
                                </h4>

                                <p className="text-(--color-secondary) line-clamp-3 hidden md:block group-hover:text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet malesuada est, id laoreet mi mattis ut.
                                </p>

                                <button className="group flex items-center font-my-font-semibold text-sm text-(--color-secondary) sm:text-base py-3  cursor-pointer group-hover:text-white">
                                    <span className="mr-3">View More Journeys</span>

                                    <svg
                                        className="transition-transform duration-300 ease-out group-hover:translate-x-[10px]"
                                        width="53"
                                        height="8"
                                        viewBox="0 0 53 8"
                                        fill="none"
                                    >
                                        <path
                                            d="M52.3536 4.03556C52.5488 3.8403 52.5488 3.52372 52.3536 3.32845L49.1716 0.146473C48.9763 -0.0487893 48.6597 -0.0487893 48.4645 0.146473C48.2692 0.341735 48.2692 0.658318 48.4645 0.85358L51.2929 3.68201L48.4645 6.51043C48.2692 6.7057 48.2692 7.02228 48.4645 7.21754C48.6597 7.4128 48.9763 7.4128 49.1716 7.21754L52.3536 4.03556ZM0 3.68201V4.18201H52V3.68201V3.18201H0V3.68201Z"
                                            className="fill-black group-hover:fill-white transition-colors"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* second image */}
                        <div className="w-full aspect-4/2.5 relative group overflow-hidden">
                            <img src="../../images/south_sideimg.webp" className="w-full h-full object-cover rounded-xl  opacity-0
                transition-all duration-500
                group-hover:opacity-100 group-hover:translate-y-0 " />
                            <div className="absolute bottom-0 left-0 right-0 h-full bg-black/50 to-transparent rounded-xl opacity-0 
                transition-all duration-500
                group-hover:opacity-100 group-hover:translate-y-0"></div>
                            <div className="absolute inset-0 flex flex-col items-start justify-center 
                px-10 py-5
              ">

                                <h4 className="text-(--color-secondary) text-3xl font-my-font-regular group-hover:text-white">
                                    Southern India and Kerala
                                </h4>

                                <p className="text-(--color-secondary) line-clamp-3 hidden md:block group-hover:text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet malesuada est, id laoreet mi mattis ut.
                                </p>

                                <button className="group flex items-center font-my-font-semibold text-sm text-(--color-secondary) sm:text-base py-3  cursor-pointer group-hover:text-white">
                                    <span className="mr-3">View More Journeys</span>

                                    <svg
                                        className="transition-transform duration-300 ease-out group-hover:translate-x-[10px]"
                                        width="53"
                                        height="8"
                                        viewBox="0 0 53 8"
                                        fill="none"
                                    >
                                        <path
                                            d="M52.3536 4.03556C52.5488 3.8403 52.5488 3.52372 52.3536 3.32845L49.1716 0.146473C48.9763 -0.0487893 48.6597 -0.0487893 48.4645 0.146473C48.2692 0.341735 48.2692 0.658318 48.4645 0.85358L51.2929 3.68201L48.4645 6.51043C48.2692 6.7057 48.2692 7.02228 48.4645 7.21754C48.6597 7.4128 48.9763 7.4128 49.1716 7.21754L52.3536 4.03556ZM0 3.68201V4.18201H52V3.68201V3.18201H0V3.68201Z"
                                            className="fill-black group-hover:fill-white transition-colors"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* third image */}
                        <div className="w-full aspect-4/2.5 relative group overflow-hidden">
                            <img src="../../images/holi.webp" className="w-full h-full object-cover rounded-xl  opacity-0
                transition-all duration-500
                group-hover:opacity-100 group-hover:translate-y-0 " />
                            <div className="absolute bottom-0 left-0 right-0 h-full bg-black/50 to-transparent rounded-xl opacity-0 
                transition-all duration-500
                group-hover:opacity-100 group-hover:translate-y-0"></div>
                            <div className="absolute inset-0 flex flex-col items-start justify-center 
                px-10 py-5
              ">

                                <h4 className="text-(--color-secondary) text-3xl font-my-font-regular group-hover:text-white">
                                    Festivals and Cultural Moments
                                </h4>

                                <p className="text-(--color-secondary) line-clamp-3 hidden md:block group-hover:text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet malesuada est, id laoreet mi mattis ut.
                                </p>

                                <button className="group flex items-center font-my-font-semibold text-sm text-(--color-secondary) sm:text-base py-3  cursor-pointer group-hover:text-white">
                                    <span className="mr-3">View More Journeys</span>

                                    <svg
                                        className="transition-transform duration-300 ease-out group-hover:translate-x-[10px]"
                                        width="53"
                                        height="8"
                                        viewBox="0 0 53 8"
                                        fill="none"
                                    >
                                        <path
                                            d="M52.3536 4.03556C52.5488 3.8403 52.5488 3.52372 52.3536 3.32845L49.1716 0.146473C48.9763 -0.0487893 48.6597 -0.0487893 48.4645 0.146473C48.2692 0.341735 48.2692 0.658318 48.4645 0.85358L51.2929 3.68201L48.4645 6.51043C48.2692 6.7057 48.2692 7.02228 48.4645 7.21754C48.6597 7.4128 48.9763 7.4128 49.1716 7.21754L52.3536 4.03556ZM0 3.68201V4.18201H52V3.68201V3.18201H0V3.68201Z"
                                            className="fill-black group-hover:fill-white transition-colors"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <section className="relative  py-10 md:pt-20 md:pb-10   xl:pt-30 xl:pb-15 px-5 overflow-hidden bg-white">
                <div className="max-w-[1000px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5 items-center">
                        <div className="pr-0 md:pr-15 xl:pr-36">
                            <h3 className="font-my-font-regular text-break text-4xl xl:text-5xl  text-(--color-secondary) mb-5 ">What Makes Our India Journeys Different/Exceptional?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet malesuada est, id laoreet mi mattis ut. Aenean ultrices convallis sagittis. Nullam posuere, tortor a fringilla condimentum, dui justo facilisis sem, ac varius dolor leo ac ex.</p>
                        </div>
                        <div className="pl-0 md:pl-10">
                            <div className="aspect-[2/3]">
                                <img src="../../images/region_landing_sideimg2.webp" alt="" className="w-full h-full object-cover rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
    )
}