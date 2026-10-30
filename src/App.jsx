import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AntesDepois from "./components/AntesDepois";
import FaixaOrcamento from "./components/FaixaOrcamento";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import WhatsAppFlutuante from "./components/WhatsAppFlutuante.jsx";

const App = () => {
  return (
    <div className="bg-brand-light min-h-screen text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AntesDepois />
      <FaixaOrcamento />
      <Sobre />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </div>
  );
};

export default App;
