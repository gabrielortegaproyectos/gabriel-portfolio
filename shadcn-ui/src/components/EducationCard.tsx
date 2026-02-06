import { resumeData } from "@/data/resume";
import { GraduationCap } from "lucide-react";

export const EducationCard = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="w-5 h-5 text-violet-500" />
        <h3 className="text-lg font-bold text-zinc-100">Education</h3>
      </div>
      <div className="space-y-4">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-violet-400 transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-xs text-zinc-500">{edu.institution}</p>
              </div>
              <span className="text-xs text-zinc-600 font-mono whitespace-nowrap ml-2">
                {edu.period}
              </span>
            </div>
            {edu.thesis && (
              <p className="text-xs text-zinc-500 mt-1 italic border-l-2 border-zinc-800 pl-2">
                Thesis: {edu.thesis}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};