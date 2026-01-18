"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { SectionHeading } from "@/components/ui/section-heading";
import { Mail, Phone, MapPin, Send, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const t = useTranslations("Contact");
  const [loading, setLoading] = useState(false);

  // Form gönderim işlemi
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // API'den gelen cevabı kontrol ediyoruz
      const result = await response.json();

      if (response.ok && !result.error) {
        // BAŞARILI: Toast göster ve formu temizle
        toast.success(t("form.successMessage") || "Success! Message sent."); 
        (e.target as HTMLFormElement).reset();
      } else {
        // HATA: API bir hata mesajı döndüyse onu göster
        console.error("API Error:", result.error);
        toast.error(t("form.errorMessage"));
      }
    } catch (error) {
      // SUNUCU HATASI: Fetch başarısız olduysa
      console.error("Fetch Error:", error);
      toast.error(t("form.connectionError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-20 mb-20 relative">
      {/* Arkaplan Gradyanı */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-purple-900/10 to-transparent -z-10 pointer-events-none" />

      <ScrollAnimation>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* SOL: İletişim Bilgileri */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 hidden lg:block">{t("infoTitle")}</h3>
            
            <ContactCard 
              icon={<Mail className="w-5 h-5" />}
              label={t("labels.email")}
              value={siteConfig.contactInfo.emailDisplay}
              href={siteConfig.links.email}
              color="text-blue-400"
            />
            <ContactCard 
              icon={<Phone className="w-5 h-5" />}
              label={t("labels.phone")}
              value={siteConfig.contactInfo.phone}
              href={`tel:${siteConfig.contactInfo.phone}`}
              color="text-green-400"
            />
            <ContactCard 
              icon={<MapPin className="w-5 h-5" />}
              label={t("labels.location")}
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

          {/* SAĞ: Form Alanı */}
          <div className="lg:col-span-3 p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t("form.name")}</label>
                  <input 
                    name="name" 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-700" 
                    placeholder={t("form.name")}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t("labels.email")}</label>
                  <input 
                    name="email" 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-700" 
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t("form.message")}</label>
                <textarea 
                  name="message" 
                  rows={5} 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none placeholder:text-slate-700" 
                  placeholder={t("form.message")}
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.01] transition-all shadow-lg shadow-purple-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t("form.btn")}...
                  </>
                ) : (
                  <>
                    {t("form.btn")} <Send className="w-5 h-5" />
                  </>
                )}
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
    <a href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 transition-all duration-300">
      <div className={`p-3 rounded-lg bg-slate-950 border border-slate-800 ${color} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-0.5">{label}</p>
        <p className="text-slate-200 font-medium group-hover:text-white transition-colors">{value}</p>
      </div>
      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
    </a>
  );
}