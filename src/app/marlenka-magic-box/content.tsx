"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Thermometer, Box, Cpu, Wifi, Settings, Droplets, FileText, Factory, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel"; // Shared component

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

export default function MarlenkaPage() {
    const [isMagicBoxOpen, setIsMagicBoxOpen] = useState(false);
    const [isMarlenkaOpen, setIsMarlenkaOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white font-poppins text-gray-800 overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gray-50">
                {/* Background Decor - Changed to Blue */}
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
                            {/* Tag - Changed to Blue */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm text-primary font-semibold text-xs tracking-wide uppercase mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Solución Integral PU
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-montserrat tracking-tight mb-6">
                                Marlenka 2.0 <span className="text-primary">+ Magic Box</span>
                            </h1>

                            <h2 className="text-xl md:text-2xl text-secondary font-medium mb-6 max-w-xl">
                                Estandarización climática para procesos de espumación
                            </h2>

                            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                                <strong className="text-primary block mb-2">Proyecto a Medida (Bajo Encargo).</strong>
                                Desarrollado originalmente como solución exclusiva, Magic Box adapta el proceso de moldeado mientras Marlenka 2.0 actúa como cerebro climático. Ambos sistemas están disponibles para fabricación personalizada según las necesidades de su planta.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link href="/contacto">
                                    <Button size="lg" className="w-full sm:w-auto bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl text-lg px-8">
                                        Consultar sistema
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
                                    { src: "/images/projects/proyecto-marleka-magicbox-web-koc.webp", alt: "Marlenka 2.0 y Magic Box en planta" },
                                    { src: "/images/projects/proyecto-marleka-magicbox-web-koc.webp", alt: "Detalle de proceso de espumación" },
                                    { src: "/images/projects/proyecto-marleka-magicbox-web-koc.webp", alt: "Sistema de control térmico" }
                                ]}
                                className="w-full h-full"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 2. MAGIC BOX DETAIL */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    {/* Centered grid items-center */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {/* Icon Box - Changed to Blue */}
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-6">
                                <Box className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
                                Magic Box®
                            </h2>
                            {/* Subtitle - Changed to Blue/Primary */}
                            <h3 className="text-xl text-primary font-medium mb-6">Molde de espumación con control de temperatura</h3>

                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Magic Box nace de la necesidad de <strong>desvincular la calidad de la producción de las condiciones climáticas externas</strong>. Es vital para empresas multinacionales que operan en distintas demografías y necesitan garantizar que el producto final sea idéntico en todas sus plantas.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Este sistema asegura la estandarización del proceso de espumación de PU, obteniendo una simetría perfecta en la producción, sean cuales sean las condiciones atmosféricas de la fábrica.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                    <span className="text-gray-700 font-medium">Simetría total en la producción de bloques</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                    <span className="text-gray-700 font-medium">Adaptable a cualquier zona climática mundial</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                    <span className="text-gray-700 font-medium">Complemento directo del sistema Marlenka 2.0</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Specs Card Magic Box - Changed to Blue Theme */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-blue-50/50 p-6 md:p-10 rounded-3xl border border-blue-100"
                        >
                            <button
                                onClick={() => setIsMagicBoxOpen(!isMagicBoxOpen)}
                                className="w-full flex items-center justify-between text-lg font-bold text-gray-900 mb-2 lg:mb-6 group lg:pointer-events-none lg:cursor-default"
                            >
                                <div className="flex items-center gap-3 text-left">
                                    <FileText className="w-6 h-6 text-primary shrink-0" />
                                    <span>Ficha Técnica: Modelo MG200/1</span>
                                </div>
                                <div className={`p-2 rounded-full bg-white text-primary transition-transform duration-300 lg:hidden ${isMagicBoxOpen ? 'rotate-180' : ''}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: isMagicBoxOpen ? "auto" : 0, opacity: isMagicBoxOpen ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden lg:!h-auto lg:!opacity-100 block"
                            >
                                <div className="space-y-4 text-sm font-poppins pt-2 lg:pt-0">
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Rango Control Temp.</span>
                                        <span className="text-gray-900 font-bold text-right">25°C - 90°C</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Dimensiones</span>
                                        <span className="text-gray-900 font-bold text-right">3150 x 2110 x 1300 mm</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Ancho bloques</span>
                                        <span className="text-gray-900 font-bold text-right">0 - 2,000 mm</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Largo bloques</span>
                                        <span className="text-gray-900 font-bold text-right">1000 - 3000 mm</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Material Estructura</span>
                                        <span className="text-gray-900 font-bold text-right">ACERO S275JR</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                        <span className="text-gray-600 font-medium">Integración</span>
                                        <span className="text-primary font-bold text-right">Sistema Marlenka 2.0</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* divider */}
            <div className="container-custom">
                <div className="w-full h-px bg-gray-200" />
            </div>

            {/* 3. MARLENKA 2.0 DETAIL */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="lg:order-2"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-6">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
                                Marlenka 2.0 ®
                            </h2>
                            <h3 className="text-xl text-primary font-medium mb-6">Sistema inteligente de control de temperatura y humedad</h3>

                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                El "cerebro" detrás de la operación. Marlenka 2.0 es una máquina versátil y eficiente concebida para los procesos de espumación de poliuretano líquido. Cuenta con la última tecnología del mercado para el <strong>seguimiento de proceso inalámbrico por radiofrecuencia</strong>.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Ofrece una integración ajustada a la demanda de cada proceso mediante control por <strong>PLC y sistema HMI</strong>, todo ello programado y personalizado para cada cliente.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-3">
                                    <Wifi className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Radiofrecuencia</h4>
                                        <p className="text-xs text-gray-500">Seguimiento inalámbrico preciso</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-3">
                                    <Settings className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">PLC + HMI</h4>
                                        <p className="text-xs text-gray-500">Control digital personalizado</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Specs Card Marlenka */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:order-1 bg-blue-50/50 p-6 md:p-10 rounded-3xl border border-blue-100"
                        >
                            <button
                                onClick={() => setIsMarlenkaOpen(!isMarlenkaOpen)}
                                className="w-full flex items-center justify-between text-lg font-bold text-gray-900 mb-2 lg:mb-6 group lg:pointer-events-none lg:cursor-default"
                            >
                                <div className="flex items-center gap-3 text-left">
                                    <FileText className="w-6 h-6 text-primary shrink-0" />
                                    <span>Ficha Técnica: Marlenka 2.0</span>
                                </div>
                                <div className={`p-2 rounded-full bg-white text-primary transition-transform duration-300 lg:hidden ${isMarlenkaOpen ? 'rotate-180' : ''}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: isMarlenkaOpen ? "auto" : 0, opacity: isMarlenkaOpen ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden lg:!h-auto lg:!opacity-100 block"
                            >
                                <div className="space-y-4 text-sm font-poppins pt-2 lg:pt-0">
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Control Temp.</span>
                                        <span className="text-gray-900 font-bold text-right">25°C - 90°C</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Control Humedad</span>
                                        <span className="text-gray-900 font-bold text-right">30% - 95% HR</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Software</span>
                                        <span className="text-gray-900 font-bold text-right">KOC TECHNICAL SYSTEM</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Sist. Temperatura</span>
                                        <span className="text-gray-900 font-bold text-right text-xs">AEROTERMIA (Agua Glicolada)</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Sist. Humedad</span>
                                        <span className="text-gray-900 font-bold text-right text-xs">NEBULIZACIÓN ULTRASÓNICA</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-blue-100/50">
                                        <span className="text-gray-600 font-medium">Dimensiones</span>
                                        <span className="text-gray-900 font-bold text-right">1800 x 1800 x 800 mm</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                        <span className="text-gray-600 font-medium">Peso Total</span>
                                        <span className="text-gray-900 font-bold text-right">800 kg</span>
                                    </div>
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
                            Estandarice su producción global
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Magic Box y Marlenka 2.0 son la solución para eliminar la variabilidad climática de sus procesos industriales.
                        </p>

                        <Link href="/contacto">
                            <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 h-auto shadow-xl font-bold">
                                Solicitar estudio de implantación
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}
