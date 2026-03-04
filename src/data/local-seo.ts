export type LocalSeoPage = {
  slug: string;
  title: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  heroBadge: string;
  serviceType: string;
  target: string[];
  workItems: string[];
  timing: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

export const localSeoPages: LocalSeoPage[] = [
  {
    slug: "elettricista-bari",
    title: "Elettricista Bari",
    navLabel: "Elettricista Bari",
    h1: "Elettricista a Bari per impianti, guasti e manutenzioni",
    metaTitle: "Elettricista a Bari | Impianti e manutenzioni",
    metaDescription:
      "Phoenix Elettronica realizza impianti elettrici, adeguamenti e manutenzioni a Bari. Contatta subito per sopralluogo e preventivo rapido.",
    intro:
      "Interveniamo su impianti civili e professionali con un approccio pratico: diagnosi chiara, lavoro ordinato e materiali affidabili.",
    heroBadge: "Bari e provincia",
    serviceType: "Servizi di elettricista",
    target: ["Privati", "Condomini", "Uffici e piccole aziende"],
    workItems: [
      "Impianti elettrici civili e piccole attivita'",
      "Adeguamenti e manutenzioni impianti esistenti",
      "Ricerca guasti, dispersioni e ripristini mirati",
    ],
    timing: [
      "Sopralluogo rapido in base alla zona e alla priorita'",
      "Preventivo chiaro prima dell'intervento",
      "Lavorazioni organizzate per ridurre tempi morti e disagi",
    ],
    faq: [
      {
        question: "Effettuate interventi a Bari e provincia?",
        answer:
          "Si', Phoenix Elettronica opera a Bari e nei comuni limitrofi con interventi su abitazioni, condomini e attivita' professionali.",
      },
      {
        question: "Vi occupate anche di adeguamenti impianti?",
        answer:
          "Si', realizziamo adeguamenti e manutenzioni per migliorare sicurezza, affidabilita' e continuita' dell'impianto esistente.",
      },
      {
        question: "Come posso richiedere un preventivo?",
        answer:
          "Puoi chiamare direttamente oppure usare il form preventivo indicando tipo di lavoro, zona e livello di urgenza.",
      },
    ],
  },
  {
    slug: "videosorveglianza-bari",
    title: "Videosorveglianza Bari",
    navLabel: "Videosorveglianza Bari",
    h1: "Videosorveglianza a Bari per case, aziende e condomini",
    metaTitle: "Videosorveglianza Bari | Impianti e antifurti",
    metaDescription:
      "Installazione di videosorveglianza e sistemi antifurto a Bari per abitazioni, uffici e condomini. Richiedi una soluzione su misura.",
    intro:
      "Progettiamo sistemi di sicurezza con copertura ragionata, componenti affidabili e configurazioni semplici da gestire nel tempo.",
    heroBadge: "Sicurezza a Bari",
    serviceType: "Videosorveglianza e antifurti",
    target: ["Abitazioni private", "Condomini", "Negozi, uffici e aziende"],
    workItems: [
      "Telecamere per punti sensibili e aree comuni",
      "Impianti antifurto con sensori e centrali",
      "Impostazione pratica e supporto all'utilizzo",
    ],
    timing: [
      "Valutazione spazi e accessi durante il sopralluogo",
      "Configurazione in base a copertura e criticita'",
      "Installazione ordinata con test finale del sistema",
    ],
    faq: [
      {
        question: "Installate solo telecamere o anche antifurti?",
        answer:
          "Gestiamo sia impianti di videosorveglianza sia sistemi antifurto, anche in combinazione nello stesso progetto.",
      },
      {
        question: "Le soluzioni sono adatte ai condomini?",
        answer:
          "Si', realizziamo impianti per ingressi, aree comuni, corsie box e punti sensibili, con soluzioni proporzionate al contesto.",
      },
      {
        question: "Fornite anche assistenza dopo l'installazione?",
        answer:
          "Si', possiamo intervenire su regolazioni, verifiche e manutenzioni successive per mantenere l'impianto efficiente.",
      },
    ],
  },
  {
    slug: "citofonia-videocitofonia-bari",
    title: "Citofonia e videocitofonia Bari",
    navLabel: "Citofonia Bari",
    h1: "Citofonia e videocitofonia a Bari per condomini e abitazioni",
    metaTitle: "Citofonia e videocitofonia Bari | Installazione e assistenza",
    metaDescription:
      "Installazione, sostituzione e manutenzione di citofoni e videocitofoni a Bari. Soluzioni per condomini, villette e uffici.",
    intro:
      "Aggiorniamo sistemi citofonici e videocitofonici con attenzione a praticita', controllo accessi e continuita' di funzionamento.",
    heroBadge: "Accessi e comunicazione",
    serviceType: "Citofonia e videocitofonia",
    target: ["Condomini", "Villette e abitazioni", "Uffici e piccoli complessi"],
    workItems: [
      "Nuove installazioni e sostituzioni impianti esistenti",
      "Videocitofonia per maggiore controllo accessi",
      "Ripristino guasti e diagnosi linee",
    ],
    timing: [
      "Analisi del numero di utenze e dei punti da servire",
      "Preventivo in base alla configurazione dell'edificio",
      "Intervento ordinato con test dei terminali principali",
    ],
    faq: [
      {
        question: "Intervenite su citofoni condominiali esistenti?",
        answer:
          "Si', lavoriamo sia su nuove installazioni sia su sostituzioni e ripristini di impianti citofonici o videocitofonici gia' presenti.",
      },
      {
        question: "La videocitofonia e' adatta anche a piccoli condomini?",
        answer:
          "Si', possiamo configurare soluzioni adatte anche a edifici con poche utenze, mantenendo il sistema semplice da utilizzare.",
      },
      {
        question: "Quanto tempo serve per un intervento standard?",
        answer:
          "Dipende da numero di posti interni, montante e stato dell'impianto, ma il sopralluogo permette di stimare tempi e modalita' con precisione.",
      },
    ],
  },
  {
    slug: "automazioni-cancelli-porte-bari",
    title: "Automazioni cancelli e porte Bari",
    navLabel: "Automazioni Bari",
    h1: "Automazioni per cancelli, porte e serrande a Bari",
    metaTitle: "Automazioni cancelli e porte Bari | Home automation",
    metaDescription:
      "Automazioni per cancelli, portoni, porte e serrande a Bari. Soluzioni pratiche e sicure per case, condomini e attivita'.",
    intro:
      "Realizziamo automazioni funzionali per accessi residenziali e professionali, con componenti affidabili e utilizzo semplice.",
    heroBadge: "Automazione accessi",
    serviceType: "Automazioni per cancelli e porte",
    target: ["Privati", "Condomini", "Attivita' commerciali e aziende"],
    workItems: [
      "Motorizzazione cancelli e portoni",
      "Automazione porte, serrande e saracinesche",
      "Comandi, telecomandi e sistemi di sicurezza d'uso",
    ],
    timing: [
      "Sopralluogo tecnico per ingombri e utilizzo reale",
      "Scelta della soluzione piu' adatta al varco",
      "Installazione con collaudo e verifica comandi",
    ],
    faq: [
      {
        question: "Automatizzate anche serrande e saracinesche?",
        answer:
          "Si', realizziamo soluzioni dedicate anche per serrande e saracinesche in contesti residenziali o commerciali.",
      },
      {
        question: "La home automation e' sempre necessaria?",
        answer:
          "No. Proponiamo integrazioni smart solo quando portano un vantaggio reale in termini di praticita' o controllo.",
      },
      {
        question: "Fornite manutenzione sulle automazioni?",
        answer:
          "Si', possiamo occuparci di regolazioni, ripristini e manutenzioni successive per mantenere il sistema affidabile nel tempo.",
      },
    ],
  },
  {
    slug: "cablaggio-reti-lan-bari",
    title: "Cablaggio reti LAN Bari",
    navLabel: "Cablaggio LAN Bari",
    h1: "Cablaggio reti LAN a Bari per uffici, aziende e abitazioni",
    metaTitle: "Cablaggio reti LAN Bari | Reti locali ordinate e stabili",
    metaDescription:
      "Cablaggio reti LAN a Bari per uffici, aziende e case evolute. Punti rete, distribuzione interna e interventi ordinati su misura.",
    intro:
      "Realizziamo reti locali pulite e affidabili, con cablaggi organizzati per semplificare uso quotidiano, manutenzione e ampliamenti futuri.",
    heroBadge: "Reti locali Bari",
    serviceType: "Cablaggio reti LAN",
    target: ["Uffici e studi", "Piccole e medie aziende", "Abitazioni con piu' punti rete"],
    workItems: [
      "Stesura e organizzazione dei cablaggi",
      "Punti rete e distribuzione interna",
      "Supporto per revisioni o ampliamenti di rete",
    ],
    timing: [
      "Analisi spazi, tratte e numero di postazioni",
      "Lavoro pianificato per ridurre interferenze operative",
      "Consegna di un impianto ordinato e facile da gestire",
    ],
    faq: [
      {
        question: "Il cablaggio LAN e' utile solo per le aziende?",
        answer:
          "No, e' utile anche in abitazioni o studi che hanno bisogno di connessioni piu' stabili, piu' punti rete o una distribuzione ordinata.",
      },
      {
        question: "Potete intervenire su una rete gia' esistente?",
        answer:
          "Si', possiamo revisionare, ampliare o riordinare un'infrastruttura di rete gia' presente.",
      },
      {
        question: "Quanto dura un intervento medio?",
        answer:
          "Dipende da metratura, numero di postazioni e passaggi disponibili. Dopo il sopralluogo definiamo una stima realistica.",
      },
    ],
  },
  {
    slug: "manutenzione-condomini-bari",
    title: "Manutenzione condomini Bari",
    navLabel: "Manutenzione condomini Bari",
    h1: "Manutenzione condomini a Bari con interventi rapidi e gestione chiara",
    metaTitle: "Manutenzione condomini Bari | Assistenza impianti",
    metaDescription:
      "Servizi di manutenzione condomini a Bari per impianti, aree comuni e ripristini. Supporto rapido per amministratori e complessi residenziali.",
    intro:
      "Affianchiamo amministratori e condomini con manutenzioni programmate o urgenti, comunicazione chiara e tempi organizzati.",
    heroBadge: "Servizio per amministratori",
    serviceType: "Manutenzione condomini",
    target: ["Amministratori di condominio", "Complessi residenziali", "Palazzine plurifamiliari"],
    workItems: [
      "Controlli su impianti e servizi comuni",
      "Ripristino guasti e piccole urgenze",
      "Programmazione interventi periodici",
    ],
    timing: [
      "Presa in carico rapida delle richieste",
      "Definizione priorita' con referente condominiale",
      "Interventi programmati o urgenti in base al caso",
    ],
    faq: [
      {
        question: "Lavorate con amministratori di condominio?",
        answer:
          "Si', una parte importante dell'attivita' riguarda la gestione di manutenzioni e interventi per amministratori e stabili residenziali.",
      },
      {
        question: "Gestite solo manutenzione ordinaria?",
        answer:
          "No, possiamo seguire sia manutenzioni ordinarie sia interventi straordinari o ripristini urgenti quando necessario.",
      },
      {
        question: "Come vengono organizzati gli interventi?",
        answer:
          "Le attivita' vengono pianificate in base a urgenza, accessibilita' e priorita' del condominio, mantenendo una comunicazione chiara con il referente.",
      },
    ],
  },
];

export const localSeoPageMap = Object.fromEntries(
  localSeoPages.map((page) => [page.slug, page]),
) as Record<string, LocalSeoPage>;
