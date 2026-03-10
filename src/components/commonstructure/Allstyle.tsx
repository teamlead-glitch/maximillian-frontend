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


                        <div className="quote-box">
                            <div className="quote-icon">“</div>

                            <p className="quote-text">A Road Journey to KutaisiLeaving Tbilisi, the journey westward opens into a quieter, more pastoral Georgia. Golden wheat fields ripple under sunlight, villages pass unhurriedly, and distant mountain ridges appear crowned with snow.<br />The road leads to Kutaisi, once Georgia’s ancient capital. Compared to Tbilisi, Kutaisi feels slower and more intimate. Life unfolds gently here—tree-lined streets, family homes with fruit gardens, modest cafés, and evenings that linger under soft twilight.<br />Historic landmarks such as the Bagrati Cathedral rise above the city, offering panoramic views and a powerful sense of continuity between Georgia’s past and present.</p>

                            <div className="quote-icon">”</div>
                        </div>

                        <div className="box">
                            <h3>
                                Heading1
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
