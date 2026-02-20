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
                "bg-white rounded-3xl relative group transition-all duration-500 overflow-hidden md:h-full",
                "border border-gray-100/80 hover:border-primary/20",
                "shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_-5px_rgba(6,81,237,0.1)]",
                isOpen ? "border-primary/20 shadow-[0_8px_30px_-5px_rgba(6,81,237,0.1)]" : ""
            )}
        >


            {/* Header - Clickable only on mobile */}
            <div
                className="p-6 md:p-8 flex items-center justify-between cursor-pointer md:cursor-default relative z-10"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4 md:gap-5">
                    {/* Floating Number Box */}
                    <div className={cn(
                        "w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center font-bold text-xl md:text-2xl transition-all duration-500 shadow-sm",
                        "bg-gradient-to-br from-blue-50 to-blue-100/50 text-primary border border-white",
                        "md:group-hover:scale-110 md:group-hover:bg-gradient-to-br md:group-hover:from-primary md:group-hover:to-secondary md:group-hover:text-white md:group-hover:shadow-lg",
                        isOpen ? "scale-110 bg-gradient-to-br from-primary to-secondary text-white shadow-lg" : ""
                    )}>
                        {index + 1}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-montserrat md:group-hover:text-primary transition-colors duration-300">
                        {phase}
                    </h3>
                </div>

                {/* Mobile Chevron */}
                <div className={cn(
                    "md:hidden transition-transform duration-500 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400",
                    isOpen ? "rotate-180 bg-blue-50 text-primary" : ""
                )}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </div>

            {/* Content - Collapsible on Mobile, Always Visible on Desktop */}
            <div className={cn(
                "px-6 pb-6 md:px-8 md:pb-8 relative z-10 md:block transition-all duration-500",
                isOpen ? "block animate-in slide-in-from-top-2 fade-in-0" : "hidden"
            )}>
                <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 border-t border-gray-100 md:border-t-2 md:border-dashed">
                    {items.map((item, i) => (
                        <li key={i} className="text-base text-gray-600 flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-primary/40 mt-2 shrink-0 md:group-hover:bg-secondary transition-colors duration-300 drop-shadow-sm"></div>
                            <span className="font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
