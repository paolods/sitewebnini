import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden bg-black text-white">
        <Image
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000&auto=format&fit=crop"
          alt="Art Gallery Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            Élevez Votre Esprit par l'Art
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-gray-200 drop-shadow-md">
            Découvrez une collection unique de toiles spirituelles et abstraites conçues pour inspirer et apaiser.
          </p>
          <Link
            href="/#products"
            className="rounded-full bg-white px-8 py-3 text-lg font-medium text-black transition-transform hover:scale-105 hover:bg-gray-100"
          >
            Découvrir la collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="container mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Nos Créations</h2>
          <p className="mt-2 text-muted-foreground">Pièces uniques disponibles</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
