"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

/* DESTINATION DATA (NO IMAGES) */
const destinations = {
  Asia: ["India",
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
    "Vietnam"],
  Europe: ["France", "Italy", "Switzerland"],

  Africa: ["Kenya", "South Africa", "Morocco", "Egypt"],
  America: ["USA", "Canada", "Brazil", "Peru"],
  Oceania: ["Australia", "New Zealand", "Fiji"],

};

/* SIMPLE CHEVRON ICONS */
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

export default function SideBarMenu() {
  const [sideOpen, setSideOpen] = useState(false);
  const [destinationPanel, setDestinationPanel] = useState(false);
  const [activeRegion, setActiveRegion] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  /* BODY SCROLL LOCK */
  useEffect(() => {
    document.body.style.overflow = sideOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [sideOpen]);

  return (
    <>
      {/* HAMBURGER */}
      <button className="pl-5 md:hidden cursor-pointer" onClick={() => setSideOpen(true)}>
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
              <div className="h-[72px] px-6 flex items-center justify-end border-b  border-gray-300 ">
                <button onClick={() => setSideOpen(false)} className="cursor-pointer">✕</button>
              </div>

              {/* NAV */}
              <div className="flex-1 overflow-y-auto">

                <nav className="px-6 py-5 space-y-4 md:hidden">
                  {/* EXPLORE DESTINATIONS */}
                  <button
                    onClick={() => setDestinationPanel(true)}
                    className="flex justify-between font-my-font-semibold cursor-pointer items-center w-full
                  text-base  text-gray-800
                  hover:text-[#C43131]"
                  >
                    Explore Destinations
                    <ChevronRight />
                  </button>

                  {/* OTHER LINKS */}
                  {["Home", "Design Your Trip", "Our World", "Contact Us"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#"
                        onClick={() => setSideOpen(false)}
                        className="block text-base font-my-font-semibold
                      text-gray-800 hover:text-[#C43131]"
                      >
                        {item}
                      </a>
                    )
                  )}
                </nav>

                <div className="absolute left-0 bottom-20 px-6 py-2">
                  <ul className="text-body font-medium">
                    <li className="mb-4 flex items-center gap-3 font-my-font-regular text-(--color-secondary)"> <img src="/images/call-icon.svg" alt="Phone" className="w-5 h-5" /> <a href="tel:+919998868866">+91 999 886 8866</a> </li>
                    <li className="mb-4 flex items-center gap-3 font-my-font-regular text-(--color-secondary)"> <img src="/images/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5" /> <a href="https://wa.me/919998868866">+91 999 886 8866</a> </li>
                    <li className="flex items-center gap-3 font-my-font-regular text-(--color-secondary)"> <img src="/images/mail-icon.svg" alt="Email" className="w-5 h-5" /> <a href="mailto:hello@maximilianholidays.com"> hello@maximilianholidays.com </a> </li>
                  </ul>
                </div>
                <div className="absolute right-0 bottom-0"> <img src="/images/logo-icon.svg" alt="Logo" /> </div>
              </div>
            </div>

            {/* FULL SCREEN DESTINATION PANEL */}
            <div
              className={`fixed top-0 right-0 h-screen w-[85%] max-w-[320px]
  bg-white z-[1100] flex flex-col
  transform transition-transform duration-300 md:hidden
  ${destinationPanel ? "translate-x-0" : "translate-x-full"}`}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between p-6 border-b border-gray-300">
                <button
                  onClick={() => setDestinationPanel(false)}
                  className="flex items-center cursor-pointer gap-2 font-my-font-semibold text-sm"
                >
                  <ChevronLeft />
                  Back
                </button>


              </div>

              {/* REGIONS */}
              {!activeRegion && (
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {Object.keys(destinations).map((region) => (
                    <button
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className="w-full flex justify-between  cursor-pointer font-my-font-semibold items-center
                      text-lg  text-gray-800
                      hover:text-[#C43131]"
                    >
                      {region}
                      <ChevronRight />
                    </button>
                  ))}
                </div>
              )}

              {/* COUNTRY GRID */}
              {activeRegion && (
                <div className="absolute inset-0 bg-white z-[1200] flex flex-col">
                  <div className="flex items-center  gap-3 p-6 border-b border-gray-300 shrink-0">
                    <button onClick={() => setActiveRegion(null)} className="cursor-pointer">
                      <ChevronLeft />
                    </button>
                    <h3 className="text-base font-my-font-semibold">
                      {activeRegion}
                    </h3>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    <ul className="grid grid-cols-2 gap-2 p-6">
                      {destinations[activeRegion].map((country) => (
                        <li
                          key={country}
                          onClick={() => {
                            setSideOpen(false);
                            setDestinationPanel(false);
                            setActiveRegion(null);
                          }}
                          className="cursor-pointer py-2 text-sm text-gray-800 hover:text-[#C43131] hover:border-[#C43131] transition"
                        >
                          {country}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </>,
          document.body
        )}
    </>
  );
}
