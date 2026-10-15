import React from 'react';

const Hero = () => {
  return (
    <div className="bg-zinc-900 text-white py-20 px-10">
      <h1 className="text-5xl font-bold mb-4">A base sólida que o seu grande projeto precisa</h1>
      <h2 className="text-2xl mb-8">Especialistas em terraplenagem, escavação e nivelamento com máxima precisão e segurança</h2>
      <div>
        <button className="bg-amber-500 text-white py-2 px-4 mr-4 rounded hover:bg-amber-600">Solicitar Orçamento</button>
        <button className="border border-amber-500 text-amber-500 py-2 px-4 rounded hover:bg-amber-500 hover:text-white">Nossos Serviços</button>
      </div>
    </div>
  );
};

export default Hero;