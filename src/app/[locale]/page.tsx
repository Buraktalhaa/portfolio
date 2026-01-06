import { useTranslations } from 'next-intl';
import { Button } from "../../components/ui/button";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="text-muted-foreground">{t('subtitle')}</p>
      <Button>Button</Button>
    </main>
  );
}