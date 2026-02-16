
import Image from "next/image";
import { Handshake, Lightbulb, Leaf } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen font-poppins text-gray-800 bg-white overflow-hidden">

            {/* 1. HERO SECTION - Consistent Design (Matching Projects Page) */}
            <section className="pt-32 pb-10 md:pt-36 md:pb-16 bg-gray-50 relative overflow-hidden">
                {/* Lateral Graphic Element */}
                <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-full bg-[#384C9C]/5 skew-x-12 transform origin-top-right pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-primary mb-6 leading-tight">
                            Sobre Nosotros
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-light">
                            Más allá de la consultoría: transformamos procesos industriales complejos en activos eficientes y rentables.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. BLOQUE PRESENTACIÓN - Layered Composition */}
            <section className="section-padding bg-white relative">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Left Column - Layered Image Composition */}
                        <div className="relative order-2 lg:order-1">
                            {/* Dotted pattern decoration - Top Left */}
                            <div className="absolute -top-10 -left-10 w-32 h-32 opacity-20"
                                style={{ backgroundImage: 'radial-gradient(#384C9C 2px, transparent 2px)', backgroundSize: '12px 12px' }}>
                            </div>

                            {/* Blue decorative background block */}
                            <div className="absolute -top-6 -left-6 w-3/4 h-3/4 bg-primary/10 rounded-3xl -z-10"></div>

                            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src="/images/about/foto-estudio.png"
                                    alt="Instalaciones KOC Technical System"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Dotted pattern decoration */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20"
                                style={{ backgroundImage: 'radial-gradient(#384C9C 2px, transparent 2px)', backgroundSize: '12px 12px' }}>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="order-1 lg:order-2 space-y-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Optimizamos lo esencial: <br />
                                <span className="text-primary">Energía, Agua y Temperatura</span>
                            </h2>

                            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                                <p>
                                    Koc Technical System no es solo una consultora; somos el brazo técnico que integra soluciones llave en mano. Intervenimos directamente donde el consumo es crítico.
                                </p>
                                <p>
                                    Nuestra metodología une la ingeniería de detalle con la ejecución práctica. No entregamos informes teóricos, entregamos <span className="font-semibold text-gray-900">sistemas funcionando y ahorros certificados.</span>
                                </p>
                            </div>

                            {/* Modern Mission/Vision Tabs */}
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-4">
                                        <Handshake className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Nuestra Misión</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Convertir ineficiencias energéticas e hídricas en capital operativo monetizable (CAE) para la industria.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                                        <Lightbulb className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Nuestra Visión</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Ser el estándar técnico de referencia en descarbonización industrial rentable y pragmática.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MÉTRICAS - Bold Blue Band */}
            <section className="bg-primary text-white section-padding relative overflow-hidden">
                {/* Abstract background shapes */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                    </svg>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                        {[
                            { number: "+26", label: "Años de Innovación", detail: "En el sector industrial" },
                            { number: "+100", label: "Partners Activos", detail: "Clientes recurrentes" },
                            { number: "+200", label: "Proyectos Entregados", detail: "Llave en mano" }
                        ].map((metric, index) => (
                            <div key={index} className="flex flex-col items-center px-4">
                                <span className="text-6xl md:text-7xl font-bold tracking-tighter mb-2">{metric.number}</span>
                                <span className="text-lg font-semibold text-blue-100 uppercase tracking-wider mb-1">{metric.label}</span>
                                <span className="text-sm text-blue-200/80 font-light">{metric.detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. VALORES CORPORATIVOS - Clean Grid */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">Nuestros Pilares</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
                        <p className="text-gray-600 text-lg">
                            Principios que guían cada decisión técnica y comercial en Koc Technical System.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: Handshake, title: "Rigor Técnico", text: "No vendemos promesas. Vendemos ingeniería calculada, ejecutada y verificada." },
                            { icon: Lightbulb, title: "Innovación Práctica", text: "Tecnología punta aplicada a problemas reales, sin sobreingeniería innecesaria." },
                            { icon: Leaf, title: "Rentabilidad Sostenible", text: "La ecología industrial solo funciona si es económicamente viable para el cliente." }
                        ].map((value, index) => (
                            <div key={index} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:-translate-y-2">
                                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
                                    <value.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-[16px]">
                                    {value.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main >
    );
}
