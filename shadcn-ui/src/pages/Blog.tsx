import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { PublicationsCard } from '@/components/PublicationsCard';
import { useLanguage } from '@/context/language-context';

export default function Blog() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">{t('blog.title')}</h2>
        <p className="text-zinc-600 dark:text-zinc-400">{t('blog.subtitle')}</p>
      </div>

      <BentoGrid className="mx-auto max-w-4xl">
        <BentoGridItem className="min-h-[400px] md:col-span-3 md:row-span-1" header={<PublicationsCard />} />
      </BentoGrid>
    </div>
  );
}
