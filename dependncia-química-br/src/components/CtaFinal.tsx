import { useState, useEffect } from "react";
import { Phone, Clock, ShieldCheck, HeartPulse } from "lucide-react";
import { getWhatsAppNumber, generateWhatsAppLink, DEFAULT_MSG_HERO } from "../utils/whatsapp";

export default function CtaFinal() {
  const [waNumber, setWaNumber] = useState(getWhatsAppNumber());

  useEffect(() => {
    const handleWaChange = () => {
      setWaNumber(getWhatsAppNumber());
    };
    window.addEventListener("whatsapp_changed", handleWaChange);
    return () => {
      window.removeEventListener("whatsapp_changed", handleWaChange);
    };
  }, []);

  const waLink = generateWhatsAppLink(DEFAULT_MSG_HERO, waNumber);

  return (
    <section id="cta-final" className="relative py-20 bg-[#0F4C81] overflow-hidden text-white">
      {/* Visual accents of green and blue */}
      <div className="absolute -top-24 -left-20 w-80 h-80 bg-[#16A34A]/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-[#16A34A]/25 rounded-full blur-[120px] -z-10"></div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Support Badges */}
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold">
            <Clock className="h-3.5 w-3.5 text-[#16A34A]" />
            <span>Suporte Emergencial 24h</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold">
            <ShieldCheck className="h-3.5 w-3.5 text-[#16A34A]" />
            <span>Processo 100% Legalizado</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold">
            <HeartPulse className="h-3.5 w-3.5 text-[#16A34A]" />
            <span>Amparo Médico Especializado</span>
          </div>
        </div>

        {/* Title & Desc */}
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
          Não Espere a Situação Piorar
        </h2>
        
        <p className="font-sans text-base sm:text-lg text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          O consumo contínuo e compulsivo destrói a saúde e o convívio social. Quanto antes o tratamento qualificado começar, maiores são as chances de plena recuperação.
        </p>

        {/* Heavy Big CTA */}
        <div className="flex flex-col items-center justify-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 rounded-2xl bg-[#16A34A] hover:bg-[#148e40] text-white font-sans text-base sm:text-lg font-extrabold px-10 py-5 transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#16A34A]/30"
          >
            <Phone className="h-5 w-5 fill-white animate-wiggle" />
            <span>📲 FALAR COM ESPECIALISTA AGORA</span>
          </a>
          
          <span className="font-sans text-[11px] font-medium tracking-wide text-blue-200 mt-4 uppercase">
            Aconselhamento Clínico Rápido, Sigiloso e Gratuito
          </span>
        </div>

      </div>
    </section>
  );
}
