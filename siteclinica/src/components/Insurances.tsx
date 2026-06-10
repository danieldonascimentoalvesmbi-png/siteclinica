import { useState, useEffect } from "react";
import { ShieldAlert, Phone, CheckCircle, HelpCircle } from "lucide-react";
import { getWhatsAppNumber, generateWhatsAppLink, DEFAULT_MSG_INSURANCE } from "../utils/whatsapp";

export default function Insurances() {
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

  const insurancesList = [
    { name: "Unimed", style: "bg-emerald-50 text-emerald-800 border-emerald-200" },
    { name: "Amil Resgate", style: "bg-blue-50 text-blue-800 border-blue-200" },
    { name: "Bradesco Saúde", style: "bg-rose-50 text-rose-800 border-rose-200" },
    { name: "SulAmérica", style: "bg-cyan-50 text-cyan-800 border-cyan-200" },
    { name: "Porto Seguro", style: "bg-sky-50 text-sky-800 border-sky-200" },
    { name: "Golden Cross", style: "bg-amber-50 text-amber-800 border-amber-200" },
  ];

  const waLink = generateWhatsAppLink(DEFAULT_MSG_INSURANCE, waNumber);

  return (
    <section id="convenios" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 md:p-12 shadow-xl overflow-hidden relative">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0F4C81]/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left side text and CTA */}
            <div className="lg:col-span-6">
              <span className="font-sans text-xs font-bold tracking-widest text-[#0F4C81] uppercase bg-blue-100/60 px-3.5 py-1.5 rounded-full inline-block">
                Aceitamos Convênios de Saúde
              </span>
              <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 mb-5">
                Tratamento pelo Plano ou Particular
              </h2>
              <p className="font-sans text-sm text-slate-500 leading-relaxed mb-6">
                Trabalhamos com diversas opções de convênios de saúde nacionais e atendimento particular com facilidades de financiamento e parcelamento.
              </p>
              <p className="font-sans text-sm text-slate-500 leading-relaxed mb-8">
                Cada convênio possui regras específicas sobre cobertura de internação voluntária e compulsória. Consulte a viabilidade imediata com nossa equipe agora mesmo sem compromisso.
              </p>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#16A34A] hover:bg-[#148e40] text-white font-sans text-xs font-bold px-7 py-4.5 transition-all duration-300 shadow-lg shadow-[#16A34A]/25 hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4 fill-white" />
                <span>CONSULTAR CONVÊNIO COM EQUIPE</span>
              </a>
            </div>

            {/* Right side fictional logos display */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
                <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-1.5 justify-center lg:justify-start">
                  <ShieldAlert className="h-4 w-4 text-[#16A34A]" />
                  Apoio Médico de Convênios de Grande Porte
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {insurancesList.map((ins) => (
                    <div
                      key={ins.name}
                      className={`h-16 flex flex-col justify-center items-center rounded-xl border font-sans text-sm font-extrabold tracking-tight uppercase shadow-sm ${ins.style}`}
                    >
                      <span className="text-center font-bold">{ins.name}</span>
                      <span className="text-[8px] font-semibold tracking-wider text-slate-400 opacity-80 mt-1">
                        COBERTURA INTEGRAL *
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-start gap-2 bg-white/60 rounded-xl p-3 border border-slate-200">
                  <HelpCircle className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                  <p className="font-sans text-[10px] text-slate-400 leading-normal">
                    * A cobertura total ou coparticipativa varia de acordo com a categoria da sua apólice e termos do contrato. Faça sua pré-avaliação via WhatsApp.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
