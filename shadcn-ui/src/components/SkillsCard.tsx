import { resumeData } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

export const SkillsCard = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <h3 className="text-lg font-bold text-zinc-100 mb-4">Technical Arsenal</h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider font-semibold">Data & ML</p>
          <div className="flex flex-wrap gap-1.5">
            {resumeData.skills.data_ml.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-0">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider font-semibold">Languages</p>
          <div className="flex flex-wrap gap-1.5">
            {resumeData.skills.languages.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border-0">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider font-semibold">Web & Tools</p>
          <div className="flex flex-wrap gap-1.5">
            {[...resumeData.skills.web, ...resumeData.skills.tools].map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 border-0">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};