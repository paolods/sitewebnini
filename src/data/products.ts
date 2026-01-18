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
}

export const products: Product[] = [
  {
    id: "beatshirt-heureux-les-doux",
    name: "Béatshirt – «Heureux les doux»",
    subtitle: "La Sainte Vierge et Catherine Labouré",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/heureux-les-doux.jpg",
    category: "Béatshirts",
    quote: "« Heureux les doux, car ils recevront la terre en héritage »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: "beatshirt-heureux-ceux-qui-pleurent",
    name: "Béatshirts – «Heureux ceux qui pleurent»",
    subtitle: "Saint-Raphaël Archange",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/heureux-ceux-qui-pleurent.jpg",
    category: "Béatshirts",
    quote: "« Heureux ceux qui pleurent, car ils seront consolés »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: "beatshirt-heureux-les-misericordieux",
    name: "Béatshirts –«Heureux les miséricordieux»",
    subtitle: "Sainte Vierge",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/heureux-les-misericordieux.jpg",
    category: "Béatshirts",
    quote: "« Heureux les miséricordieux, car ils obtiendront miséricorde »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: "beatshirt-heureux-les-coeurs-purs",
    name: "Béatshirts – «Heureux les Cœurs purs»",
    subtitle: "Sainte Trinité",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/heureux-les-coeurs-purs.jpg",
    category: "Béatshirts",
    quote: "« Heureux les Cœurs purs, car ils verront Dieu »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: "beatshirt-heureux-artisans-paix",
    name: "Béatshirts – «Heureux les artisans de Paix»",
    subtitle: "Saint Michel Archange",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/heureux-artisans-paix.jpg",
    category: "Béatshirts",
    quote: "« Heureux les artisans de Paix, car ils seront appelés fils de Dieu »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: "beatshirt-heureux-ont-faim-soif-justice",
    name: "Béatshirts – «Heureux ceux qui ont faim et soif de la justice»",
    subtitle: "Sainte Trinité",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/heureux-faim-soif-justice.jpg",
    category: "Béatshirts",
    quote: "« Heureux ceux qui ont faim et soif de la justice, car ils seront rassasiés »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: "beatshirt-heureux-pauvres-coeur",
    name: "Béatshirts – «Heureux les pauvres de cœur»",
    subtitle: "Saint François d'Assise",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/heureux-pauvres-coeur.jpg",
    category: "Béatshirts",
    quote: "« Heureux les pauvres de cœur, car le royaume des Cieux est à eux »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: "beatshirt-heureux-persecutes",
    name: "Béatshirts – «Heureux les persécutés»",
    subtitle: "Sainte Jeanne d'Arc",
    price: 14.00,
    description: "Inspirés des paroles de Jésus dans l'Évangile selon Matthieu, nos t-shirts mettent en lumière les Béatitudes, messages intemporels d'espérance, de douceur et de foi.",
    image: "/images/heureux-persecutes.jpg",
    category: "Béatshirts",
    quote: "« Heureux les persécutés pour la justice, car le royaume des Cieux est à eux »",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  }
];
