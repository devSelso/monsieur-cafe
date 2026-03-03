"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Isabelle M.",
    location: "Jardins, SP",
    rating: 5,
    text: "Finalmente um café em São Paulo que leva a experiência tão a sério quanto os melhores de Paris. O pour over da Etiópia é simplesmente transcendente, e o croissant é o melhor que já comi fora da Europa.",
    date: "Janeiro 2025",
  },
  {
    name: "Ricardo F.",
    location: "Pinheiros, SP",
    rating: 5,
    text: "O Monsieur se tornou meu ritual matinal obrigatório. A atenção ao detalhe é impressionante — desde a temperatura da água até a textura da espuma do leite. Um lugar que eleva o cotidiano.",
    date: "Fevereiro 2025",
  },
  {
    name: "Ana Clara B.",
    location: "Vila Madalena, SP",
    rating: 5,
    text: "Levei minha mãe aqui e ela se emocionou — disse que a quiche lorraine a fez lembrar de uma viagem à Bretanha há trinta anos. Esse é o poder de uma comida preparada com verdadeiro cuidado.",
    date: "Março 2025",
  },
  {
    name: "Eduardo T.",
    location: "Itaim Bibi, SP",
    rating: 5,
    text: "Ambiente impecável, serviço atencioso sem ser invasivo, e um flat white que rivaliza com os melhores que já tive em Melbourne. O Monsieur é absolutamente o melhor café da cidade.",
    date: "Dezembro 2024",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="avaliacoes"
      ref={ref}
      className="py-24 lg:py-36 px-6 lg:px-12 bg-[#FDFBF7] relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative number */}
      <div
        className="absolute top-16 left-8 text-[12rem] font-black text-[#1A2421]/[0.03] leading-none select-none pointer-events-none"
        style={{ fontFamily: "'Playfair Display', serif" }}
        aria-hidden="true"
      >
        04
      </div>

      <div className="max-w-7xl mx-auto">
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
            O que dizem
          </p>
          <h2
            id="testimonials-heading"
            className="text-[#1A2421] leading-[1.15] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
            }}
          >
            Histórias que{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>nos movem.</em>
          </h2>
          <div className="w-12 h-px bg-[#D4AF37] mx-auto" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative bg-[#F5F0E8] p-8 lg:p-10 border border-[#1A2421]/8 hover:border-[#D4AF37]/40 hover:shadow-lg transition-all duration-400 group"
            >
              {/* Quote icon */}
              <Quote
                size={36}
                className="text-[#D4AF37]/20 mb-6 group-hover:text-[#D4AF37]/40 transition-colors duration-300"
                aria-hidden="true"
              />

              {/* Stars */}
              <div
                className="flex gap-1 mb-5"
                aria-label={`Avaliação: ${t.rating} de 5 estrelas`}
                role="img"
              >
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-[#D4AF37] fill-[#D4AF37]"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Review text */}
              <blockquote>
                <p
                  className="text-[#1A2421]/80 leading-relaxed text-lg mb-8"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "{t.text}"
                </p>
              </blockquote>

              {/* Author */}
              <footer className="flex items-center justify-between border-t border-[#1A2421]/10 pt-5">
                <div>
                  <p
                    className="text-[#1A2421] font-semibold text-base"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[#1A2421]/50 text-xs tracking-[0.15em] uppercase mt-0.5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {t.location}
                  </p>
                </div>
                <time
                  className="text-[#D4AF37]/60 text-xs tracking-[0.15em]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  dateTime={t.date}
                >
                  {t.date}
                </time>
              </footer>
            </motion.article>
          ))}
        </div>

        {/* Summary stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-14 text-center"
        >
          <div className="flex gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="text-[#D4AF37] fill-[#D4AF37]"
              />
            ))}
          </div>
          <p
            className="text-[#1A2421]/60 text-sm"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <strong className="text-[#1A2421]">4.9 / 5</strong> · Baseado em
            mais de 320 avaliações no Google
          </p>
        </motion.div>
      </div>
    </section>
  );
}
