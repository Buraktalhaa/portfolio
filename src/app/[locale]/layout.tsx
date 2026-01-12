import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from "../../components/header";
import Footer from "@/components/footer";

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
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      {/* DEĞİŞİKLİK BURADA: 
          1. bg-slate-50: Arka planı hafif gri yapar.
          2. antialiased: Yazıların daha keskin görünmesini sağlar.
      */}
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <NextIntlClientProvider messages={messages}>

          <div className="flex min-h-screen flex-col">
            {/* Header'ın arkası beyaz kalsın istiyorsan Header bileşeninde bg-white olduğundan emin olmalısın */}
            <Header />

            <div className="flex-1">
              {children}
            </div>

            <Footer />

          </div>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}