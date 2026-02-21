"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
    name: string;
    href: string;
    subItems?: { name: string; href: string }[];
}

const navLinks: NavLink[] = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    {
        name: "Proyectos",
        href: "/proyectos",
        subItems: [
            { name: "Oasis Project", href: "/oasis-project" },
            { name: "TARGA KOC", href: "/targa-koc" },
            { name: "Marlenka 2.0 + Magic Box", href: "/marlenka-magic-box" },
            { name: "Sistema TWT", href: "/sistema-twt" },
            { name: "Sistema de Atemperado Automático", href: "/sistema-atemperado" },
        ]
    },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md py-2",
                // isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative h-20 w-72 md:h-20 md:w-64">
                        <Image
                            src="/images/branding/logo.png"
                            alt="KOC Technical System"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-sm lg:text-[18px] lg:leading-[1.2] lg:tracking-[0.3px] font-medium transition-colors hover:text-primary text-gray-700 flex items-center gap-1",
                                    )}
                                >
                                    {link.name}
                                    {link.subItems && (
                                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                    )}
                                </Link>

                                {/* Desktop Dropdown */}
                                {link.subItems && (
                                    <div className="absolute top-full left-0 pt-4 w-64 hidden group-hover:block">
                                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                                            {link.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                    </nav>

                    <div className="hidden md:flex items-center ml-4">
                        <Link href="/oasis-project">
                            <Button size="sm" className="shadow-md bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300 font-semibold px-6">
                                Oasis Project
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation & Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay backdrop to close menu on click outside */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden h-screen w-screen"
                        />
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                        >
                            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="flex flex-col border-b border-gray-50 last:border-0">
                                        <div className="flex items-center justify-between py-2">
                                            <Link
                                                href={link.href}
                                                className="text-base font-medium text-gray-700 hover:text-primary flex-grow"
                                            >
                                                {link.name}
                                            </Link>
                                            {link.subItems && (
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setMobileSubmenuOpen(mobileSubmenuOpen === link.name ? null : link.name);
                                                    }}
                                                    className="p-2 text-gray-500 hover:text-primary hover:bg-gray-50 rounded-full"
                                                >
                                                    <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", mobileSubmenuOpen === link.name ? "rotate-180" : "")} />
                                                </button>
                                            )}
                                        </div>

                                        {/* Mobile Accordion */}
                                        {link.subItems && (
                                            <AnimatePresence>
                                                {mobileSubmenuOpen === link.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden bg-gray-50/50 rounded-lg mb-2"
                                                    >
                                                        <div className="flex flex-col p-2 gap-1">
                                                            {link.subItems.map((subItem) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    href={subItem.href}
                                                                    className="text-sm font-medium text-gray-600 py-3 px-4 rounded-md hover:bg-gray-100/80 hover:text-primary transition-colors block"
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </div>
                                ))}
                                <Link href="/oasis-project">
                                    <Button className="w-full mt-2 bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300 font-bold">
                                        Oasis Project
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
