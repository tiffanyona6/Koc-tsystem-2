"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Droplets, Zap, TrendingUp, Factory, Settings, ShieldCheck, Hotel, WashingMachine, Utensils, Activity, Home, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
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

// CountUp Component
interface CountUpProps {
    end: number;
    suffix?: string;
    duration?: number;
}

const CountUp = ({ end, suffix = "", duration = 2 }: CountUpProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
};

export default function OasisContext() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

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
                {/* Background Decor */}
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
                                PROYECTO ACTUAL 2026
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-1.5 bg-primary rounded-full hidden md:block shadow-sm"></div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-montserrat tracking-tight">
                                    Oasis <span className="text-primary">Project</span>
                                </h1>
                            </div>

                            <h2 className="text-xl md:text-2xl text-secondary font-medium mb-6 max-w-xl">
                                Eficiencia energética y optimización hídrica industrial
                            </h2>

                            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                                <strong className="text-primary block mb-2">Proyecto a Medida (Innovación).</strong>
                                Oasis Project es una solución tecnológica desarrollada por KOC Technical System para transformar el desperdicio térmico en ahorro medible, integrando recuperación energética y reutilización inteligente del agua en un único sistema industrial.
                                <br /><br />
                                Diseñado para generar eficiencia estructural, reducción de costes y sostenibilidad real en entornos industriales de alta demanda.
                                <br />
                                <span className="block mt-4 text-sm font-semibold text-gray-500 bg-white/50 w-fit px-2 py-1 rounded">Actualmente en fase de expansión y búsqueda de socios estratégicos.</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl text-lg px-8">
                                    Solicitar dossier
                                    <ShieldCheck className="w-5 h-5 ml-2 opacity-80" />
                                </Button>
                            </div>
                        </motion.div>

                        {/* Visual Content - Single Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-[calc(100%+2rem)] -ml-4 sm:w-full sm:ml-0 lg:w-1/2 relative flex items-center justify-center lg:justify-end lg:h-[500px] order-1 lg:order-2 mb-2 lg:mb-0"
                        >
                            <div className="relative w-full aspect-[4/3] md:aspect-[4/5] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <Image
                                    src="/images/projects/proyecto-oasis-project-web-koc.webp"
                                    alt="Oasis Project"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 2. CONTEXT - EL RETO INDUSTRIAL */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        <div>
                            <motion.h2 variants={fadeInUp} className="text-3xl md:text-[42px] font-bold text-gray-900 mb-6 font-montserrat">
                                El desperdicio invisible
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                                Gran parte de la industria vierte diariamente agua templada con energía aprovechable.
                                Esto implica una pérdida constante de recursos y dinero.
                            </motion.p>

                            <motion.ul variants={staggerContainer} className="space-y-6">
                                {[
                                    { text: "Pérdida energética continua", icon: Zap },
                                    { text: "Costes operativos crecientes", icon: TrendingUp },
                                    { text: "Mayor exposición regulatoria", icon: ShieldCheck },
                                    { text: "Infraestructuras poco optimizadas", icon: Settings }
                                ].map((item, index) => (
                                    <motion.li key={index} variants={fadeInUp} className="flex items-start gap-4">
                                        <div className="p-2 bg-red-50 text-red-500 rounded-lg shrink-0">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-base md:text-lg text-gray-700 font-medium">{item.text}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>

                        <motion.div variants={fadeInUp} className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Factory className="w-32 h-32 text-gray-900" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">La Realidad</h3>
                            <p className="text-lg md:text-xl text-gray-600 italic">
                                "El calor residual no es un residuo.<br />
                                <span className="text-primary font-semibold">Es un activo no explotado.</span>"
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 3. LA SOLUCIÓN OASYS */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-12"
                    >
                        <span className="text-secondary font-bold tracking-wider uppercase mb-2 block text-sm">Nuestra Solución</span>
                        <h2 className="text-3xl md:text-[42px] font-bold mb-6 font-montserrat text-primary leading-tight">
                            Recuperación térmica + Reutilización hídrica
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
                            Oasis Project integra en un único sistema industrial tecnologías avanzadas para transformar flujos de residuos en recursos valiosos.
                        </p>
                    </motion.div>

                    {/* Desktop Grid Layout */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {[
                            { title: "Recuperación energética para ACS", desc: "Aprovechamiento del calor residual para agua caliente sanitaria." },
                            { title: "Tratamiento avanzado de aguas", desc: "Sistemas de filtración y purificación de aguas grises." },
                            { title: "Arquitectura anti-fouling", desc: "Diseño que previene la incrustación y mantiene la eficiencia." },
                            { title: "Sistema Fail-Safe sanitario", desc: "Garantía de separación total entre flujos y seguridad higiénica." },
                            { title: "Monitorización inteligente", desc: "Control en tiempo real para optimización continua." },
                            { title: "Diseño robusto y escalable", desc: "Preparado para crecimiento industrial sostenido." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                                }}
                                className="bg-white p-8 rounded-xl h-full flex flex-col justify-start border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-blue-100"
                            >
                                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors leading-tight">{feature.title}</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed font-light">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Accordion Layout */}
                    <div className="md:hidden flex flex-col bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden">
                        {[
                            { title: "Recuperación energética para ACS", desc: "Aprovechamiento del calor residual para agua caliente sanitaria." },
                            { title: "Tratamiento avanzado de aguas", desc: "Sistemas de filtración y purificación de aguas grises." },
                            { title: "Arquitectura anti-fouling", desc: "Diseño que previene la incrustación y mantiene la eficiencia." },
                            { title: "Sistema Fail-Safe sanitario", desc: "Garantía de separación total entre flujos y seguridad higiénica." },
                            { title: "Monitorización inteligente", desc: "Control en tiempo real para optimización continua." },
                            { title: "Diseño robusto y escalable", desc: "Preparado para crecimiento industrial sostenido." }
                        ].map((feature, index, arr) => (
                            <details key={index} className={`group ${index !== arr.length - 1 ? 'border-b border-blue-50' : ''}`}>
                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none bg-white hover:bg-gray-50 transition-colors">
                                    <h3 className="text-base font-bold text-gray-900 leading-tight pr-4">{feature.title}</h3>
                                    <span className="text-primary transform transition-transform duration-300 group-open:rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <div className="px-5 pb-5 pt-0 text-gray-600 text-sm font-light leading-relaxed animate-in slide-in-from-top-2 duration-200">
                                    {feature.desc}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. RESULTADOS ESPERADOS */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
                        {[
                            { value: 85, suffix: "%", label: "Ahorro energético en ACS" },
                            { value: 40, suffix: "%", label: "Reducción consumo hídrico" },
                            { value: 4, suffix: " Años", label: "ROI Estimado (2-4 años)" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="p-6"
                            >
                                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                                    <CountUp end={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>


                </div>
            </section>

            {/* 5. MOMENTO DE MERCADO */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 mb-6 font-montserrat">
                            El contexto acelera la adopción
                        </h2>
                        <p className="text-base md:text-lg text-gray-600">
                            Oasis Project nace en un entorno que exige soluciones integrales.
                        </p>
                    </motion.div>

                    <div className="relative max-w-5xl mx-auto group">
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto gap-4 lg:gap-8 snap-x snap-mandatory pb-8"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            <style jsx>{`
                                div::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                            {[
                                { text: "Incremento sostenido del coste energético", image: "/images/oasis/context-energy-cost.png" },
                                { text: "Escasez hídrica estructural", image: "/images/oasis/context-water.png" },
                                { text: "Normativa creciente en eficiencia", image: "/images/oasis/context-efficiency.png" },
                                { text: "Certificados de Ahorro Energético (CAE) como palanca", image: "/images/oasis/context-certificates.png" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.95 },
                                        visible: { opacity: 1, scale: 1, transition: { delay: index * 0.1 } }
                                    }}
                                    className="flex-none w-[85vw] md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] snap-center md:snap-start bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group/card"
                                >
                                    <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.text}
                                            fill
                                            className="object-cover object-center group-hover/card:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
                                    </div>
                                    <div className="p-6 md:p-8 flex items-center justify-center text-center grow">
                                        <p className="font-poppins font-medium text-gray-500 text-base group-hover/card:text-primary transition-colors leading-relaxed">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Navigation Arrows for Desktop */}
                        <button
                            onClick={() => scroll("left")}
                            className="hidden md:flex absolute -left-6 top-[calc(50%-30px)] -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] border border-gray-100 items-center justify-center text-primary/70 hover:text-primary hover:scale-110 z-10 transition-all duration-300"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="hidden md:flex absolute -right-6 top-[calc(50%-30px)] -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] border border-gray-100 items-center justify-center text-primary/70 hover:text-primary hover:scale-110 z-10 transition-all duration-300"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 6. SECTORES OBJETIVO */}
            <section className="section-padding bg-gray-50 border-y border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-[-12deg] -translate-y-1/2 rounded-full blur-3xl opacity-50 pointer-events-none" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 mb-6 font-montserrat">
                            Sectores Objetivo
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Diseñado para industrias donde el <span className="font-semibold text-primary">control térmico y el alto consumo de agua</span> son factores críticos de rentabilidad.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            { name: "Sector Industrial", desc: "Productores y manufactura de alta exigencia térmica.", icon: Factory },
                            { name: "Agroalimentaria", desc: "Procesamiento, conservación y envasado seguro.", icon: Utensils },
                            { name: "Lavanderías Ind.", desc: "Instalaciones de extremo consumo hídrico.", icon: WashingMachine },
                            { name: "Sector Hotelero", desc: "Complejos turísticos, resorts y cadenas globales.", icon: Hotel },
                            { name: "Sector Sanitario", desc: "Hospitales, clínicas y centros biomédicos.", icon: Activity },
                            { name: "Sector Residencial", desc: "Grandes complejos habitacionales centralizados.", icon: Home }
                        ].map((sector, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                                }}
                                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col"
                            >
                                <div className="w-14 h-14 bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 rounded-xl flex items-center justify-center mb-6">
                                    <sector.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-[19px] font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{sector.name}</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed m-0">{sector.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. MODELO DE DESPLIEGUE */}
            <section className="section-padding bg-white relative">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-[42px] font-bold mb-6 text-gray-900 font-montserrat">Modelo de Despliegue</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Arquitectura pensada para un crecimiento sostenido e integrado mediante un modelo híbrido puramente industrial.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto relative">
                        {/* Connecting line desktop */}
                        <div className="hidden lg:block absolute top-[45px] left-[15%] right-[15%] h-[3px] bg-gray-100 z-0">
                            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-200 via-primary to-blue-200 w-full opacity-30"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
                            {[
                                { title: "Ingeniería Aplicada", desc: "Diseño técnico a medida y estudio de integración en planta para asegurar la viabilidad del proyecto." },
                                { title: "Tecnología Modular", desc: "Fabricación de equipos escalables listos para su despliegue y conexión rápida sin parar producción." },
                                { title: "Servicio Experto", desc: "Despliegue, puesta en marcha y soporte continuo operado por la ingeniería técnica de KOC." },
                                { title: "Monitorización 4.0", desc: "Control de rendimiento y telemetría de ahorros en tiempo real 24/7 sobre un marco unificado." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.95 },
                                        visible: { opacity: 1, scale: 1, transition: { delay: index * 0.15 } }
                                    }}
                                    className="flex flex-col items-center lg:items-start text-center lg:text-left group relative"
                                >
                                    <div className="w-24 h-24 lg:w-[90px] lg:h-[90px] mx-auto lg:mx-0 bg-white border-[6px] border-blue-50 text-gray-400 font-extrabold text-3xl rounded-full flex items-center justify-center mb-6 group-hover:border-primary group-hover:text-primary transition-all duration-300 shadow-sm relative z-20">
                                        0{index + 1}
                                    </div>
                                    <div className="bg-gray-50 p-7 lg:p-6 rounded-3xl border border-transparent w-full h-full hover:bg-white hover:shadow-2xl hover:border-blue-100 hover:-translate-y-2 transition-all duration-300 relative z-10 overflow-hidden group/card">

                                        <div className="relative z-10 flex flex-col h-full">
                                            <h3 className="text-xl lg:text-[17px] xl:text-lg font-bold text-gray-900 mb-4 group-hover/card:text-primary transition-colors leading-snug">{item.title}</h3>
                                            <p className="text-gray-600 text-[15px] lg:text-[14px] leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Mobile connection line inside the loop */}
                                    {index !== 3 && <div className="lg:hidden absolute top-[48px] left-1/2 -translate-x-1/2 h-[calc(100%+48px)] w-[2px] bg-blue-100 z-0 pointer-events-none"></div>}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. BLOQUE FINAL - INVERSIÓN */}
            <section className="section-padding bg-primary text-white text-center relative overflow-hidden">
                {/* Clean Solid Background */}

                <div className="container-custom relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            Oportunidad estratégica de participación
                        </h2>
                        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Oasis Project representa una solución tecnológica alineada con la eficiencia, la sostenibilidad y la rentabilidad industrial.
                        </p>

                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 h-auto">
                            Solicitar dossier
                        </Button>

                        <p className="mt-6 text-sm text-blue-200 opacity-80">
                            Acceso a información técnica ampliada y roadmap estratégico.
                        </p>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}
