import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/language-context';
import { useLocalizedResume } from '@/hooks/use-localized-resume';

type Skills = {
  languages: string[];
  web: string[];
  data_ml: string[];
  tools: string[];
};

export const SkillsCard = ({ skills }: { skills?: Skills }) => {
  const { t } = useLanguage();
  const localizedResume = useLocalizedResume();
  const resolvedSkills = skills ?? localizedResume.skills;

  return (
    <div className="flex h-full flex-col justify-center">
      <h3 className="mb-4 text-lg font-bold text-zinc-900 dark:text-zinc-100">{t('cards.technicalArsenal')}</h3>

      <div className="space-y-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">{t('cards.skillsDataMl')}</p>
          <div className="flex flex-wrap gap-1.5">
            {resolvedSkills.data_ml.map((skill) => (
              <Badge key={skill} variant="secondary" className="border-0 bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 dark:text-blue-400">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">{t('cards.skillsLanguages')}</p>
          <div className="flex flex-wrap gap-1.5">
            {resolvedSkills.languages.map((skill) => (
              <Badge key={skill} variant="secondary" className="border-0 bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">{t('cards.skillsWebTools')}</p>
          <div className="flex flex-wrap gap-1.5">
            {[...resolvedSkills.web, ...resolvedSkills.tools].map((skill) => (
              <Badge key={skill} variant="secondary" className="border-0 bg-violet-500/10 text-violet-600 hover:bg-violet-500/20 dark:text-violet-400">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
