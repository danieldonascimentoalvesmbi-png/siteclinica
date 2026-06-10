import { useState, useEffect } from "react";
import { Phone, Mail, Globe, Shield, MapPin, X } from "lucide-react";
import { getWhatsAppNumber } from "../utils/whatsapp";

export default function Footer() {
  const [waNumber, setWaNumber] = useState(getWhatsAppNumber());
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  useEffect(() => {
    const handleWaChange = () => {
      setWaNumber(getWhatsAppNumber());
    };
    window.addEventListener("whatsapp_changed", handleWaChange);
    return () => {
      window.removeEventListener("whatsapp_changed", handleWaChange);
    };
  }, []);

  const formatPhoneNumber = (num: string) => {
    // Basic formatting for display
    if (num.length >= 13) {
      return `+${num.substring(0,2)} (${num.substring(2,4)}) ${num.substring(4,9)}-${num.substring(9)}`;
    }
    return "+55 (11) 99999-9999";
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-app-footer" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Col 1 - Logo, Descriptor and Referral networks warning */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#0F4C81] to-[#16A34A] text-white">
                <Shield className="h-4.5 w-4.5" />
              </div>
              <span className="font-sans text-sm font-black tracking-tight text-white uppercase">
                Dependência Química <span className="text-[#16A34A]">BR</span>
              </span>
            </div>
            
            <p className="font-sans text-xs text-slate-500 leading-relaxed">
              <strong>Dependência Química BR</strong> atua exclusivamente como uma Central Privada de Encaminhamento para Tratamento Especializado. Conectamos pacientes e familiares a unidades de saúde parceiras e devidamente licenciadas.
            </p>
            
            <p className="font-sans text-[11px] text-slate-600 leading-relaxed font-semibold">
              * Nota: Não exercemos atividade de clínica de reabilitação própria no local de atendimento administrativo. Os tratamentos e atendimentos médicos e ambulatoriais ocorrem exclusivamente nas instalações físicas das unidades parceiras indicadas no processo de triagem.
            </p>
          </div>

          {/* Col 2 - Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-xs font-bold tracking-wider text-white uppercase mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#unidades" className="hover:text-white transition-colors">Galeria de Unidades</a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">Planos e Facilidades</a>
              </li>
              <li>
                <a href="#convenios" className="hover:text-white transition-colors">Convênios Aceitos</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
              </li>
            </ul>
          </div>

          {/* Col 3 - Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans text-xs font-bold tracking-wider text-white uppercase">
              Canais de Contato
            </h4>
            <ul className="space-y-3 font-sans text-xs">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[#16A34A] shrink-0" />
                <span>Nacional - Coleta e Encaminhamento Brasil</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#16A34A] shrink-0" />
                <span className="font-mono">{formatPhoneNumber(waNumber)}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#16A34A] shrink-0" />
                <span>contato@dependenciaquimicabr.com.br</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-[#16A34A] shrink-0" />
                <span>www.dependenciaquimicabr.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and legal buttons */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-slate-600 text-center sm:text-left">
            &copy; {currentYear} Dependência Química BR. Todos os direitos reservados. CNPJ sob nº 41.530.852/0001-92.
          </p>
          
          <div className="flex gap-4 font-sans text-[10px] font-semibold tracking-wide uppercase text-slate-500">
            <button
              onClick={() => setActiveModal("privacy")}
              className="hover:text-white transition-colors"
            >
              Política de Privacidade
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setActiveModal("terms")}
              className="hover:text-white transition-colors"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>

      {/* simulated Legal overlays */}
      {activeModal && (
        <div
          onClick={() => setActiveModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-slate-800 rounded-2xl max-w-2xl w-full p-6 md:p-8 border border-slate-200 shadow-2xl relative animate-scale overflow-y-auto max-h-[85vh]"
          >
            {/* Close */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {activeModal === "privacy" ? (
              <div className="space-y-4">
                <h3 className="font-sans text-xl font-black text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#0F4C81]" />
                  Política de Privacidade
                </h3>
                <div className="font-sans text-xs leading-relaxed text-slate-600 space-y-3">
                  <p>
                    A Dependência Química BR preza integralmente pela segurança e confidencialidade das informações enviadas por meio de nosso portal de triagem de leads de reabilitação.
                  </p>
                  <p><strong>1. Tratamento de Dados:</strong></p>
                  <p>
                    Coletamos exclusivamente nome, número de telefone para contato via WhatsApp, cidade de residência e escopo do tratamento clínico básico desejado para realizar as primeiras mediações necessárias de encaminhamento.
                  </p>
                  <p><strong>2. Não salvamento de Prontuários em DB:</strong></p>
                  <p>
                    Por motivos estritos de segurança e sigilo, as informações preenchidas no formulário não são salvas de forma estática em servidores de bancos de dados da internet. Ao clicar no botão, os dados são convertidos instantaneamente em formato de mensagem legível para redirecionamento imediato para o WhatsApp.
                  </p>
                  <p><strong>3. Compartilhamento:</strong></p>
                  <p>
                    Nenhum dado é vendido ou terceirizado para fora do escopo imediato de atendimento clínico estabelecido de comum acordo entre a central e os representantes do paciente.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-sans text-xl font-black text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#0F4C81]" />
                  Termos de Uso do Serviço
                </h3>
                <div className="font-sans text-xs leading-relaxed text-slate-600 space-y-3">
                  <p>
                    Ao acessar este portal e preencher as informações de encaminhamento clínico, você concorda expressamente com os regulamentos operacionais abaixo.
                  </p>
                  <p><strong>1. Natureza do Serviço de Encaminhamento:</strong></p>
                  <p>
                    A Dependência Química BR funciona estritamente como agente facilitador de busca de locais adequados para reabilitação médica de compulsões físicas e mentais. Não operamos instalações asilares e médicas próprias.
                  </p>
                  <p><strong>2. Limitação de Responsabilidade:</strong></p>
                  <p>
                    O acompanhamento assistencial, clínico, terapêutico e médico do paciente é de responsabilidade técnica integral e exclusiva da instituição clínica parceira selecionada durante a triagem inicial e formalizada pelo contrato de reabilitação assinado pelo responsável.
                  </p>
                  <p><strong>3. Contatos Autorizados:</strong></p>
                  <p>
                    Ao submeter o formulário de contato, você expressamente declara sua autoria legal sobre as informações fornecidas, autorizando nossos assistentes reguladores técnicos a iniciarem conversações via telefone e WhatsApp.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
