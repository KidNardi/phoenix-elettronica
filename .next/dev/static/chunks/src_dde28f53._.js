(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "absoluteUrl",
    ()=>absoluteUrl,
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    siteName: "Phoenix Elettronica",
    legalName: "Phoenix Elettronica s.a.s. di De Leonardis Emilio & C.",
    domain: "https://phoenixelettronica.net",
    locale: "it-IT",
    ogLocale: "it_IT",
    description: "Impianti elettrici ed elettronici a Bari e provincia per condomini, aziende e privati. Interventi rapidi, preventivi chiari e soluzioni su misura.",
    ogImage: "/opengraph-image",
    logoPath: "/brand/logo%20phoenix.png",
    imagePath: "/opengraph-image",
    manifestPath: "/manifest.webmanifest",
    sameAs: [],
    openingHours: [
        "Mo-Fr 08:30-13:00",
        "Mo-Fr 15:30-19:00"
    ],
    areaServed: [
        "Bari",
        "Bari e provincia"
    ],
    nap: {
        name: "Phoenix Elettronica s.a.s. di De Leonardis Emilio & C.",
        streetAddress: "Via Papa Innocenzo XII, 19",
        postalCode: "70124",
        city: "Bari",
        region: "BA",
        country: "IT",
        fullAddress: "Via Papa Innocenzo XII, 19 - 70124 Bari (BA) - Italia",
        phone: "080 2021338",
        phoneHref: "tel:+390802021338",
        mobile: "335 6349428",
        mobileHref: "tel:+393356349428",
        email: "info@phoenixelettronica.net",
        emailHref: "mailto:info@phoenixelettronica.net",
        vat: "05940130726"
    }
};
function absoluteUrl(path = "/") {
    return new URL(path, siteConfig.domain).toString();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "audience",
    ()=>audience,
    "company",
    ()=>company,
    "contactOptions",
    ()=>contactOptions,
    "navLinks",
    ()=>navLinks,
    "processSteps",
    ()=>processSteps,
    "serviceOptions",
    ()=>serviceOptions,
    "services",
    ()=>services,
    "technicalFeatures",
    ()=>technicalFeatures,
    "testimonials",
    ()=>testimonials,
    "urgencyOptions",
    ()=>urgencyOptions,
    "whyPhoenix",
    ()=>whyPhoenix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-client] (ecmascript)");
