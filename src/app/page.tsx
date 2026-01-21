"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { title } from "process";
import { useState, useEffect, useRef } from "react";


const slides = [
  {
    id: 1,
    title: "Rajasthan",
    desc: "Discover breathtaking destinations and thrilling experiences.",
    image: "/images/destination-img1.jpg",
  },
  {
    id: 2,

    title: "Maldives",
    desc: "Premium journeys designed for comfort and elegance.",
    image: "/images/destination-img2.jpg",
  },
  {
    id: 3,

    title: "Paris",
    desc: "Perfect trips for families to enjoy together.",
    image: "/images/destination-img3.jpg",
  },
  {
    id: 4,

    title: "Dubai",
    desc: "Unforgettable moments for newlyweds.",
    image: "/images/destination-img4.jpg",
  },
  {
    id: 5,

    title: "Greece",
    desc: "Go on a journey of self-discovery.",
    image: "/images/destination-img5.jpg",
  },
  {
    id: 6,

    title: "Kerala",
    desc: "Fun-filled trips with like-minded explorers.",
    image: "/images/destination-img6.jpg",
  },
  {
    id: 7,

    title: "Rajasthanr",
    desc: "Fun-filled trips with like-minded explorers.",
    image: "/images/destination-img1.jpg",
  },
  {
    id: 8,

    title: "Maldives",
    desc: "Fun-filled trips with like-minded explorers.",
    image: "/images/destination-img2.jpg",
  },
  {
    id: 9,

    title: "Paris",
    desc: "Fun-filled trips with like-minded explorers.",
    image: "/images/destination-img3.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Ethan Miller",
    designation: "Product Manager",
    text: "Our private journey with Maximillian Holidays was truly transformative. The cinematic landscapes of Swiss and it’s unhurried, editorial - style pace allowed us to connect deeply with the culture. It felt like a curated story, not a catalogue.",
    avatar: "/images/testi-1.png",
  },
  {
    id: 2,
    name: "Sophia Brown",
    designation: "Product Manager",
    text: "Our private journey with Maximillian Holidays was truly transformative. The cinematic landscapes of Swiss and it’s unhurried, editorial - style pace allowed us to connect deeply with the culture. It felt like a curated story, not a catalogue.",
    avatar: "/images/testi-2.png",
  },
  {
    id: 3,
    name: "Daniel Lee",
    designation: "Product Manager",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    avatar: "/images/testi-3.png",
  },
  {
    id: 4,
    name: "Ethan Miller",
    designation: "Product Manager",
    text: "Our private journey with Maximillian Holidays was truly transformative. The cinematic landscapes of Swiss and it’s unhurried, editorial - style pace allowed us to connect deeply with the culture. It felt like a curated story, not a catalogue.",
    avatar: "/images/testi-1.png",
  },

];

const insights = [
  {
    id: 1,
    mainheading: "Travel Insights",
    heading: "Top ten destinations of Europe in 2026.",
    content: "Product Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien.",
    insight_image: "/images/insight-img.jpg",
  },
  {
    id: 2,
    mainheading: "Travel Insights",
    heading: "Top ten destinations of Europe in 2026.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien.",

    insight_image: "/images/insight-img.jpg",
  },
  {
    id: 3,
    mainheading: "Travel Insights",
    heading: "Top ten destinations of Europe in 2026.",
    content: "Product Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien. lorum ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet sit amet sapien.",
    insight_image: "/images/insight-img.jpg",
  },


];


const logos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",

];

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


export default function Home() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const [activeContinent, setActiveContinent] = useState("asia");
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const activeData = continents.find(
    (c) => c.id === activeContinent
  );

  useEffect(() => {
    if (sideOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideOpen]);

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

      {/* hero section */}
      <section
        className="relative bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('/images/hero-img.jpg')",
        }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2
             w-full max-w-[1600px] z-50
             flex justify-between py-5 px-10"
        >

          <div className="flex items-center gap-2">
            <img
              src="/images/logo.svg"
              alt="Company Logo"
              className="h-10 w-auto"
            />

          </div>
          <div className="flex items-center gap-5">
            <div ref={megaMenuRef} className="flex items-center gap-5 lg:relative p-3 ">
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

              {/* Hamburger */}
              <button className="cursor-pointer" onClick={() => setSideOpen(true)}>
                <img src="/images/hamburg-menu.svg" alt="" />
              </button>



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

            {/* RIGHT SLIDE MENU */}
            <>
            </>
          </div>



        </div>
        <div className="max-w-[1300px] mx-auto flex items-end justify-end  py-20  px-5  min-h-screen ">

          {/* Left content */}
          <div className="flex flex-col w-lg gap-5">
            <p className="text-white font-light text-end text-xs sm:text-base">Curated international travel experiences for discerning explorers. Crafted with care, culture, and character.</p>
            <h1 className="text-5xl text-white md:text-7xl mb-4 font-my-font-regular text-end">
              Journeys Beyond <br />
              The Ordinary
            </h1>


            <div className="flex justify-end gap-4">
              <button className="bg-white/30 backdrop-blur-md text-white 
 px-4 py-3
    md:px-6 md:py-4 rounded-full font-my-font-semibold 
