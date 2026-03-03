"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

const hours = [
  { days: "Segunda — Sexta", time: "07h00 — 20h00" },
  { days: "Sábados", time: "08h00 — 21h00" },
  { days: "Domingos", time: "09h00 — 18h00" },
];

const contact = [
  { icon: MapPin, text: "R. Oscar Freire, 1245 — Jardins, São Paulo — SP" },
  { icon: Phone, text: "+55 (11) 3456-7890" },
  { icon: Mail, text: "olá@monsieurcafe.com.br" },
];

export default function Footer() {
  return (
    <footer
      id="contato"
      className="bg-[#1A2421] text-[#FDFBF7]"
      aria-label="Rodapé com informações de contato da cafeteria Monsieur"
    >
      {/* CTA strip */}
      <div className="border-b border-[#FDFBF7]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p
              className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase mb-3"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Reserve sua experiência
            </p>
            <h2
              className="text-[#FDFBF7] leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
              }}
            >
              Venha tomar um café{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#D4AF37" }}>
                conosco.
              </em>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+551134567890"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#1A2421] text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[#E8C84A] hover:scale-105 active:scale-95 transition-all duration-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <Phone size={14} />
              Ligue agora
            </a>
            <a
              href="mailto:ola@monsieurcafe.com.br"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#FDFBF7]/20 text-[#FDFBF7] text-xs tracking-[0.15em] uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <Mail size={14} />
              Enviar e-mail
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo + About */}
        <div className="lg:col-span-1">
          <div className="mb-6">
            <p
              className="text-2xl font-black tracking-[0.08em]"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
            >
              MONSIEUR
            </p>
            <p
              className="text-[0.6rem] tracking-[0.35em] text-[#D4AF37] uppercase mt-0.5"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              café & bistrô
            </p>
          </div>
          <p
            className="text-[#FDFBF7]/50 text-sm leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Uma experiência sensorial inspirada nos bistrôs parisienses. Café
            levado a sério, desde 2018.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga o Monsieur no Instagram"
              className="text-[#FDFBF7]/40 hover:text-[#D4AF37] transition-colors duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Curta o Monsieur no Facebook"
              className="text-[#FDFBF7]/40 hover:text-[#D4AF37] transition-colors duration-300"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Horários */}
        <address className="not-italic">
          <h3
            className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Horários
          </h3>
          <div className="space-y-4">
            {hours.map((h) => (
              <div key={h.days}>
                <p
                  className="text-[#FDFBF7]/60 text-xs tracking-[0.1em] uppercase mb-0.5"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {h.days}
                </p>
                <p
                  className="text-[#FDFBF7] text-base"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {h.time}
                </p>
              </div>
            ))}
          </div>
        </address>

        {/* Contato */}
        <address className="not-italic">
          <h3
            className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Contato
          </h3>
          <div className="space-y-4">
            {contact.map(({ icon: Icon, text }) => (
              <div key={text} className="flex gap-3 items-start">
                <Icon
                  size={14}
                  className="text-[#D4AF37] mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <p
                  className="text-[#FDFBF7]/70 text-sm"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </address>

        {/* Newsletter */}
        <div>
          <h3
            className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Newsletter
          </h3>
          <p
            className="text-[#FDFBF7]/60 text-sm mb-5 leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Receba nossas novidades, lançamentos de grãos e eventos exclusivos.
          </p>
          <div className="flex flex-col gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Seu endereço de e-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-3 bg-[#FDFBF7]/5 border border-[#FDFBF7]/15 text-[#FDFBF7] placeholder-[#FDFBF7]/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
              aria-label="E-mail para newsletter"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-[#D4AF37] text-[#1A2421] text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[#E8C84A] hover:scale-[1.02] active:scale-98 transition-all duration-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Inscrever-se
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FDFBF7]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[#FDFBF7]/30 text-xs tracking-[0.1em]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            © {new Date().getFullYear()} Monsieur Café. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            {["Política de Privacidade", "Termos de Uso"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#FDFBF7]/30 text-xs tracking-[0.1em] hover:text-[#D4AF37] transition-colors duration-300"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
