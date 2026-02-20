"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Wind, ShieldCheck, Zap, Activity, Clock, Sliders, CheckCircle2, FileText, Settings, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function TargaPage() {
    // Default open on desktop is handled via CSS (lg:h-auto), but for mobile we default to closed (false)
    const [isSpecsOpen, setIsSpecsOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white font-poppins text-gray-800 overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gray-50">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-blue-50/50 to-transparent skew-x-[-12deg] origin-top opacity-60 pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Text Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="w-full lg:w-1/2 relative z-20"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm text-primary font-semibold text-xs tracking-wide uppercase mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Modelo KOC12-25
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-montserrat tracking-tight mb-6">
                                <span className="text-primary">TARGA</span> KOC
                            </h1>

                            <h2 className="text-xl md:text-2xl text-secondary font-medium mb-6 max-w-xl">
                                Sistema de desinfección ambiental por nebulización ultrasónica
                            </h2>

                            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                                <strong className="text-primary block mb-2">Producto Estándar KOC.</strong>
                                Targa KOC es una solución propia nacida de la innovación interna para la higienización masiva. Gracias a su tecnología de <strong>atomización ultrasónica</strong>, garantiza una cobertura total en todas las superficies de la estancia, realizando un ciclo automático de nebulización, desinfección y posterior filtrado del aire.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link href="/contacto">
                                    <Button size="lg" className="w-full sm:w-auto bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl text-lg px-8">
                                        Solicitar cotización
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Visual Content - Carousel */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end lg:h-[500px]"
                        >
                            <ProjectCarousel
                                images={[
                                    { src: "/images/projects/proyecto-targa-web-koc.webp", alt: "Sistema Targa KOC" },
                                    { src: "/images/projects/proyecto-targa-web-koc.webp", alt: "Detalle de nebulización" },
                                    { src: "/images/projects/proyecto-targa-web-koc.webp", alt: "Vista lateral Targa" }
                                ]}
                                className="w-full h-full"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 2. PROCESO AUTOMÁTICO */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 mb-6 font-montserrat">
                            Proceso Automático de Desinfección
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ciclo completo sin intervención manual. Targa KOC filtra y renueva el aire tras el tratamiento, haciendo segura la entrada de personas en pocos minutos.
                        </p>
                    </motion.div>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-blue-100 -z-10" />

                        {[
                            {
                                step: "01",
                                title: "Nebulización Ultrasónica",
                                desc: "Generación de micro-gotas (niebla seca) que saturan el ambiente y alcanzan zonas inaccesibles sin mojar superficies.",
                                icon: Wind
                            },
                            {
                                step: "02",
                                title: "Desinfección Profunda",
                                desc: "El agente desinfectante actúa sobre todas las superficies expuestas y el aire, eliminando patógenos de forma efectiva.",
                                icon: ShieldCheck
                            },
                            {
                                step: "03",
                                title: "Filtrado y Renovación",
                                desc: "Tras el ciclo, el sistema filtra el aire del interior, eliminando residuos y permitiendo el reingreso inmediato.",
                                icon: CheckCircle2
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } }
                                }}
                                className="flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-6 relative">
                                    <item.icon className="w-10 h-10" />
                                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                                        {item.step}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. FICHA TÉCNICA E HIGHLIGHTS */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Highlights */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
                                Flexible, Eficaz y De Rápida Operación
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Su diseño ergonómico y compacto permite adaptar su uso a cualquier estancia, desde oficinas y aulas hasta laboratorios y zonas médicas.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Atomización Ultrasónica", desc: "Máxima dispersión con mínimo consumo de producto." },
                                    { title: "Tiempo Reducido", desc: "Operatividad rápida gracias a su potente sistema de filtrado post-ciclo." },
                                    { title: "Automatización Total", desc: "Programable y autónomo para minimizar riesgos laborales." },
                                    { title: "Seguridad Certificada", desc: "Diseñado para entornos con altos estándares de higiene." }
                                ].map((feature, index) => (
                                    <motion.div key={index} variants={fadeInUp} className="flex gap-4">
                                        <div className="mt-1 w-12 h-12 bg-white rounded-lg border border-gray-100 flex items-center justify-center shrink-0 text-primary shadow-sm">
                                            {index === 0 && <Activity className="w-6 h-6" />}
                                            {index === 1 && <Clock className="w-6 h-6" />}
                                            {index === 2 && <Settings className="w-6 h-6" />}
                                            {index === 3 && <ShieldCheck className="w-6 h-6" />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{feature.title}</h3>
                                            <p className="text-gray-600 text-sm">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Technical Specs Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16" />

                            <button
                                onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                                className="w-full flex items-center justify-between text-xl font-bold text-gray-900 mb-2 lg:mb-8 group lg:pointer-events-none lg:cursor-default"
                            >
                                <div className="flex items-center gap-4 text-left">
                                    <FileText className="w-7 h-7 text-primary shrink-0" />
                                    <span>Especificaciones Técnicas</span>
                                </div>
                                <div className={`p-2 rounded-full bg-gray-50 text-primary transition-transform duration-300 lg:hidden ${isSpecsOpen ? 'rotate-180' : ''}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: isSpecsOpen ? "auto" : 0, opacity: isSpecsOpen ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden lg:!h-auto lg:!opacity-100 block"
                            >
                                <div className="space-y-0">
                                    <div className="flex justify-between items-center pb-4 pt-2 border-b border-gray-100">
                                        <span className="text-gray-500 font-medium">Modelo</span>
                                        <span className="text-gray-900 font-bold font-mono">KOC12-25</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-500 font-medium">Tensión</span>
                                        <span className="text-gray-900 font-bold font-mono">230 V</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-500 font-medium">Potencia total</span>
                                        <span className="text-gray-900 font-bold font-mono">493 W</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                        <span className="text-gray-500 font-medium">Peso</span>
                                        <span className="text-gray-900 font-bold font-mono">65 kg</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4">
                                        <span className="text-gray-500 font-medium">Tecnología</span>
                                        <span className="text-primary font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">Nebulización Ultrasónica</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-50 text-center">
                                    <p className="text-xs text-gray-400">
                                        * Especificaciones sujetas a cambios por mejoras técnicas.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="section-padding bg-primary text-white text-center relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-[42px] font-bold mb-4 font-montserrat">
                            Asegure sus instalaciones hoy
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Targa KOC es el sistema de desinfección más completo del mercado. Proteja a su personal y clientes con tecnología de vanguardia.
                        </p>

                        <Link href="/contacto">
                            <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 h-auto shadow-xl font-bold">
                                Contactar
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}
