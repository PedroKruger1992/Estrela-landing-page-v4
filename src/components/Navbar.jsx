import React, { useState } from 'react';
import logo from '@/assets/logo.png'; // Import the logo image
import BotaoWhatsApp from './BotaoWhatsApp';
import Container from './Container'; // Added import for Container

const Navbar = () => {
  const [aberto, setAberto] = useState(false);

  const links = [
    { label: 'Início', href: '#/' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre Nós', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-dark/35 backdrop-blur-md p-4 border-b border-white/10 py-1">
      <Container>
        <div className="flex justify-between items-center py-2">
        <a href="#" className="text-brand-primary text-xl font-bold">
          <img src={logo} alt="Estrela Logo" className="h-20" /> {/* Replace text with logo image */}
        </a>
          <button className="md:hidden text-white text-3xl" onClick={() => setAberto(!aberto)} aria-label="Abrir menu" aria-expanded={aberto}>
            {aberto ? '✕' : '☰'}
          </button>
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-lg font-semibold text-brand-primary hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          <li>
            <BotaoWhatsApp texto="Orçamento" className="font-semibold" />
          </li>
        </ul>
      </div>
        {aberto && (
          <ul className="md:hidden flex flex-col gap-4 pb-6">
            {links.map((link, index) => (
              <li key={index} onClick={() => setAberto(false)}>
                <a href={link.href} className="text-lg font-semibold text-brand-primary hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
            <li onClick={() => setAberto(false)}>
              <BotaoWhatsApp texto="Orçamento" className="font-semibold" />
            </li>
          </ul>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
