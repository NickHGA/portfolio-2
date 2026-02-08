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
        { id: 'download-cv', labelKey: 'menu.cv', subtitleKey: 'menu.cv.sub', icon: Download, isExternal: true, href: '/cv.pdf' },
        { id: 'contact', labelKey: 'menu.contact', subtitleKey: 'menu.contact.sub', icon: MessageCircle },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-start p-4 md:p-10 overflow-y-auto"
        >
            <div className="w-full max-w-4xl pt-28 pb-10 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {menuItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: index * 0.05,
                                type: "spring",
                                stiffness: 200,
                                damping: 20
                            }}
                            onClick={() => {
                                if ('isExternal' in item && item.isExternal && item.href) {
                                    window.open(item.href, '_download');
                                } else {
                                    onNavigate(item.id);
                                }
                            }}
                            className={`group flex items-center gap-4 p-5 md:p-6 rounded-2xl border transition-all duration-300 text-left ${currentView === item.id
                                ? 'bg-primary/10 border-primary/40 shadow-lg shadow-primary/5'
                                : 'bg-foreground/5 border-foreground/10 hover:border-primary/30'
                                }`}
                            whileHover={{
                                y: -4,
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
                                <span className="text-xs md:text-sm text-muted-foreground group-hover:text-muted-foreground/80 line-clamp-1">
                                    {t(item.subtitleKey)}
                                </span>
                            </div>
                            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${currentView === item.id ? 'bg-primary scale-125 shadow-[0_0_10px_rgba(var(--primary),0.5)]' : 'bg-foreground/10 opacity-0 group-hover:opacity-100'}`} />
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
