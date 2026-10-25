import React from 'react';
import Container from './Container';

const ServicesSection = () => {
  return (
    <section className="bg-white py-12">
      <Container>
      <h2 className="text-3xl font-bold mb-8 text-center text-brand-dark">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-brand-card p-4 rounded-lg shadow-sm border border-slate-200 hover:scale-105 transition-transform">
          <div className="flex items-center justify-center mb-4">
            <svg className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Terraplenagem e Nivelamento</h3>
          <p>Preparamos o solo com precisão para que a sua obra comece sobre uma base nivelada e segura, sem retrabalho.</p>
        </div>
        <div className="bg-brand-card p-4 rounded-lg shadow-sm border border-slate-200 hover:scale-105 transition-transform">
          <div className="flex items-center justify-center mb-4">
            <svg className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16L16 8M16 16L8 8" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Escavação e Demolição</h3>
          <p>Escavação e demolição planejadas e executadas com segurança, para manter o cronograma da sua obra em dia.</p>
        </div>
        <div className="bg-brand-card p-4 rounded-lg shadow-sm border border-slate-200 hover:scale-105 transition-transform">
          <div className="flex items-center justify-center mb-4">
            <svg className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Limpeza de Terrenos</h3>
            <p>Realizamos a limpeza completa dos terrenos, removendo resíduos e garantindo um ambiente de trabalho limpo e organizado.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
