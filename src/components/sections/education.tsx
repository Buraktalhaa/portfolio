"use client";

import { useTranslations } from "next-intl";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  GraduationCap, Award, BookOpen, Globe, ExternalLink, 
  Trophy, Github, BrainCircuit, Star 
} from "lucide-react";
import { certKeys, courses, educationLinks } from "@/config/education";

export default function Education() {
  const t = useTranslations("Education");

  return (
    <section id="education" className="container mx-auto px-4 py-20">
      <ScrollAnimation>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        {/* ANA KAPSIYICI: Dikey olarak 3 ana bloktan oluşacak */}
        <div className="flex flex-col gap-6">
          
          {/* 1. BLOK: ÜNİVERSİTE KARTI (TAM GENİŞLİK) */}
          <div className="relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-purple-500/30 transition-all duration-300">
             
             {/* Sol: Okul Bilgisi */}
             <div className="flex items-start gap-5">
                <div className="p-4 bg-purple-600/10 rounded-2xl text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <GraduationCap className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{t("degree.department")}</h3>
                  <p className="text-lg text-slate-300 font-medium">{t("degree.school")}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-slate-950 rounded-lg text-sm font-mono text-slate-500 border border-slate-800">
                    {t("degree.date")}
                  </span>
                </div>
             </div>

             {/* Sağ: GPA VURGUSU (Buraya taşıdık, parlıyor) */}
             <div className="shrink-0">
                <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-900/40 to-slate-900 border border-purple-500/50 flex items-center gap-3 shadow-lg shadow-purple-900/20">
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
                    <span className="text-lg font-bold text-white tracking-wide">
                        {t("degree.badge")}
                    </span>
                </div>
             </div>
          </div>

          {/* 2. BLOK: YILDIZ PROJELER (İKİLİ IZGARA) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             
             {/* HACKATHON */}
             <div className="p-6 rounded-3xl bg-gradient-to-br from-yellow-900/10 to-slate-900 border border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:-translate-y-1 group">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
                        <Trophy className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold border border-yellow-500/20">WINNER</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{t("hackathon.title")}</h4>
                <p className="text-sm text-yellow-500/80 mb-3 font-mono">{t("hackathon.subtitle")}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{t("hackathon.desc")}</p>
                <a href={educationLinks.hackathonRepo} target="_blank" className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-yellow-500 hover:text-black text-slate-300 font-medium transition-colors">
                    <Github className="w-4 h-4" /> {t("hackathon.btn")}
                </a>
             </div>

             {/* TÜBİTAK */}
             <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-900/10 to-slate-900 border border-blue-500/20 hover:border-blue-500/50 transition-all hover:-translate-y-1 group">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                        <BrainCircuit className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">2209-A</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{t("tubitak.title")}</h4>
                <p className="text-sm text-blue-400/80 mb-3 font-mono">{t("tubitak.subtitle")}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{t("tubitak.desc")}</p>
                <div className="flex gap-3">
                    <a href={educationLinks.tubitakRepo} target="_blank" className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-white hover:text-black transition-colors"><Github className="w-5 h-5" /></a>
                    <a href={educationLinks.tubitakLive} target="_blank" className="flex-1 text-center py-3 rounded-xl bg-blue-600/20 text-blue-400 font-bold hover:bg-blue-600 hover:text-white transition-colors">{t("tubitak.btnLive")}</a>
                </div>
             </div>
          </div>

          {/* 3. BLOK: DETAYLAR (ÜÇLÜ IZGARA) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             
             {/* Work and Travel */}
             <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-colors">
                 <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-5 h-5 text-indigo-400" />
                    <h4 className="font-bold text-white">{t("internationalTitle")}</h4>
                 </div>
                 <div className="mb-2">
                    <h5 className="text-slate-200 font-medium text-sm">Work & Travel USA</h5>
                    <span className="text-[10px] text-slate-500">2023 • ABD</span>
                 </div>
                 <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {t("international.wat.desc")}
                 </p>
             </div>

             {/* Sertifikalar */}
             <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/50 transition-colors">
                 <div className="flex items-center gap-3 mb-4">
                    <Award className="w-5 h-5 text-orange-400" />
                    <h4 className="font-bold text-white">{t("certificationsTitle")}</h4>
                 </div>
                 <div className="space-y-3">
                    {certKeys.map((key) => {
                         const url = t.has(`certificationsList.${key}.url`) ? t(`certificationsList.${key}.url`) : null;
                         return (
                            <div key={key} className="flex justify-between items-start border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-slate-300 font-medium line-clamp-1">{t(`certificationsList.${key}.name`)}</span>
                                        {url && <a href={url} target="_blank" className="text-slate-500 hover:text-blue-400"><ExternalLink className="w-3 h-3" /></a>}
                                    </div>
                                    <span className="text-[10px] text-slate-600 block">{t(`certificationsList.${key}.issuer`)}</span>
                                </div>
                            </div>
                         )
                    })}
                 </div>
             </div>

             {/* Kurslar */}
             <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-green-500/50 transition-colors">
                 <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-5 h-5 text-green-400" />
                    <h4 className="font-bold text-white">{t("coursesTitle")}</h4>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {courses.map((course, index) => (
                        <span key={index} className="px-2 py-1 text-[10px] font-medium rounded-md bg-slate-950 text-slate-400 border border-slate-800">
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