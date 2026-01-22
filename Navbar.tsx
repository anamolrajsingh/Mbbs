
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const links = [
    { label: 'Overview', href: '#about' },
    { label: 'Why MBBS', href: '#why-mbbs' },
    { label: 'Career', href: '#careers' },
    { label: 'Impact', href: '#impact' },
    { label: 'AI Mentor', href: '#mentor' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'apple-glass h-12' : 'bg-transparent h-16'}`}>
      <div className="max-w-[1000px] mx-auto h-full px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-white text-[10px] font-bold">M</span>
          </div>
          <span className="font-semibold text-[17px] tracking-tight">MBBS Nepal</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-medium text-gray-600 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Removed Join Path button for a cleaner minimal look */}
        <div className="w-10 md:hidden"></div> 
      </div>
    </nav>
  );
};

export default Navbar;
