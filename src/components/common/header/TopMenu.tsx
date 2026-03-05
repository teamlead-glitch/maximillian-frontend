"use client";
import TopMenuinner from "./menu/TopMenuinner";
import TopMenuHome from "./menu/TopMenuHome";

import { usePathname } from "next/navigation";
import { transformRegions } from "@/lib/regionTransformer";
import { Regions } from "@/types/commonTypes";
import { RegionFormated } from "@/lib/regionTransformer";
import { Settings } from "@/types/commonTypes";

export default function TopMenu({ regions, settings }:{regions:Regions; settings:Settings}) {
  
   const pathname = usePathname();
   const formattedRegions:Record<string, RegionFormated> = transformRegions(regions);
   //console.log(formattedRegions,'formattedRegions++')

  return (
    <>

    {pathname === "/" ? <TopMenuHome regions={formattedRegions} settings={settings}/> : <TopMenuinner regions={formattedRegions} settings={settings}/>}
     
    </>
  );
}
