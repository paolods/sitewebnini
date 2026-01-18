"use client";

import { useState } from "react";
import { ShoppingCart, Zap, Heart } from "lucide-react";
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
    // Use product-specific sizes
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
        <div className="flex flex-col gap-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-serif font-bold text-foreground">
                    {product.name}
                </h1>
                <p className="text-lg text-muted-foreground italic font-serif">
                    {product.subtitle}
                </p>
                <div className="flex items-center gap-4 py-2 border-y border-border/50">
                    <p className="text-3xl font-bold text-[var(--price-red)]">
                        {formatPrice(product.price)}
                    </p>
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest bg-[var(--off-white)] px-2 py-1 rounded">
                        TTC
                    </span>
                </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <label className="text-sm font-bold uppercase tracking-wider text-foreground">
                        Taille : <span className="text-[var(--price-red)]">{selectedSize}</span>
                    </label>
                    <Link href="#" className="text-xs text-muted-foreground underline hover:text-foreground">Guide des tailles</Link>
                </div>
                <div className="flex flex-wrap gap-3">
                    {availableSizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`h-12 w-12 flex items-center justify-center rounded-lg border-2 font-bold transition-all ${selectedSize === size
                                ? "border-[var(--price-red)] bg-white text-[var(--price-red)] shadow-sm"
                                : "border-transparent bg-[var(--off-white)] text-muted-foreground hover:border-gray-300"
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-foreground">
                    Quantité
                </label>
                <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border rounded-lg bg-[var(--off-white)]">
                        <button
                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            className="px-4 py-2 hover:text-[var(--price-red)] transition-colors font-bold"
                        >-</button>
                        <span className="px-4 py-2 font-bold w-12 text-center">{quantity}</span>
                        <button
                            onClick={() => setQuantity(q => q + 1)}
                            className="px-4 py-2 hover:text-[var(--price-red)] transition-colors font-bold"
                        >+</button>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-4">
                <button
                    onClick={handleAddToCart}
                    className={`flex items-center justify-center gap-3 w-full py-4 rounded-card font-bold uppercase tracking-widest transition-all shadow-soft ${addedToCart
                        ? "bg-green-600 text-white"
                        : "bg-[var(--price-red)] text-white hover:bg-red-800"}`}
                >
                    <ShoppingCart className="h-5 w-5" />
                    {addedToCart ? "Ajouté !" : "Ajouter au Panier"}
                </button>
                <button
                    onClick={handleBuyNow}
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-card font-bold uppercase tracking-widest bg-black text-white hover:bg-gray-900 transition-all shadow-soft"
                >
                    <Zap className="h-5 w-5" />
                    Acheter maintenant
                </button>
            </div>

            <div className="flex items-center gap-6 pt-2">
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-[var(--price-red)] transition-colors">
                    <Heart className="h-4 w-4" />
                    Ajouter à ma liste
                </button>
            </div>

            {/* Trust Badges Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border/50">
                <div className="flex items-start gap-3">
                    <div className="bg-[var(--soft-pink)] p-2 rounded-full text-[var(--price-red)]">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-foreground">Livraison Rapide</p>
                        <p className="text-[10px] text-muted-foreground italic">48h/72h chez vous</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="bg-[var(--soft-pink)] p-2 rounded-full text-[var(--price-red)]">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-foreground">100% Sécurisé</p>
                        <p className="text-[10px] text-muted-foreground italic">Visa, MC, PayPal</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="bg-[var(--soft-pink)] p-2 rounded-full text-[var(--price-red)]">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-foreground">Service Client</p>
                        <p className="text-[10px] text-muted-foreground italic">À votre écoute</p>
                    </div>
                </div>
            </div>

            {/* Quote Section */}
            <div className="pt-8 space-y-4">
                <div className="flex items-center gap-2 text-[var(--price-red)] uppercase font-bold text-xs tracking-widest">
                    <span className="h-px w-8 bg-[var(--price-red)]"></span>
                    <span>L'Inspiration</span>
                </div>
                <div className="relative bg-[var(--off-white)] p-8 rounded-card overflow-hidden group">
                    {/* Decorative quotes */}
                    <span className="absolute -top-4 -left-2 text-8xl font-serif text-[var(--soft-pink)] opacity-50 pointer-events-none">“</span>

                    <p className="relative z-10 text-2xl font-serif italic text-foreground leading-relaxed text-center">
                        {product.quote}
                    </p>

                    <div className="mt-6 flex flex-col items-center gap-2 relative z-10">
                        <div className="h-px w-12 bg-border"></div>
                        <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">
                            Les béatitudes — Mt 5, 1-12
                        </p>
                    </div>

                    {/* Floating subtle circle decoration */}
                    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[var(--soft-pink)] rounded-full opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                </div>

                {/* Description */}
                <div className="pt-4">
                    <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
