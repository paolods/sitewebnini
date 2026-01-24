"use client";

import { useState } from "react";
import { ShoppingBag, Zap, Heart, ShieldCheck, Truck, Clock } from "lucide-react";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/components/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProductInfoProps {
    product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const { addToCart } = useCart();
    const router = useRouter();
    const availableSizes = product.sizes;
    const [selectedSize, setSelectedSize] = useState<string>(availableSizes[0] || "M");
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            size: selectedSize,
            image: product.image
        });
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    const handleBuyNow = () => {
        handleAddToCart();
        router.push("/cart");
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-muted)] bg-[var(--accent-cream)] px-3 py-1 rounded-full border border-[var(--border-soft)]">
                        Maison Béatshirts
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif text-[var(--text-main)] leading-tight">
                    {product.name}
                </h1>

                <p className="text-lg text-[var(--text-muted)] italic font-serif">
                    {product.subtitle}
                </p>

                <div className="flex items-center gap-6 py-4 border-y border-[var(--border-soft)]">
                    <p className="text-4xl font-serif font-bold text-[var(--price-pink)]">
                        {formatPrice(product.price)}
                    </p>
                    <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-widest bg-[var(--bg-kawaii)] px-3 py-1 rounded-full">
                        TVA Incluse
                    </span>
                </div>
            </div>

            {/* Size Selector - Soft Circles */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-main)]">
                        Choisir ma taille : <span className="text-[var(--text-kawaii-pink)] ml-1">{selectedSize}</span>
                    </label>
                    <Link href="#" className="text-[10px] text-[var(--text-muted)] underline hover:text-[var(--text-main)] transition-soft">Guide des tailles</Link>
                </div>
                <div className="flex flex-wrap gap-3">
                    {availableSizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`h-12 w-12 flex items-center justify-center rounded-full border-2 font-bold text-xs transition-soft ${selectedSize === size
                                ? "border-[var(--accent-vibrant)] bg-white text-[var(--accent-vibrant)] shadow-kawaii scale-110"
                                : "border-transparent bg-[var(--accent-cream)] text-[var(--text-muted)] hover:border-[var(--border-soft)]"
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity - Squishy Buttons */}
            <div className="space-y-4">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-main)]">
                    Quantité
                </label>
                <div className="flex items-center gap-4">
                    <div className="flex items-center bg-[var(--bg-kawaii)] rounded-button border border-[var(--border-soft)] overflow-hidden">
                        <button
                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            className="px-5 py-3 hover:bg-[var(--accent-soft)]/20 hover:text-[var(--price-pink)] transition-soft font-bold"
                        >—</button>
                        <span className="px-5 py-3 font-bold w-14 text-center text-sm text-[var(--text-main)]">{quantity}</span>
                        <button
                            onClick={() => setQuantity(q => q + 1)}
                            className="px-5 py-3 hover:bg-[var(--accent-soft)]/20 hover:text-[var(--price-pink)] transition-soft font-bold"
                        >+</button>
                    </div>
                </div>
            </div>

            {/* Actions - Welcoming buttons */}
            <div className="flex flex-col gap-4 pt-4">
                <button
                    onClick={handleAddToCart}
                    className={`flex items-center justify-center gap-3 w-full py-5 rounded-button font-bold uppercase tracking-widest text-xs transition-soft shadow-kawaii active:scale-95 ${addedToCart
                        ? "bg-green-100 text-green-600 border border-green-200"
                        : "bg-[var(--accent-vibrant)] text-white hover:bg-[#ff7a91]"}`}
                >
                    <ShoppingBag className="h-4 w-4" />
                    {addedToCart ? "Trésor Ajouté !" : "Ajouter au Panier"}
                </button>
                <button
                    onClick={handleBuyNow}
                    className="flex items-center justify-center gap-3 w-full py-5 rounded-button font-bold uppercase tracking-widest text-xs bg-[var(--text-main)] text-white hover:bg-[#4a332c] transition-soft shadow-lg active:scale-95"
                >
                    <Zap className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    Achat Direct
                </button>
            </div>

            <button className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--accent-vibrant)] transition-soft mt-2">
                <Heart className="h-4 w-4" />
                Ajouter à ma liste de souhaits
            </button>

            {/* Trust Badges - Reassuring Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[var(--border-soft)]">
                <div className="flex flex-col items-center p-4 bg-white rounded-card-kawaii border border-[var(--border-soft)] shadow-sm">
                    <Truck className="h-6 w-6 text-[var(--text-kawaii-pink)] mb-2" />
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[var(--text-main)]">Livraison Suivie</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-card-kawaii border border-[var(--border-soft)] shadow-sm">
                    <ShieldCheck className="h-6 w-6 text-[var(--text-kawaii-pink)] mb-2" />
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[var(--text-main)]">100% Sécurisé</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-card-kawaii border border-[var(--border-soft)] shadow-sm">
                    <Clock className="h-6 w-6 text-[var(--text-kawaii-pink)] mb-2" />
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[var(--text-main)]">Atelier Réactif</p>
                </div>
            </div>

            {/* Inspiration & Description */}
            <div className="pt-8 space-y-6">
                <div className="flex items-center gap-4">
                    <span className="h-px flex-1 bg-[var(--border-soft)]"></span>
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--text-kawaii-pink)]">L'Inspiration</span>
                    <span className="h-px flex-1 bg-[var(--border-soft)]"></span>
                </div>

                <div className="bg-[var(--accent-cream)] p-10 rounded-card-kawaii relative overflow-hidden text-center">
                    <span className="absolute -top-6 -left-2 text-[120px] font-serif text-[var(--accent-soft)]/30 select-none">“</span>
                    <p className="relative z-10 text-2xl font-serif italic text-[var(--text-main)] leading-relaxed">
                        {product.quote}
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-2">
                        <div className="h-0.5 w-10 bg-[var(--accent-soft)]"></div>
                        <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-[var(--text-muted)]">
                            Les béatitudes — Manuscrit Artisanal
                        </p>
                    </div>
                </div>

                <p className="text-sm leading-relaxed text-[var(--text-muted)] text-center max-w-lg mx-auto italic">
                    {product.description}
                </p>
            </div>
        </div>
    );
}
