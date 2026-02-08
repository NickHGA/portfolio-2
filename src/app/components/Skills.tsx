import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calculator, Landmark, Scale, Laptop, PieChart, Users, FileText } from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';

export function Skills() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const technicalSkills = [
        {
            titleKey: 'skills.accounting.title',
            descKey: 'skills.accounting.desc',
            icon: Calculator,
            color: 'text-blue-600',
            bg: 'bg-blue-50 dark:bg-blue-900/20',
        },
        {
            titleKey: 'skills.tax.title',
            descKey: 'skills.tax.desc',
            icon: FileText,
            color: 'text-teal-600',
            bg: 'bg-teal-50 dark:bg-teal-900/20',
        },
        {
            titleKey: 'skills.legal.title',
            descKey: 'skills.legal.desc',
            icon: Scale,
            color: 'text-red-600',
            bg: 'bg-red-50 dark:bg-red-900/20',
        },
        {
            titleKey: 'skills.audit.title',
            descKey: 'skills.audit.desc',
            icon: Landmark,
            color: 'text-purple-600',
            bg: 'bg-purple-50 dark:bg-purple-900/20',
        },
        {
            titleKey: 'skills.soft.title',
            descKey: 'skills.soft.desc',
            icon: Users,
            color: 'text-green-600',
            bg: 'bg-green-50 dark:bg-green-900/20',
        },
    ];

    const softwareSkills = [
        {
            titleKey: 'skills.excel.title',
            descKey: 'skills.excel.desc',
            icon: Calculator,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50 dark:bg-emerald-900/20',
        },
        {
            titleKey: 'skills.bi.title',
            descKey: 'skills.bi.desc',
            icon: PieChart,
            color: 'text-yellow-600',
            bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        },
        {
            titleKey: 'skills.logiciel.title',
            descKey: 'skills.logiciel.desc',
            icon: Laptop,
            color: 'text-indigo-600',
            bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        },
    ];

    const SkillGrid = ({ items, titleKey }: { items: typeof technicalSkills, titleKey: string }) => (
        <div className="mb-20">
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-foreground mb-10 flex items-center gap-4"
            >
                <span className="w-8 h-px bg-primary/40" />
                {t(titleKey)}
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        className="group p-8 rounded-[2rem] bg-card border border-foreground/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 text-center"
                    >
                        <div className={`inline-flex p-5 rounded-2xl ${category.bg} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                            <category.icon className={`w-8 h-8 ${category.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            {t(category.titleKey)}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {t(category.descKey)}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="skills" className="relative py-32 bg-background overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

            <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {t('skills.title')}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6" />
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('skills.subtitle')}
                    </p>
                </motion.div>

                <SkillGrid items={technicalSkills} titleKey="skills.technical.title" />
                <SkillGrid items={softwareSkills} titleKey="skills.software.title" />

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
