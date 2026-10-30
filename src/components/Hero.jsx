import React from 'react';
import BotaoWhatsApp from './BotaoWhatsApp';
import Container from './Container';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[75vh] md:min-h-[85vh] flex items-end overflow-hidden text-white">
      <img src="/hero.jpg" alt="" fetchPriority="high" width="1600" height="900" className="absolute inset-0 w-full h-full object-cover object-[62%_center] md:object-center" />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/10" />
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/30 to-transparent" />
      <div className="relative z-10 w-full">
      <Container>
      <div className="max-w-2xl pt-32 pb-16">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span aria-hidden="true" className="text-2xl md:text-3xl text-brand-primary">★</span>
        <p className="text-2xl md:text-3xl font-extrabold tracking-wide text-white drop-shadow-lg">
          Estrela <span className="text-brand-primary [text-shadow:0_0_18px_rgba(226,116,37,0.55)]">Terraplenagem</span>
        </p>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">Terraplenagem em Londrina com a base sólida que a sua obra precisa</h1>
      <h2 className="text-2xl mb-8 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">Mais de 10 anos preparando terrenos com precisão e segurança: escavação, nivelamento, aterro, demolição e limpeza.</h2>
      <div>
        <BotaoWhatsApp />
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]"><li>✓ Mais de 10 anos de experiência</li><li>✓ Londrina e região</li><li>✓ Orçamento pelo WhatsApp</li></ul>
      </div>
    </div>
      </Container>
      </div>
    </section>
  );
};

export default Hero;
