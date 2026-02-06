/**
 * Skills.tsx - Section "Compétences".
 * Affiche les compétences techniques organisées par catégories (Langages, Frameworks, etc.)
 * Chaque compétence dispose d'une barre de niveau animée.
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calculator, Landmark, Scale, Laptop, PieChart, Users } from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';

export function Skills() {
    const { t } = useLanguage();
    const ref = useRef(null);
    // isInView : Déclenche l'animation des barres de progression quand elles sont visibles
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // skillCategories : Liste des compétences avec leurs niveaux respectifs
    const skillCategories = [
        {
            titleKey: 'skills.languages',
            icon: Calculator, // Comptabilité
            skills: [
                { name: 'Comptabilité Générale', level: 95 },
                { name: 'Audit Légal (CAC)', level: 85 },
                { name: 'Consolidation', level: 70 },
                { name: 'Normes IFRS', level: 65 },
                { name: 'Révision des comptes', level: 90 },
            ],
            gradient: 'from-primary to-primary/80',
        },
        {
            titleKey: 'skills.frameworks',
            icon: Landmark, // Fiscalité
            skills: [
                { name: 'Fiscalité des sociétés', level: 90 },
                { name: 'TVA & Taxes', level: 85 },
                { name: 'Intégration Fiscale', level: 75 },
                { name: 'Fiscalité Personnelle', level: 80 },
            ],
            gradient: 'from-primary to-primary/80',
        },
        {
            titleKey: 'skills.databases',
            icon: Scale, // Juridique
            skills: [
                { name: 'Droit des Sociétés', level: 80 },
                { name: 'Droit Social', level: 75 },
                { name: 'Contrats', level: 70 },
            ],
            gradient: 'from-primary to-primary/80',
        },
        {
            titleKey: 'skills.ai',
            icon: Laptop, // Outils
            skills: [
                { name: 'Excel (VBA, PowerQuery)', level: 95 },
                { name: 'Sage / Cegid', level: 90 },
                { name: 'PowerBI', level: 80 },
            ],
            gradient: 'from-primary to-primary/80',
        },
        {
            titleKey: 'skills.tools',
            icon: PieChart, // Gestion
            skills: [
                { name: 'Contrôle de Gestion', level: 85 },
                { name: 'Analyse Financière', level: 90 },
                { name: 'Trésorerie', level: 80 },
            ],
            gradient: 'from-primary to-primary/80',
        },
        {
            titleKey: 'skills.other',
            icon: Users, // Soft Skills
            skills: [
                { name: 'Management', level: 85 },
                { name: 'Relation Client', level: 90 },
                { name: 'Anglais des Affaires', level: 80 },
            ],
            gradient: 'from-primary to-primary/80',
        },
    ];

    return (
        <section id="skills" className="relative py-32 bg-background overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

            <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {t('skills.title')}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6" />
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('skills.subtitle')}
                    </p>
                </motion.div>

                {/* Grille des catégories de compétences */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                            className="group"
                        >
                            <div className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10 backdrop-blur-sm hover:bg-foreground/10 transition-all duration-300">
                                {/* Category header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                                        <category.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-foreground">{t(category.titleKey)}</h3>
                                </div>

                                {/* Skills as square cards */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div
                                            key={skillIndex}
                                            className="flex-grow min-w-[120px] p-3 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors relative overflow-hidden"
                                        >
                                            <span className="relative z-10 text-sm">{skill.name}</span>
                                            <motion.div
                                                className="absolute inset-0 h-full bg-gradient-to-r from-primary-dark via-primary to-accent rounded-lg opacity-60"
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-sm text-muted-foreground">{t('skills.learning')}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
