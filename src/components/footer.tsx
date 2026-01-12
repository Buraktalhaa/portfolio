import { useTranslations } from 'next-intl';
import Socials from './social';

export default function Footer() {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-8 mt-auto bg-background">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
        
        <Socials />

        <p className="text-sm text-muted-foreground">
          &copy; {year} Burak Talha. {t('rights')}
        </p>

      </div>
    </footer>
  );
}