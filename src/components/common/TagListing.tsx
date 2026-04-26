import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
interface Tag {
  id?: number;
  title: string;
  slug: string;
  icon?:string;
}

interface Region {
  title: string;
  slug: string;
}

interface TagListingProps {
  tags?: Tag[];
  countries?: Tag[];
  region?: Region | null;
  textCenter?: Boolean;
  textColor?: Boolean;
  tagIcon?: Boolean;
  initialShowCount?: number;
}

export default function TagListing({
  tags = [],
  countries = [],
  region,
  textCenter = true,
  textColor = false, //false default for secondary 1 for primary
  tagIcon = false,
  initialShowCount = 2,
}: TagListingProps) {

  const [open, setOpen] = useState(false);

  const items = [
    ...tags.map((t) => ({ ...t, type: "tag" })),
    ...countries.map((c) => ({ ...c, type: "country" })),
    ...(region ? [{ ...region, type: "region" }] : []),
  ];

  if (items.length === 0) return null;

  const visibleItems = items.slice(0, initialShowCount);
  const hiddenItems = items.slice(initialShowCount);

  return (
    <ul className={`flex flex-wrap items-center ${textCenter ? "justify-center text-sm" : "mt-1 md:mt-3  gap-2 text-sm sm:text-base"}     `}>

      {/* visible tags */}
      {visibleItems.map((item, index) => (
        <li
          key={`${item.type}-${item.slug}`}
          className={`relative flex items-center ${textColor ? "text-(--color-primary)" : "text-(--color-secondary)"}`}
        >
          {(tagIcon && item.icon) && (<Image
            width={8}
            height={8}
             src={item.icon}
            //src="/images/bed.png"
            alt="icon"
            className="w-8 h-8 pr-2 object-contain"
          />)}


          <Link href={`/${item.slug}`}>
            {item.title}
          </Link>

          {index !== visibleItems.length - 1 && !tagIcon && (
            <span className="px-1">|</span>
            // ⬥
          )}
        </li>
      ))}


      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* +more tooltip */}
      {hiddenItems.length > 0 && (
        <>
          <span className="px-1">|</span>
          <li className="relative group/tags cursor-pointer" onClick={() => setOpen(!open)}>
            <span className={` ${textColor ? "text-(--color-primary)" : "text-(--color-secondary)"}`}> +{hiddenItems.length} more</span>


            {/* tooltip */}
            <div
              className={` z-50 bg-white shadow-lg border rounded-md p-3 
  min-w-[200px] max-w-[90vw] w-max 
  ${open ? "block" : "hidden"}
  
   /* MOBILE: bottom centered popup */
    fixed bottom-4 left-1/2 -translate-x-1/2
    
    /* DESKTOP: normal tooltip */
    md:absolute md:bottom-auto md:left-auto md:right-0 md:translate-x-0
  
  md:group-hover/tags:block`}
            >
              {hiddenItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="block px-2 py-1 hover:bg-gray-100 rounded text-(--color-secondary)"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </li>
        </>
      )}
    </ul>
  );
}