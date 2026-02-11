export default function ExperienceTour() {

    return (
        <>
            {/* experience tour */}
            <section className="bg-white py-20">
                <div className="max-w-[1300px]  mx-auto px-5">
                    <div className="flex gap-8 flex-col md:flex-row">
                        <div className="w-full md:w-1/4 relative mr-0 md:pr-10"><h3 className=" font-my-font-regular text-3xl md:text-4xl  text-(--color-secondary) md:text-right">Experience <br /> Tours</h3>  <div className="absolute right-0 top-0  w-px h-10 bg-gray-400 md:block hidden"></div></div>
                        <div className="w-full md:w-3/4">
                            <div className="flex flex-col sm:flex-row w-full gap-5 md:gap-10 mb-4 md:mb-10">
                                <a href="" className="group block w-full sm:w-1/2 py-3">
                                    <div className="pb-5">
                                        <img
                                            src="images/experience-tour-icon1.svg"
                                            alt="Cultural Journeys"
                                            className="transition-transform duration-500 group-hover:translate-x-[10px] w-[45px] h-[45px]"
                                        />
                                    </div>
                                    <h4 className="text-1xl font-my-font-semibold">Cultural Journeys</h4>
                                    <p className="text-(--color-secondary)">Immersive experiences rooted in history, art, and local traditions.</p>
                                </a>
                                <a href="" className="group block w-full sm:w-1/2 py-3">
                                    <div className="pb-5"><img src="images/experience-tour-icon2.svg" alt="" className="transition-transform duration-500 group-hover:translate-x-[10px] w-[45px] h-[45px]" /></div>
                                    <h4 className="text-1xl font-my-font-semibold">Photography Tours</h4>
                                    <p className="text-(--color-secondary)">Carefully paced journeys designed for visual storytelling.</p>
                                </a>
                                <a href="" className="group block w-full sm:w-1/2 py-3">
                                    <div className="pb-5"><img src="images/experience-tour-icon3.svg" alt="" className="transition-transform duration-500 group-hover:translate-x-[10px] w-[45px] h-[45px]" /></div>
                                    <h4 className="text-1xl font-my-font-semibold">Trekking and Outdoors</h4>
                                    <p className=" text-(--color-secondary)">Nature-led travel for those who seek landscapes beyond the ordinary.</p>
                                </a>

                            </div>
                            <div className="flex flex-col sm:flex-row w-full gap-5 md:gap-10 mb-4 md:mb-10">
                                <a href="" className="group block w-full sm:w-1/2 py-3">
                                    <div className="pb-5"><img src="images/experience-tour-icon1.svg" alt="" className="transition-transform duration-500 group-hover:translate-x-[10px] w-[45px] h-[45px]" /></div>
                                    <h4 className="text-1xl font-my-font-semibold">Cultural Journeys</h4>
                                    <p className=" text-(--color-secondary)">Immersive experiences rooted in history, art, and local traditions.</p>
                                </a>
                                <a href="" className="group block w-full sm:w-1/2 py-3">
                                    <div className="pb-5"><img src="images/experience-tour-icon2.svg" alt="" className="transition-transform duration-500 group-hover:translate-x-[10px] w-[45px] h-[45px]" /></div>
                                    <h4 className="text-1xl font-my-font-semibold">Photography Tours</h4>
                                    <p className=" text-(--color-secondary)">Carefully paced journeys designed for visual storytelling.</p>
                                </a>
                                <a href="" className="group block w-full sm:w-1/2 py-3">
                                    <div className="pb-5"><img src="images/experience-tour-icon3.svg" alt="" className="transition-transform duration-500 group-hover:translate-x-[10px] w-[45px] h-[45px]" /></div>
                                    <h4 className="text-1xl font-my-font-semibold">Trekking and Outdoors</h4>
                                    <p className=" text-(--color-secondary)">Nature-led travel for those who seek landscapes beyond the ordinary.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* experience tour close */}
        </>
    )
}