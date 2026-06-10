import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { getWhatsAppNumber, generateWhatsAppLink, DEFAULT_MSG_HERO } from "../utils/whatsapp";

export default function FloatingWhatsApp() {
  const [waNumber, setWaNumber] = useState(getWhatsAppNumber());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleWaChange = () => {
      setWaNumber(getWhatsAppNumber());
    };

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("whatsapp_changed", handleWaChange);
    window.addEventListener("scroll", handleScroll);

    // Initial check in case they're already scrolled down
    if (window.scrollY > 200) {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener("whatsapp_changed", handleWaChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const waLink = generateWhatsAppLink(DEFAULT_MSG_HERO, waNumber);

  return (
    <div
      id="floating-whatsapp-widget"
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative group">
        {/* Tooltip and background pulse rings */}
        <span className="absolute -top-12 right-0 scale-0 group-hover:scale-100 origin-bottom transition-all duration-300 bg-slate-900 text-white text-[11px] font-sans font-semibold py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap leading-none">
          Atendimento 24h via WhatsApp
        </span>

        {/* Pulse elements */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75 animate-ping duration-1000 -z-10"></span>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#148e40]"
          aria-label="Fale conosco no WhatsApp"
        >
          <Phone className="h-7 w-7 fill-white animate-wiggle" />
        </a>
      </div>
    </div>
  );
}
