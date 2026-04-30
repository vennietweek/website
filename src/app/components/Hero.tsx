import { motion } from 'motion/react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl tracking-tight mb-6 text-[#1a1a1a]">
            Venessa Tan
          </h1>

          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-8 max-w-2xl mx-auto">
            Product Manager building AI-powered products
          </p>

          <p className="text-base md:text-lg text-[#6a6a6a] leading-relaxed mb-12 max-w-3xl mx-auto">
            I work across product strategy, experimentation, and technical execution — from 0→1 product development to lifecycle optimisation and AI-powered workflows.
            <br /><br />
            Currently building <span className="text-[#1a1a1a] font-medium">Innerra</span> — a quiet companion for turning everyday thoughts into calm, structured emotional insight over time.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] px-8 py-6 rounded-xl text-base"
            >
              View Projects
            </Button>

            <Button
              variant="outline"
              onClick={() => scrollToSection('resume')}
              className="border-[#d4d4d4] text-[#1a1a1a] hover:bg-[#f5f5f5] px-8 py-6 rounded-xl text-base"
            >
              Resume
            </Button>

            <Button
              variant="outline"
              asChild
              className="border-[#d4d4d4] text-[#1a1a1a] hover:bg-[#f5f5f5] px-8 py-6 rounded-xl text-base"
            >
              <a href="https://www.linkedin.com/in/venessa-tan-wk/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>

            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-[#d4d4d4] text-[#1a1a1a] hover:bg-[#f5f5f5] px-8 py-6 rounded-xl text-base"
            >
              Contact
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
