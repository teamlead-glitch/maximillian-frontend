"use client";
import TopMenuinner from "./menu/TopMenuinner";
import TopMenuHome from "./menu/TopMenuHome";

import { usePathname } from "next/navigation";
import { transformRegions } from "@/lib/regionTransformer";
import { Regions } from "@/types/commonTypes";

export default function TopMenu({ regions }:{regions:Regions}) {
  
   const pathname = usePathname();
   const formattedRegions = transformRegions(regions);
   

  return (
    <>

    {pathname === "/" ? <TopMenuHome /> : <TopMenuinner />}
     
    </>
  );
}
