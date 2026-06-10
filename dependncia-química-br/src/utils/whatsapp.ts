// WhatsApp Utility for lead redirection and admin configuration

export const DEFAULT_WHATSAPP_NUMBER = "5511999999999"; // Default Brazilian mockup phone number
export const DEFAULT_MSG_HERO = "Olá! Gostaria de falar com um especialista sobre encaminhamento e tratamento de dependência.";
export const DEFAULT_MSG_PLAN = "Olá! Tenho interesse no *Plano {PLAN_NAME}* no valor de {PLAN_PRICE}. Gostaria de entender melhor as condições.";
export const DEFAULT_MSG_INSURANCE = "Olá! Gostaria de consultar a disponibilidade do meu convênio para encaminhamento de tratamento.";
export const DEFAULT_MSG_LEAD = "Olá! Gostaria de receber atendimento especializado.\n\n*Dados do Lead:*\n• *Nome:* {NAME}\n• *Telefone:* {PHONE}\n• *Cidade/UF:* {CITY}\n• *Atendimento:* {TYPE}\n• *Pagamento:* {PAYMENT}\n• *Mensagem:* {MESSAGE}";

/**
 * Gets the configured WhatsApp number from localStorage or returns default
 */
export function getWhatsAppNumber(): string {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("dq_whatsapp_number");
    if (stored) return stored.replace(/\D/g, "");
  }
  return DEFAULT_WHATSAPP_NUMBER;
}

/**
 * Saves a new WhatsApp number to localStorage
 */
export function saveWhatsAppNumber(num: string): void {
  const digits = num.replace(/\D/g, "");
  if (digits && typeof window !== "undefined") {
    localStorage.setItem("dq_whatsapp_number", digits);
  }
}

/**
 * Generates the clean api.whatsapp.com URL
 */
export function generateWhatsAppLink(text: string, customPhone?: string): string {
  const phone = customPhone ? customPhone.replace(/\D/g, "") : getWhatsAppNumber();
  const encodedText = encodeURIComponent(text);
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`;
}

/**
 * Trigger WhatsApp redirection
 */
export function redirectWhatsApp(text: string, customPhone?: string): void {
  if (typeof window !== "undefined") {
    const link = generateWhatsAppLink(text, customPhone);
    window.open(link, "_blank", "noopener,noreferrer");
  }
}
