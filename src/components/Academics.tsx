import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEPARTMENTS } from '../data';
import { BookOpen, GraduationCap, Compass, Baby, ChevronRight, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Academics() {
  const { t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState('kindergarten');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby': return Baby;
      case 'BookOpen': return BookOpen;
      case 'Compass': return Compass;
      case 'GraduationCap': return GraduationCap;
      default: return BookOpen;
    }
  };

  const currentDept = DEPARTMENTS.find(dept => dept.id === activeTab) || DEPARTMENTS[0];

  return (
    <section id="academics" className="py-24 bg-sleek-sand border-b border-sleek-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-amber-700 font-bold text-xs uppercase tracking-widest font-mono mb-3">
            {t('academics.tagline')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-sleek-blue tracking-tight mb-4 text-right-dir-center">
            {isRtl ? (
              <span>المراحل و <span className="font-bold">المستويات التعليمية</span></span>
            ) : (
              <span>Our Educational <span className="font-bold">{t('academics.titleBold')}</span></span>
            )}
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
            {t('academics.desc')}
          </p>
        </div>

        {/* Tab Buttons (Responsive Horizontal Scroll/Flex) */}
        <div className="flex flex-nowrap md:flex-wrap gap-2 md:gap-3 overflow-x-auto pb-4 md:pb-0 md:justify-center border-b border-sleek-border mb-12 scrollbar-none flex-row-dir">
          {DEPARTMENTS.map((dept) => {
            const IconComponent = getIcon(dept.iconName);
            const isActive = dept.id === activeTab;
            
            return (
              <button
                key={dept.id}
                onClick={() => setActiveTab(dept.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap transition-all duration-300 shrink-0 cursor-pointer border flex-row-dir ${
                  isActive
                    ? 'bg-sleek-blue text-white border-sleek-blue shadow-lg shadow-sleek-blue/10 scale-103'
                    : 'bg-white hover:bg-stone-50 text-stone-600 hover:text-stone-900 border-sleek-border'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{isRtl ? dept.arabicName : dept.name.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Department Content Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-right-dir"
          >
            {/* Dept details (Left) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-3 mb-4 flex-row-dir justify-start">
                <span className="text-amber-700 font-bold font-mono text-xs uppercase px-3 py-1 bg-amber-50 border border-amber-100 rounded-full">
                  {isRtl ? currentDept.gradeRangeAr || currentDept.gradeRange : currentDept.gradeRange}
                </span>
                <span className="text-stone-300 font-medium text-sm">|</span>
                <span className="text-stone-400 font-bold text-[10px] uppercase tracking-widest font-mono">
                  {isRtl ? currentDept.name : currentDept.arabicName}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-sleek-blue mb-6 leading-tight">
                {isRtl ? currentDept.arabicName : currentDept.name.split(' (')[0]} <span className="font-serif italic font-medium text-amber-700">{!isRtl && currentDept.name.includes('(') ? `(${currentDept.name.split('(')[1]}` : ''}</span>
              </h3>

              {/* Curriculum Overview */}
              <div className="mb-6 p-6 bg-white rounded-3xl border border-sleek-border shadow-xs">
                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest font-mono mb-2 text-right-dir">
                  {t('academics.curriculumStandard')}
                </h4>
                <p className="text-stone-800 font-bold text-sm sm:text-base">
                  {isRtl ? currentDept.curriculumAr || currentDept.curriculum : currentDept.curriculum}
                </p>
                <p className="text-stone-500 text-xs sm:text-sm mt-2 leading-relaxed">
                  {isRtl ? currentDept.focusAr || currentDept.focus : currentDept.focus}
                </p>
              </div>

              {/* Core Subjects Grid */}
              <div className="mb-8">
                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest font-mono mb-4 text-right-dir">
                  {t('academics.coreSubjects')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(isRtl ? currentDept.subjectsAr || currentDept.subjects : currentDept.subjects).map((subject, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 px-4 py-3 bg-white border border-sleek-border rounded-2xl shadow-xs flex-row-dir justify-start"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-stone-700 text-xs sm:text-sm font-semibold">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Department Head Profile Card (Right) */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-sleek-border rounded-[32px] p-6 sm:p-8 relative shadow-sm text-right-dir">
                <div className={`absolute top-0 ${isRtl ? 'left-8' : 'right-8'} -translate-y-1/2 p-3 bg-amber-500 text-white rounded-full shadow-lg`}>
                  <User className="w-5 h-5" />
                </div>

                <div className="flex items-center gap-4 mb-6 flex-row-dir justify-start">
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-md border-2 border-white bg-stone-200 shrink-0">
                    <img
                      src={currentDept.headTeacher.image}
                      alt={isRtl ? currentDept.headTeacher.nameAr || currentDept.headTeacher.name : currentDept.headTeacher.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sleek-blue font-bold text-base leading-tight">
                      {isRtl ? currentDept.headTeacher.nameAr || currentDept.headTeacher.name : currentDept.headTeacher.name}
                    </h4>
                    <p className="text-amber-700 font-bold text-xs mt-0.5 font-mono uppercase tracking-wider">
                      {isRtl ? currentDept.headTeacher.roleAr || currentDept.headTeacher.role : currentDept.headTeacher.role}
                    </p>
                  </div>
                </div>

                <div className="border-t border-sleek-border pt-5 mt-6 flex items-center justify-between flex-row-dir">
                  <span className="text-[10px] text-stone-400 font-bold font-mono uppercase tracking-widest">
                    {t('academics.deptLeadership')}
                  </span>
                  <div className="flex items-center gap-1 text-sleek-blue font-bold text-xs hover:text-amber-700 transition-colors cursor-pointer flex-row-dir">
                    <span>{t('academics.inquireDept')}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
