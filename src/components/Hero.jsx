import React from 'react';
import BotaoWhatsApp from './BotaoWhatsApp';
import Container from './Container';

const Hero = () => {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-end overflow-hidden text-white">
      <img src="/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-[62%_center] md:object-center" />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/10" />
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/30 to-transparent" />
      <div className="relative z-10 w-full">
      <Container>
      <div className="max-w-2xl pt-32 pb-16">
      <h1 className="text-5xl font-bold mb-4">A base sólida que o seu grande projeto precisa</h1>
      <h2 className="text-2xl mb-8">Especialistas em terraplenagem, escavação e nivelamento com máxima precisão e segurança</h2>
      <div>
        <BotaoWhatsApp />
      </div>
    </div>
      </Container>
      </div>
    </section>
  );
};

export default Hero;