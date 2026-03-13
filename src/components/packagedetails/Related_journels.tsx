import React, { useEffect, useRef, useState } from 'react'
import { PackagesResponse } from "@/types/packages";
import Loader from "../common/Loader";
import { apiService } from "@/services/api";
import PackageCard from "../package/PackageCard";
interface props {
    region_slug?: string;
    tour_id:number;
}

function Related_journels({ region_slug,tour_id }: props) {
    const [packages, setPackages] = useState<PackagesResponse["packages"]>([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const observerRef = useRef<HTMLDivElement | null>(null);

    const fetchPackages = async () => {
  if (!hasMore) return;

  try {
    setLoading(true);

    const res = await apiService.get<PackagesResponse>(
      `/related-packages?package_id=${tour_id}`
    );

    // remove current package
    const filteredPackages = res.packages.filter(
      (pkg) => pkg.id !== tour_id
    );

    // show only 3
    setPackages(filteredPackages.slice(0, 3));

  } catch (error) {
    console.error("packages API error:", error);
    setHasMore(false);
  } finally {
    setLoading(false);
  }
};

    useEffect(() => {
        fetchPackages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
             {loading ? (
      <div className="flex justify-center py-20">
        <Loader />
      </div>
    ) : packages.length > 0 ? (
      <section className="bg-white py-10 md:py-20 px-5">
        <div className="max-w-[1000px] mx-auto flex flex-col items-end">

          <div className="flex flex-col w-full justify-center">
            <h4 className="font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) text-center">
              Related Journeys
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-15 mt-5 lg:mt-20">
              {packages.map((pckge) => (
                <PackageCard key={pckge.id} details={pckge} />
              ))}
            </div>

          </div>

        </div>
      </section>
    ) : null}
        </>
    )
}

export default Related_journels