;
const company = {
    name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].legalName,
    shortName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].siteName,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].description,
    area: "Bari (BA) e provincia",
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].nap.phone,
    phoneHref: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].nap.phoneHref,
    mobile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].nap.mobile,
    mobileHref: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].nap.mobileHref,
    email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].nap.email,
    emailHref: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].nap.emailHref,
    address: "Via Papa Innocenzo XII, 19 - 70124 Bari (BA)",
    vat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].nap.vat,
    siteUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].domain
};
const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/servizi",
        label: "Servizi"
    },
    {
        href: "/chi-siamo",
        label: "Chi siamo"
    },
    {
        href: "/contatti",
        label: "Contatti"
    }
];
const services = [
    {
        slug: "manutenzione-condomini",
        title: "Manutenzione condomini",
        short: "Assistenza puntuale per impianti, parti comuni e interventi ricorrenti.",
        detail: "Gestiamo manutenzioni ordinarie e straordinarie per condomini con tempi rapidi, coordinamento chiaro e attenzione alla continuita' del servizio.",
        includes: [
            "Verifica impianti scale e aree comuni",
            "Piccoli guasti e ripristini urgenti",
            "Programmazione manutenzioni periodiche"
        ],
        audience: "Amministratori di condominio e complessi residenziali.",
        timing: "Interventi programmati o rapidi in base all'urgenza.",
        icon: "building"
    },
    {
        slug: "videosorveglianza-antifurti",
        title: "Videosorveglianza e antifurti",
        short: "Protezione affidabile per abitazioni, aziende e spazi comuni.",
        detail: "Progettiamo sistemi di sicurezza su misura per monitoraggio, prevenzione intrusioni e controllo accessi con componenti affidabili.",
        includes: [
            "Telecamere e copertura punti sensibili",
            "Sensori, centrali e dispositivi di allarme",
            "Configurazione base e supporto all'utilizzo"
        ],
        audience: "Privati, condomini e attivita' commerciali.",
        timing: "Installazione modulata in base alla dimensione dell'impianto.",
        icon: "shield"
    },
    {
        slug: "citofonia-videocitofonia",
        title: "Citofonia e videocitofonia",
        short: "Impianti moderni per comunicazione, controllo accessi e sicurezza.",
        detail: "Installiamo e aggiorniamo sistemi citofonici e videocitofonici per abitazioni singole, palazzi e strutture multiutenza.",
        includes: [
            "Nuove installazioni e sostituzioni",
            "Adeguamenti per condomini",
            "Diagnosi guasti e ripristino linee"
        ],
        audience: "Condomini, villette, uffici e piccoli complessi.",
        timing: "Tempistiche variabili in base al numero di utenze.",
        icon: "monitor-smartphone"
    },
    {
        slug: "automazione-home-automation",
        title: "Automazione e home automation",
        short: "Automazioni pratiche per accessi, serrande, cancelli e comfort.",
        detail: "Realizziamo sistemi per cancelli, porte, portoni, serrande e saracinesche, integrando funzioni smart quando servono davvero.",
        includes: [
            "Motorizzazioni e automazioni accessi",
            "Comandi, telecomandi e sicurezza d'uso",
            "Soluzioni personalizzate per casa e impresa"
        ],
        audience: "Privati, aziende, condomini e attivita' commerciali.",
        timing: "Intervento definito su misura dopo sopralluogo.",
        icon: "zap"
    },
    {
        slug: "impianti-telefonici-centralini",
        title: "Impianti telefonici e centralini",
        short: "Comunicazione interna efficiente per uffici, reception e attivita'.",
        detail: "Configuriamo impianti telefonici e centralini per strutture che cercano affidabilita', ordine e continuita' nella gestione delle chiamate.",
        includes: [
            "Predisposizione linee e terminali",
            "Centralini per piccole e medie strutture",
            "Supporto per ampliamenti e manutenzioni"
        ],
        audience: "Uffici, studi e aziende.",
        timing: "Installazione rapida per impianti standard.",
        icon: "phone-call"
    },
    {
        slug: "diffusione-sonora",
        title: "Impianti di diffusione sonora",
        short: "Sistemi audio chiari e funzionali per spazi professionali e comuni.",
        detail: "Progettiamo diffusione sonora per ambienti che richiedono copertura equilibrata, chiarezza e gestione semplice nel tempo.",
        includes: [
            "Distribuzione audio in ambienti dedicati",
            "Selezione punti di diffusione",
            "Impostazione pratica e manutenzione"
        ],
        audience: "Aziende, condomini, sale d'attesa e attivita'.",
        timing: "Tempi definiti in base a metratura e punti audio.",
        icon: "radio"
    },
    {
        slug: "cablaggio-reti-lan",
        title: "Cablaggio reti LAN",
        short: "Cablaggi ordinati e stabili per reti locali affidabili.",
        detail: "Realizziamo cablaggi LAN con approccio pulito e pratico, per connessioni stabili in ambienti domestici, professionali e aziendali.",
        includes: [
            "Stesura e organizzazione cablaggi",
            "Punti rete e distribuzione interna",
            "Supporto per ampliamenti o revisioni"
        ],
        audience: "Uffici, aziende, studi e abitazioni evolute.",
        timing: "Da mezzo giorno a piu' giornate in base al progetto.",
        icon: "network"
    }
];
const whyPhoenix = [
    {
        title: "Affidabilita' operativa",
        text: "Interventi gestiti con metodo, puntualita' e attenzione reale al risultato."
    },
    {
        title: "Tempi rapidi",
        text: "Sopralluoghi e lavorazioni organizzati per ridurre attese e disagi."
    },
    {
        title: "Preventivi chiari",
        text: "Proposte comprensibili, senza linguaggio tecnico inutile e senza ambiguita'."
    },
    {
        title: "Qualita' materiali",
        text: "Scelta di soluzioni affidabili, pensate per durare e non solo per costare meno."
    }
];
const processSteps = [
    {
        step: "01",
        title: "Sopralluogo",
        text: "Ascoltiamo il problema, valutiamo spazi, vincoli e obiettivi."
    },
    {
        step: "02",
        title: "Preventivo",
        text: "Definiamo la soluzione piu' adatta con tempi e priorita' chiare."
    },
    {
        step: "03",
        title: "Intervento",
        text: "Eseguiamo il lavoro con ordine, precisione e attenzione ai dettagli."
    }
];
const testimonials = [
    {
        name: "Amministratore condominiale, Bari",
        quote: "Gestione precisa delle manutenzioni e tempi rapidi sugli interventi urgenti. Collaborazione seria e affidabile."
    },
    {
        name: "Titolare studio professionale",
        quote: "Impianto ordinato, preventivo chiaro e lavori eseguiti con pulizia. Molto apprezzata la capacita' di proporre soluzioni pratiche."
    },
    {
        name: "Cliente privato, provincia di Bari",
        quote: "Installazione videocitofono e automazione cancello senza complicazioni. Comunicazione chiara e risultato pulito."
    }
];
const technicalFeatures = [
    {
        title: "Impianti elettrici",
        eyebrow: "Abilitazione L. 37/08",
        text: "Impianti civili e industriali, adeguamenti, manutenzioni e interventi per migliorare sicurezza e continuita' del servizio.",
        bullets: [
            "Nuove installazioni",
            "Adeguamenti tecnici",
            "Manutenzione e sicurezza"
        ],
        icon: "bolt"
    },
    {
        title: "Ricerca dispersioni elettriche",
        eyebrow: "Diagnosi mirata",
        text: "Analisi e risoluzione di dispersioni, corti e anomalie con interventi puntuali per ridurre fermo e rischi.",
        bullets: [
            "Verifiche mirate",
            "Individuazione cause",
            "Ripristino rapido"
        ],
        icon: "search"
    },
    {
        title: "Rifacimento illuminazione LED",
        eyebrow: "Upgrade efficiente",
        text: "Aggiornamento dell'illuminazione per migliorare resa, consumi e gestione degli spazi residenziali o professionali.",
        bullets: [
            "Maggiore efficienza",
            "Riduzione consumi",
            "Migliore qualita' visiva"
        ],
        icon: "lightbulb"
    }
];
const audience = [
    "Amministratori di condominio",
    "Aziende e attivita' professionali",
    "Privati e abitazioni"
];
const contactOptions = [
    {
        title: "Telefono ufficio",
        value: company.phone,
        href: company.phoneHref,
        note: "Per richieste rapide e coordinamento interventi.",
        icon: "phone"
    },
    {
        title: "Cellulare",
        value: company.mobile,
        href: company.mobileHref,
        note: "Canale diretto per contatti veloci.",
        icon: "smartphone"
    },
    {
        title: "Email",
        value: company.email,
        href: company.emailHref,
        note: "Ideale per richieste dettagliate e preventivi.",
        icon: "mail"
    },
    {
        title: "Sede",
        value: company.address,
        href: `https://maps.google.com/?q=${encodeURIComponent(company.address)}`,
        note: "Bari, zona servita con interventi in citta' e provincia.",
        icon: "map-pin"
    }
];
const serviceOptions = services.map((service)=>({
        label: service.title,
        value: service.title
    }));
