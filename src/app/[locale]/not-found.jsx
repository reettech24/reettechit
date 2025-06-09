"use client";
export const dynamic = "force-dynamic";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-600 to-purple-700 px-6 text-center text-white">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-xl mb-6">{t("message")}</p>

      <Link
        href="/"
        locale={locale}
        className="px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
