"use client"

import { X } from "lucide-react";
import Link from "next/link";
import { RegionFormated } from "@/lib/regionTransformer";

interface MegaMenuProps {
  setMegaOpen: (arg0: boolean) => void;
  regions: Record<string, RegionFormated>; // replace with proper type if you have Region type
  activeRegion: any;
  setActiveRegion: (arg1: any) => void;
}

export default function MegaMenu({
  setMegaOpen,
  regions,
  activeRegion,
  setActiveRegion,
}: MegaMenuProps) {

  return (
    <>

      <div className="fixed left-0 top-full h-[calc(100vh-100%)] w-full overflow-y-auto bg-linear-to-br from-[#fbfbfb] via-[#fbfbfb] to-[#fbfbfb] z-50 pb-20">
        <div className="relative w-full flex justify-end px-10 py-5">

          {/* CLOSE ICON */}
          <button
            onClick={() => setMegaOpen(false)}
            aria-label="Close menu"
            className="  z-10
    p-2 rounded-full cursor-pointer bg-[#C43131] hover:bg-black hover:text-white
    transition-all duration-300 group"
          >
            <X
              size={16}
              strokeWidth={2}
              className="text-white group-hover:text-white"
            />
          </button>


        </div>



        <div className=" mx-auto px-3 md:px-10  grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] gap-10 text-black">

          {/* REGIONS */}
          <div className="space-y-4">
            {Object.keys(regions).map((region) => {
              const isActive = activeRegion === region;

              const textClasses = `text-lg font-semibold cursor-pointer transition-all duration-300 ${isActive
                ? "text-[#C43131]"
                : "text-black hover:text-[#C43131]"
                }`;

              if (region.toLowerCase() === "india") {
                return (
                  <div key={region} className="w-full pr-6">
                    <Link href={`/country/india`}>
                      <span className={textClasses}>{region}</span>
                    </Link>
                  </div>
                );
              } else {
                return (
                  <div key={region} className="w-full pr-6">
                    <span
                      onMouseEnter={() => setActiveRegion(region)}
                      className={textClasses}
                    >
                      {region}
                    </span>
                  </div>
                );
              }
            })}
          </div>

          {/* COUNTRIES */}
          <div className="flex flex-col">


            <ul className="grid grid-cols-2 gap-3">
              {regions[activeRegion]?.countries?.length > 0 && regions[activeRegion].countries.map((country) => (
                <Link href={`/${country?.slug}`} key={country.title} className="cursor-pointer hover:text-[#C43131] transition-all duration-300">{country.title}</Link>
              ))}
            </ul>

            {/* <Link href={`/${regions[activeRegion]?.slug}`} className="mt-8 border border-[#C43131] block w-fit px-6 py-2 rounded-full text-sm hover:bg-[#C43131] cursor-pointer hover:text-white hover:tracking-wide transition-all duration-300">
              View all journeys in {activeRegion}
            </Link> */}



            <Link href={`/${regions[activeRegion]?.slug}`} className="group flex items-center font-my-font-semibold  text-sm text-black sm:text-base justify-start py-3 mt-5 cursor-pointer">
              <span className="mr-3">   View all journeys in {activeRegion}</span>

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

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden pl-0 md:pl-5">



            <img
              src={regions[activeRegion].image}
              alt={activeRegion}
              className="w-full rounded-xl object-cover aspect-1/1"
            />
          </div>

        </div>
      </div>

    </>
  )
}