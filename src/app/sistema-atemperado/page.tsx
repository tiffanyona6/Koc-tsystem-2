import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Sistema Atemperado Automático | KOC Technical System",
    description: "Control preciso de temperatura para fluidos y procesos químicos. Tecnología segura para zonas ATEX.",
};

export default function Page() {
    return <Content />;
}
