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
}

export default function TagListing({
  tags = [],
  countries = [],
  region,
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
    <ul className="flex flex-wrap items-center text-sm gap-2 mt-3">

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
            <span className="px-1">⬥</span>
          )}
        </li>
      ))}

      {/* +more tooltip */}
      {hiddenItems.length > 0 && (
        <li className="relative group/tags cursor-pointer text-(--color-secondary)" onClick={() => setOpen(!open)}>
          +{hiddenItems.length} more

          {/* tooltip */}
          <div className={`absolute left-0   bg-white shadow-lg border 
            rounded-md p-2 z-20 min-w-[200px]  ${open ? "block" : "hidden"} md:group-hover/tags:block`}>
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
      )}
    </ul>
  );
}