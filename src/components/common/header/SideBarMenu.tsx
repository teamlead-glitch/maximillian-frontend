"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Link from "next/link";
import { RegionFormated } from "@/lib/regionTransformer";

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

export default function SideBarMenu({
  regions,
  isInner = false,
}: {
  regions: Record<string, RegionFormated>;
  isInner?: boolean;
}) {

  const regionKeys = Object.keys(regions);

  const [sideOpen, setSideOpen] = useState(false);
  const [destinationPanel, setDestinationPanel] = useState(false);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
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
        {isInner === false ? (
          <img src="/images/hamburg-menu.svg" alt="Menu" />
        ) : (
          <img src="/images/hamburg-menu-inner.svg" alt="Menu" />
        )}
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
            <div className="h-[72px] px-6 flex justify-end items-center">
              <button
                onClick={() => setSideOpen(false)}
                className="text-(--color-secondary) cursor-pointer"
              >
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
                { name: "Blogs", href: "/blogs" },
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
                  ${
                    activeLink === item.name
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
              <a
                href="tel:+919998868866"
                className="flex gap-3 text-(--color-secondary)"
              >
                <img src="/images/call-icon.svg" className="w-5" alt="Call" />
                +91 999 886 8866
              </a>

              <a
                href="https://wa.me/919998868866"
                className="flex gap-3 text-(--color-secondary)"
              >
                <img
                  src="/images/whatsapp-icon.svg"
                  className="w-5"
                  alt="WhatsApp"
                />
                WhatsApp
              </a>

              <a
                href="mailto:hello@maximilianholidays.com"
                className="flex gap-3 text-(--color-secondary)"
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
            ${destinationPanel ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="p-6 border-b">
              <button
                onClick={() => {
                  if (activeRegion) {
                    setActiveRegion(null);
                  } else {
                    setDestinationPanel(false);
                  }
                }}
                className="flex items-center gap-2"
              >
                <ChevronLeft /> Back
              </button>
            </div>

            {/* REGION LIST */}
            {!activeRegion ? (
              <div className="p-6 space-y-6">

                {regionKeys.map((region) => {

                  if (region.toLowerCase() === "india") {
                    return (
                      <Link
                        key={region}
                        href={`/country/india`}
                        onClick={() => {
                          setSideOpen(false);
                          setDestinationPanel(false);
                        }}
                        className="flex justify-between w-full font-semibold"
                      >
                        {region}
                      </Link>
                    );
                  }

                  return (
                    <button
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className="flex justify-between w-full font-semibold"
                    >
                      {region} <ChevronRight />
                    </button>
                  );
                })}

              </div>
            ) : (

              /* COUNTRY LIST */
              <div className="p-6">

                <h3 className="mb-4 font-semibold capitalize">
                  {activeRegion}
                </h3>

                <ul className="grid grid-cols-2 gap-3 mb-6">

                  {regions[activeRegion]?.countries?.map((country) => (
                    <Link
                      href={`/${country.slug}`}
                      key={country.slug}
                      className="cursor-pointer"
                      onClick={() => {
                        setSideOpen(false);
                        setDestinationPanel(false);
                        setActiveRegion(null);
                      }}
                    >
                      {country.title}
                    </Link>
                  ))}

                </ul>

                <Link
                  href={`/${regions[activeRegion]?.slug}`}
                  onClick={() => {
                    setSideOpen(false);
                    setDestinationPanel(false);
                    setActiveRegion(null);
                  }}
                  className="block border border-[#C43131] w-fit px-4 py-2 rounded-full text-sm hover:bg-[#C43131] hover:text-white transition"
                >
                  View all journeys in {activeRegion}
                </Link>

              </div>
            )}
          </div>

        </>,
        document.body
      )}
    </>
  );
}