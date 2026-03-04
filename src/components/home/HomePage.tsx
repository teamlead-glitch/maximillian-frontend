"use client";

import BannerSection from "./BannerSection";
import AboutSection from "./AboutSection";
import SignatureJourney from "./SignatureJourney";
import ExperienceTour from "./ExperienceTour";
// import SpecialityTours from "./SpecialityTours";
import FeaturedDestinations from "./FeaturedDestinations";
import DesignYourTrips from "./DesignYourTrips";
import Testimonials from "./Testimonials";
import WhatMakeExc from "./WhatMakeExc";
import Insights from "./Insights";
import BespokeJourney from "./BespokeJourney";
import LogoCarousel from "./LogoCarousel";
import { PageResponse } from "@/types/pagesTypes";
export default function HomePage({
  page
}: {
  page: PageResponse
}) {

    return (

        <>
            <BannerSection />
            <AboutSection page={ page }/>
            {/* <SignatureJourney /> */}
            <ExperienceTour />
            {/* <SpecialityTours /> */}
            <FeaturedDestinations />
            <DesignYourTrips />
            <Testimonials />
            <WhatMakeExc />
            <Insights />
            <BespokeJourney />
            <LogoCarousel />


        </>
    );
}