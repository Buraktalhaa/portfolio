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
      <body className={`${inter.className} antialiased min-h-screen`}>        <NextIntlClientProvider messages={messages}>

        <div className="flex min-h-screen flex-col">
          <Header />

          <div className="flex-1">
            {children}
          </div>

          <Footer />

          <ScrollToTop />

        </div>

      </NextIntlClientProvider>
      </body>
    </html>
  );
}