const urgencyOptions = [
    {
        label: "Da programmare",
        value: "Da programmare"
    },
    {
        label: "Entro pochi giorni",
        value: "Entro pochi giorni"
    },
    {
        label: "Urgente",
        value: "Urgente"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
function Logo({ light = false, compact = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: "inline-flex items-center",
        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].shortName,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center overflow-hidden rounded-2xl border transition-transform duration-300 hover:scale-[1.02]", compact ? "h-14 w-[148px] p-2" : "p-2", light ? "border-white/10 bg-white" : "border-border/70 bg-white"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/brand/logo%20phoenix.png",
                alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].shortName,
                width: 319,
                height: 111,
                priority: true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-auto object-contain", compact ? "h-8 object-center translate-x-[2px]" : "h-9 sm:h-10")
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/logo.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/logo.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-phoenix-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-phoenix-500 text-white shadow-glow hover:-translate-y-0.5 hover:bg-phoenix-400",
            secondary: "bg-white/8 text-white ring-1 ring-white/15 backdrop-blur-sm hover:bg-white/14",
            outline: "border border-border bg-white text-foreground hover:border-phoenix-300 hover:text-phoenix-700",
            ghost: "text-foreground hover:bg-secondary"
        },
        size: {
            default: "h-11 px-5 py-2.5",
            sm: "h-9 rounded-xl px-3",
            lg: "h-12 px-6 text-base",
            icon: "size-11 rounded-2xl"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isHome = pathname === "/";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setIsScrolled(window.scrollY > 24)
            }["Navbar.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setIsOpen(false);
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    const solid = !isHome || isScrolled || isOpen;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed inset-x-0 top-0 z-50 px-4 pt-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto flex max-w-6xl items-center justify-between rounded-[2rem] border px-3 py-3 transition-all duration-300 sm:px-4", solid ? "border-border/80 bg-white/92 shadow-[0_18px_60px_-24px_rgba(15,23,42,0.28)] backdrop-blur-xl" : "border-border/70 bg-white/88 shadow-[0_18px_60px_-24px_rgba(15,23,42,0.22)] backdrop-blur-xl"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                            compact: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center rounded-full border border-border/80 bg-secondary/65 p-1 lg:flex",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-4 py-2 text-sm transition-all duration-300", pathname === link.href ? "bg-phoenix-500 text-white shadow-glow" : "text-foreground/72 hover:bg-white hover:text-foreground"),
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/src/components/navbar.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-2 lg:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                variant: "outline",
                                className: "border-border/80 bg-white text-foreground hover:border-phoenix-300 hover:text-phoenix-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].mobileHref,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        "Chiama ora"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/navbar.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                className: "px-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/preventivo",
                                    children: "Richiedi preventivo"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "inline-flex size-11 items-center justify-center rounded-2xl border border-border/80 bg-white text-foreground lg:hidden",
                        onClick: ()=>setIsOpen((prev)=>!prev),
                        "aria-label": isOpen ? "Chiudi menu" : "Apri menu",
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "size-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar.tsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "size-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar.tsx",
                            lineNumber: 82,
                            columnNumber: 48
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto mt-3 max-w-6xl rounded-[2rem] border border-border/80 bg-white/96 p-4 shadow-soft backdrop-blur-xl lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col gap-2",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl px-4 py-3 text-sm transition-colors", pathname === link.href ? "bg-phoenix-500 text-white" : "text-foreground/78 hover:bg-secondary hover:text-foreground"),
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/src/components/navbar.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["company"].mobileHref,
                            className: "mt-2 rounded-2xl bg-phoenix-500 px-4 py-3 text-center text-sm font-semibold text-white",
                            children: "Chiama ora"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/navbar.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/navbar.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navbar.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Navbar, "e7R9kg6skFdU/38jmVWVNE0+eig=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/toaster.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppToaster",
    ()=>AppToaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function AppToaster() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        position: "top-right",
        richColors: true,
        toastOptions: {
            classNames: {
                toast: "rounded-2xl"
            }
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toaster.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = AppToaster;
var _c;
__turbopack_context__.k.register(_c, "AppToaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_dde28f53._.js.map