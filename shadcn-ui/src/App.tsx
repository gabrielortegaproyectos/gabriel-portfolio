import { Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { useLanguage } from '@/context/language-context';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Resume = lazy(() => import('./pages/Resume'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback component
const PageLoader = ({ label }: { label: string }) => (
  <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-zinc-950">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-zinc-600 dark:text-zinc-400">{label}</p>
    </div>
  </div>
);

const App = () => {
  const { t } = useLanguage();

  return (
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<PageLoader label={t('ui.loading')} />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="resume" element={<Resume />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  );
};

export default App;
