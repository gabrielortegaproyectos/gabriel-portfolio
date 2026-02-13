import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-100 to-blue-100 p-6 text-center dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-md space-y-6">
        <div className="space-y-3">
          <h1 className="text-8xl font-bold text-blue-600">404</h1>
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">{t('notFound.title')}</h2>
          <p className="text-zinc-600 dark:text-zinc-400">{t('notFound.description')}</p>
        </div>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <a href="/">{t('notFound.returnHome')}</a>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            {t('notFound.goBack')}
          </Button>
        </div>
      </div>
    </div>
  );
}
