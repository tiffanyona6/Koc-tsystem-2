"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">

                {/* Close button for minimalists */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 md:hidden"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-montserrat">Uso de Cookies</h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        Utilizamos cookies propias y de terceros para mejorar la experiencia de navegación y ofrecer contenidos de interés.
                        Al continuar con la navegación entendemos que se acepta nuestra{" "}
                        <Link href="/legal/cookies" className="text-primary underline hover:text-secondary font-medium">
                            Política de Cookies
                        </Link>.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                    <Link
                        href="/legal/cookies"
                        className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 text-center text-sm transition-colors"
                    >
                        Más información
                    </Link>
                    <button
                        onClick={acceptCookies}
                        className="px-8 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-secondary text-center text-sm shadow-md transition-all transform hover:scale-105"
                    >
                        Aceptar todas
                    </button>
                </div>
            </div>
        </div>
    );
}
