import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Philosophy() {
  const { t, isRtl } = useLanguage();

  const pillars = [
    {
      id: 'discipline',
      title: isRtl ? 'الانضباط الأكاديمي وبناء الشخصية' : 'Academic Discipline & Character',
      arabicTitle: isRtl ? 'Academic Discipline & Character' : 'الانضباط الأكاديمي وبناء الشخصية',
      icon: ShieldCheck,
      color: 'blue',
      themeClass: 'border-sleek-border hover:border-[#1A365D]/30 text-stone-800',
      iconClass: 'bg-sleek-blue/5 text-[#1A365D]',
      details: isRtl ? [
        'تركيز كامل داخل الفصول الدراسية وسياسات حضور وانضباط صارمة تضمن عدم انقطاع العملية التعليمية.',
        'بناء السلوك والأخلاق الراسخة المستمدة من قيم مجتمعنا الأصيلة، واحترام المعلم، والمساندة بين الزملاء.',
        'برنامج دراسي ثنائي اللغة صارم يغطي العلوم التجريبية التحليلية، النحو العربي الكلاسيكي، والتأهيل للـ IELTS.',
        'تنمية مهارات المبادرة الشخصية، الرقابة الذاتية، والانضباط الواعي في الاستذكار والتحصيل الدراسي.'
      ] : [
        'Structured classroom focus and strict attendance policies ensuring zero learning interruptions.',
        'Moral grounding rooted in classical community virtues, respect for elders, and peer support.',
        'Bilingual academic rigor covering analytical sciences, classical Arabic syntax, and IELTS preparation.',
        'Development of personal responsibility, self-monitoring, and active study hygiene.'
      ]
    },
    {
      id: 'community',
      title: isRtl ? 'الترابط المجتمعي وإحياء التراث' : 'Warm Community & Heritage',
      arabicTitle: isRtl ? 'Warm Community & Heritage' : 'الترابط المجتمعي وإحياء التراث',
      icon: HeartHandshake,
      color: 'amber',
      themeClass: 'border-sleek-border hover:border-amber-600/30 text-stone-800',
      iconClass: 'bg-amber-50 text-amber-700',
      details: isRtl ? [
        'بيئة حاضنة تحتفي بالهوية والتراث السوداني العريق وتعزز الروابط الاجتماعية في حي العجمي بالإسكندرية.',
        'مجلس تعاون فاعل يجمع المعلمين وأولياء الأمور مع قنوات استشارية مفتوحة ولجان تنظيم مشتركة للمناسبات.',
        'مبادرات طلابية واجتماعية نشطة، مسرح مدرسي ثقافي، ندوات إلقاء الشعر، ومهرجانات المأكولات السودانية التراثية.',
        'شبكات مراجعة ودعم بين الأقران وبرامج رعاية نفسية واجتماعية لضمان تفوق ومساندة كل طفل بالمدرسة.'
      ] : [
        'An inclusive environment celebrating Sudanese identity and cultural connections in Al-Ajami.',
        'Active Parent-Teacher Alliance with open-door consultation and collaborative event committees.',
        'Social student initiatives, cultural theater, poetry recitals, and regional traditional cuisine festivals.',
        'Peer tutoring networks and psychological support counseling to make sure no child feels left behind.'
      ]
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-sleek-sand relative overflow-hidden border-b border-sleek-border">
      {/* Decorative vectors */}
      <div className={`absolute top-1/2 ${isRtl ? 'right-0' : 'left-0'} w-80 h-80 bg-blue-50/50 rounded-full filter blur-3xl opacity-40 -translate-y-1/2 -z-10`} />
      <div className={`absolute bottom-0 ${isRtl ? 'left-0' : 'right-0'} w-96 h-96 bg-amber-50/50 rounded-full filter blur-3xl opacity-40 -z-10`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-700 font-bold text-xs uppercase tracking-widest font-mono mb-3"
          >
            {t('philosophy.tagline')}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-sleek-blue tracking-tight mb-4"
          >
            {isRtl ? (
              <span>حيث يلتقي <span className="font-serif italic text-amber-700">التميز</span> بروح <span className="font-bold">التكاتف</span></span>
            ) : (
              <span>Where <span className="font-serif italic text-amber-700">{t('philosophy.titleExcellence')}</span> Meets <span className="font-bold">{t('philosophy.titleUnity')}</span></span>
            )}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 text-sm sm:text-base leading-relaxed"
          >
            {t('philosophy.desc')}
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, x: index === 0 ? (isRtl ? 30 : -30) : (isRtl ? -30 : 30) }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.1 }}
              className={`p-8 rounded-[32px] border ${pillar.themeClass} shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full bg-white text-right-dir`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 flex-row-dir">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${pillar.iconClass}`}>
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sleek-blue leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-stone-400 font-bold text-[10px] uppercase tracking-widest font-mono mt-1">
                      {pillar.arabicTitle}
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-4">
                  {pillar.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 flex-row-dir">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 ${
                        pillar.color === 'blue' ? 'bg-[#1A365D]' : 'bg-amber-600'
                      }`} />
                      <p className="text-stone-500 text-sm leading-relaxed text-right-dir flex-1">
                        {detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cultural Quote Overlay */}
              <div className="border-t border-sleek-border pt-6 mt-8">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block mb-2">
                  {t('philosophy.pillarFocus')}
                </span>
                <p className="text-stone-500 text-xs sm:text-sm italic font-serif leading-relaxed">
                  {pillar.id === 'discipline' 
                    ? t('philosophy.disciplineQuote')
                    : t('philosophy.communityQuote')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Trust Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-sleek-stone text-white rounded-[40px] p-8 sm:p-12 shadow-2xl relative overflow-hidden text-right-dir"
        >
          {/* Subtle gradient pattern */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1A365D]/30 via-transparent to-amber-500/10 opacity-30 pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 flex-row-dir">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 flex-row-dir">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-xs font-mono tracking-widest uppercase font-bold">
                  {t('philosophy.accreditationTag')}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light font-serif text-white leading-tight">
                {t('philosophy.accreditationTitle')}
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {t('philosophy.accreditationDesc')}
              </p>
            </div>
            
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <div className="text-center md:text-right-dir bg-white/5 border border-white/10 p-6 rounded-[24px] backdrop-blur-md w-full max-w-xs">
                <p className="text-amber-400 text-4xl font-bold mb-1">100%</p>
                <p className="text-[10px] uppercase tracking-widest font-mono text-stone-300 font-bold">
                  {t('philosophy.passRate')}
                </p>
                <div className="h-0.5 bg-gradient-to-r from-[#1A365D] to-amber-500 rounded-full mt-4" />
                <p className="text-[10px] text-stone-400 font-mono mt-2">
                  {t('philosophy.passRateSubtitle')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
