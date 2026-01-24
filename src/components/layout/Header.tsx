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
            {/* Top Minimal Announcement */}
            <div className="bg-accent-cream py-3 border-b border-border-soft text-center text-[11px] uppercase tracking-[0.25em] font-bold text-text-muted">
                Fait main avec amour ✨ Livraison offerte dès 49€
            </div>

            {/* Main Header Container - Slimmer & Elegant */}
            <div className="bg-white/95 backdrop-blur-lg shadow-soft border-b border-border-soft/50">
                <div className="container mx-auto px-8 py-2">
                    <div className="flex items-center justify-between gap-12">
                        {/* Search */}
                        <div className="hidden lg:flex flex-1 max-w-[280px] relative">
                            <input
                                type="text"
                                placeholder="Chercher un trésor..."
                                className="w-full bg-bg-kawaii rounded-full px-6 py-2 text-xs text-text-main placeholder:text-text-muted/60 border border-transparent focus:border-accent-soft focus:bg-white focus:outline-none focus:ring-4 focus:ring-accent-soft/20 transition-soft shadow-inner"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Search className="absolute right-5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-text-muted opacity-50" />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="lg:hidden text-text-main p-2 hover:bg-bg-kawaii rounded-full transition-soft">
                            <Menu className="h-6 w-6" />
                        </button>

                        {/* Centered Logo - More Compact */}
                        <Link href="/" className="flex flex-col items-center group transition-soft hover:scale-105 active:scale-95">
                            <Image
                                src="/images/logo/1000166046.jpg"
                                alt="Béatshirts"
                                width={110}
                                height={55}
                                className="h-10 w-auto object-contain"
                                priority
                            />
                            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-text-kawaii-pink mt-1 opacity-0 group-hover:opacity-100 transition-soft">
                                Maison Créative
                            </span>
                        </Link>

                        {/* Right Utilities */}
                        <div className="flex items-center gap-6">
                            <Link href="/wishlist" className="hidden sm:flex p-2 text-text-muted hover:text-accent-vibrant hover:bg-bg-kawaii rounded-full transition-soft">
                                <Heart className="h-5 w-5" />
                            </Link>
                            <div className="relative flex items-center gap-3 p-1 pl-4 bg-bg-kawaii rounded-full border border-border-soft hover:bg-accent-soft/20 transition-soft group cursor-pointer scale-90">
                                <Link href="/cart" className="flex items-center gap-3">
                                    <div className="flex flex-col text-right">
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-text-muted">Panier</span>
                                        <span className="text-[10px] font-black text-text-kawaii-pink">
                                            {cartTotal > 0 ? formatPrice(cartTotal) : 'Doux'}
                                        </span>
                                    </div>
                                    <div className="bg-accent-vibrant p-2 rounded-full text-white shadow-kawaii group-hover:scale-110 transition-soft relative">
                                        <ShoppingBag className="h-4 w-4" />
                                        {cartCount > 0 && (
                                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-black text-accent-vibrant shadow-md border border-accent-vibrant">
                                                {cartCount}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Navigation - Compact & Breathable */}
                    <nav className="mt-2 pt-2 border-t border-border-soft/50">
                        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-2">
                            {['Accueil', 'Nouveautés', 'Les Béatshirts', "L'Atelier", 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={
                                            item === 'Accueil' ? '/' :
                                                item === 'Les Béatshirts' ? '/collections/beatshirts' :
                                                    item === 'Nouveautés' ? '/collections/nouveautes' :
                                                        item === "L'Atelier" ? '/a-propos' :
                                                            '/contact'
                                        }
                                        className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted hover:text-text-kawaii-pink transition-soft relative px-4 py-1.5 group whitespace-nowrap"
                                    >
                                        {item}
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-soft rounded-full group-hover:w-full transition-soft"></span>
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
