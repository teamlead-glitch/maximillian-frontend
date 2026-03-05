import { CountryResponse } from "../../types/countryType";

import Image from "next/image";
import Link from "next/link";

interface Props {
  destination: CountryResponse;
}

export default function DestinationCard({ destination }: Props) {
  return (
    <Link href={`/country/${destination.short_slug}`} className="bg-white rounded-xl overflow-hidden transition-all duration-300 my-4 md:my-4 hover:shadow-2xl group">
      {/* Image */}
      <div className="w-full aspect-3/3 overflow-hidden">
        <Image
          src={destination.image_path}
          alt={destination.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          width="650"
          height="650"
        />
      </div>

      {/* Content */}
      <div className="py-5 px-6 text-center relative h-full flex flex-col min-h-[120px]">
        <div
          className="absolute -top-[40px] right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-lg transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer">
          <Image
            src="/images/arrow.svg"
            className="w-5 h-5 transition-all duration-300group-hover:rotate-45 "
            alt=""
            width="100"
            height="100"
          />
        </div>

        <h3 className="text-lg font-semibold mt-1 font-my-font-regular text-(--color-secondary) line-clamp-1">
          {destination.title}
        </h3>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {destination.short_description}
        </p>
      </div>
    </Link>
  );
}
