import React from 'react';
import logo from '@/assets/logo.png'; // Import the logo image

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-brand-dark text-xl font-bold">
          <img src={logo} alt="Estrela Logo" className="h-12" /> {/* Replace text with logo image */}
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#/" className="text-brand-dark hover:text-brand-primary">
              Início
            </a>
          </li>
          <li>
            <a href="#services" className="text-brand-dark hover:text-brand-primary">
              Serviços
            </a>
          </li>
          <li>
            <a href="#about" className="text-brand-dark hover:text-brand-primary">
              Sobre Nós
            </a>
          </li>
          <li>
            <a href="#contact" className="text-brand-dark hover:text-brand-primary">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;