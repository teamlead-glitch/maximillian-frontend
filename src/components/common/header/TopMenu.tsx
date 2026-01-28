import { useState, useEffect, useRef } from "react";
import SideBarMenu from "./SideBarMenu";

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
};

export default function TopMenu() {
    const [megaOpen, setMegaOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeRegion, setActiveRegion] =
        useState<keyof typeof REGIONS>("Asia");

    const megaMenuRef = useRef<HTMLDivElement>(null);






    /* ---------------- DISABLE BODY SCROLL WHEN MEGA MENU OPEN ---------------- */
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



    /* ---------------- SCROLL SHOW / HIDE HEADER ---------------- */
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always show header
            setIsVisible(true);

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    /* ---------------- CLICK OUTSIDE TO CLOSE MEGA MENU ---------------- */
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
        flex justify-between py-5 px-5 md:px-10
        transition-all duration-700 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        ${lastScrollY > 50 || megaOpen
                        ? "bg-black/50 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
                        : "bg-transparent"
                    }`}
            >
                <div className="flex items-center justify-between w-full gap-2">
                    <img src="/images/logo.svg" alt="Company Logo" className="h-10 w-auto" />

                    <div ref={megaMenuRef} className="flex items-center gap-5 lg:relative">
                        {/* Explore Destination */}
                        <button
                            onClick={() => setMegaOpen((prev) => !prev)}
                            className={`relative text-white font-my-font-semibold cursor-pointer text-xs sm:text-base
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:bg-[#C43131] after:transition-all after:duration-300
        ${megaOpen ? "after:w-full" : "after:w-0"}
    `}
                        >
                            Explore Destination
                        </button>
                        <button
                            className="bg-white font-my-font-semibold text-black
              px-3 py-3 md:px-4 md:py-2 rounded-full cursor-pointer
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
                            <div
                                className={`
    fixed left-0 top-full w-screen h-auto lg:h-screen z-50
    bg-gradient-to-br from-white via-[#f8dfce] to-[#f9dbcb]
    shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
    transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
    ${megaOpen
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 -translate-y-10 pointer-events-none"}
  `}
                            >
                                {/* CLOSE BUTTON */}
                                <button
                                    onClick={() => setMegaOpen(false)}
                                    className="absolute top-6 right-10
             text-black hover:text-[#C43131]
             transition-colors duration-300
             cursor-pointer"
                                    aria-label="Close menu"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>





                                <div className="max-w-[1600px] mx-auto px-10 py-15 
     grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] 
     gap-10 text-black">

                                    {/* REGIONS */}
                                    <div className="space-y-4 border-r border-gray-300">
                                        <h4 className="relative text-sm text-black uppercase opacity-60 pb-2 
    before:absolute before:bottom-0 before:left-0
    before:w-[30px] before:h-[2px] before:bg-[#C43131]">
                                            Regions
                                        </h4>

                                        {Object.keys(REGIONS).map((region) => {
                                            const isActive = activeRegion === region;

                                            return (
                                                <button
                                                    key={region}
                                                    onClick={() => setActiveRegion(region)}
                                                    className={`
    relative flex items-center  w-full
    text-left text-lg font-my-font-semibold
    transition-all duration-300 cursor-pointer
    pr-6
    ${isActive ? "text-[#C43131]" : "text-black hover:text-[#C43131]"}
  `}
                                                >
                                                    <span>{region}</span>

                                                    {/* Arrow */}
                                                    <span
                                                        className={`
     
      transition-all pl-2 duration-300
      ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}
    `}
                                                    >
                                                        <svg width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><polyline points="44 40 52 32 44 24" /><line x1="52" y1="32" x2="12" y2="32" /></svg>
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>


                                    {/* COUNTRIES */}
                                    <div className="flex flex-col  border-r border-gray-300 ">
                                        <div>
                                            <h4 className="relative text-sm text-black uppercase opacity-60 pb-2 
    before:absolute before:bottom-0 before:left-0
    before:w-[30px] before:h-[2px] before:bg-[#C43131]">
                                                {activeRegion} Countries
                                            </h4>
                                            <ul className="grid grid-cols-2 gap-3 mt-3">
                                                {REGIONS[activeRegion].countries.map((country) => (
                                                    <li
                                                        key={country}
                                                        className="
        relative inline-block w-fit cursor-pointer text-base text-black
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-[#C43131]
        after:transition-all after:duration-300
        hover:after:w-full hover:text-[#C43131]
      "
                                                    >
                                                        {country}
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>

                                        <button
                                            className="mt-8 self-start border cursor-pointer border-black px-6 py-2 rounded-full text-sm
  hover:border-[#C43131] hover:bg-[#C43131] transition-all duration-300
  hover:text-white hover:tracking-wider"
                                        >
                                            View all journeys in {activeRegion}
                                        </button>
                                    </div>

                                    {/* IMAGE */}
                                    <div className="relative md:h-full rounded-xl overflow-hidden">
                                        <img
                                            src={REGIONS[activeRegion].image}
                                            alt={activeRegion}
                                            className="w-full rounded-xl object-cover transition-opacity duration-500"
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
