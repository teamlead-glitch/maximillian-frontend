"use client";

import { useState, useEffect, useRef } from "react";
import SideBarMenu from "./SideBarMenu";

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
    countries: ["France", "Italy", "Spain", "Switzerland", "Germany"],
    image: "/images/europe.jpg",
  },

  Africa: {
    countries: ["Kenya", "South Africa", "Morocco", "Egypt"],
    image: "/images/africa.jpg",
  },

  America: {
    countries: ["USA", "Canada", "Brazil", "Peru"],
    image: "/images/america.jpg",
  },

  Oceania: {
    countries: ["Australia", "New Zealand", "Fiji"],
    image: "/images/oceania.jpg",
  },
} as const;

/* ================= TYPES ================= */
type Region = keyof typeof REGIONS;

/* ================= COMPONENT ================= */
export default function TopMenu() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* ✅ STRICT & SAFE */
  const [activeRegion, setActiveRegion] = useState<Region>("Asia");

  const megaMenuRef = useRef<HTMLDivElement>(null);

  /* ---------------- DISABLE BODY SCROLL ---------------- */
  useEffect(() => {
    if (megaOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
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
        ${
          lastScrollY > 50 || megaOpen
            ? "bg-black/50 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full gap-2">
          <img
            src="/images/logo.svg"
            alt="Company Logo"
            className="h-10 w-auto"
          />

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
              px-3 py-3 md:px-4 md:py-2 md:block hidden rounded-full cursor-pointer
              text-xs sm:text-base
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
              <div className="fixed left-0 top-full w-screen bg-gradient-to-br from-white via-[#f8dfce] to-[#f9dbcb] z-50">
                <div className="max-w-[1600px] mx-auto px-10 py-15 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-10 text-black">

                  {/* REGIONS */}
                  <div className="space-y-4 border-r border-gray-300">
                    <h4 className="text-sm uppercase opacity-60 pb-2">
                      Regions
                    </h4>

                    {(Object.keys(REGIONS) as Region[]).map((region) => {
                      const isActive = activeRegion === region;

                      return (
                        <button
                          key={region}
                          onClick={() => setActiveRegion(region)}
                          className={`w-full text-left text-lg font-my-font-semibold pr-6
                          ${
                            isActive
                              ? "text-[#C43131]"
                              : "text-black hover:text-[#C43131]"
                          }`}
                        >
                          {region}
                        </button>
                      );
                    })}
                  </div>

                  {/* COUNTRIES */}
                  <div className="flex flex-col border-r border-gray-300">
                    <h4 className="text-sm uppercase opacity-60 pb-2">
                      {activeRegion} Countries
                    </h4>

                    <ul className="grid grid-cols-2 gap-3 mt-3">
                      {REGIONS[activeRegion].countries.map((country) => (
                        <li key={country}>{country}</li>
                      ))}
                    </ul>

                    <button className="mt-8 border border-black px-6 py-2 rounded-full text-sm">
                      View all journeys in {activeRegion}
                    </button>
                  </div>

                  {/* IMAGE */}
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={REGIONS[activeRegion].image}
                      alt={activeRegion}
                      className="w-full object-cover"
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
