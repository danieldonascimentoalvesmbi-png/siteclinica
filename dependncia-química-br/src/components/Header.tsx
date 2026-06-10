import { useState, useEffect } from "react";
import { Phone, Menu, X, ShieldCheck } from "lucide-react";
import { getWhatsAppNumber, generateWhatsAppLink, DEFAULT_MSG_HERO } from "../utils/whatsapp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [waNumber, setWaNumber] = useState(getWhatsAppNumber());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleWaChange = () => {
      setWaNumber(getWhatsAppNumber());
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("whatsapp_changed", handleWaChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("whatsapp_changed", handleWaChange);
    };
  }, []);

  const navLinks = [
    { label: "Benefícios", href: "#beneficios" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Unidades", href: "#unidades" },
    { label: "Planos", href: "#planos" },
    { label: "Convênios", href: "#convenios" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Como Funciona", href: "#processo" },
    { label: "Dúvidas", href: "#faq" },
  ];

  const waLink = generateWhatsAppLink(DEFAULT_MSG_HERO, waNumber);

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            id="header-logo"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#0F4C81] to-[#16A34A] text-white shadow-md shadow-[#0F4C81]/25">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="block font-sans text-base font-extrabold tracking-tight text-[#0F4C81] uppercase leading-none">
                Dependência Química <span className="text-[#16A34A]">BR</span>
              </span>
              <span className="block font-sans text-[9px] font-medium tracking-wider text-slate-500 uppercase">
                Central de Encaminhamento
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs font-semibold text-slate-600 hover:text-[#0F4C81] transition-colors uppercase tracking-wider block"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#16A34A] hover:bg-[#148e40] text-white font-sans text-xs font-bold px-4 py-2.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#16A34A]/50 hover:shadow-lg shadow-[#16A34A]/20"
            >
              <Phone className="h-3.5 w-3.5 fill-white" />
              <span>FALAR COM ESPECIALISTA</span>
            </a>
          </div>

          {/* Hamburger Menu Mobile */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-[#0F4C81] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div id="mobile-nav-panel" className="lg:hidden bg-white border-b border-slate-100 shadow-xl py-4 px-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-xs font-bold text-slate-700 hover:text-[#0F4C81] transition-colors py-2 border-b border-slate-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#16A34A] text-white font-sans text-xs font-bold py-3 hover:bg-[#148e40] transition-colors"
            >
              <Phone className="h-4 w-4 fill-white" />
              <span>FALAR COM ESPECIALISTA</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
