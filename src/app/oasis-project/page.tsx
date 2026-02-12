"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Droplets, Zap, TrendingUp, Factory, Settings, ShieldCheck, Hotel, WashingMachine, Utensils, Activity } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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
            <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Subtle Technical Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "radial-gradient(#384C9C 1px, transparent 1px)",
                        backgroundSize: "32px 32px"
                    }}>
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary font-semibold text-xs tracking-wide uppercase mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            PROYECTO ACTUAL 2026
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-10 w-1.5 bg-primary rounded-full hidden md:block"></div>
                            <h1 className="text-[32px] md:text-[44px] lg:text-6xl font-bold text-gray-900 leading-tight font-montserrat">
                                Oasis <span className="text-primary">Project</span>
                            </h1>
                        </div>

                        <h2 className="text-xl md:text-2xl text-secondary font-medium mb-8 max-w-2xl">
                            Eficiencia energética y optimización hídrica industrial
                        </h2>

                        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                            Oasis Project es una solución tecnológica desarrollada por KOC Technical System para transformar el desperdicio térmico en ahorro medible, integrando recuperación energética y reutilización inteligente del agua en un único sistema industrial.
                            <br /><br />
                            Diseñado para generar eficiencia estructural, reducción de costes y sostenibilidad real en entornos industriales de alta demanda.
                            <br />
                            <span className="block mt-4 text-sm font-semibold text-gray-500">Actualmente en fase de expansión y búsqueda de socios estratégicos.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-lg">
                                Solicitar dossier
                                {/* Import Lock from lucide-react if not already imported or available */}
                                <ShieldCheck className="w-4 h-4 ml-2 opacity-70" />
                            </Button>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. CONTEXT - EL RETO INDUSTRIAL */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 md:px-12">
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
            <section className="py-20 md:py-28 bg-gray-900 text-white relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute inset-0 z-0 opacity-10"
                    style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                    }}>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">Nuestra Solución</span>
                        <h2 className="text-3xl md:text-[42px] font-bold mb-6 font-montserrat">
                            Recuperación térmica + Reutilización hídrica
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg max-w-3xl">
                            Oasis Project integra en un único sistema industrial tecnologías avanzadas para transformar flujos de residuos en recursos valiosos.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-secondary/50 transition-colors"
                            >
                                <div className="h-1 w-12 bg-secondary mb-4 rounded-full"></div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. RESULTADOS ESPERADOS */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 md:px-12">
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

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center border border-gray-100 max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto Doble</h3>
                        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                            <div className="flex items-center gap-3 justify-center">
                                <TrendingUp className="text-secondary w-6 h-6" />
                                <span className="text-lg font-medium text-gray-700">Reducción de costes estructurales</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center">
                                <ShieldCheck className="text-secondary w-6 h-6" />
                                <span className="text-lg font-medium text-gray-700">Mejora directa posicionamiento ESG</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 5. MOMENTO DE MERCADO */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-primary flex items-center"
                            >
                                <p className="font-semibold text-gray-800">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SECTORES OBJETIVO */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-3xl md:text-[42px] font-bold text-gray-900 mb-12 text-center font-montserrat"
                    >
                        Sectores Objetivo
                    </motion.h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            { name: "Industria Agroalimentaria", icon: Utensils },
                            { name: "Lavanderías Industriales", icon: WashingMachine },
                            { name: "Sector Hotelero", icon: Hotel },
                            { name: "Sector Sanitario", icon: Activity }
                        ].map((sector, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-xl transition-colors"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <sector.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-gray-800">{sector.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. MODELO DE DESPLIEGUE */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-[42px] font-bold mb-6 font-montserrat">Modelo de Despliegue</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Arquitectura pensada para crecimiento sostenido mediante un modelo híbrido.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-5xl mx-auto">
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
                                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span className="font-medium text-gray-200">{item}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. BLOQUE FINAL - INVERSIÓN */}
            <section className="py-24 bg-gradient-to-br from-primary to-blue-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                        backgroundSize: "24px 24px"
                    }}>
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-[42px] font-bold mb-6 font-montserrat">
                            Oportunidad estratégica de participación
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Oasis Project representa una solución tecnológica alineada con la eficiencia, la sostenibilidad y la rentabilidad industrial.
                        </p>

                        <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto shadow-xl font-bold">
                            Solicitar dossier completo
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
