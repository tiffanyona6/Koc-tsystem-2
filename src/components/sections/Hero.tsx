"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";


export function Hero() {
    return (
        <section className="relative pt-52 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-dvh md:min-h-[600px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, rgba(15,30,58,0.85), rgba(15,30,58,0.55))' }} />
                <Image
                    src="/images/hero/hero-bg.webp"
                    alt="KOC Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container-custom relative z-20 text-left text-white">
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6 md:mb-6 text-center md:text-left">
                            <div className="h-24 w-1.5 bg-primary rounded-full hidden md:block shadow-[0_0_15px_rgba(56,76,156,0.5)] mt-2"></div>
                            <h1 className="text-[34px] md:text-[52px] lg:text-[64px] font-bold font-montserrat leading-tight md:leading-[1.1] drop-shadow-lg tracking-tight">
                                Soluciones técnicas de <br className="hidden lg:block" />
                                alto rendimiento industrial
                            </h1>
                        </div>



                        <div className="flex flex-col items-center md:items-start gap-24 md:gap-8 pl-0 md:pl-8 w-full md:w-auto">
                            <Link href="/contacto">
                                <Button size="lg" variant="primary" className="px-8 py-3 text-base md:px-10 md:py-4 md:text-lg w-auto rounded-lg shadow-xl">
                                    Contáctanos
                                </Button>
                            </Link>

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-y-8 md:gap-y-3 md:gap-x-8 text-white/80 text-lg md:text-sm font-medium tracking-wide justify-center md:justify-start w-full md:w-auto">
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                    26 años de experiencia
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                    +100 proyectos ejecutados
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                                    Optimización medible
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
