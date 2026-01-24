import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ShoppingBag, ArrowRight, Sparkles, Flame } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-soft pb-32 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-8 pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-soft/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent-sage/25 rounded-full blur-[140px]"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full shadow-soft border border-border-soft mb-10 transform hover:scale-105 transition-soft">
              <Sparkles className="h-4 w-4 text-accent-vibrant" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-text-kawaii-pink">
                Édition Limitée Artisanale
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif text-text-main mb-10 leading-[1.1] tracking-tight">
              Des trésors doux pour <br />
              <span className="text-accent-vibrant italic">inspirer votre monde</span>
            </h1>

            <p className="max-w-2xl mx-auto text-text-muted text-xl mb-14 leading-relaxed font-medium">
              "Chaque création est imaginée comme une caresse pour l'âme, <br /> façonnée avec patience dans notre petit atelier."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/collections/beatshirts"
                className="group bg-accent-vibrant text-white px-14 py-6 rounded-full font-bold uppercase tracking-[0.25em] text-[11px] shadow-kawaii hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-3"
              >
                Découvrir la collection
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-soft" />
              </Link>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <Link
                  href="/a-propos"
                  className="bg-white/80 backdrop-blur-md text-text-main border-2 border-border-soft px-12 py-6 rounded-full font-bold uppercase tracking-[0.25em] text-[11px] hover:bg-white hover:border-accent-soft transition-all shadow-soft"
                >
                  Notre histoire
                </Link>
                <Link
                  href="/concept"
                  className="text-[11px] font-black uppercase tracking-[0.3em] text-text-muted hover:text-accent-vibrant transition-soft border-b-2 border-transparent hover:border-accent-vibrant pb-1"
                >
                  Le Concept
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <main className="container mx-auto px-8 max-w-[1600px]">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8 border-b border-border-soft/50 pb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-text-main">Nos Petites Pépites</h2>
          </div>
          <div className="text-xs text-text-muted font-bold italic">{products.length} merveilles en stock</div>
        </div>

        {/* FORCE GRID COLS */}
        <div className="grid gap-x-8 gap-y-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Concept Highlight Section */}
      <section className="container mx-auto px-8 mt-48 max-w-5xl">
        <div className="bg-accent-cream/50 rounded-kawaii p-12 md:p-20 border border-border-soft flex flex-col md:flex-row items-center gap-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-soft/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-soft border border-border-soft">
            <Flame className="h-12 w-12 md:h-16 md:w-16 text-accent-vibrant animate-pulse" />
          </div>

          <div className="space-y-6 text-center md:text-left relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-text-main leading-tight">Le Concept : <span className="text-accent-vibrant italic">Portés par l'Esprit</span></h2>
            <p className="text-lg text-text-muted leading-relaxed">
              "Chaque t-shirt est une prière portée par le souffle de l'Esprit Saint. Nous créons pour la gloire de Jésus, en laissant Sa lumière guider nos mains."
            </p>
            <Link
              href="/concept"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-text-kawaii-pink hover:text-accent-vibrant transition-soft"
            >
              Découvrir notre vision <Sparkles className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-8 mt-48 max-w-5xl">
        <div className="bg-white rounded-kawaii py-24 px-12 shadow-soft border border-border-soft/50 flex flex-col items-center text-center relative overflow-hidden group">
          <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-8 max-w-2xl">
            Voulez-vous un peu de douceur ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input type="email" placeholder="Mon adresse douillette..." className="flex-1 bg-bg-kawaii border border-border-soft rounded-full px-8 py-4 text-sm" />
            <button className="bg-text-main text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.25em] text-[11px]">M'inscrire</button>
          </div>
        </div>
      </section>
    </div>
  );
}
