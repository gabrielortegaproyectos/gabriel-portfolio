import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { BrainParticles } from '@/components/BrainParticles';
import { useLanguage } from '@/context/language-context';
import { useHeroNameVisibility } from '@/hooks/use-hero-name-visibility';

const navItems = [
  { key: 'home', path: '/' },
  { key: 'resume', path: '/resume' },
  { key: 'portfolio', path: '/portfolio' },
  { key: 'blog', path: '/blog' },
] as const;

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const isHomeRoute = location.pathname === '/';
  const isHeroNameVisible = useHeroNameVisibility(isHomeRoute);
  const showHeaderName = isHomeRoute && !isHeroNameVisible;

  const isLightTheme = theme === 'light';

  const ThemeButton = (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => setTheme(isLightTheme ? 'dark' : 'light')}
      className="h-8 border-zinc-300/70 bg-white/60 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:bg-zinc-800"
    >
      {isLightTheme ? <Moon className="mr-1 h-3.5 w-3.5" /> : <Sun className="mr-1 h-3.5 w-3.5" />}
      {isLightTheme ? t('navbar.themeDark') : t('navbar.themeLight')}
    </Button>
  );

  const LanguageButton = (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="h-8 border-zinc-300/70 bg-white/60 px-2.5 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:bg-zinc-800"
    >
      {language === 'es' ? 'EN' : 'ES'}
    </Button>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/70 bg-zinc-50/85 backdrop-blur supports-[backdrop-filter]:bg-zinc-50/70 dark:border-zinc-800 dark:bg-zinc-950/85 dark:supports-[backdrop-filter]:bg-zinc-950/70">
      <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 overflow-hidden rounded-md">
              <BrainParticles
                className="h-full w-full"
                particleCount={20}
                connectionDistance={58}
                interactive={false}
                particleColor="#3b82f6"
                lineColor="59, 130, 246"
              />
            </div>
          </Link>

          <AnimatePresence initial={false}>
            {showHeaderName && (
              <motion.span
                key="header-name"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="hidden truncate text-sm font-semibold text-zinc-700 sm:inline-block dark:text-zinc-200"
              >
                Gabriel Ortega Hernández
              </motion.span>
            )}
          </AnimatePresence>

          <Link
            to="/"
            className={cn(
              'text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-50',
              location.pathname === '/' ? 'text-zinc-900 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400'
            )}
          >
            {t('navbar.home')}
          </Link>

          <div className="hidden items-center gap-5 text-sm font-medium md:flex">
            {navItems
              .filter((item) => item.path !== '/')
              .map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'transition-colors hover:text-zinc-900 dark:hover:text-zinc-50',
                    location.pathname === item.path ? 'text-zinc-900 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400'
                  )}
                >
                  {t(`navbar.${item.key}`)}
                </Link>
              ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            {LanguageButton}
            {ThemeButton}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-1.5 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
            aria-label={isOpen ? t('navbar.menuClose') : t('navbar.menuOpen')}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <div className="mb-3 flex items-center gap-2">
            {LanguageButton}
            {ThemeButton}
          </div>
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                  location.pathname === item.path
                    ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-900 dark:text-white'
                    : 'text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white'
                )}
              >
                {t(`navbar.${item.key}`)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
