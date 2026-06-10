import { Star, MessageSquare } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      text: "Hoje tenho minha vida de volta. O encaminhamento foi acolhedor e fundamental para encontrar a unidade certa para minha recuperação física e mental.",
      author: "Carlos M.",
      location: "São Paulo - SP",
    },
    {
      stars: 5,
      text: "Minha família encontrou apoio e um direcionamento seguro quando mais precisava. O atendimento humanizado nos trouxe paz em um momento de desespero.",
      author: "Ana P.",
      location: "Belo Horizonte - MG",
    },
    {
      stars: 5,
      text: "Eu achava que não havia mais solução para meu filho. A equipe fez a triagem com muito respeito e nos guiou pelo processo de internação com muita clareza.",
      author: "Ricardo S.",
      location: "Campinas - SP",
    },
    {
      stars: 5,
      text: "Excelente central de atendimento. Recomendo muito! Conseguimos uma vaga imediata com cobertura do nosso plano de saúde sem nenhuma dor de cabeça.",
      author: "Fernanda G.",
      location: "Rio de Janeiro - RJ",
    },
    {
      stars: 5,
      text: "O processo de internação involuntária salvou meu marido. A equipe de remoção foi muito técnica e agiu com total segurança jurídica e carinho.",
      author: "Juliana R.",
      location: "Porto Alegre - RS",
    },
    {
      stars: 5,
      text: "Agradeço todos os dias por ter entrado em contato através do site. O recomeço é possível quando somos levados para o ambiente e suporte adequados.",
      author: "Marcos T.",
      location: "Curitiba - PR",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-[#16A34A] uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full inline-block">
            Histórias de Superação Sem Fim
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 mb-5">
            Depoimentos de Recomeço e Gratidão
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-[#0F4C81] to-[#16A34A] mx-auto rounded-full"></div>
          <p className="font-sans text-sm text-slate-500 mt-5 leading-relaxed">
            Veja a opinião de pessoas e famílias reais que venceram a barreira do preconceito e encontraram o caminho da reabilitação através da nossa central.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              id={`rev-card-${index}`}
              className="group rounded-2xl bg-slate-50 border border-slate-150 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white hover:border-[#0F4C81]/15"
            >
              {/* Stars Row */}
              <div className="flex gap-1 mb-5">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6 italic">
                &quot;{rev.text}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between border-t border-slate-200/50 pt-4 mt-auto">
                <div>
                  <h4 className="font-sans text-sm font-extrabold text-slate-900 group-hover:text-[#0F4C81] transition-colors">
                    {rev.author}
                  </h4>
                  <span className="font-sans text-[11px] font-medium text-slate-400">
                    {rev.location}
                  </span>
                </div>
                
                {/* Visual quote icon */}
                <MessageSquare className="h-5 w-5 text-slate-300 group-hover:text-[#16A34A] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
