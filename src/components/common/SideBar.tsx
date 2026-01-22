import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
  "Home",
  "Destinations",
  "Design Your Trip",
  "Our World",
  "Contact Us",
];


export default function SideBar() {

  const [sideOpen, setSideOpen] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    if (sideOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideOpen]);

  return (
    <>

      {/* Hamburger */}
      <button className="cursor-pointer" onClick={() => setSideOpen(true)}>
        <img src="/images/hamburg-menu.svg" alt="" />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setSideOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
        ${sideOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] sm:w-[300px] bg-white z-[1000]
        transform transition-transform duration-300 ease-in-out
        overflow-y-auto
        ${sideOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="p-6 flex justify-end">
          <button
            onClick={() => setSideOpen(false)}
            className="text-xl cursor-pointer"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-6 space-y-4 text-sm flex flex-col">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`
                relative inline-block
                font-my-font-semibold text-lg
                transition-colors duration-300
                ${pathname === item
                  ? "text-[#C43131]"
                  : "text-(--color-secondary)"
                }
                hover:text-[#C43131]

                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px]
                after:bg-[#C43131]
                after:transition-all after:duration-300
                ${pathname === item ? "after:w-[40px]" : "after:w-0"}
                hover:after:w-[40px]
              `}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="absolute left-0 bottom-20 px-6 py-5">
          <ul className="text-body font-medium">
            <li className="mb-4 flex items-center gap-3 font-my-font-regular text-(--color-secondary)">
              <img src="/images/call-icon.svg" alt="Phone" className="w-5 h-5" />
              <a href="tel:+919998868866">+91 999 886 8866</a>
            </li>

            <li className="mb-4 flex items-center gap-3 font-my-font-regular text-(--color-secondary)">
              <img
                src="/images/whatsapp-icon.svg"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              <a href="https://wa.me/919998868866">+91 999 886 8866</a>
            </li>

            <li className="flex items-center gap-3 font-my-font-regular text-(--color-secondary)">
              <img src="/images/mail-icon.svg" alt="Email" className="w-5 h-5" />
              <a href="mailto:hello@maximilianholidays.com">
                hello@maximilianholidays.com
              </a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="absolute right-0 bottom-0">
          <img src="/images/logo-icon.svg" alt="Logo" />
        </div>
      </div>
    </>
  );
}
