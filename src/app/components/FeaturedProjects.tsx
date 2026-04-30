import { motion } from 'motion/react';
import { ProjectCarousel } from './ProjectCarousel';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl tracking-tight text-[#1a1a1a] mb-4">Featured Work</h2>
          <p className="text-xl text-[#6a6a6a]">
            Building products at the intersection of AI, strategy, and user experience.
          </p>
        </motion.div>

        {/* Hero Project - Innerra */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32 bg-white rounded-3xl overflow-hidden border border-[#e5e5e5] shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <div className="grid md:grid-cols-2 gap-12 p-12 md:p-16">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-[#f5f5f5] rounded-full text-sm text-[#4a4a4a]">
                Current Project
              </div>
              <h3 className="text-4xl tracking-tight text-[#1a1a1a]">Innerra</h3>
              <p className="text-xl text-[#4a4a4a] leading-relaxed">
                A personal AI companion for reflection, memory, and emotional insight.
              </p>
              <p className="text-base text-[#6a6a6a] leading-relaxed">
                Innerra helps users turn everyday thoughts into calm, structured emotional insight over time. Built with privacy-first principles, the product uses agentic workflows and structured memory to create meaningful patterns from personal reflections.
              </p>
              <div className="space-y-2 pt-4">
                <p className="text-sm uppercase tracking-wider text-[#8a8a8a]">Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {['Agentic Workflows', 'Structured Memory', 'Emotional Insight', 'Privacy-First Design', 'Supabase + Vercel'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#f5f5f5] rounded-full text-sm text-[#4a4a4a]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <ProjectCarousel images={[
              '/assets/innerra_1.PNG',
              '/assets/innerra_2.PNG',
              '/assets/innerra_3.PNG',
              '/assets/innerra_4.PNG',
              '/assets/innerra_5.PNG'
            ]} />
          </div>
        </motion.div>

        {/* RAG System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-3xl overflow-hidden border border-[#e5e5e5] hover:border-[#d4d4d4] transition-all duration-300"
        >
          <div className="grid md:grid-cols-5 gap-8 p-12">
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-3xl tracking-tight text-[#1a1a1a]">
                Internal RAG Knowledge Assistant
              </h3>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Built and evaluated a Retrieval-Augmented Generation system for internal onboarding knowledge search at GIC.
              </p>
              <p className="text-base text-[#6a6a6a] leading-relaxed">
                Led end-to-end development of an enterprise RAG system, focusing on groundedness evaluation, retrieval optimization, and LLM-as-judge frameworks to ensure accurate, contextual knowledge delivery.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex flex-wrap gap-2">
                  {['Enterprise RAG', 'Groundedness Evaluation', 'LLM-as-Judge', 'Retrieval Optimization'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#f5f5f5] rounded-full text-sm text-[#4a4a4a]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-4 border-[#d4d4d4] text-[#1a1a1a] hover:bg-[#f5f5f5] rounded-full"
              >
                <a href="/documents/Enhancing New Hire Onboarding with Retrieval-Augmented Generation.pdf" download>
                  <Download className="mr-2 size-4" />
                  Download Capstone Report
                </a>
              </Button>
            </div>
            <div className="md:col-span-2">
              <ProjectCarousel images={[
                '/assets/gic_1.png',
                '/assets/gic_2.png'
              ]} />
            </div>
          </div>
        </motion.div>

        {/* Digital Ticketing - Vouch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-3xl overflow-hidden border border-[#e5e5e5] hover:border-[#d4d4d4] transition-all duration-300"
        >
          <div className="grid md:grid-cols-5 gap-8 p-12">
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-3xl tracking-tight text-[#1a1a1a]">
                Digital Ticketing Platform
              </h3>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Led a cross-functional team to design, build and launch a digital ticketing solution for the National Heritage Board on mobile and POS channels.
              </p>
              <p className="text-base text-[#6a6a6a] leading-relaxed">
                The solution allows users to purchase and validate their admission tickets, making the admissions process safer, smoother, and more streamlined across multiple museums and attractions.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div>
                  <div className="text-2xl text-[#1a1a1a]">15,000+</div>
                  <div className="text-sm text-[#8a8a8a]">Users reached</div>
                </div>
                <div>
                  <div className="text-2xl text-[#1a1a1a]">43%</div>
                  <div className="text-sm text-[#8a8a8a]">Conversion rate</div>
                </div>
                <div>
                  <div className="text-2xl text-[#1a1a1a]">4.7 / 5</div>
                  <div className="text-sm text-[#8a8a8a]">Satisfaction</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['0→1 Product Development', 'Cross-functional Leadership', 'Mobile & POS', 'System Integrations'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#f5f5f5] rounded-full text-sm text-[#4a4a4a]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <ProjectCarousel images={['/assets/digital_ticketing.png']} />
            </div>
          </div>
        </motion.div>

        {/* AI Museum Guides - Vouch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-3xl overflow-hidden border border-[#e5e5e5] hover:border-[#d4d4d4] transition-all duration-300"
        >
          <div className="grid md:grid-cols-5 gap-8 p-12">
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-3xl tracking-tight text-[#1a1a1a]">
                AI-Powered Museum Guides
              </h3>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Developed an AI-powered chatbot for a pilot at the Asian Civilisations Museum during the pandemic for contactless visitor engagement.
              </p>
              <p className="text-base text-[#6a6a6a] leading-relaxed">
                After a successful pilot, led a team to implement digital guides across 6 museums, featuring conversation-based guided tours, gamified experiences, and on-demand content. Refined processes to optimize the platform for longer term use.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div>
                  <div className="text-2xl text-[#1a1a1a]">40,000+</div>
                  <div className="text-sm text-[#8a8a8a]">Visitors reached</div>
                </div>
                <div>
                  <div className="text-2xl text-[#1a1a1a]">6</div>
                  <div className="text-sm text-[#8a8a8a]">Museums</div>
                </div>
                <div>
                  <div className="text-2xl text-[#1a1a1a]">9</div>
                  <div className="text-sm text-[#8a8a8a]">Seasonal events</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AI Chatbot', 'Conversational Guides', 'Gamification', 'Team Leadership'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#f5f5f5] rounded-full text-sm text-[#4a4a4a]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <ProjectCarousel images={[
                '/assets/museum_guide_1.jpg',
                '/assets/museum_guide_2.jpg',
                '/assets/museum_guide_3.jpg',
                '/assets/museum_guide_4.JPG',
                '/assets/museum_guide_5.JPG'
              ]} />
            </div>
          </div>
        </motion.div>

        {/* Dating App Experimentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden border border-[#e5e5e5] hover:border-[#d4d4d4] transition-all duration-300"
        >
          <div className="grid md:grid-cols-5 gap-8 p-12">
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-3xl tracking-tight text-[#1a1a1a]">
                Dating App Lifecycle Experimentation
              </h3>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Led product experimentation at Coffee Meets Bagel, optimizing user lifecycle metrics and engagement.
              </p>
              <p className="text-base text-[#6a6a6a] leading-relaxed">
                Designed and ran A/B tests across acquisition, activation, and retention funnels. Drove data-informed product decisions to improve match quality and user satisfaction.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['A/B Testing', 'Lifecycle Optimization', 'User Engagement', 'Data-Driven Product'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#f5f5f5] rounded-full text-sm text-[#4a4a4a]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <ProjectCarousel images={[]} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
