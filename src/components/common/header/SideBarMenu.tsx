"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Link from "next/link";
import { RegionFormated } from "@/lib/regionTransformer";
import { Settings } from "@/types/commonTypes";
import { usePathname } from "next/navigation";
import { IndiaOnlyData } from "@/types/countryType";
import { apiService } from "@/services/api";


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
  settings,
  sideOpenParent = false,
  setSideOpenParent

}: {
  regions: Record<string, RegionFormated>;
  isInner?: boolean;
  settings: Settings;
  sideOpenParent?: Boolean;
  setSideOpenParent: (arg0: boolean) => void;
}) {

  const pathname = usePathname();


  const regionKeys = Object.keys(regions);

  const [sideOpen, setSideOpen] = useState(sideOpenParent);
  const [destinationPanel, setDestinationPanel] = useState(false);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState(pathname);
  const [mounted, setMounted] = useState(false);


  const [indiaData, setIndiaData] = useState<IndiaOnlyData[]>([]);
  const fetchData = async () => {


    try {


      const res = await apiService.get<IndiaOnlyData[]>(
        `/tags?taggroup_id=3`
      );



      setIndiaData(res);

    } catch (error) {
      console.error("details fetch API error:", error);

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setSideOpen(sideOpenParent);
  }, [sideOpenParent]);

  useEffect(() => {
    document.body.style.overflow = sideOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideOpen]);

  if (!mounted) return null;
  //number storing
  const whatsappNumber = settings?.whatsapp;
  //message storing
  const message = encodeURIComponent("Hello! I’m interested in exploring your tour packages.");

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${message}`
    : "#";


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
            onClick={() => { setSideOpenParent(false); setSideOpen(false); }}
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
                onClick={() => { setSideOpenParent(false); setSideOpen(false); }}
                className="text-(--color-secondary) cursor-pointer"
              >
                <X />
              </button>
            </div>

            {/* NAV */}
            <nav className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              <button
                onClick={() => setDestinationPanel(true)}
                className="flex justify-between w-full font-my-font-semibold md:hidden text-(--color-secondary) cursor-pointer"
              >
                Explore Destinations <ChevronRight />
              </button>

              {[
                { name: "Home", href: "/" },
                { name: "Design Your Trip", href: "/designyourtrip" },
                { name: "Our World", href: "/ourworld" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.href);
                    setSideOpenParent(false);
                    setSideOpen(false);
                  }}
                  className={`relative block font-my-font-semibold text-(--color-secondary)
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-[30px] after:bg-[#C43131] after:transition-opacity
                  ${activeLink === item.href
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
                href={`tel:${settings.phone}`}
                className="flex gap-3 text-(--color-secondary)"
              >
                <img src="/images/call-icon.svg" className="w-5" alt="Call" />
                {settings.phone}
              </a>

              <a
                href={whatsappLink}
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
                href={`mailto:${settings.email}`}
                className="flex gap-3 text-(--color-secondary)"
              >
                <img src="/images/mail-icon.svg" className="w-5" alt="Mail" />
                {settings.email}
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
                className="flex items-center gap-2 text-(--color-secondary) cursor-pointer"
              >
                <ChevronLeft /> Back
              </button>
            </div>

            {/* REGION LIST */}
            {!activeRegion ? (
              <div className="p-6 space-y-6">

                {regionKeys.map((region) => {

                  // if (region.toLowerCase() === "india") {
                  //   return (
                  //     <Link
                  //       key={region}
                  //       href={`/country/india`}
                  //       onClick={() => {
                  //         setSideOpenParent(false);
                  //         setSideOpen(false);
                  //         setDestinationPanel(false);
                  //       }}
                  //       className="flex justify-between w-full font-semibold text-(--color-secondary) cursor-pointer"
                  //     >
                  //       {region}
                  //     </Link>
                  //   );
                  // }

                  return (
                    <button
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className="flex justify-between w-full font-semibold text-(--color-secondary) cursor-pointer"
                    >
                      {region} <ChevronRight />
                    </button>
                  );
                })}

              </div>
            ) : (

              /* COUNTRY LIST */
              <div className="p-6">

                <h3 className="mb-4 font-semibold capitalize text-(--color-secondary) cursor-pointer">
                  {activeRegion}
                </h3>

                <ul className="grid grid-cols-2 gap-3 mb-6">

                  {regions[activeRegion]?.slug != "region/india" && regions[activeRegion]?.countries?.map((country) => (
                    <Link
                      href={`/${country.slug}`}
                      key={country.slug}
                      className="cursor-pointer text-(--color-secondary) "
                      onClick={() => {
                        setSideOpenParent(false);
                        setSideOpen(false);
                        setDestinationPanel(false);
                        setActiveRegion(null);
                      }}
                    >
                      {country.title}
                    </Link>
                  ))}


                  {regions[activeRegion]?.slug == "region/india" && indiaData?.length > 0 && indiaData.map((country) => (
                    <Link
                      href={`/${country.slug}`}
                      key={country.slug}
                      className="cursor-pointer text-(--color-secondary) "
                      onClick={() => {
                        setSideOpenParent(false);
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
                  // href={`/${regions[activeRegion]?.slug}`}
                  href={`/${regions[activeRegion]?.slug != "region/india" ? regions[activeRegion]?.slug : 'country/india'}`}
                  onClick={() => {
                    setSideOpenParent(false);
                    setSideOpen(false);
                    setDestinationPanel(false);
                    setActiveRegion(null);
                  }} className="group flex items-center font-my-font-semibold  text-sm text-black sm:text-base justify-start py-3 mt-3 cursor-pointer">
                  <span className="mr-3">View all journeys in {activeRegion}</span>

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
            )}
          </div>

        </>,
        document.body
      )}
    </>
  );
}