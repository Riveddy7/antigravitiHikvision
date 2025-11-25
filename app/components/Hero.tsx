"use client";

import { motion } from "framer-motion";
import { ArrowDown, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
            {/* Background Effects - Premium Glass & Blur */}
            <div className="absolute inset-0 z-0 bg-bg-void">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/20 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary/20 blur-[120px] rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-brand-accent/10 blur-[100px] rounded-full animate-pulse delay-700"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-xs font-semibold tracking-wide mb-8 backdrop-blur-md shadow-lg"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                    </span>
                    Tecnología de Seguridad Industrial 2025
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-white"
                >
                    TU SEGURIDAD ES REACTIVA.
                    <br />
                    LA NUESTRA ES <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">PREDICTIVA</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-text-secondary max-w-3xl mb-10 leading-relaxed font-light"
                >
                    Ecosistema de "Defensa Invisible" para la industria en Tijuana. Detecta
                    intrusiones a través de la niebla, automatiza la disuasión y elimina
                    las falsas alarmas.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link
                        href="#pain-points"
                        className="group flex items-center gap-3 px-8 py-4 bg-white text-bg-void font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(168,59,59,0.4)]"
                    >
                        Ver Ecosistema Invisible
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 flex flex-col items-center gap-4"
                >
                    <p className="text-xs text-text-secondary uppercase tracking-widest">
                        Tecnología Hikvision Certificada
                    </p>
                    <div className="flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder for logos, using text for now as requested no real images */}
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6" />
                            <span className="font-orbitron font-bold text-xl">HIKVISION</span>
                        </div>
                        <div className="h-4 w-px bg-white/20"></div>
                        <span className="font-bold text-lg">DeepinView</span>
                        <div className="h-4 w-px bg-white/20"></div>
                        <span className="font-bold text-lg">HeatPro</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
