import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-background border-t border-border pt-16 pb-8">
            {/* Trust Badges */}
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-border/50">
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="bg-[var(--soft-pink)] p-4 rounded-full text-[var(--price-red)]">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h4 className="font-serif font-bold text-lg">Livraison rapide</h4>
                    <p className="text-sm text-muted-foreground italic">Expédiée sous 48h/72h</p>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="bg-[var(--soft-pink)] p-4 rounded-full text-[var(--price-red)]">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h4 className="font-serif font-bold text-lg">Paiement sécurisé</h4>
                    <p className="text-sm text-muted-foreground italic">Visa, Mastercard, Paypal</p>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="bg-[var(--soft-pink)] p-4 rounded-full text-[var(--price-red)]">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h4 className="font-serif font-bold text-lg">On reste à l'écoute</h4>
                    <p className="text-sm text-muted-foreground italic">du lundi au vendredi</p>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="bg-[var(--soft-pink)] p-4 rounded-full text-[var(--price-red)]">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </div>
                    <h4 className="font-serif font-bold text-lg">Trustpilot ⭐⭐⭐⭐⭐</h4>
                    <p className="text-sm text-muted-foreground italic">Nos clients nous adorent</p>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
                {/* Column 1: collections */}
                <div>
                    <h3 className="font-serif font-bold text-xl uppercase tracking-wider mb-6">Collections</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/collections/beatshirts" className="hover:text-[var(--price-red)] transition-colors">Béatshirts Classiques</Link></li>
                        <li><Link href="/collections/nouveautes" className="hover:text-[var(--price-red)] transition-colors">Dernières Sorties</Link></li>
                        <li><Link href="/collections/promo" className="hover:text-[var(--price-red)] transition-colors">Promotions</Link></li>
                        <li><Link href="/collections/e-cartes" className="hover:text-[var(--price-red)] transition-colors">E-Cartes Cadeaux</Link></li>
                    </ul>
                </div>

                {/* Column 2: À propos */}
                <div>
                    <h3 className="font-serif font-bold text-xl uppercase tracking-wider mb-6">À propos</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/a-propos" className="hover:text-[var(--price-red)] transition-colors">Notre Histoire</Link></li>
                        <li><Link href="/concept" className="hover:text-[var(--price-red)] transition-colors">Le Concept Béatshirts</Link></li>
                        <li><Link href="/blog" className="hover:text-[var(--price-red)] transition-colors">Le Blog Spirital</Link></li>
                        <li><Link href="/recrutement" className="hover:text-[var(--price-red)] transition-colors">Rejoindre l'aventure</Link></li>
                    </ul>
                </div>

                {/* Column 3: Vos questions */}
                <div>
                    <h3 className="font-serif font-bold text-xl uppercase tracking-wider mb-6">Vos questions</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/contact" className="hover:text-[var(--price-red)] transition-colors">Aide & Contact</Link></li>
                        <li><Link href="/livraison" className="hover:text-[var(--price-red)] transition-colors">Livraison & Retours</Link></li>
                        <li><Link href="/faq" className="hover:text-[var(--price-red)] transition-colors">FAQ</Link></li>
                        <li><Link href="/cgv" className="hover:text-[var(--price-red)] transition-colors">CGV</Link></li>
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div className="space-y-6">
                    <h3 className="font-serif font-bold text-xl uppercase tracking-wider">Newsletter</h3>
                    <p className="text-sm text-muted-foreground italic">Inscrivez-vous pour recevoir nos pensées positives et actualités.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Votre Email"
                            className="bg-[var(--off-white)] rounded-md border border-input px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600/20 flex-1"
                        />
                        <button className="bg-[var(--price-red)] text-white px-4 py-2 rounded-md text-sm font-bold uppercase hover:bg-red-800 transition-colors">
                            Envoyer
                        </button>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <Link href="#" className="text-muted-foreground hover:text-[var(--price-red)]"><Instagram className="h-6 w-6" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-[var(--price-red)]"><Facebook className="h-6 w-6" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-[var(--price-red)]"><Twitter className="h-6 w-6" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-[var(--price-red)]"><Youtube className="h-6 w-6" /></Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border pt-8 mt-8">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6 text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                        <Link href="/vie-privee" className="hover:text-foreground">Confidentialité</Link>
                        <Link href="/mentions-legales" className="hover:text-foreground">Mentions Légales</Link>
                        <Link href="/cookies" className="hover:text-foreground">Cookies</Link>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="relative group">
                            <Image
                                src="/images/logo/1000174392.jpg"
                                alt="Béatshirts Sceau de Qualité"
                                width={100}
                                height={100}
                                className="h-20 w-auto transition-transform duration-700 group-hover:rotate-[360deg]"
                            />
                        </div>
                    </div>

                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                        © {new Date().getFullYear()} Béatshirts - Créé avec Amour
                    </div>
                </div>
            </div>
        </footer>
    );
}
