"use client";

import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import { submitLead } from "../actions/submit-lead";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        interest: "Todo",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: null, message: "" });

        startTransition(async () => {
            const result = await submitLead({
                name: formState.name,
                email: formState.email,
                phone: formState.phone,
                company: formState.company,
                message: formState.message,
                interest: formState.interest,
            });

            if (result.success) {
                setStatus({ type: "success", message: "¡Solicitud recibida! Nos pondremos en contacto pronto." });
                setFormState({ name: "", email: "", phone: "", company: "", message: "", interest: "Todo" });
            } else {
                setStatus({ type: "error", message: result.message || "Hubo un error al enviar la solicitud." });
            }
        });
    };

    return (
        <section className="py-24 bg-black relative overflow-hidden" id="contacto">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>

            {/* External Light Effects */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-2xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-xl relative overflow-hidden"
                >
                    <div className="text-center mb-10 relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                            Inicializar Protocolo de Seguridad
                        </h2>
                        <p className="text-text-secondary text-sm font-light">
                            Solicita una demo técnica o una visita de levantamiento en tu planta.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="group">
                                <label className="block text-text-secondary text-xs mb-2 uppercase tracking-widest font-semibold">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder-white/20"
                                    placeholder="Ingresa tu nombre"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>

                            <div className="group">
                                <label className="block text-text-secondary text-xs mb-2 uppercase tracking-widest font-semibold">
                                    Empresa
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder-white/20"
                                    placeholder="Nombre de la empresa"
                                    value={formState.company}
                                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="group">
                                <label className="block text-text-secondary text-xs mb-2 uppercase tracking-widest font-semibold">
                                    Email Corporativo
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder-white/20"
                                    placeholder="nombre@empresa.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>

                            <div className="group">
                                <label className="block text-text-secondary text-xs mb-2 uppercase tracking-widest font-semibold">
                                    Teléfono
                                </label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder-white/20"
                                    placeholder="(55) 1234 5678"
                                    value={formState.phone}
                                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-text-secondary text-xs mb-2 uppercase tracking-widest font-semibold">
                                Interés Principal
                            </label>
                            <select
                                className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all [&>option]:bg-bg-carbon"
                                value={formState.interest}
                                onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                            >
                                <option value="Radar">Radar</option>
                                <option value="Termografía">Termografía</option>
                                <option value="Control de Acceso">Control de Acceso</option>
                                <option value="Audio">Audio</option>
                                <option value="Visualización">Visualización</option>
                                <option value="Todo">Todo el Ecosistema</option>
                            </select>
                        </div>

                        <div className="group">
                            <label className="block text-text-secondary text-xs mb-2 uppercase tracking-widest font-semibold">
                                Mensaje Adicional
                            </label>
                            <textarea
                                className="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder-white/20 min-h-[100px]"
                                placeholder="Cuéntanos más sobre tu proyecto..."
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            />
                        </div>

                        {status.type && (
                            <div className={`p-4 rounded-lg flex items-center gap-3 ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                {status.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                <p className="text-sm font-medium">{status.message}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-brand-primary text-white font-bold py-4 mt-8 rounded-lg hover:bg-brand-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(168,59,59,0.3)] hover:shadow-[0_0_30px_rgba(168,59,59,0.5)] uppercase tracking-widest text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isPending ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    ENVIANDO...
                                </>
                            ) : (
                                "ENVIAR SOLICITUD"
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
