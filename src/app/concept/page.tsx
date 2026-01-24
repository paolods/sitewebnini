import { Flame, Star, Wind, Anchor, Sparkles } from "lucide-react";

export default function ConceptPage() {
    return (
        <div className="min-h-screen bg-bg-soft pb-32">
            {/* Concept Hero */}
            <section className="relative pt-24 pb-20 text-center px-8">
                <div className="container mx-auto max-w-4xl">
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-text-kawaii-pink mb-6 block">
                        Notre Vision Spirituelle
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-text-main mb-8 leading-tight">
                        Le Concept <br />
                        <span className="text-accent-vibrant italic">Béatshirts</span>
                    </h1>
                </div>
            </section>

            <main className="container mx-auto px-8 max-w-5xl space-y-32">
                {/* Main Pillar: The Holy Spirit */}
                <div className="bg-white rounded-kawaii p-12 md:p-20 shadow-soft border border-border-soft/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-soft/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-32 h-32 md:w-48 md:h-48 bg-bg-kawaii rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-inner">
                            <Flame className="h-16 w-16 md:h-24 md:w-24 text-accent-vibrant animate-pulse" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-serif text-text-main leading-tight">Inspirés par le Souffle</h2>
                            <p className="text-lg text-text-muted leading-relaxed italic">
                                "Le concept de Béatshirts n'est pas une simple idée marketing, c'est une obéissance au chemin que le Seigneur trace pour nous."
                            </p>
                            <p className="text-lg text-text-muted leading-relaxed">
                                Nous croyons que la créativité est un don divin. C'est pourquoi chaque design est imaginé dans un temps de silence et d'écoute, nous laissant porter par <strong>l'Esprit Saint</strong>. Nous ne cherchons pas à suivre les tendances, mais à capturer un éclat de Sa Lumière.
                            </p>
                        </div>
                    </div>
                </div>

                {/* The 3 Pillars of the Concept */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-6 p-8 hover:bg-white rounded-card-kawaii transition-soft group">
                        <div className="w-16 h-16 bg-accent-cream mx-auto rounded-full flex items-center justify-center border border-border-soft group-hover:scale-110 transition-soft">
                            <Wind className="h-8 w-8 text-text-muted" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-text-main">L'Abandon</h3>
                        <p className="text-sm text-text-muted leading-relaxed">Se laisser guider sans plan préconçu, en faisant confiance à l'inspiration que Dieu dépose en nous.</p>
                    </div>

                    <div className="space-y-6 p-8 hover:bg-white rounded-card-kawaii transition-soft group">
                        <div className="w-16 h-16 bg-accent-cream mx-auto rounded-full flex items-center justify-center border border-border-soft group-hover:scale-110 transition-soft">
                            <Star className="h-8 w-8 text-text-muted" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-text-main">La Gloire du Fils</h3>
                        <p className="text-sm text-text-muted leading-relaxed">Tout ce que nous faisons est tourné vers un seul but : célébrer Jésus et propager Son message de Paix.</p>
                    </div>

                    <div className="space-y-6 p-8 hover:bg-white rounded-card-kawaii transition-soft group">
                        <div className="w-16 h-16 bg-accent-cream mx-auto rounded-full flex items-center justify-center border border-border-soft group-hover:scale-110 transition-soft">
                            <Anchor className="h-8 w-8 text-text-muted" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-text-main">L'Ancrage</h3>
                        <p className="text-sm text-text-muted leading-relaxed">Prendre racine dans les Saintes Écritures pour nourrir chaque illustration et chaque mot.</p>
                    </div>
                </div>

                {/* Final Quote Box */}
                <div className="text-center space-y-10 py-20 relative">
                    <Sparkles className="h-8 w-8 text-accent-vibrant mx-auto opacity-40" />
                    <h2 className="text-4xl md:text-5xl font-serif text-text-main italic leading-tight">
                        "Créer pour évangéliser par la beauté, <br className="hidden md:block" /> et porter les couleurs du Ciel."
                    </h2>
                    <div className="h-px w-24 bg-accent-soft mx-auto"></div>
                </div>
            </main>
        </div>
    );
}
