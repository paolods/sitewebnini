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
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted bg-accent-cream px-4 py-1.5 rounded-full border border-border-soft">
                        Maison Béatshirts
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif text-text-main leading-tight">
                    {product.name}
                </h1>

                <p className="text-lg text-text-muted italic font-serif">
                    {product.subtitle}
                </p>

                <div className="flex items-center gap-6 py-6 border-y border-border-soft/50">
                    <p className="text-4xl font-serif font-bold text-price-pink">
                        {formatPrice(product.price)}
                    </p>
                    <span className="text-[10px] text-text-muted font-black uppercase tracking-widest bg-bg-kawaii px-4 py-1.5 rounded-full">
                        TVA Incluse
                    </span>
                </div>
            </div>

            {/* Size Selector - Soft Circles */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <label className="text-[11px] font-black uppercase tracking-wider text-text-main">
                        Choisir ma taille : <span className="text-text-kawaii-pink ml-1">{selectedSize}</span>
                    </label>
                    <button className="text-[10px] text-text-muted underline hover:text-text-main transition-soft font-bold">Guide des tailles</button>
                </div>
                <div className="flex flex-wrap gap-4">
                    {availableSizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`h-14 w-14 flex items-center justify-center rounded-full border-2 font-black text-xs transition-soft ${selectedSize === size
                                ? "border-accent-vibrant bg-white text-accent-vibrant shadow-kawaii scale-105"
                                : "border-transparent bg-accent-cream text-text-muted hover:border-border-soft"
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity - Squishy Buttons */}
            <div className="space-y-4">
                <label className="text-[11px] font-black uppercase tracking-wider text-text-main">
                    Quantité
                </label>
                <div className="flex items-center gap-4">
                    <div className="flex items-center bg-bg-kawaii rounded-full border border-border-soft overflow-hidden">
                        <button
                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            className="px-6 py-4 hover:bg-accent-soft/20 text-text-muted hover:text-price-pink transition-soft font-black"
                        >—</button>
                        <span className="px-6 py-4 font-black w-16 text-center text-sm text-text-main">{quantity}</span>
                        <button
                            onClick={() => setQuantity(q => q + 1)}
                            className="px-6 py-4 hover:bg-accent-soft/20 text-text-muted hover:text-price-pink transition-soft font-black"
                        >+</button>
                    </div>
                </div>
            </div>

            {/* Actions - Welcoming buttons - WHITE STYLE RESTORED */}
            <div className="flex flex-col gap-4 pt-6">
                <button
                    onClick={handleAddToCart}
                    className={`flex items-center justify-center gap-4 w-full py-6 rounded-full font-black uppercase tracking-[0.2em] text-[11px] border-2 transition-soft shadow-soft active:scale-95 ${addedToCart
                        ? "bg-green-500 text-white border-transparent"
                        : "bg-white text-accent-vibrant border-accent-vibrant hover:bg-accent-vibrant hover:text-white hover:shadow-kawaii"}`}
                >
                    <ShoppingBag className={`h-5 w-5 ${addedToCart ? "text-white" : "text-accent-vibrant group-hover:text-white"}`} />
                    {addedToCart ? "Trésor Ajouté !" : "Ajouter au Panier"}
                </button>
                <button
                    onClick={handleBuyNow}
                    className="flex items-center justify-center gap-4 w-full py-6 rounded-full font-black uppercase tracking-[0.2em] text-[11px] bg-white text-text-main border-2 border-text-main hover:bg-text-main hover:text-white hover:shadow-xl transition-soft active:scale-95 group"
                >
                    <Zap className="h-5 w-5 text-text-main group-hover:text-yellow-300 transition-soft fill-current group-hover:fill-yellow-300" />
                    Achat Direct
                </button>
            </div>

            <div className="flex flex-col items-center gap-4 mt-2">
                <button className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-accent-vibrant transition-soft">
                    <Heart className="h-4 w-4" />
                    Ajouter à ma liste de souhaits
                </button>
                <Link href="/concept" className="text-[10px] text-text-muted italic hover:text-accent-vibrant transition-soft underline decoration-accent-soft underline-offset-4">
                    Comprendre le Concept Béatshirts
                </Link>
            </div>

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
