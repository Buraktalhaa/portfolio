"use client";

import { useTranslations } from "next-intl";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { SectionHeading } from "@/components/ui/section-heading";
import { GraduationCap, Award, BookOpen, CheckCircle2, Globe } from "lucide-react";

export default function Education() {
  const t = useTranslations("Education");

  const certKeys = ['savunma401', 'borusan'] as const;
  const highlightKeys = ['item1', 'item2', 'item3'] as const;
  const courses = ["Data Structures", "Algorithms", "Operating Systems", "Computer Networks", "Database Management"];

  return (
    <section id="education" className="container mx-auto px-4 py-20">
      <ScrollAnimation>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* SOL TARA: Üniversite Bilgisi */}
          <div className="lg:col-span-2 p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
                <GraduationCap className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{t("degree.department")}</h3>
                <p className="text-xl text-slate-300 font-medium">{t("degree.school")}</p>
                <div className="flex flex-wrap gap-4 mt-3 text-sm font-mono text-slate-400">
                  <span className="px-2 py-1 bg-slate-800 rounded">{t("degree.date")}</span>
                  <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded border border-purple-500/30">{t("degree.gpa")}</span>
                </div>
              </div>
            </div>

            <div className="pl-2 border-l-2 border-slate-800 ml-4">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 pl-4">{t("highlights.title")}</h4>
              <ul className="space-y-4 pl-4">
                {highlightKeys.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{t(`highlights.items.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SAĞ TARA: Sertifikalar, WAT ve Kurslar */}
          <div className="space-y-6">

            {/* 1. Sertifikalar */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:bg-slate-900 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <Award className="w-6 h-6 text-orange-400" />
                <h4 className="font-bold text-white text-lg">{t("certificationsTitle")}</h4>
              </div>
              <div className="space-y-4">
                {certKeys.map((key) => (
                  <div key={key} className="group flex justify-between items-start border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <div>
                      <h5 className="text-slate-200 font-medium group-hover:text-purple-400 transition-colors">{t(`certificationsList.${key}.name`)}</h5>
                      <p className="text-xs text-slate-500 mt-1">{t(`certificationsList.${key}.issuer`)}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-600 bg-slate-950 px-2 py-1 rounded whitespace-nowrap ml-2">{t(`certificationsList.${key}.date`)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2.  Work and Travel  */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/30 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-blue-400" />
                <h4 className="font-bold text-white text-lg">{t("internationalTitle")}</h4>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-slate-200 font-medium">{t("international.wat.title")}</h5>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2 py-1 rounded border border-slate-800">{t("international.wat.date")}</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t("international.wat.desc")}
                </p>
              </div>
            </div>



            {/* 3. Kurslar (Mevcut kod) */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              {/* ... burası aynı kalsın ... */}
              <div className="flex items-center gap-3 mb-5">
                <BookOpen className="w-6 h-6 text-green-400" />
                <h4 className="font-bold text-white text-lg">{t("coursesTitle")}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {courses.map((course, index) => (
                  <span key={index} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-950 text-slate-400 border border-slate-800">
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}