import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Heart, ShieldCheck } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[var(--bg-kawaii)] pt-20 pb-10 border-t border-[var(--border-soft)]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Maison Section */}
                    <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
                        <Image
                            src="/images/logo/1000166046.jpg"
                            alt="Béatshirts"
                            width={140}
                            height={70}
                            className="h-14 w-auto object-contain mb-6 grayscale hover:grayscale-0 transition-soft cursor-pointer"
                        />
                        <p className="text-xs text-[var(--text-muted)] italic leading-relaxed text-center md:text-left">
                            "Porter la foi avec élégance et douceur. <br />
                            Imaginé avec amour dans notre petit atelier."
                        </p>
                        <div className="flex gap-4 mt-8">
                            <Link href="#" className="p-2.5 bg-white rounded-full text-[var(--text-muted)] hover:text-[var(--accent-vibrant)] hover:shadow-sm transition-soft border border-[var(--border-soft)]">
                                <Instagram className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2.5 bg-white rounded-full text-[var(--text-muted)] hover:text-[var(--accent-vibrant)] hover:shadow-sm transition-soft border border-[var(--border-soft)]">
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2.5 bg-white rounded-full text-[var(--text-muted)] hover:text-[var(--accent-vibrant)] hover:shadow-sm transition-soft border border-[var(--border-soft)]">
                                <Mail className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-kawaii-pink)] mb-6">La Boutique</h4>
                        <ul className="space-y-4 text-xs font-bold text-[var(--text-main)] uppercase tracking-wider">
                            <li><Link href="/" className="hover:text-[var(--accent-vibrant)] transition-soft">Accueil</Link></li>
                            <li><Link href="/collections/nouveautes" className="hover:text-[var(--accent-vibrant)] transition-soft">Nouveautés</Link></li>
                            <li><Link href="/collections/beatshirts" className="hover:text-[var(--accent-vibrant)] transition-soft">Les Béatshirts</Link></li>
                            <li><Link href="/gift-cards" className="hover:text-[var(--accent-vibrant)] transition-soft">Cartes Cadeaux</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-kawaii-pink)] mb-6">L'Atelier</h4>
                        <ul className="space-y-4 text-xs font-bold text-[var(--text-main)] uppercase tracking-wider">
                            <li><Link href="/a-propos" className="hover:text-[var(--accent-vibrant)] transition-soft">Notre Histoire</Link></li>
                            <li><Link href="/concept" className="hover:text-[var(--accent-vibrant)] transition-soft">Le Concept</Link></li>
                            <li><Link href="/contact" className="hover:text-[var(--accent-vibrant)] transition-soft">Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-[var(--accent-vibrant)] transition-soft">Aide & FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Reassurance Small Box */}
                    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-card-kawaii border border-[var(--border-soft)]">
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="h-5 w-5 text-[var(--text-kawaii-pink)]" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-main)]">Achat Serein</span>
                        </div>
                        <p className="text-[10px] text-[var(--text-muted)] leading-relaxed mb-6">
                            Paiement 100% sécurisé via Stripe & PayPal. <br />
                            Livraison soignée et suivie.
                        </p>
                        <div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 transition-soft">
                            <div className="h-4 w-6 bg-gray-200 rounded-sm"></div>
                            <div className="h-4 w-6 bg-gray-200 rounded-sm"></div>
                            <div className="h-4 w-6 bg-gray-200 rounded-sm"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[var(--border-soft)] flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                        © {new Date().getFullYear()} Béatshirts Maison Créative. Tous droits réservés.
                    </div>

                    <div className="flex items-center gap-2 text-[var(--text-kawaii-pink)]">
                        <Heart className="h-3 w-3 fill-current" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Fait avec douceur</span>
                    </div>

                    <div className="flex gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                        <Link href="/legal" className="hover:text-[var(--text-main)]">Légal</Link>
                        <Link href="/privacy" className="hover:text-[var(--text-main)]">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
