import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AntesDepois from "./components/AntesDepois";
import FaixaOrcamento from "./components/FaixaOrcamento";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import WhatsAppFlutuante from "./components/WhatsAppFlutuante";

const App = () => {
  return (
    <div className="bg-brand-light min-h-screen text-brand-dark">
      <Navbar />
      <Hero />
      <Services />
      <AntesDepois />
      <FaixaOrcamento />
      <Sobre />
      <Footer />
      <WhatsAppFlutuante />
    </div>
  );
};

export default App;
