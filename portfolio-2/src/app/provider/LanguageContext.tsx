/**
 * LanguageContext.tsx - Système de traduction personnalisé.
 * Gère le changement de langue (FR/EN) et fournit la fonction t()
 * pour traduire les clés de texte dans tous les composants.
 */
import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    fr: {
        // Navigation
        'nav.logo': 'HOUAGA Mat-Colin',

        // Hero
        'hero.badge': 'Expert Comptable Mémorialiste — Audit & Conseil',
        'hero.title1': 'Expertise et Conseil',
        'hero.title2': "pour votre réussite",
        'hero.description': "Accompagnement stratégique, audit financier et optimisation fiscale pour les entreprises et les particuliers. Une vision claire de vos chiffres pour des décisions éclairées.",
        'hero.cta1': 'Mon expertise',
        'hero.cta2': 'Mes services',

        // Menu
        'menu.home': 'Accueil',
        'menu.home.sub': "Retour à l'écran principal",
        'menu.about': 'À propos',
        'menu.about.sub': 'Mon parcours et mes valeurs',
        'menu.projects': 'Missions',
        'menu.projects.sub': 'Exemples d\'interventions',
        'menu.skills': 'Compétences',
        'menu.skills.sub': 'Domaines d\'expertise',
        'menu.contact': 'Contact',
        'menu.contact.sub': 'Prendre rendez-vous',

        // About
        'about.title': 'À propos',
        'about.subtitle1': 'Expert Comptable,',
        'about.subtitle2': "Partenaire de votre croissance",
        'about.p1': "Avec une solide formation en comptabilité et gestion, je me consacre à l'accompagnement des entreprises dans leur développement économique et stratégique. Mon approche repose sur la rigueur, l'éthique et une écoute active des besoins clients.",
        'about.p2': "L'expertise comptable ne se limite pas aux chiffres ; c'est un levier de performance. J'interviens dans l'audit légal, le conseil fiscal et la gestion sociale pour sécuriser et optimiser vos activités.",
        'about.p3': "Mon objectif est de vous fournir une information financière fiable et pertinente, vous permettant de vous concentrer sur votre cœur de métier en toute sérénité.",
        'about.highlight1.title': "Parcours Académique",
        'about.highlight1.desc': "Diplômé d'Expertise Comptable (En cours de finalisation)",
        'about.highlight1.detailsTitle': "Mon parcours académique et professionnel",
        'about.highlight1.cta': 'Voir détails',
        'about.edu.2024.year': "2024 – Présent",
        'about.edu.2024.title': "DEC – Diplôme d'Expertise Comptable",
        'about.edu.2024.inst': "Ordre des Experts-Comptables",
        'about.edu.2024.univ': "Paris, France",
        'about.edu.2023.year': "2022 – 2024",
        'about.edu.2023.title': "DSCG – Diplôme Supérieur de Comptabilité et de Gestion",
        'about.edu.2023.inst': "INTEC / CNAM",
        'about.edu.2022.year': "2019 – 2022",
        'about.edu.2022.title': "DCG – Diplôme de Comptabilité et de Gestion",
        'about.edu.2022.desc': "Mention Bien — Major de promotion",
        'about.highlight2.title': 'Rigueur & Analyse',
        'about.highlight2.desc': 'Capacité d\'analyse approfondie des états financiers et des risques',
        'about.highlight3.title': 'Conseil Stratégique',
        'about.highlight3.desc': 'Accompagnement des dirigeants dans les prises de décisions complexes',
        'about.stat1': 'Missions réalisées',
        'about.stat2': 'Domaines d\'expert.',
        'about.stat3': 'Rigueur',
        'about.stat4': 'Confidentialité',

        // Projects (Missions)
        'projects.title': 'Missions de Référence',
        'projects.subtitle': 'Exemples d\'interventions menées pour nos clients',
        'projects.problem': 'Enjeu',
        'projects.solution': 'Intervention',
        'projects.details': 'Détails',
        'projects.code': 'Référence',
        'projects.cta': 'Contactez-moi pour une étude personnalisée',
        'projects.ctaBtn': 'Demander un devis',

        // Mission 1
        'projects.schoolhub.cat': 'Audit Légal',
        'projects.schoolhub.desc': 'Audit des comptes annuels d\'une PME industrielle (CA > 10M€). Certification des états financiers.',
        'projects.schoolhub.prob': 'Fiabilisation nécessaire des comptes pour une levée de fonds.',
        'projects.schoolhub.sol': 'Revue complète des cycles, identification des risques et certification sans réserve.',

        // Mission 2
        'projects.medipass.cat': 'Conseil Fiscal',
        'projects.medipass.desc': 'Restructuration fiscale d\'un groupe de sociétés (Holding). Optimisation de l\'intégration fiscale.',
        'projects.medipass.prob': 'Charge fiscale inadaptée à la structure du groupe.',
        'projects.medipass.sol': 'Mise en place d\'une holding animatrice et régime d\'intégration fiscale.',

        // Mission 3
        'projects.sondagepro.cat': 'Gestion Sociale',
        'projects.sondagepro.desc': 'Audit de conformité sociale et mise en place d\'un accord d\'intéressement.',
        'projects.sondagepro.prob': 'Risques de redressement URSSAF et besoin de motivation salariale.',
        'projects.sondagepro.sol': 'Correction des anomalies et rédaction d\'un accord d\'intéressement sur mesure.',

        // Mission 4
        'projects.comotorage.cat': 'Création d\'Entreprise',
        'projects.comotorage.desc': 'Accompagnement à la création d\'une start-up innovante : Business Plan, statuts, financement.',
        'projects.comotorage.prob': 'Complexité des choix juridiques et fiscaux au démarrage.',
        'projects.comotorage.sol': 'Rédaction du BP, choix SAS IS, et obtention d\'un prêt bancaire.',

        // Mission 5
        'projects.objectif2026.cat': 'Pilotage & Reporting',
        'projects.objectif2026.desc': 'Mise en place de tableaux de bord de gestion (KPIs) pour le suivi mensuel de l\'activité.',
        'projects.objectif2026.prob': 'Manque de visibilité sur la rentabilité en temps réel.',
        'projects.objectif2026.sol': 'Dashboard automatisé sous PowerBI connecté à la comptabilité.',

        // Skills
        'skills.title': 'Domaines de Compétence',
        'skills.subtitle': 'Une expertise pluridisciplinaire au service de votre entreprise',
        'skills.learning': 'Veille réglementaire constante',
        'skills.languages': 'Comptabilité',
        'skills.frameworks': 'Fiscalité',
        'skills.databases': 'Juridique',
        'skills.ai': 'Outils & Systèmes',
        'skills.tools': 'Audit',
        'skills.other': 'Soft Skills',

        // Contact
        'contact.title': 'Prendre Contact',
        'contact.subtitle': 'Discutons de vos besoins et de vos projets.',
        'contact.form.title': "Formulaire de contact",
        'contact.form.name': 'Nom',
        'contact.form.namePlaceholder': 'Votre nom / Société',
        'contact.form.email': 'Email',
        'contact.form.emailPlaceholder': 'contact@societe.com',
        'contact.form.message': 'Objet de la demande',
        'contact.form.messagePlaceholder': 'Décrivez votre besoin...',
        'contact.form.submit': 'Envoyer la demande',
        'contact.footer1': 'Cabinet HOUAGA Mat-Colin — Expertise Comptable & Audit',
        'contact.footer2': '© 2025 HOUAGA Mat-Colin • Tous droits réservés',
    },
    en: {
        // Navigation
        'nav.logo': 'HOUAGA Mat-Colin',

        // Hero
        'hero.badge': 'Chartered Accountant Trainee — Audit & Advisory',
        'hero.title1': 'Expertise and Advice',
        'hero.title2': "for your success",
        'hero.description': "Strategic support, financial audit, and tax optimization for businesses and individuals. A clear vision of your numbers for informed decisions.",
        'hero.cta1': 'My expertise',
        'hero.cta2': 'My services',

        // Menu
        'menu.home': 'Home',
        'menu.home.sub': 'Back to main screen',
        'menu.about': 'About',
        'menu.about.sub': 'My journey and values',
        'menu.projects': 'Missions',
        'menu.projects.sub': 'Examples of interventions',
        'menu.skills': 'Expertise',
        'menu.skills.sub': 'Areas of expertise',
        'menu.contact': 'Contact',
        'menu.contact.sub': 'Book an appointment',

        // About
        'about.title': 'About',
        'about.subtitle1': 'Chartered Accountant,',
        'about.subtitle2': 'Partner in your growth',
        'about.p1': 'With a solid background in accounting and management, I adhere to supporting companies in their economic and strategic development. My approach is based on rigor, ethics, and active listening to client needs.',
        'about.p2': 'Public accounting is not limited to numbers; it is a performance lever. I intervene in statutory audit, tax advice, and social management to secure and optimize your activities.',
        'about.p3': 'My goal is to provide you with reliable and relevant financial information, allowing you to focus on your core business with peace of mind.',
        'about.highlight1.title': 'Academic Journey',
        'about.highlight1.desc': 'Chartered Accountancy Graduate (In progress)',
        'about.highlight1.detailsTitle': 'My academic and professional journey',
        'about.highlight1.cta': 'View details',
        'about.edu.2024.year': "2024 – Present",
        'about.edu.2024.title': "DEC – Diploma of Chartered Accountancy",
        'about.edu.2024.inst': "Order of Chartered Accountants",
        'about.edu.2024.univ': "Paris, France",
        'about.edu.2023.year': "2022 – 2024",
        'about.edu.2023.title': "DSCG – Higher Diploma in Accounting and Management",
        'about.edu.2023.inst': "INTEC / CNAM",
        'about.edu.2022.year': "2019 – 2022",
        'about.edu.2022.title': "DCG – Diploma in Accounting and Management",
        'about.edu.2022.desc': "High Honors — Valedictorian",
        'about.highlight2.title': 'Rigor & Analysis',
        'about.highlight2.desc': 'In-depth analysis of financial statements and risks',
        'about.highlight3.title': 'Strategic Advice',
        'about.highlight3.desc': 'Supporting leaders in complex decision-making',
        'about.stat1': 'Missions done',
        'about.stat2': 'Expertise areas',
        'about.stat3': 'Rigor',
        'about.stat4': 'Confidentiality',

        // Projects (Missions)
        'projects.title': 'Reference Missions',
        'projects.subtitle': 'Examples of interventions carried out for our clients',
        'projects.problem': 'Challenge',
        'projects.solution': 'Intervention',
        'projects.details': 'Details',
        'projects.code': 'Reference',
        'projects.cta': 'Contact me for a personalized study',
        'projects.ctaBtn': 'Request a quote',

        // Mission 1
        'projects.schoolhub.cat': 'Statutory Audit',
        'projects.schoolhub.desc': 'Audit of annual accounts for an industrial SME (Turnover > €10M). Certification of financial statements.',
        'projects.schoolhub.prob': 'Reliability of accounts needed for fundraising.',
        'projects.schoolhub.sol': 'Complete review of cycles, risk identification, and unqualified certification.',

        // Mission 2
        'projects.medipass.cat': 'Tax Advisory',
        'projects.medipass.desc': 'Tax restructuring of a group of companies (Holding). Optimization of tax integration.',
        'projects.medipass.prob': 'Tax burden unsuited to the group structure.',
        'projects.medipass.sol': 'Establishment of a holding company and tax integration regime.',

        // Mission 3
        'projects.sondagepro.cat': 'Social Management',
        'projects.sondagepro.desc': 'Social compliance audit and implementation of a profit-sharing agreement.',
        'projects.sondagepro.prob': 'URSSAF adjustment risks and need for employee motivation.',
        'projects.sondagepro.sol': 'Correction of anomalies and drafting of a custom profit-sharing agreement.',

        // Mission 4
        'projects.comotorage.cat': 'Business Creation',
        'projects.comotorage.desc': 'Support for the creation of an innovative start-up: Business Plan, statutes, financing.',
        'projects.comotorage.prob': 'Complexity of legal and tax choices at startup.',
        'projects.comotorage.sol': 'Drafting of the BP, choice of SAS IS, and obtaining a bank loan.',

        // Mission 5
        'projects.objectif2026.cat': 'Management & Reporting',
        'projects.objectif2026.desc': 'Implementation of management dashboards (KPIs) for monthly activity monitoring.',
        'projects.objectif2026.prob': 'Lack of visibility on profitability in real time.',
        'projects.objectif2026.sol': 'Automated dashboard under PowerBI connected to accounting.',

        // Skills
        'skills.title': 'Areas of Competence',
        'skills.subtitle': 'Multidisciplinary expertise at the service of your company',
        'skills.learning': 'Regulatory watch',
        'skills.languages': 'Accounting',
        'skills.frameworks': 'Taxation',
        'skills.databases': 'Legal',
        'skills.ai': 'Tools & Systems',
        'skills.tools': 'Audit',
        'skills.other': 'Soft Skills',

        // Contact
        'contact.title': 'Contact Me',
        'contact.subtitle': 'Let\'s discuss your needs and projects.',
        'contact.form.title': 'Send a message',
        'contact.form.name': 'Name',
        'contact.form.namePlaceholder': 'Your name / Company',
        'contact.form.email': 'Email',
        'contact.form.emailPlaceholder': 'contact@company.com',
        'contact.form.message': 'Subject',
        'contact.form.messagePlaceholder': 'Describe your need...',
        'contact.form.submit': 'Send request',
        'contact.footer1': 'HOUAGA Mat-Colin Firm — Chartered Accountancy & Audit',
        'contact.footer2': '© 2025 HOUAGA Mat-Colin • All rights reserved',
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider : Enveloppe toute l'application pour rendre la langue disponible partout
export function LanguageProvider({ children }: { children: ReactNode }) {
    // Initialize from localStorage or default to 'fr'
    const [language, setLanguageState] = useState<Language>(() => {
        try {
            const saved = localStorage.getItem('language');
            return (saved === 'fr' || saved === 'en') ? saved : 'fr';
        } catch (e) {
            console.warn("Language persistence unavailable:", e);
            return 'fr';
        }
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        try {
            localStorage.setItem('language', lang);
        } catch (e) {
            console.warn("Language save failed:", e);
        }
    };

    // t : La fonction qui prend une clé (ex: 'nav.home') et renvoie le texte traduit
    const t = (key: string): string => {
        if (!translations[language]) return key;
        return translations[language][key as keyof typeof translations['fr']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// useLanguage : Hook personnalisé pour utiliser facilement la traduction dans les composants
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
