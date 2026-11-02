// Datos de contacto de la marca: usar siempre estas constantes, nunca escribir los enlaces a mano
export const WHATSAPP_NUMBER = '34604529618';
// El número solo se enseña en la página de contacto; en el resto, enlaces que abren WhatsApp
export const WHATSAPP_DISPLAY = '+34 604 52 96 18';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_HANDLE = '@puntadasbcn';
export const INSTAGRAM_URL = 'https://www.instagram.com/puntadasbcn/';

// Enlace de WhatsApp con el mensaje ya escrito
export function whatsappLink(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
