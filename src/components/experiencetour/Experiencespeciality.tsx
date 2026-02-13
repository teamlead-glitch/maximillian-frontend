"use client";
export default function Experiencespeciality() {


    return (

        <>
            <section className="relative py-40 overflow-hidden bg-white ">
                <div className="max-w-[1300px] flex mx-auto  px-5">
                    <div className="flex flex-col w-full justify-center">
                        <h1 className="font-my-font-regular text-break lg:text-5xl text-4xl text-(--color-secondary) text-center">Experience Journeys</h1>
                        <div className="w-full flex gap-15 pt-20">
                            <div className="w-1/3">
                                <div className="rounded-md w-full aspect-ratio-1/1 relative">
                                    <img src="images/expeience-img-1.png" alt="" className="rounded-md w-full h-full object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white text-lg font-my-font-semibold text-center">08 days</p>
                                    </div>
                                </div>
                                <div className="py-2 ">
                                    <ul className="flex flex-wrap justify-center items-center text-sm gap-2 mt-1">
                                        <li className="relative pr-3 text-[#818c94] after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#818c94]">
                                            Laos
                                        </li>
                                        <li className="relative text-[#818c94]">
                                            Cambodia
                                        </li>
                                    </ul>
                                    <h4 className="text-(--color-secondary) font-my-font-semibold text-2xl text-center py-2">A Mesmerizing Journey Across Cambodia</h4>

                                </div>
                            </div>
                            <div className="w-1/3">
                                <div className="rounded-md w-full aspect-ratio-1/1  relative">
                                    <img src="images/expeience-img-2.png" alt="" className="rounded-md w-full h-full object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">

                                        <p className="text-white text-lg font-my-font-semibold text-center">08 days</p>
                                    </div>
                                </div>

                                <div className="py-2 "></div></div>
                            <div className="w-1/3">
                                <div className="rounded-md w-full aspect-ratio-1/1 relative">
                                    <img src="images/expeience-img-3.png" alt="" className="rounded-md w-full h-full object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">

                                        <p className="text-white text-lg font-my-font-semibold text-center">08 days</p>
                                    </div>
                                </div>

                                <div className="py-2 "></div></div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}