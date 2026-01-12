import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';
import { projectsData } from '@/data/projects';

export default function ProjectsPage() {
  const t = useTranslations('ProjectsPage'); // Sayfa başlığı çevirileri
  const tProject = useTranslations('FeaturedProjects'); // Proje detayları çevirileri

  return (
    <main className="min-h-screen py-12 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* --- 1. SAYFA BAŞLIĞI (HEADER) --- */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            {t('subtitle')}
          </p>
          {/* Süsleme Çizgisi */}
          <div className="w-24 h-1 bg-primary/20 rounded-full mt-4"></div>
        </div>

        {/* --- 2. PROJELER LİSTESİ --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card 
              key={project.id} 
              // Düzeltilmiş Kart Stili (Üst çizgi yok, temiz görünüm)
              className="flex flex-col overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 duration-300" 
            >
              
              {/* Resim Alanı (Gradient + Emoji) */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-6xl shadow-inner`}>
                {project.emoji}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{tProject(`projects.${project.id}.title`)}</CardTitle>
                <CardDescription className="mt-2 line-clamp-3">
                  {tProject(`projects.${project.id}.description`)}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="default" className="px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-4 border-t bg-slate-50 dark:bg-slate-900/50">
                <Button variant="default" className="w-full group" asChild>
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> 
                    {tProject('codeBtn')}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </main>
  );
}