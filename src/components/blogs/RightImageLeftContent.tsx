"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RightLeftContent({ description, image }: { description: string; image: string }) {


    return (
        <section className="bg-white ">
            <div className="w-full flex flex-col-reverse md:block">

                {image && <div className="float-none md:float-right w-full max-w-[300px] aspect-square mx-auto md:mx-0 md:ml-20 mt-1 md:mt-0 mb-12 md:mb-10 relative">
                    <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover rounded-lg"
                    />


                </div>}

                <div className="space-y-4 text-justify">
                    <div
                        className="content" dangerouslySetInnerHTML={{ __html: description }}>

                    </div>


                </div>

            </div>
        </section>
    );
}
