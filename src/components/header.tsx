"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LocalSwitcher from "./local-switcher";
import { siteConfig } from "@/config/site";

export default function Header() {
  const t = useTranslations("Navigation");

  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // GÜNCELLEME: Education linki araya eklendi
  const navItems = [
    { href: "#skills", label: t("skills") },
    { href: "#experience", label: t("experience") },
    { href: "#projects", label: t("projects") },
    { href: "#education", label: t("education") },
    { href: "#contact", label: t("contact") },
  ];

  // ScrollSpy: Hangi bölümde olduğumuzu algılar
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]); 

  // Yumuşak kaydırma fonksiyonu
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#020617]/80 backdrop-blur-md transition-all">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, "#home")} 
          className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          {siteConfig.name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className={`relative transition-colors hover:text-white ${
                activeSection === item.href.substring(1) 
                  ? "text-purple-400 font-bold" 
                  : ""
              }`}
            >
              {item.label}
              {/* Aktif olan linkin altına ufak bir nokta koyalım */}
              {activeSection === item.href.substring(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 rounded-full animate-pulse" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <LocalSwitcher />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 hover:bg-slate-800 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-[#020617] absolute w-full left-0 shadow-2xl">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1) 
                    ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" 
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}