"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Droplets, Leaf, Settings, CheckCircle2, FileText, Zap, Sun, Recycle, ChevronDown } from "lucide-react";
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

export default function TwtPage() {
    const [isTwtSpecsOpen, setIsTwtSpecsOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white font-poppins text-gray-800 overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gray-50">
                {/* Background Decor - Blue Gradient */}
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
                                Agua 4.0
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight font-montserrat tracking-tight mb-6">
                                Sistema <span className="text-primary">TWT</span>
                            </h1>

                            <h2 className="text-xl md:text-2xl text-secondary font-medium mb-6 max-w-xl">
                                "Gestión del presente para el agua del futuro"
                            </h2>

                            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                                <strong className="text-primary block mb-2">Proyecto a Medida (Bajo Encargo).</strong>
                                Concebido como prototipo de ingeniería a medida, este sistema se adapta exclusivamente a los requerimientos del cliente. Realiza una gestión circular de los recursos naturales, regenerando el agua residual con un consumo energético nulo.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link href="/contacto">
                                    <Button size="lg" className="w-full sm:w-auto bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl text-lg px-8">
                                        Solicitar información
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
                                    { src: "/images/projects/proyecto-twt-web-koc.webp", alt: "Sistema TWT" },
                                    { src: "/images/projects/proyecto-twt-web-koc.webp", alt: "Planta de tratamiento TWT" },
                                    { src: "/images/projects/proyecto-twt-web-koc.webp", alt: "Detalle de filtrado" }
                                ]}
                                className="w-full h-full"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 2. FLEXIBLE, COMPACTO Y EFICIENTE */}
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
                                Flexible, Compacto y Eficiente
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Su modularidad lo hace <strong>flexible</strong> a las demandas de calidad de agua requeridas, todo ello instalado de <strong>forma compacta</strong>, y con sistema de autoconsumo para un <strong>ahorro energético total</strong>.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-6">Ventajas de regenerar con TWT:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Reducción del uso de agua para consumo humano.",
                                    "Mantenimiento de la calidad de los ecosistemas.",
                                    "Reducción de vertido de agua con contaminantes.",
                                    "Caudal de producción constante durante todo el año.",
                                    "Costes de explotación minimizados. Máxima rentabilidad."
                                ].map((item, index) => (
                                    <motion.li key={index} variants={fadeInUp} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                        <span className="text-gray-700 text-base">{item}</span>
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
                                onClick={() => setIsTwtSpecsOpen(!isTwtSpecsOpen)}
                                className="w-full flex items-center justify-between text-lg font-bold text-gray-900 mb-2 lg:mb-6 group lg:pointer-events-none lg:cursor-default"
                            >
                                <div className="flex items-center gap-3 text-left">
                                    <FileText className="w-6 h-6 text-primary shrink-0" />
                                    <span>Ficha Técnica: Modelo TWT 2000</span>
                                </div>
                                <div className={`p-2 rounded-full bg-white text-primary transition-transform duration-300 lg:hidden ${isTwtSpecsOpen ? 'rotate-180' : ''}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: isTwtSpecsOpen ? "auto" : 0, opacity: isTwtSpecsOpen ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden lg:!h-auto lg:!opacity-100 block"
                            >
                                <div className="space-y-4 text-sm font-poppins pt-2 lg:pt-0">
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Caudal tratado</span>
                                        <span className="text-gray-900 font-bold text-right">Adaptable (480 m3/día)</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Calidad mín. agua</span>
                                        <span className="text-gray-900 font-bold text-right">Tipo B (2.3) Anexo I. RD 1620/2007</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Usos agua</span>
                                        <span className="text-gray-900 font-bold text-right text-xs">Riego, limpieza ind., baldeo, recarga acuíferos</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                        <span className="text-gray-600 font-medium">Funcionamiento</span>
                                        <span className="text-primary font-bold text-right">AUTOMÁTICO TWT</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 3. AHORRO ENERGÉTICO FEATURE */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                    <Leaf className="w-10 h-10" />
                                </div>
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-2 font-montserrat text-green-600">45%</h3>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Ahorro de energía consumida</h4>
                            <p className="text-gray-600 text-sm mb-6">Para una producción continua de 24 horas gracias a la integración de energías renovables.</p>

                            <div className="flex justify-center gap-4 text-gray-400">
                                <Sun className="w-8 h-8" />
                                <Zap className="w-8 h-8" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                                Autonomía Energética Total
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Su autonomía reduce el consumo energético a niveles mínimos, optimizando el uso de las horas máximas de sol.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Todo ello <strong>telegestionado</strong> y con un funcionamiento automatizado, controlando los parámetros de proceso a distancia.
                            </p>

                            <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
                                <p className="text-sm text-primary font-medium flex items-center gap-2">
                                    <Settings className="w-4 h-4" />
                                    Sistema desarrollado por KOC TECHNICAL SYSTEM
                                </p>
                            </div>
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
                            Transforme sus aguas residuales en recursos
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Consúltenos para adaptar el modelo TWT a su caudal y necesidades específicas.
                        </p>

                        <Link href="/contacto">
                            <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 h-auto shadow-xl font-bold">
                                Solicitar estudio de viabilidad
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}
