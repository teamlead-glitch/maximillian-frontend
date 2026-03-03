import { Region } from "@/types/commonTypes";

export interface RegionFormated {
  countries: string[];
  image: string;
  slug:string
}

export function transformRegions(
  apiData: Region[]
): Record<string, RegionFormated> {
  const result: Record<string, RegionFormated> = {};

  apiData.forEach((region) => {
    result[region.title] = {
      countries: region.countries.map((country) => country.title),
      image: region.image, 
      slug:region.slug
    };
  });

  return result;
}
