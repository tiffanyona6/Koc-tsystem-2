import { ContactForm } from "@/components/layout/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen font-poppins text-gray-800 bg-white">
            {/* 1. HERO SECTION */}
            <section className="pt-32 pb-10 md:pt-36 md:pb-16 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-full bg-[#384C9C]/5 skew-x-12 transform origin-top-right pointer-events-none" />
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-primary mb-6 leading-tight">
                            Contacto
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-light">
                            Estamos aquí para ayudarle. <span className="hidden md:inline">Cuéntenos su proyecto o necesidad y le responderemos con la mayor brevedad.</span>
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-custom section-padding">
                <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Left Column: Cards */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Direct Info Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Información Directa</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-lg mr-4 text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500 mb-1">Teléfono</span>
                                        <a href="tel:+34950531229" className="block text-lg font-semibold text-gray-900 hover:text-secondary">
                                            +34 950 531 229
                                        </a>
                                        <a href="tel:+34606442514" className="block text-lg font-semibold text-gray-900 hover:text-secondary">
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
                                        <a href="mailto:info@koctsystem.com" className="text-lg font-semibold text-gray-900 hover:text-secondary">
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
                                        <p className="text-gray-900 font-medium leading-relaxed">
                                            C/ Chillida Nº4<br />
                                            Entrep. Edif. Carrida<br />
                                            Roquetas de Mar, Almería
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Schedule Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Horario</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-lg mr-4 text-primary">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500 mb-1">Horario</span>
                                        <p className="text-lg font-semibold text-gray-900">
                                            De 8h a 15h
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-2">
                        <p className="text-xl text-gray-600 mb-6 md:hidden">
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
