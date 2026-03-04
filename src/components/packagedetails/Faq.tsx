import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "@/types/PackageDetailsType";

interface Faqprops {
  faq?: FAQ[];
  faq_image?: string;
}

function Faq({ faq = [], faq_image }: Faqprops) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Optional: show only active FAQs & sort
  const activeFaqs = faq
    .filter((item) => item.is_active === 1)
    .sort((a, b) => a.sort_order - b.sort_order);

  return (
    <section className="bg-white py-10 md:py-30 px-5">
      <div className="max-w-[1000px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center w-full gap-4 md:gap-8 py-0 md:py-5 px-5">
          <div>
            <h3 className="font-my-font-regular text-3xl md:text-4xl text-(--color-secondary)">
              FAQ’s
            </h3>
          </div>
          <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
          <div className="w-full md:w-[200px]">
            <p>We know you may have concerns. Check our FAQ’s.</p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center mt-0 md:mt-10">

          {/* FAQ List */}
          <div className="w-full md:w-2/3 pr-0 md:pr-15 mb-5 md:mb-0">
            <div className="max-w-2xl mx-auto space-y-4">

              {activeFaqs.map((item, index) => (
                <div key={item.id} className="border-b overflow-hidden">

                  {/* Question */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center p-4 cursor-pointer"
                  >
                    <span className="text-left text-(--color-secondary) font-my-font-semibold">
                      {item.question}
                    </span>

                    {openIndex === index ? (
                      <Minus size={18} className="text-(--color-secondary)" />
                    ) : (
                      <Plus size={18} className="text-(--color-secondary)" />
                    )}
                  </button>

                  {/* Answer (HTML from backend) */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? "max-h-40 p-4" : "max-h-0"
                    }`}
                  >
                    <div
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* FAQ Image */}
          <div className="w-full md:w-1/3">
            <div className="aspect-3/4">
              <img
                src={faq_image || "/images/euro3-faq.webp"}
                alt="FAQ"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Faq;