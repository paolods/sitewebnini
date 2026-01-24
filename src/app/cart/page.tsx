"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, Zap, Heart } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

    if (cartCount === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-[var(--bg-soft)]">
                <div className="w-24 h-24 bg-[var(--accent-cream)] rounded-full flex items-center justify-center mb-8 border border-[var(--border-soft)]">
                    <ShoppingBag className="h-10 w-10 text-[var(--text-muted)] opacity-50" />
                </div>
                <h1 className="text-4xl font-serif text-[var(--text-main)] mb-4">Votre panier est tout léger...</h1>
                <p className="text-[var(--text-muted)] italic mb-10 max-w-sm">"On dirait qu'aucun trésor n'a encore trouvé son chemin jusqu'ici."</p>
                <Link
                    href="/collections/beatshirts"
                    className="bg-[var(--accent-vibrant)] text-white px-10 py-4 rounded-button font-bold uppercase tracking-widest text-xs shadow-kawaii hover:scale-105 transition-soft"
                >
                    Explorer la collection
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[var(--bg-soft)] pb-24 pt-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-12 border-b border-[var(--border-soft)] pb-6">
                    <div>
                        <h1 className="text-4xl font-serif text-[var(--text-main)]">Mon Panier Doux</h1>
                        <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mt-1">{cartCount} merveilles sélectionnées</p>
                    </div>
                    <Link
                        href="/collections/beatshirts"
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-kawaii-pink)] hover:underline transition-soft"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" /> Continuer mes achats
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map((item) => (
                            <div
                                key={`${item.id}-${item.size}`}
                                className="bg-white rounded-card-kawaii border border-[var(--border-soft)] shadow-soft p-6 flex flex-col sm:flex-row items-center gap-6 transition-soft hover:shadow-md"
                            >
                                <div className="relative h-28 w-28 bg-[var(--bg-kawaii)] rounded-xl overflow-hidden shrink-0 border border-[var(--border-soft)]">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover p-2"
                                    />
                                </div>

                                <div className="flex-1 text-center sm:text-left">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                                        <div>
                                            <h3 className="text-md font-serif font-bold text-[var(--text-main)] leading-tight">{item.name}</h3>
                                            <p className="text-[10px] font-bold text-[var(--text-kawaii-pink)] uppercase tracking-widest mt-1">
                                                Taille : <span className="bg-[var(--accent-cream)] px-2 py-0.5 rounded-full border border-[var(--border-soft)] ml-1">{item.size}</span>
                                            </p>
                                        </div>
                                        <p className="text-lg font-serif font-bold text-[var(--price-pink)]">{formatPrice(item.price)}</p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <div className="flex items-center bg-[var(--bg-kawaii)] rounded-full border border-[var(--border-soft)] scale-90">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.size!, Math.max(1, item.quantity - 1))}
                                                className="px-4 py-2 hover:text-[var(--price-pink)] transition-soft"
                                            ><Minus className="h-3 w-3" /></button>
                                            <span className="px-4 py-2 text-xs font-bold text-[var(--text-main)] min-w-[40px] text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.size!, item.quantity + 1)}
                                                className="px-4 py-2 hover:text-[var(--price-pink)] transition-soft"
                                            ><Plus className="h-3 w-3" /></button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id, item.size!)}
                                            className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] hover:text-red-400 transition-soft flex items-center gap-1.5"
                                        >
                                            <Trash2 className="h-3.5 w-3.5" /> Retirer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-kawaii border border-[var(--border-soft)] shadow-kawaii p-10 sticky top-32 overflow-hidden">
                            {/* Decorative background flair */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--accent-soft)]/10 rounded-full blur-2xl"></div>

                            <h2 className="text-xl font-serif font-bold text-[var(--text-main)] mb-8 flex items-center gap-2">
                                <Heart className="h-5 w-5 text-[var(--accent-vibrant)]" />
                                Résumé de ma commande
                            </h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-xs font-medium text-[var(--text-muted)]">
                                    <span>Sous-total ({cartCount} objets)</span>
                                    <span>{formatPrice(cartTotal)}</span>
                                </div>
                                <div className="flex justify-between text-xs font-medium text-[var(--text-muted)]">
                                    <span>Frais de port douillets</span>
                                    <span className="text-green-500 font-bold">Inclus ✨</span>
                                </div>

                                {/* Promo Code - Soft Look */}
                                <div className="pt-4 border-t border-[var(--border-soft)]">
                                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3 block">
                                        Votre Code Privilège
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="DOUCEUR10"
                                            className="flex-1 bg-[var(--bg-kawaii)] border border-[var(--border-soft)] rounded-full px-5 py-2.5 text-xs text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] transition-soft"
                                        />
                                        <button className="text-[9px] font-bold uppercase tracking-widest text-[var(--text-kawaii-pink)] hover:text-[var(--accent-vibrant)] transition-soft">
                                            Valider
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-[var(--border-soft)] mb-10">
                                <div className="flex justify-between items-baseline">
                                    <span className="text-sm font-bold uppercase tracking-widest text-[var(--text-main)]">Total TTC</span>
                                    <span className="text-3xl font-serif font-bold text-[var(--price-pink)]">{formatPrice(cartTotal)}</span>
                                </div>
                            </div>

                            <button className="w-full bg-[var(--accent-vibrant)] text-white py-5 rounded-button font-bold uppercase tracking-[0.2em] text-xs shadow-kawaii hover:scale-105 active:scale-95 transition-soft flex items-center justify-center gap-3 mb-4">
                                <Zap className="h-4 w-4 text-yellow-300 fill-current" />
                                Passer en caisse
                            </button>

                            <p className="text-[10px] text-[var(--text-muted)] text-center italic">
                                "Paiement 100% serein et sécurisé"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
