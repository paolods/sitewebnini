"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Heart, Menu } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { useState } from "react";

export function Header() {
    const { cartCount } = useCart();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <header className="w-full sticky top-0 z-50">
            {/* Top Minimal Announcement */}
            <div className="bg-[var(--accent-cream)] py-2 border-b border-[var(--border-soft)] text-center text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--text-muted)]">
                Fait main avec amour ✨ Livraison offerte dès 49€
            </div>

            {/* Main Header Container */}
            <div className="bg-white/90 backdrop-blur-md shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between gap-8">
                        {/* Search - Left aligned for balance */}
                        <div className="hidden lg:flex flex-1 max-w-[280px] relative">
                            <input
                                type="text"
                                placeholder="Chercher un trésor..."
                                className="w-full bg-[var(--bg-kawaii)] rounded-button px-6 py-2.5 text-xs text-[var(--text-main)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] transition-soft"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[var(--text-muted)]" />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="lg:hidden text-[var(--text-main)] p-2">
                            <Menu className="h-6 w-6" />
                        </button>

                        {/* Centered Logo for Artisanal Feel */}
                        <Link href="/" className="flex flex-col items-center group transition-soft hover:scale-105">
                            <Image
                                src="/images/logo/1000166046.jpg"
                                alt="Béatshirts"
                                width={120}
                                height={60}
                                className="h-12 w-auto object-contain"
                                priority
                            />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-kawaii-pink)] mt-2 opacity-0 group-hover:opacity-100 transition-soft">
                                Maison Créative
                            </span>
                        </Link>

                        {/* Right Utilities */}
                        <div className="flex items-center gap-6">
                            <Link href="/wishlist" className="hidden sm:flex text-[var(--text-muted)] hover:text-[var(--accent-vibrant)] transition-soft">
                                <Heart className="h-5 w-5" />
                            </Link>
                            <Link href="/cart" className="relative flex items-center gap-2 group">
                                <div className="bg-[var(--accent-soft)]/20 p-2.5 rounded-full group-hover:bg-[var(--accent-soft)]/40 transition-soft">
                                    <ShoppingBag className="h-5 w-5 text-[var(--text-kawaii-pink)]" />
                                </div>
                                <div className="hidden lg:flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">Panier</span>
                                    <span className="text-[10px] font-bold text-[var(--text-kawaii-pink)]">{cartCount} {cartCount > 1 ? 'articles' : 'article'}</span>
                                </div>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 lg:hidden flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent-vibrant)] text-[10px] font-bold text-white shadow-sm scale-in">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>

                    {/* Simple Bottom Navigation */}
                    <nav className="mt-6 pt-4 border-t border-[var(--border-soft)]">
                        <ul className="flex items-center justify-center gap-12 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                            <li>
                                <Link href="/" className="hover:text-[var(--text-kawaii-pink)] transition-soft relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--accent-soft)] hover:after:w-full after:transition-soft">Accueil</Link>
                            </li>
                            <li>
                                <Link href="/collections/nouveautes" className="hover:text-[var(--text-kawaii-pink)] transition-soft">Nouveautés</Link>
                            </li>
                            <li className="relative group">
                                <Link href="/collections/beatshirts" className="text-[var(--text-kawaii-pink)] flex items-center gap-1">
                                    Les Béatshirts
                                    <span className="text-[8px]">▼</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/a-propos" className="hover:text-[var(--text-kawaii-pink)] transition-soft">L'Atelier</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[var(--text-kawaii-pink)] transition-soft">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
