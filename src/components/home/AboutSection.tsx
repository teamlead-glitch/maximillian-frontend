export default function AboutSection(){

    return(
        <>
         {/* about section */}
            <section className="relative py-20 overflow-hidden">
                {/* Top Right Decorative Shape */}
                <img
                    src="/images/logo-shape.png"
                    alt="Decorative shape"
                    className="
      absolute top-0 right-0
      w-200 sm:w-150 lg:w-200
      pointer-events-none
      select-none
    "
                />
                <div className="max-w-[1300px] flex mx-auto  px-5  ">
                    <div className="w-[20%]  lg:w-[10%]"><img src="images/logo-icon.svg" alt="" /></div>
                    <div className="w-[80%] lg:w-[60%]">
                        <h2 className=" font-my-font-regular text-3xl md:text-4xl  text-(--color-secondary) mb-5">Travel, Thoughtfully <br /> Designed.</h2>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="w-full md:w-1/2">
                                <p className="text-(--color-secondary)  mb-4">

                                    At Maximillian Holidays, we believe meaningful travel is unhurried, immersive, and deeply personal.</p>
                                <p className="text-(--color-secondary)">We craft small-group and private international journeys that focus on culture, connection, and comfort—moving beyond checklists to create experiences that stay with you long after the journey ends.</p>
                            </div>
                            <div className="w-full md:w-1/2"><p className="text-(--color-secondary)">Our curated approach focuses on specialty journeys from culinary and trekking expeditions to slow travel designed to foster genuine discovery. Through an enquiry-driven user journey and a commitment to cinematic storytelling, we transform international travel into a premium, custom-fit experience tailored specifically to your group size, budget, and season.</p></div>
                        </div>
                        <button className="flex items-center font-my-font-semibold text-sm sm:text-base justify-center py-3 mt-3  cursor-pointer  ">


                            <span className="mr-3">Our World</span>
                            <svg
                                width="53"
                                height="8"
                                viewBox="0 0 53 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M52.3536 4.03556C52.5488 3.8403 52.5488 3.52372 52.3536 3.32845L49.1716 0.146473C48.9763 -0.0487893 48.6597 -0.0487893 48.4645 0.146473C48.2692 0.341735 48.2692 0.658318 48.4645 0.85358L51.2929 3.68201L48.4645 6.51043C48.2692 6.7057 48.2692 7.02228 48.4645 7.21754C48.6597 7.4128 48.9763 7.4128 49.1716 7.21754L52.3536 4.03556ZM0 3.68201V4.18201H52V3.68201V3.18201H0V3.68201Z"
                                    fill="#3A3F42"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* about section close */}</>
    )
}