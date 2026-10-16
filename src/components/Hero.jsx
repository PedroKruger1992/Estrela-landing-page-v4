import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white text-brand-dark py-20 px-10">
      <h1 className="text-5xl font-bold mb-4">A base sólida que o seu grande projeto precisa</h1>
      <h2 className="text-2xl mb-8">Especialistas em terraplenagem, escavação e nivelamento com máxima precisão e segurança</h2>
      <div>
        <button className="bg-brand-primary text-white py-2 px-4 mr-4 rounded hover:bg-brand-primary-dark">Solicitar Orçamento</button>
      </div>
    </div>
  );
};

export default Hero;