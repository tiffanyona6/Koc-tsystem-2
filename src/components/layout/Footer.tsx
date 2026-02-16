import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Info */}
                    <div>
                        <div className="relative h-20 w-72 md:h-16 md:w-56 mb-6">
                            <Image
                                src="/images/branding/koc-logo-white.png"
                                alt="KOC Technical System"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-400 mb-6">
                            Soluciones técnicas reales para procesos industriales y administraciones.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Menú</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link href="/proyectos" className="text-gray-400 hover:text-white transition-colors">
                                    Proyectos
                                </Link>
                            </li>
                            <li>
                                <Link href="/nosotros" className="text-gray-400 hover:text-white transition-colors">
                                    Sobre Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/legal/privacidad" className="text-gray-400 hover:text-white transition-colors">
                                    Política de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/cookies" className="text-gray-400 hover:text-white transition-colors">
                                    Política de Cookies
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/aviso-legal" className="text-gray-400 hover:text-white transition-colors">
                                    Aviso Legal
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Phone className="w-5 h-5 text-secondary mr-3 mt-1" />
                                <span className="text-gray-400">+34 606 442 514</span>
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 text-secondary mr-3 mt-1" />
                                <span className="text-gray-400">info@koctsystem.com</span>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-secondary mr-3 mt-1" />
                                <span className="text-gray-400">C/ Chillida Nº4 – Entrep. Edif. Carrida<br />Roquetas de Mar, Almería</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} KOC Technical System. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
