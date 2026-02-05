"use client";

import { PageResponse } from "@/types/pagesTypes";
import NotFound from "../not-found";


export default function DynamicPageClient({
  page
}: {
  page: PageResponse 
}) {
  


  


  if (!page) {
    return <NotFound />; // ✅ NO redirect, default UI
  }

  return (
    <>


     {/* HEADER */}
            <section
                className="relative py-40 bg-black bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/inner-bg.jpg')",
                }}
            >
                {/* overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                <h1 className="relative z-10 text-center text-white text-4xl font-my-font-semibold">
                    {page?.title}
                </h1>
            </section>



            {/* CONTENT */}
            <section className="relative py-20 bg-white ">

               <div
            className="max-w-[1300px] mx-auto px-5 space-y-3 description-content"
            style={{ minHeight: "150px" }}
            dangerouslySetInnerHTML={{ __html: page?.content ?? '' }}
          />
        
               
            </section >
     




     


    </>
  );
}
