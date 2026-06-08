import { CountryResponse } from "@/types/countryType";

import Image from "next/image";
import Link from "next/link";

interface Props {
  country: CountryResponse;
}

export default function DestinationCardForRegion({ country }: Props) {
  return (
    <Link
      href={`/country/${country.short_slug}`}
      className="bg-white rounded-xl overflow-hidden transition-all duration-300 my-4 md:my-4 shadow-xl hover:shadow-2xl group border border-gray-200"
    >
      <div className="w-full aspect-3/3 md:aspect-[5/7] overflow-hidden relative">
        <Image
          src={country.image_path}
          alt={country.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          width="650"
          height="650"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black/45 px-3 py-2 md:px-4 md:py-3 text-center">
          <h3 className="text-sm md:text-base font-my-font-regular text-white line-clamp-1">
            {country.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
