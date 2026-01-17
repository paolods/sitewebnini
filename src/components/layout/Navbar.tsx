import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold tracking-tight">SiteWebNini</span>
                    </Link>
                    <div className="hidden md:flex gap-6">
                        <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                            Accueil
                        </Link>
                        <Link href="/#products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                            Galerie
                        </Link>
                        <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                            À propos
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="rounded-full p-2 hover:bg-accent/10 transition-colors">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="sr-only">Panier</span>
                    </button>
                    <button className="md:hidden rounded-full p-2 hover:bg-accent/10 transition-colors">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
