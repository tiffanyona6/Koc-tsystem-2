"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Thermometer, Factory, Activity, Sliders, CheckCircle2, FileText, ShieldCheck, Flame, Zap, ChevronDown } from "lucide-react";
import Link from "next/link";
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

export default function AtemperadoPage() {
    const [isSpecsOpen, setIsSpecsOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white font-poppins text-gray-800 overflow-x-hidden">

            {/* ENCABEZADO PROYECTOS REALIZADOS */}
            <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
                {/* Lateral Graphic Element */}
                <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-full bg-[#384C9C]/5 skew-x-12 transform origin-top-right pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-[0.2em] mb-0">
                            Proyectos Realizados
                        </h1>
                    </div>
                </div>
            </section>

            {/* 1. HERO SECTION */}
            <section className="relative py-12 lg:py-16 overflow-hidden bg-gray-50">
                {/* Background Decor - Blue Gradient */}
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-blue-50/50 to-transparent skew-x-[-12deg] origin-top opacity-60 pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Text Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="w-full lg:w-1/2 relative z-20 order-2 lg:order-1 mt-4 lg:mt-0"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm text-primary font-semibold text-xs tracking-wide uppercase mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Eficiencia y Seguridad
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight font-montserrat tracking-tight mb-6">
                                Atemperado Automático <span className="text-primary">de Fluidos</span>
                            </h1>

                            <h2 className="text-xl md:text-2xl text-secondary font-medium mb-6 max-w-xl">
                                Control térmico para industria ATEX y química
                            </h2>

                            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                                <strong className="text-primary block mb-2">Proyecto a Medida (Bajo Encargo).</strong>
                                Un sistema diseñado bajo demanda para necesidades específicas. Complementa tecnologías de aerotermia garantizando estabilidad y seguridad en plantas químicas e industriales.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link href="/contacto">
                                    <Button size="lg" className="w-full sm:w-auto bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl text-lg px-8">
                                        Solicitar especificaciones
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
                            className="w-[calc(100%+2rem)] -ml-4 sm:w-full sm:ml-0 lg:w-1/2 relative flex items-center justify-center lg:justify-end lg:h-[500px] order-1 lg:order-2 mb-2 lg:mb-0"
                        >
                            <ProjectCarousel
                                images={[
                                    { src: "/images/projects/proyecto-sistema automatico-web-koc.webp", alt: "Sistema de atemperado de fluidos" },
                                    { src: "/images/projects/-sistema-automatico-atemperado-proyecto-web-koc.webp", alt: "Detalle del sistema automático" },
                                    { src: "/images/projects/proyecto-sistema-automatico-atemperado-web-koc.webp", alt: "Instalación de atemperado automático" }
                                ]}
                                className="w-full !aspect-[4/3] md:!aspect-[4/5] lg:!aspect-auto lg:h-full"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 2. SECURITY & EFFICIENCY */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
                                Seguridad en entornos críticos
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                El sistema prioriza la seguridad mediante la utilización de <strong>agua caliente</strong> en lugar de energía eléctrica directa o combustibles, convirtiéndolo en la opción más fiable para el tratamiento de productos químicos inflamables y su empleabilidad en <strong>zonas ATEX</strong>.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Funcionamiento inteligente</h3>
                            <p className="text-gray-600 mb-8">
                                Nuestro software, diseñado por la división de <strong>KOC TECHNICAL SYSTEM</strong>, controla el proceso de forma integrada, manteniendo constante la temperatura asignada y permitiendo la supervisión global de estados en la fábrica.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    { text: "Ciclo reversible dinámico (calentar y enfriar).", icon: Activity },
                                    { text: "Apto para zonas ATEX (Atmósferas Explosivas).", icon: ShieldCheck },
                                    { text: "Integración global en el proceso de fábrica.", icon: Factory },
                                    { text: "Eliminación de riesgos eléctricos directos.", icon: Zap }
                                ].map((item, index) => (
                                    <motion.li key={index} variants={fadeInUp} className="flex items-start gap-3">
                                        <div className="mt-1 p-1 bg-blue-50 rounded text-primary">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-gray-700 text-base font-medium">{item.text}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Specs Card - Blue Theme */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-blue-50/50 p-8 md:p-10 rounded-3xl border border-blue-100"
                        >
                            <button
                                onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                                className="w-full flex items-center justify-between text-lg font-bold text-gray-900 mb-2 lg:mb-6 group lg:pointer-events-none lg:cursor-default"
                            >
                                <div className="flex items-center gap-3 text-left">
                                    <FileText className="w-6 h-6 text-primary shrink-0" />
                                    <span>Ficha Técnica: Serie KOC</span>
                                </div>
                                <div className={`p-2 rounded-full bg-white text-primary transition-transform duration-300 lg:hidden ${isSpecsOpen ? 'rotate-180' : ''}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: isSpecsOpen ? "auto" : 0, opacity: isSpecsOpen ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden lg:!h-auto lg:!opacity-100 block"
                            >
                                <div className="space-y-4 text-sm font-poppins pt-2 lg:pt-0">
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Modelos</span>
                                        <span className="text-gray-900 font-bold text-right">KOC 200 / 300 / 500</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Rango Temperaturas</span>
                                        <span className="text-gray-900 font-bold text-right">25°C - 90°C</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Software Control</span>
                                        <span className="text-gray-900 font-bold text-right">KOC SYSTEM 4.0</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Sist. Control Temp.</span>
                                        <span className="text-gray-900 font-bold text-right">AEROTERMIA</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Dimensiones</span>
                                        <span className="text-gray-900 font-bold text-right">2500 x 1200 x 2400 mm</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                        <span className="text-gray-600 font-medium">Peso Total*</span>
                                        <span className="text-gray-900 font-bold text-right">800 kg (Modelo KOC 300)</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 3. HIGHLIGHTS GRID */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-[42px] font-bold mb-4 font-montserrat text-primary">
                            Tecnología de Última Generación
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Diseñado para complementar la producción de agua caliente por aerotermia, maximizando la eficiencia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Eficiencia Energética",
                                desc: "Integración con Aerotermia para reducir drásticamente el consumo eléctrico respecto a resistencias tradicionales.",
                                icon: Zap
                            },
                            {
                                title: "Seguridad ATEX",
                                desc: "Diseño intrínsecamente seguro para operar en zonas con riesgo de explosión o con productos químicos inflamables.",
                                icon: Flame
                            },
                            {
                                title: "Supervisión 4.0",
                                desc: "Control total de maniobrabilidad y estados, integrado en el sistema de gestión global de la planta.",
                                icon: Factory
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                                }}
                                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group hover:border-blue-100 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
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
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            Atemperado seguro y eficiente
                        </h2>
                        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Contacte con KOC TECHNICAL SYSTEM para integrar esta tecnología en sus procesos de fluidos.
                        </p>

                        <Link href="/contacto">
                            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 h-auto">
                                Contactar
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}
