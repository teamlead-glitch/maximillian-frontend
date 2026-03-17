"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LogoCarousel from "@/components/home/LogoCarousel";
import { Range, getTrackBackground } from "react-range";
import { DYTEnquiryResponse, DYTFormErrors, DYTformtypes } from "@/types/designYourTripTypes";
import { toast, ToastContainer } from "react-toastify";
import { apiService } from "@/services/api";
import SimpleCaptcha from "../Captcha";
import { useRouter } from "next/navigation";



export default function Designyourtrip() {
    const router = useRouter();
    const [startDate, setStartDate] = useState<Date | null>(null);
    //for captcha validation
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const [captchaResetKey, setCaptchaResetKey] = useState(0);
    //loader
    const [loading, setLoading] = useState(false);

    /* disableing todays date */
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const STEP = 10;
    const MIN = 0;
    const MAX = 100000;

    const [values, setValues] = useState([1000, 100000]);

    /* types of trips */
    const tripTypes = [
        "Couple / Honeymoon",
        "Family",
        " Friends",
        "Solo"
    ];

    const travelPace = [
        "Relaxed",
        "Balanced",
        "Fast-Paced"
    ]



    /* form data */
    const [formData, setFormData] = useState<DYTformtypes>({
        title: "",
        name: "",
        phone: "",
        email: "",
        message: "",
        destination: "",
        travel_date: "",
        duration: "",
        group_size: "",
        trip_type: "",
        travel_pace: "",
        budget: "",
        season: ""
    });

    /* console.log(formData)  */
    const [errors, setErrors] = useState<DYTFormErrors>({
        title: "",
        name: "",
        phone: "",
        email: "",
        destination: "",
        travel_date:""
    });

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
        const newErrors: Partial<DYTFormErrors> = {};

        //title validation
        if (!formData.title) {
            newErrors.title = "Title required"
        }

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
        }else if (!/^\d{1,13}$/.test(formData.phone)) {
    newErrors.phone = "Mobile number cannot exceed 13 digits";
}


        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        // destination validation
        if (!formData.destination.trim()) {
            newErrors.destination = "Destination is required";
        }
         if (!formData.travel_date) {
        newErrors.travel_date = "Travel date is required";
    }

        setErrors(newErrors as DYTFormErrors);

        return Object.keys(newErrors).length === 0; // true → no errors
    };


    //submit form
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return; // 🔥 extra safety (prevents double click)
        if (!validate()) return;
        if (!isCaptchaVerified) {
            toast.error("Please verify captcha before submitting");
            return;
        }

        try {

            setLoading(true); // ⭐ start loader

            const payload = {
                name: `${formData.title} ${formData.name}`.trim(),
                phone: formData.phone,
                email: formData.email,
                message: formData.message,
                duration: formData.duration,
                destination: formData.destination,
                budget: formData.budget,
                group_size: formData.group_size,
                travel_date: formData.travel_date,
                travel_type: formData.trip_type,
                travel_pace: formData.travel_pace

            };

            const res = await apiService.post<DYTEnquiryResponse>(
                "/fit-enquiry", // ✅ remove /api if BASE_URL already contains it
                payload
            );

            console.log(res);

            if (res.result === "success") {
                 router.push("/thankyou");

                // Reset form
                setFormData({
                    title: "",
                    name: "",
                    phone: "",
                    email: "",
                    message: "",
                    destination: "",
                    travel_date: "",
                    duration: "",
                    group_size: "",
                    trip_type: "",
                    travel_pace: "",
                    budget: "",
                    season: ""
                });
                 setStartDate(null);
                setIsCaptchaVerified(false);
                setCaptchaResetKey((prev) => prev + 1); // 🔄 refresh captcha

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

    /* reset button */

const resetForm = () => {
  setFormData({
    title: "",
    name: "",
    phone: "",
    email: "",
    message: "",
    destination: "",
    travel_date: "",
    duration: "",
    group_size: "",
    trip_type: "",
    travel_pace: "",
    budget: `$${values[0].toLocaleString()} - $${values[1].toLocaleString()}`,
    season: ""
  });

  setStartDate(null);
  setIsCaptchaVerified(false);
  setCaptchaResetKey((prev) => prev + 1);
};
    return (

        <>

            <section className="relative pt-32 pb-20 md:py-40 overflow-hidden bg-white z-10">
                {/* Background */}
                <div className="absolute inset-y-0 left-0 w-[40%] bg-[#F5F2EE] -z-10 md:block hidden"></div>

                <div className="max-w-[1300px] flex mx-auto  px-5  ">
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="w-full   md:w-1/3 ">

                            <div className="w-full flex flex-col lg:flex-row items-center">
                                <div className="w-full md-1/2 pr-0 md:pr-4 ">
                                    <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-(--color-secondary) text-left">Design <br className="hidden lg:block" />Your Trip</h1>
                                </div>
                                <div className="w-1 h-15 bg-gray-300 lg:block hidden "></div>
                                <div className="w-full md-1/2 pl-0 lg:pl-5 mt-5  ">   <p className="text-(--color-secondary)">Some journeys can’t be templated. Share your idea and we’ll design it around you.</p></div>
                            </div>

                            <div className="w-full mt-15 md:mt-20 flex flex-col gap-10 pr-0 lg:pr-15">
                                <div className="flex items-center">
                                    <div className="pr-5 font-my-font-regular text-[#D3CABF] text-5xl">01</div>
                                    <div className="div">
                                        <h4 className="font-my-font-semibold text-(--color-secondary) text-xl md:text-2xl">Tell Us Your Vision</h4>
                                        <p className="text-[#46545E] text-sm">Share your interests,travel style, and expectations.</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="pr-5 font-my-font-regular text-[#D3CABF] text-5xl">02</div>
                                    <div className="div">
                                        <h4 className="font-my-font-semibold text-(--color-secondary) text-xl md:text-2xl">We Curate the Experience</h4>
                                        <p className="text-[#46545E] text-sm">Our experts design a personalised itinerary with refined details.</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="pr-5 font-my-font-regular text-[#D3CABF] text-5xl">03</div>
                                    <div className="div">
                                        <h4 className="font-my-font-semibold text-(--color-secondary) text-xl md:text-2xl">Travel Seamlessly</h4>
                                        <p className="text-[#46545E] text-sm">Enjoy end-to-end concierge support while you travel.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full md:w-2/3 pr-0 pl-0 mt-15 md:mt-0">

                            <div className="w-full  pl-0 md:pl-20  lg:pl-30 xl:pl-60 ">
                                <form className="w-full max-w-3xl space-y-5" onSubmit={handleSubmit}>
                                    <div className="w-full">
                                        <h4 className="font-my-font-semibold text-(--color-secondary) text-xl">Traveler</h4>
                                    </div>
                                    {/* Row 1 */}
                                    <div className="grid grid-cols-1 md:grid-cols-[30%_67%] gap-4">
                                        {/* Title */}
                                        <div>
                                            <div className="relative w-full">
                                                {/* LEFT ICON */}
                                                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                                    <img
                                                        src="images/title-icon.svg"   // your left icon svg
                                                        alt="title icon"
                                                        className="w-4 h-4"
                                                    />
                                                </span>

                                                {/* SELECT */}
                                                <select
                                                    className="w-full bg-transparent border border-gray-300 text-(--color-secondary) rounded-md 
                   pl-10 pr-10 py-3 focus:outline-none focus:border-gray-500 appearance-none"
                                                    id="title"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Title</option>
                                                    <option>Mr</option>
                                                    <option>Mrs</option>
                                                    <option>Ms</option>
                                                </select>

                                                {/* RIGHT DROPDOWN ARROW */}
                                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                                    <svg
                                                        className="w-4 h-4 text-gray-400"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </span>
                                            </div>
                                            {errors.title && <p style={{ color: "red", fontSize: "12px" }}>{errors.title}</p>}
                                        </div>


                                        {/* Full Name */}
                                        <div>
                                            <div className="relative w-full">
                                                {/* Left Icon */}
                                                <img
                                                    src="images/name-icon.svg"   // your SVG icon path
                                                    alt="User"
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 "
                                                />

                                                {/* Input */}
                                                <input
                                                    type="text"
                                                    placeholder="Full name"
                                                    className="w-full bg-transparent border border-gray-300 text-(--color-secondary)  placeholder:text-(--color-secondary) rounded-md pl-11 pr-3 py-3 focus:outline-none focus:border-gray-500"
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {errors.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>}
                                        </div>

                                    </div>

                                    {/* Row 2 */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Email */}
                                        <div>
                                            <div className="relative w-full">
                                                {/* Left Icon */}
                                                <img
                                                    src="images/email-icon.svg"   // your SVG icon path
                                                    alt="User"
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 "
                                                />

                                                {/* Input */}
                                                <input
                                                    id="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    type="text"
                                                    placeholder="Email ID"
                                                    className="w-full bg-transparent border border-gray-300 text-(--color-secondary)  placeholder:text-(--color-secondary) rounded-md pl-11 pr-3 py-3 focus:outline-none focus:border-gray-500"
                                                />
                                            </div>
                                            {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>}
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <div className="relative w-full">
                                                {/* Left Icon */}
                                                <img
                                                    src="images/phone-icon.svg"   // your SVG icon path
                                                    alt="User"
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 "
                                                />

                                                {/* Input */}
                                                <input
                                                    type="text"
                                                    placeholder="Phone number"
                                                    className="w-full bg-transparent border border-gray-300 text-(--color-secondary)  placeholder:text-(--color-secondary) rounded-md pl-11 pr-3 py-3 focus:outline-none focus:border-gray-500"
                                                    id="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {errors.phone && <p style={{ color: "red", fontSize: "12px" }}>{errors.phone}</p>}
                                        </div>
                                    </div>
                                    <div className="pt-3">  <h4 className="font-my-font-semibold text-(--color-secondary) text-xl">Trip details</h4></div>
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            placeholder="Preferred region(s) / countries"
                                            className="w-full bg-transparent border border-gray-300 text-(--color-secondary)  placeholder:text-(--color-secondary) rounded-md  px-3 py-3 focus:outline-none focus:border-gray-500"
                                            id="destination"
                                            value={formData.destination}
                                            onChange={handleChange}
                                        />
                                        {errors.destination && <p style={{ color: "red", fontSize: "12px" }}>{errors.destination}</p>}

                                    </div>
                                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">

                                        <div className="relative">
                                            <DatePicker
                                                selected={startDate}
                                                minDate={tomorrow} // disables today and past dates
                                                placeholderText="Traveling on"
                                                className="w-full bg-transparent border border-gray-300 text-(--color-secondary)  placeholder:text-(--color-secondary) rounded-md px-3 py-3 focus:outline-none focus:border-gray-500"
                                                id="date"
                                                onChange={(date: Date | null) => {
                                                    setStartDate(date);

                                                    if (date) {
                                                        const formatted =
                                                            `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            travel_date: formatted
                                                        }));
                                                    }
                                                }}

                                            />
                                            {errors.travel_date && <p style={{ color: "red", fontSize: "12px" }}>{errors.travel_date}</p>}

                                        </div>
                                        <div className="relative">
                                            <input type="text"
                                                placeholder="Duration"
                                                className="w-full bg-transparent border border-gray-300 text-(--color-secondary)  placeholder:text-(--color-secondary) rounded-md px-3 py-3 focus:outline-none focus:border-gray-500"
                                                id="duration"
                                                value={formData.duration}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="relative">
                                            <input type="text"
                                                placeholder="No of travellers"
                                                className="w-full bg-transparent border border-gray-300 text-(--color-secondary)  placeholder:text-(--color-secondary) rounded-md px-3 py-3 focus:outline-none focus:border-gray-500"
                                                id="group_size"
                                                value={formData.group_size}
                                                onChange={handleChange}
                                            />
                                        </div>


                                    </div>
                                    <div className="pt-3">  <h4 className="font-my-font-semibold text-(--color-secondary) text-xl">Optional</h4></div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                        <div className="relative">
                                            <select
                                                id="trip_type"
                                                value={formData.trip_type}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border border-gray-300 text-(--color-secondary) rounded-md px-3 py-3 focus:outline-none focus:border-gray-500"
                                            >
                                                <option value="" disabled>
                                                    Trip type
                                                </option>
                                                {tripTypes.map((type) => (
                                                    <option key={type} value={type.toLowerCase()}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="relative">
                                            <select
                                                id="travel_pace"
                                                value={formData.travel_pace}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border border-gray-300 text-(--color-secondary) rounded-md px-3 py-3 focus:outline-none focus:border-gray-500"

                                            >
                                                <option value="" disabled>
                                                    Travel pace
                                                </option>
                                                {travelPace.map((item) => (
                                                    <option key={item} value={item.toLowerCase()}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="relativee w-full">
                                        <div className="w-full max-w-xl mx-auto">
                                            <p className="py-4">Budget range</p>
                                            {/* Labels */}


                                            {/* Slider */}
                                            <Range
                                                values={values}
                                                step={STEP}
                                                min={MIN}
                                                max={MAX}
                                                onChange={(vals) => {
                                                    setValues(vals);

                                                    const budgetString = `$${vals[0].toLocaleString()} - $${vals[1].toLocaleString()}`;

                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        budget: budgetString
                                                    }));
                                                }}
                                                renderTrack={({ props, children }) => (
                                                    <div
                                                        {...props}
                                                        className="h-2 w-full rounded bg-gray-200"
                                                        style={{
                                                            background: getTrackBackground({
                                                                values,
                                                                colors: ["#e5e7eb", "#3A3F42", "#e5e7eb"],
                                                                min: MIN,
                                                                max: MAX
                                                            })
                                                        }}
                                                    >
                                                        {children}
                                                    </div>
                                                )}
                                                renderThumb={({ props }) => (
                                                    <div
                                                        {...props}
                                                        className="h-5 w-5 bg-white border-2 border-black rounded-full shadow"
                                                    />
                                                )}
                                            />
                                            <div className="flex justify-between mt-4 text-gray-700 font-medium">
                                                <span>₹{values[0]}</span>
                                                <span>₹{values[1]}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative w-full">
                                        <input
                                            id="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Anything specific you want to experience?"
                                            className="w-full bg-transparent border border-gray-300 text-(--color-secondary)  placeholder:text-(--color-secondary) rounded-md  px-3 py-3 focus:outline-none focus:border-gray-500" />
                                    </div>


                                    {/* Captcha number */}
                                    <SimpleCaptcha onVerify={setIsCaptchaVerified} resetTrigger={captchaResetKey} />


                                    {/* Button */}

                                    <div className="flex gap-4">
                                        <button
                                            disabled={loading}
                                            type="submit"
                                            className="
relative overflow-hidden bg-(--color-secondary)
text-white
px-4 py-3 md:px-6 md:py-4
border border-black/40 rounded-full
font-my-font-semibold
shadow-lg text-xs sm:text-base
cursor-pointer

transition-all duration-300
hover:bg-black/40

before:absolute before:inset-0
before:-translate-x-full
before:bg-gradient-to-r
before:from-transparent before:via-black/40 before:to-transparent
before:transition-transform before:duration-700
hover:before:translate-x-full hover:text-white
"

                                        >
                                            {loading ? (
                                                <span className="flex justify-center items-center text-white  w-full gap-2">

                                                    Sending.......
                                                    <span className="inline-block animate-spin h-4 w-4 border-2 border-red-500 border-t-transparent rounded-full"></span>
                                                </span>
                                            ) : (
                                                "Start Designing Your Trip"
                                            )}

                                        </button>


                                        <button
                                        onClick={resetForm}
                                            className="
relative overflow-hidden
text-(--color-secondary)
px-4 py-3 md:px-6 md:py-4
border border-black/40 rounded-full
font-my-font-semibold
shadow-lg text-xs sm:text-base
cursor-pointer

transition-all duration-300
hover:bg-black/40

before:absolute before:inset-0
before:-translate-x-full
before:bg-gradient-to-r
before:from-transparent before:via-black/40 before:to-transparent
before:transition-transform before:duration-700
hover:before:translate-x-full hover:text-white
"
                                        >
                                            Reset
                                        </button> </div>
                                    <p>No obligation until itinerary approval</p>

                                </form>
                            </div>
                        </div>


                    </div >
                </div >
            </section >


            <section className="relative py-10 md:py-28 overflow-hidden bg-white z-10">
                <div className="max-w-[1300px] flex mx-auto  px-5  ">
                    <div className="w-full grid grid-cols-1  md:grid-cols-3  gap-4 items-center justify-content-between">

                        <div className="w-full mb-5 md:mb-0 flex items-center pr-10">

                            <div className="pr-10"><img src="images/custom-journey-icon.png" alt="" /> </div>
                            <p className="mt-2 font-my-font-semibold text-xl ">
                                Custom journeys, no templates
                            </p>
                        </div>

                        <div className="w-full mb-5 md:mb-0 flex    items-center pr-10">

                            <div className="pr-10"><img src="images/multi-country.png" alt="" /> </div>
                            <p className="mt-2 font-my-font-semibold text-xl ">
                                Multi-country planning specialists
                            </p>
                        </div>

                        <div className="w-full mb-5 md:mb-0 flex items-center pr-10">

                            <div className="pr-10"><img src="images/your-review.png" alt="" /> </div>
                            <p className=" mt-2 font-my-font-semibold text-xl ">
                                You review before you commit.
                            </p>
                        </div>
                    </div>
                </div></section>





            <LogoCarousel />
            {/* Toast */}
            <ToastContainer position="top-right" autoClose={2000} theme="colored" />
        </>
    );
}