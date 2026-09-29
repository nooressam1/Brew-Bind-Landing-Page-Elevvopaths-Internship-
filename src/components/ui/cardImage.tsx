import Image from "next/image";

interface CardImageProps {
    imageSrc: string;
    imageAlt?: string;
    number: string;
    title: string;
    className?: string;
    rotation?: string;
    textPosition?: "top" | "bottom";
}

export default function CardImage({
    imageSrc,
    imageAlt = "Feature card photo",
    number,
    title,
    className = "",
    rotation = "-rotate-2",
    textPosition = "bottom",
}: CardImageProps) {
    const isTop = textPosition === "top";

    const textContent = (
        <div className={`flex flex-col ${isTop ? "mb-2" : "mt-2"}`}>
            {/* Number */}
            <span className="font-goudy text-sm text-DarkBrown/70 pl-0.5">
                {number}
            </span>

            {/* Title */}
            <h3 className="text-center font-goudy text-lg sm:text-md text-DarkBrown tracking-wide mt-1">
                {title}
            </h3>
        </div>
    );

    return (
        <div
            className={`group relative bg-Cream w-[280px] sm:w-[250px] p-2 ${isTop ? "pt-6 pb-4" : "pb- pt-4"
                } rounded-xs shadow-2xl shadow-[0_25px_30px_-5px_rgba(0,0,0,0.2)] border border-DarkBrown/10 transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_25px_30px_-5px_rgba(0,0,0,0.2)] ${rotation} ${className}`}
        >
            {/* Render text on top if textPosition="top" */}
            {isTop && textContent}

            {/* Photo frame with fine dark border */}
            <div className="relative w-full aspect-[3.5/5] overflow-hidden border border-DarkBrown/30 shadow-inner">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 250px, 280px"
                    quality={75}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Render text on bottom if textPosition="bottom" */}
            {!isTop && textContent}
        </div>
    );
}


