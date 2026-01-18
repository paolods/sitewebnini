import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Spiritual Message */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="mb-4 text-3xl font-serif text-foreground">
          Bienvenue dans mon univers ✨
        </h1>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Je crée des designs porteurs de sens — inspirés par la Lumière, la Paix intérieure et la beauté de l'Âme.
        </p>
        <p className="mx-auto mt-2 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Chaque création est une invitation à se reconnecter à l'Esprit, à la Vie et à l'Amour.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-base italic text-muted-foreground">
          Animae, c'est une invitation à porter ton essence et à faire vibrer ton énergie 🌿
        </p>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="sr-only">Nos Béatshirts</h2>
          <div className="ml-auto">
            <label htmlFor="sort" className="mr-2 text-sm text-muted-foreground">
              TRIER PAR
            </label>
            <select
              id="sort"
              className="rounded border border-input bg-background px-3 py-1 text-sm"
            >
              <option>Par défaut</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Nom A-Z</option>
            </select>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group flex flex-col items-center text-center transition-opacity hover:opacity-80"
            >
              {/* Circular Product Image */}
              <div className="relative mb-4 aspect-square w-full max-w-[200px] overflow-hidden rounded-full bg-muted shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                <h3 className="text-base font-medium text-foreground">
                  {product.name}
                </h3>
                <p className="text-lg font-semibold text-foreground">
                  {formatPrice(product.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-12 text-sm text-muted-foreground">
            <Link href="/account" className="flex flex-col items-center gap-2 hover:text-foreground">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Mon Compte</span>
            </Link>
            <Link href="/orders" className="flex flex-col items-center gap-2 hover:text-foreground">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Suivi de commande</span>
            </Link>
            <Link href="/cart" className="flex flex-col items-center gap-2 hover:text-foreground">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Panier</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
