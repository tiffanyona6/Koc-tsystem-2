import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Sobre Nosotros - KOC Technical System | Ingeniería Aplicada",
    description: "Ingeniería experta en optimización de procesos industriales. Transformamos la eficiencia energética e hídrica en rentabilidad empresarial.",
};

export default function Page() {
    return <Content />;
}
