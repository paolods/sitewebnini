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
    const [selectedSize, setSelectedSize] = useState<string>("M");
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    // Filter to requested sizes
    const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];

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

            {/* Description Section */}
            <div className="pt-8 space-y-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-[var(--price-red)] uppercase font-bold text-xs tracking-widest">
                    <span>Description</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground italic font-serif">
                    {product.description}
                </p>
                <div className="bg-[var(--off-white)] p-6 rounded-card border-l-4 border-[var(--price-red)]">
                    <p className="text-xl font-serif italic text-foreground leading-relaxed">
                        {product.quote}
                    </p>
                    <p className="mt-4 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                        Les béatitudes Mt 5, 1-12
                    </p>
                </div>
            </div>
        </div>
    );
}
