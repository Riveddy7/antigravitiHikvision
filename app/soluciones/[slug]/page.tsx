import Navbar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SolutionImage from "../../components/SolutionImage";

export async function generateStaticParams() {
    return [
        { slug: "radar" },
        { slug: "termografia" },
        { slug: "audio" },
        { slug: "acceso" },
        { slug: "visualizacion" },
    ];
}

const solutionData: Record<string, { title: string; subtitle: string; description: string; features: string[]; image: string }> = {
    radar: {
        title: "Radar de Seguridad",
        subtitle: "Detección Volumétrica Todo Terreno",
        description: "Nuestro sistema de radar Hikvision DS-PR1-60 ofrece una detección de intrusos inigualable en condiciones donde las cámaras tradicionales fallan. Niebla, lluvia intensa, polvo o total oscuridad no son obstáculo. Utilizando tecnología de ondas milimétricas, clasifica con precisión humanos y vehículos, filtrando falsas alarmas causadas por animales o vegetación.",
        features: ["Rango de detección de 60m", "Inmune a condiciones climáticas extremas", "Clasificación IA Humanos/Vehículos", "Integración con PTZ para seguimiento automático"],
        image: "/images/radar.png",
    },
    termografia: {
        title: "Termografía HeatPro",
        subtitle: "Visión Más Allá de lo Visible",
        description: "La serie HeatPro de Hikvision lleva la seguridad perimetral y la prevención de incendios al siguiente nivel. Detecta la radiación térmica de los objetos, permitiendo identificar intrusos camuflados o a grandes distancias, así como sobrecalentamientos en maquinaria o conatos de incendio antes de que se genere humo visible.",
        features: ["Detección de incendios temprana", "Medición de temperatura -20°C a 150°C", "Visión en oscuridad absoluta", "Algoritmos de Deep Learning"],
        image: "/images/termografia.png",
    },
    audio: {
        title: "Audio Disuasivo",
        subtitle: "La Voz de la Autoridad",
        description: "Convierta su sistema de seguridad pasivo en activo. Nuestros altavoces IP emiten advertencias automáticas pregrabadas o en vivo al detectar una intrusión. Una advertencia de 124dB es a menudo suficiente para disuadir a un intruso antes de que cause daño.",
        features: ["Potencia de salida de 124dB", "Sincronización audio/video", "Mensajes personalizables", "Resistencia IP67 para exteriores"],
        image: "/images/audio.png",
    },
    acceso: {
        title: "Control de Acceso MinMoe",
        subtitle: "Acceso Sin Fricción y Seguro",
        description: "La terminal de reconocimiento facial MinMoe ofrece una experiencia de acceso rápida y sin contacto. Con una velocidad de reconocimiento de menos de 0.2 segundos y tecnología anti-suplantación, garantiza que solo el personal autorizado ingrese a sus instalaciones, eliminando el uso de tarjetas o huellas dactilares.",
        features: ["Reconocimiento en < 0.2s", "Capacidad de hasta 100,000 rostros", "Detección de uso de cubrebocas", "Tecnología Anti-Spoofing"],
        image: "/images/acceso.png",
    },
    visualizacion: {
        title: "Visualización Interactiva",
        subtitle: "Control Total en 4K",
        description: "Nuestras pantallas interactivas y videowalls transforman su centro de monitoreo en un verdadero War Room. Visualice múltiples flujos de video, mapas interactivos y dashboards de KPIs en resolución 4K, facilitando la toma de decisiones crítica en tiempo real.",
        features: ["Resolución 4K UHD", "Tecnología táctil interactiva", "Gestión centralizada de contenidos", "Diseño de bisel ultra-delgado"],
        image: "/images/visualizacion.png",
    },
};

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = solutionData[slug] || {
        title: "Solución No Encontrada",
        subtitle: "",
        description: "La solución que buscas no está disponible.",
        features: [],
        image: "",
    };

    return (
        <main className="min-h-screen bg-bg-void selection:bg-brand-primary selection:text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <Link href="/#soluciones" className="inline-flex items-center text-text-secondary hover:text-brand-primary transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver al Ecosistema
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image Container */}
                        <div className="aspect-video bg-bg-carbon rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center group">
                            {data.image ? (
                                <SolutionImage src={data.image} alt={data.title} />
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent opacity-50"></div>
                                    <span className="text-white/20 font-mono text-lg">[ IMAGEN DEL PRODUCTO ]</span>
                                </>
                            )}

                            {/* Glow */}
                            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer pointer-events-none z-20"></div>
                        </div>

                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                                {data.title}
                            </h1>
                            <p className="text-xl text-brand-primary mb-6 font-light">
                                {data.subtitle}
                            </p>
                            <p className="text-text-secondary leading-relaxed mb-8">
                                {data.description}
                            </p>

                            <ul className="space-y-3 mb-10">
                                {data.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-white/80">
                                        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#contacto"
                                className="inline-block px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-primary/90 transition-all shadow-[0_0_20px_rgba(168,59,59,0.3)] hover:shadow-[0_0_30px_rgba(168,59,59,0.5)]"
                            >
                                COTIZAR ESTA SOLUCIÓN
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />

            <footer className="py-8 text-center text-text-secondary text-sm bg-bg-carbon border-t border-border-dim">
                <p>&copy; 2025 IAMET. Todos los derechos reservados.</p>
            </footer>
        </main>
    );
}
