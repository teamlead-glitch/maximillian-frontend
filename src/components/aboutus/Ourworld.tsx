"use client";
import LogoCarousel from "@/components/home/LogoCarousel";




export default function Ourworld() {



    return (

        <>

            <section className="relative  pt-20 pb-10 md:py-20 overflow-hidden bg-white">
                <div className="h-screen w-full relative"><img src="images/our-worldbg.webp" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-1/2 left-1/2 
-translate-x-1/2 -translate-y-1/2
w-[90%] sm:w-[80%] md:w-auto
px-4 sm:px-0 text-center">
                        <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-white text-center ">
                            Our World
                        </h1>
                        <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet malesuada est, id laoreet mi mattis ut. Aenean ultrices convallis sagittis. Nullam posuere, tortor a fringilla condimentum, dui justo facilisis sem, ac varius dolor leo ac ex.</p></div>

                </div>
            </section >

            <section className="relative py-10 lg:py-20  bg-white">
                <div className="max-w-[1200px] flex mx-auto  md:px-15 px-5">
                    <div className="flex flex-col items-center md:flex-row w-full">
                        <div className="w-full md:w-1/2 pr-0  lg:pr-28">
                            <h2 className="font-my-font-regular text-break text-4xl xl:text-5xl  text-(--color-secondary) mb-5 ">How We See the World around us.</h2>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet malesuada est, id laoreet mi mattis ut. Aenean ultrices convallis sagittis. Nullam posuere, tortor a fringilla condimentum, dui justo facilisis sem, ac varius dolor leo ac ex.</p>
                            <p>Fusce at nisi vestibulum, vulputate nisl eget, lacinia diam. Integer tincidunt, lacus vel luctus laoreet, massa elit ullamcorper leo, a faucibus lectus tellus et nisl. Aenean egestas diam quis justo egestas, id tristique ex vestibulum. </p>
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-15  lg:pl-28  mt-10 md:mt-0 ">
                            <div className="pl-0 md:pr-20 aspect-square">
                                <img src="images/about-right-img.webp" alt="" className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                    </div >
                </div >
            </section>

            <section className="relative pt-10 lg:pt-20 pb-20  lg:pb-40  bg-white">
                <div className="max-w-[1200px] flex mx-auto  md:px-15 px-5">
                    <div className="flex   flex-col-reverse md:flex-row items-center  w-full">

                        <div className="w-full md:w-1/2 pr-0 md:pr-15  lg:pr-28  mt-10 md:mt-0 ">
                            <div className="pl-0 md:pl-20 aspect-square">
                                <img src="images/about-right-img2.webp" alt="" className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pl-0  lg:pl-28   ">
                            <h3 className="font-my-font-regular text-break text-4xl xl:text-5xl  text-(--color-secondary) mb-5 ">About Festivon and it’s vision.</h3>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet malesuada est, id laoreet mi mattis ut. Aenean ultrices convallis sagittis. Nullam posuere, tortor a fringilla condimentum, dui justo facilisis sem, ac varius dolor leo ac ex.</p>
                            <p>Fusce at nisi vestibulum, vulputate nisl eget, lacinia diam. Integer tincidunt, lacus vel luctus laoreet, massa elit ullamcorper leo, a faucibus lectus tellus et nisl. Aenean egestas diam quis justo egestas, id tristique ex vestibulum. </p>
                        </div>
                    </div >
                </div >
            </section>


            <section className="relative pt-20 lg:pt-40 overflow-hidden bg-[#F5F2EE]  ">
                <div className="max-w-[1200px] flex mx-auto  md:px-15 px-5  ">
                    <div className="flex flex-col  md:flex-row w-full">
                        <div className="w-full md:w-1/2">
                            <div className="flex items-center justify-between">
                                <h3 className="font-my-font-regular text-break text-4xl xl:text-5xl  text-(--color-secondary) mb-5 ">Brand Philosophy</h3>
                                <div className="border-r-2 border-[#b9b8b8] h-10 md:block hidden"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3  flex flex-col gap-5 pl-0 md:pl-10">

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem augue, tempus sed placerat a, accumsan non ligula. Nunc urna mi, placerat eget ligula sed, </p>
                            <p>Fusce at nisi vestibulum, vulputate nisl eget, lacinia diam. Integer tincidunt, lacus vel luctus laoreet, massa elit ullamcorper leo, a faucibus lectus tellus et nisl. Aenean egestas diam quis justo egestas, id tristique ex vestibulum. </p>
                            <p>Sed interdum facilisis nisl, id pharetra ipsum tristique in. Nullam sed semper lorem. Donec eu lacus non elit blandit ultricies. Aenean vitae sagittis sem. Nunc at nisi tempor.</p>
                            <p>Fusce at nisi vestibulum, vulputate nisl eget, lacinia diam. Integer tincidunt, lacus vel luctus laoreet, massa elit ullamcorper leo, a faucibus lectus tellus et nisl. Aenean egestas diam quis justo egestas, id tristique ex vestibulum. </p>
                            <p>Sed interdum facilisis nisl, id pharetra ipsum tristique in. Nullam sed semper lorem. Donec eu lacus non elit blandit ultricies. Aenean vitae sagittis sem. Nunc at nisi tempor.</p>
                        </div>

                    </div >
                </div >
                <div className="w-full "><img src="images/brandphilosaphy-bg.webp" alt="" className="w-full h-full object-cover" /></div>
            </section>





            <section className="relative py-20 lg:py-40  bg-white">
                <div className="max-w-[1200px] flex mx-auto  md:px-15 px-5">
                    <div className="flex flex-col items-center md:flex-row w-full">
                        <div className="w-full md:w-1/2 pr-0  lg:pr-28">
                            <h2 className="font-my-font-regular text-break text-4xl xl:text-5xl  text-(--color-secondary) mb-5 ">Founder’s inspiration and his journey.</h2>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet malesuada est, id laoreet mi mattis ut. Aenean ultrices convallis sagittis. Nullam posuere, tortor a fringilla condimentum, dui justo facilisis sem, ac varius dolor leo ac ex.</p>
                            <p>Fusce at nisi vestibulum, vulputate nisl eget, lacinia diam. Integer tincidunt, lacus vel luctus laoreet, massa elit ullamcorper leo, a faucibus lectus tellus et nisl. Aenean egestas diam quis justo egestas, id tristique ex vestibulum. </p>
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-15  lg:pl-28  mt-10 md:mt-0 ">
                            <div className="pl-0 md:pr-20 aspect-square">
                                <img src="images/founder.webp" alt="" className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                    </div >
                </div >
            </section>

            <LogoCarousel />

        </>
    );
}