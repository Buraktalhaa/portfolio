import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <main className="container mx-auto p-4 py-12">
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Başlık */}
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {t('title')}
        </h1>

        {/* Açıklama Yazısı */}
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {t('description')}
        </p>

        {/* Buraya ileride fotoğraf falan da ekleriz */}
        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <p className="text-sm">
            {t('contactInfo')}
          </p>
        </div>
      </div>
    </main>
  );
}
