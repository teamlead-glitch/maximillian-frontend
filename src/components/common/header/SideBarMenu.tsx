"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/* =====================================================
   DESTINATIONS (RELAXED TYPING)
===================================================== */
const destinations: Record<string, string[]> = {
  Asia: [
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
  Europe: ["France", "Italy", "Switzerland"],
  Africa: ["Kenya", "South Africa", "Morocco", "Egypt"],
  America: ["USA", "Canada", "Brazil", "Peru"],
  Oceania: ["Australia", "New Zealand", "Fiji"],
};

/* =====================================================
   REGIONS
===================================================== */
const regions = Object.keys(destinations);

/* =====================================================
   ICONS
===================================================== */
const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

/* =====================================================
   COMPONENT
===================================================== */
export default function SideBarMenu() {
  const [sideOpen, setSideOpen] = useState(false);
  const [destinationPanel, setDestinationPanel] = useState(false);

  // 👇 RELAXED STATE (ENDS ALL TS ERRORS)
  const [activeRegion, setActiveRegion] = useState<any>(null);

  const [mounted, setMounted] = useState(false);

  /* SSR SAFE */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* BODY SCROLL LOCK */
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.body.style.overflow = sideOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideOpen]);

  return (
    <>
      {/* HAMBURGER */}
      <button
        className="pl-5 md:hidden cursor-pointer"
        onClick={() => setSideOpen(true)}
      >
        <img src="/images/hamburg-menu.svg" alt="Menu" />
      </button>

      {mounted &&
        createPortal(
          <>
            {/* OVERLAY */}
            <div
              onClick={() => setSideOpen(false)}
              className={`fixed inset-0 bg-black/50 z-[999]
              transition-opacity duration-300
              ${sideOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            />

            {/* SIDEBAR */}
            <div
              className={`fixed top-0 right-0 h-screen w-[85%] max-w-[320px]
              bg-white z-[1000] flex flex-col
              transform transition-transform duration-300
              ${sideOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              {/* CLOSE */}
              <div className="h-[72px] px-6 flex items-center justify-end border-b border-gray-300">
                <button onClick={() => setSideOpen(false)}>✕</button>
              </div>

              {/* NAV */}
              <div className="flex-1 overflow-y-auto">
                <nav className="px-6 py-5 space-y-4 md:hidden">
                  {/* EXPLORE DESTINATIONS */}
                  <button
                    onClick={() => setDestinationPanel(true)}
                    className="flex justify-between items-center w-full font-semibold"
                  >
                    Explore Destinations
                    <ChevronRight />
                  </button>

                  {[
                    "Home",
                    "Design Your Trip",
                    "Our World",
                    "Contact Us",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      onClick={() => setSideOpen(false)}
                      className="block font-semibold"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* DESTINATION PANEL */}
            <div
              className={`fixed top-0 right-0 h-screen w-[85%] max-w-[320px]
              bg-white z-[1100] flex flex-col md:hidden
              transform transition-transform duration-300
              ${destinationPanel ? "translate-x-0" : "translate-x-full"}`}
            >
              {/* HEADER */}
              <div className="p-6 border-b border-gray-300">
                <button
                  onClick={() => {
                    setDestinationPanel(false);
                    setActiveRegion(null);
                  }}
                  className="flex items-center gap-2 font-semibold"
                >
                  <ChevronLeft /> Back
                </button>
              </div>

              {/* REGIONS */}
              {!activeRegion && (
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {regions.map((region: any) => (
                    <button
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className="w-full flex justify-between font-semibold"
                    >
                      {region}
                      <ChevronRight />
                    </button>
                  ))}
                </div>
              )}

              {/* COUNTRIES */}
              {activeRegion && (
                <div className="absolute inset-0 bg-white z-[1200] flex flex-col">
                  <div className="flex items-center gap-3 p-6 border-b border-gray-300">
                    <button onClick={() => setActiveRegion(null)}>
                      <ChevronLeft />
                    </button>
                    <h3 className="font-semibold">{activeRegion}</h3>
                  </div>

                  <ul className="grid grid-cols-2 gap-2 p-6 overflow-y-auto">
                    {destinations[activeRegion]?.map((country: any) => (
                      <li
                        key={country}
                        onClick={() => {
                          setSideOpen(false);
                          setDestinationPanel(false);
                          setActiveRegion(null);
                        }}
                        className="cursor-pointer py-2"
                      >
                        {country}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>,
          document.body
        )}
    </>
  );
}
