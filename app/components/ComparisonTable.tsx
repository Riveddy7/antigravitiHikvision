"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
    {
        feature: "Detección en Niebla",
        traditional: "Nula/Limitada",
        iamet: "100% Operativa (Ondas mmWave)",
        highlight: true,
    },
    {
        feature: "Falsas Alarmas",
        traditional: "Altas (Pixel motion)",
        iamet: "Cero (Filtrado IA Deep Learning)",
        highlight: true,
    },
    {
        feature: "Costo Operativo",
        traditional: "Alto (Nómina Guardias)",
        iamet: "Bajo (Automatización)",
        highlight: true,
    },
];

export default function ComparisonTable() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-bg-void mb-4">
                        Comparativa ROI
                    </h2>
                    <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl"
                >
                    <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 p-6 text-sm md:text-base font-semibold text-bg-void">
                        <div className="text-gray-600">Característica</div>
                        <div className="text-center text-gray-600">Sistema Tradicional</div>
                        <div className="text-center text-brand-primary">Ecosistema IAMET</div>
                    </div>

                    {comparisonData.map((row, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-3 p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors items-center"
                        >
                            <div className="font-medium text-bg-void">{row.feature}</div>

                            <div className="text-center text-gray-500 flex flex-col items-center gap-2">
                                <span className="text-sm font-light">{row.traditional}</span>
                                <X className="w-4 h-4 text-red-500 opacity-50" />
                            </div>

                            <div className="text-center text-bg-void flex flex-col items-center gap-2">
                                <span className="text-sm font-semibold text-brand-primary">{row.iamet}</span>
                                <Check className="w-4 h-4 text-brand-primary" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
