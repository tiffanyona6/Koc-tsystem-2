"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Droplets, Zap, CheckCircle2, Factory, FileCheck, BarChart3, Settings, ClipboardCheck, HardHat, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

// Animations
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen font-poppins text-gray-800 bg-white">

            {/* 1. HERO SECTION */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-50 relative overflow-hidden">
                {/* Lateral Graphic Element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#384C9C]/5 skew-x-12 transform origin-top-right hidden lg:block" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-[1200px] mx-auto">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="max-w-4xl"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-primary mb-6 leading-tight">
                                Servicios
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl font-light">
                                Ingeniería aplicada a agua, energía y control de proceso con resultados medibles
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contacto">
                                    <Button size="lg" className="w-full sm:w-auto px-8 shadow-lg">
                                        Solicitar propuesta
                                    </Button>
                                </Link>
                                <Link href="/proyectos" className="hidden sm:block">
                                    <Button variant="outline" size="lg" className="px-8">
                                        Ver proyectos
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. SERVICES GRID SUMMARY */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto"
                    >
                        {/* Card 1: EDAR / ETAP */}
                        <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                                <Droplets className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">EDAR / ETAP</h3>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                    <span>Reparación, fabricación e instalación</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                    <span>Optimización de procesos críticos</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                    <span>Cumplimiento técnico y normativo</span>
                                </li>
                            </ul>
                            <Link href="#edar-etap">
                                <Button variant="outline" className="w-full justify-between group">
                                    Ver detalle <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Card 2: CAE */}
                        <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6">
                                <FileCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">Certificados CAE</h3>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Identificación del potencial de ahorro</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Documentación técnica</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Tramitación completa</span>
                                </li>
                            </ul>
                            <Link href="#cae">
                                <Button variant="outline" className="w-full justify-between group border-gray-200 text-gray-700 hover:border-green-600 hover:text-green-600 hover:bg-white">
                                    Ver detalle <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Placeholder Grid for Images */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-[1200px] mx-auto">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                                Imagen {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. EDAR / ETAP DETAIL */}
            <section id="edar-etap" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                            <div className="lg:w-2/3">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary font-semibold text-xs tracking-wide uppercase mb-6">
                                    Tratamiento de Agua
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
                                    Reparación, fabricación e instalación de EDAR y ETAP
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    En KOC Technical System desarrollamos y ejecutamos soluciones integrales para el tratamiento de agua en entornos industriales y de edificación. Intervenimos en la reparación, fabricación, montaje e instalación de EDAR (Estaciones Depuradoras de Aguas Residuales) y ETAP (Estaciones de Tratamiento de Agua Potable).
                                </p>
                                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                    Actuamos sobre procesos donde agua, energía y temperatura son variables críticas, mejorando la eficiencia operativa, reduciendo consumos y asegurando el cumplimiento normativo con resultados técnicos verificables.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {["Diagnóstico técnico inicial", "Diseño y dimensionamiento", "Fabricación y montaje", "Dirección y supervisión", "Puesta en marcha", "Plan de mantenimiento"].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                            <span className="font-medium text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:w-1/3">
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-50 sticky top-24">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <BarChart3 className="text-primary w-5 h-5" />
                                        Resultados Clave
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="text-sm text-gray-500 mb-1">Impacto Energético</div>
                                            <div className="font-bold text-lg text-primary">Optimización de consumos</div>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="text-sm text-gray-500 mb-1">Operativa</div>
                                            <div className="font-bold text-lg text-primary">Estabilidad del proceso</div>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="text-sm text-gray-500 mb-1">Garantía</div>
                                            <div className="font-bold text-lg text-primary">Cumplimiento técnico</div>
                                        </div>
                                    </div>
                                    <Link href="/contacto" className="block mt-8">
                                        <Button className="w-full">Consultar proyecto</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CAE DETAIL */}
            <section id="cae" className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-16 border border-green-100">
                            <div className="flex flex-col lg:flex-row gap-12 items-start">
                                <div className="lg:w-1/2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs tracking-wide uppercase mb-6">
                                        Eficiencia Energética
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
                                        Identificación del potencial de ahorro y tramitación de CAE
                                    </h2>
                                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                        Analizamos actuaciones energéticas susceptibles de generar Certificados de Ahorro Energético (CAE) y gestionamos el proceso completo de documentación y tramitación.
                                    </p>
                                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                        Nuestro objetivo es maximizar el retorno económico del ahorro energético asegurando el cumplimiento de los requisitos técnicos exigidos.
                                    </p>

                                    <Link href="/contacto">
                                        <Button className="bg-green-600 text-white border-[1.5px] border-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 transition-all duration-300 shadow-md">
                                            Gestionar mis CAEs
                                        </Button>
                                    </Link>
                                </div>

                                <div className="lg:w-1/2 w-full">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-100/50">
                                        <h3 className="font-bold text-gray-900 mb-6">Servicio Integral incluye:</h3>
                                        <ul className="space-y-4">
                                            {[
                                                "Estudio de medidas elegibles",
                                                "Cálculo del ahorro energético",
                                                "Preparación de documentación técnica",
                                                "Tramitación administrativa",
                                                "Seguimiento hasta validación"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 font-bold text-sm">
                                                        {index + 1}
                                                    </div>
                                                    <span className="text-gray-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. METODOLOGIA */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat mb-4">Metodología de trabajo</h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Proceso estructurado para garantizar el éxito técnico y la calidad en cada fase.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    phase: "Fase Inicial",
                                    icon: ClipboardCheck,
                                    items: ["Definición de objetivos", "Estudio de viabilidad", "Análisis de alternativas", "Estimación de costes"]
                                },
                                {
                                    phase: "Fase Diseño",
                                    icon: Settings,
                                    items: ["Planificación técnica", "Presupuesto detallado", "Redacción documental", "Tramitaciones legales"]
                                },
                                {
                                    phase: "Fase Ejecución",
                                    icon: HardHat,
                                    items: ["Dirección de obra", "Control económico", "Coordinación técnica", "Seguimiento de calidad"]
                                },
                                {
                                    phase: "Fase Final",
                                    icon: ShieldCheck,
                                    items: ["Puesta en marcha", "Verificación de objetivos", "Plan de mantenimiento", "Gestión de garantías"]
                                }
                            ].map((step, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-colors">
                                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-primary mb-4">
                                        {/* Render icon based on index or type */}
                                        {index === 0 && <ClipboardCheck className="w-6 h-6" />}
                                        {index === 1 && <Settings className="w-6 h-6" />}
                                        {index === 2 && <HardHat className="w-6 h-6" />}
                                        {index === 3 && <ShieldCheck className="w-6 h-6" />}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">{step.phase}</h3>
                                    <ul className="space-y-2">
                                        {step.items.map((item, i) => (
                                            <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Accordion Alternative - Hidden on md+ (Using simple grid above for now, can implement accordion if needed for strict mobile optimization) */}
                    </div>
                </div>
            </section>

            {/* 6. CONFIANZA / TRUST */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-[1200px] mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat mb-12">
                            Compromiso técnico y resultados reales
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                            {[
                                "Cumplimiento normativo",
                                "Optimización energética",
                                "Ejecución especializada",
                                "Soporte post-proyecto"
                            ].map((text, index) => (
                                <div key={index} className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-secondary">
                                        {index === 0 && <ShieldCheck className="w-8 h-8" />}
                                        {index === 1 && <Zap className="w-8 h-8" />}
                                        {index === 2 && <Factory className="w-8 h-8" />}
                                        {index === 3 && <Settings className="w-8 h-8" />}
                                    </div>
                                    <span className="font-semibold text-gray-800">{text}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/contacto">
                            <Button size="lg" className="shadow-lg">Agendar llamada técnica</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 7. QUICK CONTACT */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">¿Hablamos de su proyecto?</h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                Contacte directamente con nuestro departamento técnico para una valoración inicial.
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                                <div className="text-gray-800 font-medium">info@koc-technical.com</div>
                                <div className="hidden md:block w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                <div className="text-gray-800 font-medium">+34 950 123 456</div>
                            </div>
                            <Link href="/contacto">
                                <Button size="lg" className="px-10">Contactar ahora</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
