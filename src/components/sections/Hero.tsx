"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";


export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[600px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, rgba(15,30,58,0.85), rgba(15,30,58,0.55))' }} />
                <Image
                    src="/images/hero/hero-bg.png"
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
                        <div className="flex items-start gap-6 mb-6">
                            <div className="h-24 w-1.5 bg-primary rounded-full hidden md:block shadow-[0_0_15px_rgba(56,76,156,0.5)] mt-2"></div>
                            <h1 className="text-[36px] md:text-[52px] lg:text-[64px] font-bold font-montserrat leading-[1.1] drop-shadow-lg tracking-tight">
                                Soluciones técnicas de <br className="hidden lg:block" />
                                alto rendimiento industrial
                            </h1>
                        </div>



                        <div className="flex flex-col items-start gap-8 pl-0 md:pl-8">
                            <Link href="/contacto">
                                <Button size="lg" className="px-6 py-4 text-base md:px-10 md:py-7 md:text-lg bg-[#0F1E3A] text-white border border-transparent hover:bg-transparent hover:border-white hover:text-white shadow-2xl transition-all duration-300 w-auto rounded-lg">
                                    Solicitar reunión
                                </Button>
                            </Link>

                            <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-8 text-white/80 text-sm font-medium tracking-wide justify-start">
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
