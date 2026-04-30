import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 md:py-32 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-4">Selected Work</h2>
          <p className="text-xl text-gray-600">Product management in cultural technology</p>
        </div>

        <ProjectCard
          title="Digital Ticketing"
          description="I led a cross-functional team of engineers, designers, and project managers to design, build and launch a Digital Ticketing solution for the National Heritage Board on Mobile and POS channels.

The solution allows a user to purchase and validate their admission tickets, thereby making the admissions process safer, smoother, and more streamlined."
          metrics={[
            { value: '15,000', label: 'users reached' },
            { value: '43%', label: 'conversion rate' },
            { value: '4.7 / 5', label: 'satisfaction rating' }
          ]}
          image="https://images.unsplash.com/photo-1600147131759-880e94a6185f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBkaWdpdGFsJTIwdGlja2V0aW5nJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc3MzgxMDAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />

        <ProjectCard
          title="Museum Guides"
          description="AI-powered digital guides that enhance visitor experience through conversation-based guided tours, gamified experiences, and on-demand content."
          metrics={[
            { value: '> 40,000', label: 'users reached' },
            { value: '6', label: 'museums' },
            { value: '9', label: 'seasonal events' }
          ]}
          image="https://images.unsplash.com/photo-1647179500576-dfbdc5367045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjB2aXNpdG9yJTIwZ3VpZGUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzgxMDAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          reverse
        />

        <ProjectCard
          title="AI-Powered Chatbot"
          description="With the pandemic highlighting the need for contactless solutions, I developed an AI-powered chatbot for a pilot at the Asian Civilisations Museum.

After a successful pilot, I led a team to implement digital guides across 6 museums, refining processes to optimise the platform for longer term use."
          image="https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwaW50ZXJmYWNlJTIwbW9kZXJufGVufDF8fHx8MTc3MzgxMDAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />

        <ProjectCard
          title="Wally the Wayfinder"
          description="Conversational Wayfinding, powered by Apple Indoor Maps' positioning technology. A human-centric solution to feeling 'lost' in a museum.

The solution detects a user's location and guides them to their desired destination, peppering the experience with building history and prompting the user as they enter specific geofences.

I presented learnings from this project to the CultureTech industry at the inaugural TCube and Switch conferences."
          image="https://images.unsplash.com/photo-1697176668343-7d513a7af337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjB3YXlmaW5kaW5nJTIwaW5kb29yJTIwbmF2aWdhdGlvbnxlbnwxfHx8fDE3NzM4MTAwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          reverse
        />
      </div>
    </section>
  );
}