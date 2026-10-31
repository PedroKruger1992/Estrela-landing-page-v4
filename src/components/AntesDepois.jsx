import React from 'react';
import Container from './Container';

const obras = [
  {
    titulo: "Aterro e pedra",
    descricao: "Terreno preparado com aterro e camada de pedra, pronto para a próxima etapa da obra.",
    antes: "/obras/aterro-pedra-antes.jpg",
    depois: "/obras/aterro-pedra-depois.jpg",
  },
  {
    titulo: "Demolição",
    descricao: "Demolição da construção existente e remoção do entulho, deixando o terreno limpo.",
    antes: "/obras/demolicao-antes.jpg",
    depois: "/obras/demolicao-depois.jpg",
  },
  {
    titulo: "Limpeza e escavação",
    descricao: "Remoção da vegetação e escavação do terreno, que ficou limpo e nivelado.",
    antes: "/obras/limpeza-escavacao-antes.jpg",
    depois: "/obras/limpeza-escavacao-depois.jpg",
  },
  {
    titulo: "Aterro para baldrame",
    descricao: "Aterro do terreno na altura da fundação, pronto para a obra seguir.",
    antes: "/obras/aterro-baldrame-antes.jpg",
    depois: "/obras/aterro-baldrame-depois.jpg",
  },
];

function AntesDepois() {
  return (
    <section id="obras" className="bg-brand-dark py-16 scroll-mt-24">
      <Container>
        <h2 className="text-3xl font-bold text-white text-center mb-10">Obras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {obras.map(obra => (
            <div key={obra.titulo} className="bg-white rounded-xl shadow p-4">
              <div className="grid grid-cols-2 gap-2">
                <figure className="relative">
                  <img src={obra.antes} alt={`Antes: ${obra.titulo}`} loading="lazy" className="w-full h-40 md:h-52 object-cover rounded-lg" />
                  <figcaption className="absolute top-2 left-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded">ANTES</figcaption>
                </figure>
                <figure className="relative">
                  <img src={obra.depois} alt={`Depois: ${obra.titulo}`} loading="lazy" className="w-full h-40 md:h-52 object-cover rounded-lg" />
                  <figcaption className="absolute top-2 left-2 bg-brand-action text-white text-xs font-semibold px-2 py-1 rounded">DEPOIS</figcaption>
                </figure>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-dark">{obra.titulo}</h3>
              <p className="mt-1 text-sm text-slate-600">{obra.descricao}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AntesDepois;
