import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Marlenka 2.0 y Magic Box - Control Climático PU | KOC System",
    description: "Solución integral para la estandarización de procesos de espumación. Control total de temperatura y humedad independiente del clima.",
};

export default function Page() {
    return <Content />;
}
