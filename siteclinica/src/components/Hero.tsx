import { useState, useEffect } from "react";
import { Phone, MapPin, CheckCircle, Shield } from "lucide-react";
import { getWhatsAppNumber, generateWhatsAppLink, DEFAULT_MSG_HERO } from "../utils/whatsapp";
const heroImg = "/src/assets/images/hero_recovery_env_1781057942062.png";

export default function Hero() {
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
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-950"
    >
      {/* Background image component with rich opacity overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg || "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920"}
          alt="Ambiente acolhedor de recuperação"
          className="w-full h-full object-cover object-center opacity-40 brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
        {/* Soft radial blue and green glow elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0F4C81]/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#16A34A]/10 rounded-full blur-[120px]"></div>
        {/* Dark linear gradient bottom overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-950/20"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        {/* Dynamic Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in-down">
          <Shield className="h-4 w-4 text-[#16A34A]" />
          <span className="font-sans text-[11px] font-bold tracking-wider text-white uppercase">
            Atendimento Particular e por Convênios
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
          Tratamento Especializado para{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#16A34A]">
            Dependência Química
          </span>{" "}
          e Alcoolismo
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Recupere sua vida com apoio profissional, estrutura completa e atendimento humanizado. Conectamos você às melhores opções de reabilitação.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* Primary CTA (WhatsApp) */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#16A34A] hover:bg-[#148e40] text-white font-sans text-sm font-bold px-8 py-4 transition-all duration-300 hover:scale-[1.03] shadow-xl shadow-[#16A34A]/25"
          >
            <Phone className="h-4.5 w-4.5 fill-white" />
            <span>FALAR COM ESPECIALISTA AGORA</span>
          </a>

          {/* Secondary CTA (Units scroll) */}
          <a
            href="#unidades"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-sans text-sm font-semibold px-8 py-4 transition-all duration-300 border border-white/20 backdrop-blur-md"
          >
            <MapPin className="h-4 w-4 text-[#16A34A]" />
            <span>Conhecer as Unidades</span>
          </a>
        </div>

        {/* Tiny bullets of reassurance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/10">
          <div className="flex items-center justify-center gap-2 text-slate-300">
            <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0" />
            <span className="font-sans text-xs font-semibold">Triagem Imediata</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300">
            <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0" />
            <span className="font-sans text-xs font-semibold">Internação Voluntária</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300">
            <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0" />
            <span className="font-sans text-xs font-semibold">Suporte Involuntário</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300">
            <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0" />
            <span className="font-sans text-xs font-semibold">Amparo Familiar</span>
          </div>
        </div>
      </div>
    </section>
  );
}
