import localFont from "next/font/local";

export const myFont = localFont({
    src: [
        {
            path: "../../public/fonts/utiledisplay-light-trial-webfont.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/utiledisplay-light-trial-webfont.woff",

            weight: "300",
            style: "normal",
        },
    ],
    variable: "--font-my-font",
    display: "swap",
});

export const myFontMedium = localFont({
    src: [
        {
            path: "../../public/fonts/utiledisplay-medium-trial-webfont.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/utiledisplay-medium-trial-webfont.woff",

            weight: "500",
            style: "normal",
        },
    ],
    variable: "--font-my-fontmedium",
    display: "swap",
});

export const myFontRegular = localFont({
    src: [
        {
            path: "../../public/fonts/utiledisplay-regular-trial-webfont.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/utiledisplay-regular-trial-webfont.woff",

            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-my-fontregular",
    display: "swap",
});

export const myFontSemibold = localFont({
    src: [
        {
            path: "../../public/fonts/utiledisplay-semibold-trial-webfont.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/utiledisplay-semibold-trial-webfont.woff",

            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-my-fontsemibold",
    display: "swap",
});