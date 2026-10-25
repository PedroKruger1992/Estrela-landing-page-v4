import React from 'react';
import BotaoWhatsApp from './BotaoWhatsApp';
import Container from './Container';

const WHATSAPP = '5500000000000';
const WHATSAPP_EXIBIDO = '(00) 00000-0000';

function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-light">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
          <h3 className="text-xl font-bold">Estrela <span className="text-brand-primary">Terraplenagem</span></h3>
          <p className="mt-3 text-sm text-brand-light/70 max-w-xs">Terraplenagem, escavação e nivelamento com precisão e segurança, do início ao fim da sua obra.</p>
        </div>
          <div className="md:justify-self-center">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Serviços</h4>
          <ul className="mt-3 space-y-2 text-sm text-brand-light/70">
            <li>Terraplenagem e Nivelamento</li>
            <li>Escavação e Demolição</li>
            <li>Limpeza de Terrenos</li>
          </ul>
        </div>
          <div className="md:justify-self-end">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Contato</h4>
          <p className="mt-3 text-sm text-brand-light/70">WhatsApp: {WHATSAPP_EXIBIDO}</p>
          <BotaoWhatsApp texto="Chamar no WhatsApp" className="mt-4" />
        </div>
      </div>
      </Container>
      <Container>
      <div className="border-t border-white/10">
          <p className="py-4 text-xs text-brand-light/50 text-center">© {ano} Estrela Terraplenagem. Todos os direitos reservados.</p>
      </div>
      </Container>
    </footer>
  );
}

export default Footer;