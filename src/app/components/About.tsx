/**
 * About.tsx - Section "À propos".
 * Présente le parcours académique, les points forts et des statistiques.
 * Inclut une fenêtre modale interactive pour le détail du parcours scolaire.
 */
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { GraduationCap, Target, Calendar, MapPin, School, X, Award } from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';
import aboutPhoto from '../../assets/Photo (3).png';

export function About() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const academicTimeline = [
        {
            year: 'about.edu.1.year',
            title: 'about.edu.1.title',
            inst: 'about.edu.1.inst',
            univ: 'about.edu.1.univ',
            icon: GraduationCap,
        },
        {
            year: 'about.edu.2.year',
            title: 'about.edu.2.title',
            inst: 'about.edu.2.inst',
            univ: 'about.edu.2.univ',
            icon: School,
        },
        {
            year: 'about.edu.3.year',
            title: 'about.edu.3.title',
            inst: 'about.edu.3.inst',
            univ: 'about.edu.3.univ',
            icon: Award,
        },
        {
            year: 'about.edu.4.year',
            title: 'about.edu.4.title',
            inst: 'about.edu.4.inst',
            univ: 'about.edu.4.univ',
            icon: School,
        },
    ];

    const highlights = [
        {
            icon: GraduationCap,
            titleKey: 'about.highlight1.title',
            descKey: 'about.highlight1.desc',
            isClickable: true,
        },
        {
            icon: Award,
            titleKey: 'about.highlight2.title',
            descKey: 'about.highlight2.desc',
            isClickable: true,
        },
        {
            icon: Target,
            titleKey: 'about.highlight3.title',
            descKey: 'about.highlight3.desc',
        },
    ];

    const stats = [
        { value: '10+', labelKey: 'about.stat1' },
        { value: '5+', labelKey: 'about.stat2' },
        { value: '100%', labelKey: 'about.stat3' },
        { value: '∞', labelKey: 'about.stat4' },
    ];

    return (
        <section id="about" className="relative py-32 bg-gradient-to-b from-background to-secondary overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
                {/* En-tête de la section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {t('about.title')}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto" />
                </motion.div>

                {/* Section 1 : Texte à gauche + Photo à droite */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left: Main description */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold text-foreground mb-6">
                            {t('about.subtitle1')}<br />
                            <span className="bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent italic">
                                {t('about.subtitle2')}
                            </span>
                        </h3>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('about.p1')}</p>
                            <p>{t('about.p2')}</p>
                            <p>{t('about.p3')}</p>
                        </div>
                    </motion.div>

                    {/* Right: Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                                <img
                                    src={aboutPhoto}
                                    alt="Edem HOUAGA"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            {/* Décoration */}
                            <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-[2rem] bg-primary/10" />
                        </div>
                    </motion.div>
                </div>

                {/* Section 2 : Highlights à gauche + Stats en colonne à droite */}
                <div className="grid md:grid-cols-[1fr_auto] gap-8 mb-20">
                    {/* Left: Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="space-y-4"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * index + 0.7,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    y: -4,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                whileTap={{ scale: 0.98 }}
                                className={`p-5 rounded-xl bg-foreground/5 border border-foreground/10 backdrop-blur-sm hover:bg-foreground/8 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 ease-out ${item.isClickable ? 'cursor-pointer select-none group/item' : ''}`}
                                onClick={() => {
                                    if (item.isClickable) setIsModalOpen(true);
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 transition-all duration-300 group-hover/item:bg-primary/20 group-hover/item:scale-110">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="font-bold text-foreground transition-colors duration-300 group-hover/item:text-primary">{t(item.titleKey)}</h4>
                                            {item.isClickable && (
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300 animate-pulse" />
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right: Stats en colonne (petits rectangles) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-row md:flex-col gap-3 md:w-44"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.1 * index + 0.9 }}
                                className="flex-1 md:flex-none text-center px-4 py-4 rounded-xl bg-foreground/5 border border-foreground/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="text-2xl font-bold bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-muted-foreground leading-tight">{t(stat.labelKey)}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Modal du parcours académique (Affichée avec AnimatePresence pour une transition fluide) */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-background/60 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, rotate: -2 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                rotate: 0,
                                transition: {
                                    type: "spring",
                                    damping: 20,
                                    stiffness: 100
                                }
                            }}
                            exit={{ scale: 0.8, opacity: 0, rotate: 2 }}
                            className="relative w-full max-w-2xl bg-gradient-to-br from-card/80 to-card/40 border border-foreground/5 rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-y-auto max-h-[90vh] backdrop-blur-2xl"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-8 right-8 p-3 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all hover:scale-110 active:scale-95 group/close"
                            >
                                <X className="w-6 h-6 text-foreground/50 group-hover/close:text-foreground transition-colors" />
                            </button>

                            <div className="flex flex-col items-center text-center mb-16 px-4">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary-dark to-accent p-5 shadow-2xl shadow-primary/20 mb-6 flex items-center justify-center"
                                >
                                    <GraduationCap className="w-full h-full text-primary-foreground" />
                                </motion.div>
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl md:text-4xl font-black text-foreground mb-3"
                                >
                                    {t('about.highlight1.title')}
                                </motion.h3>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-muted-foreground font-medium"
                                >
                                    {t('about.highlight1.detailsTitle')}
                                </motion.p>
                            </div>

                            <div className="space-y-6 relative">
                                {academicTimeline.map((edu, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ y: 15, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeOut",
                                            delay: 0.12 * idx + 0.4
                                        }}
                                        className="relative group/edu"
                                    >
                                        <div className="p-8 rounded-[2rem] bg-foreground/[0.03] border border-foreground/5 hover:bg-foreground/[0.05] hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
                                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                                {/* Left: Icon & Connector */}
                                                <div className="flex flex-row md:flex-col items-center gap-4 flex-shrink-0">
                                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover/edu:scale-110 transition-transform duration-500 border border-primary/10">
                                                        <edu.icon className="w-7 h-7 text-primary" />
                                                    </div>
                                                </div>

                                                {/* Right: Content */}
                                                <div className="flex-1 space-y-3">
                                                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-tighter uppercase mb-2">
                                                        <Calendar className="w-3.5 h-3.5 mr-2" />
                                                        {t(edu.year)}
                                                    </div>

                                                    <h4 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight group-hover/edu:text-primary transition-colors">
                                                        {t(edu.title)}
                                                    </h4>

                                                    <div className="space-y-2 pt-1 font-medium">
                                                        {edu.inst && (
                                                            <div className="flex items-center gap-2.5 text-muted-foreground text-sm">
                                                                <School className="w-4 h-4 text-primary/60" />
                                                                <span>{t(edu.inst)}</span>
                                                            </div>
                                                        )}
                                                        {edu.univ && (
                                                            <div className="flex items-center gap-2.5 text-muted-foreground/80 text-sm">
                                                                <MapPin className="w-4 h-4 text-primary/60" />
                                                                <span>{t(edu.univ)}</span>
                                                            </div>
                                                        )}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Decorative blobs */}
                            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
