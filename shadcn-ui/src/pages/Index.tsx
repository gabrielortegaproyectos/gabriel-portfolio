import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ProfileCard } from "@/components/ProfileCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { EducationCard } from "@/components/EducationCard";
import { SkillsCard } from "@/components/SkillsCard";
import { PublicationsCard } from "@/components/PublicationsCard";
import { InteractiveDemo } from "@/components/InteractiveDemo";

export default function Index() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500 mb-4 tracking-tight">
          Gabriel Ortega Hernández
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
          Bridging the gap between <span className="text-blue-400 font-medium">Machine Learning</span> and <span className="text-violet-400 font-medium">Educational Assessment</span>.
        </p>
      </div>

      <BentoGrid className="max-w-6xl mx-auto">
        {/* Profile - Large Card */}
        <BentoGridItem
          className="md:col-span-1 md:row-span-2 min-h-[400px]"
          header={<ProfileCard />}
        />

        {/* Hero Image / Concept - Visual Impact */}
        <BentoGridItem
          className="md:col-span-2 md:row-span-1 min-h-[200px] relative overflow-hidden group"
          header={
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/assets/hero-neural-network.jpg" 
                alt="Neural Network" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-2xl font-bold text-white mb-1">Data-Driven Insights</h3>
                <p className="text-sm text-zinc-300">Transforming educational challenges into computational solutions.</p>
              </div>
            </div>
          }
        />

        {/* Interactive Demo - "Show, Don't Just Tell" */}
        <BentoGridItem
          className="md:col-span-1 md:row-span-1"
          header={<InteractiveDemo />}
        />

        {/* Skills - Quick Scan */}
        <BentoGridItem
          className="md:col-span-1 md:row-span-1"
          header={<SkillsCard />}
        />

        {/* Experience - Detailed Scrollable */}
        <BentoGridItem
          className="md:col-span-2 md:row-span-2 min-h-[400px]"
          header={<ExperienceCard />}
        />

        {/* Education - Compact */}
        <BentoGridItem
          className="md:col-span-1 md:row-span-1"
          header={<EducationCard />}
        />

        {/* Publications - Academic Credibility */}
        <BentoGridItem
          className="md:col-span-3 md:row-span-1 min-h-[200px]"
          header={<PublicationsCard />}
        />
      </BentoGrid>

      <footer className="max-w-6xl mx-auto mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Gabriel Ortega Hernández. Built with React, Tailwind & Shadcn/ui.</p>
      </footer>
    </div>
  );
}