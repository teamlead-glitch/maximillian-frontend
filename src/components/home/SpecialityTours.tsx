export default function SpecialityTours(){

    return(
        <>
          {/* speciality tours */}
            <section className="pt-0 md:pt-20 pb-10 md:pb-20">
                <div className="max-w-[1300px]  mx-auto px-5">
                    <div className="flex flex-col-reverse md:flex-row gap-8">

                        <div className="w-full md:w-3/4">
                            <div className="flex flex-col sm:flex-row w-full gap-5 md:gap-10 mb-4 md:mb-10">
                                <div className="w-full sm:w-1/2 py-3">
                                    <div className="pb-5"><img src="images/experience-tour-icon4.svg" alt="" /></div>
                                    <h4 className="font-my-font-semibold text-1xl">Ladies-Only Journeys</h4>
                                    <p className="text-(--color-secondary)">Immersive experiences rooted in history, art, and local traditions.</p>
                                </div>
                                <div className="w-full sm:w-1/2 py-3">
                                    <div className="pb-5"><img src="images/experience-tour-icon5.svg" alt="" /></div>
                                    <h4 className="font-my-font-semibold text-1xl">Family Travel</h4>
                                    <p className="text-(--color-secondary)">Carefully paced journeys designed for visual storytelling.</p>
                                </div>
                                <div className="w-full sm:w-1/2 py-3">
                                    <div className="pb-5"><img src="images/experience-tour-icon6.svg" alt="" /></div>
                                    <h4 className="font-my-font-semibold text-1xl">Slow Travel Experiences</h4>
                                    <p className="text-(--color-secondary)">Nature-led travel for those who seek landscapes beyond the ordinary.</p>
                                </div>

                            </div>
                            <div className="flex flex-col sm:flex-row w-full gap-5 md:gap-10 mb-4 md:mb-10">
                                <div className="w-full sm:w-1/2 py-3">
                                    <div className="pb-5"><img src="images/experience-tour-icon4.svg" alt="" /></div>
                                    <h4 className="font-my-font-semibold text-11xl">Ladies-Only Journeys</h4>
                                    <p className=" text-(--color-secondary)">Immersive experiences rooted in history, art, and local traditions.</p>
                                </div>
                                <div className="w-full sm:w-1/2 py-3">
                                    <div className="pb-5"><img src="images/experience-tour-icon5.svg" alt="" /></div>
                                    <h4 className="font-my-font-semibold text-1xl">Family Travel</h4>
                                    <p className="text-(--color-secondary)">Carefully paced journeys designed for visual storytelling.</p>
                                </div>
                                <div className="w-full sm:w-1/2 py-3">
                                    <div className="pb-5"><img src="images/experience-tour-icon6.svg" alt="" /></div>
                                    <h4 className="font-my-font-semibold text-1xl">Slow Travel Experiences</h4>
                                    <p className="text-(--color-secondary)">Nature-led travel for those who seek landscapes beyond the ordinary.</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/4 ml-0 md:pl-10">
                            <h3 className=" font-my-font-regular text-4xl text-(--color-secondary)  text-left">Speciality <br /> Tours</h3>  <div className="absolute left-0 top-0  w-px h-10 bg-gray-400 "></div></div>
                    </div>
                </div>
            </section >
            {/* speciality tours close */}
        </>
    )
}