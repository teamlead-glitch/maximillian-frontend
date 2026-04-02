"use client"

import { X } from "lucide-react";
import Link from "next/link";
import { RegionFormated } from "@/lib/regionTransformer";
import SideBarMenu from "../SideBarMenu";
import { Settings } from "@/types/commonTypes";


interface MegaMenuProps {
  setMegaOpen: (arg0: boolean) => void;
  regions: Record<string, RegionFormated>; // replace with proper type if you have Region type
  activeRegion: any;
  setActiveRegion: (arg1: any) => void;
  settings: Settings;
}

export default function MegaMenu({
  setMegaOpen,
  regions,
  activeRegion,
  setActiveRegion,
  settings,
}: MegaMenuProps) {

  return (
    <>

      <div className="fixed left-0 top-0 w-full h-screen bg-[#F5F2EE] z-50 overflow-hidden ">

        {/* header menu */}


        <div className="max-w-[1600px] w-full mx-auto flex justify-between py-3 md:py-5 px-3 md:px-10 absolute top-0 left-0 right-0 z-50">
          <div className="flex items-center justify-between w-full gap-2">
            <a href="/"><img
              src="/images/logo-black.svg"
              alt="Company Logo"
              className="h-11 md:h-12 lg:h-14 w-auto"
            /></a>


            <div className="flex items-center gap-5 lg:relative">
              {/* Explore Destination */}
              <button onClick={() => setMegaOpen(false)}
                aria-label="Close menu"
                className="relative text-(--color-secondary) font-my-font-semibold cursor-pointer md:block hidden text-xs sm:text-base pb-1
  after:absolute after:left-0 after:bottom-0
  after:h-[2px] after:bg-[#C43131]
  after:w-full "
              >
                Explore Destination
              </button>

              <Link href={`/designyourtrip`}
                className="bg-[#3A3F42] font-my-font-semibold text-white
              px-3 py-3 md:px-4 md:py-2 sm:block hidden rounded-full cursor-pointer
              text-xs md:text-base
              hover:bg-[#C43131] hover:text-white
              transition-all duration-300"
              > Design Your trip
              </Link>
              <a href="#">
                <img src="/images/call-top-icon-black.svg" alt="Call" />
              </a>
            </div>
          </div>

          <SideBarMenu isInner={true} regions={regions} settings={settings} />


        </div>

        {/* header menu close */}


        <div className=" mx-auto  grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 text-black ">
          <div className="flex flex-col justify-between ">
            <div className="w-full relative">
              <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] mt-32">
                {/* REGIONS */}
                <div className="space-y-4 pl-10 pr-20">
                  {Object.keys(regions).map((region) => {
                    const isActive = activeRegion === region;

                    const textClasses = `text-lg cursor-pointer transition-all duration-300 font-my-font-semibold ${isActive
                      ? "text-[#C43131]"
                      : "text-black hover:text-[#C43131]"
                      }`;

                    const containerClasses = `w-full pr-6 ${isActive ? "border-r-1 border-[#C43131]" : "border-r-1 border-transparent"
                      }`;

                    if (region.toLowerCase() === "india") {
                      return (
                        <div key={region} className={containerClasses}>
                          <Link href={`/country/india`}>
                            <span className={textClasses}>{region}</span>
                          </Link>
                        </div>
                      );
                    } else {
                      return (
                        <div key={region} className={containerClasses}>
                          <Link href={`/region/${region}`}>
                            <span
                              onMouseEnter={() => setActiveRegion(region)}
                              className={textClasses}
                            >
                              {region}
                            </span>
                          </Link>
                        </div>
                      );
                    }
                  })}
                </div>

                {/* COUNTRIES */}
                <div className="flex flex-col">
                  <ul className="grid grid-cols-2 gap-3">
                    {regions[activeRegion]?.countries?.length > 0 && regions[activeRegion].countries.map((country) => (
                      <Link href={`/${country?.slug}`} key={country.title} className="cursor-pointer hover:text-[#C43131] transition-all duration-300 ">{country.title}</Link>
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
              </div>
            </div>
            <div className="w-full  pl-10">
              <div className=" flex flex-wrap gap-10  pb-10 ">
                <a
                  href="tel: +91 999 886 8866"
                  className="flex text-sm  text-(--color-secondary)">
                  <img src="/images/call-icon.svg" className="w-4 mr-2" alt="Call" /> +91 999 886 8866
                </a>

                <a
                  href="https://wa.me/91 999 886 8866"
                  className="flex text-sm  text-(--color-secondary)">
                  <img
                    src="/images/whatsapp-icon.svg"
                    className="w-4 mr-2"
                    alt="WhatsApp" /> +91 999 886 8866
                </a>

                <a
                  href="hello@festivontours.com"
                  className="flex text-sm text-(--color-secondary)"
                >
                  <img src="/images/mail-icon.svg" className="w-4 mr-2" alt="Mail" /> hello@festivontours.com
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-[100dvh] relative">

            <button
              onClick={() => setMegaOpen(false)}
              aria-label="Close menu"
              className="  z-10
    p-2 cursor-pointer bg-[#3A3F42] absolute mt-32 -left-3 hover:bg-black hover:text-white
    transition-all duration-300 group"
            >
              <X
                size={16}
                strokeWidth={2}
                className="text-white group-hover:text-white"
              />
            </button>
            <img
              src={regions[activeRegion].image}
              alt={activeRegion}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    </>
  )
}

