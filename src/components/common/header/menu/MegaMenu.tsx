"use client"

import { X } from "lucide-react";
import Link from "next/link";
import { RegionFormated } from "@/lib/regionTransformer";

interface MegaMenuProps {
  setMegaOpen: (arg0:boolean)=>void;
  regions: Record<string, RegionFormated>; // replace with proper type if you have Region type
  activeRegion: any;
  setActiveRegion: (arg1:any)=>void;
}

export default function MegaMenu({
  setMegaOpen,
  regions,
  activeRegion,
  setActiveRegion,
}: MegaMenuProps){

    return(
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



                <div className=" mx-auto px-3 md:px-10  grid grid-cols-1 md:grid-cols-[1fr_3fr_2fr] gap-10 text-black">

                  {/* REGIONS */}
                  <div className="space-y-4">


                    {Object.keys(regions).map((region) => {
                      const isActive = activeRegion === region;

                      if (region.toLowerCase() === "india") {

                      return (
                        
<Link href={`/country/india`}
                          key={region}
                          
                          className={`group w-full flex items-center
  text-left text-lg font-semibold cursor-pointer pr-6
  transition-all duration-300
  ${isActive
                              ? "text-[#C43131]"
                              : "text-black hover:text-[#C43131]"
                            }`}
                        >
                          <span>{region}</span>


                        </Link>

                      );
                    } else{
                        return(
                           
                            <button
                          key={region}
                          onClick={() => setActiveRegion(region)}
                          className={`group w-full flex items-center
  text-left text-lg font-semibold cursor-pointer pr-6
  transition-all duration-300
  ${isActive
                              ? "text-[#C43131]"
                              : "text-black hover:text-[#C43131]"
                            }`}
                        >
                          <span>{region}</span>


                        </button>
                        )
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

                    <Link href={`/${regions[activeRegion]?.slug}`} className="mt-8 border border-[#C43131] block w-fit px-6 py-2 rounded-full text-sm hover:bg-[#C43131] cursor-pointer hover:text-white hover:tracking-wide transition-all duration-300">
                      View all journeys in {activeRegion}
                    </Link>
                  </div>

                  {/* IMAGE */}
                  <div className="rounded-xl overflow-hidden pl-0 md:pl-20">



                    <img
                      src={regions[activeRegion].image}
                      alt={activeRegion}
                      className="w-full rounded-xl object-cover aspect-3/4"
                    />
                  </div>

                </div>
              </div>
        
        </>
    )
}