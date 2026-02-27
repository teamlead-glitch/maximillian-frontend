"use client";


import { CheckCircle, ChevronRight } from "lucide-react";
import Link from "next/link";



export default function Allstyle() {
    return (
        <>
            <section className="relative pt-32  xl:pt-40  pb-20 overflow-hidden bg-white ">
                <div className="max-w-[1300px] flex mx-auto  px-5">
                    <div className="flex flex-col w-full justify-center">
                        <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-(--color-secondary) text-center ">Common Structure</h1>

                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="relative py-20 bg-white ">
                <div className="max-w-[1300px] mx-auto px-5 space-y-3">

                    <div className="content">


                        <h1>Heading</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
                            et ipsum. Atque amet, aspernatur illo corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, maiores omnis. Labore, rerum dolores eius quibusdam laudantium, architecto sapiente voluptate voluptatem porro, ipsa excepturi sint? Numquam, magni. Ex, voluptates fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, id fugiat libero, sit repellat, debitis repellendus necessitatibus mollitia doloribus soluta quaerat nostrum quisquam? Iure, temporibus impedit minus fugit consequatur officiis!
                        </p>

                        <h2>Heading Two</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
                            et ipsum. Atque amet, aspernatur illo corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, maiores omnis. Labore, rerum dolores eius quibusdam laudantium, architecto sapiente voluptate voluptatem porro, ipsa excepturi sint? Numquam, magni. Ex, voluptates fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, id fugiat libero, sit repellat, debitis repellendus necessitatibus mollitia doloribus soluta quaerat nostrum quisquam? Iure, temporibus impedit minus fugit consequatur officiis!
                        </p>

                        <h3>Heading Three</h3>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
                            et ipsum. Atque amet, aspernatur illo corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, maiores omnis. Labore, rerum dolores eius quibusdam laudantium, architecto sapiente voluptate voluptatem porro, ipsa excepturi sint? Numquam, magni. Ex, voluptates fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, id fugiat libero, sit repellat, debitis repellendus necessitatibus mollitia doloribus soluta quaerat nostrum quisquam? Iure, temporibus impedit minus fugit consequatur officiis!
                        </p>

                        <h4>Heading Four</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
                            et ipsum. Atque amet, aspernatur illo corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, maiores omnis. Labore, rerum dolores eius quibusdam laudantium, architecto sapiente voluptate voluptatem porro, ipsa excepturi sint? Numquam, magni. Ex, voluptates fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, id fugiat libero, sit repellat, debitis repellendus necessitatibus mollitia doloribus soluta quaerat nostrum quisquam? Iure, temporibus impedit minus fugit consequatur officiis!
                        </p>

                        <h5>Heading Five</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
                            et ipsum. Atque amet, aspernatur illo corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, maiores omnis. Labore, rerum dolores eius quibusdam laudantium, architecto sapiente voluptate voluptatem porro, ipsa excepturi sint? Numquam, magni. Ex, voluptates fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, id fugiat libero, sit repellat, debitis repellendus necessitatibus mollitia doloribus soluta quaerat nostrum quisquam? Iure, temporibus impedit minus fugit consequatur officiis!
                        </p>

                        <ul className="checklist">
                            <li>First list</li>
                            <li>Second list</li>
                            <li>Third list</li>
                        </ul>


                        <ul className="dotlist">
                            <li>First list</li>
                            <li>Second list</li>
                            <li>Third list</li>
                        </ul>

                        <ul className="arrowlist">
                            <li>First list</li>
                            <li>Second list</li>
                            <li>Third list</li>
                        </ul>

                        <ol>
                            <li>First list</li>
                            <li>Second list</li>
                            <li>Third list</li>
                        </ol>

                        <div className="box">
                            <h3>
                                Heading
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam corrupti ab nam, quidem mollitia enim ea consequatur inventore voluptates deserunt aliquam nulla dolorem doloribus iure hic. Corrupti sit ab obcaecati.
                            </p>
                            <h3>
                                Heading
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam corrupti ab nam, quidem mollitia enim ea consequatur inventore voluptates deserunt aliquam nulla dolorem doloribus iure hic. Corrupti sit ab obcaecati.
                            </p>
                        </div>


                    </div>
                    {/* Headings */}



                </div>
            </section >


        </>
    );
}
