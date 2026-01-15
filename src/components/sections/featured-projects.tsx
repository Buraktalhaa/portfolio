"use client";

import { useTranslations } from "next-intl";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { SectionHeading } from "@/components/ui/section-heading";
import { Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/config/projects";

export default function FeaturedProjects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <ScrollAnimation>
        {/* Başlık ve Alt Başlık */}
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
        />

        {/* Proje Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col"
            >
              {/* 1. Proje İkonu / Kapak */}
              <div className="h-48 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center border-b border-slate-800 group-hover:from-slate-900 group-hover:to-purple-900/20 transition-all">
                <div className="p-4 bg-slate-950 rounded-full border border-slate-700 shadow-xl group-hover:scale-110 group-hover:border-purple-500/50 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>

              {/* 2. Proje Detayları */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Başlık (Çeviriden gelir) */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {t(`${project.id}.title`)}
                </h3>

                {/* Açıklama (Çeviriden gelir) */}
                <p className="text-slate-400 mb-6 line-clamp-3">
                  {t(`${project.id}.desc`)}
                </p>

                {/* Etiketler (Config'den gelir) */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-purple-300 bg-purple-900/20 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Linkler ve Butonlar */}
                <div className="flex gap-4 pt-4 border-t border-slate-800">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" /> {t("buttons.code")}
                  </a>
                  {/* 
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> {t("buttons.live")}
                    </a>
                  */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}