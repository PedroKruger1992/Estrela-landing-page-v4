import React from 'react';

const ServicesSection = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-center justify-center mb-4">
            <svg className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Terraplenagem e Nivelamento</h3>
          <p>Professionally handled earthworks and leveling services.</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-center justify-center mb-4">
            <svg className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16L16 8M16 16L8 8" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Escavação e Demolição</h3>
          <p>Professional excavation and demolition services.</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-center justify-center mb-4">
            <svg className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Limpeza de Terrenos</h3>
          <p>Efficient land clearing services to prepare your site.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;