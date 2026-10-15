import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

const HomePage = () => {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};

export default HomePage;