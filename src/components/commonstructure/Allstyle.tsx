"use client";


import { CheckCircle, ChevronRight } from "lucide-react";
import Link from "next/link";



export default function Allstyle() {
    return (
        <>
            {/* HEADER */}
            <section
                className="relative py-40 bg-black bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/inner-bg.jpg')",
                }}
            >
                {/* overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                <h1 className="relative z-10 text-center text-white text-4xl font-my-font-semibold">
                    Privacy Policy
                </h1>
            </section>



            {/* CONTENT */}
            <section className="relative py-20 bg-white ">
                <div className="max-w-[1300px] mx-auto px-5 space-y-3">
                    <div className="detail_breadcrumps py-3">
                        <div className="container">
                            <nav className="flex flex-wrap items-center space-x-2 text-sm text-(--color-secondary)">
                                <Link
                                    href="/"
                                    className="text-(--color-secondary)  transition-colors duration-200 no-underline font-light hover:text-[#c43131]"
                                >
                                    Home
                                </Link>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                                <span className="text-(--color-secondary) font-medium">
                                    Privacy Policy
                                </span>
                            </nav>
                        </div>
                    </div>

                    {/* Headings */}
                    <h1 className="text-4xl md:text-5xl  font-my-font-regular  text-(--color-secondary)">Heading</h1>
                    <p className="text-sm text-(--color-secondary) ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
                        et ipsum. Atque amet, aspernatur illo corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, maiores omnis. Labore, rerum dolores eius quibusdam laudantium, architecto sapiente voluptate voluptatem porro, ipsa excepturi sint? Numquam, magni. Ex, voluptates fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, id fugiat libero, sit repellat, debitis repellendus necessitatibus mollitia doloribus soluta quaerat nostrum quisquam? Iure, temporibus impedit minus fugit consequatur officiis!
                    </p>

                    <h2 className="text-3xl md:text-4xl  font-my-font-regular  text-(--color-secondary)">Heading Two</h2>
                    <p className="text-sm text-(--color-secondary) ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
                        et ipsum. Atque amet, aspernatur illo corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, maiores omnis. Labore, rerum dolores eius quibusdam laudantium, architecto sapiente voluptate voluptatem porro, ipsa excepturi sint? Numquam, magni. Ex, voluptates fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, id fugiat libero, sit repellat, debitis repellendus necessitatibus mollitia doloribus soluta quaerat nostrum quisquam? Iure, temporibus impedit minus fugit consequatur officiis!
                    </p>

                    <h3 className="text-2xl md:text-3xl  font-my-font-regular  text-(--color-secondary)">Heading Three</h3>
                    <p className="text-sm text-(--color-secondary) ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
                        et ipsum. Atque amet, aspernatur illo corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, maiores omnis. Labore, rerum dolores eius quibusdam laudantium, architecto sapiente voluptate voluptatem porro, ipsa excepturi sint? Numquam, magni. Ex, voluptates fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, id fugiat libero, sit repellat, debitis repellendus necessitatibus mollitia doloribus soluta quaerat nostrum quisquam? Iure, temporibus impedit minus fugit consequatur officiis!
                    </p>

                    <h4 className="text-xl md:text-2xl  font-my-font-regular  text-(--color-secondary)">Heading Four</h4>
                    <p className="text-sm text-(--color-secondary) ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
                        et ipsum. Atque amet, aspernatur illo corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, maiores omnis. Labore, rerum dolores eius quibusdam laudantium, architecto sapiente voluptate voluptatem porro, ipsa excepturi sint? Numquam, magni. Ex, voluptates fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, id fugiat libero, sit repellat, debitis repellendus necessitatibus mollitia doloribus soluta quaerat nostrum quisquam? Iure, temporibus impedit minus fugit consequatur officiis!
                    </p>

                    <h5 className="text-lg font-my-font-regular  text-(--color-secondary)">Heading Five</h5>
                    <p className="text-sm text-(--color-secondary) ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
                        et ipsum. Atque amet, aspernatur illo corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, maiores omnis. Labore, rerum dolores eius quibusdam laudantium, architecto sapiente voluptate voluptatem porro, ipsa excepturi sint? Numquam, magni. Ex, voluptates fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, id fugiat libero, sit repellat, debitis repellendus necessitatibus mollitia doloribus soluta quaerat nostrum quisquam? Iure, temporibus impedit minus fugit consequatur officiis!
                    </p>

                    <ul className="space-y-3 mt-5">
                        <li className="flex items-start gap-3">
                            <span className="text-[#c43131]">✔</span>
                            <span className="text-sm text-(--color-secondary)">First list </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#c43131]">✔</span>
                            <span className="text-sm text-(--color-secondary)">second list</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#c43131]">✔</span>
                            <span className="text-sm text-(--color-secondary)">third list</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#c43131]">✔</span>
                            <span className="text-sm text-(--color-secondary)">fourth list</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#c43131]">✔</span>
                            <span className="text-sm text-(--color-secondary)">fifth list</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#c43131]">✔</span>
                            <span className="text-sm text-(--color-secondary)">sixth list</span>
                        </li>
                    </ul>

                    <ul className="checklist mt-5 space-y-3">
                        <li className="flex items-start gap-3 text-sm text-(--color-secondary)">
                            <CheckCircle className="w-4 h-4 text-[#c43131] group-hover:scale-110 transition" />
                            First list
                        </li>
                        <li className="flex items-start gap-3 text-sm text-(--color-secondary)">
                            <CheckCircle className="w-4 h-4 text-[#c43131] group-hover:scale-110 transition" />
                            First list
                        </li>
                        <li className="flex items-start gap-3 text-sm text-(--color-secondary)">
                            <CheckCircle className="w-4 h-4 text-[#c43131] group-hover:scale-110 transition" />
                            First list
                        </li>
                        <li className="flex items-start gap-3 text-sm text-(--color-secondary)">
                            <CheckCircle className="w-4 h-4 text-[#c43131] group-hover:scale-110 transition" />
                            First list
                        </li>
                    </ul>

                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li className="text-sm text-(--color-secondary)">Introduction</li>
                        <li className="text-sm text-(--color-secondary)">Data collection</li>
                        <li className="text-sm text-(--color-secondary)">User rights</li>
                    </ol>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 mt-5 space-y-3">
                        <h3 className="text-2xl md:text-3xl  font-my-font-regular  text-(--color-secondary)">
                            Heading
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam corrupti ab nam, quidem mollitia enim ea consequatur inventore voluptates deserunt aliquam nulla dolorem doloribus iure hic. Corrupti sit ab obcaecati.
                        </p>
                        <h3 className="text-2xl md:text-3xl  font-my-font-regular  text-(--color-secondary)">
                            Heading
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam corrupti ab nam, quidem mollitia enim ea consequatur inventore voluptates deserunt aliquam nulla dolorem doloribus iure hic. Corrupti sit ab obcaecati.
                        </p>
                    </div>


                </div>
            </section >
        </>
    );
}
