import { resumeData } from "@/data/resume";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export const ExperienceCard = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
          Professional Experience
          <Badge variant="outline" className="text-xs font-normal text-zinc-400 border-zinc-700">
            {resumeData.experience.length} Roles
          </Badge>
        </h3>
      </div>
      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-6">
          {resumeData.experience.map((job, index) => (
            <div key={index} className="relative pl-4 border-l border-zinc-800">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500/20 border border-blue-500" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h4 className="text-sm font-semibold text-zinc-200">{job.role}</h4>
                <span className="text-xs text-zinc-500 font-mono">{job.period}</span>
              </div>
              <p className="text-xs text-blue-400 mb-1">{job.company}</p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};