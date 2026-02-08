import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    Database,
    Globe,
    Gamepad2,
    LayoutDashboard,
    Calendar,
    Briefcase,
    X,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';

interface Project {
    title: string;
    roleKey: string;
    durationKey: string;
    category: string;
    activitiesKey: string;
    missionsKey: string;
    responsibilitiesKey: string;
    tech: string[];
    icon: any;
}

export function Projects() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            title: 'Audit Industriel',
            roleKey: 'projects.schoolhub.role',
            durationKey: 'projects.schoolhub.duration',
            category: t('projects.schoolhub.cat'),
            activitiesKey: 'projects.schoolhub.activities',
            missionsKey: 'projects.schoolhub.missions',
            responsibilitiesKey: 'projects.schoolhub.responsibilities',
            tech: ['Audit Légal', 'CAC', 'Revue de cycles', 'Excel Avancé'],
            icon: LayoutDashboard,
        },
        {
            title: 'Restructuration',
            roleKey: 'projects.medipass.role',
            durationKey: 'projects.medipass.duration',
            category: t('projects.medipass.cat'),
            activitiesKey: 'projects.medipass.activities',
            missionsKey: 'projects.medipass.missions',
            responsibilitiesKey: 'projects.medipass.responsibilities',
            tech: ['Droit Fiscal', 'Intégration Fiscale', 'Holding', 'Juridique'],
            icon: Database,
        },
        {
            title: 'Audit Social',
            roleKey: 'projects.sondagepro.role',
            durationKey: 'projects.sondagepro.duration',
            category: t('projects.sondagepro.cat'),
            activitiesKey: 'projects.sondagepro.activities',
            missionsKey: 'projects.sondagepro.missions',
            responsibilitiesKey: 'projects.sondagepro.responsibilities',
            tech: ['Droit Social', 'Paie', 'URSSAF', 'Management'],
            icon: Globe,
        },
        {
            title: 'Start-up Immo',
            roleKey: 'projects.comotorage.role',
            durationKey: 'projects.comotorage.duration',
            category: t('projects.comotorage.cat'),
            activitiesKey: 'projects.comotorage.activities',
            missionsKey: 'projects.comotorage.missions',
            responsibilitiesKey: 'projects.comotorage.responsibilities',
            tech: ['Business Plan', 'Financement', 'Création', 'SAS'],
            icon: Gamepad2,
        },
        {
            title: 'Reporting KPI',
            roleKey: 'projects.objectif2026.role',
            durationKey: 'projects.objectif2026.duration',
            category: t('projects.objectif2026.cat'),
            activitiesKey: 'projects.objectif2026.activities',
            missionsKey: 'projects.objectif2026.missions',
            responsibilitiesKey: 'projects.objectif2026.responsibilities',
            tech: ['Contrôle de Gestion', 'PowerBI', 'KPI', 'Prévisionnel'],
            icon: LayoutDashboard,
        },
    ];

    return (
        <section id="projects" className="relative py-32 bg-background overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

            <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {t('projects.title')}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6" />
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('projects.subtitle')}
                    </p>
                </motion.div>

                <div className="flex flex-col gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="group relative"
                        >
                            <div className="p-8 md:p-10 rounded-[2.5rem] bg-card border border-foreground/5 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden">
                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Contenu principal */}
                                    <div className="flex-1 space-y-6">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div className="space-y-1">
                                                <span className="text-xs font-bold text-primary uppercase tracking-widest">{project.category}</span>
                                                <h3 className="text-3xl font-black text-foreground">{project.title}</h3>
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <Briefcase className="w-4 h-4" />
                                                    <span className="font-semibold">{t(project.roleKey)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-3 gap-6 pt-4">
                                            <div className="space-y-2">
                                                <p className="text-xs font-bold text-muted-foreground uppercase">{t('projects.activities')}</p>
                                                <p className="text-sm text-foreground/80 leading-relaxed font-medium line-clamp-2">{t(project.activitiesKey)}</p>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-xs font-bold text-muted-foreground uppercase">{t('projects.missions')}</p>
                                                <p className="text-sm text-foreground/80 leading-relaxed font-medium line-clamp-2">{t(project.missionsKey)}</p>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-xs font-bold text-muted-foreground uppercase">{t('projects.responsibilities')}</p>
                                                <p className="text-sm text-foreground/80 leading-relaxed font-medium line-clamp-2">{t(project.responsibilitiesKey)}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tech.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 text-[10px] font-bold rounded-full bg-primary/5 border border-primary/10 text-primary/80 uppercase tracking-tighter">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-8 border-t border-foreground/5 mt-4">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                                                    <project.icon className="w-6 h-6 text-primary" />
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-6">
                                                <div className="flex items-center gap-2 text-muted-foreground text-sm font-bold">
                                                    <Calendar className="w-4 h-4" />
                                                    {t(project.durationKey)}
                                                </div>
                                                <motion.button
                                                    whileHover={{ x: 5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => setSelectedProject(project)}
                                                    className="flex items-center gap-2 text-sm font-bold text-primary group/btn"
                                                >
                                                    {t('projects.details')}
                                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal de détail de la mission */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-background/60 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            className="relative w-full max-w-3xl bg-card border border-foreground/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh] backdrop-blur-2xl"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-8 right-8 p-3 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all hover:scale-110 active:scale-95 group/close"
                            >
                                <X className="w-6 h-6 text-foreground/50 group-hover/close:text-foreground" />
                            </button>

                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                                        {selectedProject.category}
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                                        {selectedProject.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-6 pt-2">
                                        <div className="flex items-center gap-2 text-muted-foreground font-bold">
                                            <Briefcase className="w-5 h-5 text-primary" />
                                            {t(selectedProject.roleKey)}
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground font-bold">
                                            <Calendar className="w-5 h-5 text-primary" />
                                            {t(selectedProject.durationKey)}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-10">
                                    {[
                                        { label: 'projects.activities', key: selectedProject.activitiesKey },
                                        { label: 'projects.missions', key: selectedProject.missionsKey },
                                        { label: 'projects.responsibilities', key: selectedProject.responsibilitiesKey }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * i + 0.3 }}
                                            className="space-y-4"
                                        >
                                            <h4 className="inline-flex items-center gap-2 text-lg font-black text-foreground border-b-2 border-primary/20 pb-1">
                                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                                {t(item.label)}
                                            </h4>
                                            <p className="text-lg text-muted-foreground leading-relaxed font-medium pl-7">
                                                {t(item.key)}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-foreground/5">
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Expertise mobilisée</p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((tech, i) => (
                                            <span key={i} className="px-4 py-2 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground font-bold text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
