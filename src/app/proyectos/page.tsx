import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Oasis Project",
        category: "Ahorro Energía + Agua",
        description: "Soluciones integrales para la optimización energética y gestión eficiente del agua en la industria.",
        image: null,
    },
    {
        title: "TARGA KOC",
        category: "Desinfección",
        description: "Sistema de desinfección por nebulización ultrasónica para entornos críticos.",
        image: "/images/projects/targa.png",
    },
    {
        title: "Marlenka 2.0 + Magic Box",
        category: "Control Clima",
        description: "Control integrado de temperatura y humedad para optimización de procesos.",
        image: "/images/projects/marlenka-magicbox.png",
    },
    {
        title: "Sistema TWT",
        category: "Agua",
        description: "Regeneración y reutilización de agua para industria y poblaciones < 20k hab.",
        image: "/images/projects/twt.png",
    },
    {
        title: "Sistema Automático de Atemperado",
        category: "Resinas",
        description: "Solución de atemperado de resina para procesos industriales de alta precisión.",
        image: "/images/projects/proyecto-sistema-automatico.png",
    }
];

export default function ProjectsPage() {
    return (
        <main className="pt-28 md:pt-36 lg:pt-40 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Proyectos Realizados</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Innovación aplicada. Conozca algunos de nuestros casos de éxito más relevantes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                            <div className="relative h-64 bg-gray-200 flex items-center justify-center text-gray-400 font-medium overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    "Imagen Proyecto"
                                )}
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="text-xs font-bold tracking-wider text-secondary uppercase mb-2">
                                    {project.category}
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {project.title}
                                </h2>
                                <p className="text-gray-600 mb-6 flex-grow">
                                    {project.description}
                                </p>
                                <Link href="/contacto">
                                    <Button variant="primary" className="w-full justify-between">
                                        Más información <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
