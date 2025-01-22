// app/page.tsx
"use client"; 

import { useEffect } from "react";
import { useRouter } from 'next/navigation'; 

export default function HomeRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Redirige a la página de login al cargar la raíz
        router.push('/login');
    }, [router]);

    return null; // No renderiza nada
}