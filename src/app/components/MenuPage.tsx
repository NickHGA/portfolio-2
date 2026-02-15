/**
 * MenuPage.tsx - Le menu de navigation plein écran.
 * Permet de basculer entre les différentes sections du portfolio.
 * S'affiche avec une animation de fondu et de glissement.
 */
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code2, MessageCircle, Download } from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';

interface MenuPageProps {
    onNavigate: (view: string) => void;
    currentView: string;
}

export function MenuPage({ onNavigate, currentView }: MenuPageProps) {
    const { t } = useLanguage();

    // menuItems : Liste des sections disponibles dans la navigation menu plein écran
    const menuItems = [
        { id: 'home', labelKey: 'menu.home', subtitleKey: 'menu.home.sub', icon: Home },
        { id: 'about', labelKey: 'menu.about', subtitleKey: 'menu.about.sub', icon: User },
        { id: 'projects', labelKey: 'menu.projects', subtitleKey: 'menu.projects.sub', icon: Briefcase },
        { id: 'skills', labelKey: 'menu.skills', subtitleKey: 'menu.skills.sub', icon: Code2 },
        { id: 'cv', labelKey: 'menu.cv', subtitleKey: 'menu.cv.sub', icon: Download },
        { id: 'contact', labelKey: 'menu.contact', icon: MessageCircle },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-[72px] left-0 right-0 bottom-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-start pt-6 px-4 md:px-10 pb-10 overflow-y-auto"
        >
            <div className="w-full max-w-3xl flex flex-col gap-4 md:gap-5">
                {menuItems.map((item, index) => (
                    <motion.button
                        key={item.id}
                        initial={{ scale: 0.9, opacity: 0, x: -30 }}
                        animate={{ scale: 1, opacity: 1, x: 0 }}
                        transition={{
                            delay: index * 0.06,
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                        }}
                        onClick={() => onNavigate(item.id)}
                        className={`group flex items-center gap-4 p-5 md:p-6 rounded-2xl border transition-all duration-300 text-left w-full ${currentView === item.id
                            ? 'bg-primary/10 border-primary/40 shadow-lg shadow-primary/5'
                            : 'bg-foreground/5 border-foreground/10 hover:border-primary/30'
                            }`}
                        whileHover={{
                            x: 8,
                            backgroundColor: currentView === item.id ? "hsl(var(--primary) / 0.15)" : "hsl(var(--primary) / 0.08)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            className={`p-3.5 rounded-xl ${currentView === item.id ? 'bg-primary/20' : 'bg-foreground/5'}`}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            <item.icon className={`w-6 h-6 ${currentView === item.id ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
                        </motion.div>
                        <div className="flex-1">
                            <span className={`block text-xl md:text-2xl font-bold mb-0.5 ${currentView === item.id ? 'bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent' : 'text-foreground group-hover:text-primary'
                                }`}>
                                {t(item.labelKey)}
                            </span>
                            {item.subtitleKey && t(item.subtitleKey) && (
                                <span className="text-xs md:text-sm text-muted-foreground group-hover:text-muted-foreground/80 line-clamp-1">
                                    {t(item.subtitleKey)}
                                </span>
                            )}
                        </div>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${currentView === item.id ? 'bg-primary scale-125 shadow-[0_0_10px_rgba(var(--primary),0.5)]' : 'bg-foreground/10 opacity-0 group-hover:opacity-100'}`} />
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
}
