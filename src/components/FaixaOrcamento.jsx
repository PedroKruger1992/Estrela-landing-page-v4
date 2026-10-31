import React from 'react';
import Container from './Container';
import BotaoWhatsApp from './BotaoWhatsApp';

const FaixaOrcamento = () => {
  return (
    <section className="bg-brand-action text-white py-12">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Precisa de terraplenagem em Londrina e região?</h2>
            <p className="mt-2 text-white/90">Peça seu orçamento pelo WhatsApp e fale direto com a nossa equipe.</p>
          </div>
          <BotaoWhatsApp apenasIcone className="shrink-0" />
        </div>
      </Container>
    </section>
  );
};

export default FaixaOrcamento;