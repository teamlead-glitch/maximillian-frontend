import { Itinerary } from '@/types/PackageDetailsType';
import Image from 'next/image';
import React from 'react'
interface DaywiseCardProps {
  day: Itinerary;
}
function DaywiseCard({ day }: DaywiseCardProps) {

   const card_image=day?.image ?? "";
   const days=day?.day??"";
   const title=day?.title??"";
   const description=day?.description??"";
    return (
        <>
            <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                    <h5 className="text-(--color-secondary) text-small">Day {days}</h5>
                    <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) relative pb-2">
                        {title}

                    </h3>
                     <div className="content" dangerouslySetInnerHTML={{ __html:description }}>

                        </div>
                    <ul className="w-full align-center flex flex-wrap gap-4">
                        <li className="flex items-center gap-1 ">
                            <img src="/images/hand_meal.png" alt="" className="w-5 h-5 " />
                            <span className="text-(--color-secondary) text-sm md:text-base">Airport transfer</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <img src="/images/bed.png" alt="" className="w-5 h-5" />
                            <span className="text-(--color-secondary) text-sm md:text-base">Hotel check-in assistance
                            </span>
                        </li>

                    </ul>
                </div>
                <div className="w-full md:w-2/5">
                    <div className="aspect-4/3 relative">
                        {day.image && (
                        <Image
                            src={day.image}
                            alt={title}
                            fill
                            className="object-cover rounded-lg"
                        />
                        )}
                    </div>
                </div>
            </div>
            <div className="py-5 md:py-10 w-full"><hr /> </div>





        </>
    )
}

export default DaywiseCard