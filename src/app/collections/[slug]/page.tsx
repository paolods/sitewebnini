import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { notFound } from "next/navigation";

interface CollectionPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function CollectionPage({ params }: CollectionPageProps) {
    const { slug } = await params;

    // Mapping slugs to titles and filters
    const collectionData: Record<string, { title: string; description: string; filter?: (p: any) => boolean }> = {
        "nouveautes": {
            title: "Nouveautés ✨",
            description: "Les dernières pépites douces sorties de notre atelier.",
            // For now, all products are new as it's a new site
            filter: (p) => true,
        },
        "beatshirts": {
            title: "Les Béatshirts",
            description: "Porter la foi avec élégance et une infinie douceur.",
            filter: (p) => p.category === "Béatshirts",
        }
    };

    const collection = collectionData[slug];

    if (!collection) {
        notFound();
    }

    const filteredProducts = products.filter(collection.filter || (() => true));

    return (
        <div className="min-h-screen bg-bg-soft pb-32">
            {/* Collection Header */}
            <section className="relative pt-20 pb-24 text-center px-8">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-text-kawaii-pink mb-6 block">
                        Collection Artisanale
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-text-main mb-8 leading-tight">
                        {collection.title}
                    </h1>
                    <p className="text-xl text-text-muted italic max-w-2xl mx-auto leading-relaxed">
                        "{collection.description}"
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <main className="container mx-auto px-8 max-w-[1600px]">
                <div className="flex items-center justify-between mb-16 border-b border-border-soft/50 pb-8">
                    <span className="text-xs font-bold text-text-muted uppercase tracking-widest">
                        {filteredProducts.length} merveilles trouvées
                    </span>
                </div>

                <div className="grid gap-x-8 gap-y-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export async function generateStaticParams() {
    return [
        { slug: "nouveautes" },
        { slug: "beatshirts" }
    ];
}
