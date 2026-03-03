"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type Tab = "cafes" | "acompanhamentos";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  origin?: string;
  image: string;
  imageAlt: string;
  tag?: string;
}

const cafes: MenuItem[] = [
  {
    name: "Espresso Clássico",
    description:
      "Blend exclusivo da casa com notas de chocolate amargo, caramelo e finalização longa.",
    price: "R$ 9",
    origin: "Minas Gerais, Brasil",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=85",
    imageAlt:
      "Xícara de espresso clássico com crema dourada sobre mesa de madeira",
    tag: "Assinatura",
  },
  {
    name: "Flat White",
    description:
      "Dois ristrettos com leite vaporizado em microespuma sedosa. Intenso e equilibrado.",
    price: "R$ 16",
    origin: "Etiópia Yirgacheffe",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=85",
    imageAlt: "Flat white com arte latte em folha sobre fundo escuro",
  },
  {
    name: "Pour Over V60",
    description:
      "Extração manual que revela o terroir completo do grão: floral, cítrico e luminoso.",
    price: "R$ 22",
    origin: "Gesha, Panamá",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=85",
    imageAlt:
      "Preparo de café pour over com V60 em vidro transparente mostrando o processo de extração",
    tag: "Especial",
  },
  {
    name: "Cold Brew",
    description:
      "Infusão fria por 18 horas. Suave, com baixa acidez e notas achocolatadas.",
    price: "R$ 18",
    origin: "Serra da Mantiqueira, SP",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=85",
    imageAlt: "Copo alto de cold brew com gelo servido em mesa de café",
  },
  {
    name: "Cappuccino Monsieur",
    description:
      "Proporção 1:1:1 perfeita com leite integral orgânico e toque de noz moscada.",
    price: "R$ 17",
    origin: "Blend Brasil + Colômbia",
    image:
      "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=600&q=85",
    imageAlt:
      "Cappuccino com espuma cremosa e polvilhado de canela em xícara branca elegante",
  },
  {
    name: "Café de Filtro",
    description:
      "Método Chemex com papel oxygen-bleached. Copo limpo, transparente e aromático.",
    price: "R$ 14",
    origin: "Sidama, Etiópia",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=85",
    imageAlt: "Chemex de vidro com café filtrado sendo servido em ambiente de cafeteria",
  },
];

const acompanhamentos: MenuItem[] = [
  {
    name: "Croissant Beurre",
    description:
      "Massa folhada com 81 camadas, manteiga normanda importada. Crocante por fora, sedoso por dentro.",
    price: "R$ 18",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=85",
    imageAlt:
      "Croissant dourado e crocante recém assado sobre papel manteiga em padaria artesanal",
    tag: "Favorito",
  },
  {
    name: "Pain au Chocolat",
    description:
      "Duas barras de chocolate Valrhona 64% encapsuladas em massa laminada artesanal.",
    price: "R$ 20",
    image:
      "https://images.unsplash.com/photo-1568471173242-461f0a730452?w=600&q=85",
    imageAlt:
      "Pain au chocolat aberto ao meio revelando o recheio de chocolate escuro derretido",
  },
  {
    name: "Tarte Tatin",
    description:
      "Maçãs caramelizadas em açúcar mascavo com massa sablée. Servida morna com chantilly.",
    price: "R$ 24",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=85",
    imageAlt:
      "Tarte tatin de maçã dourada com caramelo brilhante em prato rústico de cerâmica",
    tag: "Especial",
  },
  {
    name: "Quiche Lorraine",
    description:
      "Bacon defumado, gruyère maturado e creme de leite fresco em massa brisée. Servida ao almoço.",
    price: "R$ 28",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=85",
    imageAlt: "Fatia de quiche lorraine com recheio cremoso e dourado servida com salada verde",
  },
  {
    name: "Petit Gâteau",
    description:
      "Bolinho de chocolate com centro fundente. Acompanha sorvete de baunilha de Madagascar.",
    price: "R$ 29",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=85",
    imageAlt:
      "Petit gâteau de chocolate com centro fluindo acompanhado de sorvete de baunilha",
  },
  {
    name: "Croque Monsieur",
    description:
      "Sanduíche clássico francês com presunto defumado, gruyère e molho béchamel gratinado.",
    price: "R$ 32",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600&q=85",
    imageAlt: "Croque monsieur gratinado cortado ao meio revelando camadas de queijo derretido",
  },
];

const tabs: { key: Tab; label: string }[] = [
  { key: "cafes", label: "Cafés & Bebidas" },
  { key: "acompanhamentos", label: "Acompanhamentos" },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState<Tab>("cafes");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const items = activeTab === "cafes" ? cafes : acompanhamentos;

  return (
    <section
      id="cardapio"
      ref={ref}
      className="py-24 lg:py-36 bg-[#1A2421] relative overflow-hidden"
      aria-labelledby="menu-heading"
    >
      {/* Decorative number */}
      <div
        className="absolute top-16 right-8 text-[12rem] font-black text-white/[0.03] leading-none select-none pointer-events-none"
        style={{ fontFamily: "'Playfair Display', serif" }}
        aria-hidden="true"
      >
        02
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            O que servimos
          </p>
          <h2
            id="menu-heading"
            className="text-[#FDFBF7] leading-[1.15] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
            }}
          >
            Nosso{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#D4AF37" }}>
              Cardápio
            </em>
          </h2>
          <div className="w-12 h-px bg-[#D4AF37] mx-auto" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center mb-14"
          role="tablist"
          aria-label="Categorias do cardápio"
        >
          <div className="inline-flex border border-[#FDFBF7]/10 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                aria-controls={`tabpanel-${tab.key}`}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-8 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeTab === tab.key
                    ? "text-[#1A2421]"
                    : "text-[#FDFBF7]/50 hover:text-[#FDFBF7]"
                }`}
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {activeTab === tab.key && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-[#D4AF37]"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div
          id={`tabpanel-${activeTab}`}
          role="tabpanel"
          aria-label={`Itens de ${activeTab}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {items.map((item, i) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group bg-[#FDFBF7]/[0.04] hover:bg-[#FDFBF7]/[0.08] border border-[#FDFBF7]/10 hover:border-[#D4AF37]/40 transition-all duration-400 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {item.tag && (
                      <span
                        className="absolute top-3 left-3 px-3 py-1 bg-[#D4AF37] text-[#1A2421] text-[0.6rem] tracking-[0.2em] uppercase font-semibold"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3
                        className="text-[#FDFBF7] text-lg font-semibold leading-snug"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.name}
                      </h3>
                      <span
                        className="text-[#D4AF37] font-semibold text-base ml-4 whitespace-nowrap"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {item.price}
                      </span>
                    </div>
                    {item.origin && (
                      <p
                        className="text-[#D4AF37]/70 text-[0.65rem] tracking-[0.2em] uppercase mb-3"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {item.origin}
                      </p>
                    )}
                    <p
                      className="text-[#FDFBF7]/60 text-sm leading-relaxed"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
