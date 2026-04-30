import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

export function Resume() {
  const experiences = [
    {
      company: 'Innerra',
      role: 'Founder & Product Lead',
      period: '2025 — Present',
      description: 'Building a personal AI companion for reflection and emotional insight.'
    },
    {
      company: 'GIC',
      role: 'Product Manager',
      period: '2023 — 2024',
      description: 'Built enterprise RAG knowledge assistant for internal onboarding and knowledge search.'
    },
    {
      company: 'Vouch',
      role: 'Product Manager',
      period: '2021 — 2023',
      description: 'Led digital ticketing and AI visitor experiences across museums and attractions.'
    },
    {
      company: 'Coffee Meets Bagel',
      role: 'Product Manager',
      period: '2019 — 2021',
      description: 'Led lifecycle experimentation and A/B testing to optimize user engagement.'
    }
  ];

  return (
    <section id="resume" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl tracking-tight text-[#1a1a1a]">Experience</h2>
            <Button
              asChild
              variant="outline"
              className="border-[#d4d4d4] text-[#1a1a1a] hover:bg-[#f5f5f5] px-6 py-5 rounded-full"
            >
              <a href="/documents/Venessa_Tan_Resume.pdf" download>
                <Download className="mr-2 size-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-[#e5e5e5] pl-8 pb-8"
            >
              <div className="relative">
                <div className="absolute -left-[41px] top-1 size-4 rounded-full bg-[#1a1a1a] border-4 border-white" />
                <div className="text-sm text-[#8a8a8a] mb-2">{exp.period}</div>
                <h3 className="text-2xl text-[#1a1a1a] mb-1">{exp.role}</h3>
                <div className="text-lg text-[#4a4a4a] mb-3">{exp.company}</div>
                <p className="text-base text-[#6a6a6a] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
