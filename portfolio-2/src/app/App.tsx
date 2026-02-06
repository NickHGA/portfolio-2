/**
 * App.tsx - Le point d'entrée principal de l'application.
 * Ce composant gère l'état global, la navigation entre les vues
 * et l'orchestration des animations de transition.
 */
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { MenuPage } from './components/MenuPage';
import { LoadingScreen } from './components/LoadingScreen';
import { ParticleBackground } from './components/ParticleBackground';

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 }
};

const pageTransition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96] as const
};

export default function App() {
  // isLoading : État pour afficher l'écran de chargement initial
  const [isLoading, setIsLoading] = useState(true);
  // currentView : État pour savoir quelle section du site afficher (home, about, etc.)
  const [currentView, setCurrentView] = useState('home');
  // isMenuOpen : État pour gérer l'affichage du menu mobile/plein écran
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // handleNavigate : Met à jour la vue actuelle et ferme le menu si besoin
  const handleNavigate = (view: string) => {
    setCurrentView(view);
    setIsMenuOpen(false);
  };

  // toggleMenu : Ouvre ou ferme le menu de navigation
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // renderView : Fonction qui retourne le composant correspondant à la vue sélectionnée
  const renderView = () => {
    if (isMenuOpen) {
      return <MenuPage onNavigate={handleNavigate} currentView={currentView} />;
    }

    switch (currentView) {
      case 'home': return <Hero onNavigate={handleNavigate} />;
      case 'about': return <About />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'contact': return <Contact />;
      default: return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBackground />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <Navigation
              onMenuClick={toggleMenu}
              onHomeClick={() => handleNavigate('home')}
              isMenuOpen={isMenuOpen}
            />
            <AnimatePresence mode="wait">
              <motion.main
                key={isMenuOpen ? 'menu' : currentView}
                className="pt-20"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                {renderView()}
              </motion.main>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
