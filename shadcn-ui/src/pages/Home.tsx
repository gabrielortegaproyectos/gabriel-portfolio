import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';

export default function Home() {
  const { t } = useLanguage();

  const content = useMemo(
    () => [
      {
        title: t('home.story1Title'),
        description: t('home.story1Description'),
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            <Brain className="h-20 w-20" />
          </div>
        ),
      },
      {
        title: t('home.story2Title'),
        description: t('home.story2Description'),
        content: (
          <div className="h-full w-full flex items-center justify-center text-white">
            <GraduationCap className="h-20 w-20" />
          </div>
        ),
      },
      {
        title: t('home.story3Title'),
        description: t('home.story3Description'),
        content: (
          <div className="h-full w-full bg-zinc-950 flex items-center justify-center text-violet-400">
            <Sparkles className="h-20 w-20" />
          </div>
        ),
      },
    ],
    [t]
  );

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <section className="relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden px-4 pt-8 sm:h-[70vh] sm:pt-10">
        <div className="absolute inset-0 h-full w-full bg-zinc-50 dark:bg-zinc-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f23_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f23_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl space-y-5 text-center"
        >
          <h1 id="home-hero-name" className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-7xl dark:text-white">
            {t('home.heroTitle')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 sm:text-xl md:text-2xl dark:text-zinc-400">
            {t('home.heroSubtitlePrefix')}{' '}
            <span className="font-semibold text-blue-500">{t('home.heroSubtitleMiddle')}</span>{' '}
            {t('home.heroSubtitleSuffix')}{' '}
            <span className="font-semibold text-violet-500">{t('home.heroSubtitleEnd')}</span>
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:justify-center sm:gap-4">
            <Link to="/portfolio" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                {t('home.viewPortfolio')} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/resume" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-zinc-400 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                {t('home.checkResume')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="bg-zinc-50 py-20 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 md:text-5xl dark:text-white">{t('home.journeyTitle')}</h2>
            <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">{t('home.journeyDescription')}</p>
          </motion.div>

          <StickyScroll content={content} />
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-gradient-to-b from-zinc-50 to-zinc-100 py-24 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-zinc-900 md:text-4xl dark:text-white">{t('home.ctaTitle')}</h2>
          <p className="mx-auto mb-8 max-w-xl text-zinc-600 dark:text-zinc-400">{t('home.ctaDescription')}</p>
          <Link to="/resume">
            <Button size="lg" className="bg-blue-600 px-8 text-white hover:bg-blue-700">
              {t('home.ctaButton')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
