'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 px-6 text-center text-white">
      <div className="max-w-3xl space-y-">
        <h1 className="text-4xl sm:text-5xl font-extrabold">{t('title')}</h1>
        <p className="text-lg sm:text-xl text-white/90">{t('description')}</p>

        <Image
          src="/illu2.png"
          alt="About Reet Technologies"
          width={600}
          height={400}
          className="rounded-xl shadow-lg mx-auto mt-8"
        />
      </div>
    </div>
  );
}
