import localFont from "next/font/local";

export const myFont = localFont({
    src: [
        {
            path: "../../public/fonts/utiledisplay-light-trial-webfont.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/utiledisplay-light-trial-webfont.woff",

            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-my-font",
    display: "swap",
});