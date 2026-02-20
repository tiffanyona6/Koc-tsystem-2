"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const carouselItems = [
    {
        id: 1,
        title: 'Montaje de Fachada',
        info: 'Mercadona',
        image: '/images/carousel/montaje-fachada-mercadona-web-koc.webp'
    },
    {
        id: 2,
        title: 'Decantador EDAR',
        info: 'Estación Depuradora de Aguas Residuales',
        image: '/images/carousel/decantador-edar-web-koc.webp'
    },
    {
        id: 3,
        title: 'Reactor Biológico',
        info: 'Tratamiento de Aguas',
        image: '/images/carousel/reactor-biológico-web-koc.webp'
    },
    {
        id: 4,
        title: 'Unidades Exteriores VRV',
        info: 'Climatización Industrial',
        image: '/images/carousel/unidades-exteriores-vrv-web-koc.webp'
    },
    {
        id: 5,
        title: 'Calderería Desaladora',
        info: 'Sistema en Alta',
        image: '/images/carousel/caldereria-desaladora-web-koc.webp'
    },
    {
        id: 6,
        title: 'Cabinas Aislamiento Acústico',
        info: 'Proyecto Smurfit Kappa',
        image: '/images/carousel/cabinas-aislamiento-acústico-smurfit kappa-web-koc.webp'
    },
    {
        id: 7,
        title: 'Sala de válvulas',
        info: 'Pozo de bombeo',
        image: '/images/carousel/edar-web-koc.webp'
    },
    {
        id: 8,
        title: 'Fabricación e Instalación de Reactor',
        info: 'Sistemas Biológicos Avanzados',
        image: '/images/carousel/fabricacion-instalacion-reactor-web-koc.webp'
    },
    {
        id: 9,
        title: 'Sistema de Bombeo EDAR',
        info: 'Redes de distribución de fluidos',
        image: '/images/carousel/bombeo-edar-web-koc.webp'
    },
];

export function HomeGalleryCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container-custom">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4">
                    <h2 className="text-3xl md:text-5xl font-medium text-primary tracking-tight max-w-lg">
                        Catálogo de nuestros <br />
                        <span className="font-semibold">servicios destacados</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-sm text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-secondary pl-3 md:pl-0 md:pr-3">
                        Última tecnología en ingeniería energética y gestión hídrica para el sector industrial.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative group">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        <style jsx>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>

                        {carouselItems.map((item) => (
                            <div
                                key={item.id}
                                className="relative flex-none w-[280px] md:w-[320px] lg:w-[350px] aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden snap-start group/card shadow-sm hover:shadow-xl transition-all duration-300 md:cursor-pointer"
                                onClick={() => setSelectedImage(item.image)}
                            >
                                <div className="absolute inset-0 bg-gray-200 z-0">
                                    {/* Using fallback background color in case image doesn't load immediately */}
                                    {item.image && (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover/card:scale-105 transition-transform duration-700 ease-in-out"
                                            sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 350px"
                                        />
                                    )}
                                </div>

                                {/* Gradient Overlay for Text Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                                {/* Card Content at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20">
                                    <h3 className="text-white text-lg md:text-xl font-medium mb-1 drop-shadow-md">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-200 text-sm md:text-base drop-shadow-md">
                                        {item.info}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows for Desktop */}
                    <button
                        onClick={() => scroll("left")}
                        className="hidden md:flex absolute -left-6 top-[calc(50%-30px)] -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] border border-gray-100 items-center justify-center text-primary/70 hover:text-primary hover:scale-110 z-10 transition-all duration-300"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-7 h-7" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="hidden md:flex absolute -right-6 top-[calc(50%-30px)] -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] border border-gray-100 items-center justify-center text-primary/70 hover:text-primary hover:scale-110 z-10 transition-all duration-300"
                        aria-label="Siguiente"
                    >
                        <ChevronRight className="w-7 h-7" />
                    </button>
                </div>

            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8 md:w-10 md:h-10" />
                    </button>
                    <div
                        className="relative w-full max-w-5xl aspect-square md:aspect-auto md:h-[85vh] rounded-xl overflow-hidden cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Servicio ampliado"
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
