"use client";
import { useEffect, useState, useRef, useCallback } from "react";

import BespokeJourney from "@/components/home/BespokeJourney";
import Loader from "../common/Loader";
import { apiService } from "@/services/api";
import PackageCard from "../package/PackageCard";
import { CountryResponse } from '../../types/countryType';
import DestinationCard from "@/components/destinations/DestinationCard";




export default function Experiencespeciality() {

    const [countries, setCountries] = useState<CountryResponse[]>([]);
    const [loading, setLoading] = useState(true);
     // Fetch countries
    const fetchCountries = async () => {


        try {
            setLoading(true);

            const res = await apiService.get<CountryResponse[]>(
                `/countries`
            );



            setCountries(res);
        } catch (error) {
            console.error("Countries API error:", error);

        } finally {
            setLoading(false);
        }
    };

    // Initial Load
    useEffect(() => {
        fetchCountries();
    }, []);


    if (!loading && !countries.length) {
        return (
            <section className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center text-center">
                <h2>No countries available</h2>
            </section>
        );
    }



    return (

        <>
            <section className="relative pt-32  xl:pt-40  pb-20 overflow-hidden bg-white ">
                <div className="max-w-[1300px] flex mx-auto  px-5">
                    <div className="flex flex-col w-full justify-center">
                        <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-(--color-secondary) text-center ">
                            Destinations</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-5 mt-2 lg:mt-2">

                            {countries.map((country) =>

                                <DestinationCard key={country.id} destination={country} />
                            )}


                        </div>

                    </div>
                </div>
            </section>
            <BespokeJourney />


        </>
    );
}