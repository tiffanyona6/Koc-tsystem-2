"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
    {
        src: "/images/about/sobrenosotros-web-koc.webp",
        alt: "Equipo KOC en instalaciones industriales",
    },
    {
        src: "/images/about/montaje-silos-web-koc.webp",
        alt: "Montaje de silos",
    },
    {
        src: "/images/about/equipo-trabajo-web-koc.webp",
        alt: "Equipo KOC de trabajo en acción",
    }
];

export function AboutImageGallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Update active index on scroll
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollPosition = container.scrollLeft;
            const itemWidth = container.offsetWidth;
            const index = Math.round(scrollPosition / itemWidth);
            setActiveIndex(index);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (index: number) => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollTo({
                left: container.offsetWidth * index,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="w-full relative">
            {/* DESKTOP LAYOUT (Hidden on mobile) */}
            <div className="hidden lg:block relative h-[600px] w-full">
                {/* Image 1: Main Vertical - Left */}
                <div className="absolute top-0 left-0 w-[55%] h-[85%] rounded-[20px] overflow-hidden shadow-lg z-10 transform transition-transform duration-700 hover:scale-[1.01]">
                    <Image
                        src={images[0].src}
                        alt={images[0].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>

                {/* Image 2: Secondary Vertical - Right Offset */}
                <div className="absolute top-12 right-0 w-[40%] h-[60%] rounded-[20px] overflow-hidden shadow-lg z-0 transform transition-transform duration-700 hover:scale-[1.01]">
                    <Image
                        src={images[1].src}
                        alt={images[1].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                </div>

                {/* Image 3: Small Horizontal - Bottom Overlap */}
                <div className="absolute bottom-4 right-[2%] w-[50%] h-[35%] rounded-[20px] overflow-hidden shadow-xl border-4 border-white z-20 transform transition-transform duration-700 hover:scale-[1.03]">
                    <Image
                        src={images[2].src}
                        alt={images[2].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                </div>
            </div>

            {/* MOBILE LAYOUT (Slider) */}
            <div className="lg:hidden w-full space-y-4">
                <div
                    ref={scrollContainerRef}
                    className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-none"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="min-w-full flex-shrink-0 snap-center relative aspect-[4/3] rounded-none sm:rounded-2xl overflow-hidden shadow-sm"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                sizes="90vw"
                            />
                        </div>
                    ))}
                </div>

                {/* Dots Indicators */}
                <div className="flex justify-center gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)} // This might not work perfectly without manual math, but scroll snap handles rest
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                activeIndex === index
                                    ? "bg-primary w-8"
                                    : "bg-gray-200 w-2 hover:bg-gray-300"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
