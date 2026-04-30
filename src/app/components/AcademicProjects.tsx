import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Download, ExternalLink } from 'lucide-react';

export function AcademicProjects() {
  const projects = [
    {
      title: 'Multimodal Emotion Recognition',
      description: 'Exploring multimodal fusion techniques for enhanced emotion recognition using deep learning.',
      details: 'Research project investigating how combining multiple data modalities (text, audio, visual) can improve emotion detection accuracy in machine learning systems.',
      tags: ['Deep Learning', 'Multimodal Fusion', 'Emotion AI', 'Neural Networks'],
      pdf: '/documents/Exploring Multimodal Fusion for Enhanced Emotion Recognition.pdf'
    },
    {
      title: 'Reddit AITA Morality Prediction',
      description: 'Predictive modeling to analyze moral judgments in the "Am I The Asshole" subreddit.',
      details: 'Machine learning project using NLP techniques to predict community moral judgments from Reddit posts, exploring the intersection of AI and social ethics.',
      tags: ['NLP', 'Predictive Modeling', 'Social Computing', 'Ethics in AI'],
      pdf: '/documents/Morality in the Digital Age - Predictive Modelling on AITA Subreddit Posts.pdf'
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
          <h2 className="text-4xl tracking-tight text-[#1a1a1a] mb-4">Academic Research</h2>
          <p className="text-lg text-[#6a6a6a]">
            Machine learning and AI research projects from my studies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-[#e5e5e5] hover:border-[#d4d4d4] transition-all duration-300"
            >
              <h3 className="text-2xl tracking-tight text-[#1a1a1a] mb-3">
                {project.title}
              </h3>
              <p className="text-base text-[#4a4a4a] leading-relaxed mb-3">
                {project.description}
              </p>
              <p className="text-sm text-[#6a6a6a] leading-relaxed mb-4">
                {project.details}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#f5f5f5] rounded-full text-xs text-[#4a4a4a]">
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                asChild
                className="bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] rounded-xl w-full"
              >
                <a href={project.pdf} download>
                  <Download className="mr-2 size-4" />
                  Download Research Paper
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
