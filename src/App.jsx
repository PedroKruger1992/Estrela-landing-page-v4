import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";






const HomePage = () => {
  return (
    <div className="bg-brand-light min-h-screen text-brand-dark">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio /> 
    </div>
  );
};

export default HomePage;
