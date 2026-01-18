import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm text-muted-foreground">
        <nav className="flex items-center gap-2">
          <Link href="/" className="hover:text-foreground">Accueil</Link>
          <span>/</span>
          <span className="text-foreground font-medium uppercase font-serif">Béatshirts</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar reminder */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="bg-[var(--off-white)] p-6 rounded-card border border-border shadow-soft">
            <h3 className="font-serif font-bold text-xl uppercase mb-6 flex items-center gap-2">
              Menu
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/" className="text-[var(--price-red)] font-bold flex items-center justify-between">
                  <span>Accueil</span>
                  <span className="text-xs">➔</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--price-red)] transition-colors flex items-center justify-between">
                  <span>Béatshirts Classiques</span>
                  <span className="text-muted-foreground">+</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--price-red)] transition-colors flex items-center justify-between">
                  <span>Nouveautés</span>
                  <span className="text-muted-foreground">+</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--price-red)] transition-colors flex items-center justify-between">
                  <span>Accessoires</span>
                  <span className="text-muted-foreground">+</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--price-red)] transition-colors flex items-center justify-between">
                  <span>E-Cartes</span>
                  <span className="text-muted-foreground">+</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-6 rounded-card border-2 border-dashed border-[var(--soft-pink)] bg-[var(--soft-pink)]/20">
            <h4 className="font-serif font-bold text-[var(--price-red)] mb-2">Besoin d'aide ?</h4>
            <p className="text-xs text-muted-foreground italic mb-4">Une question sur nos produits ou votre commande ?</p>
            <Link href="/contact" className="text-xs font-bold uppercase underline hover:text-[var(--price-red)]">Contactez-nous</Link>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-serif font-bold text-foreground uppercase tracking-tight mb-2">Nos Béatshirts</h1>
            <div className="h-1 w-20 bg-[var(--price-red)] mx-auto md:mx-0"></div>
          </div>

          <div className="mb-8 flex items-center justify-between bg-[var(--off-white)] p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Il y a {products.length} produits.</p>
            <div className="flex items-center gap-4">
              <label htmlFor="sort" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Trier par :
              </label>
              <select
                id="sort"
                className="rounded border border-border bg-white px-3 py-1.5 text-xs shadow-sm focus:outline-none"
              >
                <option>Pertinence</option>
                <option>Prix, croissant</option>
                <option>Prix, décroissant</option>
                <option>Nom, A à Z</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group flex flex-col bg-white rounded-card border border-border shadow-soft overflow-hidden transition-all hover:translate-y-[-8px] hover:shadow-xl"
              >
                {/* Product Image Area */}
                <div className="relative aspect-square w-full overflow-hidden bg-[var(--off-white)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Quick badges could go here */}
                </div>

                {/* Info Container - White Background */}
                <div className="p-4 flex flex-col items-center text-center bg-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    Béatshirts
                  </span>
                  <h3 className="text-sm font-serif font-bold text-foreground line-clamp-2 mb-2 min-h-[40px]">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-[var(--price-red)]">
                    {formatPrice(product.price)}
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
