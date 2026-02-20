"use client";
import TopMenuinner from "./menu/TopMenuinner";
import TopMenuHome from "./menu/TopMenuHome";

import { usePathname } from "next/navigation";
import { transformRegions } from "@/lib/regionTransformer";
import { Regions } from "@/types/commonTypes";
import { RegionFormated } from "@/lib/regionTransformer";

export default function TopMenu({ regions }:{regions:Regions}) {
  
   const pathname = usePathname();
   const formattedRegions:Record<string, RegionFormated> = transformRegions(regions);
   //console.log(formattedRegions,'formattedRegions++')

  return (
    <>

    {pathname === "/" ? <TopMenuHome regions={formattedRegions}/> : <TopMenuinner regions={formattedRegions}/>}
     
    </>
  );
}
