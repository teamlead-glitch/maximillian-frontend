"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { title } from "process";


const slides = [
  {
    id: 1,

    title: "Rajasthan",
    desc: "Discover breathtaking destinations and thrilling experiences.",
    image: "/images/destination-img1.jpg",
  },
  {
    id: 2,

    title: "Maldives",
    desc: "Premium journeys designed for comfort and elegance.",
    image: "/images/destination-img2.jpg",
  },
  {
    id: 3,

    title: "Paris",
    desc: "Perfect trips for families to enjoy together.",
    image: "/images/destination-img3.jpg",
  },
  {
    id: 4,

    title: "Dubai",
    desc: "Unforgettable moments for newlyweds.",
    image: "/images/destination-img4.jpg",
  },
  {
    id: 5,

    title: "Greece",
    desc: "Go on a journey of self-discovery.",
    image: "/images/destination-img5.jpg",
  },
  {
    id: 6,

    title: "Kerala",
    desc: "Fun-filled trips with like-minded explorers.",
    image: "/images/destination-img6.jpg",
  },
  {
    id: 7,

    title: "Rajasthanr",
    desc: "Fun-filled trips with like-minded explorers.",
    image: "/images/destination-img1.jpg",
  },
  {
    id: 8,

    title: "Maldives",
    desc: "Fun-filled trips with like-minded explorers.",
    image: "/images/destination-img2.jpg",
  },
  {
    id: 9,

    title: "Paris",
    desc: "Fun-filled trips with like-minded explorers.",
    image: "/images/destination-img3.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Ethan Miller",
    designation: "Product Manager",
    text: "Our private journey with Maximillian Holidays was truly transformative. The cinematic landscapes of Swiss and it’s unhurried, editorial - style pace allowed us to connect deeply with the culture. It felt like a curated story, not a catalogue.",
    avatar: "/images/testi-1.png",
  },
  {
    id: 2,
    name: "Sophia Brown",
    designation: "Product Manager",
    text: "Our private journey with Maximillian Holidays was truly transformative. The cinematic landscapes of Swiss and it’s unhurried, editorial - style pace allowed us to connect deeply with the culture. It felt like a curated story, not a catalogue.",
    avatar: "/images/testi-2.png",
  },
  {
    id: 3,
    name: "Daniel Lee",
    designation: "Product Manager",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    avatar: "/images/testi-3.png",
  },
  {
    id: 4,
    name: "Ethan Miller",
    designation: "Product Manager",
    text: "Our private journey with Maximillian Holidays was truly transformative. The cinematic landscapes of Swiss and it’s unhurried, editorial - style pace allowed us to connect deeply with the culture. It felt like a curated story, not a catalogue.",
    avatar: "/images/testi-1.png",
  },

];



