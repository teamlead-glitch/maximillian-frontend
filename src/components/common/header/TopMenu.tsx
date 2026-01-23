


import { useState, useEffect, useRef } from "react";
import SideBarMenu from "./SideBarMenu"

const continents = [
    {
        id: "asia",
        name: "Asia",
        image: "images/tajmahal.jpg",
        countries: ["India", "Thailand", "Bali", "Vietnam", "Japan", "Singapore", "Malaysia", "Maldives", "Sri Lanka"]
    },
    {
        id: "europe",
        name: "Europe",
        image: "images/europe.jpg",
        countries: ["France", "Italy", "Spain", "Greece", "Switzerland", "Germany", "Netherlands", "Austria"]
    },
    {
        id: "africa",
        name: "Africa",
        image: "images/africa.jpg",
        countries: ["South Africa", "Kenya", "Tanzania", "Morocco", "Egypt", "Mauritius", "Seychelles"]
    },
    {
        id: "americas",
        name: "Americas",
        image: "images/america.jpg",
        countries: ["USA", "Canada", "Mexico", "Brazil", "Argentina", "Peru", "Costa Rica", "Chile"]
    },
    {
        id: "oceania",
        name: "Oceania",
        image: "images/oceania.jpg",
        countries: ["Australia", "New Zealand", "Fiji", "Tahiti", "Cook Islands"]
    }
];

const active = "Home"; // or from router

export default function TopMenu() {

    const [megaOpen, setMegaOpen] = useState(false);
    const [activeContinent, setActiveContinent] = useState("asia");
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const megaMenuRef = useRef<HTMLDivElement>(null);
    const activeData = continents.find(
        (c) => c.id === activeContinent
    );

    // Handle scroll to show/hide header
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show header when scrolling up, hide when scrolling down
            if (currentScrollY < lastScrollY || currentScrollY < 100) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    // Close mega menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
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
             flex justify-between py-5 md:py-5 px-5 md:px-10
             
             transition-all duration-700 ease-in-out
             ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
             ${(lastScrollY > 50 || megaOpen)
                        ? 'bg-black/50 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]'
                        : 'bg-transparent border-transparent shadow-none'
                    }`}
            >

                <div className="flex items-center justify-between w-full gap-2">
                    <img
                        src="/images/logo.svg"
                        alt="Company Logo"
                        className="h-10 w-auto"
                    />
                    <div ref={megaMenuRef} className="flex items-center gap-5 lg:relative p-0 ">
                        {/* Explore Destination */}
                        <button
                            onClick={() => setMegaOpen(!megaOpen)}
                            className="text-white font-my-font-semibold text-xs sm:text-base cursor-pointer"
                        >
                            Explore Destination
                        </button>

                        <button className="
  bg-white
  
  font-my-font-semibold 
  text-black 
  px-3 py-3 md:px-4 md:py-2 
  rounded-full 
  text-xs sm:text-base 
  cursor-pointer 
  hover:bg-[#C43131]
  hover:text-white
  transition-all duration-300
">
                            Design Your trip
                        </button>

                        <a href="tel:+919876543210">      <img src="/images/call-top-icon.svg" alt="" /></a>







                        {/* 🔽 Mega Menu (same page) */}
                        {megaOpen && (
                            <div
                                className="absolute top-full left-0 right-0 lg:right-0 lg:left-auto mt-2 w-full md:w-[768px] lg:w-[900px] bg-white shadow-xl rounded-xl p-6 z-50"
                            >
                                <div className="flex gap-6">
                                    {/* Left Side - 60% - Continents & Countries */}
                                    <div className="w-[65%]">
                                        {/* Continent Tabs */}
                                        <div className="flex gap-2 mb-4  pb-3">
                                            {continents.map((continent) => (
                                                <div
                                                    key={continent.id}
                                                    onClick={() => setActiveContinent(continent.id)}
                                                    className={`cursor-pointer px-4 py-1 border border-gray-300 rounded-3xl
    ${activeContinent === continent.id
                                                            ? "text-[#C43131] border-[#C43131]  text-xl font-my-font-semibold"
                                                            : "text-gray-500 border-gray-300 text-xl font-my-font-semibold"
                                                        }`}
                                                >
                                                    {continent.name}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Countries Grid */}
                                        <div className="grid grid-cols-2 gap-3">
                                            {continents
                                                .find((c) => c.id === activeContinent)
                                                ?.countries.map((country, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="px-3 py-2 text-base text-gray-700 hover:text-black hover:bg-gray-100 rounded cursor-pointer transition-all"
                                                    >
                                                        {country}
                                                    </div>
                                                ))}
                                        </div>
                                    </div>

                                    {/* Right Side - 40% - Featured/Popular */}
                                    <div className="w-[35%] pl-6">
                                        <div className="w-full h-full aspect-[4/5] overflow-hidden rounded-lg">
                                            <img
                                                src={activeData?.image}
                                                alt={activeData?.name}
                                                className="w-full h-full object-cover transition-all duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>



                <SideBarMenu />



            </div>
        </>
    )
}