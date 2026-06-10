import { CheckCircle2, Award, HeartHandshake, ShieldAlert } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1 - Visual representation of support metrics */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 p-6 md:p-8">
              <h3 className="font-sans text-xl font-bold text-[#0F4C81] mb-6 flex items-center gap-2">
                <HeartHandshake className="h-6 w-6 text-[#16A34A]" />
                Fatores de Segurança
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F4C81]/10 text-[#0F4C81]">
                    <span className="font-sans font-bold text-sm">1.5k</span>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900">Famílias Amparadas</h4>
                    <p className="font-sans text-xs text-slate-500 mt-1 leading-normal">
                      Direcionamentos bem-sucedidos em todo o território nacional.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-[#16A34A]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900">Unidades Certificadas</h4>
                    <p className="font-sans text-xs text-slate-500 mt-1 leading-normal">
                      Parceiros rigorosamente fiscalizados e dentro das exigências da ANVISA.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900">Suporte 24 Horas</h4>
                    <p className="font-sans text-xs text-slate-500 mt-1 leading-normal">
                      Prontidão para esclarecimentos e remoções médicas emergenciais.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative block */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="font-sans text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  Encaminhamento Humanizado
                </span>
                <Award className="h-5 w-5 text-[#16A34A]" />
              </div>
            </div>

            {/* Background design accents */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0F4C81]/5 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Column 2 - High conversion persuasive text */}
          <div className="lg:col-span-7">
            <span className="font-sans text-xs font-bold tracking-widest text-[#16A34A] uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full inline-block">
              Quem Somos
            </span>
            
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 mb-6">
              O Primeiro Passo Para a Mudança
            </h2>
            
            <p className="font-sans text-base text-slate-600 mb-6 leading-relaxed">
              A <strong>Dependência Química BR</strong> conecta pacientes e familiares às melhores opções de tratamento no país. Atuando como uma central de encaminhamento inteligente, oferecemos suporte completo para encontrar a unidade ideal de acordo com cada necessidade clínica e financeira.
            </p>

            <p className="font-sans text-base text-slate-600 mb-8 leading-relaxed">
              Nosso objetivo fundamental é facilitar o acesso ao tratamento qualificado e proporcionar atendimento rápido, seguro, sigiloso e centrado no ser humano. Entendemos a dor das famílias e estamos prontos para ser a ponte de resgate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-[#16A34A] shrink-0" />
                <span className="font-sans text-sm font-medium text-slate-700">Central Sem Termo &quot;Clínica&quot;</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-[#16A34A] shrink-0" />
                <span className="font-sans text-sm font-medium text-slate-700">Amparo Particular / Convênios</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-[#16A34A] shrink-0" />
                <span className="font-sans text-sm font-medium text-slate-700">Triagem clínica especializada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-[#16A34A] shrink-0" />
                <span className="font-sans text-sm font-medium text-slate-700">Apoio jurídico e legislativo</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
