interface ApiCountry {
  id: number;
  title: string;
  slug: string;
}

interface ApiRegion {
  id: number;
  title: string;
  slug: string;
  countries: ApiCountry[];
}

interface RegionObject {
  countries: string[];
}

export function transformRegions(
  apiData: ApiRegion[]
): Record<string, RegionObject> {
  const result: Record<string, RegionObject> = {};

  apiData.forEach((region) => {
    result[region.title] = {
      countries: region.countries.map((country) => country.title),

    };
  });

  return result;
}
