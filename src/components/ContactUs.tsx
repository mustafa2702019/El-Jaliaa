import React from 'react';
import { Mail, Phone, MapPin, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactUs() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-sleek-sand/30 relative overflow-hidden border-b border-sleek-border">
      {/* Background Decor */}
      <div className={`absolute top-1/2 ${isRtl ? 'right-1/4' : 'left-1/4'} w-80 h-80 bg-amber-50/10 rounded-full filter blur-3xl opacity-40 -translate-y-1/2 -z-10`} />
      <div className={`absolute bottom-0 ${isRtl ? 'left-1/4' : 'right-1/4'} w-80 h-80 bg-blue-50/5 rounded-full filter blur-3xl opacity-40 -z-10`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-amber-700 font-bold text-xs uppercase tracking-widest font-mono mb-3">
            {t('contact.tagline')}
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-light text-sleek-blue mb-4 text-right-dir-center ${isRtl ? 'leading-snug tracking-normal' : 'leading-[1.1] tracking-tight'}`}>
            {isRtl ? (
              <span>تواصل مع مكتب تسجيل <span className="font-bold">{t('contact.titleBold')}</span></span>
            ) : (
              <span>Connect With Our <span className="font-bold">{t('contact.titleBold')}</span></span>
            )}
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
            {t('contact.desc')}
          </p>
        </div>

        {/* Central Card with Office hours info */}
        <div className="max-w-4xl mx-auto bg-white border border-sleek-border p-8 rounded-[32px] shadow-xs mb-12 text-center flex flex-col items-center gap-4">
          <h3 className="text-xl font-bold text-sleek-blue leading-tight">
            {t('contact.officeTitle')}
          </h3>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-2xl">
            {t('contact.officeDesc')}
          </p>
        </div>

        {/* 3-Column Responsive Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Location Card */}
          <div className="bg-white p-6 rounded-[24px] border border-sleek-border shadow-xs flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="p-3 bg-sleek-sand text-sleek-blue rounded-full">
              <MapPin className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <h4 className="font-bold text-sleek-stone text-sm sm:text-base leading-tight">
                {t('contact.locationTitle')}
              </h4>
              <p className="text-stone-500 text-xs sm:text-sm mt-2 leading-relaxed">
                {t('contact.locationDesc')}
              </p>
            </div>
          </div>

          {/* Phone Line Card */}
          <div className="bg-white p-6 rounded-[24px] border border-sleek-border shadow-xs flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="p-3 bg-sleek-sand text-sleek-blue rounded-full">
              <Phone className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <h4 className="font-bold text-sleek-stone text-sm sm:text-base leading-tight">
                {t('contact.helplineTitle')}
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed font-mono font-bold tracking-wide">
                {t('contact.helplineDesc')}
              </p>
              <p className="text-[10px] text-stone-400 mt-1 font-mono leading-tight">
                {t('contact.helplineHours')}
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-[24px] border border-sleek-border shadow-xs flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="p-3 bg-sleek-sand text-sleek-blue rounded-full">
              <Mail className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <h4 className="font-bold text-sleek-stone text-sm sm:text-base leading-tight">
                {t('contact.inboxTitle')}
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed font-mono font-bold">
                {t('contact.inboxDesc')}
              </p>
              <p className="text-[10px] text-stone-400 mt-1 font-mono leading-tight">
                {t('contact.inboxHours')}
              </p>
            </div>
          </div>

        </div>

        {/* Solidarity Banner (Centered) */}
        <div className="max-w-3xl mx-auto bg-sleek-stone text-white rounded-[24px] p-6 border border-stone-850 flex flex-col sm:flex-row items-center gap-4 shadow-sm text-center sm:text-right-dir flex-row-dir">
          <div className="p-3 bg-white/10 rounded-full text-sleek-amber shrink-0">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm text-white mb-1">
              {t('contact.solidarityTitle')}
            </h4>
            <p className="text-xs text-stone-300 leading-normal">
              {t('contact.solidarityDesc')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
