'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { UserGroupIcon, PuzzlePieceIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function AboutSection() {
  const t = useTranslations('aboutSection');
  const features = t.raw('features'); // Extract the array of features

  return (
    <section className="bg-[#f0f0f0] text-gray-800 py-20 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden">
      {/* Left Images */}
      <div className="relative flex flex-col items-center">
        <div className="relative z-10">
          <Image
            src="/aboutsectionintro.jpg"
            alt="Business Woman"
            width={500}
            height={400}
            className="shadow-lg"
          />
        </div>

        <Image
          src="/test.jpg"
          alt="Support Agent"
          width={250}
          height={200}
          className="hidden lg:block w-64 h-84 object-cover mt-[-150px] ml-100 shadow-xl relative z-20"
        />

        <div className="absolute top-10 left-[-20px] z-10 bg-white shadow-md px-4 py-2 rounded-md flex items-center gap-2">
          <UserGroupIcon className="w-6 h-6 text-blue-600" />
          <span className="font-bold text-lg">{t('badge')}</span>
        </div>

        <div className="absolute -top-20 -left-20">
          <img src="/left-shape.png" alt="Left Shape" className="h-96" />
        </div>
      </div>

      {/* Right Content */}
      <div className="relative">
        <div className="absolute -top-110 -right-60">
          <img src="/element.png" alt="Element" className="h-96" />
        </div>

        <p className="text-blue-600 uppercase text-lg font-semibold mb-2 tracking-wider">
          {t('title')}
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold leading-snug mb-6">
          {
            t.raw('subtitle').split(/<highlight>|<\/highlight>/).map((part, i) =>
              i % 2 === 1 ? (
                <span key={i} className="text-blue-600">{part}</span>
              ) : (
                part
              )
            )
          }
        </h2>

        <p className="text-gray-600 mb-8 font-bold">{t('description')}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {Array.isArray(features) && features.map((feature, idx) => (
            <div className="flex items-start gap-4" key={idx}>
              <div className="w-14 h-14 p-4 bg-[#070B2A] text-white rounded-full flex items-center justify-center">
                {idx === 0 ? <PuzzlePieceIcon className="w-6 h-6" /> : <ChartBarIcon className="w-6 h-6" />}
              </div>
              <div>
                <h4 className="text-lg font-semibold">{feature.title}</h4>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t pt-6">
          <a
            href="#"
            className="bg-[#070B2A] text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-blue-700 transition"
          >
            {t('buttonText')}
          </a>

          <div className="flex items-center gap-3">
            <Image
              src="/work/pankaj.jpg"
              alt={t('ceo.name')}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">{t('ceo.name')}</p>
              <p className="text-sm text-gray-500">{t('ceo.title')}</p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-70 -right-20 opacity-20 w-screen">
          <img src="/p1.png" alt="Background Shape" className="" />
        </div>
      </div>
    </section>
  );
}
