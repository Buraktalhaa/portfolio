"use client";

import { useTranslations } from "next-intl";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { SectionHeading } from "@/components/ui/section-heading";
import { Code2, Terminal, Globe, Database, Layers } from "lucide-react";

export default function Skills() {
  const t = useTranslations("Skills");

  // Veri yapısı: Başlıkları çeviriden (t) alıyoruz, teknik terimler (React, Python) sabit kalıyor.
  const skillCategories = [
    {
      title: t("categories.programming"),
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
    },
    {
      title: t("categories.web"),
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      skills: ["React", "Angular", "Nest.js", "Next.js", "React Native", "Expo", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: t("categories.software"),
      icon: <Terminal className="w-8 h-8 text-green-400" />,
      skills: ["OOP", "Solid", "REST API", "Data Structures", "Algorithms", "Design Patterns", "Clean Code", "MVC", "Microservices"],
    },
    {
      title: t("categories.database"),
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      skills: ["SQL", "PostgreSQL", "MongoDB", "Prisma", "Firebase"],
    },
    {
      title: t("categories.tools"),
      icon: <Layers className="w-8 h-8 text-pink-400" />,
      skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Figma", "Jira", "Slack", "GitLab"],
    },
  ];

  return (
    <section id="skills" className="container mx-auto px-4 py-20">
      <ScrollAnimation>
        {/* Başlık ve Alt Başlık (Çeviriden Geliyor) */}
        <SectionHeading 
          title={t("title")} 
          subtitle={t("subtitle")}
        />

        {/* Kartlar Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                {/* Kategori Başlığı */}
                <h3 className="text-xl font-semibold text-slate-200">{category.title}</h3>
              </div>
              
              {/* Yetenek Etiketleri */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 group-hover:border-purple-500/30 group-hover:text-purple-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}