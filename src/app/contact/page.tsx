import { Mail, MapPin, Phone, Instagram } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-bg-soft pb-32">
            <section className="pt-24 pb-20 text-center px-8">
                <div className="container mx-auto max-w-4xl">
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-text-kawaii-pink mb-6 block">
                        Parlons Douceur
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-text-main mb-8 leading-tight">
                        Contactez-nous
                    </h1>
                </div>
            </section>

            <main className="container mx-auto px-8 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold text-text-main">Nos Coordonnées</h2>
                            <p className="text-text-muted leading-relaxed italic">
                                Une question sur une commande ? Une envie de partenariat doux ? Notre petite équipe vous répond avec joie.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-soft border border-border-soft group-hover:bg-accent-soft/30 transition-soft">
                                    <Mail className="h-6 w-6 text-accent-vibrant" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">Email</p>
                                    <p className="text-lg font-bold text-text-main">Virginiebastos@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-soft border border-border-soft group-hover:bg-accent-soft/30 transition-soft">
                                    <Instagram className="h-6 w-6 text-accent-vibrant" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">Instagram</p>
                                    <p className="text-lg font-bold text-text-main">@beatshirts_maison</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Simple Contact Form */}
                    <div className="bg-white rounded-kawaii p-10 shadow-soft border border-border-soft/50">
                        <form className="space-y-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-4 underline decoration-accent-soft decoration-4 underline-offset-4">Nom Complet</label>
                                <input
                                    type="text"
                                    placeholder="Votre doux nom..."
                                    className="w-full bg-bg-kawaii border-transparent rounded-full px-8 py-4 text-sm focus:bg-white focus:border-accent-soft focus:outline-none focus:ring-4 focus:ring-accent-soft/10 transition-soft"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-4 underline decoration-accent-soft decoration-4 underline-offset-4">Adresse Email</label>
                                <input
                                    type="email"
                                    placeholder="Pour vous répondre..."
                                    className="w-full bg-bg-kawaii border-transparent rounded-full px-8 py-4 text-sm focus:bg-white focus:border-accent-soft focus:outline-none focus:ring-4 focus:ring-accent-soft/10 transition-soft"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-4 underline decoration-accent-soft decoration-4 underline-offset-4">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Écrivez-nous votre petit mot..."
                                    className="w-full bg-bg-kawaii border-transparent rounded-[32px] px-8 py-6 text-sm focus:bg-white focus:border-accent-soft focus:outline-none focus:ring-4 focus:ring-accent-soft/10 transition-soft resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full bg-accent-vibrant text-white py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs shadow-kawaii hover:scale-[1.02] active:scale-95 transition-soft">
                                Envoyer mon mot doux
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
