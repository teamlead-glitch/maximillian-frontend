import { Region } from "@/types/commonTypes";

export interface RegionFormated {
  countries: CountryFormatted[];
  image: string;
  slug:string
}

export interface CountryFormatted {
  title: string;
  slug: string;
}


export function transformRegions(
  apiData: Region[]
): Record<string, RegionFormated> {
  const result: Record<string, RegionFormated> = {};

  apiData.forEach((region) => {
    result[region.title] = {
       countries:
          region.countries?.map(({ title, slug }) => ({
            title,
            slug,
          })) ?? [],
      image: region.image, 
      slug:region.slug
    };
  });

  return result;
}
