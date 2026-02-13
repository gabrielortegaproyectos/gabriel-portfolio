import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import { useLanguage } from "@/context/language-context";

export const Layout = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-blue-500/30 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />
      <main className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500">
        <Outlet />
      </main>
      <footer className="max-w-7xl mx-auto py-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-zinc-600 dark:text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Gabriel Ortega Hernández. {t('footer.builtWith')}</p>
      </footer>
    </div>
  );
};
