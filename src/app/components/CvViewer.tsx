/**
 * CvViewer.tsx - Affiche le CV en plein écran avec possibilité de téléchargement.
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText } from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';
import cvFile from '../../assets/Curriculum vitae_Edem HOUAGA.pdf';
import profilePhoto from '../../assets/Photo (5).png';

export function CvViewer() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'CV_Edem_HOUAGA.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="relative py-20 bg-background min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

            <div className="relative max-w-5xl mx-auto px-6" ref={ref}>
                {/* Header avec photo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-10 mb-14"
                >
                    {/* Photo à gauche */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex-shrink-0"
                    >
                        <div className="w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-[2rem] overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                            <img
                                src={profilePhoto}
                                alt="Edem HOUAGA"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        {/* Décoration */}
                        <div className="absolute -z-10 -bottom-3 -left-3 w-full h-full rounded-[2rem] bg-primary/10" />
                    </motion.div>

                    {/* Titre à droite */}
                    <div className="flex-1 text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                            {t('cv.title')}
                        </h2>
                        <div className="w-20 h-1 bg-primary mb-6" />
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                            {t('cv.subtitle')}
                        </p>

                        {/* Download button */}
                        <motion.button
                            onClick={handleDownload}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                        >
                            <Download className="w-5 h-5" />
                            {t('cv.download')}
                        </motion.button>
                    </div>
                </motion.div>

                {/* PDF Viewer */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative rounded-[2rem] overflow-hidden border border-foreground/10 shadow-2xl bg-card"
                >
                    {/* Top bar */}
                    <div className="flex items-center justify-between px-6 py-4 bg-foreground/5 border-b border-foreground/10">
                        <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-foreground">CV_Edem_HOUAGA.pdf</span>
                        </div>
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                        >
                            <Download className="w-4 h-4" />
                            {t('cv.download')}
                        </button>
                    </div>

                    {/* PDF embed */}
                    <div className="w-full" style={{ height: 'calc(100vh - 280px)', minHeight: '600px' }}>
                        <iframe
                            src={`${cvFile}#toolbar=1&navpanes=0`}
                            className="w-full h-full"
                            title="CV Edem HOUAGA"
                            style={{ border: 'none' }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
