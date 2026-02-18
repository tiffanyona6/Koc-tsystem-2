"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Droplets, Zap, TrendingUp, Factory, Settings, ShieldCheck, Hotel, WashingMachine, Utensils, Activity, Home } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CarouselOasis } from "@/components/ui/CarouselOasis";

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

                        {/* Visual Content - Carousel */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end h-[400px] lg:h-[500px]"
                        >
                            <CarouselOasis />
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-5xl mx-auto">
                        {[
                            "Incremento sostenido del coste energético",
                            "Escasez hídrica estructural",
                            "Normativa creciente en eficiencia",
                            "Certificados de Ahorro Energético como palanca"
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
                                className="bg-white p-6 lg:p-10 rounded-xl shadow-sm border-l-4 border-l-primary flex items-center justify-center text-center h-full hover:shadow-md transition-shadow"
                            >
                                <p className="font-normal text-gray-800 text-lg lg:text-xl">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SECTORES OBJETIVO */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-3xl md:text-[42px] font-bold text-gray-900 mb-12 text-center font-montserrat"
                    >
                        Sectores Objetivo
                    </motion.h2>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-px max-w-6xl mx-auto lg:bg-gray-100 lg:border lg:border-gray-100 lg:rounded-2xl lg:overflow-hidden lg:shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)]">
                        {[
                            { name: "Sector Industrial", icon: Factory },
                            { name: "Industria Agroalimentaria", icon: Utensils },
                            { name: "Lavanderías Industriales", icon: WashingMachine },
                            { name: "Sector Hotelero", icon: Hotel },
                            { name: "Sector Sanitario", icon: Activity },
                            { name: "Sector Residencial", icon: Home }
                        ].map((sector, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="flex flex-col items-center text-center p-6 lg:p-12 hover:bg-gray-50 transition-colors lg:bg-white"
                            >
                                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 lg:mb-6">
                                    <sector.icon className="w-8 h-8 lg:w-10 lg:h-10" />
                                </div>
                                <h3 className="font-normal text-gray-800 text-base lg:text-lg max-w-[120px] lg:max-w-none mx-auto">{sector.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. MODELO DE DESPLIEGUE */}
            <section className="section-padding bg-gray-50 text-gray-900">
                <div className="container-custom text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-[42px] font-bold mb-6 font-montserrat">Modelo de Despliegue</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Arquitectura pensada para crecimiento sostenido mediante un modelo híbrido.
                        </p>
                    </motion.div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-0.5 bg-gray-200 z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative z-10">
                            {[
                                "Ingeniería aplicada",
                                "Tecnología industrial modular",
                                "Servicio técnico especializado",
                                "Monitorización continua"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    className="flex flex-col items-center group"
                                >
                                    {/* Mobile Card */}
                                    <div className="lg:hidden bg-white p-6 rounded-xl border border-blue-100 shadow-sm w-full flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="font-medium text-gray-800">{item}</span>
                                    </div>

                                    {/* Desktop Node */}
                                    <div className="hidden lg:flex flex-col items-center text-center w-full px-4">
                                        <div className="w-14 h-14 bg-white rounded-full border-4 border-primary shadow-sm mb-6 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                                            <div className="w-4 h-4 bg-primary rounded-full"></div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm w-full min-h-[100px] flex items-center justify-center group-hover:border-blue-200 group-hover:shadow-md transition-all">
                                            <span className="font-normal text-gray-800 text-lg leading-tight">{item}</span>
                                        </div>
                                    </div>
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
                        <h2 className="text-3xl md:text-[42px] font-bold mb-4 font-montserrat">
                            Oportunidad estratégica de participación
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Oasis Project representa una solución tecnológica alineada con la eficiencia, la sostenibilidad y la rentabilidad industrial.
                        </p>

                        <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 h-auto shadow-xl font-bold">
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
