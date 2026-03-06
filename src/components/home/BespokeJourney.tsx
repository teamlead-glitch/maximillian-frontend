import Link from "next/link";
import Image from "next/image";
export default function BespokeJourney() {
  return (
    <>
      {/* bespoke journey */}
      <section
        className="
    py-20 h-screen
    bg-[url('/images/bespoke-journey-bg.jpg')]
    bg-cover bg-center bg-no-repeat px-5"
            >
                <div className="max-w-[1300px] flex items-center justify-between h-full flex-col gap-8 mx-auto  ">
                    <div className="w-full flex flex-col  items-end  gap-5   ">
                        <img src="images/google-review.svg" alt="" className="w-60 " />
                        <img src="images/tripadvisor-reviews.svg" alt="" className="w-60 " />

                    </div>
                    <div className="w-full">
                        <h4 className="text-4xl md:text-5xl lg:text-6xl font-my-font-regular text-white mb-6 ">
                            Begin Your <br />
                            Bespoke Journey
                        </h4>
                        <p className=" text-white mb-5 max-w-md line-clamp-4">
                            Luxury travel isn’t about where you go. It’s about how it feels. Let us design a journey that reflects you.
                        </p>
                        <div className="flex gap-4">

                            <Link href="/signature-journeys" className="
relative overflow-hidden
bg-white/30 backdrop-blur-md text-white cursor-pointer
px-4 py-3 md:px-6 md:py-4 rounded-full font-my-font-semibold
shadow-lg text-xs sm:text-base
transition-all duration-300
hover:bg-white/40
before:absolute before:inset-0
before:-translate-x-full
before:bg-gradient-to-r
before:from-transparent before:via-white/40 before:to-transparent
before:transition-transform before:duration-700
hover:before:translate-x-full
">
                                Explore Our Journeys
                            </Link>

              <Link href="/designyourtrip"
                className="relative overflow-hidden text-white px-4 py-3 md:px-6 md:py-4 border border-white/40 rounded-full font-my-font-semibold shadow-lg text-xs sm:text-base cursor-pointer  transition-all duration-300 hover:bg-white/40  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full ">               Design your trip
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* bespoke journey close */}
    </>
  );
}
