import Link from "next/link";
import { useState } from "react";

interface Tag {
  id?: number;
  title: string;
  slug: string;
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
}

export default function TagListing({
  tags = [],
  countries = [],
  region,
  textCenter = true,
}: TagListingProps) {

  const [open, setOpen] = useState(false);

  const items = [
    ...tags.map((t) => ({ ...t, type: "tag" })),
    ...countries.map((c) => ({ ...c, type: "country" })),
    ...(region ? [{ ...region, type: "region" }] : []),
  ];

  if (items.length === 0) return null;

  const visibleItems = items.slice(0, 2);
  const hiddenItems = items.slice(2);

  return (
    <ul className={`flex flex-wrap items-center ${textCenter ? "justify-center text-sm" : "mt-1 md:mt-3 font-my-font-semibold gap-2 text-sm sm:text-base"}     `}>

      {/* visible tags */}
      {visibleItems.map((item, index) => (
        <li
          key={`${item.type}-${item.slug}`}
          className="relative text-(--color-secondary)"
        >
          <Link href={`/${item.slug}`}>
            {item.title}
          </Link>

          {index !== visibleItems.length - 1 && (
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
          <li className="relative group/tags cursor-pointer text-(--color-secondary)" onClick={() => setOpen(!open)}>
            +{hiddenItems.length} more

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
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
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