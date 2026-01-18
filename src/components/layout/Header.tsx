"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { useState } from "react";

export function Header() {
    const { cartCount } = useCart();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <header className="w-full">
            {/* Announcement Bar */}
            <div className="bg-[var(--soft-pink)] py-2 text-center text-xs font-medium text-[var(--price-red)]">
                Livraison offerte dès 49€ ✨ Portez votre foi avec élégance
            </div>

            {/* Main Header */}
            <div className="border-b border-border bg-background">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4 md:gap-8">
                    {/* Logo */}
                    <Link href="/" className="shrink-0">
                        <Image
                            src="/images/logo/1000166046.jpg"
                            alt="Béatshirts Logo"
                            width={120}
                            height={60}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Search Bar - Centered */}
                    <div className="hidden md:flex flex-1 max-w-xl relative">
                        <input
                            type="text"
                            placeholder="Rechercher un Béatshirt, une collection..."
                            className="w-full rounded-full border border-input px-6 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600/20 shadow-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                            <Search className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Right Utilities */}
                    <div className="flex items-center gap-4">
                        <Link href="/account" className="hidden sm:flex flex-col items-center text-muted-foreground hover:text-[var(--price-red)] transition-colors">
                            <User className="h-6 w-6" />
                            <span className="text-[10px] font-medium uppercase mt-1">Mon Compte</span>
                        </Link>
                        <Link href="/cart" className="relative flex flex-col items-center text-muted-foreground hover:text-[var(--price-red)] transition-colors">
                            <ShoppingCart className="h-6 w-6" />
                            <span className="text-[10px] font-medium uppercase mt-1">Panier</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--price-red)] text-[10px] font-bold text-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button className="md:hidden rounded-full p-2 hover:bg-accent/10">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Sub Navigation */}
                <nav className="border-t border-border hidden md:block">
                    <div className="container mx-auto px-4">
                        <ul className="flex items-center justify-center gap-10 py-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                            <li>
                                <Link href="/" className="hover:text-[var(--price-red)] transition-colors">Accueil</Link>
                            </li>
                            <li>
                                <Link href="/collections/beatshirts" className="text-[var(--price-red)] font-bold hover:opacity-80 transition-opacity flex items-center gap-1">
                                    <span className="text-xs">❤</span> Béatshirts
                                </Link>
                            </li>
                            <li>
                                <Link href="/nouveautes" className="hover:text-[var(--price-red)] transition-colors">Nouveautés</Link>
                            </li>
                            <li>
                                <Link href="/a-propos" className="hover:text-[var(--price-red)] transition-colors">Notre Histoire</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[var(--price-red)] transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
