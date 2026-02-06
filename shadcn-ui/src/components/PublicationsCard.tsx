import { resumeData } from "@/data/resume";
import { BookOpen } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const PublicationsCard = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-zinc-100" />
        <h3 className="text-lg font-bold text-zinc-100">Publications</h3>
      </div>
      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-4">
          {resumeData.publications.map((pub, index) => (
            <div key={index} className="p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors border border-zinc-800/50 hover:border-zinc-700">
              <h4 className="text-sm font-semibold text-zinc-200 mb-1 leading-tight">
                {pub.title}
              </h4>
              <p className="text-xs text-zinc-400 mb-1 italic">
                {pub.journal} • {pub.year}
              </p>
              <p className="text-[10px] text-zinc-500 line-clamp-1">
                {pub.authors}
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};