"use client";

import { useState } from "react";
import { BarChart3, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface StatItem {
    label: string;
    value: string;
}

interface ServiceSidebarCardProps {
    variant: "green" | "blue" | "orange";
    title: string;
    stats: StatItem[];
    ctaText: string;
    ctaLink?: string;
}

export function ServiceSidebarCard({
    variant,
    title,
    stats,
    ctaText,
    ctaLink = "/contacto"
}: ServiceSidebarCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Configuration based on variant
    const styles = {
        green: {
            wrapper: "bg-white border-t-4 border-green-500",
            innerBg: "bg-gradient-to-b from-green-50/50 to-white",
            iconBox: "bg-green-100 text-green-700",
            title: "text-gray-900",
            statCard: "bg-white border-gray-100 hover:border-green-200",
            statLabel: "text-gray-400",
            statValue: "text-gray-800 group-hover:text-green-700",
            ctaText: "text-green-700 hover:text-green-800",
            borderTop: "border-gray-100"
        },
        blue: {
            wrapper: "bg-[#384C9C] text-white",
            innerBg: "relative z-10", // No gradient, plain dark
            iconBox: "bg-white/10 text-white backdrop-blur-sm",
            title: "text-white",
            statCard: "bg-white/5 border-white/10 hover:bg-white/10",
            statLabel: "text-blue-200",
            statValue: "text-white",
            ctaText: "text-white hover:text-blue-200",
            borderTop: "border-white/10"
        },
        orange: {
            wrapper: "bg-white border-t-4 border-orange-500",
            innerBg: "bg-gradient-to-b from-orange-50/50 to-white",
            iconBox: "bg-orange-100 text-orange-700",
            title: "text-gray-900",
            statCard: "bg-white border-gray-100 hover:border-orange-200",
            statLabel: "text-gray-400",
            statValue: "text-gray-800 group-hover:text-orange-700",
            ctaText: "text-orange-700 hover:text-orange-800",
            borderTop: "border-gray-100"
        }
    };

    const currentStyle = styles[variant];

    return (
        <div className={cn("rounded-2xl shadow-xl overflow-hidden relative", currentStyle.wrapper)}>


            <div className={cn("p-6 md:p-8", currentStyle.innerBg)}>
                {/* Header - Clickable on Mobile */}
                <div
                    className="flex items-center justify-between cursor-pointer md:cursor-default"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <h3 className={cn("text-xl font-bold flex items-center gap-3", currentStyle.title)}>
                        <div className={cn("p-2 rounded-lg", currentStyle.iconBox)}>
                            <BarChart3 className="w-5 h-5" />
                        </div>
                        {title}
                    </h3>

                    {/* Mobile Arrow */}
                    <div className={cn(
                        "md:hidden transition-transform duration-300",
                        isOpen ? "rotate-180" : "rotate-0",
                        variant === 'blue' ? "text-white" : "text-gray-500"
                    )}>
                        <ChevronDown className="w-6 h-6" />
                    </div>
                </div>

                {/* Content - Collapsible on Mobile, Always Visible on Desktop */}
                <div className={cn("md:block", isOpen ? "block" : "hidden")}>
                    <div className="space-y-4 mt-6">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "group p-4 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300",
                                    currentStyle.statCard
                                )}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <span className={cn("text-xs font-semibold uppercase tracking-wide", currentStyle.statLabel)}>
                                        {stat.label}
                                    </span>
                                </div>
                                <div className={cn("font-normal text-lg transition-colors", currentStyle.statValue)}>
                                    {stat.value}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={cn("mt-8 pt-6 border-t", currentStyle.borderTop)}>
                        <Link href={ctaLink} className={cn("flex items-center justify-between font-semibold transition-colors group", currentStyle.ctaText)}>
                            <span>{ctaText}</span>
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
