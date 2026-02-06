import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { BrainCircuit, Eye } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">Portfolio</h2>
        <p className="text-zinc-400">Interactive demonstrations and project showcases.</p>
      </div>

      <BentoGrid className="max-w-6xl mx-auto">
        {/* Main Interactive Demo */}
        <BentoGridItem
          className="md:col-span-2 md:row-span-2 min-h-[400px]"
          header={<InteractiveDemo />}
        />

        {/* Project 1 Placeholder */}
        <BentoGridItem
          className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between"
          header={
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <BrainCircuit className="w-8 h-8 text-blue-500 mb-2" />
                <h3 className="text-lg font-bold text-zinc-100">Item Difficulty Prediction</h3>
              </div>
              <p className="text-sm text-zinc-400">
                Using LLMs and NLP to predict the difficulty of multiple-choice questions before testing.
              </p>
            </div>
          }
        />

        {/* Project 2 Placeholder */}
        <BentoGridItem
          className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between"
          header={
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <Eye className="w-8 h-8 text-violet-500 mb-2" />
                <h3 className="text-lg font-bold text-zinc-100">Eye-Tracking Analysis</h3>
              </div>
              <p className="text-sm text-zinc-400">
                Experimental design and software for analyzing visual attention in assessment contexts.
              </p>
            </div>
          }
        />
      </BentoGrid>
    </div>
  );
}