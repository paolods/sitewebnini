import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils"; // I'll need to add this util or just format inline

export function ProductCard({ product }: { product: Product }) {
    return (
        <Link href={`/products/${product.id}`} className="group relative block overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={625}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-black backdrop-blur">
                    {product.category}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium text-foreground">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                        {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price)}
                    </span>
                    <span className="text-sm font-medium text-accent hover:underline">Voir détails</span>
                </div>
            </div>
        </Link>
    );
}
