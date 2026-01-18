"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, ShoppingBag, ArrowLeft, ShieldCheck } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

    if (cartCount === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
                <div className="bg-[var(--soft-pink)] p-8 rounded-full mb-6">
                    <ShoppingBag className="h-16 w-16 text-[var(--price-red)]" />
                </div>
                <h1 className="text-3xl font-serif font-bold mb-4 uppercase">Votre panier est vide</h1>
                <p className="text-muted-foreground italic mb-8">Il semble que vous n'ayez pas encore trouvé votre Béatshirt...</p>
                <Link
                    href="/"
                    className="bg-[var(--price-red)] text-white px-8 py-3 rounded-card font-bold uppercase tracking-widest hover:bg-red-800 transition-all shadow-soft"
                >
                    Découvrir la collection
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground">
                <nav className="flex items-center gap-2">
                    <Link href="/" className="hover:text-foreground">Accueil</Link>
                    <span>/</span>
                    <span className="text-foreground font-medium uppercase font-serif">Panier</span>
                </nav>
            </div>

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-serif font-bold text-foreground uppercase tracking-tight mb-10 flex items-center gap-4">
                    Récapitulatif de votre commande
                    <span className="text-sm font-sans font-normal normal-case text-muted-foreground py-1 px-3 bg-[var(--off-white)] rounded-full">
                        {cartCount} article{cartCount > 1 ? 's' : ''}
                    </span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Item List - Left */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="hidden md:grid grid-cols-6 gap-4 pb-4 border-b border-border text-xs font-bold uppercase tracking-widest text-muted-foreground px-4">
                            <div className="col-span-3">Article</div>
                            <div className="text-center">Prix</div>
                            <div className="text-center">Quantité</div>
                            <div className="text-right">Total</div>
                        </div>

                        {cart.map((item) => (
                            <div
                                key={`${item.id}-${item.size}`}
                                className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center bg-white p-4 rounded-card border border-border shadow-soft transition-hover hover:shadow-md"
                            >
                                {/* Article Info */}
                                <div className="col-span-3 flex gap-4">
                                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-[var(--off-white)] border border-border">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <Link href={`/products/${item.id}`} className="font-serif font-bold text-lg hover:text-[var(--price-red)] transition-colors">
                                            {item.name}
                                        </Link>
                                        <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                                            Taille : <span className="font-bold text-foreground">{item.size}</span>
                                        </p>
                                        <button
                                            onClick={() => removeFromCart(item.id, item.size)}
                                            className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-red-600 uppercase font-bold mt-4 transition-colors"
                                        >
                                            <Trash2 className="h-3 w-3" />
                                            Supprimer
                                        </button>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="md:text-center">
                                    <span className="md:hidden text-xs font-bold uppercase text-muted-foreground mr-2">Prix :</span>
                                    <span className="font-medium">{formatPrice(item.price)}</span>
                                </div>

                                {/* Quantity */}
                                <div className="flex justify-center">
                                    <div className="flex items-center border border-border rounded-lg bg-[var(--off-white)] scale-90">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                            className="px-3 py-1 hover:text-[var(--price-red)] transition-colors font-bold"
                                        >-</button>
                                        <span className="px-3 py-1 font-bold w-10 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                            className="px-3 py-1 hover:text-[var(--price-red)] transition-colors font-bold"
                                        >+</button>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="text-right">
                                    <span className="md:hidden text-xs font-bold uppercase text-muted-foreground mr-2">Total :</span>
                                    <span className="font-bold text-[var(--price-red)] text-lg">{formatPrice(item.price * item.quantity)}</span>
                                </div>
                            </div>
                        ))}

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all pt-4"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Continuer mes achats
                        </Link>
                    </div>

                    {/* Summary - Right */}
                    <div className="lg:col-span-1">
                        <div className="bg-[var(--off-white)] p-8 rounded-card border border-border shadow-soft sticky top-24">
                            <h2 className="font-serif font-bold text-xl uppercase mb-8 border-b border-border/50 pb-4">Total Panier</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground italic">{cartCount} article{cartCount > 1 ? 's' : ''}</span>
                                    <span className="font-medium">{formatPrice(cartTotal)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground italic">Frais de port</span>
                                    <span className="text-green-600 font-medium">Offerts</span>
                                </div>
                            </div>

                            {/* Promo Code */}
                            <div className="mb-8 p-4 bg-white rounded-lg border border-dashed border-border">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Code Promo</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Votre code"
                                        className="bg-[var(--off-white)] rounded px-3 py-2 text-xs focus:outline-none w-full"
                                    />
                                    <button className="bg-black text-white px-4 py-2 rounded text-[10px] font-bold uppercase hover:bg-gray-800 transition-colors">Appliquer</button>
                                </div>
                            </div>

                            <div className="flex justify-between items-end border-t border-border pt-6 mb-10">
                                <span className="font-serif font-bold text-xl uppercase">Total TTC</span>
                                <span className="font-bold text-3xl text-[var(--price-red)]">{formatPrice(cartTotal)}</span>
                            </div>

                            <button className="w-full bg-[var(--price-red)] text-white py-4 rounded-card font-bold uppercase tracking-widest hover:bg-red-800 transition-all shadow-soft mb-4">
                                Passer à la caisse
                            </button>

                            <div className="flex flex-col gap-2 mb-6">
                                <button className="w-full bg-blue-600 text-white py-3 rounded-card font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-sm flex items-center justify-center gap-2">
                                    <span className="italic font-extrabold text-white">Pay</span><span className="italic font-extrabold text-blue-200">Pal</span>
                                </button>
                                <button className="w-full bg-black text-white py-3 rounded-card font-bold uppercase tracking-widest hover:bg-gray-900 transition-all shadow-sm flex items-center justify-center gap-2">
                                    <span>Payer par Carte</span>
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                <ShieldCheck className="h-4 w-4 text-green-600" />
                                Paiement 100% Sécurisé
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
