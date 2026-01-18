import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";

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
        <div className="min-h-screen bg-background pb-20">
            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground">
                <nav className="flex items-center gap-2">
                    <Link href="/" className="hover:text-foreground">Accueil</Link>
                    <span>/</span>
                    <Link href="/" className="hover:text-foreground">Béatshirts</Link>
                    <span>/</span>
                    <span className="text-foreground font-medium truncate max-w-[200px]">{product.name}</span>
                </nav>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left: Gallery */}
                    <ProductGallery
                        mainImage={product.image}
                        additionalImages={product.additionalImages || []}
                        productName={product.name}
                    />

                    {/* Right: Info Interaction */}
                    <ProductInfo product={product} />
                </div>

                {/* Related Products Section (Static/Mock for now) */}
                <div className="mt-24">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-serif font-bold text-foreground uppercase tracking-tight mb-2">Vous aimerez aussi</h2>
                        <div className="h-1 w-20 bg-[var(--price-red)] mx-auto"></div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {products.slice(0, 4).map((p) => (
                            <Link
                                key={p.id}
                                href={`/products/${p.id}`}
                                className="group flex flex-col bg-white rounded-card border border-border shadow-soft overflow-hidden transition-all hover:translate-y-[-8px]"
                            >
                                <div className="relative aspect-square w-full overflow-hidden bg-[var(--off-white)]">
                                    <Image
                                        src={p.image}
                                        alt={p.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4 flex flex-col items-center text-center">
                                    <h3 className="text-xs font-serif font-bold text-foreground line-clamp-1">
                                        {p.name}
                                    </h3>
                                    <p className="text-sm font-bold text-[var(--price-red)] mt-1">
                                        {formatPrice(p.price)}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
