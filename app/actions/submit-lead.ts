"use server";

interface LeadData {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    interest: string;
}

export async function submitLead(data: LeadData) {
    const webhookUrl = "https://bajanet.bitrix24.mx/rest/18/52dhvj14djtdpv86/crm.lead.add";

    // Map interest to Bitrix24 Enumeration IDs
    const interestMap: Record<string, number> = {
        "Radar": 750,
        "Termografía": 752,
        "Audio": 754,
        "Control de Acceso": 756,
        "Visualización": 758,
    };

    const interestId = interestMap[data.interest] || null;

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fields: {
                    TITLE: `Lead Web: ${data.name} - ${data.interest}`,
                    NAME: data.name,
                    COMPANY_TITLE: data.company,
                    EMAIL: [{ VALUE: data.email, VALUE_TYPE: "WORK" }],
                    PHONE: [{ VALUE: data.phone, VALUE_TYPE: "WORK" }],
                    COMMENTS: data.message,
                    SOURCE_ID: "WEB",
                    // Custom Field: Portafolio Hikvision
                    UF_CRM_LEAD_1764101315689: interestId,
                },
                params: { REGISTER_SONET_EVENT: "Y" },
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Bitrix24 Error:", errorData);
            return { success: false, message: "Error al conectar con el CRM." };
        }

        const result = await response.json();

        if (result.error) {
            console.error("Bitrix24 API Error:", result);
            return { success: false, message: result.error_description || "Error en la API del CRM." };
        }

        return { success: true, message: "Lead creado exitosamente." };
    } catch (error) {
        console.error("Submission Error:", error);
        return { success: false, message: "Error de conexión." };
    }
}
