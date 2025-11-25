"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Radar", href: "/soluciones/radar" },
    { name: "Termografía", href: "/soluciones/termografia" },
    { name: "Audio", href: "/soluciones/audio" },
    { name: "Acceso", href: "/soluciones/acceso" },
    { name: "Visualización", href: "/soluciones/visualizacion" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-bg-void/80 backdrop-blur-md border-b border-white/10 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo-iamet.png"
                            alt="IAMET Logo"
                            width={150}
                            height={50}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </Link>
                    <span className="text-xs font-medium px-2 py-0.5 rounded border border-brand-primary/30 text-brand-primary bg-brand-primary/10">
                        Integrador Certificado
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-secondary hover:text-brand-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link
                    href="#contacto"
                    className="hidden md:block px-6 py-2 text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primary/90 transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(168,59,59,0.3)] hover:shadow-[0_0_30px_rgba(168,59,59,0.5)]"
                >
                    Solicitar Auditoría
                </Link>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
        </motion.nav>
    );
}
