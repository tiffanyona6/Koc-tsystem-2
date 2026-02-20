import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Sistema TWT - Regeneración de Agua Industrial | KOC Technical System",
    description: "Reutilización de agua y vertido cero para la industria. Sistema compacto, modular y energéticamente autónomo.",
};

export default function Page() {
    return <Content />;
}
