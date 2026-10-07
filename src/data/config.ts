export const WHATSAPP_NUMBER = '5547996197584';
export const WHATSAPP_DISPLAY = '(47) 99619-7584';
export const PHONE_CONTACT = '(47) 99619-7584';
export const INSTAGRAM_HANDLE = '@grupoapex.agro';
export const INSTAGRAM_URL = 'https://instagram.com/grupoapex.agro';
export const EMAIL_CONTACT = 'contato@apexagro.com.br';
export const ADDRESS_CONTACT = 'Santa Catarina, Brasil';

export const WHATSAPP_MESSAGES = {
  vender: 'Olá! Tenho uma máquina ou oportunidade para vender e gostaria de falar com a Apex Agro.',
  comprar: 'Olá! Estou procurando uma máquina ou oportunidade no agro e gostaria de falar com a Apex Agro.',
  negocio: 'Olá! Tenho um negócio ou oportunidade no agro e gostaria de falar com a Apex Agro.',
  estoque: 'Olá! Gostaria de consultar as máquinas disponíveis no estoque da Apex Agro.',
  geral: 'Olá! Conheci a Apex Agro pelo site e gostaria de mais informações.',
};

export const getWhatsAppUrl = (
  type: 'vender' | 'comprar' | 'negocio' | 'geral' | 'estoque' = 'geral'
) => {
  const text = WHATSAPP_MESSAGES[type] || WHATSAPP_MESSAGES.geral;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

