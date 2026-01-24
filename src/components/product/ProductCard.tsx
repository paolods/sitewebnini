"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { ShoppingBag, Heart } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
    return (
        <div className="group flex flex-col items-center w-full max-w-[320px] mx-auto">
            {/* Image Card - Object Aesthetic */}
            <div className="relative aspect-square w-full rounded-card-kawaii bg-white border border-[var(--border-soft)] shadow-soft overflow-hidden transition-soft hover:shadow-kawaii hover:-translate-y-3">
                <Link href={`/products/${product.id}`} className="block w-full h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-kawaii)] to-transparent opacity-50"></div>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-soft duration-700 group-hover:scale-110 p-10"
                    />

                    {/* Visual Flair Overlays */}
                    <div className="absolute top-6 right-6 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-soft">
                        <button className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-md hover:text-[var(--accent-vibrant)] text-[var(--text-muted)] transition-soft hover:scale-110">
                            <Heart className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-soft w-[80%]">
                        <div className="bg-white/95 backdrop-blur-md py-3 rounded-full shadow-lg text-center border border-[var(--border-soft)]">
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--text-kawaii-pink)]">Découvrir le trésor</span>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Info Container - Pure Respiration */}
            <div className="mt-8 flex flex-col items-center text-center w-full px-2">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)]/60 mb-3 bg-[var(--bg-kawaii)] px-4 py-1 rounded-full">
                    Atelier France
                </span>
                <Link href={`/products/${product.id}`} className="group-hover:text-[var(--accent-vibrant)] transition-soft">
                    <h3 className="text-xl font-serif font-bold text-[var(--text-main)] mb-4 line-clamp-2 leading-tight min-h-[56px]">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex flex-col items-center gap-4 w-full">
                    <p className="text-2xl font-serif font-bold text-[var(--price-pink)] bg-[var(--accent-soft)]/20 px-6 py-1 rounded-full">
                        {formatPrice(product.price)}
                    </p>

                    <button className="w-full mt-2 py-4 bg-white text-[var(--text-kawaii-pink)] rounded-full text-[11px] font-black uppercase tracking-[0.25em] border-2 border-[var(--border-soft)] hover:bg-[var(--accent-vibrant)] hover:text-white hover:border-transparent hover:shadow-kawaii transition-soft flex items-center justify-center gap-3">
                        <ShoppingBag className="h-4 w-4" />
                        Ajouter au nid
                    </button>
                </div>
            </div>
        </div>
    );
}
