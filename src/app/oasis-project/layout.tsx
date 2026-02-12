import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Oasis Project | KOC Technical System",
    description: "Proyecto estratégico para el ahorro energético y optimización integral del agua industrial. Recuperación térmica y reutilización hídrica.",
};

export default function OasisLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
