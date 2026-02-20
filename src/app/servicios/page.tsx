import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Servicios de Ingeniería Industrial | KOC Technical System",
    description: "Especialistas en Eficiencia Energética, Tratamiento de Agua, Control Térmico y Gestión de CAE. Ingeniería aplicada para optimizar costes y sostenibilidad.",
};

export default function ServicesPage() {
    return <ServicesContent />;
}
