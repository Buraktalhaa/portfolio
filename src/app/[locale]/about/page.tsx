import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code2, Rocket, History } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <main className="min-h-screen py-12 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* --- BAŞLIK (Projeler sayfasıyla uyumlu) --- */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            {t('subtitle')}
          </p>
          <div className="w-24 h-1 bg-primary/20 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- SOL KOLON: BİYOGRAFİ & PROFİL --- */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profil Kartı */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-2 shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Buraya kendi fotoğrafını koyacaksın, şimdilik emoji koyuyoruz */}
              <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-400 rounded-xl flex items-center justify-center text-8xl shadow-inner">
                👨‍💻
              </div>
            </div>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Rocket className="text-primary h-5 w-5" />
                  {t('bio.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('bio.content')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* --- SAĞ KOLON: EĞİTİM & YOLCULUK --- */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Eğitim Bölümü */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <GraduationCap className="text-primary h-6 w-6" />
                  {t('education.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{t('education.university')}</h3>
                  <p className="text-muted-foreground">
                    {t('education.desc')}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {/* İlgili dersler/etiketler */}
                    <Badge variant="outline">Algorithms</Badge>
                    <Badge variant="outline">Data Structures</Badge>
                    <Badge variant="outline">Network</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Yolculuk / Timeline Bölümü */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <History className="text-primary h-6 w-6" />
                  {t('journey.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative border-l-2 border-primary/20 pl-6 ml-2 space-y-8 py-2">
                  
                  {/* Adım 1 */}
                  <div className="relative">
                    <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-white dark:ring-slate-950"></span>
                    <p className="text-muted-foreground">{t('journey.step1')}</p>
                  </div>

                  {/* Adım 2 */}
                  <div className="relative">
                    <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-blue-400 ring-4 ring-white dark:ring-slate-950"></span>
                    <p className="text-muted-foreground">{t('journey.step2')}</p>
                  </div>

                  {/* Adım 3 */}
                  <div className="relative">
                    <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-950"></span>
                    <p className="text-muted-foreground">{t('journey.step3')}</p>
                  </div>

                  {/* Güncel Durum (Code ikonu ile) */}
                  <div className="relative">
                    <span className="absolute -left-[37px] top-0 bg-white dark:bg-slate-950">
                      <Code2 className="h-6 w-6 text-primary" />
                    </span>
                    <p className="font-medium text-primary mt-1">{t('journey.current')}</p>
                  </div>

                </div>
              </CardContent>
            </Card>

          </div>

        </div>
      </div>
    </main>
  );
}