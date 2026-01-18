"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
                <div className="bg-[var(--off-white)] p-8 rounded-full mb-6">
                    <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                </div>
                <h1 className="text-3xl font-serif font-bold mb-4 text-foreground">Votre panier est vide</h1>
                <p className="text-muted-foreground mb-8 max-w-md">
                    Il semble que vous n'ayez pas encore ajouté de Béatshirts à votre panier.
                    Découvrez notre collection pour trouver celui qui vous inspire.
                </p>
                <Link
                    href="/"
                    className="bg-[var(--price-red)] text-white px-8 py-4 rounded-card font-bold uppercase tracking-widest hover:bg-red-800 transition-all shadow-soft"
                >
                    Continuer mes achats
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
                    <span className="text-foreground font-medium">Votre panier</span>
                </nav>
            </div>

            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-serif font-bold text-foreground mb-10 flex items-center gap-4">
                    Votre panier
                    <span className="text-sm font-sans font-normal text-muted-foreground bg-[var(--off-white)] px-3 py-1 rounded-full">
                        {cart.length} {cart.length > 1 ? 'articles' : 'article'}
                    </span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-card border border-border shadow-soft overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[var(--off-white)] text-xs uppercase tracking-widest font-bold text-muted-foreground border-b border-border">
                                    <tr>
                                        <th className="px-6 py-4">Produit</th>
                                        <th className="px-6 py-4 text-center">Prix</th>
                                        <th className="px-6 py-4 text-center">Quantité</th>
                                        <th className="px-6 py-4 text-right">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    {cart.map((item) => (
                                        <tr key={`${item.id}-${item.size}`} className="group hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-6">
                                                <div className="flex gap-4">
                                                    <div className="relative h-24 w-20 flex-shrink-0 bg-[var(--off-white)] rounded-lg overflow-hidden border border-border">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col justify-center gap-1">
                                                        <Link href={`/products/${item.id}`} className="font-serif font-bold text-foreground hover:text-[var(--price-red)] transition-colors">
                                                            {item.name}
                                                        </Link>
                                                        <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                                                            Taille: <span className="text-foreground">{item.size}</span>
                                                        </p>
                                                        <button
                                                            onClick={() => removeFromCart(item.id, item.size)}
                                                            className="text-xs text-muted-foreground flex items-center gap-1 mt-2 hover:text-red-600 transition-colors"
                                                        >
                                                            <Trash2 className="h-3 w-3" /> Supprimer
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-6 text-center">
                                                <span className="font-bold text-foreground">{formatPrice(item.price)}</span>
                                            </td>
                                            <td className="px-6 py-6">
                                                <div className="flex items-center justify-center">
                                                    <div className="flex items-center border border-border rounded-lg bg-white">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                                            className="px-3 py-1 hover:text-[var(--price-red)] transition-colors disabled:opacity-30"
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <Minus className="h-3 w-3" />
                                                        </button>
                                                        <span className="px-2 py-1 font-bold w-10 text-center text-sm">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                                            className="px-3 py-1 hover:text-[var(--price-red)] transition-colors"
                                                        >
                                                            <Plus className="h-3 w-3" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-6 text-right font-bold text-foreground">
                                                {formatPrice(item.price * item.quantity)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-between items-center pt-4">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all"
                            >
                                <ArrowLeft className="h-4 w-4" /> Continuer mes achats
                            </Link>
                            <button
                                onClick={clearCart}
                                className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-red-600 transition-all flex items-center gap-2"
                            >
                                <Trash2 className="h-4 w-4" /> Vider le panier
                            </button>
                        </div>
                    </div>

                    {/* Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-card border border-border shadow-soft p-8 sticky top-24">
                            <h2 className="text-xl font-serif font-bold text-foreground mb-6 pb-4 border-b border-border/50">
                                Récapitulatif
                            </h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-muted-foreground">
                                    <span>Sous-total</span>
                                    <span className="font-bold text-foreground">{formatPrice(cartTotal)}</span>
                                </div>
                                <div className="flex justify-between text-muted-foreground">
                                    <span>Livraison</span>
                                    <span className="text-green-600 font-bold uppercase text-xs tracking-widest">Gratuit</span>
                                </div>
                                <div className="pt-4 border-t border-border/50 flex justify-between items-center">
                                    <span className="text-lg font-serif font-bold text-foreground">Total</span>
                                    <span className="text-2xl font-bold text-[var(--price-red)]">{formatPrice(cartTotal)}</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground italic text-center">
                                    Taxes incluses. Frais de port calculés lors du paiement.
                                </p>
                            </div>

                            <button className="w-full bg-black text-white py-4 rounded-card font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-soft mb-4">
                                Procéder au paiement
                            </button>

                            <div className="space-y-4 pt-6 border-t border-border/50">
                                <p className="text-xs font-bold uppercase tracking-widest text-center text-muted-foreground mb-4">
                                    Paiement Sécurisé
                                </p>
                                <div className="flex justify-center gap-3 opacity-60">
                                    <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
                                    <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold">MC</div>
                                    <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold">PAYPAL</div>
                                    <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold">AMEX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
