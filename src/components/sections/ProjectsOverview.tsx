import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Oasis Project",
        category: "Ahorro Energía + Agua",
        description: "Soluciones integrales para la optimización energética y gestión eficiente del agua en la industria.",
        image: "/images/oasis-hero-official.png",
        href: "/oasis-project",
        badge: "Proyecto Estratégico",
    },
    {
        title: "Marlenka 2.0 + Magic Box",
        category: "Control Clima",
        description: "Control integrado de temperatura y humedad para optimización de procesos.",
        image: "/images/projects/marlenka-magicbox.png",
        href: "/proyectos",
    },
    {
        title: "Sistema TWT",
        category: "Agua",
        description: "Regeneración y reutilización de agua para industria y poblaciones < 20k hab.",
        image: "/images/projects/twt.png",
        href: "/proyectos",
    },
];

export function ProjectsOverview() {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Proyectos Destacados
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Casos de éxito donde la innovación técnica genera valor tangible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            href={project.href}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col"
                        >
                            <div className="relative h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 font-medium">
                                        Imagen Proyecto
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                                {project.badge && (
                                    <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md z-10">
                                        {project.badge}
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="text-xs font-bold tracking-wider text-secondary uppercase mb-2">
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow">
                                    {project.description}
                                </p>
                                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                                    Ver proyecto <ArrowRight className="ml-2 h-4 w-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/proyectos">
                        <Button size="lg" className="shadow-lg">
                            Ver todos los proyectos
                        </Button>
                    </Link>
                </div>
            </div>
        </section >
    );
}
