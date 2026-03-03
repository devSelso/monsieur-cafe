"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Coffee, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

const highlights = [
  {
    icon: Coffee,
    label: "Origens Únicas",
    desc: "Grãos selecionados direto dos produtores",
  },
  {
    icon: Award,
    label: "Baristas Certificados",
    desc: "SCA Barista Professional Level 2",
  },
  {
    icon: Leaf,
    label: "Sustentabilidade",
    desc: "Produção ética e embalagens compostáveis",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      ref={ref}
      className="py-24 lg:py-36 px-6 lg:px-12 bg-[#FDFBF7] relative"
      aria-labelledby="about-heading"
    >
      {/* Decorative number */}
      <div
        className="absolute top-16 right-8 text-[12rem] font-black text-[#1A2421]/[0.03] leading-none select-none pointer-events-none"
        style={{ fontFamily: "'Playfair Display', serif" }}
        aria-hidden="true"
      >
        01
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image side */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="relative h-[520px] lg:h-[640px] overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=85"
              alt="Barista da cafeteria Monsieur preparando café espresso com atenção precisa ao detalhe, em ambiente bistrô sofisticado"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlap card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-[#D4AF37] p-6 lg:p-8 shadow-xl z-10">
              <p
                className="text-[#1A2421] text-4xl font-black leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                +6
              </p>
              <p
                className="text-[#1A2421]/80 text-xs tracking-widest uppercase mt-1"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Anos de história
              </p>
            </div>
          </div>
          {/* Thin gold border accent */}
          <div className="absolute -top-4 -left-4 w-32 h-32 border-l-2 border-t-2 border-[#D4AF37] pointer-events-none" />
        </motion.div>

        {/* Text side */}
        <div className="space-y-8">
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p
              className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Nossa História
            </p>
            <h2
              id="about-heading"
              className="text-[#1A2421] leading-[1.15]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
              }}
            >
              Nascido da paixão,{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>
                refinado pela tradição.
              </em>
            </h2>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-5 text-[#1A2421]/75"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}
          >
            <p>
              O Monsieur nasceu em 2018 quando Henri Beaumont, após anos vivendo
              em Paris e trabalhando nos melhores cafés da Europa, decidiu trazer
              para São Paulo a filosofia do bistrô francês: rigor nos ingredientes,
              calma no preparo e generosidade no serviço.
            </p>
            <p>
              Cada xícara que servimos é resultado de uma cadeia de cuidado — do
              produtor que escolhemos, do lote que selecionamos e do barista que
              extrai, com precisão artesanal, a melhor expressão do grão.
            </p>
            <p className="text-[#1A2421]/90 font-medium italic">
              "Café não é apenas bebida. É um convite a desacelerar, a perceber,
              a estar presente."
            </p>
            <p
              className="text-[#D4AF37] text-sm"
              style={{ fontFamily: "'DM Mono', monospace", fontStyle: "normal" }}
            >
              — Henri Beaumont, fundador
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#1A2421]/10"
          >
            {highlights.map(({ icon: Icon, label, desc }) => (
              <article key={label} className="flex flex-col gap-2">
                <Icon size={22} className="text-[#D4AF37]" />
                <h3
                  className="text-[#1A2421] font-semibold text-sm"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {label}
                </h3>
                <p
                  className="text-[#1A2421]/60 text-sm"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {desc}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
