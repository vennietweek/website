import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#fafaf9]/95 backdrop-blur-md border-b border-[#e5e5e5]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-lg text-[#1a1a1a] hover:opacity-60 transition-opacity tracking-tight"
        >
          Venessa Tan
        </button>

        <div className="flex gap-4 md:gap-8 text-sm md:text-base text-[#4a4a4a]">
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-[#1a1a1a] transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-[#1a1a1a] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('resume')}
            className="hover:text-[#1a1a1a] transition-colors"
          >
            Resume
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-[#1a1a1a] transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
