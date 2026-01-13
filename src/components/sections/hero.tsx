import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 min-h-[calc(100vh-4rem)] overflow-hidden">
      
      {/* 1. ÜSTTEKİ YUVARLAK AVATAR/İKON */}
      <div className="relative mb-8 mt-[-50px]"> {/* mt-[-50px] ile optik olarak merkeze aldık */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-75 animate-pulse"></div>
        <div className="relative h-24 w-24 md:h-32 md:w-32 bg-slate-950 rounded-full border-4 border-slate-900 flex items-center justify-center text-4xl md:text-5xl">
          👨‍💻
        </div>
      </div>

      {/* 2. BAŞLIK */}
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          {t('title')}
        </span>
      </h1>

      {/* 3. ALT BAŞLIK */}
      <h2 className="mb-6 text-xl md:text-2xl font-medium text-slate-200">
        {t('subtitle')}
      </h2>
      
      <p className="max-w-[700px] text-slate-400 md:text-lg mb-8 leading-relaxed">
        {t('description')}
      </p>

      {/* 4. BUTONLAR */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a href={siteConfig.links.resume} target="_blank" rel="noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none shadow-lg shadow-purple-500/20 rounded-full px-8">
            <Download className="mr-2 h-4 w-4" />
            {t('downloadBtn')}
            </Button>
        </a>

        <Button variant="outline" size="lg" asChild className="rounded-full px-8 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
          <a href="#projects">
            {t('projectsBtn')}
          </a>
        </Button>
      </div>

      {/* 5. SOSYAL İKONLAR */}
      <div className="flex gap-4">
        <SocialWrapper href={siteConfig.links.github} ariaLabel="Github">
            <Github className="h-5 w-5" />
        </SocialWrapper>
        <SocialWrapper href={siteConfig.links.linkedin} ariaLabel="LinkedIn">
            <Linkedin className="h-5 w-5" />
        </SocialWrapper>
        <SocialWrapper href={siteConfig.links.email} ariaLabel="Email">
            <Mail className="h-5 w-5" />
        </SocialWrapper>
      </div>

      {/* 6. MOUSE SCROLL İKONU (Düzeltildi) */}
      {/* absolute bottom-8 diyerek sayfanın en altına çiviledik */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hidden md:block">
        <a href="#skills" className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-slate-500 rounded-full animate-scroll"></div>
            </div>
        </a>
      </div>

    </section>
  );
}

function SocialWrapper({ children, href, ariaLabel }: { children: React.ReactNode, href: string, ariaLabel: string }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noreferrer"
            aria-label={ariaLabel}
            className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
        >
            {children}
        </a>
    )
}