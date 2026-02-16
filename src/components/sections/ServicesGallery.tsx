"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Using the project images found in the directory + distinct duplicates to make 6
const galleryImages = [
    { src: "/images/projects/marlenka-magicbox.png", alt: "Proyecto Marlenka" },
    { src: "/images/projects/proyecto-sistema-automatico.png", alt: "Sistema Automático" },
    { src: "/images/projects/targa.png", alt: "Proyecto Targa" },
    { src: "/images/projects/twt.png", alt: "Sistema TWT" },
    { src: "/images/projects/marlenka-magicbox.png", alt: "Detalle Instalación 1" },
    { src: "/images/projects/targa.png", alt: "Detalle Instalación 2" },
];

export function ServicesGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, galleryImages.length - itemsPerView);

    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [itemsPerView, maxIndex, currentIndex]);

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "auto";
    };

    const nextLightbox = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
    }, []);

    const prevLightbox = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;
            if (e.key === "ArrowRight") nextLightbox();
            if (e.key === "ArrowLeft") prevLightbox();
            if (e.key === "Escape") closeLightbox();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen, nextLightbox, prevLightbox]);

    return (
        <section className="section-padding bg-gray-50 border-t border-gray-100 relative overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-secondary font-semibold text-xs tracking-wide uppercase mb-4">
                        Galería
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 font-montserrat mb-4">Nuestro trabajo</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Detalles de nuestras intervenciones técnicas en campo.
                    </p>
                </div>

                <div className="relative group px-0 md:px-12">
                    {/* Desktop Arrows */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={cn(
                            "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-gray-700 hover:text-primary hover:border-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hidden md:flex"
                        )}
                        aria-label="Anterior imagen"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        className={cn(
                            "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-gray-700 hover:text-primary hover:border-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hidden md:flex"
                        )}
                        aria-label="Siguiente imagen"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Mobile Arrows Overlay */}
                    <div className="md:hidden absolute inset-y-0 left-0 flex items-center z-10 pl-2 pointer-events-none">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className="bg-white/90 p-2 rounded-full shadow-md text-gray-800 disabled:opacity-30 pointer-events-auto"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="md:hidden absolute inset-y-0 right-0 flex items-center z-10 pr-2 pointer-events-none">
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex >= maxIndex}
                            className="bg-white/90 p-2 rounded-full shadow-md text-gray-800 disabled:opacity-30 pointer-events-auto"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>


                    <div className="overflow-hidden w-full">
                        <motion.div
                            className="flex"
                            initial={false}
                            animate={{
                                x: `-${currentIndex * (100 / itemsPerView)}%`,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="px-2 md:px-4 box-border relative"
                                    style={{
                                        minWidth: `${100 / itemsPerView}%`,
                                        flex: `0 0 ${100 / itemsPerView}%`,
                                    }}
                                >
                                    <div
                                        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer group/item"
                                        onClick={() => openLightbox(index)}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/item:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/item:opacity-100">
                                            <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 z-[102]"
                            onClick={closeLightbox}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Prev Button */}
                        <button
                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 md:p-6 z-[102]"
                            onClick={prevLightbox}
                        >
                            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
                        </button>

                        {/* Image Container */}
                        <div
                            className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] max-h-[85vh]">
                                <Image
                                    src={galleryImages[lightboxIndex].src}
                                    alt={galleryImages[lightboxIndex].alt}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/90 text-sm md:text-base font-medium bg-black/60 px-6 py-2 rounded-full backdrop-blur-sm pointer-events-none">
                                {galleryImages[lightboxIndex].alt}
                            </div>
                        </div>

                        {/* Next Button */}
                        <button
                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 md:p-6 z-[102]"
                            onClick={nextLightbox}
                        >
                            <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
                        </button>

                        <div className="absolute bottom-6 right-6 text-white/40 text-sm font-mono pointer-events-none">
                            {lightboxIndex + 1} / {galleryImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
