"use client";

import { motion } from "framer-motion";
import SolutionImage from "./SolutionImage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
    {
        id: "radar",
        title: "Radar de Seguridad",
        product: "Hikvision DS-PR1-60",
        image: "/images/radar.png",
        description: "Detección volumétrica inmune a condiciones adversas. Clasificación IA avanzada.",
        href: "/soluciones/radar",
    },
    {
        id: "thermal",
        title: "Termografía HeatPro",
        product: "Cámara Bullet DS-2TD2628",
        image: "/images/termografia.png",
        description: "Visión térmica para detección de intrusos y conatos de incendio a larga distancia.",
        href: "/soluciones/termografia",
    },
    {
        id: "audio",
        title: "Audio Disuasivo",
        product: "Horn Speaker DS-QAZ1460G1",
        image: "/images/audio.png",
        description: "Advertencias automáticas de 124dB para disuasión inmediata sin intervención.",
        href: "/soluciones/audio",
    },
    {
        id: "access",
        title: "Acceso MinMoe",
        product: "Ultra Series DS-K1T680DFW",
        image: "/images/acceso.png",
        description: "Control de acceso biométrico facial de alta velocidad y capacidad masiva.",
        href: "/soluciones/acceso",
    },
    {
        id: "visual",
        title: "Visualización",
        product: "WonderHub Interactive",
        image: "/images/visualizacion.png",
        description: "Centros de monitoreo interactivos 4K para gestión de crisis en tiempo real.",
        href: "/soluciones/visualizacion",
    },
];

export default function SolutionsGrid() {
    return (
        <section className="py-24 bg-black relative" id="soluciones">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                        Ecosistema de Soluciones
                    </h2>
                    <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-text-secondary max-w-2xl mx-auto font-light">
                        Tecnología de vanguardia integrada para una protección total y predictiva.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((item, index) => (
                        <Link href={item.href} key={item.id} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-500 backdrop-blur-xl shadow-lg hover:shadow-brand-primary/20 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="h-48 bg-bg-void/50 relative overflow-hidden flex items-center justify-center group-hover:bg-bg-void/70 transition-colors">
                                    <SolutionImage src={item.image} alt={item.title} />
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
                                        <span className="text-xs font-mono text-brand-primary bg-black/80 backdrop-blur-sm px-2 py-1 rounded border border-brand-primary/20">
                                            {item.product}
                                        </span>
                                    </div>
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                                    </div>

                                    <p className="text-text-secondary text-sm leading-relaxed font-light flex-grow">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
