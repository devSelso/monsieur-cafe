"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      aria-label="Seção de boas-vindas da cafeteria Monsieur"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=85"
        alt="Interior aconchegante e sofisticado da cafeteria Monsieur com iluminação quente e xícaras de café sobre mesa de madeira"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-105"
        style={{ filter: "brightness(0.45) saturate(0.9)" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A2421]/30 via-transparent to-[#1A2421]/70 z-10" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-10 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 text-[#D4AF37] tracking-[0.4em] text-xs uppercase"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          — São Paulo, desde 2018 —
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-[#FDFBF7] mb-6 leading-[1.1]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            fontWeight: 700,
          }}
        >
          O café levado{" "}
          <em
            className="text-[#D4AF37] not-italic"
            style={{ fontStyle: "italic", fontWeight: 400 }}
          >
            a sério.
          </em>
          <br />
          Bem-vindo ao Monsieur.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-[#FDFBF7]/80 text-xl lg:text-2xl max-w-2xl mx-auto mb-10 font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Grãos de origem única, técnicas refinadas e um ambiente que celebra a
          arte e a cultura do café — à maneira parisiense.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cardapio"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#D4AF37] text-[#1A2421] font-semibold tracking-[0.12em] uppercase text-sm hover:bg-[#E8C84A] hover:scale-105 active:scale-95 transition-all duration-300"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Ver Cardápio
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center px-10 py-4 border border-[#FDFBF7]/50 text-[#FDFBF7] font-light tracking-[0.12em] uppercase text-sm hover:border-[#D4AF37] hover:text-[#D4AF37] hover:scale-105 active:scale-95 transition-all duration-300"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Nossa História
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-[#D4AF37]" />
        </motion.div>
        <span
          className="text-[#FDFBF7]/50 text-[0.6rem] tracking-[0.3em] uppercase"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
