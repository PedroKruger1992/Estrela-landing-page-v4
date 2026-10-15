import React from 'react';
const Navbar = () => {
  return (
    <nav className="bg-zinc-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          Estrela
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#/" className="hover:text-amber-500">
              Início
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-amber-500">
              Serviços
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-amber-500">
              Sobre Nós
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-amber-500">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;