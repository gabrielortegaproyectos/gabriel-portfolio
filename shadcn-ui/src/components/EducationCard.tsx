import { GraduationCap } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { useLocalizedResume } from '@/hooks/use-localized-resume';

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  thesis?: string;
};

type EducationCardProps = Partial<EducationItem>;

const EducationItemView = ({ institution, degree, period, thesis }: EducationItem) => {
  const { t } = useLanguage();

  return (
    <div className="group">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-sm font-semibold text-zinc-800 transition-colors group-hover:text-violet-500 dark:text-zinc-200 dark:group-hover:text-violet-400">
            {degree}
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-500">{institution}</p>
        </div>
        <span className="ml-2 whitespace-nowrap text-xs font-mono text-zinc-500 dark:text-zinc-600">{period}</span>
      </div>
      {thesis && (
        <p className="mt-1 border-l-2 border-zinc-300 pl-2 text-xs italic text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          {t('cards.thesisPrefix')}: {thesis}
        </p>
      )}
    </div>
  );
};

export const EducationCard = ({ institution, degree, period, thesis }: EducationCardProps) => {
  const { t } = useLanguage();
  const localizedResume = useLocalizedResume();

  if (institution && degree && period) {
    return (
      <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <EducationItemView institution={institution} degree={degree} period={period} thesis={thesis} />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="mb-4 flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-violet-500" />
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{t('cards.education')}</h3>
      </div>
      <div className="space-y-4">
        {localizedResume.education.map((education) => (
          <EducationItemView
            key={`${education.institution}-${education.degree}-${education.period}`}
            institution={education.institution}
            degree={education.degree}
            period={education.period}
            thesis={education.thesis}
          />
        ))}
      </div>
    </div>
  );
};
