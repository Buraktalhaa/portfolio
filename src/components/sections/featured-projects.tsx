import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from 'lucide-react';

const projects = [
  {
    id: 'ticket',
    githubLink: 'https://github.com/Buraktalhaa/ticket',
    demoLink: null,
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
    color: 'from-blue-500 to-cyan-500',
    emoji: '🎫'
  }
];

export default function FeaturedProjects() {
  const t = useTranslations('FeaturedProjects');

  return (
    <section className="container mx-auto py-12">
      
      {/* Üst Kısım: Başlık ve Buton */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          {t('title')}
        </h2>
        <Button variant="ghost" asChild className="hidden md:flex">
          <Link href="/projects">
            {t('viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Projeler Grid Yapısı - OTOMATİK DÖNGÜ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
            
            {/* 1. Resim Alanı (Emoji & Gradient) */}
            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-5xl`}>
              {project.emoji}
            </div>
            
            {/* 2. Başlık ve Açıklama (JSON'dan gelir) */}
            <CardHeader>
              <CardTitle>{t(`projects.${project.id}.title`)}</CardTitle>
              <CardDescription className="mt-2 line-clamp-2">
                {t(`projects.${project.id}.description`)}
              </CardDescription>
            </CardHeader>
            
            {/* 3. Teknolojiler (Badge Listesi) */}
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            {/* 4. Butonlar */}
            <CardFooter className="gap-2">
              <Button variant="outline" className="w-full" asChild>
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" /> 
                  {t('codeBtn')}
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}

      </div>

        {/* Hepsini gör (View All) butonu */}
      <div className="mt-8 flex justify-center md:hidden">
        <Button variant="outline" asChild>
          <Link href="/projects">
            {t('viewAll')}
          </Link>
        </Button>
      </div>

    </section>
  );
}

