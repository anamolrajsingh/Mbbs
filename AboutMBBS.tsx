
import React from 'react';

const AboutMBBS: React.FC = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-bold tracking-wider uppercase text-[10px] mb-6">
            The Academic Voyage
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-8 leading-[1.1]">
            Define your destiny.<br />5.5 years of excellence.
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
            <p>
              MBBS in Nepal represents a standard of clinical education that is revered across South Asia. It's a holistic immersion into the art of healing.
            </p>
            <p>
              Through TU, KU, and specialized institutes like BPKIHS, you gain hands-on access to one of the most diverse patient pools in the world.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
            <div className="liquid-glass p-6 rounded-[2rem] text-center border-none">
              <p className="text-3xl font-bold text-black">20+</p>
              <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-[0.2em] font-bold">Top Colleges</p>
            </div>
            <div className="liquid-glass p-6 rounded-[2rem] text-center border-none">
              <p className="text-3xl font-bold text-black">5.5 yrs</p>
              <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-[0.2em] font-bold">Residency Path</p>
            </div>
          </div>
        </div>
        
        <div className="relative group p-4">
          <div className="absolute inset-0 bg-blue-400/10 rounded-[3rem] blur-3xl transform -rotate-6"></div>
          {/* Updated Main AI Medical Professional Image (Boy/Male Doctor) */}
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200" 
            alt="Medical Professional" 
            className="relative z-10 rounded-[3rem] shadow-2xl group-hover:scale-[1.03] transition-transform duration-1000 w-full aspect-[4/5] object-cover"
          />
          
          {/* Floating Quote Card with Male Doctor Avatar */}
          <div className="absolute -bottom-8 -right-8 z-20 liquid-glass p-8 rounded-[2.5rem] shadow-2xl max-w-[260px] border-white/80">
            <p className="text-sm font-semibold text-gray-800 leading-relaxed italic">"The clinical exposure in Nepal is unparalleled in its depth."</p>
            <div className="flex items-center mt-5">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/50 shadow-sm mr-3">
                <img 
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200" 
                  alt="Dr. Aryan Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[11px] text-blue-600 font-bold uppercase tracking-wider leading-none">Dr. Aryan Sharma</p>
                <p className="text-[9px] text-gray-400 font-medium uppercase mt-1">NMC Registered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMBBS;
