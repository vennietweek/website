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
          <h2 className="text-4xl tracking-tight text-[#1a1a1a]">About</h2>

          <div className="space-y-6 text-lg text-[#4a4a4a] leading-relaxed">
            <p>
              I'm interested in products that improve clarity — helping users make better decisions,
              teams work more effectively, and people better understand themselves.
            </p>

            <p>
              My approach combines strategic product thinking with technical execution. I believe
              the best products come from deeply understanding both user needs and technical constraints,
              then finding elegant solutions at their intersection.
            </p>

            <p className="text-[#6a6a6a]">
              Outside work: ballet, yoga, photography, travel, observation, and design sensitivity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
