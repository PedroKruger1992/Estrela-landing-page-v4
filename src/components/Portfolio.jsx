import React, { useEffect, useRef } from 'react';
import Container from './Container';

function Portfolio() {
  // Criamos uma referência para controlar a barra de rolagem do carrossel
  const carrosselRef = useRef(null);

  useEffect(() => {
    const carrossel = carrosselRef.current;
    if (!carrossel) return;

    // Função que faz o carrossel rolar para o lado sozinho
    const autoScroll = () => {
      const maxScroll = carrossel.scrollWidth - carrossel.clientWidth;
      
      // Se chegou no final, volta para o início de forma suave
      if (carrossel.scrollLeft >= maxScroll - 5) {
        carrossel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Senão, pula um card para a direita (largura do primeiro card + espaçamento)
        const primeiroCardWidth = carrossel.firstChild?.clientWidth || 300;
        carrossel.scrollBy({ left: primeiroCardWidth + 24, behavior: 'smooth' });
      }
    };

    // Define o tempo de 3000ms (3 segundos) para cada movimento
    const intervalo = setInterval(autoScroll, 3000);

    // Limpa o temporizador se o componente sumir da tela
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="bg-brand-light py-16 overflow-hidden">
      <Container>
        <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Nossas Obras</h2>
        <div
        ref={carrosselRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Card 1 */}
          <div className="bg-brand-card border border-slate-200 rounded-xl p-6 shadow-sm snap-center transition-transform hover:scale-102 duration-300">
          <div className="h-48 w-full bg-slate-200 rounded-lg mb-4 overflow-hidden">
            <img src="https://unsplash.com" alt="Trator" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Concluído</span>
          <h3 className="text-xl font-bold text-brand-dark mt-1 mb-2">Nivelamento de Condomínio</h3>
          <p className="text-slate-600 text-sm">Terraplenagem completa e preparação de solo para pavimentação residencial de alto padrão.</p>
        </div>

        {/* Card 2 */}
          <div className="bg-brand-card border border-slate-200 rounded-xl p-6 shadow-sm snap-center transition-transform hover:scale-102 duration-300">
          <div className="h-48 w-full bg-slate-200 rounded-lg mb-4 overflow-hidden">
            <img src="https://unsplash.com" alt="Escavação" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Concluído</span>
          <h3 className="text-xl font-bold text-brand-dark mt-1 mb-2">Escavação Industrial</h3>
          <p className="text-slate-600 text-sm">Escavação profunda para fundação de galpão logístico com movimentação de grande volume de terra.</p>
        </div>

        {/* Card 3 */}
          <div className="bg-brand-card border border-slate-200 rounded-xl p-6 shadow-sm snap-center transition-transform hover:scale-102 duration-300">
          <div className="h-48 w-full bg-slate-200 rounded-lg mb-4 overflow-hidden">
            <img src="https://unsplash.com" alt="Caminhão" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Em Andamento</span>
          <h3 className="text-xl font-bold text-brand-dark mt-1 mb-2">Limpeza de Loteamento</h3>
          <p className="text-slate-600 text-sm">Remoção completa de vegetação rasteira, tocos e detritos para abertura de novas vias de acesso.</p>
        </div>
      </div>
      </Container>
    </section>
  );
}

export default Portfolio;
