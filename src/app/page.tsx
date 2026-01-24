import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { ShoppingBag, ArrowRight, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-soft)] pb-24">
      {/* Hero Section - Soft & Illustrative */}
      <section className="relative px-6 pt-12 pb-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--accent-soft)] rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[var(--accent-sage)] rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm mb-6 border border-[var(--border-soft)]">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-kawaii-pink)]">
              ✨ Créations Artisanales ✨
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-[var(--text-main)] mb-8 leading-tight">
            Des trésors doux pour <br />
            <span className="text-[var(--accent-vibrant)]">inspirer votre monde</span>
          </h1>

          <p className="max-w-xl mx-auto text-[var(--text-muted)] text-lg mb-10 italic">
            "Chaque Béatshirt est imaginé et créé dans notre petit atelier avec une attention particulière portée à la douceur et au sens."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/collections/beatshirts"
              className="bg-[var(--accent-vibrant)] text-white px-10 py-4 rounded-button font-bold uppercase tracking-widest text-xs shadow-kawaii hover:scale-105 active:scale-95 transition-soft flex items-center gap-2"
            >
              Découvrir la collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/a-propos"
              className="bg-white text-[var(--text-main)] border border-[var(--border-soft)] px-10 py-4 rounded-button font-bold uppercase tracking-widest text-xs hover:bg-[var(--bg-kawaii)] transition-soft shadow-sm"
            >
              Notre histoire
            </Link>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <main className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-4 border-b border-[var(--border-soft)] pb-6">
          <div>
            <h2 className="text-3xl font-serif text-[var(--text-main)]">Nos Petites Pépites</h2>
            <p className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] mt-1">Sélectionnées avec douceur</p>
          </div>

          <div className="flex items-center gap-8">
            <span className="text-xs text-[var(--text-muted)] font-medium">{products.length} produits merveilleux</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-muted)]">Trier :</span>
              <select className="bg-transparent text-[10px] uppercase font-bold tracking-widest text-[var(--text-main)] focus:outline-none cursor-pointer">
                <option>Nouveautés</option>
                <option>Prix doux</option>
              </select>
            </div>
          </div>
        </div>

        {/* Breathable Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col bg-white rounded-card-kawaii border border-[var(--border-soft)] shadow-soft overflow-hidden transition-soft hover:shadow-kawaii hover:-translate-y-2"
            >
              {/* Image Area - Pure & Soft */}
              <Link href={`/products/${product.id}`} className="relative aspect-square w-full overflow-hidden bg-[var(--bg-kawaii)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-soft group-hover:scale-110 p-4"
                />

                {/* Visual Flair */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-soft">
                  <button className="bg-white/80 backdrop-blur-md p-2 rounded-full shadow-sm hover:text-[var(--accent-vibrant)] text-[var(--text-muted)]">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-soft">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--text-kawaii-pink)]">Aperçu rapide</span>
                </div>
              </Link>

              {/* Info Container - Clean & Breathable */}
              <div className="p-6 flex flex-col items-center text-center">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">
                  Atelier Béatshirts
                </span>
                <Link href={`/products/${product.id}`}>
                  <h3 className="text-sm md:text-md font-serif font-bold text-[var(--text-main)] mb-3 line-clamp-2 hover:text-[var(--text-kawaii-pink)] transition-soft leading-snug min-h-[40px]">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex flex-col items-center gap-3 w-full">
                  <p className="text-lg font-bold text-[var(--price-pink)] font-serif">
                    {formatPrice(product.price)}
                  </p>

                  <button className="w-full mt-2 py-2.5 bg-[var(--bg-kawaii)] text-[var(--text-kawaii-pink)] rounded-button text-[10px] font-bold uppercase tracking-widest border border-[var(--border-soft)] hover:bg-[var(--accent-vibrant)] hover:text-white hover:border-transparent transition-soft flex items-center justify-center gap-2">
                    <ShoppingBag className="h-3.5 w-3.5" />
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Reassuring Section */}
      <section className="container mx-auto px-6 mt-32">
        <div className="bg-white rounded-kawaii py-16 px-8 shadow-soft border border-[var(--border-soft)] flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-[var(--accent-lilac)] rounded-full flex items-center justify-center mb-8">
            <ShoppingBag className="h-10 w-10 text-[var(--text-kawaii-pink)]" />
          </div>
          <h2 className="text-4xl font-serif text-[var(--text-main)] mb-6">Prêt à porter un peu de douceur ?</h2>
          <p className="text-[var(--text-muted)] max-w-lg mb-10 italic">
            "Rejoignez notre petite communauté et laissez chaque vêtement vous rappeler la beauté des choses simples."
          </p>
          <button className="bg-[var(--text-main)] text-white px-12 py-4 rounded-button font-bold uppercase tracking-widest text-xs shadow-lg hover:scale-105 active:scale-95 transition-soft">
            Inscrivez-vous à la gazette
          </button>
        </div>
      </section>
    </div>
  );
}
