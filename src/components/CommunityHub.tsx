import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_ANNOUNCEMENTS } from '../data';
import { Announcement } from '../types';
import { Megaphone, Sparkles, Search, Filter, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CommunityHub() {
  const { t, isRtl } = useLanguage();

  // Announcements States
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [selectedNews, setSelectedNews] = useState<Announcement | null>(null);

  // Filter & Search Announcements
  const filteredAnnouncements = INITIAL_ANNOUNCEMENTS.filter(news => {
    const titleVal = (isRtl ? news.titleAr || news.title : news.title).toLowerCase();
    const summaryVal = (isRtl ? news.summaryAr || news.summary : news.summary).toLowerCase();
    
    const matchesCategory = filter === 'all' || news.category.toLowerCase() === filter.toLowerCase();
    const matchesSearch = titleVal.includes(search.toLowerCase()) || 
                          summaryVal.includes(search.toLowerCase()) ||
                          news.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())) ||
                          (news.tagsAr && news.tagsAr.some(tag => tag.toLowerCase().includes(search.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const clubs = [
    { 
      name: 'Debate & Public Speaking', 
      arabic: 'نادي المناظرة والتعبير البليغ', 
      desc: isRtl 
        ? 'يعزز التفكير المنطقي النقدي، بناء الخطابة، وفنون الحوار الأكاديمي ثنائي اللغة.' 
        : 'Fosters critical logic, speech structure, and bilingual rhetoric.', 
      size: isRtl ? '٢٤ طالباً' : '24 Students', 
      lead: isRtl ? 'السيدة سارة هاريسون' : 'Mrs. Sarah Harrison' 
    },
    { 
      name: 'Holy Quran Recitation', 
      arabic: 'حلقة تجويد وتحفيظ القرآن الكريم', 
      desc: isRtl 
        ? 'التأسيس الروحي المتين، ضبط مخارج الحروف بالتجويد، وتمثيل الأخلاق الفاضلة.' 
        : 'Spiritual grounding, Tajweed refinement, and ethical character modeling.', 
      size: isRtl ? '٤٨ طالباً' : '48 Students', 
      lead: isRtl ? 'الشيخ خالد أحمد' : 'Sheikh Khalid Ahmed' 
    },
    { 
      name: 'Robotics & STEAM Club', 
      arabic: 'نادي الروبوتات والعلوم المتقدمة', 
      desc: isRtl 
        ? 'تعلم كتابة الكود البرمجي، ميكانيكا الحركة وتصميم حساسات الري والأجهزة الذكية.' 
        : 'Coding, mechanics, and designing automatic hardware sensors.', 
      size: isRtl ? '١٨ طالباً' : '18 Students', 
      lead: isRtl ? 'الدكتور طارق البشير' : 'Dr. Tariq Al-Bashir' 
    },
    { 
      name: 'Youth Football Academy', 
      arabic: 'أكاديمية كرة القدم للناشئين والبراعم', 
      desc: isRtl 
        ? 'بناء اللياقة البدنية، مهارات القيادة، التنسيق والتخطيط الجماعي المتميز.' 
        : 'Physical fitness, leadership, strategic team coordination, and sportsmanship.', 
      size: isRtl ? '٣٢ طالباً' : '32 Students', 
      lead: isRtl ? 'الأستاذ محمد الهادي' : 'Mr. Mohamed Al-Hadi' 
    }
  ];

  return (
    <section id="community" className="py-24 bg-white border-b border-sleek-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-amber-700 font-bold text-xs uppercase tracking-widest font-mono mb-3">
            {t('community.tagline')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-sleek-blue tracking-tight mb-4 text-right-dir-center">
            {isRtl ? (
              <span>مجتمعنا المدرسي وبوابة <span className="font-bold">الأنشطة والفعاليات</span></span>
            ) : (
              <span>Vibrant Community & <span className="font-bold">{t('community.titleBold')}</span></span>
            )}
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
            {t('community.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 text-right-dir">
          
          {/* Dynamic Bulletin Board (Full Width) */}
          <div className="lg:col-span-12 flex flex-col">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-sleek-border justify-between flex-wrap gap-y-4 flex-row-dir">
              <div className="flex items-center gap-2.5 flex-row-dir">
                <div className="w-10 h-10 bg-amber-50 text-amber-700 rounded-full flex items-center justify-center shrink-0">
                  <Megaphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-sleek-blue leading-tight">{t('community.bulletinTitle')}</h3>
                  <p className="text-[10px] text-stone-400 font-mono font-bold uppercase tracking-wider block mt-0.5">
                    {t('community.bulletinSubtitle')}
                  </p>
                </div>
              </div>

              {/* Filtering */}
              <div className="flex items-center gap-2 flex-row-dir">
                <Filter className="w-4 h-4 text-stone-400" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-sleek-sand border border-sleek-border rounded-full px-4 py-1.5 text-xs font-semibold text-stone-700 cursor-pointer focus:outline-none transition-all text-right-dir"
                >
                  <option value="all">{isRtl ? 'الكل' : 'All Category'}</option>
                  <option value="urgent">{isRtl ? 'تنبيه عاجل' : 'Urgent Alert'}</option>
                  <option value="academic">{isRtl ? 'أكاديمي' : 'Academic'}</option>
                  <option value="community">{isRtl ? 'المجتمع' : 'Community'}</option>
                  <option value="event">{isRtl ? 'فعاليات ومناسبات' : 'Campus Event'}</option>
                </select>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative mb-6">
              <Search className={`absolute ${isRtl ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-stone-400`} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isRtl ? 'ابحث في الأخبار والفعاليات والعلامات...' : 'Search news, tags, or announcements...'}
                className={`w-full bg-sleek-sand hover:bg-stone-100/50 border border-sleek-border rounded-full ${isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'} py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sleek-blue/20 transition-all text-right-dir`}
              />
            </div>

            {/* Bulletins Feed */}
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 pl-2 scrollbar-thin">
              {filteredAnnouncements.length > 0 ? (
                filteredAnnouncements.map((news) => {
                  const isUrgent = news.category === 'Urgent';
                  return (
                    <motion.div
                      key={news.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => setSelectedNews(news)}
                      className={`p-5 rounded-[24px] border transition-all duration-300 cursor-pointer hover:shadow-md flex flex-col gap-2 text-right-dir ${
                        isUrgent
                          ? 'bg-rose-50/40 border-rose-100 hover:bg-rose-50'
                          : 'bg-white border-sleek-border hover:border-sleek-blue'
                      }`}
                    >
                      <div className="flex justify-between items-center flex-wrap gap-2 flex-row-dir">
                        <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase font-mono ${
                          news.category === 'Urgent' ? 'bg-rose-100 text-rose-700' :
                          news.category === 'Academic' ? 'bg-blue-50 text-sleek-blue' :
                          news.category === 'Community' ? 'bg-amber-50 text-amber-850' : 'bg-stone-100 text-stone-700'
                        }`}>
                          {isRtl ? news.categoryAr || news.category : news.category}
                        </span>
                        <span className="text-[10px] text-stone-400 font-mono font-medium">{news.date}</span>
                      </div>

                      <h4 className="text-sleek-stone font-bold text-sm sm:text-base hover:text-sleek-blue transition-colors leading-snug">
                        {isRtl ? news.titleAr || news.title : news.title}
                      </h4>

                      <p className="text-stone-500 text-xs sm:text-sm line-clamp-2">
                        {isRtl ? news.summaryAr || news.summary : news.summary}
                      </p>

                      <div className="flex items-center gap-1.5 flex-wrap mt-2 flex-row-dir justify-start">
                        {(isRtl ? news.tagsAr || news.tags : news.tags).map(tag => (
                          <span key={tag} className="text-[9px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-md font-mono">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="text-center py-12 bg-sleek-sand border border-dashed border-sleek-border rounded-[24px]">
                  <Megaphone className="w-8 h-8 text-stone-300 mx-auto mb-2" />
                  <p className="text-stone-500 text-sm font-semibold">
                    {isRtl ? 'لم يتم العثور على تنبيهات تطابق البحث.' : 'No announcements found matching filters.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Extracurricular Clubs Subsection */}
        <div className="pt-16 border-t border-sleek-border">
          <div className="flex items-center gap-2 mb-8 flex-row-dir justify-start">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <h3 className="text-xl lg:text-2xl font-light text-sleek-blue leading-tight text-right-dir">
              {isRtl ? (
                <span>الأنشطة والأندية <span className="font-bold">الطلابية الإبداعية</span></span>
              ) : (
                <span>Student-Led <span className="font-bold">Development Clubs</span></span>
              )}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, idx) => (
              <div
                key={idx}
                className="bg-sleek-sand border border-sleek-border rounded-3xl p-5 hover:bg-white hover:border-amber-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className={`text-amber-700 font-bold text-xs block font-mono ${isRtl ? 'text-left' : 'text-right'}`}>
                    {isRtl ? club.name : club.arabic}
                  </span>
                  <h4 className="text-sleek-stone font-bold text-sm sm:text-base mt-1.5 mb-2 leading-tight">
                    {isRtl ? club.arabic : club.name}
                  </h4>
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-4">
                    {club.desc}
                  </p>
                </div>

                <div className="border-t border-sleek-border pt-3 flex justify-between items-center text-[10px] font-mono flex-row-dir">
                  <span className="text-stone-400">{isRtl ? 'العدد:' : 'Size:'} <strong className="text-stone-700">{club.size}</strong></span>
                  <span className="text-stone-400">{isRtl ? 'المشرف:' : 'Lead:'} <strong className="text-stone-600">{club.lead.split(' ')[2] || club.lead}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Expanded Announcement Modal */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-[32px] border border-sleek-border max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-right-dir"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} p-2 bg-sleek-sand hover:bg-stone-100 border border-sleek-border rounded-full text-stone-500 hover:text-stone-900 cursor-pointer transition-all`}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4 flex-row-dir justify-start">
                <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase font-mono ${
                  selectedNews.category === 'Urgent' ? 'bg-rose-100 text-rose-700' :
                  selectedNews.category === 'Academic' ? 'bg-blue-50 text-sleek-blue' :
                  selectedNews.category === 'Community' ? 'bg-amber-50 text-amber-850' : 'bg-stone-100 text-stone-700'
                }`}>
                  {isRtl ? selectedNews.categoryAr || selectedNews.category : selectedNews.category}
                </span>
                <span className="text-stone-400 text-xs font-mono">{selectedNews.date}</span>
              </div>

              <h3 className={`text-xl sm:text-2xl font-bold text-sleek-blue mb-4 leading-snug ${isRtl ? 'pl-8' : 'pr-8'}`}>
                {isRtl ? selectedNews.titleAr || selectedNews.title : selectedNews.title}
              </h3>

              <div className="prose prose-stone max-w-none text-stone-600 text-sm sm:text-base leading-relaxed mb-6 space-y-4 font-normal">
                {(isRtl ? selectedNews.contentAr || selectedNews.content : selectedNews.content).split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="flex items-center gap-1.5 flex-wrap border-t border-sleek-border pt-5 mb-6 flex-row-dir justify-start">
                {(isRtl ? selectedNews.tagsAr || selectedNews.tags : selectedNews.tags).map(tag => (
                  <span key={tag} className="text-xs bg-stone-100 text-stone-500 px-2.5 py-1 rounded-md font-mono">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedNews(null)}
                  className="px-6 py-2.5 bg-sleek-blue hover:bg-opacity-90 text-white font-bold rounded-full text-xs cursor-pointer shadow-xs"
                >
                  {isRtl ? 'إغلاق الإشعار' : 'Close Notice'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
