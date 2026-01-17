export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "L'Éveil Spirituel",
    price: 29.99,
    description: "Une toile vibrante qui capture l'essence de la sérénité et de l'harmonie intérieure. Parfaite pour créer une atmosphère apaisante.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop",
    category: "Tableaux",
  },
  {
    id: "2",
    name: "Lumière Divine",
    price: 34.50,
    description: "Des nuances dorées et blanches s'entremêlent pour évoquer la pureté et la lumière. Une pièce maîtresse pour votre salon.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop",
    category: "Abstrait",
  },
  {
    id: "3",
    name: "Reflet de l'Âme",
    price: 45.00,
    description: "Une exploration profonde des couleurs froides, symbolisant la paix et l'introspection. Idéal pour un espace de méditation.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1000&auto=format&fit=crop",
    category: "Modern",
  },
  {
    id: "4",
    name: "Souffle de Vie",
    price: 39.99,
    description: "Une composition dynamique pleine d'énergie et de mouvement. Apportez de la vitalité à votre intérieur.",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1000&auto=format&fit=crop",
    category: "Expressionnisme",
  },
  {
    id: "5",
    name: "Harmonie Céleste",
    price: 55.00,
    description: "Un mélange subtil de textures et de formes qui invite à la rêverie. Une œuvre d'art unique pour les collectionneurs.",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop",
    category: "Tableaux",
  },
];
