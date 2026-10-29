import React from 'react';
import Container from './Container';

function Sobre() {
  return (
    <section id="sobre" className="bg-white py-16 scroll-mt-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Sobre Nós</p>
            <h2 className="mt-2 text-3xl font-bold text-brand-dark">Mais de 10 anos de experiência em terraplenagem</h2>
            <p className="mt-4 text-slate-600">A Estrela Terraplenagem atua há mais de 10 anos no mercado, realizando serviços de terraplenagem, escavação, nivelamento e limpeza de terrenos em Londrina e região.</p>
            <p className="mt-4 text-slate-600">Nosso compromisso é entregar cada obra com segurança, precisão e respeito ao prazo combinado, para que o seu projeto comece sobre uma base sólida.</p>
          </div>
          <img src="\obras\aterro-depois.jpg" alt="Terreno após aterro e nivelamento" loading="lazy" className="w-full h-72 md:h-96 object-cover rounded-xl shadow" />
        </div>
      </Container>
    </section>
  );
}

export default Sobre;