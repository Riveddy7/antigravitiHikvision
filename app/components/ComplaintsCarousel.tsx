"use client";

import { motion } from "framer-motion";
import { AlertTriangle, XCircle, BatteryWarning, EyeOff } from "lucide-react";

const complaints = [
    {
        id: 1,
        user: "Jefe de Seguridad",
        handle: "@security_chief",
        time: "2h",
        content: "Otra vez se metieron por la zona ciega de la barda perimetral. Las cámaras no vieron nada por la niebla. 😡",
        icon: EyeOff,
        likes: "24",
        comments: "5",
    },
    {
        id: 2,
        user: "Gerente de Planta",
        handle: "@plant_manager",
        time: "4h",
        content: "El reporte de falsas alarmas de anoche es inaceptable. 50 alertas por 'movimiento' y eran solo ramas.",
        icon: AlertTriangle,
        likes: "12",
        comments: "8",
    },
    {
        id: 3,
        user: "Auditor ISO",
        handle: "@iso_auditor",
        time: "1d",
        content: "No hay registro térmico del conato de incendio en el almacén. Esto es una no conformidad grave.",
        icon: XCircle,
        likes: "45",
        comments: "12",
    },
    {
        id: 4,
        user: "Guardia Nocturno",
        handle: "@night_watch",
        time: "5h",
        content: "El sistema de acceso falló otra vez con el cambio de turno. Tuvimos que abrir manual y se hizo fila de 1 hora.",
        icon: BatteryWarning,
        likes: "8",
        comments: "3",
    },
    {
        id: 5,
        user: "Gerente de Logística",
        handle: "@logistics_mgr",
        time: "30m",
        content: "Las cámaras térmicas no detectaron el sobrecalentamiento en la banda transportadora 4. Casi paramos producción.",
        icon: BatteryWarning,
        likes: "15",
        comments: "2",
    },
    {
        id: 6,
        user: "Supervisor de Planta",
        handle: "@plant_sup",
        time: "1h",
        content: "Otro robo hormiga en el almacén. Las cámaras convencionales no tienen suficiente resolución para ver las caras.",
        icon: EyeOff,
        likes: "32",
        comments: "9",
    },
    {
        id: 7,
        user: "Director de TI",
        handle: "@it_director",
        time: "6h",
        content: "El sistema de video saturó la red otra vez. Necesitamos compresión inteligente urgente.",
        icon: AlertTriangle,
        likes: "18",
        comments: "4",
    },
    {
        id: 8,
        user: "Coordinador HSE",
        handle: "@hse_coord",
        time: "2d",
        content: "El personal sigue entrando sin EPP a zonas restringidas. Necesitamos alertas automáticas, no puedo estar viendo monitores todo el día.",
        icon: XCircle,
        likes: "27",
        comments: "6",
    },
    {
        id: 9,
        user: "Jefe de Mantenimiento",
        handle: "@maint_chief",
        time: "3h",
        content: "Nadie se dio cuenta que la cámara 5 estaba desconectada desde hace una semana. ¿No hay alertas de salud del sistema?",
        icon: BatteryWarning,
        likes: "41",
        comments: "15",
    },
];

export default function ComplaintsCarousel() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-bg-void mb-4">
                        ¿Te suena familiar?
                    </h2>
                    <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full"></div>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex gap-6 animate-scroll hover:pause-scroll w-[calc(400px*8)]">
                        {[...complaints, ...complaints].map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="w-[400px] flex-shrink-0 bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                                            {item.user.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-bg-void">{item.user}</p>
                                            <p className="text-xs text-gray-500">{item.handle} · {item.time}</p>
                                        </div>
                                    </div>
                                    <item.icon className="w-5 h-5 text-red-500" />
                                </div>

                                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                    {item.content}
                                </p>

                                <div className="flex items-center gap-6 text-gray-400 text-xs font-medium">
                                    <span className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition-colors">
                                        ❤️ {item.likes}
                                    </span>
                                    <span className="flex items-center gap-1 hover:text-blue-500 cursor-pointer transition-colors">
                                        💬 {item.comments}
                                    </span>
                                    <span className="flex items-center gap-1 hover:text-green-500 cursor-pointer transition-colors">
                                        🔄 Share
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">
                        Todo esto tiene solución.
                    </h3>
                    <p className="text-gray-500">
                        Descubre cómo el Ecosistema IAMET elimina estos problemas de raíz.
                    </p>
                </div>
            </div>
        </section>
    );
}
