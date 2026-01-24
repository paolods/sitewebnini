import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Heart, ShieldCheck } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-bg-kawaii pt-32 pb-16 border-t border-border-soft/50">
            <div className="container mx-auto px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
                    {/* Maison Section */}
                    <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
                        <Image
                            src="/images/logo/1000166046.jpg"
                            alt="Béatshirts"
                            width={160}
                            height={80}
                            className="h-16 w-auto object-contain mb-8 grayscale hover:grayscale-0 transition-soft cursor-pointer"
                        />
                        <p className="text-sm text-text-muted italic leading-relaxed text-center md:text-left">
                            "Porter la foi avec élégance et une infinie douceur. <br />
                            Chaque pièce est un poème imaginé avec amour."
                        </p>
                        <div className="flex gap-6 mt-10">
                            {/* Social Buttons - More Round/Soft */}
                            {[Instagram, Facebook, Mail].map((Icon, idx) => (
                                <Link key={idx} href="#" className="p-4 bg-white rounded-full text-text-muted hover:text-accent-vibrant hover:shadow-kawaii hover:-translate-y-1 transition-soft border border-border-soft">
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-text-kawaii-pink mb-8">La Boutique</h4>
                        <ul className="space-y-5 text-[12px] font-bold text-text-main uppercase tracking-widest">
                            <li><Link href="/" className="hover:text-accent-vibrant transition-soft">Accueil</Link></li>
                            <li><Link href="/collections/nouveautes" className="hover:text-accent-vibrant transition-soft">Nouveautés</Link></li>
                            <li><Link href="/collections/beatshirts" className="hover:text-accent-vibrant transition-soft">Les Béatshirts</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-text-kawaii-pink mb-8">L'Atelier</h4>
                        <ul className="space-y-5 text-[12px] font-bold text-text-main uppercase tracking-widest">
                            <li><Link href="/a-propos" className="hover:text-accent-vibrant transition-soft">Notre Histoire</Link></li>
                            <li><Link href="/concept" className="hover:text-accent-vibrant transition-soft">Le Concept</Link></li>
                            <li><Link href="/contact" className="hover:text-accent-vibrant transition-soft">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Reassurance Small Box - More "Object" feel */}
                    <div className="bg-white rounded-card-kawaii p-10 shadow-soft border border-border-soft relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-accent-soft"></div>
                        <div className="flex items-center gap-4 mb-6">
                            <ShieldCheck className="h-6 w-6 text-accent-vibrant" />
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-text-main">Achat Serein</span>
                        </div>
                        <p className="text-[11px] text-text-muted leading-relaxed mb-8 font-medium italic">
                            "Paiement 100% sécurisé via Stripe & PayPal. Votre douceur, notre priorité."
                        </p>
                        <div className="flex gap-3 opacity-40 grayscale group-hover:grayscale-0 transition-soft">
                            <div className="h-6 w-10 bg-gray-100 rounded-md border border-gray-200"></div>
                            <div className="h-6 w-10 bg-gray-100 rounded-md border border-gray-200"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Elegant & Minimal */}
                <div className="pt-12 border-t border-border-soft/50 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted opacity-60">
                        © {new Date().getFullYear()} Béatshirts Maison Créative. <span className="hidden sm:inline">Tous droits réservés.</span>
                    </div>

                    <div className="flex items-center gap-3 text-text-kawaii-pink">
                        <Heart className="h-4 w-4 fill-current animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Fait avec amour</span>
                    </div>

                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted">
                        <Link href="/legal" className="hover:text-text-main transition-soft">Légal</Link>
                        <Link href="/privacy" className="hover:text-text-main transition-soft">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
