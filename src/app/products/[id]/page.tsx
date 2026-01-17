import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { ArrowLeft, Check, Share2, ShoppingCart } from "lucide-react";

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
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
                href="/#products"
                className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à la galerie
            </Link>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
                {/* Product Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted shadow-sm">
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
                        <h1 className="text-4xl font-bold tracking-tight text-foreground">{product.name}</h1>
                        <p className="mt-2 text-lg text-muted-foreground">{product.category}</p>
                    </div>

                    <div className="mb-8">
                        <p className="text-3xl font-bold text-primary">{formatPrice(product.price)}</p>
                    </div>

                    <div className="mb-8 prose prose-zinc dark:prose-invert">
                        <h3 className="text-lg font-semibold">Description</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button className="flex flex-1 items-center justify-center rounded-full bg-primary py-4 px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Ajouter au panier
                        </button>
                        <button className="flex items-center justify-center rounded-full border border-input bg-background py-4 px-4 text-primary shadow-sm hover:bg-accent hover:text-accent-foreground">
                            <Share2 className="h-5 w-5" />
                            <span className="sr-only">Partager</span>
                        </button>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4" />
                        <span>En stock, expédition sous 48h</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
