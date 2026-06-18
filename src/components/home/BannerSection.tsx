import Link from "next/link";
import { API_CONFIG } from "@/constants/config";
import type { Settings } from "@/types/commonTypes";

const fallbackBannerImage = "/images/hero-img.jpg";

function getImageUrl(path?: string | null) {
    if (!path) {
        return fallbackBannerImage;
    }

    if (path.startsWith("http") || path.startsWith("/")) {
        return path;
    }

    const siteUrl = API_CONFIG.BASE_URL.replace(/\/api\/?$/, "");

    return `${siteUrl}/storage/${path}`;
}

function getYouTubeEmbedUrl(url: string): string | null {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);
    if (!match) return null;
    return `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}&controls=0&showinfo=0&rel=0&modestbranding=1&disablekb=1&iv_load_policy=3&fs=0`;
}

export default function BannerSection({ settings }: { settings: Settings }) {
    const isVideo = String(settings.banner_media_type) === "1" && settings.banner_video_url;
    const bannerImage = getImageUrl(settings.banner_image_path);
    const videoUrl = settings.banner_video_url ?? "";
    const youtubeEmbedUrl = isVideo ? getYouTubeEmbedUrl(videoUrl) : null;

    return (
        <>


            {/* hero section */}
            <section
                className="relative bg-cover bg-center min-h-screen overflow-hidden"
                style={{
                    backgroundImage: isVideo ? undefined : `url('${bannerImage}')`,
                }}
            >
                {isVideo && (
                    youtubeEmbedUrl ? (
                        <iframe
                            src={youtubeEmbedUrl}
                            className="absolute"
                            style={{
                                border: "none",
                                pointerEvents: "none",
                                top: "-10%",
                                left: "-10%",
                                width: "120%",
                                height: "120%",
                            }}
                            allow="autoplay; encrypted-media"
                            aria-hidden="true"
                        />
                    ) : (
                        <video
                            src={videoUrl}
                            className="absolute inset-0 h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            aria-hidden="true"
                        />
                    )
                )}

                <div className="relative z-10 max-w-[1300px] mx-auto flex items-end justify-end  py-20  px-5  min-h-screen ">

                    {/* Left content */}
                    <div className="flex flex-col w-lg gap-5">
                        <p className="text-white font-light text-end text-xs sm:text-base">Curated international travel experiences for discerning explorers. Crafted with care, culture, and character.</p>
                        <h1 className="text-5xl text-white md:text-7xl mb-4 font-my-font-regular text-end">
                            Journeys Beyond <br />
                            The Ordinary
                        </h1>


                        <div className="flex justify-end gap-4">
                            <Link href="/signature-journeys" className="
relative overflow-hidden
bg-white/30 backdrop-blur-md text-white cursor-pointer
px-4 py-3 md:px-6 md:py-4 rounded-full font-my-font-semibold
shadow-lg text-xs sm:text-base
transition-all duration-300
hover:bg-white/40
before:absolute before:inset-0
before:-translate-x-full
before:bg-gradient-to-r
before:from-transparent before:via-white/40 before:to-transparent
before:transition-transform before:duration-700
hover:before:translate-x-full
">
                                Explore Our Journeys
                            </Link>


                            <Link href="/designyourtrip"
                                className="
relative overflow-hidden
text-white
px-4 py-3 md:px-6 md:py-4
border border-white/40 rounded-full
font-my-font-semibold
shadow-lg text-xs sm:text-base
cursor-pointer

transition-all duration-300
hover:bg-white/40

before:absolute before:inset-0
before:-translate-x-full
before:bg-gradient-to-r
before:from-transparent before:via-white/40 before:to-transparent
before:transition-transform before:duration-700
hover:before:translate-x-full
"
                            >
                                Design your trip
                            </Link>

                        </div>
                    </div>

                    {/* Right image */}
                </div>
            </section >
            {/* hero section close */}





        </>
    )
}
