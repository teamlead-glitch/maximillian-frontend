"use client";
import { useEffect } from "react";
import Script from "next/script";

import Link from "next/link";


export default function Home() {
  return (
    <>
      <section
        className="relative bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('/images/hero-img.jpg')",
        }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2
             w-full max-w-[1600px]
             flex justify-between py-5 px-5"
        >

          <div className="flex items-center gap-2">
            <img
              src="/images/logo.svg"
              alt="Company Logo"
              className="h-10 w-auto"
            />

          </div>
          <div className="">nav</div>
        </div>
        <div className="max-w-[1300px] mx-auto flex items-end justify-end  py-20  px-5  min-h-screen ">

          {/* Left content */}
          <div className="flex flex-col w-lg">
            <p className="text-white font-light text-end">Curated international travel experiences for discerning explorers. Crafted with care, culture, and character.</p>
            <h1 className="text-4xl text-white md:text-7xl mb-4 font-my-font text-end">
              Journeys Beyond <br />
              The Ordinary
            </h1>


            <div className="flex justify-end gap-4">
              <button className="bg-white/30 backdrop-blur-md text-white 
px-6 py-3 rounded-full font-medium 
shadow-lg
hover:bg-white/40 transition cursor-pointer font-my-font">
                Explore Our Journeys
              </button>
              <button className=" text-white 
px-6 py-3 border border-white/40 rounded-full font-medium 
shadow-lg
hover:bg-white/40 transition cursor-pointer font-my-font">
                Design your trip
              </button>
            </div>
          </div>

          {/* Right image */}


        </div>
      </section >
      <section className="py-20">
        <div className="max-w-[1300px] flex mx-auto  px-5  ">
          <div className="w-[10%]"><img src="images/logo-icon.svg" alt="" /></div>
          <div className="w-[60%]">
            <h2 className=" font-my-font text-4xl text-(--color-secondary) mb-5">Travel, Thoughtfully <br /> Designed.</h2>
            <div className="flex gap-5">
              <div className="w-1/2">
                <p className="text-sm text-(--color-secondary)  mb-4">

                  At Maximillian Holidays, we believe meaningful travel is unhurried, immersive, and deeply personal.</p>
                <p className="text-sm text-(--color-secondary)">We craft small-group and private international journeys that focus on culture, connection, and comfort—moving beyond checklists to create experiences that stay with you long after the journey ends.</p>
              </div>
              <div className="w-1/2"><p className="text-sm text-(--color-secondary)">Our curated approach focuses on specialty journeys from culinary and trekking expeditions to slow travel designed to foster genuine discovery. Through an enquiry-driven user journey and a commitment to cinematic storytelling, we transform international travel into a premium, custom-fit experience tailored specifically to your group size, budget, and season.</p></div>
            </div>
            <button className="flex items-center font-my-font justify-center py-3 cursor-pointer  hover:bg-gray-100 transition">
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
      <section className="py-20">
        <div className="max-w-[1300px]  mx-auto px-5">
          <div className="flex justify-end items-center w-full gap-8">
            <div className="inline-block">  <h3 className=" font-my-font text-4xl text-(--color-secondary) text-right">Our <br />
              Signature Journeys</h3></div>
            <div className="w-px h-10 bg-gray-300 "></div>
            <div className="w-[200px]"><p className="text-sm text-(--color-secondary) ">A selection of our carefully curated international experiences.</p></div>
            <div className="w-px h-10 bg-gray-300 "></div>
            <div className="inline-block"> <button className="flex items-center font-my-font justify-center py-3 cursor-pointer  hover:bg-gray-100 transition">
              <span className="mr-3">View All Signature Journeys</span>
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
          <div className="w-full flex mt-20 gap-10">
            <div className="w-1/3"><div className="img__box rounded-md relative"><img src="images/signature-journey-1.jpg" className="rounded-md" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
              </div>
              <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                <h3 className="font-my-font text-white text-2xl">Signature Journey</h3>
                <div className="text-white text-xs">
                  <ul className="flex gap-2 mt-1">
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Europe
                    </li>
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Cultural
                    </li>
                    <li className="relative pr-3">
                      Small Group
                    </li>
                  </ul>
                </div>
              </div>
            </div></div>
            <div className="w-1/3"><div className="img__box rounded-md relative"><img src="images/signature-journey-2.jpg" className="rounded-md" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
              </div>
              <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                <h3 className="font-my-font text-white text-2xl">Japan in Quiet Detail</h3>
                <div className="text-white text-xs">
                  <ul className="flex gap-2 mt-1">
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Asia
                    </li>
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Slow Travel
                    </li>

                    <li className="relative pr-3">
                      Private
                    </li>
                  </ul>
                </div>
              </div></div></div>
            <div className="w-1/3"><div className="img__box rounded-md relative"><img src="images/signature-journey-3.jpg" className="rounded-md" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
              </div>
              <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                <h3 className="font-my-font text-white text-2xl">American Landscapes</h3>
                <div className="text-white text-xs">
                  <ul className="flex gap-2 mt-1">
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      USA
                    </li>
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Scenic
                    </li>
                    <li className="relative pr-3">
                      Photography
                    </li>
                  </ul>
                </div>
              </div></div></div>
            <div className="w-1/3"><div className="img__box rounded-md relative"><img src="images/signature-journey-4.jpg" className="rounded-md" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
              </div>
              <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                <h3 className="font-my-font text-white text-2xl">African Wilderness</h3>
                <div className="text-white text-xs">
                  <ul className="flex gap-2 mt-1">
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Africa
                    </li>
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Slow Travel
                    </li>
                    <li className="relative pr-3">
                      Photography
                    </li>
                  </ul>
                </div>
              </div></div></div>
          </div>

        </div>
      </section>
    </>
  );
}