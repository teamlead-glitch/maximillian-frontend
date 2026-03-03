import React, { useState } from 'react'
import { Plus, Minus, Circle } from "lucide-react";
function Faq() {

    const faqs = [
    {
        question: "Is this journey physically demanding?",
        answer: "No. Mountain experiences are cable-car and rail based, with minimal walking."
    },
    {
        question: "Can this journey be customised?",
        answer: "Yes. Duration, hotels, experiences, and meal plans can be tailored.",
    },
    {
        question: "Is this suitable for first-time Europe travellers?",
        answer: "Yes, especially for those who prefer a relaxed, well-planned pace."
    },



];
 const [openIndex, setOpenIndex] = useState<number|null>(null);

    const toggle = (index:number|null) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <>
     <section className=" bg-white py-10 md:py-30  px-5">
                <div className="max-w-[1000px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-center items-start md:items-center w-full gap-4 md:gap-8 py-0 md:py-5 px-5">
                        <div className="inline-block">  <h3 className=" font-my-font-regular text-3xl md:text-4xl text-(--color-secondary) md:text-right">FAQ’s</h3></div>
                        <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
                        <div className="w-full md:w-[200px]"><p>We know you may have concerns. Check our FAQ’s.</p></div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center mt-0 md:mt-10">
                        <div className="w-full md:w-2/3 pr-0 md:pr-15 mb-5 md:mb-0">
                            <div className="max-w-2xl mx-auto space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b  overflow-hidden">

                                        {/* Question */}
                                        <button
                                            onClick={() => toggle(index)}
                                            className="w-full flex justify-between items-center p-4 cursor-pointer"
                                        >
                                            <span className="text-left text-(--color-secondary) font-my-font-semibold">
                                                {faq.question}
                                            </span>

                                            {/* ✅ Plus / Minus Icon */}
                                            {openIndex === index ? (
                                                <Minus size={18} className="text-(--color-secondary)" />
                                            ) : (
                                                <Plus size={18} className="text-(--color-secondary)" />
                                            )}
                                        </button>

                                        {/* Answer */}
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-40 p-4" : "max-h-0"
                                                }`}
                                        >
                                            <p >{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-3/4">
                                <img src="images/euro3-faq.webp" alt="" className="w-full h-full object-cover rounded-md" />
                            </div>
                        </div>
                    </div>


                </div>
            </section>
    
    </>
  )
}

export default Faq