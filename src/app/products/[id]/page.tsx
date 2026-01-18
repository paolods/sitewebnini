"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { ArrowLeft, Share2, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <Link
                href="/"
                className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au catalogue
            </Link>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
                {/* Product Image - Circular */}
                <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-full bg-muted shadow-lg">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-center">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">
                            {product.name}
                        </h1>
                        <p className="mt-2 text-lg text-muted-foreground">{product.subtitle}</p>
                    </div>

                    <div className="mb-8">
                        <p className="text-3xl font-bold text-foreground">{formatPrice(product.price)}</p>
                    </div>

                    {/* Size Selector */}
                    <SizeSelector sizes={product.sizes} />

                    <div className="mb-8 mt-6">
                        <p className="text-sm font-medium text-green-600">En stock</p>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="mb-8">
                        <button className="w-full rounded-md bg-teal-600 py-4 px-8 text-base font-medium text-white shadow transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600">
                            <ShoppingCart className="mr-2 inline h-5 w-5" />
                            Ajouter au Panier
                        </button>
                    </div>

                    {/* Product Details Section */}
                    <div className="mb-8">
                        <h3 className="mb-3 text-lg font-semibold">Détails du produit</h3>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            {product.description}
                        </p>
                        <p className="mt-4 text-base leading-relaxed italic text-muted-foreground">
                            Plus qu'un simple vêtement, chaque modèle devient une invitation à{" "}
                            <em>vivre et partager ces paroles dans votre quotidien</em>.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Que ce soit pour affirmer votre foi, offrir un cadeau porteur de sens, ou simplement diffuser
                            un message d'amour et d'espérance.
                        </p>
                    </div>

                    {/* Biblical Quote */}
                    <div className="mb-8 border-l-4 border-teal-600 bg-muted/50 py-4 px-6">
                        <p className="text-xl font-serif italic text-foreground">{product.quote}</p>
                        <p className="mt-2 text-sm text-muted-foreground">Les béatitudes Mt 5, 1-12</p>
                    </div>

                    {/* Share Buttons */}
                    <div className="mb-6">
                        <p className="mb-3 text-sm font-medium">Partagez votre achat avec vos amis</p>
                        <div className="flex gap-3">
                            <button className="rounded-md border border-input bg-background p-2 hover:bg-accent">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </button>
                            <button className="rounded-md border border-input bg-background p-2 hover:bg-accent">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </button>
                            <button className="rounded-md border border-input bg-background p-2 hover:bg-accent">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Size Selector Component
function SizeSelector({ sizes }: { sizes: string[] }) {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    return (
        <div>
            <label className="mb-3 block text-sm font-medium">Taille</label>
            <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`rounded border px-4 py-2 text-sm font-medium transition-colors ${selectedSize === size
                                ? "border-teal-600 bg-teal-600 text-white"
                                : "border-input bg-background hover:border-teal-600"
                            }`}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
}
