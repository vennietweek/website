import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#fafaf9]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl tracking-tight text-[#1a1a1a]">About</h2>

          <div className="space-y-6 text-base md:text-lg text-[#4a4a4a] leading-relaxed">
            <p>
              I'm a Product Manager with 4 years of experience building B2B and consumer products from discovery to launch.
            </p>

            <p>
              I work close to the system—translating product ideas into something concrete through prototyping, experimentation, and working directly with technical workflows. My recent work focuses on AI systems, including RAG pipelines, agentic workflows, and LLM evaluation.
            </p>

            <p>
              Recently, I've been exploring this through projects like Innerra, where I'm experimenting with memory, reflection, and how conversational systems evolve over time.
            </p>

            <p className="text-[#6a6a6a]">
              Outside of work, I spend time on yoga, ballet, photography, and travel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
