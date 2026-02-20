import { ContactForm } from "@/components/layout/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | KOC Technical System",
    description: "Contacte con nuestro equipo de ingenieros para estudiar su proyecto de eficiencia energética o gestión hídrica. Respuesta técnica en menos de 24h.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen font-poppins text-gray-800 bg-white">
            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-full bg-[#384C9C]/5 skew-x-12 transform origin-top-right pointer-events-none" />
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-[0.2em] mb-0">
                            Contacto
                        </h1>
                    </div>
                </div>
            </section>

            <div className="container-custom section-padding">
                {/* MOBILE LAYOUT (CUSTOM DESIGN) */}
                <div className="md:hidden space-y-8 mb-12">
                    {/* Mobile Cards Grid */}
                    <div className="grid gap-4">
                        {/* Phone Card */}
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg text-primary shrink-0">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-0.5">Teléfono</span>
                                <div className="flex flex-col">
                                    <a href="tel:+34950531229" className="text-base font-normal text-gray-900 leading-tight">
                                        +34 950 531 229
                                    </a>
                                    <a href="tel:+34606442514" className="text-sm text-gray-500 leading-tight mt-0.5">
                                        +34 606 442 514
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg text-primary shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-0.5">Email</span>
                                <a href="mailto:info@koctsystem.com" className="block text-base font-normal text-gray-900 break-all leading-tight hover:text-primary transition-colors">
                                    info@koctsystem.com
                                </a>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg text-primary shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-0.5">Ubicación</span>
                                <p className="text-sm font-normal text-gray-900 leading-snug">
                                    C/ Chillida Nº4, Entrep.<br />
                                    Edif. Carrida, Roquetas de Mar
                                </p>
                            </div>
                        </div>

                        {/* Schedule Card Mobile */}
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg text-secondary shrink-0">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-0.5">Horario</span>
                                <p className="text-base font-normal text-gray-900 leading-tight">
                                    De 8h a 15h
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Project Banner Mobile */}
                    <div className="bg-blue-50/80 p-6 rounded-xl border border-blue-100 text-center backdrop-blur-sm">
                        <h3 className="text-primary font-bold text-lg mb-2">¿Tiene un proyecto?</h3>
                        <p className="text-gray-700">
                            Solicite una reunión técnica y estudiaremos su caso de forma personalizada.
                        </p>
                    </div>

                    {/* Contact Form Mobile */}
                    <ContactForm />
                </div>

                {/* DESKTOP LAYOUT (CLASSIC GRID) */}
                <div className="hidden md:grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Left Column: Cards */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                            {/* Project Banner Section */}
                            <div className="bg-blue-50/50 p-8 border-b border-blue-100 text-left">
                                <h3 className="text-primary font-bold text-xl mb-3">¿Tiene un proyecto?</h3>
                                <p className="text-gray-800 leading-relaxed">
                                    Solicite una reunión técnica y estudiaremos su caso de forma personalizada.
                                </p>
                            </div>

                            {/* Direct Info Section */}
                            <div className="p-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Información Directa</h2>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="bg-blue-50 p-3 rounded-lg mr-4 text-primary">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-500 mb-1">Teléfono</span>
                                            <a href="tel:+34950531229" className="block text-lg font-normal text-gray-900 hover:text-secondary">
                                                +34 950 531 229
                                            </a>
                                            <a href="tel:+34606442514" className="block text-lg font-normal text-gray-900 hover:text-secondary">
                                                +34 606 442 514
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-50 p-3 rounded-lg mr-4 text-primary">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-500 mb-1">Email</span>
                                            <a href="mailto:info@koctsystem.com" className="text-lg font-normal text-gray-900 hover:text-secondary">
                                                info@koctsystem.com
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-50 p-3 rounded-lg mr-4 text-primary">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-500 mb-1">Ubicación</span>
                                            <p className="text-gray-900 font-normal leading-relaxed">
                                                C/ Chillida Nº4<br />
                                                Entrep. Edif. Carrida<br />
                                                Roquetas de Mar, Almería
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-50 p-3 rounded-lg mr-4 text-primary">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-500 mb-1">Horario</span>
                                            <p className="text-lg font-normal text-gray-900">
                                                De 8h a 15h
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-2">
                        <p className="text-xl text-gray-800 mb-6 md:hidden">
                            Cuéntenos su proyecto o necesidad y le responderemos con la mayor brevedad.
                        </p>
                        <ContactForm />
                    </div>
                </div>

                {/* Location Map */}
                <div className="max-w-6xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-sm h-[250px] md:h-[350px] relative z-0">
                    <iframe
                        width="100%"
                        height="100%"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Edificio%20Carrida%20Plaza%2C%20C.%20Chillida%2C%204%2C%2004740%20Roquetas%20de%20Mar%2C%20Almer%C3%ADa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        title="Ubicación KOC Technical System"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </main >
    );
}
