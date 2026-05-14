import { Analytics } from '@vercel/analytics/react';
import { Navigation } from './components/Navigation';
import { Intro } from './components/Intro';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ExperienceHighlights } from './components/ExperienceHighlights';
import { AcademicProjects } from './components/AcademicProjects';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Navigation />
      <Intro />
      <FeaturedProjects />
      <AcademicProjects />
      <ExperienceHighlights />
      <About />
      <Resume />
      <Contact />
    </div>
    <Analytics />
  );
}
