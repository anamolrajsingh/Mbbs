
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-16">
          <div className="max-w-xl">
            <h3 className="font-bold text-lg mb-6 text-gradient">MBBS Nepal</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Empowering the next generation of healers in Nepal. We provide clarity, research-backed guidance, and inspiration for your medical career through high-quality education insights.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-400">
          <p>© 2026 MBBS Nepal. Designed with excellence for future doctors.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-black transition-colors cursor-default">Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
