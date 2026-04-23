"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RightLeftContent({description}:{description:string}) {


    return (
        <section className="bg-white py-10 ">
            <div className="w-full">

                <div className="float-none md:float-right w-[300px] h-[300px] md:ml-20 mb-10 relative">
                    <Image
                        src="/images/signature-journey-1.jpg"
                        alt=""
                        fill
                        className="object-cover rounded-lg"
                    />


                </div>

                <div className="space-y-4 text-justify">
                    <div
                        className="content" dangerouslySetInnerHTML={{ __html: description }}>

                        </div>


                </div>

            </div>
        </section>
    );
}