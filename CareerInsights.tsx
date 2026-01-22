
import React from 'react';

const CareerInsights: React.FC = () => {
  const careers = [
    {
      role: "Medical Officer",
      path: "Immediate post-internship",
      salary: "Rs. 60k - 100k / mo",
      desc: "Gain hands-on clinical experience across various hospital departments."
    },
    {
      role: "Specialist (MD/MS)",
      path: "Post 3 years residency",
      salary: "Rs. 1.5L - 5L+ / mo",
      desc: "Specialize in fields like Surgery, Pediatrics, or Cardiology for high-level care."
    },
    {
      role: "Medical Researcher",
      path: "Academia & Lab focus",
      salary: "Rs. 1L - 3L / mo",
      desc: "Drive medical breakthroughs and contribute to Nepal's health policy."
    }
  ];

  return (
    <div className="max-w-[1000px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-8">Career Growth & Stability</h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
            Medical professionals in Nepal enjoy unmatched job security. As the health sector expands with private investments and government initiatives, the demand for doctors continues to outpace supply.
          </p>
          
          <div className="bg-blue-50 p-8 rounded-[2rem]">
            <h4 className="font-bold text-blue-800 mb-2">Pathway to Success</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">1</span>
                <p className="text-gray-700 text-sm">Pass the Common Entrance Examination (CEE).</p>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">2</span>
                <p className="text-gray-700 text-sm">Graduate with clinical excellence.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">3</span>
                <p className="text-gray-700 text-sm">Acquire NMC licensure and begin practice.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          {careers.map((c, i) => (
            <div key={i} className="border border-gray-100 p-8 rounded-[2rem] hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{c.role}</h3>
                  <p className="text-xs text-blue-600 font-medium tracking-widest uppercase mt-1">{c.path}</p>
                </div>
                <span className="text-sm font-bold text-gray-900">{c.salary}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerInsights;
