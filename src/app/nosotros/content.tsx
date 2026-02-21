"use client";

import Image from "next/image";
import { Handshake, Lightbulb, Leaf } from "lucide-react";
import { AboutImageGallery } from "@/components/ui/AboutImageGallery";
import { ClientsCarousel } from "@/components/sections/ClientsCarousel";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-poppins text-gray-800 overflow-x-hidden">

            {/* 1. HERO SECTION - Consistent Design (Matching Projects Page) */}
            <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-white to-blue-50">
                {/* Lateral Graphic Element */}
                <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-full bg-[#384C9C]/5 skew-x-12 transform origin-top-right pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-[0.2em] mb-0">
                            Sobre Nosotros
                        </h1>
                    </div>
                </div>
            </section>

            {/* 2. PRESENTATION BLOCK - "Modern Engineering" */}
            {/* 2. PRESENTATION BLOCK - "Modern Engineering" */}
            {/* 2. PRESENTATION BLOCK - "Modern Engineering" */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Left Column - Content */}
                        <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight font-montserrat">
                                    Cómo intervenimos en la industria
                                </h2>
                                <div className="w-14 h-0.5 bg-primary mt-4 mb-6"></div>
                            </div>

                            <div className="text-lg text-gray-800 leading-relaxed space-y-6 text-left">
                                <p>
                                    Koc Technical System es una firma de ingeniería aplicada que interviene directamente en procesos industriales donde la eficiencia es determinante.
                                </p>
                                <p>
                                    Analizamos y mejoramos sistemas energéticos, térmicos e hídricos desde el estudio técnico inicial hasta la implantación completa, desarrollando soluciones llave en mano adaptadas a cada instalación.
                                </p>
                                <p>
                                    Nuestro trabajo se traduce en mejoras verificables y ahorros reales, que convertimos en Certificados de Ahorro Energético (CAE), garantizando un retorno económico tangible para nuestros clientes.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Image Gallery */}
                        <div className="order-1 lg:order-2 w-[calc(100%+2rem)] -ml-4 sm:w-full sm:ml-0 lg:w-full mt-0 lg:mt-0">
                            <AboutImageGallery />
                        </div>
                    </div>
                </div>
            </section>


            {/* 3. MÉTRICAS - Bold Blue Band (Smaller & Bottom) */}
            <section className="bg-primary text-white py-10 md:py-12 relative overflow-hidden">
                {/* Abstract background shapes */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                    </svg>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:divide-x md:divide-white/20 text-center">
                        {[
                            { number: "+26", label: "AÑOS DE EXPERIENCIA", detail: "En el sector industrial" },
                            { number: "+100", label: "PARTNERS ACTIVOS", detail: "Clientes recurrentes" },
                            { number: "+200", label: "PROYECTOS ENTREGADOS", detail: "Llave en mano" }
                        ].map((metric, index, array) => (
                            <div key={index} className="flex flex-col items-center px-4 relative">
                                <span className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">{metric.number}</span>
                                <span className="text-base font-semibold text-blue-100 uppercase tracking-wider mb-1">{metric.label}</span>
                                <span className="text-sm text-blue-200/80 font-light">{metric.detail}</span>

                                {/* Mobile Divider (60% width, centered) - Not for last item */}
                                {index !== array.length - 1 && (
                                    <div className="absolute -bottom-5 w-[60%] h-px bg-white/20 md:hidden"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. MISSION & VISION - Clean Left Aligned */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Mission Card */}
                        <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left group">
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 mb-4 md:mb-6 w-full">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
                                    <Handshake className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-montserrat md:mt-6">Misión</h3>
                            </div>
                            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                                Optimizar energía, agua y temperatura en procesos industriales, convirtiendo la eficiencia en ahorro monetizable (CAE).
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left group">
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 mb-4 md:mb-6 w-full">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                                    <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-montserrat md:mt-6">Visión</h3>
                            </div>
                            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                                Ser referente técnico en eficiencia industrial transformada en valor económico sostenible.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. CLIENTS CAROUSEL */}
            <ClientsCarousel />

        </main >
    );
}
