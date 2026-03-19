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
    <ul className="flex flex-wrap items-center justify-center text-sm sm:text-base gap-2 mt-3 font-my-font-semibold">

      {/* visible items */}
      {visibleItems.map((item, index) => (
        <li
          key={index}
          className="relative text-(--color-secondary)"
        >
          {item.trim()}

          {index !== visibleItems.length - 1 && (
            <span className="px-1">⬥</span>
          )}
        </li>
      ))}

      {/* +more */}
      {hiddenItems.length > 0 && (
        <li
          className="relative group/tags cursor-pointer text-(--color-secondary)"
          onClick={() => setOpen(!open)}
        >
          +{hiddenItems.length} more

          {/* tooltip */}
          <div
            className={`absolute left-0 bg-white shadow-lg border 
            rounded-md p-2 z-20 min-w-[200px]
            ${open ? "block" : "hidden"} md:group-hover/tags:block`}
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
      )}
    </ul>
  );
}