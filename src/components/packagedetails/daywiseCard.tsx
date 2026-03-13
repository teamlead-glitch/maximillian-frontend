import { Itinerary } from "@/types/PackageDetailsType";
import Image from "next/image";
import React from "react";

interface DaywiseCardProps {
  day: Itinerary;
}

function DaywiseCard({ day }: DaywiseCardProps) {
  const days = day?.day ?? "";
  const title = day?.title ?? "";
  const description = day?.description ?? "";
  const inclusions = day?.inclusions || [];
  const hasImage = Boolean(day?.image);

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between items-center">

        {/* Content Section */}
        <div
          className={`w-full ${hasImage ? "md:w-3/5 pr-4" : "md:w-full"
            } mb-4 md:mb-0 flex flex-col gap-4`}
        >
          <h5 className="text-(--color-secondary) text-small">
            Day {days}
          </h5>

          <h3 className="font-my-font-semibold xl:text-2xl text-xl text-(--color-secondary) pb-2">
            {title}
          </h3>

          {/* Description */}
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* Inclusions */}
          {inclusions.length > 0 && (
            <ul className="w-full flex flex-wrap gap-4">
              {inclusions.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-(--color-secondary) text-sm md:text-base">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Image Section */}
        {hasImage && (
          <div className="w-full md:w-2/5">
            <div className="aspect-4/3 relative">
              <Image
                src={day.image as string}
                alt={title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="py-15 md:py-20 w-full">
        <hr className="border-black/20" />
      </div>
    </>
  );
}

export default DaywiseCard;