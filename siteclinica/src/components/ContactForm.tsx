import React, { useState, useEffect } from "react";
import { Send, Phone, Lock, Sparkles, CheckSquare } from "lucide-react";
import { getWhatsAppNumber, redirectWhatsApp, DEFAULT_MSG_LEAD } from "../utils/whatsapp";

export default function ContactForm() {
  const [waNumber, setWaNumber] = useState(getWhatsAppNumber());
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("Dependência Química");
  const [payment, setPayment] = useState("Particular");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleWaChange = () => {
      setWaNumber(getWhatsAppNumber());
    };
    window.addEventListener("whatsapp_changed", handleWaChange);
    return () => {
      window.removeEventListener("whatsapp_changed", handleWaChange);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !city) return;

    setIsSubmitting(true);

    const formattedMessage = DEFAULT_MSG_LEAD
      .replace("{NAME}", name)
      .replace("{PHONE}", phone)
      .replace("{CITY}", city)
      .replace("{TYPE}", type)
      .replace("{PAYMENT}", payment)
      .replace("{MESSAGE}", message || "Gostaria de falar com um especialista clínico.");

    setTimeout(() => {
      redirectWhatsApp(formattedMessage, waNumber);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="contato" className="py-20 bg-slate-50 border-b border-slate-100 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs font-bold tracking-widest text-[#16A34A] uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full inline-block">
              Avaliação Técnica Rápida
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Preencha para Iniciar o Encaminhamento
            </h2>
            <p className="font-sans text-sm text-slate-500 leading-relaxed">
              Dê o primeiro passo com segurança. Suas informações estarão totalmente protegidas sob sigilo de prontuário clínico.
            </p>

            {/* Quick bullet values */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <CheckSquare className="h-5 w-5 text-[#16A34A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold text-slate-900">Privacidade Absoluta</h4>
                  <p className="font-sans text-[11px] text-slate-500 mt-0.5">Suas informações não são salvas em bancos de dados públicos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckSquare className="h-5 w-5 text-[#16A34A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold text-slate-900">Atendimento Técnico Humano</h4>
                  <p className="font-sans text-[11px] text-slate-500 mt-0.5">Avaliação imediata conduzida diretamente por whatsapp.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Lock className="h-4.5 w-4.5 text-slate-400 shrink-0 mt-0.5" />
                <span className="font-sans text-[10px] text-slate-400 leading-relaxed font-semibold uppercase">
                  LGPD - Lei Geral de Proteção de Dados
                </span>
              </div>
            </div>
          </div>

          {/* Right form container */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-150 bg-white p-6 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F4C81] to-[#16A34A]"></div>
              
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-[#16A34A]" />
                <h3 className="font-sans text-lg font-bold text-slate-900">
                  Formulário de Triagem Rápida
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="lead-name" className="block font-sans text-xs font-semibold text-slate-700 mb-2">
                      Seu Nome completo *
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Augusto Silva"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 px-4 font-sans text-sm text-slate-800 outline-none focus:border-[#0F4C81] focus:bg-white transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="lead-phone" className="block font-sans text-xs font-semibold text-slate-700 mb-2">
                      Telefone com DDD (WhatsApp) *
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: (11) 99999-9999"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 px-4 font-sans text-sm text-slate-800 outline-none focus:border-[#0F4C81] focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* City & State */}
                <div>
                  <label htmlFor="lead-city" className="block font-sans text-xs font-semibold text-slate-700 mb-2">
                    Cidade / UF de residência *
                  </label>
                  <input
                    id="lead-city"
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: Campinas - SP"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 px-4 font-sans text-sm text-slate-800 outline-none focus:border-[#0F4C81] focus:bg-white transition-all shadow-sm"
                  />
                </div>

                {/* Dropdowns fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="lead-type" className="block font-sans text-xs font-semibold text-slate-700 mb-2">
                      Tipo de Atendimento
                    </label>
                    <select
                      id="lead-type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 px-4 font-sans text-sm text-slate-800 outline-none focus:border-[#0F4C81] focus:bg-white transition-all shadow-sm"
                    >
                      <option value="Dependência Química">Dependência Química</option>
                      <option value="Alcoolismo">Alcoolismo</option>
                      <option value="Outras Compulsões">Outras Compulsões</option>
                      <option value="Saúde Mental / Depressão">Saúde Mental / Depressão</option>
                      <option value="Outro caso">Outro caso</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="lead-payment" className="block font-sans text-xs font-semibold text-slate-700 mb-2">
                      Forma de Pagamento
                    </label>
                    <select
                      id="lead-payment"
                      value={payment}
                      onChange={(e) => setPayment(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 px-4 font-sans text-sm text-slate-800 outline-none focus:border-[#0F4C81] focus:bg-white transition-all shadow-sm"
                    >
                      <option value="Particular">Particular</option>
                      <option value="Plano/Convênio de Saúde">Plano/Convênio de Saúde</option>
                    </select>
                  </div>
                </div>

                {/* Custom Message Area */}
                <div>
                  <label htmlFor="lead-msg" className="block font-sans text-xs font-semibold text-slate-700 mb-2">
                    Sua mensagem (Opcional)
                  </label>
                  <textarea
                    id="lead-msg"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escreva brevemente sobre a situação atual do paciente para orientarmos melhor..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 px-4 font-sans text-sm text-slate-800 outline-none focus:border-[#0F4C81] focus:bg-white transition-all shadow-sm resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  id="lead-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative flex items-center justify-center gap-2.5 rounded-xl bg-[#16A34A] hover:bg-[#148e40] text-white font-sans text-sm font-bold py-4 transition-all duration-300 disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-[#16A34A]/20 shadow-lg shadow-[#16A34A]/20 hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <span className="h-5 w-5 animate-spin border-2 border-white border-t-transparent rounded-full"></span>
                  ) : (
                    <>
                      <Phone className="h-4.5 w-4.5 fill-white" />
                      <span>GERAR CONTATO VIA WHATSAPP</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
