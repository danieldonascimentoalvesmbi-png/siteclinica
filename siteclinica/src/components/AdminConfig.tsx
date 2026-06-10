import { useState, useEffect } from "react";
import { Settings, Check, Phone, Info } from "lucide-react";
import { getWhatsAppNumber, saveWhatsAppNumber } from "../utils/whatsapp";

export default function AdminConfig() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setPhone(getWhatsAppNumber());
  }, []);

  const handleSave = () => {
    saveWhatsAppNumber(phone);
    setIsSaved(true);
    // Dispatch custom event to notify other components to recalculate links
    window.dispatchEvent(new Event("whatsapp_changed"));
    setTimeout(() => {
      setIsSaved(false);
    }, 2500);
  };

  return (
    <div id="admin-configurator" className="fixed bottom-24 left-6 z-50">
      {/* Trigger Button */}
      <button
        id="admin-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 transition-all duration-300 border border-slate-700/50"
        title="Configurações do WhatsApp (Administrador)"
      >
        <Settings className={`h-5 w-5 ${isOpen ? "rotate-90" : ""} transition-transform duration-300`} />
      </button>

      {/* Control Panel Card */}
      {isOpen && (
        <div 
          id="admin-panel-card"
          className="absolute bottom-14 left-0 w-80 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl transition-all duration-300"
        >
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-sans text-sm font-semibold text-slate-900 flex items-center gap-1.5">
              <Settings className="h-4 w-4 text-[#0F4C81]" />
              Configuração WhatsApp
            </h4>
            <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-slate-500">
              ADMINISTRADOR
            </span>
          </div>

          <p className="mb-4 font-sans text-xs text-slate-500 leading-relaxed">
            Configure o número de atendimento principal. Todos os botões do site serão atualizados instantaneamente.
          </p>

          <div className="space-y-3">
            <div>
              <label htmlFor="admin-phone-input" className="block font-sans text-[10px] font-medium text-slate-600 uppercase tracking-wider mb-1">
                Número do WhatsApp (com DDD)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 font-mono text-xs">
                  +55
                </span>
                <input
                  id="admin-phone-input"
                  type="text"
                  value={phone.startsWith("55") ? phone.substring(2) : phone}
                  onChange={(e) => {
                    const clean = e.target.value.replace(/\D/g, "");
                    setPhone("55" + clean);
                  }}
                  placeholder="EX: 11999999999"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-3 font-mono text-xs text-slate-800 outline-none focus:border-[#0F4C81] focus:bg-white transition-colors"
                />
              </div>
            </div>

            <button
              id="admin-save-btn"
              onClick={handleSave}
              className={`flex w-full items-center justify-center gap-1.5 rounded-lg py-2 font-sans text-xs font-semibold text-white shadow-sm transition-all duration-300 ${
                isSaved ? "bg-[#16A34A]" : "bg-[#0F4C81] hover:bg-[#0d406d]"
              }`}
            >
              {isSaved ? (
                <>
                  <Check className="h-4 w-4 animate-scale" />
                  Salvo com sucesso!
                </>
              ) : (
                <>
                  <Phone className="h-4 w-4" />
                  Atualizar Número
                </>
              )}
            </button>
          </div>

          <div className="mt-4 flex items-start gap-1.5 rounded-lg bg-slate-50 p-2.5 border border-slate-100">
            <Info className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
            <p className="font-sans text-[10px] text-slate-500 leading-normal">
              Número atual ativo: <strong className="font-mono">{phone ? `+${phone}` : "(Não configurado)"}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
