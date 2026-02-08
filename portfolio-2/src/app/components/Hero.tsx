/**
 * Hero.tsx - Section d'introduction (Accueil).
 * Présente un badge animé, un titre avec dégradé changeant
 * et un arrière-plan dynamique avec des orbes et des particules.
 */
import { motion } from 'framer-motion';
import { useLanguage } from '../provider/LanguageContext';
import { DotWave } from './DotWave';

interface HeroProps {
    onNavigate: (view: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
    // t : Fonction de traduction récupérée depuis notre contexte de langue
    const { t } = useLanguage();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
        >
            <DotWave />
            {/* Grille d'arrière-plan très subtile */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

            {/* Orbe décoratif avec dégradé subtil */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-accent/5 to-transparent rounded-full filter blur-[120px] pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase"
                >
                    {t('hero.badge')}
                </motion.div>

                {/* Titre principal sobre et élégant */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: "easeOut"
                    }}
                    className="mb-8"
                >
                    <span className="block text-4xl md:text-6xl font-light text-foreground mb-2">
                        {t('hero.title1')}
                    </span>
                    <span className="block text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent">
                        {t('hero.title2')}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: "easeOut"
                    }}
                    className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    {t('hero.description')}
                </motion.p>

                {/* Boutons d'Action sobres */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.6,
                        ease: "easeOut"
                    }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <button
                        onClick={() => onNavigate('skills')}
                        className="px-8 py-3 bg-gradient-to-r from-primary-dark to-primary text-white font-medium rounded-md hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                    >
                        {t('hero.cta1')}
                    </button>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="px-8 py-3 bg-transparent border border-foreground/20 text-foreground font-medium rounded-md hover:bg-foreground/5 transition-all duration-300"
                    >
                        {t('hero.cta2')}
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
