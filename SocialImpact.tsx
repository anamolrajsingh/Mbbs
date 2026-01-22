
import React from 'react';

const SocialImpact: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 text-center">
      <div className="py-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">Building a healthy nation.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-4">
            <img 
              src="https://picsum.photos/seed/comm/400/400" 
              className="w-full h-64 object-cover rounded-3xl mb-6 grayscale hover:grayscale-0 transition-all duration-700"
              alt="Community Service"
            />
            <h4 className="text-xl font-bold mb-4">The Community Anchor</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              In rural Nepal, a doctor is often the only hope for thousands. You become the foundation of community trust and health.
            </p>
          </div>
          <div className="p-4">
            <img 
              src="https://picsum.photos/seed/science/400/400" 
              className="w-full h-64 object-cover rounded-3xl mb-6 grayscale hover:grayscale-0 transition-all duration-700"
              alt="Scientific Progress"
            />
            <h4 className="text-xl font-bold mb-4">Modernizing Health</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Leading the digital transformation of hospitals, implementing telemedicine, and bringing global standards to local care.
            </p>
          </div>
          <div className="p-4">
            <img 
              src="https://picsum.photos/seed/care/400/400" 
              className="w-full h-64 object-cover rounded-3xl mb-6 grayscale hover:grayscale-0 transition-all duration-700"
              alt="Patient Care"
            />
            <h4 className="text-xl font-bold mb-4">Guardian of Life</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              From the first breath to the last, you are the steward of the most precious asset on earth—human life.
            </p>
          </div>
        </div>
        
        <div className="mt-20 max-w-2xl mx-auto border-t border-gray-800 pt-16">
          <p className="text-3xl font-light italic text-gray-300">
            "Wherever the art of Medicine is loved, there is also a love of Humanity."
          </p>
          <p className="text-sm text-gray-500 mt-6 tracking-widest uppercase">— Hippocrates</p>
        </div>
      </div>
    </div>
  );
};

export default SocialImpact;
