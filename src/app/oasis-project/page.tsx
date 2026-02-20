import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Oasis Project - Eficiencia Hídrica y Energética | KOC Technical System",
    description: "Recuperación térmica y tratamiento de agua integrados para la máxima eficiencia industrial. Transformamos el desperdicio en recurso.",
};

export default function Page() {
    return <Content />;
}
