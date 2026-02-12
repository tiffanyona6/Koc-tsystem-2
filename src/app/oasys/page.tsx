"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OasysRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/oasis-project");
    }, [router]);

    return null;
}
