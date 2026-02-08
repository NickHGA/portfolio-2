/**
 * Navigation.tsx - Gère la barre de navigation supérieure.
 * Inclut le logo, les boutons de changement de thème (clair/sombre),
 * le sélecteur de langue (FR/EN) et l'ouverture du menu.
 */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../components/providers/ThemeProvider';
import { useLanguage } from '../provider/LanguageContext';

interface NavigationProps {
    onMenuClick: () => void;
    onHomeClick: () => void;
    isMenuOpen: boolean;
}

export function Navigation({ onMenuClick, onHomeClick, isMenuOpen }: NavigationProps) {
    // scrolled : État pour savoir si l'utilisateur a défilé la page (pour changer l'apparence de la navbar)
    const [scrolled, setScrolled] = useState(false);
    // theme : Hook pour gérer le mode Clair/Sombre
    const { theme, setTheme } = useTheme();
    // mounted : Pour s'assurer que le composant est monté avant d'afficher les éléments dépendants du thème (évite les bugs d'hydratation)
    const [mounted, setMounted] = useState(false);
    // language : Notre contexte pour les traductions
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // toggleLanguage : Alterne entre Français et Anglais
    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-background/80 backdrop-blur-lg border-b border-foreground/10'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        onClick={onHomeClick}
                        className="font-bold text-xl bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        HOUAGA Mat-Colin
                    </motion.button>

                    {/* Controls */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        {mounted && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-lg hover:bg-foreground/10 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {theme === 'dark' ? (
                                    <Sun className="w-5 h-5 text-accent" />
                                ) : (
                                    <Moon className="w-5 h-5 text-primary" />
                                )}
                            </motion.button>
                        )}

                        {/* Language Toggle */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={toggleLanguage}
                            className="flex items-center justify-center min-w-[44px] h-[44px] rounded-lg bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 hover:border-primary/30 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-sm font-bold text-foreground">
                                {language.toUpperCase()}
                            </span>
                        </motion.button>

                        {/* Menu Toggle */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={onMenuClick}
                            className="relative p-3 rounded-xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 hover:border-primary/50 transition-all duration-300 z-50"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isMenuOpen ? (
                                    <X className="w-6 h-6 text-primary" />
                                ) : (
                                    <MoreHorizontal className="w-6 h-6 text-foreground" />
                                )}
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}