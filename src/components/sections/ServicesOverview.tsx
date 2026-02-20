import { Button } from "@/components/ui/Button";
import { ArrowRight, Droplets, Zap, Thermometer, FileText } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Energía y Descarbonización",
        description: "Auditorías energéticas, integración de renovables y planes de descarbonización para industria.",
        icon: Zap,
        href: "/servicios",
        color: "bg-blue-100 text-primary",
    },
    {
        title: "Ciclo Integral del Agua",
        description: "Diseño y optimización de EDAR, ETAP y sistemas de regeneración y reutilización de agua.",
        icon: Droplets,
        href: "/servicios",
        color: "bg-cyan-100 text-secondary",
    },
    {
        title: "Control Térmico y Humedad",
        description: "Sistemas avanzados de climatización industrial y control de procesos críticos.",
        icon: Thermometer,
        href: "/servicios",
        color: "bg-sky-100 text-tertiary",
    },
    {
        title: "Certificados de Ahorro (CAE)",
        description: "Gestión integral de Certificados de Ahorro Energético para monetizar sus ahorros.",
        icon: FileText,
        href: "/servicios",
        color: "bg-gray-100 text-gray-700",
    },
];

export function ServicesOverview() {
    return (
        <section className="section-padding bg-[#F8F9FA]">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 font-montserrat">
                            Soluciones técnicas para la industria
                        </h2>
                        <p className="text-lg text-gray-600">
                            Transformamos sus retos técnicos en soluciones eficientes y rentables.
                        </p>
                    </div>
                    <Link href="/servicios">
                        <Button size="lg" className="group shadow-lg">
                            Ver todos los servicios
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group block p-10 rounded-2xl bg-white shadow-sm border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors", service.color)}>
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
