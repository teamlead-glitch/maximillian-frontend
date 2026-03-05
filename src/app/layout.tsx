
import { DM_Sans, Grape_Nuts, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { myFont, myFontMedium, myFontRegular, myFontSemibold } from "./font";
import { Metadata } from "next";

import Footer from "@/components/common/footer/footer";
import TopMenu from "@/components/common/header/TopMenu";
import BackToTop from "@/components/common/BackToTop";

import { getRegions, getSettings, getTagGroups } from "@/lib/server-fetchs";
import { Regions, Settings } from "@/types/commonTypes";
import { taggroupResponse } from "@/types/taggroupTypes";

export const metadata = {
  title: "Maximillian Holidays",
  description: "Maximillian Holidays",
  icons: {
    icon: "/favicon.ico",
  },
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  display: "swap",
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});



const grapeNuts = Grape_Nuts({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grape-nuts",
});


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const regions: Regions = await getRegions();
  //console.log(regions, 'regions++-')

  const settings: Settings = await getSettings();
  //console.log(settings, 'settings++-')

  const tagGroups: taggroupResponse[] = await getTagGroups();
  //console.log(tagGroups, 'tagGroups++-')




  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${grapeNuts.variable} ${dmSerif.variable} ${myFont.variable} ${myFontMedium.variable} ${myFontRegular.variable} ${myFontSemibold.variable} antialiased`}
      >
        <TopMenu regions={regions} settings={settings}/>


        {children}
        <Footer settings={settings} regions={regions} tagGroups={tagGroups}/>
        <BackToTop />
      </body>
    </html>
  );
}
