import { useMemo } from 'react';
import { resumeData } from '@/data/resume';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const CareerTimeline = () => {
  const timelineData = useMemo(() => {
    const currentYear = new Date().getFullYear() + 1; // Extend slightly into future for "Present"
    const startYear = 2019; // Based on earliest experience
    const totalYears = currentYear - startYear;

    // Process experience to get start/end years and normalize for chart
    const processedExperience = resumeData.experience.map(exp => {
      // Parse period string (e.g., "2019 - 2022", "2025", "2024 - Present")
      let start = 0;
      let end = 0;
      
      const years = exp.period.match(/(\d{4})/g);
      if (years && years.length > 0) {
        start = parseInt(years[0]);
        if (years.length > 1) {
          end = parseInt(years[1]);
        } else if (exp.period.toLowerCase().includes('present') || exp.period.includes('2026')) {
            // Handle future dates or "Present"
           end = 2026;
        } else {
          end = start; // Single year duration
        }
      }

      // Calculate position and width percentages
      const left = ((start - startYear) / totalYears) * 100;
      const width = Math.max(((end - start + 1) / totalYears) * 100, 2); // Minimum width for visibility

      // Color coding based on company
      let color = "bg-zinc-700";
      if (exp.company.includes("CIAE")) color = "bg-blue-600";
      if (exp.company.includes("MIDE UC")) color = "bg-emerald-600";
      if (exp.company.includes("DEMRE")) color = "bg-violet-600";
      if (exp.company.includes("UBO")) color = "bg-orange-500";

      return {
        ...exp,
        start,
        end,
        left,
        width,
        color
      };
    });

    return { processedExperience, startYear, currentYear, totalYears };
  }, []);

  const years = Array.from(
    { length: timelineData.totalYears + 1 }, 
    (_, i) => timelineData.startYear + i
  );

  return (
    <Card className="bg-zinc-900 border-zinc-800 mb-8">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-zinc-100">Career Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full overflow-x-auto pb-6">
          <div className="min-w-[600px] relative">
            {/* Year Markers */}
            <div className="flex justify-between mb-4 text-xs text-zinc-500 border-b border-zinc-800 pb-2">
              {years.map(year => (
                <div key={year} className="flex-1 text-center border-l border-zinc-800/50 first:border-0">
                  {year}
                </div>
              ))}
            </div>

            {/* Timeline Bars */}
            <div className="space-y-3 relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex justify-between pointer-events-none z-0">
                 {years.map(year => (
                    <div key={`grid-${year}`} className="flex-1 border-l border-zinc-800/30 first:border-0 h-full" />
                 ))}
              </div>

              <TooltipProvider>
                {timelineData.processedExperience.map((exp, index) => (
                  <div key={index} className="relative h-8 z-10 flex items-center group">
                    <div className="w-24 md:w-32 text-xs text-zinc-400 truncate pr-2 text-right shrink-0">
                      {exp.company.split(' ')[0]}
                    </div>
                    <div className="flex-grow relative h-full">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div 
                                    className={`absolute h-6 rounded-md ${exp.color} hover:brightness-110 transition-all cursor-pointer flex items-center px-2 shadow-sm`}
                                    style={{ 
                                        left: `${exp.left}%`, 
                                        width: `${exp.width}%` 
                                    }}
                                >
                                    <span className="text-[10px] text-white font-medium truncate w-full">
                                        {exp.role}
                                    </span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-zinc-800 border-zinc-700 text-zinc-200">
                                <p className="font-bold">{exp.role}</p>
                                <p className="text-xs">{exp.company}</p>
                                <p className="text-xs text-zinc-400">{exp.period}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                  </div>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center text-xs text-zinc-400">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-600"></div>CIAE</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-600"></div>MIDE UC</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-violet-600"></div>DEMRE</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-orange-500"></div>UBO</div>
        </div>
      </CardContent>
    </Card>
  );
};