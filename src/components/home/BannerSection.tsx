

export default function BannerSection() {

   

    return (
        <>


            {/* hero section */}
            <section
                className="relative bg-cover bg-center min-h-screen"
                style={{
                    backgroundImage: "url('/images/hero-img.jpg')",
                }}
            >
              
                <div className="max-w-[1300px] mx-auto flex items-end justify-end  py-20  px-5  min-h-screen ">

                    {/* Left content */}
                    <div className="flex flex-col w-lg gap-5">
                        <p className="text-white font-light text-end text-xs sm:text-base">Curated international travel experiences for discerning explorers. Crafted with care, culture, and character.</p>
                        <h1 className="text-5xl text-white md:text-7xl mb-4 font-my-font-regular text-end">
                            Journeys Beyond <br />
                            The Ordinary
                        </h1>


                        <div className="flex justify-end gap-4">
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

                    {/* Right image */}
                </div>
            </section >
            {/* hero section close */}





        </>
    )
}