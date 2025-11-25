"use client";

import Image from "next/image";
import { useState } from "react";

interface SolutionImageProps {
    src: string;
    alt: string;
}

export default function SolutionImage({ src, alt }: SolutionImageProps) {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/50 text-gray-500 z-10 p-4 text-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent opacity-50"></div>
                <span className="text-white/40 font-mono text-lg relative z-20">[ IMAGEN NO DISPONIBLE ]</span>
                <span className="text-xs text-white/20 mt-2 relative z-20">Intenta subir: public{src}</span>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover z-10"
                onError={() => setError(true)}
            />
        </div>
    );
}
