"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface MetricItemProps {
    value: number;
    label: string;
    prefix?: string;
}

function MetricItem({ value, label, prefix = "+" }: MetricItemProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: 1.2, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, value, count]);

    return (
        <div ref={ref} className="w-full max-w-[380px] mx-auto lg:mx-0 bg-white rounded-xl py-6 px-7 shadow-sm border border-blue-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="text-4xl md:text-5xl lg:text-[48px] lg:leading-[1.1] font-semibold text-primary mb-2 flex items-center">
                <span>{prefix}</span>
                <motion.span>{rounded}</motion.span>
            </div>
            <div className="text-gray-600 font-medium text-lg lg:text-[16px]">{label}</div>
        </div>
    );
}

export function HomeMetrics() {
    return (
        <section className="w-full bg-gray-50 border-y border-gray-100 section-padding my-16">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Text + CTA */}
                    <div className="flex flex-col justify-center text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight">
                            Más de dos décadas convirtiendo eficiencia en resultados reales.
                        </h2>

                        <div>
                            <Link href="/nosotros">
                                <Button size="lg" className="px-10 shadow-lg">
                                    Conócenos
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Key Metrics Stack */}
                    <div className="flex flex-col gap-6">
                        <MetricItem value={26} label="Años de experiencia" />
                        <MetricItem value={100} label="Clientes que confían" />
                        <MetricItem value={200} label="Proyectos llave en mano" />
                    </div>

                </div>
            </div>
        </section>
    );
}
