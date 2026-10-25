import React from 'react';

const WHATSAPP = '5500000000000';
const MENSAGEM = 'Olá! Gostaria de solicitar um orçamento.';

function BotaoWhatsApp({ texto = 'Solicitar Orçamento', className = '' }) {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-brand-primary text-white py-2 px-4 rounded hover:bg-brand-primary-dark ${className}`}
    >
      {texto}
    </a>
  );
}

export default BotaoWhatsApp;