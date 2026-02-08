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
        'hero.cta1': 'Mes services',
        'hero.cta2': 'Contact',

        // Menu
        'menu.home': 'Accueil',
        'menu.home.sub': "Retour à l'écran principal",
        'menu.about': 'À propos',
        'menu.about.sub': 'mon parcours et mon histoire',
        'menu.projects': 'Expériences professionnelles',
        'menu.projects.sub': 'mes activités, missions et responsabilités',
        'menu.skills': 'Compétences',
        'menu.skills.sub': 'Domaines d\'expertise',
        'menu.contact': 'Contact',
        'menu.contact.sub': 'Prendre rendez-vous',
        'menu.cv': 'Télécharger CV',
        'menu.cv.sub': 'Format PDF',

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
        'projects.title': 'Expériences professionnelles',
        'projects.subtitle': 'Exemples d\'interventions réalisées pour nos clients',
        'projects.activities': 'Activités',
        'projects.missions': 'Missions',
        'projects.responsibilities': 'Responsabilités',
        'projects.duration': 'Durée',
        'projects.role': 'Poste occupé',
        'projects.details': 'Détails de la mission',
        'projects.modal.title': 'Détails de l\'intervention',
        'projects.modal.subtitle': 'Vue approfondie de la mission et des résultats',
        'projects.code': 'Réference',
        'projects.cta': 'Contactez-moi pour une étude personnalisée',
        'projects.ctaBtn': 'Demander un devis',

        // Mission 1
        'projects.schoolhub.cat': 'Audit Légal',
        'projects.schoolhub.role': 'Auditeur Senior',
        'projects.schoolhub.duration': '2023 – Présent',
        'projects.schoolhub.activities': 'Audit légal des comptes annuels d\'une PME industrielle (CA > 10M€).',
        'projects.schoolhub.missions': 'Certification de l\'information financière et revue critique des cycles d\'exploitation.',
        'projects.schoolhub.responsibilities': 'Identification des risques d\'audit, validation des écritures de clôture et rédaction du rapport général.',

        // Mission 2
        'projects.medipass.cat': 'Conseil Fiscal',
        'projects.medipass.role': 'Consultant Fiscalité',
        'projects.medipass.duration': '2022 – 2023',
        'projects.medipass.activities': 'Restructuration juridique et fiscale d\'un groupe de sociétés.',
        'projects.medipass.missions': 'Optimisation de la structure détenue via la mise en place d\'une holding animatrice.',
        'projects.medipass.responsibilities': 'Audit fiscal préalable, mise en place du régime d\'intégration fiscale et suivi des conventions de management fees.',

        // Mission 3
        'projects.sondagepro.cat': 'Gestion Sociale',
        'projects.sondagepro.role': 'Consultant RH & Social',
        'projects.sondagepro.duration': '2021 – 2022',
        'projects.sondagepro.activities': 'Audit de conformité sociale et optimisation des charges patronales.',
        'projects.sondagepro.missions': 'Sécurisation du climat social et mise en place de dispositifs d\'épargne salariale.',
        'projects.sondagepro.responsibilities': 'Revue des contrats de travail, calcul des provisions sociales et rédaction d\'un accord d\'intéressement sur mesure.',

        // Mission 4
        'projects.comotorage.cat': 'Création d\'entreprise',
        'projects.comotorage.role': 'Conseiller en Création',
        'projects.comotorage.duration': '2020 – 2021',
        'projects.comotorage.activities': 'Accompagnement à la création d\'une start-up innovante dans l\'immobilier.',
        'projects.comotorage.missions': 'Établissement du Business Plan prévisionnel et recherche de financements bancaires.',
        'projects.comotorage.responsibilities': 'Conseil sur le choix de la forme juridique (SAS), rédaction des statuts et montage du dossier de financement.',

        // Mission 5
        'projects.objectif2026.cat': 'Pilotage & Reporting',
        'projects.objectif2026.role': 'Contrôleur de Gestion',
        'projects.objectif2026.duration': '2019 – 2020',
        'projects.objectif2026.activities': 'Mise en place d\'outils de pilotage et de reporting mensuel.',
        'projects.objectif2026.missions': 'Digitalisation du suivi de la performance via des dashboards automatisés.',
        'projects.objectif2026.responsibilities': 'Définition des indicateurs clés (KPI), connexion des flux comptables à Power BI et présentation des résultats à la direction.',

        // Skills
        'skills.title': 'Domaines de Compétence',
        'skills.subtitle': 'Une expertise pluridisciplinaire au service de votre entreprise',
        'skills.learning': 'Veille réglementaire constante',
        'skills.technical.title': 'Expertise Technique',
        'skills.software.title': 'Maîtrise Logicielle',

        'skills.accounting.title': 'Expertise Comptable',
        'skills.accounting.desc': 'Tenue et révision comptable, établissement des bilans et liasses fiscales. Reporting mensuel pour un pilotage précis.',

        'skills.tax.title': 'Fiscalité des Entreprises',
        'skills.tax.desc': 'Calcul des taxes, déclarations fiscales et optimisation de votre charge fiscale. Assistance en cas de contrôle.',

        'skills.legal.title': 'Juridique & Sociétés',
        'skills.legal.desc': 'Secrétariat juridique annuel, rédaction de statuts et modifications de structure. Droit des sociétés.',

        'skills.audit.title': 'Audit & Contrôle',
        'skills.audit.desc': 'Audit légal et contractuel. Certification des comptes et évaluation des procédures de contrôle interne.',

        'skills.soft.title': 'Management & Conseil',
        'skills.soft.desc': 'Gestion d\'équipe, relation client et anglais des affaires. Force de proposition et esprit d\'analyse stratégique.',

        'skills.excel.title': 'Microsoft Excel',
        'skills.excel.desc': 'Maîtrise experte des fonctions avancées, VBA, PowerQuery et PowerPivot pour l\'automatisation des flux de données.',

        'skills.bi.title': 'Power BI & Reporting',
        'skills.bi.desc': 'Conception de dashboards interactifs et visuels pour le pilotage de la performance et l\'aide à la décision.',

        'skills.logiciel.title': 'Logiciels Comptables',
        'skills.logiciel.desc': 'Utilisation quotidienne des solutions Sage et Cegid pour la production comptable et les états financiers.',

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
        'contact.footer.credit': 'Réalisé par',
    },
    en: {
        // Navigation
        'nav.logo': 'HOUAGA Mat-Colin',

        // Hero
        'hero.badge': 'Chartered Accountant Trainee — Audit & Advisory',
        'hero.title1': 'Expertise and Advice',
        'hero.title2': "for your success",
        'hero.description': "Strategic support, financial audit, and tax optimization for businesses and individuals. A clear vision of your numbers for informed decisions.",
        'hero.cta1': 'My services',
        'hero.cta2': 'Contact',

        // Menu
        'menu.home': 'Home',
        'menu.home.sub': 'Back to main screen',
        'menu.about': 'About',
        'menu.about.sub': 'my journey and my story',
        'menu.projects': 'Professional Experience',
        'menu.projects.sub': 'my activities, missions and responsibilities',
        'menu.skills': 'Expertise',
        'menu.skills.sub': 'Areas of expertise',
        'menu.contact': 'Contact',
        'menu.contact.sub': 'Book an appointment',
        'menu.cv': 'Download Resume',
        'menu.cv.sub': 'PDF Format',

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
        'projects.title': 'Professional Experience',
        'projects.subtitle': 'Examples of interventions carried out for our clients',
        'projects.activities': 'Activities',
        'projects.missions': 'Missions',
        'projects.responsibilities': 'Responsibilities',
        'projects.duration': 'Duration',
        'projects.role': 'Position held',
        'projects.details': 'Mission details',
        'projects.modal.title': 'Intervention Details',
        'projects.modal.subtitle': 'In-depth view of the mission and results',
        'projects.code': 'Reference',
        'projects.cta': 'Contact me for a personalized study',
        'projects.ctaBtn': 'Request a quote',

        // Mission 1
        'projects.schoolhub.cat': 'Statutory Audit',
        'projects.schoolhub.role': 'Senior Auditor',
        'projects.schoolhub.duration': '2023 – Present',
        'projects.schoolhub.activities': 'Statutory audit of annual accounts for an industrial SME (Turnover > €10M).',
        'projects.schoolhub.missions': 'Certification of financial information and critical review of operating cycles.',
        'projects.schoolhub.responsibilities': 'Identification of audit risks, validation of closing entries, and drafting the general report.',

        // Mission 2
        'projects.medipass.cat': 'Tax Advisory',
        'projects.medipass.role': 'Tax Consultant',
        'projects.medipass.duration': '2022 – 2023',
        'projects.medipass.activities': 'Legal and tax restructuring of a group of companies.',
        'projects.medipass.missions': 'Optimization of the holding structure via the implementation of an active holding company.',
        'projects.medipass.responsibilities': 'Preliminary tax audit, implementation of the tax integration regime, and monitoring of management fee agreements.',

        // Mission 3
        'projects.sondagepro.cat': 'Social Management',
        'projects.sondagepro.role': 'HR & Social Consultant',
        'projects.sondagepro.duration': '2021 – 2022',
        'projects.sondagepro.activities': 'Social compliance audit and optimization of employer contributions.',
        'projects.sondagepro.missions': 'Securing the social climate and implementing employee savings schemes.',
        'projects.sondagepro.responsibilities': 'Review of employment contracts, calculation of social provisions, and drafting of a custom profit-sharing agreement.',

        // Mission 4
        'projects.comotorage.cat': 'Business Creation',
        'projects.comotorage.role': 'Business Advisor',
        'projects.comotorage.duration': '2020 – 2021',
        'projects.comotorage.activities': 'Support for the creation of an innovative real estate start-up.',
        'projects.comotorage.missions': 'Preparation of the projected Business Plan and search for bank financing.',
        'projects.comotorage.responsibilities': 'Advice on the choice of legal form (SAS), drafting of statutes, and preparation of the financing file.',

        // Mission 5
        'projects.objectif2026.cat': 'Management & Reporting',
        'projects.objectif2026.role': 'Financial Controller',
        'projects.objectif2026.duration': '2019 – 2020',
        'projects.objectif2026.activities': 'Implementation of management tools and monthly reporting.',
        'projects.objectif2026.missions': 'Digitalization of performance monitoring via automated dashboards.',
        'projects.objectif2026.responsibilities': 'Definition of key performance indicators (KPIs), connection of accounting flows to Power BI, and presentation of results to management.',

        // Skills
        'skills.title': 'Areas of Competence',
        'skills.subtitle': 'Multidisciplinary expertise at the service of your company',
        'skills.learning': 'Regulatory watch',
        'skills.technical.title': 'Technical Expertise',
        'skills.software.title': 'Software Proficiency',

        'skills.accounting.title': 'Chartered Accountancy',
        'skills.accounting.desc': 'Accounting maintenance and review, preparation of balance sheets and tax returns. Monthly reporting for precise management.',

        'skills.tax.title': 'Corporate Taxation',
        'skills.tax.desc': 'Tax calculations, tax returns, and optimization of your tax burden. Assistance in case of audit.',

        'skills.legal.title': 'Legal & Corporate',
        'skills.legal.desc': 'Annual legal secretariat, drafting of statutes, and structural changes. Company law.',

        'skills.audit.title': 'Audit & Control',
        'skills.audit.desc': 'Statutory and contractual audit. Account certification and evaluation of internal control procedures.',

        'skills.soft.title': 'Management & Advisory',
        'skills.soft.desc': 'Team management, client relations, and business English. Strong analyzer and strategic advisory skills.',

        'skills.excel.title': 'Microsoft Excel',
        'skills.excel.desc': 'Expert mastery of advanced functions, VBA, PowerQuery, and PowerPivot for data flow automation.',

        'skills.bi.title': 'Power BI & Reporting',
        'skills.bi.desc': 'Design of interactive and visual dashboards for performance management and decision support.',

        'skills.logiciel.title': 'Accounting Software',
        'skills.logiciel.desc': 'Daily use of Sage and Cegid solutions for account production and financial statements.',

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

        'contact.footer1': 'HOUAGA Mat-Colin Firm — Chartered Accounting & Audit',
        'contact.footer2': '© 2025 HOUAGA Mat-Colin • All rights reserved',
        'contact.footer.credit': 'Realized by',
    },
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
