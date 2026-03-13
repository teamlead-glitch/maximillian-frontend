"use client";

import { useState, useEffect, useRef } from "react";
import SideBarMenu from "./../SideBarMenu";
import { RegionFormated } from "@/lib/regionTransformer";
import MegaMenu from "./MegaMenu";
import Link from "next/link";
import { Settings } from "@/types/commonTypes";


/* ================= COMPONENT ================= */
export default function TopMenuHome({ regions, settings }: { regions: Record<string, RegionFormated>; settings: Settings }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /*  console.log(regions, 'regions---') */
  const regionKeys = Object.keys(regions) as (keyof typeof regions)[];
  const [activeRegion, setActiveRegion] = useState<keyof typeof regions>(
    regionKeys[0]
  );




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
      const currentScrollY = window.scrollY;

      // show when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // hide when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
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
        className={`fixed top-0 left-0 w-full z-50
  transition-all duration-700 ease-in-out
 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
  ${lastScrollY > 50 || megaOpen
            ? "bg-black/50 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-[1600px] mx-auto flex justify-between py-3 md:py-5 px-3 md:px-10">

          <div className="flex items-center justify-between w-full gap-2">

            {/* Logo */}
            <a href="/">
              <img
                src="/images/logo.svg"
                alt="Company Logo"
                className="h-10 w-auto"
              />
            </a>

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

              {/* Design Trip */}
              <Link
                href={`/designyourtrip`}
                className="bg-white font-my-font-semibold text-black
          px-3 py-3 md:px-4 md:py-2 sm:block hidden rounded-full cursor-pointer
          text-xs md:text-base
          hover:bg-[#C43131] hover:text-white
          transition-all duration-300"
              >
                Design Your trip
              </Link>

              {/* Call Icon */}
              <a href={`tel:${settings.phone}`}>
                <img src="/images/call-top-icon.svg" alt="Call" />
              </a>

              {/* Mega Menu */}
              {megaOpen && (
                <MegaMenu
                  setMegaOpen={setMegaOpen}
                  regions={regions}
                  activeRegion={activeRegion}
                  setActiveRegion={setActiveRegion}
                />
              )}
            </div>
          </div>

          {/* Sidebar Menu */}
          <SideBarMenu regions={regions} settings={settings} />

        </div>
      </div>


    </>
  );
}
