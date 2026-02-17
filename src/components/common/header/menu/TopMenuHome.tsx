"use client";
import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import SideBarMenu from "./../SideBarMenu";


/* ================= REGIONS DATA ================= */
const REGIONS = {
  Asia: {
    countries: [
      "India",
      "Afghanistan",
      "Azerbaijan",
      "Bahrain",
      "Cambodia",
      "China",
      "Indonesia",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "Kuwait",
      "Malaysia",
      "Maldives",
      "Nepal",
      "Qatar",
      "Saudi Arabia",
      "Singapore",
      "Sri Lanka",
      "Thailand",
      "United Arab Emirates",
      "Vietnam",
    ],
    image: "/images/india.jpg",
  },

  Europe: {
    countries: [
      "France",
      "Italy",
      "Spain",
      "Switzerland",
      "Germany",
      "United Kingdom",
      "Netherlands",
      "Belgium",
      "Austria",
      "Portugal",
      "Greece",
      "Ireland",
      "Iceland",

    ],
    image: "/images/europe.jpg",
  },

  Africa: {
    countries: [
      "South Africa",
      "Kenya",
      "Morocco",
      "Egypt",
      "Tanzania",
      "Uganda",
      "Rwanda",
      "Ethiopia",
      "Namibia",
      "Botswana",
      "Zimbabwe",
      "Zambia",

    ],
    image: "/images/africa.jpg",
  },

  America: {
    countries: [

      "United States",
      "Canada",
      "Mexico",

      "Costa Rica",
      "Panama",
      "Jamaica",
      "Brazil",
      "Argentina",
      "Chile",
      "Peru",
      "Colombia",

    ],
    image: "/images/america.jpg",
  },

  Oceania: {
    countries: [
      "Australia",
      "New Zealand",
      "Fiji",
      "Kiribati",
      "Nauru",
      "Tuvalu"
    ],
    image: "/images/oceania.jpg",
  },

} as const;

/* ================= TYPES ================= */
type Region = keyof typeof REGIONS;

/* ================= COMPONENT ================= */
export default function TopMenuHome() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* ✅ STRICT & SAFE */
  const [activeRegion, setActiveRegion] = useState<Region>("Asia");

  const megaMenuRef = useRef<HTMLDivElement>(null);

  /* ---------------- DISABLE BODY SCROLL ---------------- */
  useEffect(() => {
    if (megaOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [megaOpen]);

  /* ---------------- SCROLL SHOW / HIDE ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- CLICK OUTSIDE ---------------- */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setMegaOpen(false);
      }
    };

    if (megaOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [megaOpen]);

  return (
    <>
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2
        w-full max-w-[1600px] z-50
        flex justify-between py-3 md:py-5 px-3 md:px-10
        transition-all duration-700 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        ${lastScrollY > 50 || megaOpen
            ? "bg-black/50 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
            : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between w-full gap-2">
          <a href="/"><img
            src="/images/logo.svg"
            alt="Company Logo"
            className="h-10 w-auto"
          /></a>


          <div ref={megaMenuRef} className="flex items-center gap-5 lg:relative">
            {/* Explore Destination */}
            <button
              onClick={() => setMegaOpen((prev) => !prev)}
              className={`relative text-white font-my-font-semibold cursor-pointer md:block hidden text-xs sm:text-base
              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:bg-[#C43131] after:transition-all after:duration-300
              ${megaOpen ? "after:w-full" : "after:w-0"}`}
            >
              Explore Destination
            </button>

            <button
              className="bg-white font-my-font-semibold text-black
              px-3 py-3 md:px-4 md:py-2 sm:block hidden rounded-full cursor-pointer
              text-xs md:text-base
              hover:bg-[#C43131] hover:text-white
              transition-all duration-300"
            >
              Design Your trip
            </button>

            <a href="tel:+919876543210">
              <img src="/images/call-top-icon.svg" alt="Call" />
            </a>

            {/* MEGA MENU */}
            {megaOpen && (
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
                    {/* <h4 className="text-sm uppercase opacity-60 pb-1 relative before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:bg-[#C43131] before:transition-all before:duration-300 before:w-10">
                      Regions
                    </h4> */}

                    {(Object.keys(REGIONS) as Region[]).map((region) => {
                      const isActive = activeRegion === region;

                      return (
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

                          {/* Active Arrow */}
                          {/* <MoveRight
                            size={25}
                            strokeWidth={2}
                            className={`transition-all duration-300 pl-1.5
    ${isActive
                                ? "opacity-100 translate-x-0 text-[#C43131]"
                                : "opacity-0 -translate-x-2"
                              }`}
                          /> */}
                        </button>


                      );
                    })}
                  </div>

                  {/* COUNTRIES */}
                  <div className="flex flex-col">
                    {/* <h4 className="text-sm uppercase opacity-60 pb-1 relative before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:bg-[#C43131] before:transition-all before:duration-300 before:w-10">
                      {activeRegion} Countries
                    </h4> */}

                    <ul className="grid grid-cols-2 gap-3">
                      {REGIONS[activeRegion].countries.map((country) => (
                        <li key={country} className="cursor-pointer hover:text-[#C43131] transition-all duration-300">{country}</li>
                      ))}
                    </ul>

                    <button className="mt-8 border border-[#C43131] block w-fit px-6 py-2 rounded-full text-sm hover:bg-[#C43131] cursor-pointer hover:text-white hover:tracking-wide transition-all duration-300">
                      View all journeys in {activeRegion}
                    </button>
                  </div>

                  {/* IMAGE */}
                  <div className="rounded-xl overflow-hidden pl-0 md:pl-20">



                    <img
                      src={REGIONS[activeRegion].image}
                      alt={activeRegion}
                      className="w-full rounded-xl object-cover aspect-3/4"
                    />
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>

        <SideBarMenu />

      </div>
    </>
  );
}
