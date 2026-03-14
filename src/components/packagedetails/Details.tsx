"use client";
import BespokeJourney from "@/components/home/BespokeJourney";
import LogoCarousel from "@/components/home/LogoCarousel";
import "swiper/css/navigation";
import "swiper/css";
import { useState } from "react";
import { Circle } from "lucide-react";
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



export default function Details({ details }: { details: PackageResponse }) {


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
    const season = details?.season ?? "";
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
    const mobile_banner_image = details?.banner_mob_image;
    const taggroups = details?.taggroups || [];
    const region_slug = details?.regions?.short_slug;
    const tour_id = details?.id;
    const itinerary_document = details?.itinerary_document ?? "";


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
            <section className="relative  pt-15 pb-0 md:pt-20 overflow-hidden bg-white">
                <div className="w-full relative  aspect-[16/6]   lg:aspect-[16/4]">
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
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-0  md:bottom-[50px] left-1/2 
                        -translate-x-1/2  -translate-y-1/2
                        w-[90%] sm:w-[80%] md:w-auto
                        px-4 sm:px-0 text-center">

                    </div>
                </div></section>
            <section className=" bg-white py-10 md:py-30  px-5">
                <div className="max-w-[800px] mx-auto   ">
                    <div className="flex flex-wrap items-center gap-5 justify-center">
                        <h1 className="font-my-font-regular text-break xl:text-5xl md:text-4xl text-3xl text-(--color-secondary) text-center ">{title}</h1>
                        <p className="text-center">{package_tagline}
                        </p>
                    </div></div>
                <div className="max-w-[1300px] mx-auto pt-5 lg:pt-16">
                    <div className="flex flex-wrap align-center justify-center  gap-y-2 gap-x-3 md:gap-8 xl:gap-12">
                        {taggroups.map((group) => (
                            <div key={group.group_id} className="pb-2 md:pb-0">
                                <span className="text-sm sm:text-base text-(--color-secondary)">
                                    {group.group_title}
                                </span>

                                <ul className="flex flex-wrap items-start md:items-center text-sm gap-2 mt-1">
                                    {group.tags.map((tag, index) => (
                                        <li
                                            key={tag.id}
                                            className={`relative text-sm sm:text-base font-my-font-semibold pr-5 text-(--color-secondary)
                                                 ${index !== group.tags.length - 1
                                                    ? "after:content-['⬥'] after:text-base after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)"
                                                    : ""
                                                }`}
                                        >
                                            {tag.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="pb-2 md:pb-0">
                            <span className="text-sm sm:text-base text-(--color-secondary)">Duration</span>
                            <h4 className="text-sm sm:text-base text-(--color-secondary) font-my-font-semibold mt-1"> {duration}</h4>
                        </div>
                        <div className="pb-2 md:pb-0">
                            <span className="text-sm sm:text-base text-(--color-secondary)">Countries covered</span>

                            <TagListing

                                countries={countries}

                            />

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
                        </div>
                        {season && (
                            <div className="pb-2 md:pb-0">
                                <span className="text-sm sm:text-base text-(--color-secondary)">
                                    Best season
                                </span>
                                <h4 className="text-sm sm:text-base text-(--color-secondary) font-my-font-semibold mt-1">
                                    {season}
                                </h4>
                            </div>
                        )}
                        {journey_styles.length > 0 && (
                            <div className="pb-2 md:pb-0">
                                <span className="text-sm sm:text-base text-(--color-secondary)">
                                    Journey style
                                </span>

                                <ul className="flex flex-wrap items-center text-sm gap-2 mt-1">
                                    {journey_styles.map((style, index) => (
                                        <li
                                            key={index}
                                            className={`relative text-sm sm:text-base font-my-font-semibold pr-5 text-(--color-secondary)
          ${index !== journey_styles.length - 1
                                                    ? "after:content-['⬥'] after:text-base after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-(--color-secondary)"
                                                    : ""
                                                }`}
                                        >
                                            {style.trim()}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {group_size && (
                            <div className="pb-2 md:pb-0">
                                <span className="text-sm sm:text-base text-(--color-secondary)">
                                    Group size
                                </span>
                                <h4 className="text-sm sm:text-base text-(--color-secondary) font-my-font-semibold">
                                    {group_size}
                                </h4>
                            </div>
                        )}
                    </div>
                </div>
            </section >
            <section className="relative  py-5 md:py-10 px-5 overflow-hidden bg-white">
                <div className="max-w-[1000px] mx-auto w-full relative  ">
                    <div className="w-full flex md:flex-row flex-col  align-center justify-center">
                        <div className="w-full md:w-2/4 mb-10 md:mb-0">
                            <div className="aspect-square shadow-2xl relative">
                                <Image src={journey_image} fill alt="" className="w-full h-full object-cover rounded-lg" /></div>
                        </div>
                        <div className="w-full md:w-3/4 pl-0 md:pl-20 flex align-center justify-center flex-col">
                            <h2 className="font-my-font-regular text-break xl:text-4xl text-3xl text-(--color-secondary) mb-10
relative pb-2
before:content-[''] before:absolute before:-bottom-3 before:left-0 
before:w-16 before:h-[2px] before:bg-gray-300">
                                Journey overview
                            </h2>
                            <p className="content" dangerouslySetInnerHTML={{ __html: journey_overview }}>

                            </p>

                            {/*  <h3 className="font-my-font-regular text-break xl:text-3xl text-2xl text-(--color-secondary) mb-5">The Journey Flow
                            </h3> */}
                            <p className="content" dangerouslySetInnerHTML={{ __html: journey_flow }}>

                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative  py-5 md:py-20 px-5 overflow-hidden bg-white">
                <div className="max-w-[900px] mx-auto w-full relative  ">
                    <div className="w-full py-10 md:py-15">
                        <h2 className="relative text-center xl:text-6xl md:text-5xl text-4xl        font-my-font-regular text-(--color-secondary)
before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-1/4 before:h-[1px] before:bg-gray-400
after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-1/4 after:h-[1px] after:bg-gray-400
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

            <section className=" bg-white py-10   px-5">
                <div className="max-w-[1300px] mx-auto">
                    <div className="w-full">
                        <div className="flex flex-col md:flex-row  w-full gap-2 md:gap-8 py-0 md:py-5 ">
                            <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">Inclusions</h3></div>
                            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                            <div className="w-full md:w-[200px]"><p>What’s included by default in your journey.</p></div>
                        </div>

                    </div>
                    <div className="w-full lg:w-3/4 md:mt-5 mt-2">
                        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10">
                            <div className="w-full pr-0 md:pr-5"> <h3 className=" font-my-font-semibold text-xl text-(--color-secondary) ">Accommodation</h3>
                                <p>Three star or similar lodging / stay for the entire duration of the trip.</p>
                            </div>
                            <div className="w-full pr-0 md:pr-5"> <h3 className=" font-my-font-semibold text-xl text-(--color-secondary) ">Airport Transfers</h3>
                                <p>Pickup and drop-off between the airport/railway station and your hotel.</p>
                            </div>
                            <div className="w-full pr-0 md:pr-5"> <h3 className=" font-my-font-semibold text-xl text-(--color-secondary) ">Transportation</h3>
                                <p>Intercity / inter destination flights, trains, or buses between destinations.</p>
                            </div>
                            <div className="w-full pr-0 md:pr-5"> <h3 className=" font-my-font-semibold text-xl text-(--color-secondary) ">Sightseeing & Activities</h3>
                                <p>Pre-planned tours to major attractions, including a vehicle and a local guide.</p>
                            </div>
                            <div className="w-full pr-0 md:pr-5"> <h3 className=" font-my-font-semibold text-xl text-(--color-secondary) ">Support Services</h3>  <p> Assistance from a tour manager or local representative and 24/7 emergency support.</p>
                            </div>
                            <div className="w-full pr-0 md:pr-5"> <h3 className=" font-my-font-semibold text-xl text-(--color-secondary) ">Comprehensive Meal Plan</h3>
                                <p>Breakfast and one major meal (Lunch or Dinner) included in the duration of the trip.</p>
                            </div>
                        </div> */}

                        {/* includes */}

                        <ul className="space-y-2">
                            {includes.map((item) => (
                                <li key={item.id} className="flex items-start gap-2">
                                    <Circle className="w-2.5 h-2.5 fill-black mt-2" />
                                    <span className="text-(--color-secondary) text-base">
                                        {item.title}
                                    </span>
                                </li>
                            ))}

                        </ul>

                    </div>


                </div></section>

            <section className=" bg-white py-0 md:py-20  px-5">
                <div className="max-w-[1300px] mx-auto flex flex-col items-end  ">

                    <div className="w-full  lg:w-1/2 flex flex-col   ">

                        <div className="flex flex-col md:flex-row  w-full gap-4 md:gap-8 py-5 ">
                            <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">Exclusions</h3></div>
                            <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                            <div className="w-full md:w-[200px]"><p>What’s not included by default in your journey.</p></div>
                        </div>
                        {/* excludes */}

                        <ul className="space-y-2">
                            {excludes?.length > 0 &&
                                excludes.map((item) => (
                                    <li key={item.id} className="flex items-start gap-2">
                                        <Circle className="w-2.5 h-2.5 fill-black mt-2" />
                                        <span className="text-(--color-secondary) text-base">
                                            {item.title}
                                        </span>
                                    </li>
                                ))}
                        </ul>
                        {/* <div className="w-full flex">
                            <div className="w-full md:w-1/4"><h5 className="text-base font-bold text-(--color-secondary)">Documents.</h5>  </div>
                            <div className="w-full md:w-3/4"><p>Visa fees, passport processing, and travel insurance (unless specified).</p></div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-full md:w-1/4"><h5 className="text-base font-bold text-(--color-secondary)">Entry Fees.</h5></div>
                            <div className="w-full md:w-3/4"><p>Tickets for monuments, museums, theme parks, or optional "add-on" safaris.</p></div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-full md:w-1/4"><h5 className="text-base font-bold text-(--color-secondary)">Personal..</h5></div>
                            <div className="w-full md:w-3/4"><p>Laundry, telephone calls, mini-bar usage, and tips/gratuities for drivers/guides.</p></div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-full md:w-1/4"><h5 className="text-base font-bold text-(--color-secondary)">Flexibility.</h5></div>
                            <div className="w-full md:w-3/4">
                                <p>Early check-in or late check-out charges at hotels.</p></div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-full md:w-1/4"><h5 className="text-base font-bold text-(--color-secondary)">Transport.</h5></div>
                            <div className="w-full md:w-3/4"><p>Airfare to the starting city (for domestic tours) and excess baggage fees.</p></div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/*related journels component  */}
            <Related_journels region_slug={region_slug} tour_id={tour_id} />



            <BespokeJourney />
            <LogoCarousel />

        </>
    );
}