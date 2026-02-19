"use client";

import { useEffect, useState } from "react";
import LogoCarousel from "@/components/home/LogoCarousel";
import Image from "next/image";

import { api } from "@/services/api";
import { formatLongDate } from "@/utils/formatDate";
import Loader from "../common/Loader";

export default function BlogsList() {
     const [blogData, setBlogData] = useState<any[]>([]);
     const [loading, setLoading] = useState(true);

    return (
        <>

            <section className="pt-32  xl:pt-40  pb-20 overflow-hidden bg-white">
                <div className="max-w-[1300px]  mx-auto  px-5">
                    <div className="w-full justify-center items-center mb-10">
                        <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-(--color-secondary) text-center ">
                            Travel Insights
                        </h1>
                    </div>

                    {/* 2 column layout */}

                    <div className="grid grid-cols-1 sm:grid-cols-[7fr_3fr] gap-10">
                        <div className="group">
                            <div className="aspect-[7/3] rounded-lg  relative overflow-hidden">
                                <a href="/">  <img
                                    src="images/blog-details-img.png"
                                    alt=""
                                    className="rounded-lg w-full h-full object-cover relative transition-transform duration-500 group-hover:scale-110"
                                />
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                </a>
                                <div className="absolute bottom-0 left-0 right-2 p-4 ">
                                    <div className="absolute bottom-0 left-0 right-2 p-4 ">
                                        <p className="text-white text-sm md:text-lg  text-right">4 min read</p>
                                    </div>
                                </div></div>
                            <div className="w-full md:w-1/2 pt-5">
                                <a href="">
                                    <h3 className="font-my-font-semibold text-break  text-xl md:text-2xl text-(--color-secondary)  line-clamp-2">
                                        Top ten destinations of Europe in year 2026.
                                    </h3>
                                </a>
                                <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1 py-4">
                                    <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                        Guides
                                    </li>
                                    <li className="relative text-(--color-secondary) after: content-none">
                                        Europe
                                    </li>
                                </ul>
                            </div></div>

                        <div className="group">
                            <div className="aspect-square rounded-lg w-full  relative overflow-hidden">
                                <a href=""> <img
                                    src="images/bloglist-1.png"
                                    alt=""
                                    className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                </a>
                                <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                <div className="absolute bottom-0 left-0 right-2 p-4 ">
                                    <p className="text-white text-sm md:text-lg  text-right">4 min read</p>
                                </div>
                            </div>

                            <div className="w-full pt-5">
                                <a href="">

                                    <h3 className="font-my-font-semibold text-break  text-xl md:text-2xl text-(--color-secondary)  line-clamp-2">
                                        The Best Places to see Cherry Blossom Outside of Japan
                                    </h3>
                                </a>
                                <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1 py-4">
                                    <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                        Guides
                                    </li>
                                    <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                        Tailand
                                    </li>
                                    <li className="relative text-(--color-secondary) after: content-none">
                                        England
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 3 column layout */}


                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-10">
                        <div className="flex flex-col">
                            <div className="group">
                                <div className="aspect-square rounded-lg w-full  relative overflow-hidden">
                                    <a href="">
                                        <img
                                            src="images/bloglist-4.jpg"
                                            alt=""
                                            className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-2 p-4 ">
                                        <p className="text-white text-sm md:text-lg  text-right">4 min read</p>
                                    </div>
                                </div>
                                <div className="w-full pt-5">
                                    <a href="">
                                        <h3 className="font-my-font-semibold text-break  text-xl md:text-2xl text-(--color-secondary)  line-clamp-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </h3>
                                    </a>
                                    <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1 py-4">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Experience
                                        </li>
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Specialty
                                        </li>
                                        <li className="relative text-(--color-secondary) after: content-none">
                                            Country
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="group">
                                <div className="aspect-square rounded-lg w-full  relative overflow-hidden">
                                    <a href="">
                                        <img
                                            src="images/bloglist-2.jpg"
                                            alt=""
                                            className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-2 p-4 ">
                                        <p className="text-white text-sm md:text-lg  text-right">4 min read</p>
                                    </div>
                                </div>
                                <div className="w-full pt-5">
                                    <a href="">
                                        <h3 className="font-my-font-semibold text-break  text-xl md:text-2xl text-(--color-secondary)  line-clamp-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </h3>
                                    </a>
                                    <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1 py-4">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Experience
                                        </li>
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Specialty
                                        </li>
                                        <li className="relative text-(--color-secondary) after: content-none">
                                            Country
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="group">
                                <div className="aspect-square rounded-lg w-full  relative overflow-hidden">
                                    <a href="">
                                        <img
                                            src="images/bloglist-3.jpg"
                                            alt=""
                                            className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-2 p-4 ">
                                        <p className="text-white text-sm md:text-lg  text-right">4 min read</p>
                                    </div>
                                </div>
                                <div className="w-full pt-5">
                                    <a href="">
                                        <h3 className="font-my-font-semibold text-break  text-xl md:text-2xl text-(--color-secondary)  line-clamp-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </h3>
                                    </a>
                                    <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1 py-4">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Experience
                                        </li>
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Specialty
                                        </li>
                                        <li className="relative text-(--color-secondary) after: content-none">
                                            Country
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2 column layout */}

                    <div className="grid grid-cols-1 sm:grid-cols-[3fr_7fr] gap-10">
                        <div className="group">
                            <div className="aspect-square rounded-lg w-full  relative overflow-hidden">
                                <a href=""><img
                                    src="images/bloglist-1.png"
                                    alt=""
                                    className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                </a>
                                <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                <div className="absolute bottom-0 left-0 right-2 p-4 ">
                                    <p className="text-white text-sm md:text-lg  text-right">4 min read</p>
                                </div>
                            </div>
                            <div className="w-full pt-5">
                                <a href=""> <h3 className="font-my-font-semibold text-break  text-xl md:text-2xl text-(--color-secondary)  line-clamp-2">
                                    The Best Places to see Cherry Blossom Outside of Japan
                                </h3>
                                </a>
                                <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1 py-4">
                                    <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                        Guides
                                    </li>
                                    <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                        Tailand
                                    </li>
                                    <li className="relative text-(--color-secondary) after: content-none">
                                        England
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="group">
                            <div className="aspect-[7/3] rounded-lg  relative overflow-hidden">
                                <a href=""> <img
                                    src="images/blog-details-img.png"
                                    alt=""
                                    className="rounded-lg w-full h-full object-cover relative transition-transform duration-500 group-hover:scale-110"
                                />
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                </a>
                                <div className="absolute bottom-0 left-0 right-2 p-4 ">
                                    <p className="text-white text-sm md:text-lg  text-right">4 min read</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 pt-5">
                                <a href="">
                                    <h3 className="font-my-font-semibold text-break  text-xl md:text-2xl text-(--color-secondary)  line-clamp-2">
                                        Top ten destinations of Europe in year 2026.
                                    </h3>
                                </a>
                                <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1 py-4">
                                    <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                        Guides
                                    </li>
                                    <li className="relative text-(--color-secondary) after: content-none">
                                        Europe
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*3  column layout */}

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-10">
                        <div className="flex flex-col">
                            <div className="group">

                                <div className="aspect-square rounded-lg w-full  relative overflow-hidden">

                                    <a href=""> <img
                                        src="images/bloglist-2.jpg"
                                        alt=""
                                        className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    </a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-2 p-4 ">
                                        <p className="text-white text-sm md:text-lg  text-right">4 min read</p>
                                    </div>
                                </div>
                                <div className="w-full pt-5">
                                    <a href="">
                                        <h3 className="font-my-font-semibold text-break  text-xl md:text-2xl text-(--color-secondary)  line-clamp-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </h3>
                                    </a>
                                    <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1 py-4">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Experience
                                        </li>
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Specialty
                                        </li>
                                        <li className="relative text-(--color-secondary) after: content-none">
                                            Country
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="group">
                                <div className="aspect-square rounded-lg w-full  relative overflow-hidden">
                                    <a href="">
                                        <img
                                            src="images/bloglist-3.jpg"
                                            alt=""
                                            className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-2 p-4 ">
                                        <p className="text-white text-sm md:text-lg  text-right">4 min read</p>
                                    </div>
                                </div>
                                <div className="w-full pt-5">
                                    <a href="">
                                        <h3 className="font-my-font-semibold text-break  text-xl md:text-2xl text-(--color-secondary)  line-clamp-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </h3>
                                    </a>
                                    <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1 py-4">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Experience
                                        </li>
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Specialty
                                        </li>
                                        <li className="relative text-(--color-secondary) after: content-none">
                                            Country
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="group">
                                <div className="aspect-square rounded-lg w-full  relative overflow-hidden">
                                    <a href="">
                                        <img
                                            src="images/bloglist-4.jpg"
                                            alt=""
                                            className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </a>
                                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-2 p-4 ">
                                        <p className="text-white text-sm md:text-lg  text-right">4 min read</p>
                                    </div>
                                </div>
                                <div className="w-full pt-5">
                                    <a href="">
                                        <h3 className="font-my-font-semibold text-break  text-xl md:text-2xl text-(--color-secondary)  line-clamp-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </h3>
                                    </a>
                                    <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1 py-4">
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Experience
                                        </li>
                                        <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                            Specialty
                                        </li>
                                        <li className="relative text-(--color-secondary) after: content-none">
                                            Country
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <LogoCarousel />
        </>
    );
}