shadow-lg  text-xs sm:text-base
hover:bg-white/40 transition cursor-pointer ">
                Explore Our Journeys
              </button>
              <button className=" text-white 
 px-4 py-3
    md:px-6 md:py-4 border border-white/40 rounded-full font-my-font-semibold
shadow-lg text-xs sm:text-base
hover:bg-white/40 transition cursor-pointer ">
                Design your trip
              </button>
            </div>
          </div>

          {/* Right image */}
        </div>
      </section >
      {/* hero section close */}



      {/* side bar */}
      <div
        onClick={() => setSideOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
    ${sideOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      <div
        className={`fixed top-0 right-0 h-screen w-[85%] sm:w-[300px] bg-white z-[1000]
    transform transition-transform duration-300 ease-in-out
    overflow-y-auto
    ${sideOpen ? "translate-x-0" : "translate-x-full"}`}

      >

        <div className="absolute left-0 bottom-20 px-6 py-5 ">
          <ul className="text-body font-medium ">
            <li className="mb-4 flex items-center gap-3  font-my-font-regular text-(--color-secondary)">
              <img
                src="images/call-icon.svg"
                alt="Phone"
                className="w-5 h-5"
              />
              <a href="tel:+91 999 886 8866">   +91 999 886 8866</a>
            </li>

            <li className="mb-4 flex items-center gap-3  font-my-font-regular text-(--color-secondary)">
              <img
                src="images/whatsapp-icon.svg"
                alt="Phone"
                className="w-5 h-5"
              />
              <a href="tel:+91 999 886 8866">   +91 999 886 8866</a>
            </li>

            <li className="flex items-center gap-3  font-my-font-regular text-(--color-secondary)">
              <img
                src="images/mail-icon.svg"
                alt="Email"
                className="w-5 h-5"
              />
              <a href="mailto:hello@maximilianholidays.com">hello@maximilianholidays.com</a>
            </li>
          </ul></div>



        <div className="absolute right-0 bottom-0 "> <img src="images/logo-icon.svg" alt="" /></div>
        <div className="p-6 flex justify-end items-center">
          <button
            onClick={() => setSideOpen(false)}
            className="text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        <nav className="px-6 space-y-4 text-sm flex flex-col">
          {["Home", "Destinations", "Design Your Trip", "Our World", "Contact Us"].map(
            (item, i) => (
              <a
                key={i}
                href="#"
                className={`
          relative inline-block
          font-my-font-semibold text-lg text-(--color-secondary) 
          transition-colors duration-300
          ${active === item ? "text-[#C43131]" : "text-(--color-secondary) "}
          hover:text-[#C43131]

          after:content-['']
          after:absolute after:left-0 after:-bottom-1
          after:h-[2px]
          after:bg-[#C43131]
          after:transition-all after:duration-300
          ${active === item ? "after:w-[40px]" : "after:w-0"}
          hover:after:w-[40px]
        `}
              >
                {item}
              </a>
            )
          )}
        </nav>


      </div>

      {/* side bar close */}

      {/* about section */}
      <section className="relative py-20 overflow-hidden">
        {/* Top Right Decorative Shape */}
        <img
          src="/images/logo-shape.png"
          alt="Decorative shape"
          className="
      absolute top-0 right-0
      w-200 sm:w-150 lg:w-200
      pointer-events-none
      select-none
    "
        />
        <div className="max-w-[1300px] flex mx-auto  px-5  ">
          <div className="w-[20%]  lg:w-[10%]"><img src="images/logo-icon.svg" alt="" /></div>
          <div className="w-[80%] lg:w-[60%]">
            <h2 className=" font-my-font-regular text-3xl md:text-4xl  text-(--color-secondary) mb-5">Travel, Thoughtfully <br /> Designed.</h2>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2">
                <p className="text-(--color-secondary)  mb-4">

                  At Maximillian Holidays, we believe meaningful travel is unhurried, immersive, and deeply personal.</p>
                <p className="text-(--color-secondary)">We craft small-group and private international journeys that focus on culture, connection, and comfort—moving beyond checklists to create experiences that stay with you long after the journey ends.</p>
              </div>
              <div className="w-full md:w-1/2"><p className="text-(--color-secondary)">Our curated approach focuses on specialty journeys from culinary and trekking expeditions to slow travel designed to foster genuine discovery. Through an enquiry-driven user journey and a commitment to cinematic storytelling, we transform international travel into a premium, custom-fit experience tailored specifically to your group size, budget, and season.</p></div>
            </div>
            <button className="flex items-center font-my-font-semibold text-sm sm:text-base justify-center py-3 mt-3  cursor-pointer  ">


              <span className="mr-3">Our World</span>
              <svg
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
            </button>
          </div>
        </div>
      </section>

      {/* about section close */}

      {/* signature journey section */}

      <section className="pt-0 md:pt-20 md:pb-20">
        <div className="max-w-[1300px]  mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-end items-start md:items-center w-full gap-4 md:gap-8">
            <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">Our <br />
              Signature Journeys</h3></div>
            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
            <div className="w-full md:w-[200px]"><p className="text-sm text-(--color-secondary) ">A selection of our carefully curated international experiences.</p></div>
            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
            <div className="inline-block"> <button className="flex items-center text-sm sm:text-base font-my-font-semibold justify-center py-3 cursor-pointer  ">
              <span className="mr-3 flex flex-wrap justify-start items-start">View All Signature Journeys</span>
              <svg
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
            </button></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-4 lg:gap-10 mt-5 md:mt-20">
            <div className="div">
              <div className="rounded-md relative aspect-[3/4] overflow-hidden"><img src="images/signature-journey-1.jpg" className="rounded-md w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
                </div>
                <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                  <h3 className="font-my-font-regular text-white text-2xl">Timeless Europe</h3>
                  <div className="text-white text-xs">
                    <ul className="flex flex-wrap justify-center items-center gap-2 mt-1">
                      <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                        Europe
                      </li>
                      <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                        Cultural
                      </li>
                      <li className="relative">
                        Small Group
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <div className="rounded-md relative aspect-[3/4] overflow-hidden">
                <img src="images/signature-journey-2.jpg" className="rounded-md w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
                </div>
                <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                  <h3 className="font-my-font-regular text-white text-2xl">Japan in Quiet Detail</h3>
                  <div className="text-white text-xs">
                    <ul className="flex flex-wrap justify-center items-center gap-2 mt-1">
                      <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                        Asia
                      </li>
                      <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                        Slow Travel
                      </li>

                      <li className="relative ">
                        Private
                      </li>
                    </ul>
                  </div>
                </div></div>
            </div>
            <div className="div">
              <div className="rounded-md relative aspect-[3/4] overflow-hidden"><img src="images/signature-journey-3.jpg" className="rounded-md w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
                </div>
                <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                  <h3 className="font-my-font-regular text-white text-2xl">American Landscapes</h3>
                  <div className="text-white text-xs">
                    <ul className="flex flex-wrap justify-center items-center gap-2 mt-1">
                      <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                        USA
                      </li>
                      <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                        Scenic
                      </li>
                      <li className="relative ">
                        Photography
                      </li>
                    </ul>
                  </div>
                </div></div>
            </div>
            <div className="div">
              <div className="rounded-md relative aspect-[3/4] overflow-hidden"><img src="images/signature-journey-4.jpg" className="rounded-md w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
                </div>
                <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                  <h3 className="font-my-font-regular text-white text-2xl">African Wilderness</h3>
                  <div className="text-white text-xs">
                    <ul className="flex flex-wrap justify-center items-center gap-2 mt-1">
                      <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                        Africa
                      </li>
                      <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                        Slow Travel
                      </li>
                      <li className="relative ">
                        Photography
                      </li>
                    </ul>
                  </div>
                </div></div>
            </div>
          </div>

        </div>
      </section>
      {/* signature journey section close */}



      {/* experience tour */}
      <section className="py-20">
        <div className="max-w-[1300px]  mx-auto px-5">
          <div className="flex gap-8 flex-col md:flex-row">
            <div className="w-full md:w-1/4 relative mr-0 md:pr-10"><h3 className=" font-my-font-regular text-3xl md:text-4xl  text-(--color-secondary) md:text-right">Experience <br /> Tours</h3>  <div className="absolute right-0 top-0  w-px h-10 bg-gray-400 md:block hidden"></div></div>
            <div className="w-full md:w-3/4">
              <div className="flex flex-col sm:flex-row w-full gap-5 md:gap-10 mb-4 md:mb-10">
                <div className="w-full sm:w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon1.svg" alt="" /></div>
                  <h4 className="text-1xl font-my-font-semibold">Cultural Journeys</h4>
                  <p className="text-(--color-secondary)">Immersive experiences rooted in history, art, and local traditions.</p>
                </div>
                <div className="w-full sm:w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon2.svg" alt="" /></div>
                  <h4 className="text-1xl font-my-font-semibold">Photography Tours</h4>
                  <p className="text-(--color-secondary)">Carefully paced journeys designed for visual storytelling.</p>
                </div>
                <div className="w-full sm:w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon3.svg" alt="" /></div>
                  <h4 className="text-1xl font-my-font-semibold">Trekking and Outdoors</h4>
                  <p className=" text-(--color-secondary)">Nature-led travel for those who seek landscapes beyond the ordinary.</p>
                </div>

              </div>
              <div className="flex flex-col sm:flex-row w-full gap-5 md:gap-10 mb-4 md:mb-10">
                <div className="w-full sm:w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon1.svg" alt="" /></div>
                  <h4 className="text-1xl font-my-font-semibold">Cultural Journeys</h4>
                  <p className=" text-(--color-secondary)">Immersive experiences rooted in history, art, and local traditions.</p>
                </div>
                <div className="w-full sm:w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon2.svg" alt="" /></div>
                  <h4 className="text-1xl font-my-font-semibold">Photography Tours</h4>
                  <p className=" text-(--color-secondary)">Carefully paced journeys designed for visual storytelling.</p>
                </div>
                <div className="w-full sm:w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon3.svg" alt="" /></div>
                  <h4 className="text-1xl font-my-font-semibold">Trekking and Outdoors</h4>
                  <p className=" text-(--color-secondary)">Nature-led travel for those who seek landscapes beyond the ordinary.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* experience tour close */}

      {/* speciality tours */}
      <section className="pt-0 md:pt-20 pb-10 md:pb-20">
        <div className="max-w-[1300px]  mx-auto px-5">
          <div className="flex flex-col-reverse md:flex-row gap-8">

            <div className="w-full md:w-3/4">
              <div className="flex flex-col sm:flex-row w-full gap-5 md:gap-10 mb-4 md:mb-10">
                <div className="w-full sm:w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon4.svg" alt="" /></div>
                  <h4 className="font-my-font-semibold text-1xl">Ladies-Only Journeys</h4>
                  <p className="text-(--color-secondary)">Immersive experiences rooted in history, art, and local traditions.</p>
                </div>
                <div className="w-full sm:w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon5.svg" alt="" /></div>
                  <h4 className="font-my-font-semibold text-1xl">Family Travel</h4>
                  <p className="text-(--color-secondary)">Carefully paced journeys designed for visual storytelling.</p>
                </div>
                <div className="w-full sm:w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon6.svg" alt="" /></div>
                  <h4 className="font-my-font-semibold text-1xl">Slow Travel Experiences</h4>
                  <p className="text-(--color-secondary)">Nature-led travel for those who seek landscapes beyond the ordinary.</p>
                </div>

              </div>
              <div className="flex flex-col sm:flex-row w-full gap-5 md:gap-10 mb-4 md:mb-10">
                <div className="w-full sm:w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon4.svg" alt="" /></div>
                  <h4 className="font-my-font-semibold text-11xl">Ladies-Only Journeys</h4>
                  <p className=" text-(--color-secondary)">Immersive experiences rooted in history, art, and local traditions.</p>
                </div>
                <div className="w-full sm:w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon5.svg" alt="" /></div>
                  <h4 className="font-my-font-semibold text-1xl">Family Travel</h4>
                  <p className="text-(--color-secondary)">Carefully paced journeys designed for visual storytelling.</p>
                </div>
                <div className="w-full sm:w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon6.svg" alt="" /></div>
                  <h4 className="font-my-font-semibold text-1xl">Slow Travel Experiences</h4>
                  <p className="text-(--color-secondary)">Nature-led travel for those who seek landscapes beyond the ordinary.</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/4 ml-0 md:pl-10">
              <h3 className=" font-my-font-regular text-4xl text-(--color-secondary)  text-left">Speciality <br /> Tours</h3>  <div className="absolute left-0 top-0  w-px h-10 bg-gray-400 "></div></div>
          </div>
        </div>
      </section >
      {/* speciality tours close */}


      {/* featured destination */}
      <section className="bg-[#F5F2EE] pt-10 md:pt-20 pb-10 md:pb-20">
        <div className="max-w-[1300px]  mx-auto px-5">
          <div className="flex flex-col md:flex-row  items-start md:items-center w-full gap-4 md:gap-8">
            <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">
              Featured <br />
              Destinations</h3></div>
            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
            <div className="w-full md:w-[200px]"><p className="text-sm text-(--color-secondary) ">Check out our carefully curated destination experiences.</p></div>
            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
            <div className="inline-block"> <button className="flex items-center text-sm sm:text-base font-my-font-semibold justify-center py-3 cursor-pointer ">
              <span className="mr-3 flex flex-wrap justify-start items-start">View All Destinations</span>
              <svg
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
            </button></div>
          </div>

        </div>
        <div className="w-full ">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={4.5}
            centeredSlides={true}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1.3, spaceBetween: 20 },
              480: { slidesPerView: 2.3, spaceBetween: 20 },
              1024: { slidesPerView: 4.5, },
            }}
            className="w-full overflow-visible"
          >
            {slides.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-xl overflow-hidden
  transition-all duration-300 my-10 md:my-15
  hover:shadow-2xl"
                >

                  {/* Image */}
                  <div className="w-full aspect-[3/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="py-5 px-6 text-center relative h-full flex flex-col min-h-[120px] ">
                    <div
                      className="absolute -top-[40px] right-4 z-10
  w-12 h-12 rounded-full
  flex items-center justify-center
  bg-white/20 backdrop-blur-lg
 

  transition-all duration-300
  hover:bg-white/30 hover:scale-105
  cursor-pointer"
                    > <img
                        src="images/arrow.svg"
                        className="w-5 h-5
  transition-all duration-300
  group-hover:rotate-90 group-hover:scale-110"
                      /> </div>
                    <h3 className="text-lg font-semibold mt-1 font-my-font-regular line-clamp-1">
                      {item.title}
                    </h3>


                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </section>

      {/* featured destination close */}


      {/* design your trips */}
      <section className="py-20 md:py-40">
        <div className="max-w-[1300px]  mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-end items-start md:items-center w-full gap-4 md:gap-8">
            <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">Design <br />
              Your Trip</h3></div>
            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
            <div className="w-full md:w-[200px]"><p className="text-sm text-(--color-secondary) ">Some journeys can’t be templated. Design a fully personalised journey with us.</p></div>
            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
            <div className="inline-block"> <button className="flex items-center text-sm sm:text-base font-my-font-semibold justify-center py-3 cursor-pointer  ">
              <span className="mr-3 flex flex-wrap justify-start items-start">Start Designing</span>
              <svg
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
            </button></div>
          </div>
        </div>
        <div className="max-w-[1300px]  mx-auto px-10 w-full mt-10">
          <img src="images/design-your-trips.svg" alt="" />
        </div>
      </section>

      {/* design your trips close */}

      {/* testimonials */}
      <section className="bg-[#f9f7f5] pt-20 md:pt-40 pb-10 md:pb-20">
        <div className="  mx-auto px-5">
          <div className="mb-4 mx-auto flex justify-center">
            <img src="images/quote-icon.svg" alt="" />
          </div>
          <div className="w-full my-10 md:py-20">
            <div className="max-w-4xl mx-auto text-center">

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={false}   // 👈 no arrows
                loop
                spaceBetween={10}
                autoplay={{
                  delay: 3000,          // 3 seconds per slide
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true, // optional: pause on hover
                }}

                className="testimonial-swiper"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="flex flex-col items-center">
                      <p className="text-lg md:text-2xl lg:text-3xl text-(--color-secondary)  mb-10 leading-normal">
                        {item.text}
                      </p>

                      <div className="flex items-center gap-4 md:gap-10 mb-10 overflow-hidden justify-center min-h-[80px]">
                        {(() => {
                          const currentIndex = testimonials.findIndex((t) => t.id === item.id);
                          const total = testimonials.length;
                          const visibleAvatars = [-2, -1, 0, 1, 2].map((offset) => {
                            const index = (currentIndex + offset + total) % total;
                            return testimonials[index];
                          });

                          return visibleAvatars.map((u, idx) => (
                            <img
                              key={`${u.id}-${idx}`}
                              src={u.avatar}
                              alt={u.name}
                              className={`w-12 h-12 rounded-full object-cover transition-all duration-300
                                ${idx === 2
                                  ? "ring-0 scale-150 grayscale-0 opacity-100 z-10"
                                  : "opacity-40 grayscale scale-90"
                                }`}
                            />
                          ));
                        })()}
                      </div>

                      <h4 className="font-grape-nuts text-2xl text-(--color-secondary)">{item.name}</h4>
                      <p className="text-(--color-secondary)">
                        {item.designation}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="mb-4 mx-auto flex justify-center">
            <div className="inline-block"> <button className="flex items-center text-sm sm:text-base font-my-font-semibold justify-center py-3 cursor-pointer  ">
              <span className="mr-3">View All Testimonials</span>
              <svg
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
            </button></div>
          </div>
        </div>
      </section>
      {/* testimonials close */}


      {/* What makes our travel packages exceptional */}
      <section className="py-10 md:py-40">
        <div className="max-w-[1300px] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mx-auto  px-5  ">
          <div className="w-[10%]"><img src="images/logo-icon.svg" alt="" /></div>
          <div className="inline-block]">
            <h2 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) ">What makes our travel <br /> packages exceptional</h2>
            <div className="flex gap-5">
            </div>

          </div>
          <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
          <div className="inline-block"> <button className="flex items-center text-sm sm:text-base font-my-font-semibold justify-center py-3 cursor-pointer  ">
            <span className="mr-3">Contact Now Us</span>
            <svg
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
          </button></div>
        </div>

        <div className="max-w-[1300px] flex items-center gap-8 mx-auto mt-10 md:mt-20  px-5  ">
          <div className=" hidden md:block md:w-[10%]"></div>
          <div className="w-[90%]">
            <div className="grid  items-center   sm:grid-cols-2 md:gap-5 lg:gap-10 xl:gap-15   lg:grid-cols-4">
              <div className="pb-10 pr-0 md:pr-5">
                <div className="pb-5"><img src="images/package-exception-icon-1.svg" alt="" /></div>

                <p className="text-(--color-secondary)">Experiences over checklists. Not photo tick-box tourism.</p>
              </div>
              <div className="pb-10 pr-0 md:pr-5">
                <div className="pb-5"><img src="images/package-exception-icon-2.svg" alt="" /></div>

                <p className="text-(--color-secondary)">Private guides & exclusive access.</p>
              </div>
              <div className="pb-10 pr-0 md:pr-5">
                <div className="pb-5"><img src="images/package-exception-icon-3.svg" alt="" /></div>

                <p className="text-(--color-secondary)">Handpicked luxury hotels & villas.</p>
              </div>
              <div className="pb-10 pr-0 md:pr-5">
                <div className="pb-5"><img src="images/package-exception-icon-4.svg" alt="" /></div>

                <p className="text-(--color-secondary)">Flexible itineraries, no rigid schedules.</p>
              </div>
              <div className="pb-10 pr-0 md:pr-5">
                <div className="pb-5"><img src="images/package-exception-icon-5.svg" alt="" /></div>

                <p className="text-(--color-secondary)">Thoughtful pacing. Space to explore, reflect & connect.</p>
              </div>
              <div className="pb-10 pr-0 md:pr-5">
                <div className="pb-5"><img src="images/package-exception-icon-6.svg" alt="" /></div>

                <p className="text-(--color-secondary)">Deeper immersion rather than rushed sightseeing.</p>
              </div>
              <div className="pb-10 pr-0 md:pr-5">
                <div className="pb-5"><img src="images/package-exception-icon-7.svg" alt="" /></div>

                <p className="text-(--color-secondary)">24/7 global concierge support.</p>
              </div>
              <div className="pb-10 pr-0 md:pr-5">
                <div className="pb-5"><img src="images/package-exception-icon-8.svg" alt="" /></div>

                <p className="text-(--color-secondary)">Discreet, personalised service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What makes our travel packages exceptional close */}



      {/* insights */}
      <section className="bg-white pb-10 md:pb-40">
        <div className="mx-auto px-0 md:px-5">
          <div className="w-full">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <button className="insights-prev hidden lg:flex text-sm sm:text-base absolute md:left-0 xl:-left-25 top-1/2  z-20
    w-20 h-24 items-center justify-center cursor-pointer">
                  <img src="images/left-arrow.svg" alt="" />
                </button>

                <button className="insights-next hidden lg:flex text-sm sm:text-base absolute md:right-0 xl:-right-25 top-1/2  z-20
    w-20 h-24  items-center justify-center cursor-pointer">
                  <img src="images/right-arrow.svg" alt="" />
                </button>
                <Swiper
                  modules={[Navigation, Autoplay]}
                  loop={true}
                  spaceBetween={0}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false, // ⭐ VERY IMPORTANT
                    pauseOnMouseEnter: true,
                  }}

                  navigation={{
                    prevEl: ".insights-prev",
                    nextEl: ".insights-next",
                  }}
                  speed={800}
                  className="insights-swiper"
                >
                  {insights.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="relative flex flex-col md:flex-row items-center gap-3 md:gap-10 xl:gap-20 p-10 md:p-15 xl:p-20 z-10">

                        {/* BACKGROUND (70%) */}
                        <div
                          className="
                    absolute inset-y-0 left-0
                    w-full md:w-[80%]
                    bg-[#f7f3ef]
                    rounded-none md:rounded-md
                    z-0
                  "
                        />

                        {/* LEFT CONTENT */}
                        <div className="relative z-10 w-full md:w-1/2 pr-0 md:pr-10 py-0 md:py-10  xl:pr-20 ">
                          <p className="tracking-wide text-(--color-secondary) mb-4">
                            {item.mainheading}
                          </p>

                          <h2 className="text-2xl font-my-font-semibold text-(--color-secondary) leading-snug mb-4 md:mb-6 line-clamp-2">
                            {item.heading}
                          </h2>

                          <p className="text-(--color-secondary) mb-5 max-w-md line-clamp-4">
                            {item.text || item.content}
                          </p>

                          <button className="flex items-center text-sm sm:text-base font-my-font-semibold py-3 cursor-pointer hover:bg-gray-100 transition">
                            <span className="mr-3">Read More</span>
                            <svg
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
                          </button>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative z-10 w-full md:w-1/2">
                          <img
                            src={item.insight_image}
                            alt={item.heading}
                            className="rounded-2xl object-cover shadow-2xl w-full "
                          />
                        </div>

                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*insights close */}

      {/* bespoke journey */}
      <section
        className="
    py-20 h-screen 
    bg-[url('/images/bespoke-journey-bg.jpg')]
    bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-[1300px] flex items-center justify-between h-full flex-col gap-8 mx-auto  ">
          <div className="w-full flex flex-col items-end gap-5 pr-5 xl:pr-0">
            <img src="images/google-review.svg" alt="" className="w-40 md:w-auto" />
            <img src="images/tripadvisor-reviews.svg" alt="" className="w-40 md:w-auto" />
          </div>
          <div className="w-full pl-5 md:pl-10">
            <h4 className="text-4xl md:text-5xl lg:text-6xl font-my-font-regular text-white mb-6 ">
              Begin Your <br />
              Bespoke Journey
            </h4>
            <p className=" text-white mb-5 max-w-md line-clamp-4">
              Luxury travel isn’t about where you go. It’s about how it feels. Let us design a journey that reflects you.
            </p>
            <div className="flex gap-4">

              <button className="bg-white/30 backdrop-blur-md text-white 
 px-4 py-3
    md:px-6 md:py-4 rounded-full font-my-font-semibold 
shadow-lg  text-xs sm:text-base
hover:bg-white/40 transition cursor-pointer ">
                Explore Our Journeys
              </button>
              <button className=" text-white 
 px-4 py-3
    md:px-6 md:py-4 border border-white/40 rounded-full font-my-font-semibold
shadow-lg text-xs sm:text-base
hover:bg-white/40 transition cursor-pointer ">
                Design your trip
              </button>
            </div>
          </div>

        </div>
      </section>
      {/* bespoke journey close */}


      {/* logo carousel */}
      <section className="w-full  py-10 md:py-20 ">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          className="flex items-center"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-16 w-auto object-contain 
               "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* logo carousel close */}



      {/* footer */}

      <footer className="bg-white border-t  border-gray-200 py-20 px-5 xl:px-0">
        <div className="max-w-[1400px] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 md:gap-8">
            <div className="border-0  md:border-r border-gray-200 mb-5 md:mb-0">
              <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Menu</h6>
              <ul className="text-body font-medium">
                <li className="mb-4 text-3xl md:text-4xl lg:text-5xl font-my-font-regular text-(--color-secondary)">
                  <a href="https://flowbite.com/" className="hover:underline">Home</a>
                </li>
                <li className="mb-4 text-3xl md:text-4xl lg:text-5xl font-my-font-regular text-(--color-secondary)">
                  <a href="https://flowbite.com/" className="hover:underline">Destinations</a>
                </li>
                <li className="mb-4 text-3xl md:text-4xl lg:text-5xl font-my-font-regular text-(--color-secondary)">
                  <a href="https://flowbite.com/" className="hover:underline">Design Your Trip</a>
                </li>
                <li className="mb-4 text-3xl md:text-4xl lg:text-5xl font-my-font-regular text-(--color-secondary)">
                  <a href="https://flowbite.com/" className="hover:underline">Our World</a>
                </li>
                <li className="mb-4 text-3xl md:text-4xl lg:text-5xl font-my-font-regular text-(--color-secondary)">
                  <a href="https://flowbite.com/" className="hover:underline">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="border-0  md:border-r border-gray-200 mb-5 md:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="div mb-5 md:mb-0">
                  <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Specialties</h6>
                  <ul className="text-body font-medium mb-5 md:mb-0">
                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline ">Ladies only Journeys</a>
                    </li>
                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Family Travel</a>
                    </li>
                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Slow Travel Experiences</a>
                    </li>

                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Senior Friendly Journeys</a>
                    </li>

                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Solo Traveller</a>
                    </li>

                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Festival Journeys</a>
                    </li>
                  </ul>

                  <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Regions</h6>
                  <ul className="text-body font-medium">
                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Explore Europe</a>
                    </li>
                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Amazing Asia</a>
                    </li>

                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Astounding America</a>
                    </li>
                  </ul>
                </div>
                <div className="div mb-5 md:mb-0">
                  <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Experience</h6>
                  <ul className="text-body font-medium">
                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Cultural Journeys</a>
                    </li>
                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Photography Tours</a>
                    </li>
                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Trekking and Outdoors</a>
                    </li>
                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Culinary Journeys</a>
                    </li>
                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Wellness Travel</a>
                    </li>
                    <li className="mb-2 xl:mb-4 text-[#818c94]">
                      <a href="#" className="hover:underline">Scenic Escapes</a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="pl-0 md:pl-10">
              <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Contact</h6>
              <ul className="text-body font-medium mb-5">
                <li className="mb-4 text-[#818c94]">
                  Registered Office: <br />
                  Maximilian Holidays Pvt Ltd<br />
                  #3B, The Q Business Bay,<br />
                  Kochi, Kerala - India.
                </li></ul>
              <ul className="text-body font-medium mb-5">
                <li className="mb-4 text-[#818c94]">
                  Corporate Office <br />
                  Level B, Ocean Pearl <br />
                  Smart City, Dubai.
                </li>
              </ul>

              <ul className="text-body font-medium pl-0 md:pl-0 md:-ml-[25px]">
                <li className="mb-4 flex items-center gap-3 text-[#818c94]">
                  <img
                    src="images/call-icon.svg"
                    alt="Phone"
                    className="w-3 h-3"
                  />
                  <a href="tel:+91 999 886 8866">   +91 999 886 8866</a>
                </li>

                <li className="mb-4 flex items-center gap-3 text-[#818c94]">
                  <img
                    src="images/whatsapp-icon.svg"
                    alt="Phone"
                    className="w-3 h-3"
                  />
                  <a href="tel:+91 999 886 8866">   +91 999 886 8866</a>
                </li>

                <li className="flex items-center gap-3 text-[#818c94]">
                  <img
                    src="images/mail-icon.svg"
                    alt="Email"
                    className="w-3 h-3"
                  />
                  <a href="mailto:hello@maximilianholidays.com">hello@maximilianholidays.com</a>
                </li>
              </ul>

            </div>
          </div>
          <hr className="border-gray-200 my-6  sm:mx-auto lg:my-8" />
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between w-full gap-5">
            <span className="text-base text-[#93989b]  text-body sm:text-center">Made by  <a href="https://phitany.com/" className="hover:underline">Phitany</a>
            </span>
            <div className="div">
              <ul className="flex gap-4 mt-1">
                <li className="relative text-base text-[#93989b]  text-body sm:text-center pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#93989b]">
                  <a href="#" className="hover:underline">Terms</a>
                </li>

                <li className="relative pr-3 text-base text-[#93989b]  text-body sm:text-center">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
              </ul></div>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-body text-[#818c94] hover:text-heading">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" /></svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-body text-[#818c94] hover:text-heading ms-5">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2c2.717 0 3.056.01 4.122.06 1.064.05 1.79.217 2.43.465a4.92 4.92 0 0 1 1.77 1.153 4.92 4.92 0 0 1 1.153 1.77c.248.64.415 1.366.465 2.43.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.064-.217 1.79-.465 2.43a4.902 4.902 0 0 1-2.923 2.923c-.64.248-1.366.415-2.43.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.064-.05-1.79-.217-2.43-.465a4.902 4.902 0 0 1-2.923-2.923c-.248-.64-.415-1.366-.465-2.43C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.064.217-1.79.465-2.43A4.92 4.92 0 0 1 3.678 3.73a4.92 4.92 0 0 1 1.77-1.153c.64-.248 1.366-.415 2.43-.465C8.944 2.01 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.25-.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>

              <a href="#" className="text-body text-[#818c94] hover:text-heading ms-5">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" /></svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-body text-[#818c94] hover:text-heading ms-5">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.88 4.75 12 4.75 12 4.75s-5.88 0-7.64.49A2.75 2.75 0 0 0 2.42 7.19 28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .42 4.81 2.75 2.75 0 0 0 1.94 1.95c1.76.49 7.64.49 7.64.49s5.88 0 7.64-.49a2.75 2.75 0 0 0 1.94-1.95A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
                <span className="sr-only">YouTube channel</span>
              </a>

            </div>
          </div>
        </div>
      </footer >

      <footer className="bg-[#C43131] py-10 md:py-20">
        <div className="max-w-[1300px] flex flex-col items-center justify-center mx-auto text-center">
          <img src="images/logo-footer.svg" alt="" />
          <p className="text-white text-sm mt-3">A premium travel brand owned by Maximilian Holidays Private Ltd.</p>
        </div>
      </footer>

      {/* footer close */}
    </>
  );
}