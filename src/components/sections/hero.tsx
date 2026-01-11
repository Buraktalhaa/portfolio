import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'; // İkonlar

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="container mx-auto py-10 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
        
        {/* SOL TARA: Yazılar */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-xl font-medium text-primary">
            {t('greeting')}
          </h2>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t('role')}
          </h1>
          <h3 className='text-xl font-semibold text-muted-foreground'>{t('roleDescription')}</h3>

          <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto md:mx-0">
            {t('description')}
          </p>

          {/* Butonlar Grubu */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-4">
            <Button asChild size="lg">
              <Link href="/projects">
                {t('projectsBtn')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                {t('contactBtn')}
              </Link>
            </Button>
          </div>

          {/* Sosyal Medya İkonları */}
          <div className="flex gap-4 justify-center md:justify-start mt-6 text-muted-foreground">
            {/* Linkleri kendi adreslerinle değiştirmeyi unutma! */}
            <a href="https://github.com/Buraktalhaa" target="_blank" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/buraktalhamemis" target="_blank" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:talha@45879.com" className="hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* SAĞ TARAF: Görsel veya Avatar */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-b from-primary/20 to-transparent rounded-full flex items-center justify-center border-2 border-primary/10">
            {/* Geçici olarak buraya bir ikon veya yazı koyuyoruz. 
                İleride buraya kendi fotoğrafını <Image /> etiketiyle koyacağız. */}
            <span className="text-6xl">👨‍💻</span>
          </div>
        </div>

      </div>
    </section>
  );
}