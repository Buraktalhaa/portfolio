import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LocalSwitcher from "./local-switcher";

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className="p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">
          <Link href="/">Portfolyo</Link>
        </div>

        <div className="flex gap-4 items-center">
          <nav className="hidden md:flex gap-4 text-sm font-medium">
            <Link href="/about" className="hover:underline">{t('about')}</Link>
            <Link href="/projects" className="hover:underline">{t('projects')}</Link>
            <Link href="/contact" className="hover:underline">{t('contact')}</Link>
          </nav>
          
          <LocalSwitcher />
        </div>
      </div>
    </header>
  );
}