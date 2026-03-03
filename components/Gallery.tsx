"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ZoomIn } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=85",
    alt: "Interior aconchegante da cafeteria Monsieur com cadeiras de madeira, luminárias vintage e prateleiras de livros",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=85",
    alt: "Detalhe de xícara de café espresso com crema perfeita sobre bandeja de madeira polida",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&q=85",
    alt: "Mesa posta para café da manhã com croissants, geleia e café com leite em ambiente bistrô",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=600&q=85",
    alt: "Barista trabalhando com precisão no preparo de café especial usando método V60",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=85",
    alt: "Vista do balcão da cafeteria com máquina de espresso profissional e seleção de cafés de origem",
    span: "lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=85",
    alt: "Detalhe de latte art em formato de folha em xícara de cappuccino artesanal",
    span: "",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="galeria"
      ref={ref}
      className="py-24 lg:py-36 px-6 lg:px-12 bg-[#F5F0E8]"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div>
            <p
              className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Nosso espaço
            </p>
            <h2
              id="gallery-heading"
              className="text-[#1A2421] leading-[1.15]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
              }}
            >
              Um lugar para{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>habitar.</em>
            </h2>
          </div>
          <p
            className="max-w-sm text-[#1A2421]/60 text-base"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Projetado para convidar à permanência — à contemplação de uma boa
            leitura ou ao prazer de uma conversa sem pressa.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto lg:grid-rows-[280px_280px] gap-3">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden group ${photo.span} h-64 lg:h-auto`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A2421]/0 group-hover:bg-[#1A2421]/50 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ZoomIn size={36} className="text-[#D4AF37]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
