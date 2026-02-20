"use client";

import { ServicesGridCarousel } from "@/components/ui/ServicesGridCarousel";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";

const galleryImages = [
    { src: "/images/projects/proyecto-marleka-magicbox-web-koc.webp", alt: "Proyecto Marlenka y Magic Box" },
    { src: "/images/projects/proyecto-sistema automatico-web-koc.webp", alt: "Sistema Automático de Atemperado" },
    { src: "/images/projects/proyecto-targa-web-koc.webp", alt: "Proyecto Targa MG" },
    { src: "/images/projects/proyecto-twt-web-koc.webp", alt: "Sistema TWT - Agua 4.0" },
    { src: "/images/projects/proyecto-marleka-magicbox-web-koc.webp", alt: "Detalle Instalación Industrial" },
    { src: "/images/projects/proyecto-targa-web-koc.webp", alt: "Tecnología de Nebulización" },
];

export function ServicesGallery() {
    return (
        <section className="section-padding bg-gray-50 border-t border-gray-100 relative overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-secondary font-semibold text-xs tracking-wide uppercase mb-4">
                        Galería
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-montserrat mb-6">Nuestro trabajo</h2>
                    <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
                        Detalles de nuestras intervenciones técnicas en campo.
                    </p>
                </div>

                {/* Mobile View: Original Carousel */}
                <div className="block md:hidden max-w-5xl mx-auto">
                    <ProjectCarousel
                        images={galleryImages}
                        className="w-full h-auto aspect-[4/5] shadow-xl rounded-2xl"
                    />
                </div>

                {/* Desktop View: Grid Carousel */}
                <div className="hidden md:block max-w-6xl mx-auto relative px-12">
                    <ServicesGridCarousel images={galleryImages} />
                </div>
            </div>
        </section>
    );
}

