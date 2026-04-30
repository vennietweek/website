import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  metrics?: { label: string; value: string }[];
  image?: string;
  additionalContent?: ReactNode;
  reverse?: boolean;
}

export function ProjectCard({ title, description, metrics, image, additionalContent, reverse }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div className={`space-y-6 ${reverse ? 'md:order-2' : ''}`}>
        <h3 className="text-4xl md:text-5xl">{title}</h3>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          {description.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-4 pt-4">
            {metrics.map((metric, idx) => (
              <div key={idx} className="border-2 border-black p-4 space-y-2">
                <div className="text-2xl md:text-3xl">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {additionalContent}
      </div>

      {image && (
        <div className={`${reverse ? 'md:order-1' : ''}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
    </motion.div>
  );
}
