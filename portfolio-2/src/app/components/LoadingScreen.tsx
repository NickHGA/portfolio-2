/**
 * LoadingScreen.tsx - Écran de chargement initial.
 * Affiche une barre de progression et un message de bienvenue
 * avant de dévoiler le contenu du portfolio.
 */
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function LoadingScreen() {
    // progress : État pour simuler l'avancement du chargement (0 à 100)
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Intervalle pour faire monter la barre de progression de manière pseudo-aléatoire
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                // Augmente par petits pas aléatoires pour un effet plus naturel
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
            exit={{
                y: '-100%',
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[120px]" />

            <div className="relative flex flex-col items-center">
                {/* Logo Animation */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1
                    }}
                    className="mb-8 p-6 rounded-3xl bg-foreground/5 border border-foreground/10"
                >
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <Sparkles className="w-12 h-12 text-primary" />
                    </motion.div>
                </motion.div>

                {/* Text & Progress */}
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold text-foreground mb-2"
                    >
                        HOUAGA Mat-Colin
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-muted-foreground text-sm tracking-widest uppercase mb-8"
                    >
                        Portfolio 2026
                    </motion.p>

                    {/* Progress Bar Container */}
                    <div className="w-48 h-1 bg-foreground/10 rounded-full overflow-hidden relative">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-light"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "easeInOut" }}
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 text-xs font-mono text-muted-foreground"
                    >
                        {Math.round(progress)}%
                    </motion.div>
                </div>
            </div>

            {/* Bottom tag */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 text-xs text-muted-foreground/50 tracking-[0.2em] uppercase"
            >
                Chargement de l'univers
            </motion.div>
        </motion.div>
    );
}
