"use client";



import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Droplets, Zap, CheckCircle2, Factory, FileCheck, BarChart3, Settings, ClipboardCheck, HardHat, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { ServicesGalleryCarousel } from "@/components/sections/ServicesGalleryCarousel";
import { ServiceSidebarCard } from "@/components/sections/ServiceSidebarCard";
import { MethodologyPhaseCard } from "@/components/sections/MethodologyPhaseCard";

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
            <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
                {/* Lateral Graphic Element */}
                <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-full bg-[#384C9C]/5 skew-x-12 transform origin-top-right pointer-events-none" />


                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-[0.2em] mb-0">
                            Servicios
                        </h1>
                    </div>
                </div>
            </section>



            {/* 2. ENERGIA Y DESCARBONIZACION */}
            <section id="energia-descarbonizacion" className="section-padding bg-white overflow-hidden">
                <div className="container-custom relative">


                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-24 items-center">
                            {/* Main Content */}
                            <div className="lg:w-3/5">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-1 bg-green-500 rounded-full" />
                                    <span className="text-green-700 font-bold tracking-wider text-sm uppercase">Energía y Descarbonización</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
                                    Eficiencia energética para un futuro sostenible
                                </h2>
                                <p className="text-xl text-gray-800 mb-8 leading-relaxed font-light">
                                    Desarrollamos estrategias de eficiencia energética e integración de energías renovables para entornos industriales, orientadas a la <span className="font-medium text-green-700">reducción de costes operativos</span> y huella de carbono.
                                </p>

                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-green-50 mb-6">
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
                            <div className="lg:w-2/5 w-full">
                                <ServiceSidebarCard
                                    variant="green"
                                    title="Impacto Directo"
                                    stats={[
                                        { label: "Sostenibilidad", value: "Reducción de huella de carbono total" },
                                        { label: "Economía", value: "Minimización de costes operativos" },
                                        { label: "Normativa", value: "Cumplimiento medioambiental garantizado" }
                                    ]}
                                    ctaText="Solicitar auditoría"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CICLO INTEGRAL DEL AGUA */}
            <section id="edar-etap" className="section-padding bg-gray-50 relative overflow-hidden">


                <div className="container-custom relative z-10">
                    <div>
                        <div className="flex flex-col lg:flex-row-reverse gap-4 lg:gap-24 items-center">

                            {/* Main Content (Right) */}
                            <div className="lg:w-3/5">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-1 bg-[#384C9C] rounded-full" />
                                    <span className="text-[#384C9C] font-bold tracking-wider text-sm uppercase">Tratamiento de Agua</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
                                    Ciclo Integral del Agua
                                </h2>
                                <p className="text-xl text-gray-800 mb-8 leading-relaxed font-light">
                                    Diseño, fabricación e implantación de soluciones para EDAR, ETAP y sistemas de <span className="font-medium text-[#384C9C]">regeneración y reutilización</span> de agua industrial.
                                </p>

                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-blue-50 mb-6">
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
                            <div className="lg:w-2/5 w-full">
                                <ServiceSidebarCard
                                    variant="blue"
                                    title="Resultados Medibles"
                                    stats={[
                                        { label: "Impacto Energético", value: "Optimización radical de consumos" },
                                        { label: "Operativa", value: "Estabilidad total del proceso" },
                                        { label: "Garantía", value: "Cumplimiento técnico asegurado" }
                                    ]}
                                    ctaText="Consultar solución"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CONTROL TERMICO Y HUMEDAD */}
            <section id="control-termico" className="section-padding bg-white overflow-hidden">
                <div className="container-custom relative">
                    <div className="z-10 relative">
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-24 items-center">

                            {/* Main Content */}
                            <div className="lg:w-3/5">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-1 bg-orange-500 rounded-full" />
                                    <span className="text-orange-700 font-bold tracking-wider text-sm uppercase">Climatización Industrial</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
                                    Control Térmico y Humedad
                                </h2>
                                <p className="text-xl text-gray-800 mb-8 leading-relaxed font-light">
                                    Diseño e implantación de sistemas avanzados donde la temperatura y la humedad <span className="font-medium text-orange-700">impactan directamente</span> en la estabilidad productiva.
                                </p>

                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-orange-100 mb-6">
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
                            <div className="lg:w-2/5 w-full">
                                <ServiceSidebarCard
                                    variant="orange"
                                    title="Beneficios Clave"
                                    stats={[
                                        { label: "Calidad", value: "Estabilidad productiva total" },
                                        { label: "Eficiencia", value: "Reducción de mermas y consumo" },
                                        { label: "Control", value: "Monitorización de variables críticas" }
                                    ]}
                                    ctaText="Hablar con un experto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesGalleryCarousel />

            {/* 4. CAE DETAIL */}
            <section id="cae" className="section-padding bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-10 border border-green-100">

                        <div className="flex flex-col gap-8 mb-16">
                            <div className="w-full">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs tracking-wide uppercase mb-6">
                                    Eficiencia Energética
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
                                    Monetiza tu ahorro energético con CAE
                                    <span className="block text-xl md:text-3xl font-medium text-gray-600 mt-2">Gestión integral y validación técnica garantizada</span>
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

                        <div className="flex flex-col items-center md:items-start gap-4">
                            <Link href="/contacto">
                                <Button size="lg" className="bg-green-600 text-white border-2 border-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 transition-all duration-300 shadow-md font-semibold">
                                    Solicitar estudio CAE
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>



            {/* 5. METODOLOGIA */}
            <section className="section-padding bg-gray-50 overflow-hidden relative">
                {/* Decorative background element gradient */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                        {/* Title Section (Left) */}
                        <div className="lg:w-1/3 lg:sticky lg:top-32 flex flex-col z-20">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-montserrat mb-6 leading-tight">
                                Metodología<br className="hidden lg:block" /> de trabajo
                            </h2>
                            <div className="w-16 h-1.5 bg-primary mb-6 rounded-full"></div>
                            <p className="text-gray-600 font-normal text-lg md:text-xl leading-relaxed">
                                Nuestro proceso está estructurado para garantizar el éxito técnico, la rentabilidad y la máxima calidad en cada una de las fases de la intervención industrial.
                            </p>
                        </div>

                        {/* Phases Section (Right) */}
                        <div className="lg:w-2/3 grid md:grid-cols-2 gap-4 md:gap-6 w-full relative z-10">
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
                                <MethodologyPhaseCard
                                    key={index}
                                    phase={step.phase}
                                    items={step.items}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* 7. QUICK CONTACT */}
            <section className="section-padding bg-primary text-white text-center">
                <div className="container-custom">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">Mejora el rendimiento de tu instalación</h2>
                    <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Contacte con nuestro equipo para una valoración técnica sin compromiso.
                    </p>
                    <Link href="/contacto">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 h-auto">Solicitar diagnóstico técnico</Button>
                    </Link>
                </div>
            </section>

        </main>
    );
}
