"use client";

import { useEffect, useState } from "react";
import LogoCarousel from "@/components/home/LogoCarousel";
import Image from "next/image";
import { BlogDetailType } from "@/types/blogTypes";
import { formatShortDate } from "@/utils/formatDate";
import Link from "next/link";
export default function Blogdetails({ details }: { details: BlogDetailType }) {
    const [shareUrl, setShareUrl] = useState("");

    // Get current page URL safely
    useEffect(() => {
        if (typeof window !== "undefined") {
            setShareUrl(window.location.href);
        }
    }, []);



    const title = details?.title ?? "";
    const banner_image = details?.banner_image ?? "";
    const mobile_banner_image = details?.banner_mob_image ?? "";
    const description = details?.description ?? "";
    const second_descrption = details?.second_description ?? "";
    const image = details?.image ?? "";
    const third_descripton = details?.third_description ?? "";
    const estimated_time = details?.estimated_time ?? "";

    const published_date = details?.created_at
        ? formatShortDate(details.created_at)
        : "";

    const region = details?.region?.title ?? "";

    const category = details?.category?.title ?? "";

    const tagItems = details?.tags || [];

    const countries = details?.countries || [];
    const region_slug = details?.region?.short_slug



    const shareLinks = [
        {
            icon: "/images/facebook.svg",
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            name: "Facebook",
        },
        // {
        //     icon: "images/twitter-x.svg",
        //     url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
        //     name: "Twitter",
        // },
        {
            icon: "/images/linkedin-2.svg",
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
                            {category && (
                                <li className={`relative text-(--color-secondary) ${(region.length > 0 || countries.length > 0) ? "relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)" : ""}`}>
                                    {category}
                                </li>
                            )}

                            {region && (
                                <li>
                                    <Link href={`/region/${region_slug}`} className={`relative text-(--color-secondary) hover:underline ${(countries.length > 0) ? "relative pr-5 text-(--color-secondary) after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)" : ""}`}>
                                        {region}
                                    </Link>
                                </li>
                            )}
                            {countries?.length > 0 &&
                                countries.map((country, index) => {
                                    const isLastCountry = index === countries.length - 1;

                                    return (
                                        <li
                                            key={country.id}
                                            className={`relative pr-5 text-(--color-secondary) ${!estimated_time && isLastCountry
                                                ? ""
                                                : "after:content-['⬥'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)"
                                                }`}
                                        >
                                            <Link href={`/country/${country.short_slug}`} className="hover:underline">
                                                {country.title}
                                            </Link>
                                        </li>
                                    );
                                })}

                            {estimated_time && (
                                <li className="relative text-(--color-secondary)">
                                    {estimated_time} Min read
                                </li>
                            )}
                        </ul>

                    </div>
                </div >
                <div className="py-3 md:py-6 aspect-[4/2.5] md:aspect-[4/1.5] relative">

                    {/* MOBILE IMAGE */}
                    {mobile_banner_image && (
                        <Image
                            src={mobile_banner_image}
                            alt={title}
                            fill
                            className="object-cover w-full h-full md:hidden"
                        />
                    )}

                    {/* DESKTOP IMAGE */}
                    {banner_image && (
                        <Image
                            src={banner_image}
                            alt={title}
                            fill
                            className="object-cover w-full h-full hidden md:block"
                        />
                    )}

                </div>
            </section >

            <section className="relative py-5 overflow-hidden bg-white">
                <div className="max-w-[1200px]  mx-auto  px-5 md:px-10">
                    <div className="w-full">
                        <p className="content" dangerouslySetInnerHTML={{ __html: description }}>

                        </p>
                    </div>
                    <div className="w-full justify-center  grid grid-cols-1 sm:grid-cols-[7fr_3fr] gap-3 py-10 items-start">
                        <p className="content" dangerouslySetInnerHTML={{ __html: second_descrption }}>

                        </p>
                        <div className="relative w-full max-w-[323px] h-[323px]">
                            {image && (
                                <Image src={image} alt="" fill className="rounded-lg object-cover" />
                            )}
                        </div>
                    </div>

                    <p className="content" dangerouslySetInnerHTML={{ __html: third_descripton }}>

                    </p>
                    <div className="w-full py-15 justify-between grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-3 border-t border-[#bfbdbd] pt-15 ">
                        {details?.author ? (

                            /* ✅ FULL AUTHOR BLOCK */
                            <div className="flex gap-3 pr-0 md:pr-20 xl:pr-30 relative">

                                <Image
                                    src={details.author.image_path}
                                    width={50}
                                    height={50}
                                    alt="author"
                                    className="object-cover rounded-full w-15 h-15"
                                />

                                <div className="grid gap-2 pl-4">
                                    <h5 className="text-break text-sm text-(--color-secondary)">
                                        Written by
                                    </h5>

                                    <h4 className="font-my-font-semibold text-break text-xl text-(--color-secondary)">
                                        {details.author.name}
                                    </h4>

                                    <p>{details.author.tagline}</p>
                                    {(details.author.linkedin || details.author.instagram) && (
                                        <div className="flex gap-2 relative">
                                            {details.author.linkedin && (
                                                <a href={details.author.linkedin} target="_blank">
                                                    <Image src="/images/linkedin.svg" width={20} height={20} alt="" />
                                                </a>
                                            )}

                                            {details.author.instagram && (
                                                <a href={details.author.instagram} target="_blank">
                                                    <Image src="/images/instagram.svg" width={20} height={20} alt="" />
                                                </a>
                                            )}
                                        </div>
                                    )}

                                    <p dangerouslySetInnerHTML={{ __html: details.author.description }} />
                                </div>

                            </div>

                        ) : (

                            /* ✅ ONLY ADMIN TEXT */
                            <div className="text-sm text-(--color-secondary)">
                                Written by Admin
                            </div>

                        )}
                        <div className="flex flex-col gap-2 items-start md:items-end  justify-between mt-5 md:mt-0">
                            <div className="w-full flex flex-col items-center md:items-end">
                                <ul className="flex items-center gap-2 pb-3 md:pb-0">

                                    {tagItems.map((tag, i) => (
                                        <li
                                            key={tag.id}
                                            className="flex items-center text-sm text-(--color-secondary)"
                                        >
                                            <Link href={`/tag/${tag.short_slug}`} className="hover:underline">
                                                {tag.title}
                                            </Link>

                                            {i < tagItems.length - 1 && (
                                                <span className="mx-2 shrink-0">/</span>
                                            )}
                                        </li>
                                    ))}

                                </ul>
                                <p><span className="text-sm">{published_date}</span></p></div>
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