import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/language-context';
import { useLocalizedResume } from '@/hooks/use-localized-resume';

export const ExperienceCard = () => {
  const { t } = useLanguage();
  const localizedResume = useLocalizedResume();

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4">
        <h3 className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-zinc-100">
          {t('cards.professionalExperience')}
          <Badge variant="outline" className="border-zinc-300 text-xs font-normal text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
            {localizedResume.experience.length} {t('cards.roles')}
          </Badge>
        </h3>
      </div>
      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-6">
          {localizedResume.experience.map((job) => (
            <div key={`${job.company}-${job.role}-${job.period}`} className="relative border-l border-zinc-300 pl-4 dark:border-zinc-800">
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-blue-500 bg-blue-500/20" />
              <div className="mb-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{job.role}</h4>
                <span className="text-xs font-mono text-zinc-500">{job.period}</span>
              </div>
              <p className="mb-1 text-xs text-blue-600 dark:text-blue-400">{job.company}</p>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{job.description}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
