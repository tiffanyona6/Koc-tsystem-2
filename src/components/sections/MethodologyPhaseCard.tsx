import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhaseCardProps {
    phase: string;
    items: string[];
    index: number;
}

export function MethodologyPhaseCard({ phase, items, index }: PhaseCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={cn(
                "bg-white rounded-xl shadow-sm border border-gray-100 relative group transition-all duration-300 overflow-hidden md:h-full",
                // Mobile: Side accent when open. Desktop: Top accent always (or match mobile style if preferred, keeping existing desktop hint)
                isOpen ? "border-l-4 border-l-primary" : "border-l-4 border-l-transparent md:border-l-0 md:border-t-4 md:border-t-primary",
                // Hover effect for desktop
                "md:hover:-translate-y-1 md:hover:shadow-lg"
            )}
        >
            {/* Header - Clickable only on mobile */}
            <div
                className="p-5 md:p-6 flex items-center justify-between cursor-pointer md:cursor-default"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-3 md:gap-4 text-primary">
                    <span className="text-2xl md:text-3xl font-bold font-montserrat leading-none">0{index + 1}</span>
                    <h3 className="text-lg md:text-xl font-semibold md:font-extrabold font-montserrat text-gray-900 md:text-primary">{phase}</h3>
                </div>

                {/* Mobile Chevron */}
                <div className={cn(
                    "md:hidden transition-transform duration-300 text-gray-300",
                    isOpen ? "rotate-180 text-primary" : "rotate-0"
                )}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </div>

            {/* Content - Collapsible on Mobile, Always Visible on Desktop */}
            <div className={cn(
                "px-5 pb-5 md:px-6 md:pb-6 md:block",
                isOpen ? "block" : "hidden"
            )}>
                <ul className="space-y-2 md:space-y-3 pt-2 md:pt-0 border-t md:border-t-0 border-gray-50 md:border-none">
                    {items.map((item, i) => (
                        <li key={i} className="text-sm md:text-sm text-gray-600 flex items-start gap-2 pt-2 md:pt-0">
                            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-1.5 shrink-0"></div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
