"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Button } from '@/components/ui/button';

export default function LocalSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    // Eğer şu an TR ise EN yap, EN ise TR yap
    const nextLocale = locale === 'tr' ? 'en' : 'tr';
    
    // Sayfayı yenilemeden URL'i değiştir
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button 
      variant="outline" 
      onClick={toggleLanguage}
      className="w-16 font-bold"
    >
      {/* Ekranda TR yazıyorsa butona basınca EN olacak, tersi de geçerli */}
      {locale === 'tr' ? 'EN' : 'TR'}
    </Button>
  );
}