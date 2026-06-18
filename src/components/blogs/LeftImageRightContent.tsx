"use client";
import Image from "next/image";

type LeftRightContentProps = {
    description: string;
    image: string;
    overviewImageSizePx?: number | string | null;
};

const getImageMaxWidth = (overviewImageSizePx?: number | string | null) => {
    const size = Number.parseInt(String(overviewImageSizePx ?? ""), 10);

    return Number.isFinite(size) && size > 0 ? `${size}px` : "300px";
};

export default function LeftRightContent({ description, image, overviewImageSizePx }: LeftRightContentProps) {
    const imageMaxWidth = getImageMaxWidth(overviewImageSizePx);


    return (
        <section className="bg-white ">
            <div className="w-full">

                {image && <div className="float-none md:float-left w-full aspect-square mx-auto md:mx-0 md:mr-20 mt-1 md:mt-0 mb-12 md:mb-10 relative" style={{ maxWidth: imageMaxWidth }}>
                    <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover rounded-lg"
                    />


                </div>}

                <div className="space-y-4 text-justify">
                    <div
                        className="content" dangerouslySetInnerHTML={{ __html: description }}>


                    </div>


                </div>

            </div>
        </section>
    );
}
