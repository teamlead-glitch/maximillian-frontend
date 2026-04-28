"use client";
import BespokeJourney from "@/components/home/BespokeJourney";
import LogoCarousel from "@/components/home/LogoCarousel";
import "swiper/css/navigation";
import "swiper/css";
import { useState } from "react";

import DaywiseCard from "./daywiseCard";
import PackagedetailsSlider from "./packagedetailsSlider";
import Faq from "./Faq";
import { PackageResponse } from "@/types/PackageDetailsType";
import Image from "next/image";
import Related_journels from "./Related_journels";
import { Download_ErrorTypes, Download_ItineraryTypes, TalktoUsEnquiryResponse } from "@/types/packagePopupTypes";
import { toast, ToastContainer } from "react-toastify";
import { apiService } from "@/services/api";
import SimpleCaptcha from "../Captcha";
import TagListing from "../common/TagListing";
import Link from "next/link";
import Inclussions from "./Inclussions";
import Exclussions from "./Exclussions";
import SimpleTagList from "../common/SimpleTagList";
import TagListingWithIcon from "../common/TagListingWithIcon";





export default function Details({ details }: { details: PackageResponse }) {


    const scrollToNext = () => {
        const nextSection = document.getElementById("next-section");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };


    const [open, setOpen] = useState(false);
    //for captcha validation
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const [captchaResetKey, setCaptchaResetKey] = useState(0);

    //loader
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Download_ItineraryTypes>({
        name: "",
        email: "",
        phone: "",

    });
    console.log(formData);

    const [errors, setErrors] = useState<Download_ErrorTypes>({
        name: "",
        phone: "",
        email: "",
    });


    const banner_image = details?.banner_image;
    const title = details?.title ?? "";
    const package_tagline = details?.package_tagline ?? "";
    const season = details?.season?.split(",") ?? "";
    const duration = details?.duration_text ?? "";
    const group_size = details?.package_size ?? "";
    const countries = details?.country || [];
    const journey_overview = details?.description ?? "";
    const journey_flow = details?.journey_flow ?? "";
    const journey_image = details?.image_path ?? "";
    const journey_styles = details?.journey_style?.split(",") ?? [];
    const price_text = details?.price_text ?? "";
    const faq = details?.faqs || [];
    const faq_image = details?.faq_image ?? "";
    const includes = details?.inclusion || [];
    const excludes = details?.exclusion || [];
    const mobile_banner_image = details?.banner_mob_image ?? banner_image;
    const taggroups = details?.taggroups || [];
    const region_slug = details?.regions?.short_slug;
    const tour_id = details?.id;
    const itinerary_document = details?.itinerary_document ?? "";
    const meta = details?.metas || [];
    console.log("metas" + meta);

     const allTags = [
  ...(taggroups?.[0]?.tags || []),
  ...(taggroups?.[1]?.tags || [])
];


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    /* -----------------------------------------------------------------------
           FORM VALIDATION (STRONG + CLEAN)
        ----------------------------------------------------------------------- */
    const validate = (): boolean => {
        const newErrors: Partial<Download_ErrorTypes> = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            newErrors.name = "Name cannot contain numbers or special characters";
        }

        // Mobile validation
        if (!formData.phone.trim()) {
            newErrors.phone = "Mobile number is required";
        } else if (!/^[+]?[0-9\s-]+$/.test(formData.phone)) {
            newErrors.phone = "Mobile number should contain only numbers";
        } else if (!/^[1-9]\d{9,14}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid mobile number";
        } else if (!/^\d{1,13}$/.test(formData.phone)) {
            newErrors.phone = "Mobile number cannot exceed 13 digits";
        }


        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        setErrors(newErrors as Download_ErrorTypes);

        return Object.keys(newErrors).length === 0; // true → no errors
    };

    //submit form
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (loading) return; // 🔥 extra safety (prevents double click)
        // form validation
        if (!validate()) return;
        if (!isCaptchaVerified) {
            toast.error("Please verify captcha before submitting");
            return;
        }


        try {

            setLoading(true); // ⭐ start loader

            const payload = {
                name: formData.name.trim(),
                phone: formData.phone,
                email: formData.email,
                package_id: details?.id


            };
            /* console.log("Payload:", payload); */

            const res = await apiService.post<TalktoUsEnquiryResponse>(
                "/itinerary-enquiry", // ✅ remove /api if BASE_URL already contains it
                payload
            );

            console.log(res);

            if (res.result === "success") {
                toast.success(res.message || "Package Enquiry Sent Successfully")
                // Reset form
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                });
                setIsCaptchaVerified(false);
                setCaptchaResetKey((prev) => prev + 1); // 🔄 refresh captcha
                setTimeout(() => {
                    setOpen(false);
                }, 2300);

            } else {
                toast.error(res.message || "Something went wrong"); // ✅ fixed syntax
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error("CONTACT FORM ERROR:", error);

            // ✅ show backend validation error
            toast.error("Failed to send. Please try again!");
        } finally {
            setLoading(false); // ⭐ stop loader
        }

    };

   

    return (

        <>
            <section className="relative  overflow-hidden bg-white">
                <div className="w-full relative  aspect-[1/1]   lg:aspect-[16/5.5]">
                    {/* MOBILE IMAGE */}
                    {mobile_banner_image && (
                        <Image
                            src={mobile_banner_image}
                            alt={title}
                            fill
                            className="object-cover w-full h-full md:hidden"
                        />
                    )}

                    {/* DESKTOP IMAGE */}
                    {banner_image && (
                        <Image
                            src={banner_image}
                            alt={title}
                            fill
                            className="object-cover w-full h-full hidden md:block"
                        />
                    )}
                    {/* <div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div> */}

                    <div className="absolute top-0 w-full h-[30%] bg-gradient-to-b from-black/80 via-black/0 to-transparent"></div>



                    <div className="absolute bottom-2 md:bottom-10 w-full left-0 ">
                        <div className="max-w-[1000px] mx-auto pt-5 lg:pt-16 flex">
                            <div className="grid w-full grid-cols-1 md:grid-cols-[60%_40%] lg:grid-cols-[70%_30%] px-5  lg:px-0">
                                <div className="pl-2"> <h1 className="font-my-font-regular text-break xl:text-5xl md:text-4xl text-3xl text-white ">{title}</h1></div>
                                <div className="pl-2">
                                    <div className="flex items-center justify-start md:justify-end gap-2 flex-wrap text-white  py-2 text-xs md:text-sm">
                                        {/* <MapPin className="mt-2" size={18} /> */}
                                        <TagListing
                                            textCenter={false}
                                            countries={countries}
                                            textColor={true}
                                            initialShowCount={6} />
                                        {/* <span>Paris</span>
                                        <span className="mx-1 text-gray-400">|</span>
                                        <span>Amsterdam</span>
                                        <span className="mx-1 text-gray-400">|</span>
                                        <span>Rome</span>
                                        <span className="mx-1 text-gray-400">|</span>
                                        <span>Rome</span> */}
                                    </div></div>
                            </div>
                        </div></div>


                </div></section>
            <section className=" bg-white py-10 md:py-20  px-5">
                <div className="max-w-[1000px] mx-auto   ">
                    <div className="flex flex-col flex-wrap gap-5 justify-center">
                        {/* <h1 className="font-my-font-regular text-break xl:text-5xl md:text-4xl text-3xl text-(--color-secondary) text-center ">{title}</h1> */}

                        {/* Destinations Placement
 */}

                        {/* <div className="flex items-center justify-center gap-2 flex-wrap text-(--color-secondary) py-2 text-sm md:text-base">
                            <MapPin className="mt-2" size={18} />
                            <TagListing
                                textCenter={false}
                                countries={countries}

                            />
                           
                        </div> */}
                        {/* Destinations Placement
 */}


                        <p>{package_tagline}
                        </p>
                    </div></div>
                <div className="max-w-[1000px] mx-auto pt-5 lg:pt-16">
                    <div className="flex flex-wrap align-center justify-start md:justify-between  gap-y-2  gap-x-0 md:gap-8 xl:gap-5">
                        {/* {taggroups.map((group) => (
                            <div key={group.group_id} className="w-1/2 md:w-auto pb-2 md:pb-0">
                                <span className="text-sm sm:text-base text-(--color-secondary)">
                                    {group.group_title}

                                </span>

                                <TagListing

                                    textCenter={false}

                                    tags={group.tags.map(tag => ({
                                        id: tag.id,
                                        title: tag.title,
                                        slug: tag.slug ?? '#',
                                    }))}
                                />

                               
                            </div>
                        ))} */}
                        <div className="pb-2 w-1/2 md:w-auto md:pb-0 pr-3 md:pr-0">
                            <span className="text-sm  text-(--color-secondary)">Duration</span>
                            <h4 className="text-sm text-black font-bold "> {duration}</h4>
                        </div>
                        {/* <div className="pb-2 w-1/2 md:w-auto md:pb-0 pr-3 md:pr-0"> */}
                        {/* <span className="text-sm sm:text-base text-(--color-secondary)">Countries covered</span>

                            <TagListing
                                textCenter={false}
                                countries={countries}

                            /> */}

                        {/* <ul className="flex flex-wrap  items-center text-sm gap-2 mt-1">
                                {countries.map((country, index) => (
                                    <li
                                        key={country.id}
                                        className="flex items-center text-sm sm:text-base font-my-font-semibold text-(--color-secondary)"
                                    >
                                        {country.title}

                                        
                                        {countries.length > 1 && index !== countries.length - 1 && (
                                            <span className="mx-2">⬥</span>
                                        )}
                                    </li>
                                ))}
                            </ul> */}
                        {/* </div> */}
                        {season && (
                            <div className="pb-2 w-1/2 md:w-auto md:pb-0 pr-3 md:pr-0">
                                <span className="text-sm text-(--color-secondary)">
                                    Best season
                                </span>
                                <ul className="flex flex-wrap items-center text-sm gap-2 font-bold">
                                    {season.map((style, index) => (
                                        <li
                                            key={index}
                                            className={`relative text-sm  font-bold pr-3 text-black
          ${index !== season.length - 1
                                                    ? "after:content-['|'] after:text-base after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)"
                                                    : ""
                                                }`}
                                        >
                                            {style.trim()}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {journey_styles.length > 0 && (
                            <div className="pb-2 w-1/2 md:w-auto md:pb-0 pr-3 md:pr-0">
                                <span className="text-sm  text-(--color-secondary)">
                                    Journey style
                                </span>

                                <SimpleTagList

                                    items={journey_styles}

                                />


                            </div>
                        )}
                        {group_size && (
                            <div className="pb-2 w-1/2 md:w-auto md:pb-0 pr-3 md:pr-0">
                                <span className="text-sm text-(--color-secondary)">
                                    Group size
                                </span>
                                <h4 className="text-sm font-bold text-black">
                                    {group_size}
                                </h4>
                            </div>
                        )}

                        {/* other metas hided */}
                        {/* {meta.map((item) => (
                            <div key={item.id} className="pb-2 w-1/2 md:w-auto md:pb-0 pr-3 md:pr-0">
                                <span className="text-sm sm:text-base text-(--color-secondary)">
                                    {item.meta_key}
                                </span>

                                <ul className="flex flex-wrap items-start md:items-center text-sm gap-2 ">

                                    <SimpleTagList items={item.meta_value.split(",")} />

                                </ul>
                            </div>
                        ))} */}
                    </div>
                </div>
                <div
                    onClick={scrollToNext}
                    className="relative w-full pt-15 flex justify-center cursor-pointer animate-bounce"
                >
                    <img
                        src="/images/arrow-bottom.svg"
                        alt="Scroll Down"
                        className="h-10"
                    />
                </div>
            </section >
            <section className="relative py-5 md:py-10 px-5  bg-white" id="next-section">
                <div className="max-w-[1000px] mx-auto w-full relative">
                    <div className="w-full">

                        {/* LEFT IMAGE */}

                        <div className="float-none md:float-left w-full md:w-[450px] lg:w-[400px] md:mr-15 mb-15">
                            <div className="aspect-[3/2]">
                                <img
                                    src={journey_image}
                                    alt=""
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>


                        {/* RIGHT CONTENT */}
                        <div className="space-y-4 text-justify">
                            <h2 className="font-my-font-regular xl:text-4xl text-3xl text-(--color-secondary) mb-6 relative pb-2">
                                Journey overview
                            </h2>

                            <div className="space-y-6">
                                <p
                                    className="content leading-relaxed text-justify"
                                    dangerouslySetInnerHTML={{ __html: journey_overview }}
                                />
                                <p
                                    className="content leading-relaxed text-justify"
                                    dangerouslySetInnerHTML={{ __html: journey_flow }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* new taglist */}

            <section className="relative py-5 md:py-10 px-5  bg-[#F5F2EE]">
                <div className="max-w-[1000px] mx-auto w-full relative">
                    <div className="flex justify-center items-center text-(--color-secondary)  text-sm md:text-base">
<TagListingWithIcon  initialShowCount={8}
                            tags={allTags.map(tag => ({
                                id: tag.id,
                                title: tag.title,
                                slug: tag.slug ?? '#',
                                icon: tag.icon
                            }))}/>
                    </div>
                </div>
            </section>
            {/* new taglist */}





            <section className="relative  py-5 md:py-20 px-5 overflow-hidden bg-white">
                <div className="max-w-[900px] mx-auto w-full relative  ">
                    <div className="w-full py-10 md:py-15">
                        <h2 className="relative text-center xl:text-6xl md:text-5xl text-4xl        font-my-font-regular text-(--color-secondary)
before:content-[''] before:absolute before:top-1/2 before:left-0 before:md:w-1/4 before:w-0 before:h-[1px] before:bg-gray-400
after:content-[''] after:absolute after:top-1/2 after:right-0 after:md:w-1/4 after:w-0 after:h-[1px] after:bg-gray-400
before:-translate-y-1/2 after:-translate-y-1/2">
                            Day-wise Itinerary </h2>
                    </div>


                    {/* daywise card component */}
                    {details?.itinerary?.map((day) => (
                        <DaywiseCard key={day.id} day={day} />
                    ))}
                    {itinerary_document && (
                        <div className="w-full text-center flex justify-center py-5 md:py-10">
                            <button
                                onClick={() => setOpen(true)}
                                className="group flex items-center font-my-font-semibold text-sm text-black sm:text-base justify-center py-0 md:py-4 mt-3 cursor-pointer"
                            >
                                <span className="mr-3 font-my-font-semibold text-(--color-secondary)">
                                    Download This itinerary as PDF
                                </span>
                                <img src="/images/download.svg" alt="download" />
                            </button>
                        </div>
                    )}



                    {/* Popup Modal */}
                    {open && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                            onClick={() => setOpen(false)}   // close when clicking overlay
                        >
                            <div
                                className="bg-white rounded-xl shadow-xl w-[90%] md:w-[500px] p-8 relative"
                                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setOpen(false)}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
                                >
                                    ✕
                                </button>

                                <h2 className="text-2xl font-my-font-semibold text-(--color-secondary) mb-6 text-center">
                                    Download Itinerary
                                </h2>

                                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Full Name"
                                            className="border border-[#5b5e60] rounded-lg p-3 outline-none text-(--color-secondary) placeholder:text-gray-500 w-full"
                                        />
                                        {errors.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>}
                                    </div>

                                    <div>
                                        <input
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="Email Address"
                                            className="border border-[#5b5e60] rounded-lg p-3 outline-none text-(--color-secondary) placeholder:text-gray-500 w-full"
                                        />
                                        {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>}
                                    </div>

                                    <div>
                                        <input
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="border border-[#5b5e60] rounded-lg p-3 outline-none text-(--color-secondary) placeholder:text-gray-500 w-full"
                                        />
                                        {errors.phone && <p style={{ color: "red", fontSize: "12px" }}>{errors.phone}</p>}
                                    </div>
                                    <SimpleCaptcha onVerify={setIsCaptchaVerified} resetTrigger={captchaResetKey} />

                                    <button type="submit" disabled={loading} className="
relative overflow-hidden
bg-black/90 backdrop-blur-md text-white cursor-pointer
px-4 py-3 md:px-6 md:py-4 rounded-lg font-my-font-semibold
shadow-lg text-xs sm:text-base
transition-all duration-300
hover:bg-black/100
before:absolute before:inset-0
before:-translate-x-full
before:bg-gradient-to-r 
before:from-transparent before:via-white/40 before:to-transparent
before:transition-transform before:duration-700
hover:before:translate-x-full
">
                                        {loading ? (
                                            <span className="flex justify-center items-center text-white  w-full gap-2">

                                                Sending.......
                                                <span className="inline-block animate-spin h-4 w-4 border-2 border-red-500 border-t-transparent rounded-full"></span>
                                            </span>
                                        ) : (
                                            "Download PDF"
                                        )}

                                    </button>
                                </form>
                                {/* Toast */}
                                <ToastContainer position="top-right" autoClose={2000} theme="colored" />
                            </div>
                        </div>
                    )}

                </div>
            </section >

            <PackagedetailsSlider gallery={details?.gallery} price_text={price_text} title={title} id={tour_id} />
            <Faq faq={faq} faq_image={faq_image} />


            {/* <section className=" py-5 md:py-20 bg-white" >
                <div className="max-w-[1300px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-[8fr_4fr] gap-0 md:gap-8">
                        
                    </div>
                </div>
            </section> */}

            {/*related journels component  */}

            <Inclussions includes={includes} />

            <Exclussions excludes={excludes} />



            <Related_journels region_slug={region_slug} tour_id={tour_id} />



            <BespokeJourney bescope_image={details.bescope_image} />
            <LogoCarousel />

        </>


    );
}

