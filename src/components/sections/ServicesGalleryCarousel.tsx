"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const carouselItems = [
    {
        id: 1,
        title: 'Calderería Planta Biogás',
        info: 'Diseño, construcción e instalación',
        image: '/images/services/caldereria-planta-biogas-web-koc.webp',
    },
    {
        id: 2,
        title: 'Reparación de Silos',
        info: 'Proyecto para Hidralia',
        image: '/images/services/reparación-silos-hidralia-web-koc.webp',
    },
    {
        id: 3,
        title: 'Sistema de Bombeo',
        info: 'Bombeo en ETAP',
        image: '/images/services/bombeo-etap-web-koc.webp',
    },
    {
        id: 4,
        title: 'Mezcladora Suelo Radiante',
        info: 'Sistemas avanzados de temperatura',
        image: '/images/services/mezcladora-suelo-radiante-web-koc.webp',
    },
    {
        id: 5,
        title: 'Parque de estanterías en exterior',
        info: 'Fabricación metálica a medida',
        image: '/images/services/fabricación-estanterias-exterior-web-koc.webp',
    },
    {
        id: 6,
        title: 'Fabricación de Silos',
        info: 'Soluciones de almacenamiento',
        image: '/images/services/fabricación-de-silos-web-koc.webp',
    },
    {
        id: 7,
        title: 'Fabricación Rototamiz',
        info: 'Equipos para tratamiento de aguas',
        image: '/images/services/fabricación-rototamiz-web-koc.webp',
    },
    {
        id: 8,
        title: 'Climatización Centro de Salud',
        info: 'Sistemas de alta eficiencia',
        image: '/images/services/climatización-centro-salud-web-koc.webp',
    },
    {
        id: 9,
        title: 'Climatización Centro de Salud',
        info: 'Sistemas de alta eficiencia',
        image: '/images/services/climatizacion-centro-salur-vicar-web-koc.webp',
    },
    {
        id: 10,
        title: 'Acabado Centro de Salud',
        info: 'Instalaciones completas y verificadas',
        image: '/images/services/climatizacion-acabado-centro-salud-web-koc.webp',
    },
];

export function ServicesGalleryCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-16 bg-[#F8F9FA] overflow-hidden">
            <div className="container-custom">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4">
                    <h2 className="text-3xl md:text-5xl font-medium text-primary tracking-tight max-w-lg">
                        Más proyectos <br />
                        <span className="font-semibold">ejecutados</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-sm text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-secondary pl-3 md:pl-0 md:pr-3">
                        Una muestra adicional de intervenciones en fabricación industrial, sistemas hidráulicos, tratamiento de aguas y climatización técnica.
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
                                onClick={() => item.image ? setSelectedImage(item.image) : null}
                            >
                                <div className="absolute inset-0 bg-gray-200 z-0">
                                    {/* If image exists, render it. Otherwise just show gray box */}
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover/card:scale-105 transition-transform duration-700 ease-in-out"
                                            sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 350px"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-4 text-center border-2 border-dashed border-gray-300">
                                            Espacio para foto {item.id}
                                        </div>
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
                            alt="Trabajo ampliado"
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
