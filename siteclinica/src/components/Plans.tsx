import { useState, useEffect } from "react";
import { Check, Star, ShieldCheck, Heart } from "lucide-react";
import { getWhatsAppNumber, redirectWhatsApp, DEFAULT_MSG_PLAN } from "../utils/whatsapp";

export default function Plans() {
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

  const plans = [
    {
      name: "Plano Essencial",
      price: "R$ 1.290",
      period: "/mês",
      description: "Ideal para reabilitação coletiva e suporte assistido econômico.",
      features: [
        "Acomodação compartilhada confortável",
        "Alimentação completa balanceada",
        "Acompanhamento terapêutico semanal",
        "Atividades físicas & recreativas",
        "Enfermagem e monitoramento 24h",
      ],
      recommended: false,
    },
    {
      name: "Plano Premium",
      price: "R$ 2.490",
      period: "/mês",
      description: "Maior acompanhamento técnico e terapias integradas exclusivas.",
      features: [
        "Quarto semiprivativo (máx. 2 pessoas)",
        "Atendimento psicológico clínico",
        "Oficinas e terapias ocupacionais",
        "Monitoramento técnico especializado",
        "Suporte pós-alta integrado",
      ],
      recommended: false,
    },
    {
      name: "Plano Exclusive",
      price: "R$ 4.990",
      period: "/mês",
      description: "Acomodação de luxo individual com dedicação clínica completa.",
      features: [
        "Quarto 100% privativo com suíte",
        "Atendimento psiquiátrico & individualizado",
        "Estrutura de lazer diferenciada",
        "Acompanhamento terapêutico intensivo de hora em hora",
        "Plano pós-reabilitação personalizado completo",
      ],
      recommended: true, // DESTACAR ESSE PLANO
    },
  ];

  const handleOrder = (planName: string, planPrice: string) => {
    const formattedMsg = DEFAULT_MSG_PLAN
      .replace("{PLAN_NAME}", planName)
      .replace("{PLAN_PRICE}", planPrice + "/mês");
    redirectWhatsApp(formattedMsg, waNumber);
  };

  return (
    <section id="planos" className="py-20 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-[#0F4C81] uppercase bg-blue-100/60 px-3.5 py-1.5 rounded-full">
            Facatários & Valores
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 mb-5">
            Opções de Tratamento sob Medida
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-[#0F4C81] to-[#16A34A] mx-auto rounded-full"></div>
          <p className="font-sans text-sm text-slate-500 mt-5 leading-relaxed">
            Oferecemos suporte ético para encontrar a rebilitação ideal de acordo com sua necessidade e orçamento familiar, com absoluta confidencialidade.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-6">
          {plans.map((p, index) => (
            <div
              key={p.name}
              id={`plan-card-${index}`}
              className={`relative flex flex-col rounded-3xl p-8 md:p-10 transition-all duration-300 ${
                p.recommended
                  ? "bg-slate-900 text-white shadow-2xl scale-102 lg:scale-105 border-2 border-[#16A34A]"
                  : "bg-slate-50 border border-slate-150 text-slate-900 hover:border-[#0F4C81]/25 hover:shadow-lg"
              }`}
            >
              {/* Highlight ribbon */}
              {p.recommended && (
                <span className="absolute -top-4 right-6 inline-flex items-center gap-1.5 rounded-full bg-[#16A34A] px-4 py-1.5 font-sans text-[11px] font-extrabold tracking-wider text-white uppercase shadow-md">
                  <Star className="h-3 w-3 fill-white" />
                  RECOMENDADO / EXCLUSIVO
                </span>
              )}

              {/* Title & Desc */}
              <div className="mb-6">
                <h3 className={`font-sans text-xl font-bold mb-2 ${p.recommended ? "text-[#16A34A]" : "text-[#0F4C81]"}`}>
                  {p.name}
                </h3>
                <p className={`font-sans text-xs leading-relaxed ${p.recommended ? "text-slate-400" : "text-slate-500"}`}>
                  {p.description}
                </p>
              </div>

              {/* Price Tag */}
              <div className="flex items-baseline gap-1.5 mb-8 border-b border-dashed pb-6 border-slate-300/35">
                <span className="font-sans text-4xl font-extrabold tracking-tight">
                  {p.price}
                </span>
                <span className={`font-sans text-xs font-semibold ${p.recommended ? "text-slate-400" : "text-slate-500"}`}>
                  {p.period}
                </span>
              </div>

              {/* Features loop */}
              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      p.recommended ? "bg-emerald-500/10 text-emerald-400" : "bg-[#16A34A]/10 text-[#16A34A]"
                    }`}>
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className={`font-sans text-xs leading-normal ${p.recommended ? "text-slate-300" : "text-slate-600"}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Select CTA Button */}
              <button
                id={`plan-cta-btn-${index}`}
                onClick={() => handleOrder(p.name, p.price)}
                className={`w-full py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  p.recommended
                    ? "bg-[#16A34A] hover:bg-[#148e40] text-white shadow-xl shadow-[#16A34A]/25"
                    : "bg-[#0F4C81] hover:bg-[#0d406d] text-white"
                }`}
              >
                Solicitar Atendimento
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
