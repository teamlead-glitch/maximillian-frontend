import { Settings, Regions } from "@/types/commonTypes";
import Link from "next/link";
import { taggroupResponse } from "@/types/taggroupTypes";

export default function Footer({ settings, regions, tagGroups }: { settings: Settings; regions: Regions; tagGroups: taggroupResponse[] }) {

    return (
        <>
            {/* footer */}

            <footer className="bg-white border-t  border-gray-200 py-10 md:py-20 px-5 md:px-10 ">
                <div className="max-w-[1400px] mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 md:gap-8">
                        <div className="border-0  md:border-r border-gray-200 mb-5 md:mb-0 pr-5">
                            <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Menu</h6>
                            <ul className="text-body font-medium">
                                {[{ label: "Home", href: "/" },
                                { label: "Destinations", href: "/destinations" },
                                { label: "Design Your Trip", href: "/designyourtrip" },
                                { label: "Our World", href: "/ourworld" },
                                { label: "Contact Us", href: "/contact" }].map((item) => (
                                    <li
                                        key={item.label}
                                        className="mb-4 text-2xl md:text-3xl lg:text-4xl font-my-font-regular text-(--color-secondary)"
                                    >
                                        <Link
                                            href={item.href}
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
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className="border-0  md:border-r border-gray-200 mb-5 md:mb-0">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="div mb-5 md:mb-0">
                                    <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Specialties</h6>
                                    <ul className="text-body font-medium mb-5 md:mb-0">
                                        {tagGroups[1].tags.map((exp) => (

                                            <li key={exp.id} className="mb-2 xl:mb-4 text-[#818c94]">
                                                <Link href={`/tag/${exp.short_slug}`} className="hover:underline ">{exp.title}</Link>
                                            </li>

                                        ))}


                                    </ul>

                                    <h6 className="mb-6 mt-15 text-sm text-[#93989b]  text-heading">Regions</h6>
                                    <ul className="text-body font-medium">

                                        {regions.map((reg) => (

                                            <li key={reg.id} className="mb-2 xl:mb-4 text-[#818c94]">
                                                {reg.slug === 'india' ? (
                                                    <Link href="/country/india" className="hover:underline">{reg.menu_title ? reg.menu_title : reg.title}</Link>
                                                ) : (
                                                    <Link href={`/${reg.slug}`} className="hover:underline">{reg.menu_title ? reg.menu_title : reg.title}</Link>
                                                )}

                                            </li>

                                        ))}


                                    </ul>
                                </div>
                                <div className="div mb-5 md:mb-0">
                                    <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Experience</h6>
                                    <ul className="text-body font-medium">
                                        {tagGroups[0].tags.map((spec) => (

                                            <li key={spec.id} className="mb-2 xl:mb-4 text-[#818c94]">
                                                <Link href={`/tag/${spec.short_slug}`} className="hover:underline ">{spec.title}</Link>
                                            </li>

                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="pl-0 md:pl-10">
                            <h6 className="mb-6 text-sm text-[#93989b]  text-heading">Contact</h6>
                            <ul className="text-body font-medium mb-5">
                                <li className="mb-4 text-[#818c94]">
                                    Registered Office: <br />
                                    {settings.address}
                                </li></ul>
                            <ul className="text-body font-medium mb-5">
                                <li className="mb-4 text-[#818c94]">
                                    Corporate Office <br />
                                    {settings.address_2}
                                </li>
                            </ul>

                            <ul className="text-body font-medium pl-0 md:pl-0 md:-ml-[25px]">
                                <li className="mb-4 flex items-center gap-3 text-[#818c94]">
                                    <img
                                        src="/images/call-icon.svg"
                                        alt="Phone"
                                        className="w-3 h-3"
                                    />
                                    <a href={`tel:${settings.phone}`}>   {settings.phone}</a>
                                </li>

                                <li className="mb-4 flex items-center gap-3 text-[#818c94]">
                                    <img
                                        src="/images/whatsapp-icon.svg"
                                        alt="Phone"
                                        className="w-3 h-3"
                                    />
                                    <a href={`https://wa.me/${settings.whatsapp}`}>   {settings.whatsapp}</a>
                                </li>

                                <li className="flex items-center gap-3 text-[#818c94]">
                                    <img
                                        src="/images/mail-icon.svg"
                                        alt="Email"
                                        className="w-3 h-3"
                                    />
                                    <a href={`mailto:${settings.email}`}>{settings.email}</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <hr className="border-gray-200 my-6  sm:mx-auto lg:my-8" />
                    <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between w-full gap-5">
                        <span className="text-base text-[#93989b]  text-body sm:text-center">Made by  <a href="https://phitany.com/" className="hover:underline">Phitany</a>
                        </span>
                        <div className="div">
                            <ul className="flex flex-wrap gap-4 mt-1">
                                <li className="relative text-base text-[#93989b]  text-body sm:text-center pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#93989b]">
                                    <Link href="/terms-and-conditions" className="hover:underline">Terms</Link>
                                </li>

                                <li className="relative text-base text-[#93989b]  text-body sm:text-center pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#93989b]">
                                    <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                                </li>


                                <li className="relative pr-3 text-base text-[#93989b]  text-body sm:text-center">
                                    <Link href="/health-and-safety-policy" className="hover:underline">Health and Safety Policy</Link>
                                </li>


                            </ul></div>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a target="_blank" href={settings.fb_url ?? '#'} className="text-body text-[#818c94] hover:text-heading">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" /></svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a target="_blank" href={settings.insta_url ?? '#'} className="text-body text-[#818c94] hover:text-heading ms-5">
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

                            <a target="_blank" href={settings.twitter_url ?? '#'} className="text-body text-[#818c94] hover:text-heading ms-5">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" /></svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a target="_blank" href={settings.youtube_url ?? '#'} className="text-body text-[#818c94] hover:text-heading ms-5">
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

                            <a target="_blank" href={'#'} className="text-body text-[#818c94] hover:text-heading ms-5">
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg> <span className="sr-only">Linkedin</span>
                            </a>



                        </div>
                    </div>
                </div>
            </footer >

            <footer className="bg-[#C43131] py-10 md:py-20 px-5 md:px-10">
                <div className="max-w-[1300px] flex flex-col items-center justify-center mx-auto text-center">
                    <img src="images/logo-footer.svg" alt="" />
                    <p className="text-white text-sm mt-3">A premium travel brand owned by Maximilian Holidays Private Ltd.</p>
                </div>
            </footer>

            {/* footer close */}
        </>
    )
}