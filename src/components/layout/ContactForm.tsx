"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        country: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
        rgpd: false,
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        // Handle checkbox separately for RGPD
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("https://formspree.io/f/mykdeogz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    company: "",
                    country: "",
                    email: "",
                    phone: "",
                    interest: "",
                    message: "",
                    rgpd: false,
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in duration-500">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Gracias!</h3>
                <p className="text-gray-600 mb-6">
                    Nos pondremos en contacto contigo en breve.
                </p>
                <Button onClick={() => setStatus("idle")} variant="outline">
                    Enviar otro mensaje
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6 h-full">
            {status === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 text-red-700 mb-4">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm">Hubo un error al enviar el mensaje. Por favor, inténtelo más tarde o contacte por teléfono.</p>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre y apellidos *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 md:py-2 bg-gray-50 md:bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">Empresa / Organización *</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="w-full px-4 py-3 md:py-2 bg-gray-50 md:bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 md:py-2 bg-gray-50 md:bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Teléfono (con prefijo) *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 md:py-2 bg-gray-50 md:bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="country" className="text-sm font-medium text-gray-700">País</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        className="w-full px-4 py-3 md:py-2 bg-gray-50 md:bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                        value={formData.country}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium text-gray-700">Interés principal</label>
                    <select
                        id="interest"
                        name="interest"
                        className="w-full px-4 py-3 md:py-2 bg-gray-50 md:bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all appearance-none"
                        value={formData.interest}
                        onChange={handleChange}
                    >
                        <option value="">Seleccionar...</option>
                        <option value="oasis">Solicitar dossier Oasis Project</option>
                        <option value="energia">Energía y Descarbonización</option>
                        <option value="agua">Ciclo Integral del Agua</option>
                        <option value="termico">Control Térmico y Humedad</option>
                        <option value="cae">Certificados de Ahorro (CAE)</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2 flex-grow flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full px-4 py-3 md:py-2 bg-gray-50 md:bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none flex-grow"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <div className="flex items-start space-x-3">
                <div className="flex items-center h-5">
                    <input
                        id="rgpd"
                        name="rgpd"
                        type="checkbox"
                        required
                        className="w-5 h-5 md:w-4 md:h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        checked={formData.rgpd}
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor="rgpd" className="text-sm text-gray-600">
                    He leído y acepto la <Link href="/legal/privacidad" target="_blank" className="text-primary hover:underline font-medium">política de privacidad</Link> y el tratamiento de mis datos personales.
                </label>
            </div>

            <Button type="submit" size="lg" className="w-full" isLoading={status === "submitting"}>
                Solicitar reunión
            </Button>
        </form>
    );
}
