"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Heart, Menu } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { useState } from "react";
import { formatPrice } from "@/lib/utils";

export function Header() {
    const { cartCount, cartTotal } = useCart();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <header className="w-full sticky top-0 z-50 transition-soft">
            {/* Top Minimal Announcement - More Breathing Room */}
            <div className="bg-[var(--accent-cream)] py-3 border-b border-[var(--border-soft)] text-center text-[11px] uppercase tracking-[0.25em] font-bold text-[var(--text-muted)]">
                Fait main avec amour ✨ Livraison offerte dès 49€
            </div>

            {/* Main Header Container */}
            <div className="bg-white/95 backdrop-blur-lg shadow-soft border-b border-[var(--border-soft)]/50">
                <div className="container mx-auto px-8 py-6">
                    <div className="flex items-center justify-between gap-12">
                        {/* Search - Left aligned */}
                        <div className="hidden lg:flex flex-1 max-w-[320px] relative">
                            <input
                                type="text"
                                placeholder="Chercher un trésor..."
                                className="w-full bg-[var(--bg-kawaii)] rounded-full px-8 py-3.5 text-xs text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 border border-transparent focus:border-[var(--accent-soft)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[var(--accent-soft)]/20 transition-soft shadow-inner"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Search className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)] opacity-50" />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="lg:hidden text-[var(--text-main)] p-3 hover:bg-[var(--bg-kawaii)] rounded-full transition-soft">
                            <Menu className="h-7 w-7" />
                        </button>

                        {/* Centered Logo - More Impact */}
                        <Link href="/" className="flex flex-col items-center group transition-soft hover:scale-105 active:scale-95">
                            <Image
                                src="/images/logo/1000166046.jpg"
                                alt="Béatshirts"
                                width={140}
                                height={70}
                                className="h-16 w-auto object-contain"
                                priority
                            />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text-kawaii-pink)] mt-3 opacity-0 group-hover:opacity-100 transition-soft translate-y-2 group-hover:translate-y-0">
                                Maison Créative
                            </span>
                        </Link>

                        {/* Right Utilities */}
                        <div className="flex items-center gap-8">
                            <Link href="/wishlist" className="hidden sm:flex p-3 text-[var(--text-muted)] hover:text-[var(--accent-vibrant)] hover:bg-[var(--bg-kawaii)] rounded-full transition-soft">
                                <Heart className="h-6 w-6" />
                            </Link>
                            <div className="relative flex items-center gap-3 p-1 pl-4 bg-[var(--bg-kawaii)] rounded-full border border-[var(--border-soft)] hover:bg-[var(--accent-soft)]/20 transition-soft group cursor-pointer">
                                <Link href="/cart" className="flex items-center gap-3">
                                    <div className="flex flex-col text-right">
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Panier</span>
                                        <span className="text-[10px] font-black text-[var(--text-kawaii-pink)]">
                                            {cartTotal > 0 ? formatPrice(cartTotal) : 'Doux'}
                                        </span>
                                    </div>
                                    <div className="bg-[var(--accent-vibrant)] p-3 rounded-full text-white shadow-kawaii group-hover:scale-110 transition-soft relative">
                                        <ShoppingBag className="h-5 w-5" />
                                        {cartCount > 0 && (
                                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-black text-[var(--accent-vibrant)] shadow-md border-2 border-[var(--accent-vibrant)]">
                                                {cartCount}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Navigation - FIXED SPACING & AESTHETIC */}
                    <nav className="mt-8 pt-6 border-t border-[var(--border-soft)]/50">
                        <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-4">
                            {['Accueil', 'Nouveautés', 'Les Béatshirts', "L'Atelier", 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Accueil' ? '/' :
                                            item === 'Les Béatshirts' ? '/collections/beatshirts' :
                                                `/collections/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-')}`}
                                        className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--text-kawaii-pink)] transition-soft relative py-2 group whitespace-nowrap"
                                    >
                                        {item}
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[var(--accent-soft)] rounded-full group-hover:w-full transition-soft"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
