/**
 * Contact.tsx - Section "Contact".
 * Permet d'envoyer un message via mailto et d'accéder aux réseaux sociaux.
 * Inclut une barre d'info interactive au clic sur les icônes.
 */
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, type FormEvent } from 'react';
import { Mail, Github, Linkedin, Send, MessageSquare, Phone, Facebook, Instagram, Twitter, MessageCircle, Copy, Check, X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';

export function Contact() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    // activeSocial : État pour l'icône sur laquelle on a cliqué (affiche l'info correspondante)
    const [activeSocial, setActiveSocial] = useState<any>(null);
    // copied : Petit état visuel pour confirmer la copie dans le presse-papier
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const [formData, setFormData] = useState({
        message: ''
    });

    // handleSubmit : Gère l'envoi du formulaire en générant un lien mailto
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Construction du sujet et du corps du mail
        const subject = `Nouveau message depuis le portfolio`;
        const body = formData.message;

        // Votre adresse email de réception configurée par défaut
        const recipientEmail = "primelhouaga22@gmail.com";

        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Ouverture du client mail par défaut de l'ordinateur de l'utilisateur
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const socialLinks = [
        {
            icon: Mail,
            label: 'Email',
            link: 'mailto:primelhouaga22@gmail.com',
            color: 'hover:text-primary',
            info: 'primelhouaga22@gmail.com',
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            info: '+229 53 93 47 04',
            link: 'https://wa.me/22953934704',
            color: 'hover:text-accent',
        },
        {
            icon: Phone,
            label: 'Téléphone',
            link: 'tel:+2290153934704',
            color: 'hover:text-primary-light',
            info: '+229 01 53 93 47 04 / +229 01 44 67 84 10',
        },
        {
            icon: Github,
            label: 'GitHub',
            link: 'https://github.com/NickHGA',
            color: 'hover:text-foreground',
            info: 'NickHGA',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/prim-hga-69347a380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            color: 'hover:text-primary',
            info: 'prim-hga',
        },
        {
            icon: Facebook,
            label: 'Facebook',
            link: '#',
            color: 'hover:text-primary-dark',
            info: 'En attente',
        },
        {
            icon: Instagram,
            label: 'Instagram',
            link: '#',
            color: 'hover:text-accent',
            info: 'En attente',
        },
        {
            icon: Twitter,
            label: 'Twitter',
            link: '#',
            color: 'hover:text-primary-light',
            info: 'En attente',
        },
    ];

    return (
        <section id="contact" className="relative py-32 bg-background overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

            <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {t('contact.title')}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6" /> {/* Solid Marrow Line */}
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">

                    {/* Ligne des icônes sociales */}
                    <div className="flex flex-col items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            {socialLinks.map((social, index) => (
                                <div
                                    key={index}
                                    className="relative group"
                                >
                                    <a
                                        href={social.link || '#'}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (social.info) {
                                                setActiveSocial(activeSocial?.label === social.label ? null : social);
                                            }
                                        }}
                                        target={social.link ? "_blank" : undefined}
                                        rel={social.link ? "noopener noreferrer" : undefined}
                                        onMouseEnter={() => {
                                            if (social.info) setActiveSocial(social);
                                        }}
                                        className={`p-4 rounded-2xl bg-foreground/5 border border-foreground/10 transition-all duration-300 flex items-center justify-center hover:bg-foreground/10 ${social.color} text-muted-foreground hover:scale-110 active:scale-95`}
                                    >
                                        <social.icon className="w-8 h-8" />
                                    </a>
                                </div>
                            ))}
                        </motion.div>

                        {/* Zone d'affichage des infos (Apparaît quand on clique sur une icône) */}
                        <div className="h-12 mt-6 flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                {activeSocial && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-4 px-6 py-2 rounded-full bg-gradient-to-r from-primary-dark/10 via-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm shadow-xl shadow-primary/5"
                                    >
                                        <span className="text-foreground font-bold tracking-wider">{activeSocial.info}</span>
                                        <div className="flex items-center gap-1 border-l border-primary/20 pl-2 ml-1">
                                            <button
                                                onClick={() => handleCopy(activeSocial.info)}
                                                className="p-1.5 rounded-lg hover:bg-primary/20 transition-colors group/copy"
                                                title="Copier"
                                            >
                                                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-primary group-hover/copy:scale-110 transition-transform" />}
                                            </button>
                                            {activeSocial.link && activeSocial.link !== '#' && (
                                                <a
                                                    href={activeSocial.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1.5 rounded-lg hover:bg-primary/20 transition-colors group/link"
                                                    title="Visiter"
                                                >
                                                    <ExternalLink className="w-4 h-4 text-primary group-hover/link:scale-110 transition-transform" />
                                                </a>
                                            )}
                                            <button
                                                onClick={() => {
                                                    setActiveSocial(null);
                                                }}
                                                className="p-1.5 rounded-lg hover:bg-red-500/20 transition-colors group/close"
                                                title="Fermer"
                                            >
                                                <X className="w-4 h-4 text-muted-foreground group-hover/close:text-red-500 transition-colors" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="p-8 md:p-10 rounded-3xl bg-foreground/5 border border-foreground/10 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <MessageSquare className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">{t('contact.form.title')}</h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">


                            <div>
                                <label className="block text-sm text-muted-foreground mb-2">{t('contact.form.message')}</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder={t('contact.form.messagePlaceholder')}
                                    className="w-full px-4 py-3 bg-background border border-foreground/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-primary-dark via-primary to-primary text-white font-medium rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                {t('contact.form.submit')}
                            </button>
                        </form>
                    </motion.div>

                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-24 pt-8 border-t border-foreground/10 text-center"
                >
                    <p className="text-muted-foreground mb-4">
                        {t('contact.footer1')}
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-sm text-muted-foreground/60">
                            {t('contact.footer2')}
                        </p>
                        <p className="text-xs text-muted-foreground/40 font-medium">
                            {t('contact.footer.credit')}{' '}
                            <a 
                                href="https://portfolio-xi-eight-47.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary/60 hover:text-primary transition-colors underline underline-offset-4"
                            >
                                NickHGA
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}