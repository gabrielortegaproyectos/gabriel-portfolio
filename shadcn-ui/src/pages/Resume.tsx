import { EducationCard } from '@/components/EducationCard';
import { SkillsCard } from '@/components/SkillsCard';
import { CareerTimeline } from '@/components/CareerTimeline';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { useLocalizedResume } from '@/hooks/use-localized-resume';

export default function Resume() {
  const { t } = useLanguage();
  const localizedResume = useLocalizedResume();

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-20 dark:bg-zinc-950">
      <div className="container mx-auto max-w-4xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start justify-between gap-4 border-b border-zinc-200 pb-8 md:flex-row md:items-center dark:border-zinc-800"
        >
          <div>
            <h1 className="mb-2 text-4xl font-bold text-zinc-900 dark:text-white">{t('resume.title')}</h1>
            <p className="max-w-xl text-zinc-600 dark:text-zinc-400">{t('resume.subtitle')}</p>
          </div>
          <Button variant="outline" className="border-zinc-300 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white">
            <Download className="mr-2 h-4 w-4" /> {t('resume.downloadPdf')}
          </Button>
        </motion.div>

        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="mb-6 flex items-center text-2xl font-bold text-zinc-900 dark:text-white">
              <span className="mr-4 h-8 w-2 rounded-sm bg-blue-600"></span>
              {t('resume.experienceTitle')}
            </h2>

            <CareerTimeline />

            <div className="mb-4 mt-8 rounded-md border border-zinc-300/80 bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
              {t('resume.experienceDetailsTitle')}
            </div>

            <div className="space-y-6">
              {localizedResume.experience.map((exp) => (
                <article
                  key={`${exp.company}-${exp.role}-${exp.period}`}
                  className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{exp.role}</h3>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">{exp.period}</span>
                  </div>
                  <p className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">{exp.company}</p>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{exp.description}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="mb-6 flex items-center text-2xl font-bold text-zinc-900 dark:text-white">
              <span className="mr-4 h-8 w-2 rounded-sm bg-violet-600"></span>
              {t('resume.educationTitle')}
            </h2>
            <div className="space-y-6">
              {localizedResume.education.map((edu) => (
                <EducationCard
                  key={`${edu.institution}-${edu.degree}-${edu.period}`}
                  institution={edu.institution}
                  degree={edu.degree}
                  period={edu.period}
                  thesis={edu.thesis}
                />
              ))}
            </div>
          </motion.div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 flex items-center text-2xl font-bold text-zinc-900 dark:text-white">
              <span className="mr-4 h-8 w-2 rounded-sm bg-emerald-600"></span>
              {t('resume.skillsTitle')}
            </h2>
            <SkillsCard skills={localizedResume.skills} />
          </motion.div>
        </section>
      </div>
    </div>
  );
}
