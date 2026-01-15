"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { SectionHeading } from "@/components/ui/section-heading";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="container mx-auto px-4 py-20 mb-20 relative">
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-purple-900/10 to-transparent -z-10 pointer-events-none" />

      <ScrollAnimation>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* SOL: İletişim Kartları (2 birim yer kaplar) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 hidden lg:block">{t("infoTitle")}</h3>
            
            {/* Kartlar */}
            <ContactCard 
              icon={<Mail className="w-5 h-5" />}
              label="Email"
              value={siteConfig.contactInfo.emailDisplay}
              href={siteConfig.links.email}
              color="text-blue-400"
            />
            <ContactCard 
              icon={<Phone className="w-5 h-5" />}
              label="Phone"
              value={siteConfig.contactInfo.phone}
              href={`tel:${siteConfig.contactInfo.phone}`}
              color="text-green-400"
            />
            <ContactCard 
              icon={<MapPin className="w-5 h-5" />}
              label="Location"
              value={siteConfig.contactInfo.location}
              href="#"
              color="text-purple-400"
            />

            {/* Fırsat Kutusu */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-purple-900/20 border border-purple-500/20 shadow-lg">
               <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                 {t("openToWork.title")} <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span>
               </h4>
               <p className="text-slate-400 text-sm leading-relaxed">
                 {t("openToWork.text")}
               </p>
            </div>
          </div>

          {/* SAĞ: Form (3 birim yer kaplar) */}
          <div className="lg:col-span-3 p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t("form.name")}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t("form.message")}</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none" />
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.01] transition-all shadow-lg shadow-purple-900/20">
                {t("form.btn")} <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </ScrollAnimation>
    </section>
  );
}

function ContactCard({ icon, label, value, href, color }: any) {
  return (
    <a href={href} className="group flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 transition-all duration-300">
      <div className={`p-3 rounded-lg bg-slate-950 border border-slate-800 ${color} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-0.5">{label}</p>
        <p className="text-slate-200 font-medium group-hover:text-white transition-colors">{value}</p>
      </div>
      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
    </a>
  )
}