"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#sobre", label: "Nossa História" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-[#D4AF37]/20"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between"
          aria-label="Navegação principal"
        >
          {/* Logo */}
          <a
            href="#"
            className="flex flex-col leading-none group"
            aria-label="Monsieur Café — Página inicial"
          >
            <span
              className="font-['Playfair_Display'] text-2xl font-800 tracking-[0.08em] text-[#1A2421] group-hover:text-[#D4AF37] transition-colors duration-300"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
            >
              MONSIEUR
            </span>
            <span
              className="text-[0.6rem] tracking-[0.35em] text-[#D4AF37] uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              café & bistrô
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-10" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-[0.8rem] tracking-[0.12em] uppercase text-[#1A2421] hover:text-[#D4AF37] transition-colors duration-300 group"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA button desktop */}
          <a
            href="#contato"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-[#D4AF37] text-[#1A2421] text-[0.72rem] tracking-[0.15em] uppercase font-semibold hover:bg-[#B8941E] transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Reservar Mesa
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#1A2421] hover:text-[#D4AF37] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#1A2421] flex flex-col items-center justify-center gap-8 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação móvel"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-[#FDFBF7] hover:text-[#D4AF37] transition-colors duration-300 text-3xl"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="mt-4 px-8 py-3 border border-[#D4AF37] text-[#D4AF37] text-sm tracking-widest uppercase hover:bg-[#D4AF37] hover:text-[#1A2421] transition-all duration-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
              onClick={() => setMobileOpen(false)}
            >
              Reservar Mesa
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
