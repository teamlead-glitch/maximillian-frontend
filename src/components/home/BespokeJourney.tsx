export default function BespokeJourney(){

    return(
        <>
          {/* bespoke journey */}
            <section
                className="
    py-20 h-screen 
    bg-[url('/images/bespoke-journey-bg.jpg')]
    bg-cover bg-center bg-no-repeat"
            >
                <div className="max-w-[1300px] flex items-center justify-between h-full flex-col gap-8 mx-auto  ">
                    <div className="w-full flex flex-col items-end gap-5 pr-5 xl:pr-0">
                        <img src="images/google-review.svg" alt="" className="w-40 md:w-auto" />
                        <img src="images/tripadvisor-reviews.svg" alt="" className="w-40 md:w-auto" />
                    </div>
                    <div className="w-full pl-5 md:pl-10">
                        <h4 className="text-4xl md:text-5xl lg:text-6xl font-my-font-regular text-white mb-6 ">
                            Begin Your <br />
                            Bespoke Journey
                        </h4>
                        <p className=" text-white mb-5 max-w-md line-clamp-4">
                            Luxury travel isn’t about where you go. It’s about how it feels. Let us design a journey that reflects you.
                        </p>
                        <div className="flex gap-4">

                            <button className="bg-white/30 backdrop-blur-md text-white 
 px-4 py-3
    md:px-6 md:py-4 rounded-full font-my-font-semibold 
shadow-lg  text-xs sm:text-base
hover:bg-white/40 transition cursor-pointer ">
                                Explore Our Journeys
                            </button>
                            <button className=" text-white 
 px-4 py-3
    md:px-6 md:py-4 border border-white/40 rounded-full font-my-font-semibold
shadow-lg text-xs sm:text-base
hover:bg-white/40 transition cursor-pointer ">
                                Design your trip
                            </button>
                        </div>
                    </div>

                </div>
            </section>
            {/* bespoke journey close */}
        </>
    )
}