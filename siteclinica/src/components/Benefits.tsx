import { Clock, ShieldCheck, ShieldAlert, Award, Users, Home } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "Atendimento Imediato",
      description: "Equipe pronta para orientar você e sua família, 24 horas por dia, com sigilo e rapidez absoluta.",
      icon: Clock,
      color: "bg-emerald-50 text-[#16A34A]",
    },
    {
      title: "Internação Voluntária",
      description: "Processo seguro, humanizado e focado no resgate da dignidade e aceitação do paciente.",
      icon: ShieldCheck,
      color: "bg-blue-50 text-[#0F4C81]",
    },
    {
      title: "Internação Involuntária",
      description: "Suporte especializado dentro da legislação vigente, focado na segurança de casos extremos de risco.",
      icon: ShieldAlert,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Convênios e Particular",
      description: "Diversas opções de cobertura de planos de saúde de grande porte e facilidades para particular.",
      icon: Award,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Equipe Multidisciplinar",
      description: "Acompanhamento médico, psicológico, psiquiátrico, terapêutico e assistencial contínuo.",
      icon: Users,
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Estrutura Completa",
      description: "Contamos com ambientes projetados e preparados para acolhimento focado em recuperação e tranquilidade.",
      icon: Home,
      color: "bg-blue-50 text-[#0F4C81]",
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-[#0F4C81] uppercase bg-blue-100/60 px-3.5 py-1.5 rounded-full">
            Diferenciais de Excelência
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 mb-5">
            Por que escolher a Dependência Química BR?
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-[#0F4C81] to-[#16A34A] mx-auto rounded-full"></div>
          <p className="font-sans text-sm text-slate-500 mt-5 leading-relaxed">
            Oferecemos uma ponte segura e responsável entre famílias e as melhores instituições de acolhimento do Brasil.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, index) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                id={`benefit-card-${index}`}
                className="group relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#0F4C81]/15"
              >
                {/* Icon wrapper with custom colors */}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${b.color} transition-all duration-300 group-hover:scale-110`}>
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="font-sans text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0F4C81] transition-colors">
                  {b.title}
                </h3>

                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
