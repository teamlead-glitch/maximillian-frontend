"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";

interface Tag {
  id?: number;
  title: string;
  short_slug: string;
}

interface Region {
  title: string;
  short_slug: string;
}

interface TagListingProps {
  tags?: Tag[];
  region?: Region | null;
}

export default function TagListingForSignature({
  tags = [],
  region,
}: TagListingProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const triggerRef = useRef<HTMLLIElement | null>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
  const closeTooltip = () => setShowTooltip(false);

  window.addEventListener("scroll", closeTooltip, true);

  return () => {
    window.removeEventListener("scroll", closeTooltip, true);
  };
}, []);

  const items = [
    ...(region ? [{ ...region, type: "region" }] : []),
    ...tags.map((t) => ({ ...t, type: "tag" })),
  ];

  if (items.length === 0) return null;

  const visibleItems = items.slice(0, 2);
  const hiddenItems = items.slice(2);

  const show = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);

    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.bottom + 8,
    });

    setShowTooltip(true);
  };

  const hide = () => {
    hideTimeout.current = setTimeout(() => {
      setShowTooltip(false);
    }, 120);
  };

  return (
    <>
      <div className="text-white text-xs">
        <ul className="flex flex-wrap justify-center items-center gap-2 mt-1">
          {visibleItems.map((item, index) => {
            const href =
              item.type === "region"
                ? `/region/${item.short_slug}`
                : `/tag/${item.short_slug}`;

            return (
              <li
                key={`${item.type}-${item.short_slug}`}
                className={
                  index !== visibleItems.length - 1 || hiddenItems.length > 0
                    ? "relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white"
                    : "relative"
                }
              >
                <Link href={href}>{item.title}</Link>
              </li>
            );
          })}

          {hiddenItems.length > 0 && (
            <li
              ref={triggerRef}
              className="cursor-pointer"
              onMouseEnter={show}
              onMouseLeave={hide}
            >
              +{hiddenItems.length} more
            </li>
          )}
        </ul>
      </div>

      {showTooltip &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: position.y,
              left: position.x,
              transform: "translateX(-50%)",
            }}
            className="bg-gray-900 text-white shadow-xl rounded-md p-2 z-[9999] min-w-[160px]"
            onMouseEnter={show}
            onMouseLeave={hide}
          >
            {hiddenItems.map((item) => {
              const href =
                item.type === "region"
                  ? `/region/${item.short_slug}`
                  : `/tag/${item.short_slug}`;

              return (
                <Link
                  key={item.short_slug}
                  href={href}
                  className="block px-2 py-1 hover:bg-gray-700 rounded text-sm"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>,
          document.body
        )}
    </>
  );
}