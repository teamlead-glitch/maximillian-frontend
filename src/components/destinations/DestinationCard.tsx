import { CountryResponse } from "../../types/countryType";

import Image from "next/image";
import Link from "next/link";

interface Props {
  destination: CountryResponse;
}

export default function DestinationCard({ destination }: Props) {
  return (
    <Link href={`/country/${destination.short_slug}`} className="bg-white rounded-xl overflow-hidden transition-all duration-300 my-4 md:my-4 shadow-xl hover:shadow-2xl group border border-gray-200">
      {/* Image */}
      <div className="w-full aspect-3/3 overflow-hidden relative">
        <Image
          src={destination.image_path}
          alt={destination.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          width="650"
          height="650"
        />
        {/* 📱 Mobile only text over image */}
        <div className="absolute inset-x-0 bottom-0 md:hidden">
          <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent  px-3 py-3">
            <p
              className="text-white text-sm leading-snug overflow-hidden pb-0 mb-0"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                maxHeight: "2.8em",
              }}
            >
              {destination.short_description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-2 md:py-5 px-6 text-center relative h-full flex flex-col md:min-h-[120px]">
        {/* <div
          className="absolute -top-[40px] right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-lg transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer">
          <Image
            src="/images/arrow.svg"
            className="w-5 h-5 transition-all duration-300group-hover:rotate-45 "
            alt=""
            width="100"
            height="100"
          />
        </div> */}

        <h3 className="text-base md:text-lg font-semibold mt-1 font-my-font-regular text-(--color-secondary) line-clamp-1">
          {destination.title}
        </h3>

        <div className="hidden md:block">
          <p
            className="text-base text-gray-600 mt-2 leading-snug overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              maxHeight: "2.8em",
            }}
          >
            {destination.short_description}
          </p>
        </div>
      </div>
    </Link>
  );
}
