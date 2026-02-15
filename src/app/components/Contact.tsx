/**
 * Contact.tsx - Section "Contact".
 * Permet d'envoyer un message via mailto et d'accéder aux réseaux sociaux.
 * Inclut une barre d'info interactive au clic sur les icônes.
 */
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, type FormEvent } from 'react';
import { Mail, Linkedin, Send, MessageSquare, Phone, Facebook, Instagram, Copy, Check, X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';

// Icône WhatsApp (SVG officiel)
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

// Icône X (Twitter) 
const XIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

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
        const recipientEmail = "edem.houaga@gmail.com,mat.houaga2@gmail.com";

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
            link: 'mailto:edem.houaga@gmail.com,mat.houaga2@gmail.com',
            color: 'hover:text-primary',
            info: 'edem.houaga@gmail.com / mat.houaga2@gmail.com',
        },
        {
            icon: WhatsAppIcon,
            label: 'WhatsApp',
            info: '+229 97 20 18 04',
            link: 'https://wa.me/22997201804',
            color: 'hover:text-accent',
        },
        {
            icon: Phone,
            label: 'Téléphone',
            link: 'tel:+22997201804',
            color: 'hover:text-primary-light',
            info: '+229 01 97 20 18 04',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/edem-houaga2',
            color: 'hover:text-primary',
            info: 'edem-houaga2',
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
            icon: XIcon,
            label: 'X',
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