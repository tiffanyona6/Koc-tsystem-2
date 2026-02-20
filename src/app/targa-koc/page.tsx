import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Targa KOC - Desinfección Ambiental Avanzada | KOC Technical System",
    description: "Sistema de nebulización ultrasónica para la desinfección total de superficies y aire. Tecnología propia para entornos críticos.",
};

export default function Page() {
    return <Content />;
}
