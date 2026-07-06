import React from 'react';
import { motion } from 'motion/react';
import { STUDENT_GALLERY_GROUPS } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { Image, Layers, Sparkles } from 'lucide-react';

export default function StudentGallery() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="gallery" className="py-24 bg-sleek-sand/30 border-b border-sleek-border relative overflow-hidden">
      {/* Visual accents */}
      <div className={`absolute top-1/3 ${isRtl ? 'right-0' : 'left-0'} w-72 h-72 bg-amber-500/5 rounded-full filter blur-3xl`} />
      <div className={`absolute bottom-1/4 ${isRtl ? 'left-0' : 'right-0'} w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-amber-700 font-bold text-xs uppercase tracking-widest font-mono mb-3 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isRtl ? 'معرض الأنشطة والفعاليات • School Gallery' : 'Student Activities & School Gallery'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-light text-sleek-blue mb-4 text-right-dir-center ${isRtl ? 'leading-snug tracking-normal' : 'leading-[1.1] tracking-tight'}`}>
            {isRtl ? (
              <span>لقطات حية من <span className="font-bold">مسيرة وتفوق طلابنا</span></span>
            ) : (
              <span>Moments of Student <span className="font-bold">Life & Milestones</span></span>
            )}
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
            {isRtl 
              ? 'تصفح توثيق الأنشطة الميدانية والمهرجانات الثقافية والتجارب الأكاديمية والعمل الجماعي المحفز الذي يقوم به طلاب مدرسة العجمي.' 
              : 'Browse our documented field activities, cultural traditional celebrations, scientific laboratory studies, and creative teamwork.'}
          </p>
        </div>

        {/* Gallery Groups Stack */}
        <div className="space-y-16">
          {STUDENT_GALLERY_GROUPS.map((group, index) => {
            const titleText = isRtl ? group.titleAr : group.title;
            const descText = isRtl ? group.descriptionAr : group.description;
            const imageCount = group.images.length;

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-sleek-border rounded-[32px] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Header info (Title and Description) */}
                <div className="mb-6 flex flex-col md:flex-row md:items-start justify-between gap-6 text-right-dir border-b border-sleek-border pb-6">
                  <div className="max-w-2xl">
                    <h3 className="text-xl sm:text-2xl font-bold text-sleek-blue mb-3 flex items-center gap-2 flex-row-dir">
                      <Layers className="w-5 h-5 text-amber-700 shrink-0" />
                      <span>{titleText}</span>
                    </h3>
                    <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
                      {descText}
                    </p>
                  </div>
                  
                  {/* Photo Count Pill */}
                  <div className="shrink-0 flex items-center gap-2 bg-sleek-sand border border-sleek-border px-4 py-2 rounded-full self-start">
                    <Image className="w-4 h-4 text-amber-700" />
                    <span className="text-xs font-mono font-bold text-sleek-stone">
                      {isRtl ? `${imageCount} صور` : `${imageCount} ${imageCount === 1 ? 'Photo' : 'Photos'}`}
                    </span>
                  </div>
                </div>

                {/* Images Grid for this description */}
                <div className={`grid gap-4 ${
                  imageCount === 1 
                    ? 'grid-cols-1' 
                    : imageCount === 2 
                    ? 'grid-cols-1 md:grid-cols-2' 
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {group.images.map((imgUrl, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className="group relative overflow-hidden rounded-[20px] aspect-[4/3] bg-stone-100 border border-sleek-border"
                    >
                      <img 
                        src={imgUrl} 
                        alt={`${titleText} - ${imgIndex + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-end p-4">
                        <span className="text-white text-xs font-semibold font-mono">
                          {isRtl ? `صورة ${imgIndex + 1}` : `Photo ${imgIndex + 1}`}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
