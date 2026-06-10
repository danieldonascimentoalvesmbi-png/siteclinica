import { PhoneCall, HeartPulse, Hospital, CheckSquare, ChevronRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Contato via WhatsApp",
      description: "Envie uma mensagem instantânea. Nosso assistente de plantão iniciará o acolhimento com total sigilo.",
      icon: PhoneCall,
      color: "from-emerald-400 to-[#16A34A] text-[#16A34A]",
    },
    {
      num: "02",
      title: "Avaliação Inicial",
      description: "Analisamos o caso físico e mental (voluntário ou involuntário) para delimitar o perfil clínico necessário.",
      icon: HeartPulse,
      color: "from-blue-400 to-[#0F4C81] text-[#0F4C81]",
    },
    {
      num: "03",
      title: "Escolha da Unidade",
      description: "Apresentamos as melhores opções de infraestrutura parceira de acordo com convênio ou orçamento.",
      icon: Hospital,
      color: "from-purple-400 to-purple-600 text-purple-600",
    },
    {
      num: "04",
      title: "Início do Tratamento",
      description: "Remoção especializada ou internação agendada imediata, iniciando o processo de reabilitação humana.",
      icon: CheckSquare,
      color: "from-teal-400 to-teal-600 text-teal-600",
    },
  ];

  return (
    <section id="processo" className="py-20 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-xs font-bold tracking-widest text-[#0F4C81] uppercase bg-blue-100/60 px-3.5 py-1.5 rounded-full inline-block">
            Fluxo de Acompanhamento
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 mb-5">
            Como Funciona o Encaminhamento?
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-[#0F4C81] to-[#16A34A] mx-auto rounded-full"></div>
          <p className="font-sans text-sm text-slate-500 mt-5 leading-relaxed">
            Processo ágil, legalmente amparado e simplificado para proporcionar segurança para você e as pessoas que ama.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-0.5 border-t border-dashed border-slate-300 -z-10"></div>

          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                id={`step-card-${index}`}
                className="group relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Numeric Bubble */}
                <span className="absolute -top-4 left-6 block font-sans text-2xl font-black tracking-tight text-slate-200 group-hover:text-[#16A34A]/25 transition-colors">
                  {s.num}
                </span>

                {/* Icon Circle */}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-slate-50 text-slate-800 shadow-md border border-slate-100 group-hover:scale-110 group-hover:shadow-[#0F4C81]/15 transition-all duration-300`}>
                  <Icon className={`h-6 w-6 ${s.color.split(" ").slice(-1)[0]}`} />
                </div>

                <h3 className="font-sans text-base font-extrabold text-slate-900 mb-2 group-hover:text-[#0F4C81] transition-all">
                  {s.title}
                </h3>

                <p className="font-sans text-xs text-slate-500 leading-relaxed">
                  {s.description}
                </p>

                {/* Right Arrow Connector for Desktop except last step */}
                {index < 3 && (
                  <div className="hidden lg:flex absolute -right-6 top-[54px] z-10 text-slate-300 group-hover:text-[#16A34A] transition-colors">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
