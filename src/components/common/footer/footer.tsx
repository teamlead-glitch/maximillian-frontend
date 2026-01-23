export default function Footer() {

    return (
        <>
            {/* footer */}

            <footer className="bg-white border-t  border-gray-200 py-20 px-5 ">
                <div className="max-w-[1400px] mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 md:gap-8">
                        <div className="border-0  md:border-r border-gray-200 mb-5 md:mb-0">
                            <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Menu</h6>
                            <ul className="text-body font-medium">
                                {["Home", "Destinations", "Design Your Trip", "Our World", "Contact Us"].map((item) => (
                                    <li
                                        key={item}
                                        className="mb-4 text-3xl md:text-4xl lg:text-5xl font-my-font-regular text-(--color-secondary)"
                                    >
                                        <a
                                            href="#"
                                            className="
          relative inline-block
          after:content-['']
          after:absolute after:left-0 after:-bottom-1
          after:w-full after:h-[1px]
         after:bg-[#C43131]
          after:scale-x-0
          after:origin-left
          after:transition-transform after:duration-500 after:ease-out
          hover:after:scale-x-100
        "
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className="border-0  md:border-r border-gray-200 mb-5 md:mb-0">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="div mb-5 md:mb-0">
                                    <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Specialties</h6>
                                    <ul className="text-body font-medium mb-5 md:mb-0">
                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline ">Ladies only Journeys</a>
                                        </li>
                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Family Travel</a>
                                        </li>
                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Slow Travel Experiences</a>
                                        </li>

                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Senior Friendly Journeys</a>
                                        </li>

                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Solo Traveller</a>
                                        </li>

                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Festival Journeys</a>
                                        </li>
                                    </ul>

                                    <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Regions</h6>
                                    <ul className="text-body font-medium">
                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Explore Europe</a>
                                        </li>
                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Amazing Asia</a>
                                        </li>

                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Astounding America</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="div mb-5 md:mb-0">
                                    <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Experience</h6>
                                    <ul className="text-body font-medium">
                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Cultural Journeys</a>
                                        </li>
                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Photography Tours</a>
                                        </li>
                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Trekking and Outdoors</a>
                                        </li>
                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Culinary Journeys</a>
                                        </li>
                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Wellness Travel</a>
                                        </li>
                                        <li className="mb-2 xl:mb-4 text-[#818c94]">
                                            <a href="#" className="hover:underline">Scenic Escapes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="pl-0 md:pl-10">
                            <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Contact</h6>
                            <ul className="text-body font-medium mb-5">
                                <li className="mb-4 text-[#818c94]">
                                    Registered Office: <br />
                                    Maximilian Holidays Pvt Ltd<br />
                                    #3B, The Q Business Bay,<br />
                                    Kochi, Kerala - India.
                                </li></ul>
                            <ul className="text-body font-medium mb-5">
                                <li className="mb-4 text-[#818c94]">
                                    Corporate Office <br />
                                    Level B, Ocean Pearl <br />
                                    Smart City, Dubai.
                                </li>
                            </ul>

                            <ul className="text-body font-medium pl-0 md:pl-0 md:-ml-[25px]">
                                <li className="mb-4 flex items-center gap-3 text-[#818c94]">
                                    <img
                                        src="images/call-icon.svg"
                                        alt="Phone"
                                        className="w-3 h-3"
                                    />
                                    <a href="tel:+91 999 886 8866">   +91 999 886 8866</a>
                                </li>

                                <li className="mb-4 flex items-center gap-3 text-[#818c94]">
                                    <img
                                        src="images/whatsapp-icon.svg"
                                        alt="Phone"
                                        className="w-3 h-3"
                                    />
                                    <a href="tel:+91 999 886 8866">   +91 999 886 8866</a>
                                </li>

                                <li className="flex items-center gap-3 text-[#818c94]">
                                    <img
                                        src="images/mail-icon.svg"
                                        alt="Email"
                                        className="w-3 h-3"
                                    />
                                    <a href="mailto:hello@maximilianholidays.com">hello@maximilianholidays.com</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <hr className="border-gray-200 my-6  sm:mx-auto lg:my-8" />
                    <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between w-full gap-5">
                        <span className="text-base text-[#93989b]  text-body sm:text-center">Made by  <a href="https://phitany.com/" className="hover:underline">Phitany</a>
                        </span>
                        <div className="div">
                            <ul className="flex gap-4 mt-1">
                                <li className="relative text-base text-[#93989b]  text-body sm:text-center pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#93989b]">
                                    <a href="#" className="hover:underline">Terms</a>
                                </li>

                                <li className="relative pr-3 text-base text-[#93989b]  text-body sm:text-center">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                            </ul></div>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" className="text-body text-[#818c94] hover:text-heading">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" /></svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-body text-[#818c94] hover:text-heading ms-5">
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

                            <a href="#" className="text-body text-[#818c94] hover:text-heading ms-5">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" /></svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="#" className="text-body text-[#818c94] hover:text-heading ms-5">
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
                    </div>
                </div>
            </footer >

            <footer className="bg-[#C43131] py-10 md:py-20">
                <div className="max-w-[1300px] flex flex-col items-center justify-center mx-auto text-center">
                    <img src="images/logo-footer.svg" alt="" />
                    <p className="text-white text-sm mt-3">A premium travel brand owned by Maximilian Holidays Private Ltd.</p>
                </div>
            </footer>

            {/* footer close */}
        </>
    )
}