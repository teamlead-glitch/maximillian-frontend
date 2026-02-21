"use client";

import { useEffect, useState } from "react";
import LogoCarousel from "@/components/home/LogoCarousel";
import Image from "next/image";
import { BlogDetailType } from "@/types/blogTypes";

export default function Blogdetails({details}:{details:BlogDetailType}) {
    const [shareUrl, setShareUrl] = useState("");

    // Get current page URL safely
    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);



    const title=details.title;
    const banner_image=details.banner_image;
    const description =details.description;
    const second_descrption=details.second_description;
    const image=details.image;
    const third_descripton=details.third_description
    const author_name=details.author.name
    const author_image=details.author.image
    const shareLinks = [
        {
            icon: "images/facebook.svg",
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            name: "Facebook",
        },
        // {
        //     icon: "images/twitter-x.svg",
        //     url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
        //     name: "Twitter",
        // },
        {
            icon: "images/linkedin-2.svg",
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`,
            name: "LinkedIn",
        },
        // {
        //     icon: "images/share.svg",
        //     url: `mailto:?subject=Check this out&body=${encodeURIComponent(shareUrl)}`,
        //     name: "WhatsApp",
        // },


        // ✅ EMAIL SHARE
        {
            icon: "/images/message.svg",
            url: `mailto:?subject=${encodeURIComponent(
                "Top ten destinations of Europe in 2026"
            )}&body=${encodeURIComponent(
                `Check out this article: ${shareUrl}`
            )}`,
            name: "Email",
        },
    ];



    return (
        <>
            <section className="relative pt-32  xl:pt-40 pb-5  md:pb-10 overflow-hidden bg-white ">
                <div className="max-w-[1300px] flex mx-auto  px-5  ">
                    <div className="w-full justify-center items-center">
                        <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-(--color-secondary) text-center ">
                            {title}
                        </h1>
                        <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1 py-4">
                            <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                Guides
                            </li>
                            <li className="relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)">
                                Europe
                            </li>
                            <li className="relative text-(--color-secondary) after: content-none">
                                4 Min read
                            </li>
                        </ul>

                    </div>
                </div >
                <div className=" py-3 md:py-6 aspect-[4/2.5] md:aspect-[4/1.5]">
                    <img src={banner_image} alt={title} className="object-cover w-full h-full" />
                </div>
            </section >

            <section className="relative py-5 overflow-hidden bg-white">
                <div className="max-w-[1200px]  mx-auto  px-5 md:px-10">
                    <div className="w-full">
                        <div dangerouslySetInnerHTML={{ __html: description }}>

               </div>
                    </div>
                    <div className="w-full justify-center grid grid-cols-1 sm:grid-cols-[7fr_3fr] gap-3 py-10">
                        <div dangerouslySetInnerHTML={{ __html: second_descrption }}>

               </div>
                        <div className="aspect-square">
                            <img src={image} alt="" className="rounded-lg object-cover w-full h-full" />
                        </div>
                    </div>
                    <div className="w-full mx-auto text-center px-5  md:px-15 py-2  md:py-15">
                        <div className="text-center text-4xl font-dm-serif text-(--color-secondary)">“</div>
                        <p className="italic text-lg sm:text-xl md:text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, saepe a porro nobis maxime incidunt quam dolore ducimus, iure repellendus molestiae! Fuga, rem. Unde, laborum delectus voluptate laudantium repellat quod? Lorem ipsum dolor.</p>
                        <div className="text-center text-4xl font-dm-serif text-(--color-secondary)">”</div>

                    </div>
                    <div dangerouslySetInnerHTML={{ __html: third_descripton }}>

               </div>
                    <div className="w-full py-15 justify-between grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-3 border-t border-[#bfbdbd] pt-15 ">
                        <div className="flex  gap-3 pr-0 md:pr-20 xl:pr-30">
                            <img src={author_image} alt="author" className="object-cover rounded-full w-15 h-15" />
                            <div className="grid gap-2 pl-4">
                                <h5 className=" text-break text-sm text-(--color-secondary)">Written by</h5>
                                <h4 className="font-my-font-semibold text-break text-xl text-(--color-secondary)">{author_name}</h4>
                                <p>Subtitle / Sub heading</p>
                                <div className="flex gap-2">
                                    <a href=""><img src="/images/linkedin.svg" alt="" /></a>
                                    <a href=""><img src="/images/instagram.svg" alt="" /></a>
                                </div>
                                <p>Quisque pulvinar metus quis dui gravida interdum. Cras luctus orci pharetra maximus interdum. Sed tincidunt at urna at tempor. Maecenas accumsan eu metus sed vehicula. Donec aliquet sit amet nisi.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start md:items-end  justify-between mt-5 md:mt-0">
                            <div className="w-full flex flex-col items-center md:items-end">
                                <ul className="flex gap-2 pb-3 md:pb-0">
                                    {["Category", "Context", "Experience"].map((item, i) => (
                                        <li key={i} className="flex items-center text-sm text-(--color-secondary)">
                                            {item}
                                            {i < 2 && <span className="mx-2">/</span>}
                                        </li>
                                    ))}
                                </ul>
                                <p><span className="text-sm">01 Jan 2024</span></p></div>
                            <div className="w-full flex items-center md:items-end">
                                <div className=" w-full flex justify-center md:justify-end  gap-4 mt-5 md:mt-0">
                                    {shareLinks.map((link, index) => (
                                        <a
                                            key={index} href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.name}
                                            className="hover:scale-110 transition"
                                        >
                                            <Image
                                                src={link.icon}
                                                alt={link.name}
                                                width={24}
                                                height={24}
                                            />
                                        </a>
                                    ))}
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