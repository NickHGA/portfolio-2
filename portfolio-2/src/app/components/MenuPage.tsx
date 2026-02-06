/**
 * MenuPage.tsx - Le menu de navigation plein écran.
 * Permet de basculer entre les différentes sections du portfolio.
 * S'affiche avec une animation de fondu et de glissement.
 */
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code2, MessageCircle } from 'lucide-react';
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
        { id: 'contact', labelKey: 'menu.contact', subtitleKey: 'menu.contact.sub', icon: MessageCircle },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center p-6"
        >
            <div className="w-full max-w-2xl">
                <div className="grid gap-4">
                    {menuItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: index * 0.1,
                                type: "spring" as const,
                                stiffness: 200,
                                damping: 20
                            }}
                            onClick={() => onNavigate(item.id)}
                            className={`group flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 text-left ${currentView === item.id
                                ? 'bg-primary/10 border-primary/50'
                                : 'bg-foreground/5 border-foreground/10'
                                }`}
                            whileHover={{
                                scale: 1.02,
                                x: 10,
                                backgroundColor: currentView === item.id ? "hsl(var(--primary) / 0.15)" : "hsl(var(--primary) / 0.05)"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center gap-4">
                                <motion.div
                                    className={`p-3 rounded-xl ${currentView === item.id ? 'bg-primary/20' : 'bg-foreground/5'}`}
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <item.icon className={`w-5 h-5 ${currentView === item.id ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
                                </motion.div>
                                <div>
                                    <span className={`block text-2xl font-bold mb-1 ${currentView === item.id ? 'bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent' : 'text-foreground group-hover:text-primary'
                                        }`}>
                                        {t(item.labelKey)}
                                    </span>
                                    <span className="text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                                        {t(item.subtitleKey)}
                                    </span>
                                </div>
                            </div>
                            <motion.div
                                className={`w-3 h-3 rounded-full ${currentView === item.id ? 'bg-gradient-to-r from-primary to-accent' : 'bg-foreground/10'}`}
                                whileHover={{ scale: 1.5 }}
                                animate={currentView === item.id ? { scale: [1, 1.2, 1] } : {}}
                                transition={{ duration: 1, repeat: currentView === item.id ? Infinity : 0 }}
                            />
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
