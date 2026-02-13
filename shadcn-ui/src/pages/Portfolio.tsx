import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { InteractiveDemo } from '@/components/InteractiveDemo';
import { BrainCircuit, Eye } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">{t('portfolio.title')}</h2>
        <p className="text-zinc-600 dark:text-zinc-400">{t('portfolio.subtitle')}</p>
      </div>

      <BentoGrid className="mx-auto max-w-6xl">
        <BentoGridItem className="min-h-[400px] md:col-span-2 md:row-span-2" header={<InteractiveDemo />} />

        <BentoGridItem
          className="flex flex-col justify-between p-6 md:col-span-1 md:row-span-1"
          header={
            <div className="flex h-full flex-col">
              <div className="mb-4">
                <BrainCircuit className="mb-2 h-8 w-8 text-blue-500" />
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{t('portfolio.project1Title')}</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('portfolio.project1Description')}</p>
            </div>
          }
        />

        <BentoGridItem
          className="flex flex-col justify-between p-6 md:col-span-1 md:row-span-1"
          header={
            <div className="flex h-full flex-col">
              <div className="mb-4">
                <Eye className="mb-2 h-8 w-8 text-violet-500" />
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{t('portfolio.project2Title')}</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('portfolio.project2Description')}</p>
            </div>
          }
        />
      </BentoGrid>
    </div>
  );
}
