import { motion } from 'motion/react';
import { ProjectCarousel } from './ProjectCarousel';
import { Button } from './ui/button';
import { Download, ExternalLink } from 'lucide-react';

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
          <div className="grid md:grid-cols-5 gap-8 p-6 md:gap-12 md:p-16">
            <div className="md:col-span-3 space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1a1a1a] text-white rounded-full text-sm">AI-Enabled Development</span>
                <span className="px-3 py-1 bg-[#1a1a1a] text-white rounded-full text-sm">Product Design</span>
              </div>
              <h3 className="text-4xl tracking-tight text-[#1a1a1a]">Innerra</h3>
              <p className="text-xl text-[#4a4a4a] leading-relaxed">
                A reflective companion that remembers your emotional world.
              </p>
              <p className="text-base text-[#6a6a6a] leading-relaxed">
                Innerra helps users turn everyday thoughts into structured emotional insight over time. The product uses agent architecture and structured memory to distill meaningful patterns from personal reflections.
              </p>
              <div className="space-y-2 pt-2">
                <p className="text-sm uppercase tracking-wider text-[#8a8a8a]">Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {['Agentic Workflows', 'Structured Memory', 'Emotional Insight', 'Supabase + Vercel'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#f5f5f5] rounded-full text-sm text-[#4a4a4a]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-[#8a8a8a] italic">Designed, built, and shipped solo — from concept to production using AI-assisted development.</p>
              <Button
                asChild
                className="mt-2 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] rounded-xl"
              >
                <a href="https://innerra.app" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 size-4" />
                  Try Innerra
                </a>
              </Button>
            </div>
            <div className="mx-auto w-[240px] md:w-[280px] md:col-span-2">
              <ProjectCarousel images={['/assets/innerra.mp4']} />
            </div>
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
          <div className="grid md:grid-cols-5 gap-8 p-6 md:p-12">
            <div className="md:col-span-3 space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1a1a1a] text-white rounded-full text-sm">Engineering</span>
                <span className="px-3 py-1 bg-[#1a1a1a] text-white rounded-full text-sm">Research & Evaluation</span>
              </div>
              <h3 className="text-3xl tracking-tight text-[#1a1a1a]">
                Internal RAG Knowledge Assistant
              </h3>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                An enterprise RAG system built to surface accurate, contextual knowledge for new hire onboarding at GIC.
              </p>
              <p className="text-base text-[#6a6a6a] leading-relaxed">
                Led end-to-end development of a multi-step agentic reasoning pipeline — from chunking strategy to retrieval and generation. Navigated real-world trade-offs across quality, latency, cost, and reliability, and built an LLM-as-judge evaluation framework to rigorously benchmark groundedness at each stage.
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
                className="mt-4 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] rounded-xl"
              >
                <a href="/documents/Enhancing New Hire Onboarding with Retrieval-Augmented Generation.pdf" download>
                  <Download className="mr-2 size-4" />
                  Download Capstone Report
                </a>
              </Button>
            </div>
            <div className="mx-auto w-[240px] md:w-[280px] md:col-span-2">
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
          <div className="grid md:grid-cols-5 gap-8 p-6 md:p-12">
            <div className="md:col-span-3 space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1a1a1a] text-white rounded-full text-sm">Product Management</span>
                <span className="px-3 py-1 bg-[#1a1a1a] text-white rounded-full text-sm">System Design</span>
              </div>
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
            <div className="mx-auto w-[240px] md:w-[280px] md:col-span-2">
              <ProjectCarousel images={['/assets/digital_ticketing.mp4']} />
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
          <div className="grid md:grid-cols-5 gap-8 p-6 md:p-12">
            <div className="md:col-span-3 space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1a1a1a] text-white rounded-full text-sm">Product Management</span>
              </div>
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
            <div className="mx-auto w-[240px] md:w-[280px] md:col-span-2">
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

      </div>
    </section>
  );
}
