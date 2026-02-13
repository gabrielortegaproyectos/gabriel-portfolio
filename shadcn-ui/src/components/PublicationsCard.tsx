import { BookOpen } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/context/language-context';
import { useLocalizedResume } from '@/hooks/use-localized-resume';

export const PublicationsCard = () => {
  const { t } = useLanguage();
  const localizedResume = useLocalizedResume();

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-zinc-800 dark:text-zinc-100" />
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{t('cards.publications')}</h3>
      </div>
      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-4">
          {localizedResume.publications.map((publication) => (
            <div
              key={`${publication.title}-${publication.year}`}
              className="rounded-lg border border-zinc-300/60 bg-zinc-100/70 p-3 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-800/60 dark:bg-zinc-800/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <h4 className="mb-1 text-sm font-semibold leading-tight text-zinc-800 dark:text-zinc-200">{publication.title}</h4>
              <p className="mb-1 text-xs italic text-zinc-600 dark:text-zinc-400">
                {publication.journal} • {publication.year}
              </p>
              <p className="line-clamp-1 text-[10px] text-zinc-500 dark:text-zinc-500">{publication.authors}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
