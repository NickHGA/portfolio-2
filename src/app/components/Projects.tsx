import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    Building2,
    MapPin,
    Calendar,
    Briefcase,
    X,
    ArrowRight
} from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';

interface Project {
    titleKey: string;
    roleKey: string;
    companyKey: string;
    locationKey: string;
    durationKey: string;
    descriptionKey: string;
    competencesKey: string;
    icon: any;
}

export function Projects() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            titleKey: 'projects.stage1.company',
            roleKey: 'projects.stage1.role',
            companyKey: 'projects.stage1.company',
            locationKey: 'projects.stage1.location',
            durationKey: 'projects.stage1.duration',
            descriptionKey: 'projects.stage1.description',
            competencesKey: 'projects.stage1.competences',
            icon: Building2,
        },
        {
            titleKey: 'projects.stage2.company',
            roleKey: 'projects.stage2.role',
            companyKey: 'projects.stage2.company',
            locationKey: 'projects.stage2.location',
            durationKey: 'projects.stage2.duration',
            descriptionKey: 'projects.stage2.description',
            competencesKey: 'projects.stage2.competences',
            icon: Building2,
        },
        {
            titleKey: 'projects.stage3.company',
            roleKey: 'projects.stage3.role',
            companyKey: 'projects.stage3.company',
            locationKey: 'projects.stage3.location',
            durationKey: 'projects.stage3.duration',
            descriptionKey: 'projects.stage3.description',
            competencesKey: 'projects.stage3.competences',
            icon: Building2,
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
                            <div className="p-6 md:p-8 rounded-[2rem] bg-card border border-foreground/5 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden">
                                <div className="flex items-center gap-6">
                                    {/* Icône */}
                                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex-shrink-0">
                                        <Briefcase className="w-7 h-7 text-primary" />
                                    </div>

                                    {/* Nom + rôle + ville */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-2xl md:text-3xl font-black text-foreground">{t(project.titleKey)}</h3>
                                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                                            <project.icon className="w-4 h-4 flex-shrink-0" />
                                            <span className="font-semibold text-sm truncate">{t(project.roleKey)}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground/70 mt-1">
                                            <MapPin className="w-4 h-4 flex-shrink-0" />
                                            <span className="text-sm">{t(project.locationKey)}</span>
                                        </div>
                                    </div>

                                    {/* Durée + bouton détails */}
                                    <div className="flex flex-col items-end gap-3 flex-shrink-0">
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
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal de détail du stage */}
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

                            <div className="space-y-10 text-center">
                                {/* En-tête */}
                                <div className="space-y-4">
                                    <h3 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                                        {t(selectedProject.titleKey)}
                                    </h3>
                                    <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
                                        <div className="flex items-center gap-2 text-muted-foreground font-bold">
                                            <Briefcase className="w-5 h-5 text-primary" />
                                            {t(selectedProject.roleKey)}
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground font-bold">
                                            <MapPin className="w-5 h-5 text-primary" />
                                            {t(selectedProject.locationKey)}
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground font-bold">
                                            <Calendar className="w-5 h-5 text-primary" />
                                            {t(selectedProject.durationKey)}
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="space-y-4"
                                >
                                    <h4 className="text-lg font-black text-foreground">
                                        {t('projects.description')}
                                    </h4>
                                    <div className="w-full h-px bg-foreground/10" />
                                    <p className="text-base text-muted-foreground leading-relaxed font-normal text-justify">
                                        {t(selectedProject.descriptionKey)}
                                    </p>
                                </motion.div>

                                {/* Expertise mobilisée — barre de fin */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="pt-6 mt-2 border-t border-foreground/10"
                                >
                                    <div className="flex items-center justify-center gap-3 flex-wrap">
                                        {t(selectedProject.competencesKey).split(',').map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-normal border border-primary/20"
                                            >
                                                {skill.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
