import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

const projects = [
    {
        title: "Oasis Project",
        category: "Ahorro Energía + Agua",
        description: "Soluciones integrales para la optimización energética y gestión eficiente del agua en la industria.",
        image: "/images/oasis-hero-official.png",
        href: "/oasis-project",
    },
    {
        title: "TARGA KOC",
        category: "Desinfección",
        description: "Sistema de desinfección por nebulización ultrasónica para entornos críticos.",
        image: "/images/projects/targa.png",
        href: "/targa-koc",
    },
    {
        title: "Marlenka 2.0 + Magic Box",
        category: "Control Clima",
        description: "Control integrado de temperatura y humedad para optimización de procesos.",
        image: "/images/projects/marlenka-magicbox.png",
        href: "/marlenka-magic-box",
    },
    {
        title: "Sistema TWT",
        category: "Agua",
        description: "Regeneración y reutilización de agua para industria y poblaciones < 20k hab.",
        image: "/images/projects/twt.png",
        href: "/sistema-twt",
    },
    {
        title: "Sistema Automático de Atemperado",
        category: "Resinas",
        description: "Solución de atemperado de resina para procesos industriales de alta precisión.",
        image: "/images/projects/proyecto-sistema-automatico.png",
        href: "/sistema-atemperado",
    }
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen font-poppins text-gray-800 bg-white">
            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
                {/* Lateral Graphic Element */}
                <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-full bg-[#384C9C]/5 skew-x-12 transform origin-top-right pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-[0.2em] mb-0">
                            Proyectos Realizados
                        </h1>
                    </div>
                </div>
            </section>

            <div className="container-custom section-padding">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300 ${index === 0 ? 'md:col-span-2 lg:col-span-3 md:flex-row md:items-center' : ''}`}
                        >
                            {/* Image Container */}
                            <Link
                                href={project.href}
                                className={`relative block overflow-hidden cursor-pointer ${index === 0 ? 'w-full md:w-3/5 aspect-video md:aspect-auto md:h-full' : 'w-full aspect-video'}`}
                            >
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        quality={95}
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"}
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-gray-300 gap-2 w-full h-full bg-gray-50">
                                        <ImageIcon className="w-12 h-12 opacity-50" />
                                        <span className="text-xs font-medium uppercase tracking-widest opacity-70">Sin imagen</span>
                                    </div>
                                )}
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent group-hover:from-black/5 transition-all duration-300" />
                            </Link>

                            {/* Content */}
                            <div className={`p-6 md:p-8 flex flex-col flex-grow ${index === 0 ? 'md:w-2/5 md:justify-center md:py-12' : ''}`}>
                                <div className="text-xs font-bold tracking-wider text-secondary uppercase mb-3">
                                    {project.category}
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                                    {project.title}
                                </h2>
                                <p className="text-gray-800 mb-6 flex-grow line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <Link href={project.href} className="mt-auto pt-4 border-t border-gray-50">
                                    <Button className="w-full bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-lg justify-between group/btn shadow-none h-12 px-6">
                                        <span className="text-base font-semibold">Ver proyecto</span>
                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main >
    );
}
