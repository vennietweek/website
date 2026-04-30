import { motion } from 'motion/react';
import { Lightbulb, Code, Rocket } from 'lucide-react';

export function ExperienceHighlights() {
  const highlights = [
    {
      icon: Lightbulb,
      title: 'Product Thinking',
      description: 'Strategic product development from discovery to launch. Experienced in defining product vision, prioritizing roadmaps, and balancing user needs with business goals.'
    },
    {
      icon: Code,
      title: 'Technical Fluency',
      description: 'Hands-on with AI systems, RAG architectures, and modern web stacks. Comfortable bridging product and engineering to make informed technical tradeoffs.'
    },
    {
      icon: Rocket,
      title: '0→1 Building',
      description: 'Led multiple products from concept to launch. Experienced in rapid prototyping, user validation, and iterating based on real-world feedback.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl tracking-tight text-[#1a1a1a] mb-4">Experience Highlights</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#fafaf9] border border-[#e5e5e5] hover:border-[#d4d4d4] transition-all duration-300"
            >
              <div className="mb-6">
                <div className="size-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center">
                  <highlight.icon className="size-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl text-[#1a1a1a] mb-3">{highlight.title}</h3>
              <p className="text-base text-[#6a6a6a] leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
