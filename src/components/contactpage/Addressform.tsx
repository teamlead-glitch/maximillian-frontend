"use client";
import BespokeJourney from "@/components/home/BespokeJourney";
import LogoCarousel from "@/components/home/LogoCarousel";
import { apiService } from "@/services/api";
import { ContactEnquiryResponse, FormErrors, Formtypes, SettingsResponse } from "@/types/addressformTypes";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import SimpleCaptcha from "../Captcha";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function AddressForm() {
    const router = useRouter();

    //settings api
    const [settings, setSettings] = useState<SettingsResponse | null>(null);
    //loader
    const [loading, setLoading] = useState(false);

    //for captcha validation
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const [captchaResetKey, setCaptchaResetKey] = useState(0);


    const [formData, setFormData] = useState<Formtypes>({
        title: "",
        name: "",
        mobile: "",
        email: "",
        message: "",
        is_agreed: false,
    });
    /* console.log(formData) */

    const [errors, setErrors] = useState<FormErrors>({
        title: "",
        name: "",
        mobile: "",
        email: "",
        message: "",
        is_agreed: "",
    });

    /* -----------------------------------------------------------------------
      HANDLE FORM INPUT CHANGES (WITH TYPESCRIPT SAFETY)
   ----------------------------------------------------------------------- */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value, type } = e.target;

        // Checkbox needs e.target.checked instead of value
        const finalValue =
            type === "checkbox"
                ? (e.target as HTMLInputElement).checked
                : value;

        setFormData((prev) => ({
            ...prev,
            [id]: finalValue,
        }));
    };
    /* -----------------------------------------------------------------------
       FORM VALIDATION (STRONG + CLEAN)
    ----------------------------------------------------------------------- */
    const validate = (): boolean => {
        const newErrors: Partial<FormErrors> = {};

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
        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
        } else if (!/^[+]?[0-9\s-]+$/.test(formData.mobile)) {
            newErrors.mobile = "Mobile number should contain only numbers";
        } else if (!/^[1-9]\d{9,14}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter a valid mobile number";
        }


        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 5) {
            newErrors.message = "Message must be at least 5 characters";
        }
        /* check */
        if (!formData.is_agreed) {
            newErrors.is_agreed = "You must agree to continue."
        }

        setErrors(newErrors as FormErrors);

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
                name: `${formData.title} ${formData.name}`.trim(),
                phone: formData.mobile,
                email: formData.email,
                message: formData.message,
            };

            const res = await apiService.post<ContactEnquiryResponse>(
                "/contact-enquiry", // ✅ remove /api if BASE_URL already contains it
                payload
            );

            /* console.log(res); */

            if (res.result === "success") {
                router.push("/thankyou");

                // Reset form
                setFormData({
                    title: "",
                    name: "",
                    mobile: "",
                    email: "",
                    message: "",
                    is_agreed: false,
                });
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


    /* settngs api */
    useEffect(() => {

        const fetchSettings = async () => {
            try {
                const res = await apiService.get<SettingsResponse>("/settings");

                console.log("FINAL SETTINGS DATA:", res);

                setSettings(res); // ✅ directly set

            } catch (error) {
                console.error("Settings API Error:", error);
            }
        };

        fetchSettings();

    }, []);

    //fb link
    const fb_link = `${settings?.fb_url}`;

    //twitter link
    const twitter_link = `${settings?.twitter_url}`;

    //youtube link
    const youtube_url = `${settings?.youtube_url}`;

    //linkedin link
    const linkedin_url = `${settings?.linked_in}`;

    //insta link
    const insta_url = `${settings?.insta_url}`;
    //phone number
    const phone_number = settings?.phone;
    //creating link
    const phone_link = phone_number ? `tel:${phone_number}` : "#";

    //number storing
    const whatsappNumber = settings?.whatsapp;
    //message storing
    const message = encodeURIComponent("Hi! I would like to know more.");

    const whatsappLink = whatsappNumber
        ? `https://wa.me/${whatsappNumber}?text=${message}`
        : "#";

    //email link
    const email = settings?.email;
    //console.log(email);
    const email_link = email ? `mailto:${email}` : "#";


    return (

        <>

            <section className="relative  overflow-hidden bg-white z-10">
                {/* Background */}
                <div className="absolute inset-y-0 right-0 w-[20%]  bg-[#F5F2EE] -z-10 md:block hidden"></div>

                <div className="max-w-[1300px] flex mx-auto  px-5  ">
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="w-full md:w-2/3 pr-0 sm:pr-10 pt-32 pb-10 md:py-40">
                            <div className="w-full flex flex-col sm:flex-row items-center">
                                <div className="w-full sm:w-2/3 pr-0 sm:pr-10 ">
                                    <h1 className="font-my-font-regular text-break xl:text-5xl text-4xl text-(--color-secondary) text-left sm:text-right ">Let’s talk about <br />
                                        your next holiday plan! </h1>
                                </div>
                                <div className="w-px h-15 bg-gray-300 hidden sm:block"></div>
                                <div className="w-full sm:w-1/3 pl-0 sm:pl-10 mt-5  sm:mt-0">   <p>Every enquiry is personally reviewed by our travel design team.</p></div>
                            </div>
                            <div className="w-full  pr-10 md:pr-10  lg:pr-30 xl:pr-60 mt-10 sm:mt-20">
                                <form className="w-full max-w-3xl space-y-6" onSubmit={handleSubmit}>

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
                                                <select id="title"
                                                    value={formData.title}
                                                    onChange={handleChange}

                                                    className="w-full bg-transparent border border-gray-300 text-(--color-secondary) rounded-md 
                   pl-10 pr-10 py-3 focus:outline-none focus:border-gray-500 appearance-none"

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
                                                    onChange={handleChange}
                                                    value={formData.name}
                                                    type="text"
                                                    id="name"
                                                    placeholder="Full name"
                                                    className="w-full bg-transparent border border-gray-300 text-(--color-secondary)  placeholder:text-(--color-secondary) rounded-md pl-11 pr-3 py-3 focus:outline-none focus:border-gray-500"
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
                                                    onChange={handleChange}
                                                    value={formData.email}
                                                    type="text"
                                                    id="email"
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
                                                    onChange={handleChange}
                                                    value={formData.mobile}
                                                    type="text"
                                                    placeholder="Phone number"
                                                    id="mobile"
                                                    className="w-full bg-transparent border border-gray-300 text-(--color-secondary)  placeholder:text-(--color-secondary) rounded-md pl-11 pr-3 py-3 focus:outline-none focus:border-gray-500"
                                                />
                                            </div>
                                            {errors.mobile && <p style={{ color: "red", fontSize: "12px" }}>{errors.mobile}</p>}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col">

                                        <textarea
                                            onChange={handleChange}
                                            value={formData.message}
                                            id="message"
                                            rows={3}
                                            placeholder="Your message"
                                            className="w-full bg-transparent border border-gray-300 text-(--color-secondary) placeholder:text-(--color-secondary) rounded-xl px-4 py-4 focus:outline-none focus:border-gray-500 resize-none"
                                        />

                                        {errors.message && <p style={{ color: "red", fontSize: "12px" }}>{errors.message}</p>}

                                    </div>
                                    {/* Checkbox */}
                                   <div className="flex flex-col">
                                        <label className="flex items-start gap-3 text-sm text-(--color-secondary)">
                                            <input
                                                onChange={handleChange}
                                                checked={formData.is_agreed}
                                                id="is_agreed"
                                                type="checkbox"
                                                className="mt-1 h-4 w-4 rounded border-gray-600 bg-transparent focus:ring-0"
                                            />
                                            <span >
                                                I&apos;ve read and agreed to Festivon{" "}
                                                <a href="/privacy-policy" target="_blank" className="underline hover:text-black">
                                                    Privacy Policy
                                                </a>
                                            </span>
                                        </label>
                                          {errors.is_agreed && <p className="mt-1" style={{ color: "red", fontSize: "12px" }}>{errors.is_agreed}</p>}
                                   </div>
                                    {/* Captcha number */}
                                    <SimpleCaptcha onVerify={setIsCaptchaVerified} resetTrigger={captchaResetKey} />


                                    {/* Button */}
                                    <button
                                        type="submit"
                                        disabled={loading}
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
min-w-[190px] 
"
                                    >
                                        {loading ? (
                                            <p className="flex justify-center items-center gap-2">

                                                Sending....
                                                <span className="inline-block animate-spin h-4 w-4 border-2 border-red-500 border-t-transparent rounded-full"></span>
                                            </p>
                                        ) : (
                                            "Send Your Message"
                                        )}
                                    </button>

                                </form>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 mt-0 md:mt-0 py-15  md:py-40    md:bg-[#F5F2EE]">

                            <div className="w-full pl-0 md:pl-5 xl:pl-10">
                                <h4 className="font-my-font-semibold text-(--color-secondary) text-xl ml-8">Contact</h4>

                                <div className="flex mt-5 gap-5 items-center ">
                                    <div className="w-2/3 flex mt-5 items-start ">
                                        <img src="images/location_icon.svg" alt="" className="mt-2 mr-5" />
                                        <div className="div">
                                            <h5 className="text-[#46545E] text-lg font-semibold">Registered Office</h5>
                                            <p>{settings?.address ?? "Not available"}</p>

                                        </div>
                                    </div>
                                    {settings?.address_link && (
                                        <div className="w-1/3 pl-4">
                                            <a
                                                href={settings.address_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="images/map-img.png"
                                                    alt="View location"
                                                />
                                            </a>
                                        </div>
                                    )}

                                </div>


                                <div className="flex mt-5 gap-5 items-center ">
                                    <div className="w-2/3 flex mt-5 items-start ">
                                        <img src="images/location_icon.svg" alt="" className="mt-2 mr-5" />
                                        <div className="div">
                                            <h5 className="text-[#46545E] text-lg font-semibold">Corporate Office</h5>
                                            <p>{settings?.address_2 ?? "Not available"}</p>
                                        </div>
                                    </div>
                                    {settings?.address_link_2 && (
                                        <div className="w-1/3 pl-4">
                                            <a
                                                href={settings.address_link_2}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="images/map-img.png"
                                                    alt="View location"
                                                />
                                            </a>
                                        </div>
                                    )}

                                </div>


                                <div className="flex mt-4 py-10 md:py-16 sm:mt-0 ml-8">
                                    <a href={fb_link} className="text-body text-[#46545E] hover:text-heading" target="_blank">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" /></svg>
                                        <span className="sr-only">Facebook page</span>
                                    </a>
                                    <a href={insta_url} className="text-body text-[#46545E] hover:text-heading ms-5" target="_blank">
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2c2.717 0 3.056.01 4.122.06 1.064.05 1.79.217 2.43.465a4.92 4.92 0 0 1 1.77 1.153 4.92 4.92 0 0 1 1.153 1.77c.248.64.415 1.366.465 2.43.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.064-.217 1.79-.465 2.43a4.902 4.902 0 0 1-2.923 2.923c-.64.248-1.366.415-2.43.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.064-.05-1.79-.217-2.43-.465a4.902 4.902 0 0 1-2.923-2.923c-.248-.64-.415-1.366-.465-2.43C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.064.217-1.79.465-2.43A4.92 4.92 0 0 1 3.678 3.73a4.92 4.92 0 0 1 1.77-1.153c.64-.248 1.366-.415 2.43-.465C8.944 2.01 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.25-.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="sr-only">Instagram page</span>
                                    </a>

                                    <a href={twitter_link} className="text-body text-[#46545E] hover:text-heading ms-5" target="_blank">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" /></svg>
                                        <span className="sr-only">Twitter page</span>
                                    </a>
                                    <a href={youtube_url} className="text-body text-[#46545E] hover:text-heading ms-5" target="_blank">
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.88 4.75 12 4.75 12 4.75s-5.88 0-7.64.49A2.75 2.75 0 0 0 2.42 7.19 28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .42 4.81 2.75 2.75 0 0 0 1.94 1.95c1.76.49 7.64.49 7.64.49s5.88 0 7.64-.49a2.75 2.75 0 0 0 1.94-1.95A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z" />
                                        </svg>
                                        <span className="sr-only">YouTube channel</span>
                                    </a>

                                </div>



                                <div className="mt-5 items-start">
                                    <div className="flex mt-5  items-start ">

                                        <img src="images/call-icon.svg" className="w-5 mr-5" />

                                        <div className="div">
                                            <a href={phone_link} className="flex gap-3"><p>{settings?.phone ?? "Not available"}</p></a>

                                        </div>
                                    </div>

                                    <div className="flex mt-5 items-start ">

                                        <img src="images/whatsapp-icon.svg" className="w-5 mr-5" />

                                        <div className="div">
                                            <a href={whatsappLink} className="flex gap-3" target="_blank">   <p>WhatsApp</p></a>


                                        </div>
                                    </div>
                                    <div className="flex mt-5  items-start ">

                                        <img src="images/mail-icon.svg" className="w-5 mr-5" />
                                        <div className="div">
                                            <a href={email_link} className="flex gap-3"> <p>{settings?.email ?? "Not available"}</p></a>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div >
                </div >
            </section >

            <BespokeJourney />
            <LogoCarousel />

            {/* Toast */}
            <ToastContainer position="top-left" autoClose={2000} theme="colored" />

        </>
    );
}