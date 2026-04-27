"use client";

import { useEffect, useState, useRef } from "react";
import { BlogCategory } from "@/types/blogs";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function BlogTabs({categories, setCatId}:{categories:BlogCategory[]; setCatId?:(id:number|string)=>void}) {


    const pathname = usePathname();
    // ✅ Sticky Tabs
    const tabsRef = useRef<HTMLDivElement | null>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [tabsOffset, setTabsOffset] = useState(0);

    // ✅ Get original position ONCE
    useEffect(() => {
        if (tabsRef.current) {
            setTabsOffset(tabsRef.current.offsetTop);
        }
    }, []);

    useEffect(() => {
  if (pathname === "/blogs") {
    setCatId?.('');
    return;
  }

  const activeCat = categories.find(
    cat => `/${cat.slug}` === pathname
  );

  if (activeCat) {
    //alert(activeCat.id)
    setCatId?.(activeCat.id);
  }
}, [pathname, categories, setCatId]);

    // ✅ Scroll logic
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= tabsOffset) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [tabsOffset]);



    return (

        <div className="max-w-[1300px] mx-auto px-5 ">
            {/* ✅ Spacer to prevent jump */}
            {isSticky && <div className="h-[70px]" />}

            {/* ✅ Tabs */}
            <div
                ref={tabsRef}
                className={`
            flex items-center gap-6 px-2
        
            overflow-x-auto whitespace-nowrap no-scrollbar scroll-smooth
            [@media(min-width:576px)]:overflow-visible
            [@media(min-width:576px)]:flex-wrap
            [@media(min-width:576px)]:justify-center
        
            md:gap-28
        
            bg-white z-45 transition-all duration-300
        
            ${isSticky
                        ? "fixed top-0 left-0 right-0 border-b border-gray-200 py-2"
                        : "relative"}
          `}
            >

                 <a
                    href={`/blogs`}
                    className={`font-my-font-semibold text-(--color-secondary) text-base cursor-pointer pb-1 border-b-2 ${(pathname === '/blogs') ? 'border-[#c43131]' : 'border-transparent'} hover:border-red-300`} >
               All
               </a>         

                {categories?.map(cat => (

                     <a
                     key={cat.id || cat.slug}
                    href={`/${cat.slug}`}
                    className={`font-my-font-semibold text-(--color-secondary) text-base cursor-pointer pb-1 border-b-2 ${(pathname === '/'+cat.slug) ? 'border-[#c43131]' : 'border-transparent'} hover:border-red-300`}
                >
                    {cat.title}
                </a>

                    
                ))}

               
                
            </div>
        </div>
    )
} 