export default function Home() {
  return (




    <>
      <section
        className="relative bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('/images/hero-img.jpg')",
        }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2
             w-full max-w-[1600px]
             flex justify-between py-5 px-5"
        >

          <div className="flex items-center gap-2">
            <img
              src="/images/logo.svg"
              alt="Company Logo"
              className="h-10 w-auto"
            />

          </div>
          <div className="">nav</div>
        </div>
        <div className="max-w-[1300px] mx-auto flex items-end justify-end  py-20  px-5  min-h-screen ">

          {/* Left content */}
          <div className="flex flex-col w-lg">
            <p className="text-white font-light text-end">Curated international travel experiences for discerning explorers. Crafted with care, culture, and character.</p>
            <h1 className="text-4xl text-white md:text-7xl mb-4 font-my-font text-end">
              Journeys Beyond <br />
              The Ordinary
            </h1>


            <div className="flex justify-end gap-4">
              <button className="bg-white/30 backdrop-blur-md text-white 
px-6 py-3 rounded-full font-medium 
shadow-lg
hover:bg-white/40 transition cursor-pointer font-my-font">
                Explore Our Journeys
              </button>
              <button className=" text-white 
px-6 py-3 border border-white/40 rounded-full font-medium 
shadow-lg
hover:bg-white/40 transition cursor-pointer font-my-font">
                Design your trip
              </button>
            </div>
          </div>

          {/* Right image */}


        </div>
      </section >

      {/* about section */}


      <section className="py-20">
        <div className="max-w-[1300px] flex mx-auto  px-5  ">
          <div className="w-[10%]"><img src="images/logo-icon.svg" alt="" /></div>
          <div className="w-[60%]">
            <h2 className=" font-my-font text-4xl text-(--color-secondary) mb-5">Travel, Thoughtfully <br /> Designed.</h2>
            <div className="flex gap-5">
              <div className="w-1/2">
                <p className="text-sm text-(--color-secondary)  mb-4">

                  At Maximillian Holidays, we believe meaningful travel is unhurried, immersive, and deeply personal.</p>
                <p className="text-sm text-(--color-secondary)">We craft small-group and private international journeys that focus on culture, connection, and comfort—moving beyond checklists to create experiences that stay with you long after the journey ends.</p>
              </div>
              <div className="w-1/2"><p className="text-sm text-(--color-secondary)">Our curated approach focuses on specialty journeys from culinary and trekking expeditions to slow travel designed to foster genuine discovery. Through an enquiry-driven user journey and a commitment to cinematic storytelling, we transform international travel into a premium, custom-fit experience tailored specifically to your group size, budget, and season.</p></div>
            </div>
            <button className="flex items-center font-my-font justify-center py-3 cursor-pointer  hover:bg-gray-100 transition">
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

      {/* about section close */}

      {/* signature journey section */}

      <section className="py-20">
        <div className="max-w-[1300px]  mx-auto px-5">
          <div className="flex justify-end items-center w-full gap-8">
            <div className="inline-block">  <h3 className=" font-my-font text-4xl text-(--color-secondary) text-right">Our <br />
              Signature Journeys</h3></div>
            <div className="w-px h-10 bg-gray-300 "></div>
            <div className="w-[200px]"><p className="text-sm text-(--color-secondary) ">A selection of our carefully curated international experiences.</p></div>
            <div className="w-px h-10 bg-gray-300 "></div>
            <div className="inline-block"> <button className="flex items-center font-my-font justify-center py-3 cursor-pointer  ">
              <span className="mr-3">View All Signature Journeys</span>
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
            </button></div>
          </div>
          <div className="w-full flex mt-20 gap-10">
            <div className="w-1/3"><div className="img__box rounded-md relative"><img src="images/signature-journey-1.jpg" className="rounded-md" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
              </div>
              <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                <h3 className="font-my-font text-white text-2xl">Signature Journey</h3>
                <div className="text-white text-xs">
                  <ul className="flex gap-2 mt-1">
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Europe
                    </li>
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Cultural
                    </li>
                    <li className="relative pr-3">
                      Small Group
                    </li>
                  </ul>
                </div>
              </div>
            </div></div>
            <div className="w-1/3"><div className="img__box rounded-md relative"><img src="images/signature-journey-2.jpg" className="rounded-md" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
              </div>
              <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                <h3 className="font-my-font text-white text-2xl">Japan in Quiet Detail</h3>
                <div className="text-white text-xs">
                  <ul className="flex gap-2 mt-1">
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Asia
                    </li>
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Slow Travel
                    </li>

                    <li className="relative pr-3">
                      Private
                    </li>
                  </ul>
                </div>
              </div></div></div>
            <div className="w-1/3"><div className="img__box rounded-md relative"><img src="images/signature-journey-3.jpg" className="rounded-md" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
              </div>
              <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                <h3 className="font-my-font text-white text-2xl">American Landscapes</h3>
                <div className="text-white text-xs">
                  <ul className="flex gap-2 mt-1">
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      USA
                    </li>
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Scenic
                    </li>
                    <li className="relative pr-3">
                      Photography
                    </li>
                  </ul>
                </div>
              </div></div></div>
            <div className="w-1/3"><div className="img__box rounded-md relative"><img src="images/signature-journey-4.jpg" className="rounded-md" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t  rounded-md
                  from-black/80 via-black/40 to-transparent">
              </div>
              <div className="absolute w-full bottom-0 left-0 p-5 flex flex-col items-center">
                <h3 className="font-my-font text-white text-2xl">African Wilderness</h3>
                <div className="text-white text-xs">
                  <ul className="flex gap-2 mt-1">
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Africa
                    </li>
                    <li className="relative pr-3 after:content-['•'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-white">
                      Slow Travel
                    </li>
                    <li className="relative pr-3">
                      Photography
                    </li>
                  </ul>
                </div>
              </div></div></div>
          </div>

        </div>
      </section>
      {/* signature journey section close */}



      {/* experience tour */}
      <section className="py-20">
        <div className="max-w-[1300px]  mx-auto px-5">
          <div className="flex gap-8">
            <div className="w-1/4 relative pr-10"><h3 className=" font-my-font text-4xl text-(--color-secondary) mb-5 text-right">Experience <br /> Tours</h3>  <div className="absolute right-0 top-0  w-px h-10 bg-gray-400 "></div></div>
            <div className="w-3/4">
              <div className="flex w-full gap-10 mb-10">
                <div className="w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon1.svg" alt="" /></div>
                  <h4 className="font-my-font text-2xl">Cultural Journeys</h4>
                  <p className="text-sm text-(--color-secondary)">Immersive experiences rooted in history, art, and local traditions.</p>
                </div>
                <div className="w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon2.svg" alt="" /></div>
                  <h4 className="font-my-font text-2xl">Photography Tours</h4>
                  <p className="text-sm text-(--color-secondary)">Carefully paced journeys designed for visual storytelling.</p>
                </div>
                <div className="w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon3.svg" alt="" /></div>
                  <h4 className="font-my-font text-2xl">Trekking and Outdoors</h4>
                  <p className="text-sm text-(--color-secondary)">Nature-led travel for those who seek landscapes beyond the ordinary.</p>
                </div>

              </div>
              <div className="flex w-full gap-10">
                <div className="w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon1.svg" alt="" /></div>
                  <h4 className="font-my-font text-2xl">Cultural Journeys</h4>
                  <p className="text-sm text-(--color-secondary)">Immersive experiences rooted in history, art, and local traditions.</p>
                </div>
                <div className="w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon2.svg" alt="" /></div>
                  <h4 className="font-my-font text-2xl">Photography Tours</h4>
                  <p className="text-sm text-(--color-secondary)">Carefully paced journeys designed for visual storytelling.</p>
                </div>
                <div className="w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon3.svg" alt="" /></div>
                  <h4 className="font-my-font text-2xl">Trekking and Outdoors</h4>
                  <p className="text-sm text-(--color-secondary)">Nature-led travel for those who seek landscapes beyond the ordinary.</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
      {/* experience tour close */}

      {/* speciality tours */}
      <section className="py-20">
        <div className="max-w-[1300px]  mx-auto px-5">
          <div className="flex gap-8">

            <div className="w-3/4">
              <div className="flex w-full gap-10 mb-10">
                <div className="w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon4.svg" alt="" /></div>
                  <h4 className="font-my-font text-2xl">Ladies-Only Journeys</h4>
                  <p className="text-sm text-(--color-secondary)">Immersive experiences rooted in history, art, and local traditions.</p>
                </div>
                <div className="w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon5.svg" alt="" /></div>
                  <h4 className="font-my-font text-2xl">Family Travel</h4>
                  <p className="text-sm text-(--color-secondary)">Carefully paced journeys designed for visual storytelling.</p>
                </div>
                <div className="w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon6.svg" alt="" /></div>
                  <h4 className="font-my-font text-2xl">Slow Travel Experiences</h4>
                  <p className="text-sm text-(--color-secondary)">Nature-led travel for those who seek landscapes beyond the ordinary.</p>
                </div>

              </div>
              <div className="flex w-full gap-10">
                <div className="w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon4.svg" alt="" /></div>
                  <h4 className="font-my-font text-2xl">Ladies-Only Journeys</h4>
                  <p className="text-sm text-(--color-secondary)">Immersive experiences rooted in history, art, and local traditions.</p>
                </div>
                <div className="w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon5.svg" alt="" /></div>
                  <h4 className="font-my-font text-2xl">Family Travel</h4>
                  <p className="text-sm text-(--color-secondary)">Carefully paced journeys designed for visual storytelling.</p>
                </div>
                <div className="w-1/2 py-3">
                  <div className="pb-5"><img src="images/experience-tour-icon6.svg" alt="" /></div>
                  <h4 className="font-my-font text-2xl">Slow Travel Experiences</h4>
                  <p className="text-sm text-(--color-secondary)">Nature-led travel for those who seek landscapes beyond the ordinary.</p>
                </div>

              </div>

            </div>
            <div className="w-1/4 relative pl-10"><h3 className=" font-my-font text-4xl text-(--color-secondary) mb-5 text-left">Speciality <br /> Tours</h3>  <div className="absolute left-0 top-0  w-px h-10 bg-gray-400 "></div></div>
          </div>
        </div>
      </section >
      {/* speciality tours close */}


      {/* featured destination */}
      <section className="bg-[#F5F2EE] py-20">
        <div className="max-w-[1300px]  mx-auto px-5">
          <div className="flex items-center w-full gap-8">
            <div className="inline-block">  <h3 className=" font-my-font text-4xl text-(--color-secondary) text-right">
              Featured <br />
              Destinations</h3></div>
            <div className="w-px h-10 bg-gray-300 "></div>
            <div className="w-[200px]"><p className="text-sm text-(--color-secondary) ">Check out our carefully curated destination experiences.</p></div>
            <div className="w-px h-10 bg-gray-300 "></div>
            <div className="inline-block"> <button className="flex items-center font-my-font justify-center py-3 cursor-pointer  hover:bg-gray-100 transition">
              <span className="mr-3">View All Destinations</span>
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
            </button></div>
          </div>

        </div>
        <div className="w-full ">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={4.5}
            centeredSlides={true}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              640: { slidesPerView: 2.3 },
              1024: { slidesPerView: 4.5 },
            }}
            className="w-full overflow-visible"
          >
            {slides.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-xl overflow-hidden
  transition-all duration-300 my-15
  hover:shadow-2xl"
                >

                  {/* Image */}
                  <div className="w-full aspect-[3/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="py-5 px-6 text-center relative">
                    <div
                      className="absolute -top-[40px] right-4 z-10
  w-12 h-12 rounded-full
  flex items-center justify-center
  bg-white/20 backdrop-blur-lg
 

  transition-all duration-300
  hover:bg-white/30 hover:scale-105
  cursor-pointer"
                    > <img
                        src="images/arrow.svg"
                        className="w-5 h-5
  transition-all duration-300
  group-hover:rotate-90 group-hover:scale-110"
                      /> </div>
                    <h3 className="text-lg font-semibold mt-1 font-my-font">
                      {item.title}
                    </h3>


                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </section>

      {/* featured destination close */}


      {/* design your trips */}
      <section className="py-40">
        <div className="max-w-[1300px]  mx-auto px-5">
          <div className="flex justify-end items-center w-full gap-8">
            <div className="inline-block">  <h3 className=" font-my-font text-4xl text-(--color-secondary) text-right">Design <br />
              Your Trip</h3></div>
            <div className="w-px h-10 bg-gray-300 "></div>
            <div className="w-[200px]"><p className="text-sm text-(--color-secondary) ">Some journeys can’t be templated. Design a fully personalised journey with us.</p></div>
            <div className="w-px h-10 bg-gray-300 "></div>
            <div className="inline-block"> <button className="flex items-center font-my-font justify-center py-3 cursor-pointer  ">
              <span className="mr-3">Start Designing</span>
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
            </button></div>
          </div>

        </div>
        <div className="max-w-[1300px]  mx-auto px-10 w-full mt-10">
          <img src="images/design-your-trips.svg" alt="" />
        </div>
      </section>

      {/* design your trips close */}

      {/* testimonials */}
      <section className="bg-[#f9f7f5] py-40">
        <div className="  mx-auto px-5">
          <div className="mb-4 mx-auto flex justify-center">
            <img src="images/quote-icon.svg" alt="" />
          </div>
          <div className="w-full py-20">
            <div className="max-w-4xl mx-auto text-center">

              {/* Heading */}


              {/* Slider */}
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={false}   // 👈 no arrows
                loop
                spaceBetween={40}
                autoplay={{
                  delay: 3000,          // 3 seconds per slide
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true, // optional: pause on hover
                }}

                className="testimonial-swiper"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="flex flex-col items-center">
                      <p className="text-3xl text-(--color-secondary)  mb-10 leading-normal">
                        {item.text}
                      </p>

                      <div className="flex items-center gap-20 mb-10">
                        {testimonials.map((u) => (
                          <img
                            key={u.id}
                            src={u.avatar}
                            alt={u.name}
                            className={`w-12 h-12 rounded-full object-cover transition-all
                ${u.id === item.id
                                ? "ring-0  scale-150 grayscale-0 opacity-100"
                                : "opacity-50 grayscale ring-0"
                              }`}
                          />
                        ))}
                      </div>

                      <h4 className="font-grape-nuts text-2xl text-(--color-secondary)">{item.name}</h4>
                      <p className="text-sm text-(--color-secondary)">
                        {item.designation}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="mb-4 mx-auto flex justify-center">
            <div className="inline-block"> <button className="flex items-center font-my-font justify-center py-3 cursor-pointer  ">
              <span className="mr-3">View All Testimonials</span>
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
            </button></div>
          </div>
        </div>
      </section>
      {/* testimonials close */}


      {/* What makes our travel packages exceptional */}


      <section className="py-40">
        <div className="max-w-[1300px] flex items-center gap-8 mx-auto  px-5  ">
          <div className="w-[10%]"><img src="images/logo-icon.svg" alt="" /></div>
          <div className="inline-block]">
            <h2 className=" font-my-font text-4xl text-(--color-secondary) mb-5">What makes our travel <br /> packages exceptional</h2>
            <div className="flex gap-5">
            </div>

          </div>
          <div className="w-px h-10 bg-gray-300 "></div>
          <div className="inline-block"> <button className="flex items-center font-my-font justify-center py-3 cursor-pointer  ">
            <span className="mr-3">Contact Now Us</span>
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
          </button></div>
        </div>

        <div className="max-w-[1300px] flex items-center gap-8 mx-auto mt-10  px-5  ">
          <div className="w-[10%]"></div>
          <div className="w-[90%]">
            <div className="grid  items-center   sm:grid-cols-2 gap-15   lg:grid-cols-4">
              <div className="pb-10">
                <div className="pb-5"><img src="images/package-exception-icon-1.svg" alt="" /></div>

                <p className="text-sm text-(--color-secondary)">Experiences over checklists. Not photo tick-box tourism.</p>
              </div>
              <div className="pb-10">
                <div className="pb-5"><img src="images/package-exception-icon-2.svg" alt="" /></div>

                <p className="text-sm text-(--color-secondary)">Private guides & exclusive access.</p>
              </div>
              <div className="pb-10">
                <div className="pb-5"><img src="images/package-exception-icon-3.svg" alt="" /></div>

                <p className="text-sm text-(--color-secondary)">Handpicked luxury hotels & villas.</p>
              </div>
              <div className="pb-10">
                <div className="pb-5"><img src="images/package-exception-icon-4.svg" alt="" /></div>

                <p className="text-sm text-(--color-secondary)">Flexible itineraries, no rigid schedules.</p>
              </div>
              <div className="pb-10">
                <div className="pb-5"><img src="images/package-exception-icon-5.svg" alt="" /></div>

                <p className="text-sm text-(--color-secondary)">Thoughtful pacing. Space to explore, reflect & connect.</p>
              </div>
              <div className="pb-10">
                <div className="pb-5"><img src="images/package-exception-icon-6.svg" alt="" /></div>

                <p className="text-sm text-(--color-secondary)">Deeper immersion rather than rushed sightseeing.</p>
              </div>
              <div className="pb-10">
                <div className="pb-5"><img src="images/package-exception-icon-7.svg" alt="" /></div>

                <p className="text-sm text-(--color-secondary)">24/7 global concierge support.</p>
              </div>
              <div className="pb-10">
                <div className="pb-5"><img src="images/package-exception-icon-8.svg" alt="" /></div>

                <p className="text-sm text-(--color-secondary)">Discreet, personalised service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What makes our travel packages exceptional close */}


    </>
  );
}