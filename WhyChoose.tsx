
import React from 'react';

const WhyChoose: React.FC = () => {
  const points = [
    {
      title: "Noble Profession",
      desc: "Medicine is globally recognized as the most honorable profession, offering a direct opportunity to alleviate human suffering.",
      icon: "✨"
    },
    {
      title: "Intellectual Growth",
      desc: "Constantly evolve with modern science. Every patient is a new challenge that sharpens your analytical and clinical skills.",
      icon: "🧠"
    },
    {
      title: "Global Mobility",
      desc: "Graduates from Nepal are eligible for international exams like USMLE (USA), PLAB (UK), and AMC (Australia).",
      icon: "🌍"
    },
    {
      title: "Immediate Impact",
      desc: "From rural clinics in the Himalayas to high-tech hospitals in Kathmandu, your presence saves lives every day.",
      icon: "💓"
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Why embark on this path?</h2>
        <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
          The decision to study MBBS is more than a career choice; it's a lifestyle of service and lifelong learning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((p, i) => (
          <div key={i} className="liquid-glass p-10 rounded-[3rem] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,113,227,0.15)] group">
            <div className="w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center text-3xl mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
              {p.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{p.title}</h3>
            <p className="text-gray-500 leading-relaxed font-light">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
