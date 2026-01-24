import Image from "next/image";
import { Sparkles, Heart, Scissors, PenTool, Flame } from "lucide-react";

export default function AtelierPage() {
    return (
        <div className="min-h-screen bg-bg-soft pb-32">
            {/* Story Hero */}
            <section className="relative pt-24 pb-32 overflow-hidden px-8">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-10 right-10 w-96 h-96 bg-accent-soft/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-sage/20 rounded-full blur-[100px]"></div>
                </div>

                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-text-kawaii-pink mb-8 block">
                        Notre Histoire & Concept
                    </span>
                    <h1 className="text-6xl md:text-8xl font-serif text-text-main mb-12 leading-tight">
                        L'Âme de <br />
                        <span className="text-accent-vibrant italic">Béatshirts</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted italic max-w-3xl mx-auto leading-relaxed">
                        "Une rencontre bénie, unie par l'amour du Christ, pour créer dans le souffle de l'Esprit."
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            <main className="container mx-auto px-8 max-w-6xl space-y-48">
                {/* Section 1: The Meeting */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div className="relative aspect-[4/5] rounded-kawaii overflow-hidden shadow-kawaii group border-8 border-white">
                        <Image
                            src="/images/logo/1000166046.jpg"
                            alt="Atelier"
                            fill
                            className="object-cover transition-soft group-hover:scale-110"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="h-px w-20 bg-accent-vibrant"></div>
                        <h2 className="text-4xl md:text-5xl font-serif text-text-main leading-tight">
                            Deux Chemins, <br /> une seule Foi
                        </h2>
                        <p className="text-lg text-text-muted leading-relaxed">
                            L'histoire de Béatshirts est avant tout celle d'une rencontre. Deux chrétiens portés par un même amour pour le Christ, dont les cœurs se sont trouvés pour ne plus former qu'une seule vision.
                        </p>
                        <p className="text-lg text-text-muted leading-relaxed italic">
                            De cette union est née une évidence : mettre en commun nos fibres artistiques et nos talents créatifs pour servir Sa gloire. Chaque dessin, chaque mot, est le fruit de cette synergie née dans la prière.
                        </p>
                    </div>
                </div>

                {/* Section 2: The Concept */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 space-y-8">
                        <div className="h-px w-20 bg-accent-vibrant"></div>
                        <h2 className="text-4xl md:text-5xl font-serif text-text-main leading-tight">
                            Le Souffle de <br /> l'Esprit Saint
                        </h2>
                        <p className="text-lg text-text-muted leading-relaxed">
                            Notre concept n'est pas simplement de créer des vêtements. C'est de nous laisser porter, jour après jour, par le souffle de l'Esprit Saint.
                        </p>
                        <p className="text-lg text-text-muted leading-relaxed font-medium text-text-kawaii-pink">
                            Nous créons comme nous prions : avec abandon et douceur. Chaque Béatitude choisie est une invitation à laisser Dieu agir dans nos vies.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 relative aspect-square bg-white rounded-kawaii flex items-center justify-center shadow-soft border border-border-soft overflow-hidden">
                        <div className="absolute inset-0 bg-accent-cream opacity-50"></div>
                        <Flame className="h-48 w-48 text-accent-soft relative z-10 animate-pulse" />
                    </div>
                </div>

                {/* Values Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-soft border border-border-soft">
                            <Scissors className="h-8 w-8 text-accent-vibrant" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-text-main">Fait main</h3>
                        <p className="text-sm text-text-muted leading-relaxed">Chaque pièce est manipulée avec soin, de la découpe à l'emballage final.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-soft border border-border-soft">
                            <PenTool className="h-8 w-8 text-accent-vibrant" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-text-main">Design Unique</h3>
                        <p className="text-sm text-text-muted leading-relaxed">Nos illustrations sont exclusives et inspirées de l'art sacré revisité.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-soft border border-border-soft">
                            <Heart className="h-8 w-8 text-accent-vibrant" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-text-main">Pour Sa Gloire</h3>
                        <p className="text-sm text-text-muted leading-relaxed">Chaque création est dédiée à Jésus, pour porter Sa lumière dans le monde.</p>
                    </div>
                </div>

                {/* Closing quote */}
                <div className="text-center bg-white py-24 px-12 rounded-kawaii shadow-soft border border-border-soft/50 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-accent-vibrant to-transparent"></div>
                    <Sparkles className="h-10 w-10 text-accent-vibrant mx-auto mb-10 opacity-50" />
                    <h2 className="text-4xl md:text-5xl font-serif text-text-main italic mb-10">
                        "En portant un Béatshirt, vous ne portez pas qu'un t-shirt, <br className="hidden md:block" /> vous devenez un messager de Sa douceur."
                    </h2>
                    <div className="h-px w-32 bg-border-soft mx-auto"></div>
                </div>
            </main>
        </div>
    );
}
