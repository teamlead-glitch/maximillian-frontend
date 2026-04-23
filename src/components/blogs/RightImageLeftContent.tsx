"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Quotes() {


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
                        className="content">
                        <h2>Left Content Right Image </h2>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque unde maxime, sint vero ducimus illo inventore rem quisquam qui eos voluptas amet nesciunt nam odit, ad velit laborum consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit, quae, illum neque nihil unde corporis iure aut eum culpa hic perspiciatis ratione nam accusamus. Eveniet optio assumenda impedit tempore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident voluptatibus suscipit, ullam delectus praesentium, porro numquam ad voluptate maxime voluptatem architecto qui esse veniam! Omnis, ab impedit? Tempore, impedit incidunt.  Architecto impedit, quae, illum neque nihil unde corporis iure aut eum culpa hic perspiciatis ratione nam accusamus. Eveniet optio assumenda impedit tempore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident voluptatibus suscipit, ullam delectus praesentium, porro numquam ad voluptate maxime voluptatem architecto qui esse veniam! Omnis, ab impedit? Tempore, impedit incidunt. Architecto impedit, quae, illum neque nihil unde corporis iure aut eum culpa hic perspiciatis ratione nam accusamus. Eveniet optio assumenda impedit tempore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident voluptatibus suscipit, ullam delectus praesentium, porro numquam ad voluptate maxime voluptatem architecto qui esse veniam! Omnis, ab impedit? Tempore, impedit incidunt. </div>


                </div>

            </div>
        </section>
    );
}