
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[95vh] flex flex-col items-center justify-start text-center px-6 overflow-hidden pt-24 md:pt-40 pb-20">
      {/* Main Content Area */}
      <div className="fade-in max-w-4xl mx-auto z-10 mb-16 md:mb-24">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full liquid-glass text-blue-600 text-xs font-bold tracking-[0.2em] uppercase">
          Nepal's Medical Excellence
        </div>
        <h1 className="text-5xl md:text-[88px] font-bold tracking-tighter leading-[0.98] mb-8 text-gradient">
          The future of healing<br />is pure liquid potential.
        </h1>
        <p className="text-lg md:text-2xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Experience a world-class journey into medicine. Where compassion meets cutting-edge innovation in the heart of the Himalayas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <button className="bg-[#0071e3] text-white px-10 py-5 rounded-full text-lg font-medium viscous-btn shadow-lg">
            Begin Your Journey
          </button>
          <a 
            href="https://www.youtube.com/watch?v=zvPN-qhkNM4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0066cc] hover:underline flex items-center text-lg font-medium group cursor-pointer transition-all"
          >
            Watch the film
            <div className="w-8 h-8 rounded-full liquid-glass ml-3 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
      
      {/* Liquid Glass Showcase */}
      <div className="relative w-full max-w-[1200px] px-4 group">
        {/* Floating Refractive Card - Moved higher towards the top of the image */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-20 liquid-glass px-10 md:px-16 py-8 rounded-[3rem] shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-white/60 transform transition-all duration-1000 group-hover:scale-105 pointer-events-none">
          <p className="text-[18px] md:text-[22px] font-semibold text-gray-900 tracking-tight whitespace-nowrap flex items-center justify-center">
            A Noble Pursuit. A Lifetime of Service.
          </p>
        </div>

        {/* Hero Image Container with Viscous Border Radius */}
        <div className="overflow-hidden rounded-[3.5rem] shadow-[0_60px_100px_rgba(0,113,227,0.1)] bg-white p-2 border border-white/50">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Medical Institute" 
            className="w-full h-[450px] md:h-[700px] object-cover rounded-[3rem] transition-transform duration-[6s] group-hover:scale-110"
          />
        </div>
        
        {/* Decorative Liquid Orbs */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 liquid-glass rounded-full blur-2xl opacity-50 z-[-1]"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl z-[-1]"></div>
      </div>
    </div>
  );
};

export default Hero;
