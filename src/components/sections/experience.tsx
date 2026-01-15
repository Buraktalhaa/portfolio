"use client";

import { useTranslations } from "next-intl";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { SectionHeading } from "@/components/ui/section-heading";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const t = useTranslations("Experience");

  const jobs = ["neg", "titraLong", "titraShort"] as const;

  return (
    <section id="experience" className="container mx-auto px-4 py-20">
      <ScrollAnimation>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="max-w-4xl mx-auto relative">
          {/* Dikey Çizgi (Timeline Line) */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-slate-800" />

          <div className="space-y-12">
            {jobs.map((jobKey, index) => (
              <div key={jobKey} className={`relative flex flex-col md:flex-row gap-8 ${
                // Tekil ve çoğul indekslere göre sağa/sola hizalama
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}>
                
                {/* 1. KARTIN KENDİSİ (İçerik) */}
                <div className="flex-1 ml-8 md:ml-0">
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 relative group">
                    
                    {/* Ok işareti (Triangle) */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-slate-900 border-t border-r border-slate-800 transform rotate-45 ${
                      index % 2 === 0 ? "-left-2 border-r-0 border-b -rotate-135" : "-right-2 rotate-45"
                    }`} />

                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {/* @ts-ignore */}
                            {t(`jobs.${jobKey}.role`)}
                        </h3>
                        <span className="flex items-center gap-1.5 text-xs font-mono text-purple-300 bg-purple-900/20 px-2 py-1 rounded border border-purple-500/20">
                          <Calendar className="w-3 h-3" />
                          {/* @ts-ignore */}
                          {t(`jobs.${jobKey}.date`)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 font-medium">
                        <Briefcase className="w-4 h-4 text-blue-500" />
                        {/* @ts-ignore */}
                        {t(`jobs.${jobKey}.company`)}
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {/* @ts-ignore */}
                      {t(`jobs.${jobKey}.desc`)}
                    </p>

                    {/* Kullanılan Teknolojiler */}
                    <div className="flex flex-wrap gap-2">
                      {/* JSON'dan array çekmek next-intl ile bazen karmaşık olabilir, 
                          bu yüzden burada 'tech' verisini string array olarak kabul ediyoruz.
                          Eğer hata alırsan 'any' kullanarak geçebiliriz. */}
                      {/* @ts-ignore */}
                      {(t.raw(`jobs.${jobKey}.tech`) as string[]).map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. ORTA NOKTA (Dot) */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] z-10 ring-4 ring-[#020617]" />
                
                {/* 3. BOŞLUK (Diğer tarafı dengelemek için) */}
                <div className="flex-1 hidden md:block" />
                
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}