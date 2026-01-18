import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from "../../components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/sections/scroll-to-top";
// 1. Toaster importunu ekle
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang={locale} className="dark">
      <body className={`${inter.className} antialiased min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          {/* 2. Toaster'ı Provider'ın içine ekle */}
          <Toaster
            position="bottom-center" // Mesajı alt ortaya taşıdık
            richColors
            closeButton
            toastOptions={{
              style: {
                background: '#0f172a', // Daha koyu bir slate rengi
                color: '#f8fafc',
                border: '1px solid rgba(168, 85, 247, 0.2)', // Mor bir çerçeve (portfolyona uyumlu)
                borderRadius: '16px',
                fontSize: '14px',
                padding: '16px',
              },
              className: "shadow-2xl shadow-purple-500/10", // Hafif bir mor gölge
            }}
          />

          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
              {children}
            </main>

            <Footer />

            <ScrollToTop />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}