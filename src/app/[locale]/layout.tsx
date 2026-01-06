import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; 
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from "../../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolyo",
  description: "Kişisel Portfolyo Sitesi",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Parametreleri await ile al (Next.js 15 kuralı)
  const { locale } = await params;

  // Gelen dil bizim listemizde var mı kontrol et
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Mesajları (çevirileri) sunucudan al
  const messages = await getMessages();

return (
  <html lang={locale}>
    <body className={inter.className}>
      <NextIntlClientProvider messages={messages}>
        
        {/* Header'ı tam buraya, children'ın üstüne ekliyoruz */}
        <Header /> 
        
        {children}
        
      </NextIntlClientProvider>
    </body>
  </html>
);
}