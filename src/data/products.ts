export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  subtitle: string;
  quote: string;
  sizes: string[];
  additionalImages?: string[];
}

export const products: Product[] = [
  {
    id: "beatshirt-heureux-les-doux",
    name: "Béatshirt – «Heureux les doux»",
    subtitle: "La Sainte Vierge et Catherine Labouré",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/IMG-20251001-WA0012.jpg",
    category: "Béatshirts",
    quote: "« Heureux les doux, car ils recevront la terre en héritage »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    additionalImages: ["/images/T-shirts/20251007_105622.jpg", "/images/T-shirts/20251007_105755.jpg"]
  },
  {
    id: "beatshirt-heureux-ceux-qui-pleurent",
    name: "Béatshirts – «Heureux ceux qui pleurent»",
    subtitle: "Saint-Raphaël Archange",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/IMG-20251001-WA0009.jpg",
    category: "Béatshirts",
    quote: "« Heureux ceux qui pleurent, car ils seront consolés »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    additionalImages: ["/images/T-shirts/20251007_105413.jpg", "/images/T-shirts/20251007_105455.jpg"]
  },
  {
    id: "beatshirt-heureux-les-misericordieux",
    name: "Béatshirts –«Heureux les miséricordieux»",
    subtitle: "Sainte Vierge",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/IMG-20251001-WA0015.jpg",
    category: "Béatshirts",
    quote: "« Heureux les miséricordieux, car ils obtiendront miséricorde »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    additionalImages: ["/images/T-shirts/20251007_105913.jpg", "/images/T-shirts/20251007_105921.jpg"]
  },
  {
    id: "beatshirt-heureux-les-coeurs-purs",
    name: "Béatshirts – «Heureux les Cœurs purs»",
    subtitle: "Sacré Cœur de Jésus",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/IMG-20251001-WA0016.jpg",
    category: "Béatshirts",
    quote: "« Heureux les Cœurs purs, car ils verront Dieu »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    additionalImages: ["/images/T-shirts/20251007_110017.jpg", "/images/T-shirts/20251007_110024.jpg"]
  },
  {
    id: "beatshirt-heureux-artisans-paix",
    name: "Béatshirts – «Heureux les artisans de Paix»",
    subtitle: "Saint-Michel Archange",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/IMG-20251001-WA0017.jpg",
    category: "Béatshirts",
    quote: "« Heureux les artisans de Paix, car ils seront appelés fils de Dieu »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    additionalImages: ["/images/T-shirts/20251007_110332.jpg", "/images/T-shirts/20251007_110407.jpg", "/images/T-shirts/20251007_110621.jpg"]
  },
  {
    id: "beatshirt-heureux-ont-faim-soif-justice",
    name: "Béatshirts – «Heureux ceux qui ont faim et soif de la justice»",
    subtitle: "Sainte Trinité",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/IMG-20251001-WA0013.jpg",
    category: "Béatshirts",
    quote: "« Heureux ceux qui ont faim et soif de la justice, car ils seront rassasiés »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    additionalImages: ["/images/T-shirts/20251007_110219.jpg", "/images/T-shirts/20251007_110234.jpg"]
  },
  {
    id: "beatshirt-heureux-persecutes",
    name: "Béatshirts – «Heureux les persécutés»",
    subtitle: "Sainte Famille",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/IMG-20251001-WA0018.jpg",
    category: "Béatshirts",
    quote: "« Heureux ceux qui sont persécutés pour la justice, car le royaume des Cieux est à eux »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    additionalImages: []
  },
  {
    id: "beatshirt-heureux-recompense-grande",
    name: "Béatshirts – «Votre récompense est grande»",
    subtitle: "Plénitude et Allégresse",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/IMG-20251001-WA0019.jpg",
    category: "Béatshirts",
    quote: "« Réjouissez-vous, soyez dans l'allégresse, car votre récompense est grande dans les cieux »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    additionalImages: []
  }
];
