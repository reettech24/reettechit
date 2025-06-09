export const dynamic = "force-dynamic";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import getRequestConfig from "@/i18n/request";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// ✅ Static rendering support for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// ✅ Metadata support for localized titles
export async function generateMetadata({ params }) {
  const { locale } = await params;

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return {
    title: messages?.metadata?.title || "Reet Technologies",
    description:
      messages?.metadata?.description ||
      "Reet Technologies is a modern software company building future-ready applications.",
    icons: {
      icon: "/reetlogo.png",
      shortcut: "/reetlogo.png",
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const { messages } = await getRequestConfig({ requestLocale: locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
