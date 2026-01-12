import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site'; 
import Socials from '@/components/social';

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <main className="min-h-screen py-12 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* --- SAYFA BAŞLIĞI --- */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            {t('subtitle')}
          </p>
          <div className="w-24 h-1 bg-primary/20 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* --- SOL TARAF: İLETİŞİM BİLGİLERİ --- */}
          <div className="flex flex-col gap-8">
            
            {/* Mail Kutusu */}
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {t('info.emailTitle')}
                  </p>
                  <a href={siteConfig.links.email} className="text-lg font-semibold hover:text-primary transition-colors">
                    talha45879@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Konum (Opsiyonel - İstersen kaldırabilirsin) */}
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Konum
                  </p>
                  <p className="text-lg font-semibold">
                    Ankara, Türkiye
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sosyal Medya */}
            <div className="flex flex-col gap-4 p-4">
              <p className="text-sm font-medium text-muted-foreground">
                {t('info.socialTitle')}
              </p>
              <Socials />
            </div>

          </div>

          {/* --- SAĞ TARAF: FORM --- */}
          <Card className="p-6">
            <form className="space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="name">{t('form.name')}</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('form.email')}</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('form.message')}</Label>
                <Textarea 
                  id="message" 
                  className="min-h-[150px]" 
                  placeholder="..." 
                  required 
                />
              </div>

              <Button type="submit" className="w-full text-lg py-6">
                {t('form.submit')}
              </Button>

            </form>
          </Card>

        </div>

      </div>
    </main>
  );
}