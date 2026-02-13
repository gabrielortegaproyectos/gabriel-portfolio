import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/context/language-context';
import { useLocalizedResume } from '@/hooks/use-localized-resume';

const abbreviateCompany = (company: string) => {
  if (company.includes('MIDE')) return 'MIDE';
  if (company.includes('DEMRE')) return 'DEMRE';
  if (company.includes('CIAE')) return 'CIAE';
  if (company.includes('UBO')) return 'UBO';
  return company;
};

export const CareerTimeline = () => {
  const { t } = useLanguage();
  const localizedResume = useLocalizedResume();

  const timelineData = useMemo(() => {
    const currentYear = new Date().getFullYear() + 1;
    const startYear = 2019;
    const totalYears = currentYear - startYear;

    const processedExperience = localizedResume.experience.map((exp) => {
      let start = 0;
      let end = 0;

      const years = exp.period.match(/(\d{4})/g);
      if (years && years.length > 0) {
        start = parseInt(years[0], 10);
        if (years.length > 1) {
          end = parseInt(years[1], 10);
        } else if (exp.period.toLowerCase().includes('present') || exp.period.includes('2026')) {
          end = 2026;
        } else {
          end = start;
        }
      }

      const left = ((start - startYear) / totalYears) * 100;
      const width = Math.max(((end - start + 1) / totalYears) * 100, 2);

      let color = 'bg-zinc-500 dark:bg-zinc-700';
      if (exp.company.includes('CIAE')) color = 'bg-blue-600';
      if (exp.company.includes('MIDE UC')) color = 'bg-emerald-600';
      if (exp.company.includes('DEMRE')) color = 'bg-violet-600';
      if (exp.company.includes('UBO')) color = 'bg-orange-500';

      return {
        ...exp,
        start,
        end,
        left,
        width,
        color,
        companyLabel: abbreviateCompany(exp.company),
      };
    });

    return { processedExperience, startYear, currentYear, totalYears };
  }, [localizedResume.experience]);

  const years = Array.from({ length: timelineData.totalYears + 1 }, (_, i) => timelineData.startYear + i);

  return (
    <Card className="mb-8 border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{t('resume.timelineTitle')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full overflow-x-auto pb-6">
          <div className="relative min-w-[600px]">
            <div className="mb-4 flex justify-between border-b border-zinc-300 pb-2 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
              {years.map((year) => (
                <div key={year} className="flex-1 border-l border-zinc-300/70 text-center first:border-0 dark:border-zinc-800/70">
                  {year}
                </div>
              ))}
            </div>

            <div className="relative space-y-3">
              <div className="pointer-events-none absolute inset-0 z-0 flex justify-between">
                {years.map((year) => (
                  <div key={`grid-${year}`} className="h-full flex-1 border-l border-zinc-300/40 first:border-0 dark:border-zinc-800/40" />
                ))}
              </div>

              <TooltipProvider>
                {timelineData.processedExperience.map((exp) => (
                  <div key={`${exp.company}-${exp.role}-${exp.period}`} className="relative z-10 flex h-8 items-center">
                    <div className="w-20 shrink-0 truncate pr-2 text-right text-xs text-zinc-600 md:w-24 dark:text-zinc-400">
                      {exp.companyLabel}
                    </div>
                    <div className="relative h-full flex-grow">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            className={`absolute flex h-6 cursor-pointer items-center rounded-md px-2 shadow-sm transition-all hover:brightness-110 ${exp.color}`}
                            style={{
                              left: `${exp.left}%`,
                              width: `${exp.width}%`,
                            }}
                          >
                            <span className="w-full truncate text-[10px] font-medium text-white">{exp.role}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="border-zinc-300 bg-zinc-100 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                          <p className="font-bold">{exp.role}</p>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400">{exp.period}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-blue-600"></div>{t('resume.legendCiae')}</div>
          <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-emerald-600"></div>{t('resume.legendMide')}</div>
          <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-violet-600"></div>{t('resume.legendDemre')}</div>
          <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-orange-500"></div>{t('resume.legendUbo')}</div>
        </div>
      </CardContent>
    </Card>
  );
};
