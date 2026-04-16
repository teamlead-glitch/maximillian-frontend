import { useState } from "react";

interface SimpleTagListProps {
  items: string[];
}

export default function SimpleTagList({ items = [] }: SimpleTagListProps) {
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  const visibleItems = items.slice(0, 2);
  const hiddenItems = items.slice(2);

  return (
    <ul className="flex flex-wrap items-center text-sm gap-2 font-bold">

      {/* visible items */}
      {visibleItems.map((item, index) => (
        <>
        <li
          key={index}
          className={`relative text-sm sm:text-base  font-bold  text-(--color-secondary)
          ${index !== visibleItems.length - 1
                                                    ? " after:text-base after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)"
                                                    : ""
                                                }`}
        >
          {item.trim()}
        </li>
          {index !== visibleItems.length - 1?
        <span className=" text-(--color-secondary) font-bold  ">|</span>:
        ""}
        </>
      ))}


      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}



      {/* +more */}
      {hiddenItems.length > 0 && (
        <>
        <span className=" text-(--color-secondary) font-bold  ">|</span>
        <li
          className="relative group/tags cursor-pointer font-bold text-(--color-secondary)"
          onClick={() => setOpen(!open)}
        >
          +{hiddenItems.length} more

          {/* tooltip */}
          <div
            className={`
    z-50 bg-white shadow-lg border rounded-md p-3
    
    min-w-[200px] max-w-[90vw] w-max
    
    ${open ? "block" : "hidden"}
    
    /* MOBILE: bottom centered popup */
    fixed bottom-4 left-1/2 -translate-x-1/2
    
    /* DESKTOP: normal tooltip */
    md:absolute md:bottom-auto md:left-auto md:right-0 md:translate-x-0
    
    md:group-hover/tags:block
  `}
          >
            {hiddenItems.map((item, index) => (
              <div
                key={index}
                className="block px-2 py-1 hover:bg-gray-100 rounded"
              >
                {item.trim()}
              </div>
            ))}
          </div>
        </li>
        </>
      )}
    </ul>
  );
}