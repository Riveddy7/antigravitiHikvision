"use client";

import { motion } from "framer-motion";
import { CloudFog, EyeOff, Siren } from "lucide-react";

const points = [
    {
        icon: CloudFog,
        title: "Ceguera Ambiental",
        description:
            "La neblina de Otay y el polvo industrial ciegan los lentes ópticos estándar. Si no ves, no proteges.",
    },
    {
        icon: EyeOff,
        title: "Fatiga Humana",
        description:
            "Un guardia pierde el 95% de los eventos críticos tras 20 minutos de monitoreo pasivo.",
    },
    {
        icon: Siren,
        title: "Respuesta Forense",
        description:
            "El CCTV tradicional te dice quién robó ayer. Nosotros detenemos al intruso hoy.",
    },
];

export default function PainPoints() {
    return (
        <section className="py-24 bg-bg-carbon relative" id="pain-points">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                        ¿Por qué tus cámaras no son suficientes?
                    </h2>
                    <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 bg-black border border-white/10 rounded-2xl hover:border-brand-primary/50 transition-all duration-500 relative overflow-hidden shadow-2xl"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-brand-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <point.icon className="w-24 h-24 text-brand-primary" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300 border border-brand-primary/20 shadow-[0_0_15px_rgba(168,59,59,0.2)]">
                                    <point.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                    {point.title}
                                </h3>

                                <p className="text-text-secondary leading-relaxed font-light">
                                    {point.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
