import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Users, Languages, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onApplyClick: () => void;
  onExploreAcademics: () => void;
}

export default function HeroSection({ onApplyClick, onExploreAcademics }: HeroSectionProps) {
  const { t, isRtl } = useLanguage();

  const stats = [
    { id: 's1', icon: GraduationCap, label: t('stats.graduationRate'), desc: t('stats.graduationDesc') },
    { id: 's2', icon: Users, label: t('stats.classRatio'), desc: t('stats.classDesc') },
    { id: 's3', icon: Languages, label: t('stats.bilingual'), desc: t('stats.bilingualDesc') },
    { id: 's4', icon: Award, label: t('stats.clubs'), desc: t('stats.clubsDesc') }
  ];

  return (
    <section id="hero" className="relative bg-sleek-sand pt-28 pb-20 overflow-hidden border-b border-sleek-border">
      {/* Subtle Sleek Background Ornaments */}
      <div className={`absolute top-0 ${isRtl ? 'right-1/4' : 'left-1/4'} w-[500px] h-[500px] bg-amber-50 rounded-full filter blur-3xl opacity-40 -translate-y-1/2 -z-10`} />
      <div className={`absolute bottom-0 ${isRtl ? 'left-1/4' : 'right-1/4'} w-[400px] h-[400px] bg-blue-50/70 rounded-full filter blur-3xl opacity-40 translate-y-1/3 -z-10`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full w-fit"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span className="text-[11px] uppercase tracking-wider font-bold text-amber-800">
                {t('hero.admissionsOpen')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.1] text-sleek-blue tracking-tight"
            >
              {t('hero.titleLine1')} <span className="font-serif italic text-amber-700">{t('hero.titleItalic')}</span> <br className="hidden sm:inline"/>
              {t('hero.titleLine2')} <span className="font-bold">{t('hero.titleBold')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-stone-500 max-w-xl leading-relaxed"
            >
              {t('hero.desc')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                id="hero-apply-btn"
                onClick={onApplyClick}
                className="bg-sleek-stone hover:bg-black text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-md hover:shadow-lg text-center scale-100 active:scale-98 cursor-pointer"
              >
                {t('hero.applyBtn')}
              </button>
              <button
                id="hero-explore-btn"
                onClick={onExploreAcademics}
                className="border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 px-8 py-4 rounded-2xl font-semibold transition-all text-center cursor-pointer shadow-xs hover:shadow-md"
              >
                {t('hero.exploreBtn')}
              </button>
            </motion.div>
          </div>

          {/* Hero Right Media Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            {/* Elegant large curved container */}
            <div className="w-full aspect-[4/5] bg-stone-200 rounded-[64px] overflow-hidden relative shadow-2xl shadow-stone-300/50 border border-sleek-border group">
              <img
                src="/src/assets/images/school_campus_hero_1783244880689.jpg"
                alt="Sudanese Community School Al-Ajami Campus"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sleek-blue/70 via-sleek-blue/15 to-transparent pointer-events-none" />
              
              {/* Overlaid Student Spotlight or welcome detail */}
              <div className={`absolute bottom-8 ${isRtl ? 'right-8 left-8' : 'left-8 right-8'} text-white text-right-dir`}>
                <p className="text-[10px] uppercase tracking-widest opacity-80 mb-2 font-semibold">
                  {t('hero.accreditedProgram')}
                </p>
                <h3 className="text-xl sm:text-2xl font-medium font-serif italic leading-snug">
                  {t('hero.spotlightQuote')}
                </h3>
                <p className="mt-4 text-xs font-mono opacity-90">
                  — {t('hero.spotlightAuthor')}
                </p>
              </div>
            </div>

            {/* Overlaid Floating Achievement Widget */}
            <div className={`absolute -bottom-6 ${isRtl ? '-right-6' : '-left-6'} bg-white p-6 rounded-3xl shadow-xl border border-stone-100 flex gap-4 items-center z-20`}>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-sleek-blue leading-none">98%</p>
                <p className="text-[10px] uppercase font-bold text-stone-400 mt-1">
                  {t('hero.universityEntry')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistic Cards Ticker */}
        <div id="stats-ticker" className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-12 border-t border-sleek-border mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-sleek-border shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-amber-50 text-amber-700 rounded-full flex items-center justify-center shrink-0">
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sleek-blue text-sm sm:text-base leading-tight">
                  {stat.label}
                </h3>
                <p className="text-stone-400 text-xs mt-1">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
