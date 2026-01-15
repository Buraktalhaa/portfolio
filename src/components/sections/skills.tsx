"use client";

import { useTranslations } from "next-intl";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { SectionHeading } from "@/components/ui/section-heading";
import { mainSkills, subSkills } from "@/config/skills";

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="container mx-auto px-4 py-20">
      <ScrollAnimation>
        <SectionHeading 
          title={t("title")} 
          subtitle={t("subtitle")}
        />

        <div className="flex flex-col gap-6">
          
          {/* ÜST SATIR: 2 BÜYÜK KART (50% - 50%) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainSkills.map((category) => (
              <div 
                key={category.id} 
                className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 hover:bg-slate-900 transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${category.color}-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-${category.color}-500/10 transition-all`}></div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-200">{t(`categories.${category.id}`)}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-950 text-slate-300 border border-slate-800 group-hover:border-slate-700 group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subSkills.map((category) => (
              <div 
                key={category.id} 
                className="group p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 hover:bg-slate-900 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-200">{t(`categories.${category.id}`)}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-950 text-slate-400 border border-slate-800 group-hover:border-slate-700 group-hover:text-slate-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </ScrollAnimation>
    </section>
  );
}