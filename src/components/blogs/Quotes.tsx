"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Quotes() {


    return (
        <section className="bg-white py-10  md:py-15 ">
            <div className="max-w-[800px] mx-auto w-full relative  ">

                <div className="w-full flex flex-col items-center">

                    <div className="py-5">
                        <Image
                            src="/images/quote-top.png"
                            alt="quote-top"
                            width={18}
                            height={14}

                        />




                    </div>
                    <p className="text-center font-italic italic  text-lg md:text-xl text-(--color-secondary)">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo vulputate, dictum ante sit amet, tincidunt dui. Etiam vel ex a orci tempus tristique sit amet.</p>
                    <div className="py-5">
                        <Image
                            src="/images/quote-bottom.png"
                            alt="quote-bottom"
                            width={18}
                            height={14}

                        />






                    </div>
                </div>  </div>
        </section>
    );
}