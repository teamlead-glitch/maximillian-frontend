"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function LeftRightContent({description, image}:{description:string;image:string}) {


    return (
        <section className="bg-white py-10   ">
            <div className="w-full">

                {image &&<div className="float-none md:float-left w-[300px] h-[300px] md:mr-20 mb-10 relative">
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