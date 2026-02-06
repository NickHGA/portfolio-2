/**
 * Projects.tsx - Galerie des projets.
 * Affiche une liste de projets sous forme de cartes interactives.
 * Chaque projet inclut une catégorie, une description, les défis/solutions et les technos.
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Database, Globe, Gamepad2, LayoutDashboard } from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';

export function Projects() {
    const { t } = useLanguage();
    const ref = useRef(null);
    // isInView : Détecte l'entrée en vue pour animer la grille
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // projects : Tableau d'objets contenant les données de chaque projet (Mission)
    const projects = [
        {
            title: 'Audit Industriel',
            category: t('projects.schoolhub.cat'),
            description: t('projects.schoolhub.desc'),
            problem: t('projects.schoolhub.prob'),
            solution: t('projects.schoolhub.sol'),
            tech: ['Audit Légal', 'CAC', 'Revue de cycles', 'Excel Avancé'],
            icon: LayoutDashboard, // Ou FileText si dispo
            gradient: 'from-primary-dark to-primary',
        },
        {
            title: 'Restructuration',
            category: t('projects.medipass.cat'),
            description: t('projects.medipass.desc'),
            problem: t('projects.medipass.prob'),
            solution: t('projects.medipass.sol'),
            tech: ['Droit Fiscal', 'Intégration Fiscale', 'Holding', 'Juridique'],
            icon: Database, // Ou Scale
            gradient: 'from-primary-dark to-primary',
        },
        {
            title: 'Audit Social',
            category: t('projects.sondagepro.cat'),
            description: t('projects.sondagepro.desc'),
            problem: t('projects.sondagepro.prob'),
            solution: t('projects.sondagepro.sol'),
            tech: ['Droit Social', 'Paie', 'URSSAF', 'Management'],
            icon: Globe, // Ou Users
            gradient: 'from-primary-dark to-primary',
        },
        {
            title: 'Start-up Immo',
            category: t('projects.comotorage.cat'),
            description: t('projects.comotorage.desc'),
            problem: t('projects.comotorage.prob'),
            solution: t('projects.comotorage.sol'),
            tech: ['Business Plan', 'Financement', 'Création', 'SAS'],
            icon: Gamepad2, // Ou Rocket
            gradient: 'from-primary-dark to-primary',
        },
        {
            title: 'Reporting KPI',
            category: t('projects.objectif2026.cat'),
            description: t('projects.objectif2026.desc'),
            problem: t('projects.objectif2026.prob'),
            solution: t('projects.objectif2026.sol'),
            tech: ['Contrôle de Gestion', 'PowerBI', 'KPI', 'Prévisionnel'],
            icon: LayoutDashboard,
            gradient: 'from-primary-dark to-primary',
        },
    ];

    return (
        <section id="projects" className="relative py-32 bg-background overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {t('projects.title')}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-dark via-primary to-accent mx-auto mb-6" />
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('projects.subtitle')}
                    </p>
                </motion.div>

                {/* Liste des projets (full-width) */}
                <div className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            // Animation décalée (index * 0.1) pour un effet d'apparition fluide l'un après l'autre
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="group relative"
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div
                                className="relative p-8 rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/[0.02] border border-foreground/10 backdrop-blur-sm hover:border-primary/20 transition-all duration-500 overflow-hidden cursor-pointer"
                                onClick={() => {
                                    console.log(`Navigating to ${project.title}`);
                                }}
                            >
                                {/* Overlay coloré au survol (Gradient opacity) */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-primary-dark to-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                {/* Contenu de la carte */}
                                <div className="relative z-10">
                                    {/* Icon & Category */}
                                    <div className="flex items-center justify-between mb-6">
                                        <motion.div
                                            className={`p-3 rounded-xl bg-primary/10`}
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <project.icon className={`w-6 h-6 text-primary-foreground`} />
                                        </motion.div>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{project.category}</span>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                                    <p className="text-muted-foreground mb-6">{project.description}</p>

                                    {/* Problem & Solution */}
                                    <div className="space-y-3 mb-6">
                                        <div>
                                            <span className="text-xs text-primary font-semibold uppercase tracking-tighter">{t('projects.problem')}</span>
                                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{project.problem}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs text-accent font-semibold uppercase tracking-tighter">{t('projects.solution')}</span>
                                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{project.solution}</p>
                                        </div>
                                    </div>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, techIndex) => (
                                            <motion.span
                                                key={techIndex}
                                                className="px-3 py-1 text-xs rounded-full bg-foreground/5 border border-foreground/10 text-muted-foreground"
                                                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--accent) / 0.1)", color: "hsl(var(--accent))" }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-4">
                                        <motion.button
                                            className="flex items-center gap-2 text-sm text-primary font-bold hover:text-primary/80 transition-colors pointer-events-auto"
                                            whileHover={{ x: 3 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                            }}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            {t('projects.details')}
                                        </motion.button>
                                        <motion.button
                                            className="flex items-center gap-2 text-sm text-muted-foreground font-bold hover:text-foreground transition-colors pointer-events-auto"
                                            whileHover={{ x: 3 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                            }}
                                        >
                                            <Github className="w-4 h-4" />
                                            {t('projects.code')}
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground mb-4">{t('projects.cta')}</p>
                    <a
                        href="https://github.com/NickHGA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-foreground/5 border border-foreground/10 text-foreground rounded-lg hover:bg-foreground/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-2"
                    >
                        <Github className="w-5 h-5" />
                        {t('projects.ctaBtn')}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}