import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-soft)] pb-32 overflow-x-hidden">
      {/* Hero Section - Soft, Fluid & Elegant */}
      <section className="relative px-8 pt-20 pb-32 overflow-hidden">
        {/* Abstract Fluid Shapes for Douceur */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent-soft)]/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[var(--accent-sage)]/25 rounded-full blur-[140px]"></div>
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[var(--accent-lilac)]/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full shadow-soft border border-[var(--border-soft)] mb-10 transform hover:scale-105 transition-soft">
              <Sparkles className="h-4 w-4 text-[var(--accent-vibrant)]" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[var(--text-kawaii-pink)]">
                Édition Limitée Artisanale
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif text-[var(--text-main)] mb-10 leading-[1.1] tracking-tight">
              Des trésors doux pour <br />
              <span className="text-[var(--accent-vibrant)] italic">inspirer votre monde</span>
            </h1>

            <p className="max-w-2xl mx-auto text-[var(--text-muted)] text-xl mb-14 leading-relaxed font-medium">
              "Chaque création est imaginée comme une caresse pour l'âme, <br /> façonnée avec patience dans notre petit atelier."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/collections/beatshirts"
                className="group bg-[var(--accent-vibrant)] text-white px-14 py-6 rounded-full font-bold uppercase tracking-[0.25em] text-[11px] shadow-kawaii hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-3"
              >
                Découvrir la collection
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-soft" />
              </Link>
              <Link
                href="/a-propos"
                className="bg-white/80 backdrop-blur-md text-[var(--text-main)] border-2 border-[var(--border-soft)] px-14 py-6 rounded-full font-bold uppercase tracking-[0.25em] text-[11px] hover:bg-white hover:border-[var(--accent-soft)] transition-all shadow-soft"
              >
                Notre histoire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content - EXACT GRID COLS REQUESTED */}
      <main className="container mx-auto px-8 max-w-[1600px]">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8 border-b border-[var(--border-soft)]/50 pb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-main)]">Nos Petites Pépites</h2>
            <div className="flex items-center gap-3 mt-3">
              <span className="h-1 w-12 bg-[var(--accent-soft)] rounded-full"></span>
              <p className="text-[12px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Sélectionnées avec douceur</p>
            </div>
          </div>

          <div className="flex items-center gap-12">
            <span className="text-xs text-[var(--text-muted)] font-bold italic">{products.length} merveilles en stock</span>
            <div className="flex items-center gap-3 bg-white px-6 py-2.5 rounded-full border border-[var(--border-soft)] shadow-sm">
              <span className="text-[10px] uppercase font-black tracking-widest text-[var(--text-muted)]">Trier :</span>
              <select className="bg-transparent text-[10px] uppercase font-black tracking-widest text-[var(--text-main)] focus:outline-none cursor-pointer appearance-none pr-4">
                <option>Nouveautés ✨</option>
                <option>Prix doux ☁️</option>
              </select>
            </div>
          </div>
        </div>

        {/* Breathable Grid - FORCE 5 COLS ON DESKTOP */}
        <div className="grid gap-x-12 gap-y-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Simple, Soft CTA Section */}
      <section className="container mx-auto px-8 mt-48 max-w-6xl">
        <div className="bg-white rounded-kawaii py-24 px-12 shadow-soft border border-[var(--border-soft)]/50 flex flex-col items-center text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--accent-soft)] via-[var(--accent-vibrant)] to-[var(--accent-lilac)]"></div>

          <div className="w-24 h-24 bg-[var(--accent-lilac)] rounded-full flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-soft">
            <ShoppingBag className="h-10 w-10 text-[var(--text-kawaii-pink)]" />
          </div>

          <h2 className="text-5xl md:text-6xl font-serif text-[var(--text-main)] mb-8 max-w-2xl leading-tight">
            Voulez-vous un peu de douceur dans votre boîte mail ?
          </h2>

          <p className="text-[var(--text-muted)] text-lg max-w-lg mb-12 italic leading-relaxed">
            "Rejoignez notre petite gazette et laissez chaque message vous rappeler la beauté cachée dans les cœurs simples."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Mon adresse douillette..."
              className="flex-1 bg-[var(--bg-kawaii)] border border-[var(--border-soft)] rounded-full px-8 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-[var(--accent-soft)]/30 transition-soft"
            />
            <button className="bg-[var(--text-main)] text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.25em] text-[11px] shadow-lg hover:scale-105 active:scale-95 transition-all">
              M'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
