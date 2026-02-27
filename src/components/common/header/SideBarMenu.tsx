"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Link from "next/link";

/* ===================== TYPES ===================== */
type Region = "Asia" | "Europe" | "Africa" | "America" | "Oceania";

/* ===================== DESTINATIONS ===================== */
const destinations: Record<Region, string[]> = {
  Asia: [
    "India", "Afghanistan", "Azerbaijan", "Bahrain", "Cambodia", "China",
    "Indonesia", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Malaysia",
    "Maldives", "Nepal", "Qatar", "Saudi Arabia", "Singapore",
    "Sri Lanka", "Thailand", "United Arab Emirates", "Vietnam",
  ],
  Europe: ["France", "Italy", "Switzerland"],
  Africa: ["Kenya", "South Africa", "Morocco", "Egypt"],
  America: ["USA", "Canada", "Brazil", "Peru"],
  Oceania: ["Australia", "New Zealand", "Fiji"],
};

const regions = Object.keys(destinations) as Region[];

/* ===================== ICONS ===================== */
const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

/* ===================== COMPONENT ===================== */
export default function SideBarMenu() {
  const [sideOpen, setSideOpen] = useState(false);
  const [destinationPanel, setDestinationPanel] = useState(false);
  const [activeRegion, setActiveRegion] = useState<Region | null>(null);
  const [activeLink, setActiveLink] = useState("Home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sideOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideOpen]);

  if (!mounted) return null;

  return (
    <>
      {/* HAMBURGER */}
      <button
        className="pl-5 cursor-pointer"
        onClick={() => setSideOpen(true)}
      >
        <img src="/images/hamburg-menu.svg" alt="Menu" />
      </button>

      {createPortal(
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
            transition-transform duration-300
            ${sideOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* HEADER */}
            <div className="h-[72px] px-6 flex justify-end items-center  ">
              <button onClick={() => setSideOpen(false)} className="text-(--color-secondary) cursor-pointer">
                <X />
              </button>
            </div>

            {/* NAV */}
            <nav className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              <button
                onClick={() => setDestinationPanel(true)}
                className="flex justify-between w-full font-my-font-semibold md:hidden"
              >
                Explore Destinations <ChevronRight />
              </button>

              {[
                { name: "Home", href: "/" },
                { name: "Design Your Trip", href: "/design-your-trip" },
                { name: "Our World", href: "/ourworld" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.name);
                    setSideOpen(false);
                  }}
                  className={`relative block font-my-font-semibold text-(--color-secondary)
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-[30px] after:bg-[#C43131] after:transition-opacity
                  ${activeLink === item.name
                      ? "after:opacity-100"
                      : "after:opacity-0"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CONTACT */}
            <div className="px-6 pb-20 space-y-4">
              <a href="tel:+919998868866" className="flex gap-3  text-(--color-secondary)">
                <img src="/images/call-icon.svg" className="w-5 text-(--color-secondary)" alt="Call" />
                +91 999 886 8866
              </a>

              <a href="https://wa.me/919998868866" className="flex gap-3  text-(--color-secondary)">
                <img
                  src="/images/whatsapp-icon.svg"
                  className="w-5 text-(--color-secondary)"
                  alt="WhatsApp"
                />
                WhatsApp
              </a>

              <a
                href="mailto:hello@maximilianholidays.com"
                className="flex gap-3  text-(--color-secondary)"
              >
                <img src="/images/mail-icon.svg" className="w-5" alt="Mail" />
                hello@maximilianholidays.com
              </a>
            </div>
          </div>

          {/* DESTINATION PANEL */}
          <div
            className={`fixed top-0 right-0 h-screen w-[85%] max-w-[320px]
            bg-white z-[1100] md:hidden transition-transform duration-300
            ${destinationPanel ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="p-6 border-b">
              <button
                onClick={() => {
                  setDestinationPanel(false);
                  setActiveRegion(null);
                }}
                className="flex items-center gap-2"
              >
                <ChevronLeft /> Back
              </button>
            </div>

            {!activeRegion ? (
              <div className="p-6 space-y-6">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className="flex justify-between w-full font-semibold"
                  >
                    {region} <ChevronRight />
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-6">
                <h3 className="mb-4 font-semibold">{activeRegion}</h3>

                <ul className="grid grid-cols-2 gap-3">
                  {destinations[activeRegion].map((country) => (
                    <li
                      key={country}
                      className="cursor-pointer"
                      onClick={() => {
                        setSideOpen(false);
                        setDestinationPanel(false);
                        setActiveRegion(null);
                      }}
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
