import React from 'react'

function DaywiseCard() {
    return (
        <>
            <div className="w-full flex flex-col md:flex-row  align-center justify-between">
                <div className="w-full md:w-3/5 mb-4 md:mb-0 flex align-center justify-center flex-col gap-4 pr-4">
                    <h5 className="text-(--color-secondary) text-small">Day 1:</h5>
                    <h3 className="font-my-font-semibold  xl:text-2xl text-xl text-(--color-secondary) relative pb-2">
                        Arrival in Munich

                    </h3>
                    <p>Arrive in Munich and transfer to your hotel. After check-in, the day is kept intentionally light, allowing you to settle in and recover from your journey. Depending on arrival time, you may enjoy a short neighbourhood walk or a relaxed dinner nearby.
                    </p>
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
                    <div className="aspect-4/3">
                        <img src="/images/euro3-day1.webp" alt="" className="w-full h-full object-cover rounded-lg" /></div></div>
            </div>
            <div className="py-5 md:py-10 w-full"><hr /> </div>





        </>
    )
}

export default DaywiseCard