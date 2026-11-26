"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const categories = ["Todo", "Cafés", "Postres", "Dulces"] as const;
type Category = (typeof categories)[number];

const menuItems: {
  name: string;
  category: Exclude<Category, "Todo">;
  description: string;
  price: string;
  image: string;
  tag: string;
}[] = [
  {
    name: "Flat white",
    category: "Cafés",
    description: "Doble espresso y leche sedosa, en su punto justo.",
    price: "$3.800",
    image: "photo-1517256673644-36ad11246d21",
    tag: "Favorito",
  },
  {
    name: "Cappuccino",
    category: "Cafés",
    description: "Espresso, leche cremosa y una nube de espuma.",
    price: "$3.600",
    image: "photo-1572442388796-11668a67e53d",
    tag: "Clásico",
  },
  {
    name: "Cold brew",
    category: "Cafés",
    description: "Café de extracción lenta, suave y refrescante.",
    price: "$4.200",
    image: "photo-1517701604599-bb29b565090c",
    tag: "De la casa",
  },
  {
    name: "Tarta de chocolate",
    category: "Postres",
    description: "Chocolate intenso con centro suave y cacao.",
    price: "$4.500",
    image: "photo-1578985545062-69928b1d9587",
    tag: "Hecho aquí",
  },
  {
    name: "Cheesecake de frutos rojos",
    category: "Postres",
    description: "Cremoso, con frutos rojos de temporada.",
    price: "$4.800",
    image: "photo-1533134242443-d4fd215305ad",
    tag: "De temporada",
  },
  {
    name: "Tarta de limón",
    category: "Postres",
    description: "Relleno cítrico y merengue dorado.",
    price: "$4.200",
    image: "photo-1519915028121-7d3463d20b13",
    tag: "Favorito",
  },
  {
    name: "Roll de canela",
    category: "Dulces",
    description: "Suave por dentro, doradito por fuera. Recién horneado.",
    price: "$3.200",
    image: "photo-1509365465985-25d11c17e812",
    tag: "Recién hecho",
  },
  {
    name: "Cookie de chocolate",
    category: "Dulces",
    description: "Galleta crujiente por fuera y blandita al centro.",
    price: "$2.400",
    image: "photo-1499636136210-6f4ee915583e",
    tag: "Para acompañar",
  },
  {
    name: "Medialuna",
    category: "Dulces",
    description: "Hojaldrada, dorada y perfecta para la mañana.",
    price: "$1.800",
    image: "photo-1555507036-ab1f4038808a",
    tag: "Clásico",
  },
];

export default function MenuCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todo");
  const filteredItems =
    selectedCategory === "Todo"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="menu-section" id="menu">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Algo para cada antojo</p>
          <h2>De la barra <em>a tu mesa.</em></h2>
        </div>
        <a className="text-link menu-all-link" href="#visitanos">
          Ven por tu favorito <ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />
        </a>
      </div>
      <div className="menu-filters" aria-label="Filtrar productos">
        {categories.map((category) => (
          <button
            aria-pressed={selectedCategory === category}
            className={`menu-filter${selectedCategory === category ? " menu-filter-active" : ""}`}
            key={category}
            onClick={() => setSelectedCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-grid" aria-live="polite">
        {filteredItems.map((item, index) => (
          <article className="menu-card" key={item.name}>
            <div
              className={`menu-image menu-image-${(index % 3) + 1}`}
              role="img"
              aria-label={item.name}
              style={{
                backgroundImage: `url('https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=900&q=85')`,
              }}
            >
              <span className="menu-tag">{item.tag}</span>
            </div>
            <div className="menu-card-copy">
              <div className="menu-card-topline">
                <p className="menu-category">{item.category}</p>
                <span className="menu-price">{item.price}</span>
              </div>
              <h3>{item.name}</h3>
              <p className="menu-description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="menu-footnote">
        Menú, productos y precios ficticios; solo para mostrar el concepto.
      </p>
    </section>
  );
}
