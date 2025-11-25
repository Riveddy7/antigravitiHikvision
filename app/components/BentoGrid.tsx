"use client";

import { motion } from "framer-motion";
import { Radar, Flame, Megaphone, ScanFace, MonitorPlay } from "lucide-react";
import clsx from "clsx";

const items = [
    {
        id: "radar",
        title: "RADAR DE SEGURIDAD",
        product: "Hikvision DS-PR1-60",
        icon: Radar,
        headline: "El Centinela Invisible",
        copy: "Detección volumétrica inmune a la niebla, lluvia y oscuridad. Clasifica humanos vs animales con IA.",
        specs: "Rango: 60m | Ángulo: 100° | Frecuencia: 24GHz",
        color: "brand-primary",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-2",
        bgGradient: "radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
    },
    {
        id: "thermal",
        title: "TERMOGRAFÍA HEATPRO",
        product: "Cámara Bullet DS-2TD2628",
        icon: Flame,
        headline: "Visión Térmica",
        copy: "Detecta calor corporal a gran distancia y conatos de incendio antes de que haya humo.",
        specs: "Bi-Espectro | Temp: -20°C a 150°C",
        color: "brand-secondary",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        bgGradient: "radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
    },
    {
        id: "visual",
        title: "VISUALIZACIÓN",
        product: "WonderHub Interactive",
        icon: MonitorPlay,
        headline: "War Room 4K",
        copy: "Pantallas interactivas para gestión de crisis y monitoreo de KPIs en tiempo real.",
        specs: "Interactive | 4K UHD",
        color: "white",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-2",
        bgGradient: "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
    },
    {
        id: "audio",
        title: "AUDIO DISUASIVO",
        product: "Horn Speaker DS-QAZ1460G1",
        icon: Megaphone,
        headline: "Voz de Autoridad",
        copy: "Disparo automático de advertencias (124dB) al detectar cruce de línea. Sin intervención humana.",
        specs: "Potencia: 124dB | IP67 | PoE",
        color: "brand-accent",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        bgGradient: "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
    },
    {
        id: "access",
        title: "ACCESO MINMOE",
        product: "Ultra Series DS-K1T680DFW",
        icon: ScanFace,
        headline: "Acceso Sin Fricción",
        copy: "Valida el acceso de 3,000 empleados en minutos. Anti-suplantación de fotos y video.",
        specs: "Velocidad: <0.2s | Capacidad: 100k Rostros",
        color: "brand-primary",
        colSpan: "md:col-span-4",
        rowSpan: "md:row-span-1",
        bgGradient: "radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
    },
];

export default function BentoGrid() {
    return (
        <section className="py-24 bg-bg-void" id="ecosistema">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                        Ecosistema Invisible
                    </h2>
                    <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(250px,auto)]">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={clsx(
                                "group relative p-6 rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all duration-300 backdrop-blur-md",
                                item.colSpan,
                                item.rowSpan,
                                {
                                    "hover:border-brand-primary/50": item.color === "brand-primary",
                                    "hover:border-brand-secondary/50": item.color === "brand-secondary",
                                    "hover:border-brand-accent/50": item.color === "brand-accent",
                                    "hover:border-white/50": item.color === "white",
                                }
                            )}
                        >
                            {/* Background Gradient */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: item.bgGradient }}
                            />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={clsx("p-3 rounded-xl bg-opacity-10 backdrop-blur-sm", {
                                            "bg-brand-primary text-brand-primary": item.color === "brand-primary",
                                            "bg-brand-secondary text-brand-secondary": item.color === "brand-secondary",
                                            "bg-brand-accent text-brand-accent": item.color === "brand-accent",
                                            "bg-white text-white": item.color === "white",
                                        })}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-medium text-text-secondary uppercase tracking-wider border border-white/10 px-2 py-1 rounded-full bg-white/5">
                                            {item.product}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                                        {item.headline}
                                    </h3>
                                    <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4 font-light">
                                        {item.copy}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-xs font-mono text-brand-primary/80">
                                        {item.specs}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
