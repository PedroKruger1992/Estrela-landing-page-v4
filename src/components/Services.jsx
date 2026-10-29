import React from 'react';
import Container from './Container';

const ServicesSection = () => {
  return (
    <section id="servicos" className="bg-white py-12 scroll-mt-24">
      <Container>
      <h2 className="text-3xl font-bold mb-8 text-center text-brand-dark">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-brand-card overflow-hidden rounded-lg shadow-sm border border-slate-200 hover:scale-105 transition-transform">
          <img className="w-full h-52 object-cover" src="/servicos/terraplenagem.jpg" alt="Terreno nivelado com mini carregadeira" loading="lazy" />
          <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Terraplenagem e Nivelamento</h3>
          <p>Preparamos o solo com precisão para que a sua obra comece sobre uma base nivelada e segura, sem retrabalho.</p>
        </div>
          </div>
        <div className="bg-brand-card overflow-hidden rounded-lg shadow-sm border border-slate-200 hover:scale-105 transition-transform">
          <img className="w-full h-52 object-cover" src="/servicos/escavacao-demolicao.jpg" alt="Escavadeira trabalhando em uma demolição" loading="lazy" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Escavação e Demolição</h3>
            <p>Escavação e demolição planejadas e executadas com segurança, para manter o cronograma da sua obra em dia.</p>
          </div>
          </div>
        <div className="bg-brand-card overflow-hidden rounded-lg shadow-sm border border-slate-200 hover:scale-105 transition-transform">
          <img className="w-full h-52 object-cover" src="/servicos/limpeza-terrenos.jpg" alt="Mini carregadeira limpando um terreno" loading="lazy" />
          <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Limpeza de Terrenos</h3>
            <p>Realizamos a limpeza completa dos terrenos, removendo resíduos e garantindo um ambiente de trabalho limpo e organizado.</p>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default ServicesSection;