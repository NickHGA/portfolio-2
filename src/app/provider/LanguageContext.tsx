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
        'hero.cta1': 'A propos',
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
        'menu.contact.sub': '',
        'menu.cv': 'Mon CV',
        'menu.cv.sub': 'Consulter et télécharger',

        // About
        'about.title': 'À propos',
        'about.subtitle1': 'Expert Comptable,',
        'about.subtitle2': "Partenaire de votre croissance",
        'about.p1': "Avec une solide formation en comptabilité et gestion, je me consacre à l'accompagnement des entreprises dans leur développement économique et stratégique. Mon approche repose sur la rigueur, l'éthique et une écoute active des besoins clients.",
        'about.p2': "L'expertise comptable ne se limite pas aux chiffres ; c'est un levier de performance. J'interviens dans l'audit légal, le conseil fiscal et la gestion sociale pour sécuriser et optimiser vos activités.",
        'about.p3': "Mon objectif est de vous fournir une information financière fiable et pertinente, vous permettant de vous concentrer sur votre cœur de métier en toute sérénité.",
        'about.highlight1.title': 'Parcours Académique',
        'about.highlight1.desc': "Diplômé d'Expertise Comptable (En cours de finalisation)",
        'about.highlight1.detailsTitle': 'Mon parcours académique et professionnel',
        'about.highlight1.cta': 'Voir détails',
        'about.edu.1.year': '2023 – 2025',
        'about.edu.1.title': 'Diplôme Supérieur de Comptabilité et de Gestion (DSCG / DSGC)',
        'about.edu.1.inst': 'École Supérieure d\'Audit et de Management (ESAM)',
        'about.edu.1.univ': 'Lomé, Togo',
        'about.edu.2.year': '2020 – 2023',
        'about.edu.2.title': 'Diplôme de Comptabilité et de Gestion (DCG / DGC)',
        'about.edu.2.inst': 'CNAM INTEC par ESEC-INTEC BENIN',
        'about.edu.2.univ': 'Cotonou, Bénin',
        'about.edu.3.year': '2020 – 2023',
        'about.edu.3.title': 'Licence Finance Comptabilité et Audit (LFCA) // Comptabilité gestion(LCG)',
        'about.edu.3.inst': 'École Supérieure d\'Expertise Comptable (ESEC-INTEC BENIN)',
        'about.edu.3.univ': 'Cotonou, Bénin',
        'about.edu.4.year': '2019 – 2020',
        'about.edu.4.title': 'Baccalauréat scientifique',
        'about.edu.4.inst': 'Collège Catholique Pierre Joseph de Clorivière',
        'about.edu.4.univ': 'Abomey-Calavi, Bénin',
        'about.highlight2.title': 'Diplôme, attestation et certificat',
        'about.highlight2.desc': 'DEC, DSCG, DCG et certifications professionnelles.',
        'about.highlight3.title': 'Conseil Stratégique',
        'about.highlight3.desc': 'Accompagnement des dirigeants dans les prises de décisions complexes',
        'about.stat1': 'Missions réalisées',
        'about.stat2': 'Domaines d\'expert.',
        'about.stat3': 'Rigueur',
        'about.stat4': 'Confidentialité',

        // Projects (Missions)
        'projects.title': 'Expériences professionnelles',
        'projects.subtitle': 'Mes stages et missions en entreprise',
        'projects.description': 'Description',
        'projects.competences': 'Expertise mobilisée',
        'projects.duration': 'Durée',
        'projects.role': 'Poste occupé',
        'projects.details': 'Voir les détails',
        'projects.modal.title': 'Détails du stage',
        'projects.modal.subtitle': 'Vue approfondie de la mission et des résultats',

        // Stage 1 - SODEXCA 2025
        'projects.stage1.role': 'SODEXCA',
        'projects.stage1.company': 'Stagiaire comptable',
        'projects.stage1.location': 'Agontikon-Cotonou, Bénin',
        'projects.stage1.duration': 'Juillet 2025 - Août 2025',
        'projects.stage1.description': 'Participation active à l\'élaboration des états financiers annuels : traitement comptable des pièces de banque, analyse des comptes et rapprochements bancaires. • Réalisation d\'une mission d\'inventaires physiques : contrôle physique des stocks, identification des écarts ou anomalies et production d\'une fiche de synthèse détaillée apportant une vision claire des écarts de stock.',
        'projects.stage1.competences': 'Comptabilité générale, Rapprochement bancaire, Inventaire physique, Excel',

        // Stage 2 - SODEXCA 2024
        'projects.stage2.role': 'SODEXCA',
        'projects.stage2.company': 'Stagiaire comptable',
        'projects.stage2.location': 'Agontikon-Cotonou, Bénin',
        'projects.stage2.duration': 'Juin 2024 - Août 2024',
        'projects.stage2.description': 'Participation active à l\'élaboration des états financiers annuels. Traitement comptable des pièces de banque, analyse des comptes et rapprochements bancaires. • Vérification et contrôle des écritures comptables.',
        'projects.stage2.competences': 'Comptabilité générale, Rapprochement bancaire, Analyse des comptes',

        // Stage 3 - NCI 2022
        'projects.stage3.role': 'New Covenant International (NCI)',
        'projects.stage3.company': 'Stagiaire comptable et auditeur',
        'projects.stage3.location': 'Kindonou-Cotonou, Bénin',
        'projects.stage3.duration': 'Juin 2022 - Août 2022',
        'projects.stage3.description': 'Réalisation du contrôle interne de deux projets : observations sur la mobilisation des ressources, examen de l\'exécution des dépenses et contrôle de la conformité des rapports financiers et des dépenses. Vérification des impôts déclarés assurant l\'exactitude des déclarations fiscales. Participation active à l\'élaboration des états financiers annuels.',
        'projects.stage3.competences': 'Contrôle interne, Audit, Fiscalité, États financiers',

        // Skills
        'skills.title': 'Domaines de Compétence',
        'skills.subtitle': 'Une expertise pluridisciplinaire au service de votre entreprise',
        'skills.learning': 'Veille réglementaire constante',
        'skills.technical.title': 'Expertise Technique',
        'skills.software.title': 'Maîtrise Logicielle',

        'skills.accounting.title': 'Comptabilité',
        'skills.accounting.desc': 'Tenue de la comptabilité, analyse des comptes sociaux, travaux d\'inventaires physiques et de fin d\'exercice, reporting financier',

        'skills.tax.title': 'Fiscalité des Entreprises',
        'skills.tax.desc': 'Calcul des impôts et taxes, suivi et contrôle des déclarations fiscales, optimisation des charges fiscales.',

        'skills.legal.title': 'Juridique & Sociétés',
        'skills.legal.desc': 'Constitution de société, fonctionnement et droits des associés. Modification, transformation et dissolution de la structure.',

        'skills.audit.title': 'Audit & Contrôle',
        'skills.audit.desc': 'Audit des projets ONG, évaluation des procédures de contrôle interne, établissement de rapport de synthèse.',

        'skills.soft.title': 'Gestion & Conseil',
        'skills.soft.desc': 'Force de proposition et esprit d\'analyse critique et stratégique. Gestion d\'équipe et relation client.',

        'skills.finance.title': 'Analyse Financière',
        'skills.finance.desc': 'Évaluation de la santé financière d\'une entreprise en examinant son niveau d\'activité, l\'équilibre de sa structure financière, son aptitude à générer des profits et à rembourser ses dettes à court et long termes.',

        'skills.restructuring.title': 'Opération de Restructuration',
        'skills.restructuring.desc': 'Appréhension des opérations de fusion, scissions, apports partiels d\'actifs, acquisitions et transformations.',

        'skills.word.title': 'Microsoft Word',
        'skills.word.desc': 'Traitement de texte.',

        'skills.ppt.title': 'Microsoft PowerPoint',
        'skills.ppt.desc': 'Présentation claire et attrayante.',

        'skills.excel.title': 'Microsoft Excel',
        'skills.excel.desc': 'Maîtrise des fonctions de calculs automatisés, de création de tableaux croisés dynamiques, de VBA, de plannings, de graphiques et de bases de données.',

        'skills.hypersoft.title': 'Hypersoft',
        'skills.hypersoft.desc': 'Logiciel comptable SYSCOHADA permettant la tenue de la comptabilité : saisie des opérations, édition des documents comptables propres à chaque entité (états financiers).',
        'skills.hypersoft.status': 'Utilisation en cabinet',

        'skills.sage.title': 'Sage 100 Comptabilité i7',
        'skills.sage.desc': 'Logiciel de gestion comptable et financière complet destiné aux PME. Utilisation quotidienne pour la production comptable et des états financiers.',
        'skills.sage.status': 'Formation suivie',

        'skills.bi.title': 'Power BI',
        'skills.bi.desc': 'Analyser et visualiser des données provenant de multiples sources pour créer des dashboards interactifs et visuels pour le pilotage de la performance.',
        'skills.bi.status': 'Formation en cours',

        // CV Viewer
        'cv.title': 'Mon Curriculum Vitae',
        'cv.subtitle': 'Consultez mon CV ci-dessous ou téléchargez-le en PDF.',
        'cv.download': 'Télécharger le CV',

        // Contact
        'contact.title': 'Me contacter',
        'contact.subtitle': 'Discutons de vos besoins et de vos projets.',
        'contact.form.title': "Formulaire de contact",
        'contact.form.name': 'Nom',
        'contact.form.namePlaceholder': 'Votre nom / Société',
        'contact.form.email': 'Email',
        'contact.form.emailPlaceholder': 'contact@societe.com',
        'contact.form.message': 'Message',
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
        'hero.cta1': 'About',
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
        'menu.contact.sub': '',
        'menu.cv': 'My Resume',
        'menu.cv.sub': 'View and download',

        // About
        'about.title': 'About',
        'about.subtitle1': 'Chartered Accountant,',
        'about.subtitle2': 'Partner in your growth',
        'about.p1': 'With a solid background in accounting and management, I adhere to supporting companies in their economic and strategic development. My approach is based on rigor, ethics, and active listening to client needs.',
        'about.p2': 'Public accounting is not limited to numbers; it is a performance lever. I intervene in statutory audit, tax advice, and social management to secure and optimize your activities.',
        'about.p3': 'My goal is to provide you with reliable and relevant financial information, allowing you to focus on your core business with peace of mind.',
        'about.highlight1.title': 'Academic Background',
        'about.highlight1.desc': 'Chartered Accountancy Graduate (In progress)',
        'about.highlight1.detailsTitle': 'My academic and professional journey',
        'about.highlight1.cta': 'View details',
        'about.edu.1.year': '2023 – 2025',
        'about.edu.1.title': 'Higher Diploma in Accounting and Management (DSCG / DSGC)',
        'about.edu.1.inst': 'School of Audit and Management (ESAM)',
        'about.edu.1.univ': 'Lomé, Togo',
        'about.edu.2.year': '2020 – 2023',
        'about.edu.2.title': 'Diploma in Accounting and Management (DCG / DGC)',
        'about.edu.2.inst': 'CNAM INTEC by ESEC-INTEC BENIN',
        'about.edu.2.univ': 'Cotonou, Benin',
        'about.edu.3.year': '2020 – 2023',
        'about.edu.3.title': 'Bachelor in Finance, Accounting and Audit (LFCA / LCG)',
        'about.edu.3.inst': 'School of Chartered Accountancy (ESEC-INTEC BENIN)',
        'about.edu.3.univ': 'Cotonou, Benin',
        'about.edu.4.year': '2019 – 2020',
        'about.edu.4.title': 'Scientific Baccalauréat',
        'about.edu.4.inst': 'Collège Catholique Pierre Joseph de Clorivière',
        'about.edu.4.univ': 'Abomey-Calavi, Benin',
        'about.highlight2.title': 'Degrees, certificates & credentials',
        'about.highlight2.desc': 'DEC, DSCG, DCG and professional certifications.',
        'about.highlight3.title': 'Strategic Advice',
        'about.highlight3.desc': 'Supporting leaders in complex decision-making',
        'about.stat1': 'Missions done',
        'about.stat2': 'Expertise areas',
        'about.stat3': 'Rigor',
        'about.stat4': 'Confidentiality',

        // Projects (Missions)
        'projects.title': 'Professional Experience',
        'projects.subtitle': 'My internships and professional missions',
        'projects.description': 'Description',
        'projects.competences': 'Expertise used',
        'projects.duration': 'Duration',
        'projects.role': 'Position held',
        'projects.details': 'View details',
        'projects.modal.title': 'Internship Details',
        'projects.modal.subtitle': 'In-depth view of the mission and results',

        // Internship 1 - SODEXCA 2025
        'projects.stage1.role': 'SODEXCA',
        'projects.stage1.company': 'Accounting Intern',
        'projects.stage1.location': 'Agontikon-Cotonou, Bénin',
        'projects.stage1.duration': 'July 2025 - August 2025',
        'projects.stage1.description': 'Active participation in the preparation of annual financial statements: accounting treatment of bank documents, account analysis and bank reconciliations. • Completion of a physical inventory mission: physical stock control, identification of discrepancies or anomalies and production of a detailed summary sheet providing a clear view of stock discrepancies.',
        'projects.stage1.competences': 'General Accounting, Bank Reconciliation, Physical Inventory, Excel',

        // Internship 2 - SODEXCA 2024
        'projects.stage2.role': 'SODEXCA',
        'projects.stage2.company': 'Accounting Intern',
        'projects.stage2.location': 'Agontikon-Cotonou, Bénin',
        'projects.stage2.duration': 'June 2024 - August 2024',
        'projects.stage2.description': 'Active participation in the preparation of annual financial statements. • Accounting treatment of bank documents, account analysis and bank reconciliations. Verification and control of accounting entries.',
        'projects.stage2.competences': 'General Accounting, Bank Reconciliation, Account Analysis',

        // Internship 3 - NCI 2022
        'projects.stage3.role': 'New Covenant International (NCI)',
        'projects.stage3.company': 'Accounting and Auditing Intern',
        'projects.stage3.location': 'Kindonou-Cotonou, Bénin',
        'projects.stage3.duration': 'June 2022 - August 2022',
        'projects.stage3.description': 'Internal control of two projects: observations on resource mobilization, examination of expenditure execution and verification of financial report compliance and expenditures. Checking declared taxes to ensure accuracy of tax returns. Active participation in the preparation of annual financial statements.',
        'projects.stage3.competences': 'Internal Control, Audit, Taxation, Financial Statements',

        // Skills
        'skills.title': 'Areas of Competence',
        'skills.subtitle': 'Multidisciplinary expertise at the service of your company',
        'skills.learning': 'Regulatory watch',
        'skills.technical.title': 'Technical Expertise',
        'skills.software.title': 'Software Proficiency',

        'skills.accounting.title': 'Accounting',
        'skills.accounting.desc': 'Bookkeeping, analysis of corporate accounts, physical inventory and year-end closing work, financial reporting.',

        'skills.tax.title': 'Corporate Taxation',
        'skills.tax.desc': 'Calculation of taxes and duties, monitoring and control of tax returns, optimization of tax expenses.',

        'skills.legal.title': 'Legal & Corporate',
        'skills.legal.desc': 'Company formation, corporate governance and shareholders\' rights. Modification, transformation and dissolution of the corporate structure.',

        'skills.audit.title': 'Audit & Control',
        'skills.audit.desc': 'Audit of NGO projects, evaluation of internal control procedures, preparation of summary reports.',

        'skills.soft.title': 'Management & Advisory',
        'skills.soft.desc': 'Strong advisory mindset with critical and strategic analysis skills. Team management and client relations.',

        'skills.finance.title': 'Financial Analysis',
        'skills.finance.desc': 'Assessment of a company\'s financial health by examining its activity level, the balance of its financial structure, its ability to generate profits and repay its short and long-term debts.',

        'skills.restructuring.title': 'Restructuring Operations',
        'skills.restructuring.desc': 'Understanding of mergers, demergers, partial asset contributions, acquisitions and corporate transformations.',

        'skills.word.title': 'Microsoft Word',
        'skills.word.desc': 'Word processing.',

        'skills.ppt.title': 'Microsoft PowerPoint',
        'skills.ppt.desc': 'Clear and attractive presentations.',

        'skills.excel.title': 'Microsoft Excel',
        'skills.excel.desc': 'Mastery of automated calculations, pivot tables, VBA, scheduling, charts, and databases.',

        'skills.hypersoft.title': 'Hypersoft',
        'skills.hypersoft.desc': 'SYSCOHADA accounting software for bookkeeping: data entry, editing accounting documents specific to each entity (financial statements).',
        'skills.hypersoft.status': 'Used in firm',

        'skills.sage.title': 'Sage 100 Comptabilité i7',
        'skills.sage.desc': 'Complete accounting and financial management software for SMEs. Daily use for accounting production and financial statements.',
        'skills.sage.status': 'Training completed',

        'skills.bi.title': 'Power BI',
        'skills.bi.desc': 'Analyze and visualize data from multiple sources to create interactive dashboards for performance management.',
        'skills.bi.status': 'Training in progress',

        // CV Viewer
        'cv.title': 'My Resume',
        'cv.subtitle': 'View my resume below or download it as a PDF.',
        'cv.download': 'Download Resume',

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
        'contact.footer.credit': 'Designed by',
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
