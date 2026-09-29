'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({
  className = '',
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-flex shrink-0 whitespace-nowrap items-center gap-1 p-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white ${className}`}
      role="group"
      aria-label="Language Switcher"
    >
      <div className="px-1 text-white shrink-0">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        type="button"
        onClick={() => setLocale('en')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${locale === 'en'
          ? 'bg-[#964724] text-white shadow-sm'
          : 'text-white hover:bg-white/15'
          }`}
      >
        EN
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.95 }}
        type="button"
        onClick={() => setLocale('ar')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full font-lateef text-base leading-none transition-all duration-200 cursor-pointer ${locale === 'ar'
          ? 'bg-[#964724] text-white shadow-sm'
          : 'text-white hover:bg-white/15'
          }`}
      >
        العربية
      </motion.button>
    </div>
  );
}
