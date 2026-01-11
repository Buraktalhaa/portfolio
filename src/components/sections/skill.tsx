import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "Node.js",
  "NestJS",
  "React",
  "Angular",
  "Next.js",
  "Tailwind CSS",
  "Shadcn UI",
  "React Native",
  "Expo",
  "PostgreSQL",
  "Git & GitHub"
];

export default function Skills() {
  const t = useTranslations('Skills');

  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-col items-center text-center space-y-4">
        
        {/* Başlık */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {t('title')}
        </h2>
        
        {/* Açıklama */}
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {t('description')}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-3xl">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="default" 
              className="text-md py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
        
      </div>
    </section>
  );
}