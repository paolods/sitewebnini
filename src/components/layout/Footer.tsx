import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">SiteWebNini</h3>
                        <p className="text-sm text-muted-foreground">
                            Des œuvres uniques pour éveiller votre intérieur.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium">Boutique</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground">Tableaux</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Abstrait</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Nouveautés</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium">Aide</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Livraison</Link></li>
                            <li><Link href="#" className="hover:text-foreground">CGV</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium">Suivez-nous</h3>
                        <div className="flex gap-4">
                            {/* Add social icons here if needed */}
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} SiteWebNini. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
