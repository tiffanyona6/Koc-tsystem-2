"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Droplets, Zap, CheckCircle2, Factory, FileCheck, BarChart3, Settings, ClipboardCheck, HardHat, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { ServicesGallery } from "@/components/sections/ServicesGallery";

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
            <section className="pt-32 pb-10 md:pt-36 md:pb-16 bg-white relative overflow-hidden">
                {/* Lateral Graphic Element */}
                <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-full bg-[#384C9C]/5 skew-x-12 transform origin-top-right pointer-events-none" />

                <div className="container-custom relative z-10">
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
            </section>



            {/* 2. ENERGIA Y DESCARBONIZACION */}
            <section id="energia-descarbonizacion" className="section-padding bg-white overflow-hidden">
                <div className="container-custom relative">
                    {/* Decorative element */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-green-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                            {/* Main Content */}
                            <div className="lg:w-3/5">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-1 bg-green-500 rounded-full" />
                                    <span className="text-green-700 font-bold tracking-wider text-sm uppercase">Energía y Descarbonización</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
                                    Eficiencia energética para un futuro sostenible
                                </h2>
                                <p className="text-xl text-gray-800 mb-8 leading-relaxed font-light">
                                    Desarrollamos estrategias de eficiencia energética e integración de energías renovables para entornos industriales, orientadas a la <span className="font-medium text-green-700">reducción de costes operativos</span> y huella de carbono.
                                </p>

                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-green-50 mb-8">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Integramos análisis energético, optimización de consumos y planes de transición energética adaptados a cada instalación.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                                        {[
                                            "Auditorías energéticas industriales",
                                            "Integración de renovables",
                                            "Optimización de consumos",
                                            "Planes de descarbonización",
                                            "Monitorización energética",
                                            "Estudios de viabilidad técnica"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                                                </div>
                                                <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Card */}
                            <div className="lg:w-2/5 w-full sticky top-24">
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-green-500">
                                    <div className="p-8 bg-gradient-to-b from-green-50/50 to-white">
                                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-green-100 rounded-lg text-green-700">
                                                <BarChart3 className="w-5 h-5" />
                                            </div>
                                            Impacto Directo
                                        </h3>
                                        <div className="space-y-4">
                                            {[
                                                { label: "Sostenibilidad", value: "Reducción de huella de carbono total", icon: "🌱" },
                                                { label: "Economía", value: "Minimización de costes operativos", icon: "📉" },
                                                { label: "Normativa", value: "Cumplimiento medioambiental garantizado", icon: "clipboard-check" } // using a placeholder for icon logic if needed, or stick to simple text
                                            ].map((stat, i) => (
                                                <div key={i} className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-green-200 hover:shadow-md transition-all duration-300">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{stat.label}</span>
                                                    </div>
                                                    <div className="font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                                                        {stat.value}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-gray-100">
                                            <Link href="/contacto" className="flex items-center justify-between text-green-700 font-semibold hover:text-green-800 transition-colors group">
                                                <span>Solicitar auditoría</span>
                                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CICLO INTEGRAL DEL AGUA */}
            <section id="edar-etap" className="section-padding bg-gray-50 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#384C9C_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="container-custom relative z-10">
                    <div>
                        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center">

                            {/* Main Content (Right) */}
                            <div className="lg:w-3/5">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-1 bg-[#384C9C] rounded-full" />
                                    <span className="text-[#384C9C] font-bold tracking-wider text-sm uppercase">Tratamiento de Agua</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
                                    Ciclo Integral del Agua
                                </h2>
                                <p className="text-xl text-gray-800 mb-8 leading-relaxed font-light">
                                    Diseño, fabricación e implantación de soluciones para EDAR, ETAP y sistemas de <span className="font-medium text-[#384C9C]">regeneración y reutilización</span> de agua industrial.
                                </p>

                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-50 mb-8">
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        Desarrollamos y ejecutamos proyectos integrales de tratamiento y regeneración de agua, desde el diseño técnico y dimensionamiento hasta la instalación y puesta en marcha.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                                        {[
                                            "Diagnóstico técnico",
                                            "Diseño y dimensionamiento",
                                            "Fabricación e instalación",
                                            "Dirección técnica",
                                            "Puesta en marcha",
                                            "Mantenimiento integral"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                    <Droplets className="w-3.5 h-3.5 text-[#384C9C]" strokeWidth={2.5} />
                                                </div>
                                                <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Card (Left) */}
                            <div className="lg:w-2/5 w-full sticky top-24">
                                <div className="bg-[#384C9C] text-white rounded-2xl shadow-xl overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                    <div className="p-8 relative z-10">
                                        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                            <div className="p-2 bg-white/10 rounded-lg text-white backdrop-blur-sm">
                                                <BarChart3 className="w-5 h-5" />
                                            </div>
                                            Resultados Medibles
                                        </h3>
                                        <div className="space-y-4">
                                            {[
                                                { label: "Impacto Energético", value: "Optimización radical de consumos" },
                                                { label: "Operativa", value: "Estabilidad total del proceso" },
                                                { label: "Garantía", value: "Cumplimiento técnico asegurado" }
                                            ].map((stat, i) => (
                                                <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                                                    <div className="text-xs font-semibold text-blue-200 uppercase tracking-wide mb-1">{stat.label}</div>
                                                    <div className="font-bold text-lg text-white">{stat.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                            <Link href="/contacto" className="flex items-center justify-between text-white font-semibold hover:text-blue-200 transition-colors group">
                                                <span>Consultar solución</span>
                                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CONTROL TERMICO Y HUMEDAD */}
            <section id="control-termico" className="section-padding bg-white overflow-hidden">
                <div className="container-custom relative">
                    <div className="z-10 relative">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                            {/* Main Content */}
                            <div className="lg:w-3/5">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-1 bg-orange-500 rounded-full" />
                                    <span className="text-orange-700 font-bold tracking-wider text-sm uppercase">Climatización Industrial</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
                                    Control Térmico y Humedad
                                </h2>
                                <p className="text-xl text-gray-800 mb-8 leading-relaxed font-light">
                                    Diseño e implantación de sistemas avanzados donde la temperatura y la humedad <span className="font-medium text-orange-700">impactan directamente</span> en la estabilidad productiva.
                                </p>

                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100 mb-8">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Optimizamos entornos industriales de alta exigencia técnica, garantizando condiciones críticas para el proceso productivo.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                                        {[
                                            "Sistemas HVAC industriales",
                                            "Control de humedad crítico",
                                            "Recuperación térmica",
                                            "Optimización energética",
                                            "Automatización y regulación",
                                            "Mantenimiento especializado"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                                                    <Factory className="w-3.5 h-3.5 text-orange-600" strokeWidth={2} />
                                                </div>
                                                <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Card */}
                            <div className="lg:w-2/5 w-full sticky top-24">
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-orange-500">
                                    <div className="p-8 bg-gradient-to-b from-orange-50/50 to-white">
                                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-orange-100 rounded-lg text-orange-700">
                                                <BarChart3 className="w-5 h-5" />
                                            </div>
                                            Beneficios Clave
                                        </h3>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                                    <ShieldCheck className="w-6 h-6 text-orange-600" />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-gray-500 uppercase font-semibold mb-0.5">Calidad</div>
                                                    <div className="font-bold text-gray-900 text-lg leading-tight">Estabilidad productiva</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                                    <Zap className="w-6 h-6 text-orange-600" />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-gray-500 uppercase font-semibold mb-0.5">Eficiencia</div>
                                                    <div className="font-bold text-gray-900 text-lg leading-tight">Menor consumo</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                                    <Settings className="w-6 h-6 text-orange-600" />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-gray-500 uppercase font-semibold mb-0.5">Fiabilidad</div>
                                                    <div className="font-bold text-gray-900 text-lg leading-tight">Control de procesos</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-gray-100">
                                            <Link href="/contacto" className="flex items-center justify-between text-orange-700 font-semibold hover:text-orange-800 transition-colors group">
                                                <span>Hablar con un experto</span>
                                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesGallery />

            {/* 4. CAE DETAIL */}
            <section id="cae" className="section-padding bg-white">
                <div className="container-custom">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-16 border border-green-100">

                        <div className="flex flex-col gap-8 mb-16">
                            <div className="w-full">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs tracking-wide uppercase mb-6">
                                    Eficiencia Energética
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
                                    Monetiza tu ahorro energético con CAE
                                    <span className="block text-2xl md:text-3xl font-medium text-gray-600 mt-2">Gestión integral y validación técnica garantizada</span>
                                </h2>
                                <div className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                                    <p className="mb-4">
                                        Analizamos actuaciones energéticas susceptibles de generar Certificados de Ahorro Energético (CAE) y gestionamos el proceso completo, desde el cálculo hasta la validación y monetización.
                                    </p>
                                    <p>
                                        Nuestro objetivo es maximizar el retorno económico del ahorro asegurando el cumplimiento técnico y normativo, y así fidelizar a nuestros clientes con más servicios.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* HORIZONTAL TIMELINE */}
                        <div className="relative mb-16 px-4 md:px-0">
                            {/* Mobile Scroll Wrapper */}
                            <div className="overflow-x-auto pb-8 md:pb-0 -mx-4 md:mx-0 px-4 md:px-0 scrollbar-hide">
                                <div className="flex md:grid md:grid-cols-5 min-w-[800px] md:min-w-0 relative">
                                    {/* Line connecting points - Desktop */}
                                    <div className="hidden md:block absolute top-[22px] left-0 w-full h-0.5 bg-green-200 z-0" />

                                    {[
                                        { step: "Estudio de medidas elegibles", icon: FileCheck },
                                        { step: "Cálculo del ahorro energético", icon: Zap },
                                        { step: "Documentación técnica", icon: ClipboardCheck },
                                        { step: "Tramitación administrativa", icon: Settings },
                                        { step: "Seguimiento hasta validación", icon: CheckCircle2 }
                                    ].map((item, index) => (
                                        <div key={index} className="flex flex-col items-center text-center relative z-10 flex-1 px-4 min-w-[160px]">
                                            <div className="w-12 h-12 rounded-full bg-white border-2 border-green-500 flex items-center justify-center text-green-600 shadow-sm mb-4">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-sm font-semibold text-gray-800 leading-snug">{item.step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Mobile Swipe Indication */}
                            <div className="md:hidden text-center text-xs text-green-600/60 font-medium mt-[-10px]">
                                Desliza para ver el proceso &rarr;
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <Link href="/contacto">
                                <Button size="lg" className="bg-green-600 text-white border-2 border-green-600 hover:bg-white hover:text-green-600 transition-all duration-300 shadow-md font-semibold">
                                    Solicitar estudio CAE
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>



            {/* 5. METODOLOGIA */}
            <section className="pt-[60px] md:pt-[80px] lg:pt-[100px] pb-12 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat mb-3">Metodología de trabajo</h2>
                        <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">Proceso estructurado para garantizar el éxito técnico y la calidad en cada fase.</p>
                    </div>

                    <div className="relative">
                        {/* Process Line (Desktop) */}
                        <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-primary/20 -z-10 transform translate-y-4"></div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    phase: "Fase Inicial",
                                    items: ["Definición de objetivos", "Estudio de viabilidad", "Análisis de alternativas", "Estimación de costes"]
                                },
                                {
                                    phase: "Fase Diseño",
                                    items: ["Planificación técnica", "Presupuesto detallado", "Redacción documental", "Tramitaciones legales"]
                                },
                                {
                                    phase: "Fase Ejecución",
                                    items: ["Dirección de obra", "Control económico", "Coordinación técnica", "Seguimiento de calidad"]
                                },
                                {
                                    phase: "Fase Final",
                                    items: ["Puesta en marcha", "Verificación de objetivos", "Plan de mantenimiento", "Gestión de garantías"]
                                }
                            ].map((step, index) => (
                                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-primary/20 relative group hover:-translate-y-1 transition-transform duration-300">
                                    <div className="min-w-[3rem] inline-flex flex-col items-center mb-6">
                                        <span className="text-4xl font-bold text-primary/30 mb-2 font-montserrat">0{index + 1}</span>
                                    </div>

                                    <h3 className="text-xl font-extrabold text-gray-900 mb-4">{step.phase}</h3>
                                    <ul className="space-y-3">
                                        {step.items.map((item, i) => (
                                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-1.5 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Accordion Alternative - Hidden on md+ (Using simple grid above for now, can implement accordion if needed for strict mobile optimization) */}
                </div>
            </section>



            {/* 7. QUICK CONTACT */}
            <section className="py-16 md:py-20 bg-primary text-white">
                <div className="container-custom">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white mb-8 font-montserrat">¿Hablamos?</h2>
                        <Link href="/contacto">
                            <Button size="lg" className="px-10 bg-white text-primary border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-lg font-semibold">Contactar ahora</Button>
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
