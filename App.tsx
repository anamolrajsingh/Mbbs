
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMBBS from './components/AboutMBBS';
import WhyChoose from './components/WhyChoose';
import CareerInsights from './components/CareerInsights';
import SocialImpact from './components/SocialImpact';
import MedicalMentor from './components/MedicalMentor';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-100">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="py-24">
          <AboutMBBS />
        </section>

        <section id="why-mbbs" className="py-24 bg-[#f5f5f7]">
          <WhyChoose />
        </section>

        <section id="careers" className="py-24">
          <CareerInsights />
        </section>

        <section id="impact" className="py-24 bg-black text-white">
          <SocialImpact />
        </section>

        <section id="mentor" className="py-24 bg-[#f5f5f7]">
          <MedicalMentor />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
