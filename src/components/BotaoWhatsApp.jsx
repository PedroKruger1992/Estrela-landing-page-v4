import React from 'react';

const WHATSAPP = '5543999432282';
const MENSAGEM = 'Olá! Gostaria de solicitar um orçamento.';

function BotaoWhatsApp({ texto = 'Solicitar Orçamento', className = '', variante = 'padrao', icone = false, apenasIcone = false }) {
  const estilo = variante === 'claro' ? 'bg-white text-brand-primary hover:bg-slate-100' : 'bg-brand-action text-white hover:bg-brand-primary-dark';

  if (apenasIcone) {
    const verde = variante === 'verde' || variante === 'flutuante';
    const grande = variante === 'flutuante';

    return (
      <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`}
      target="_blank"
      rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        title="Falar pelo WhatsApp"
        className={`inline-flex items-center justify-center ${verde ? `${grande ? 'h-14 w-14 bg-[#25D366]' : 'h-12 w-12 bg-[#25D366]'}` : 'h-16 w-16 bg-white'} rounded-full shadow-lg hover:scale-105 transition-transform ${className}`}
    >
        <img src={verde ? grande ? '/whatsapp-branco.png' : '/whatsapp-branco.png' : '/whatsapp.png'} alt="" className={verde ? grande ? 'h-8 w-8' : 'h-7 w-7' : 'h-9 w-9'} />
    </a>
  );
}

  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 py-2 px-4 rounded ${estilo} ${className}`}
    >
      {icone && <img src="/whatsapp.png" alt="" className="h-5 w-5" />}
      {texto}
    </a>
  );
}

export default BotaoWhatsApp;