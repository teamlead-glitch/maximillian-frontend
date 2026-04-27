import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface Tag {
  id?: number;
  title: string;
  slug: string;
  icon?: string;
}

interface TagListingProps {
  tags?: Tag[];
  initialShowCount?: number;
}

export default function TagListingWithIcon({
  tags = [],
  initialShowCount = 3,
}: TagListingProps) {
  const [open, setOpen] = useState(false);

  if (!tags.length) return null;

  const visibleItems = tags.slice(0, initialShowCount);
  const hiddenItems = tags.slice(initialShowCount);

  return (
    <ul className="flex flex-wrap items-center justify-center text-sm gap-2 md:gap-10">
      
      {visibleItems.map((item) => (
        <li
          key={item.slug}
          className="relative flex items-center text-(--color-primary) pr-2.5"
        >
          <Image
            width={8}
            height={8}
            src={item.icon || "/images/bed.png"}
            alt="icon"
            className="w-8 h-8 pr-2 object-contain"
          />

          <Link href={`/${item.slug}`}>
            {item.title}
          </Link>
        </li>
      ))}

      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {hiddenItems.length > 0 && (
        <li
          className="relative group/tags cursor-pointer text-(--color-primary)"
          onClick={() => setOpen(!open)}
        >
          +{hiddenItems.length} more

          <div
            className={`z-50 bg-white shadow-lg border rounded-md p-3
            min-w-[220px] max-w-[90vw] w-max
            ${open ? "block" : "hidden"}
            fixed bottom-4 left-1/2 -translate-x-1/2
            md:absolute md:bottom-auto md:left-auto md:right-0 md:translate-x-0
            md:group-hover/tags:block`}
          >
            {hiddenItems.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="flex items-center px-2 py-2 hover:bg-gray-100 rounded text-(--color-primary)"
              >
                <Image
                  width={8}
                  height={8}
                  src={item.icon || "/images/bed.png"}
                  alt="icon"
                  className="w-8 h-8 pr-2 object-contain"
                />
                {item.title}
              </Link>
            ))}
          </div>
        </li>
      )}
    </ul>
  );
}