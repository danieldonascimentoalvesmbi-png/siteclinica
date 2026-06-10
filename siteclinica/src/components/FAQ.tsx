import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Como funciona a internação?",
      answer: "A internação começa com uma consulta técnica por nossa equipe para entender o perfil do paciente. Indicamos as melhores unidades, cuidamos da remoção médica qualificada se necessário, e realizamos o direcionamento burocrático de forma rápida.",
    },
    {
      question: "Aceita convênio?",
      answer: "Sim, aceitamos diversos convênios de saúde de abrangência nacional (como Bradesco, Amil, SulAmérica, Unimed, Porto Seguro, Golden Cross). A viabilização e o nível de reembolso dependem dos termos específicos do seu plano de saúde.",
    },
    {
      question: "Qual o valor do tratamento?",
      answer: "Contamos com planos para todas as necessidades e orçamentos familiares: o Plano Essencial custa R$ 1.290/mês, o Plano Premium R$ 2.490/mês e o Plano Exclusive R$ 4.990/mês. Todos incluem supervisão, alimentação e tratamento especializado básico.",
    },
    {
      question: "O atendimento e triagem funcionam 24 horas?",
      answer: "Sim. Oferecemos suporte telefônico e de WhatsApp ininterrupto, pois sabemos que crises de dependência e necessidades de internação de urgência podem acontecer a qualquer hora do dia ou da noite.",
    },
    {
      question: "Existe internação involuntária?",
      answer: "Sim. A internação involuntária tem amparo total na Lei Federal nº 13.840 de 1999, que autoriza médicos a solicitarem a internação para salvaguardar a saúde física e integridade do próprio indivíduo e de terceiros.",
    },
    {
      question: "Quanto tempo dura o tratamento?",
      answer: "O tempo médio de tratamento para reabilitação varia geralmente entre 90 a 180 dias (3 a 6 meses), permitindo o ciclo completo de desintoxicação física, restauração psicológica, e acompanhamento motivacional para prevenção de recaídas.",
    },
    {
      question: "Como solicitar uma avaliação inicial?",
      answer: "Basta preencher nosso formulário de contato integrado ou clicar no botão flutuante para falar diretamente no WhatsApp com um profissional especializado. A pré-visualização técnica é gratuita e confidencial.",
    },
    {
      question: "Existe acompanhamento psicológico e psiquiátrico?",
      answer: "Sim, todas as nossas unidades parceiras contam com equipe médica de psiquiatras, psicólogos com foco em Terapia Cognitivo-Comportamental (TCC), terapeutas em dependência química e enfermeiros especializados.",
    },
    {
      question: "Posso visitar o paciente durante o período?",
      answer: "Sim. As visitas são permitidas e estimuladas, mas ocorrem de acordo com um cronograma pré-estabelecido pela equipe médica da unidade, respeitando os primeiros dias de desintoxicação para garantir a evolução do tratamento.",
    },
    {
      question: "Como iniciar o tratamento hoje mesmo?",
      answer: "O início pode ser imediato. Após alinhar o plano ou convênio, podemos organizar a equipe de remoção médica qualificada ou o acolhimento direto do paciente na unidade em poucas horas.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-[#0F4C81] uppercase bg-blue-100/60 px-3.5 py-1.5 rounded-full">
            Dúvidas Frequentes
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 mb-5">
            Perguntas & Respostas Rápidas
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-[#0F4C81] to-[#16A34A] mx-auto rounded-full"></div>
          <p className="font-sans text-sm text-slate-500 mt-5 leading-relaxed">
            Esclareça suas principais dúvidas sobre o processo de encaminhamento, internação involuntária e cobertura financeira.
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#0F4C81]/30 bg-[#0F4C81]/5 shadow-md"
                    : "border-slate-200 bg-slate-50 hover:bg-slate-100/60"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors ${
                      isOpen ? "text-[#0F4C81]" : "text-slate-400"
                    }`} />
                    <span className="font-sans text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Plus/Minus Icons wrapper */}
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white border shadow-sm transition-transform duration-300 ${
                    isOpen ? "rotate-180 border-[#0F4C81]/35 text-[#0F4C81]" : "border-slate-200 text-slate-500"
                  }`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 font-sans text-sm text-slate-600 leading-relaxed border-t border-slate-200/40">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
