import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SchoolLogo from './components/SchoolLogo';
import HeroSection from './components/HeroSection';
import Philosophy from './components/Philosophy';
import Academics from './components/Academics';
import CommunityHub from './components/CommunityHub';
import StudentGallery from './components/StudentGallery';
import ContactUs from './components/ContactUs';
import { Menu, X, Globe, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { t, language, setLanguage, isRtl } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position for active section highlights & sticky headers
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ['hero', 'philosophy', 'academics', 'community', 'gallery', 'contact'];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero', label: t('nav.home') },
    { id: 'philosophy', label: t('nav.philosophy') },
    { id: 'academics', label: t('nav.academics') },
    { id: 'community', label: t('nav.community') },
    { id: 'gallery', label: isRtl ? 'معرض الصور' : 'Gallery' },
    { id: 'contact', label: t('nav.contact') }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen bg-white text-stone-800 font-sans antialiased selection:bg-amber-100 selection:text-amber-900 scroll-smooth">
      
      {/* 1. Header / Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-sleek-border shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 flex-row-dir">
            
            {/* Logo area */}
            <div className="flex-1 flex justify-start cursor-pointer" onClick={() => handleScrollTo('hero')}>
              <SchoolLogo size={46} showText={true} />
            </div>

            {/* Desktop Navigation links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-row-dir">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`px-4 py-2 text-xs xl:text-sm font-bold rounded-full cursor-pointer transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-sleek-blue bg-sleek-sand font-bold'
                      : 'text-stone-600 hover:text-sleek-blue hover:bg-sleek-sand'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Action buttons + Language Toggler (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-1 justify-end flex-row-dir">
              
              {/* Language Switcher Button */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-4 py-2 bg-sleek-sand hover:bg-stone-100 border border-sleek-border rounded-full text-xs font-bold text-stone-700 hover:text-sleek-blue transition-all cursor-pointer shadow-2xs"
              >
                <Globe className="w-3.5 h-3.5 text-amber-700" />
                <span className="font-mono">{language === 'en' ? 'العربية' : 'English'}</span>
              </button>

              <button
                id="header-apply-btn"
                onClick={() => handleScrollTo('contact')}
                className="px-5 py-2 bg-sleek-blue hover:bg-opacity-90 text-white text-xs xl:text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all scale-100 active:scale-98 cursor-pointer"
              >
                {isRtl ? 'تواصل معنا' : 'Contact Us'}
              </button>
            </div>

            {/* Mobile menu and Language triggers */}
            <div className="lg:hidden flex items-center gap-2 flex-row-dir">
              
              {/* Language Selector for mobile bar */}
              <button
                onClick={toggleLanguage}
                className="p-2 bg-sleek-sand border border-sleek-border text-stone-700 rounded-full hover:text-sleek-blue cursor-pointer"
              >
                <Globe className="w-4 h-4 text-amber-700" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 bg-sleek-sand border border-sleek-border text-stone-700 rounded-full hover:text-sleek-blue cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-sleek-border overflow-hidden shadow-lg text-right-dir"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleScrollTo(link.id)}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-bold flex justify-between items-center flex-row-dir ${
                      activeSection === link.id
                        ? 'text-sleek-blue bg-sleek-sand font-bold'
                        : 'text-stone-600 hover:bg-sleek-sand'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sleek-blue opacity-30" />
                  </button>
                ))}
                
                <div className="pt-4 border-t border-sleek-border">
                  <button
                    onClick={() => handleScrollTo('contact')}
                    className="w-full py-3 text-center bg-sleek-blue hover:bg-opacity-90 text-white font-bold rounded-full text-xs cursor-pointer shadow-sm"
                  >
                    {isRtl ? 'تواصل معنا' : 'Contact Us'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. Main Content Blocks */}
      <main>
        
        {/* Hero Banner Section */}
        <HeroSection
          onApplyClick={() => handleScrollTo('contact')}
          onExploreAcademics={() => handleScrollTo('academics')}
        />

        {/* Philosophy (Discipline & Community) */}
        <Philosophy />

        {/* Academic Pathways */}
        <Academics />

        {/* Active Campus Bulletin & Community Events */}
        <CommunityHub />

        {/* Customizable Student Photo Gallery */}
        <StudentGallery />

        {/* Contact Registry Office */}
        <ContactUs />

      </main>

      {/* 3. Global Footer Structure */}
      <footer className="bg-sleek-stone text-stone-400 border-t border-stone-800 pt-16 pb-12 text-right-dir">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            
            {/* Branding Block (5 Columns) */}
            <div className="md:col-span-5 flex flex-col gap-6">
              {/* Logo (Custom White Style) */}
              <div className="flex items-center gap-3 flex-row-dir justify-start">
                <SchoolLogo size={48} showText={false} />
                <div className="text-right-dir">
                  <h3 className="text-white font-bold text-base lg:text-lg tracking-tight leading-tight">
                    {isRtl ? 'مدرسة الجالية السودانية' : 'Sudanese Community School'}
                  </h3>
                  <span className="text-amber-500 font-mono text-xs font-bold uppercase tracking-wider block mt-0.5">
                    {isRtl ? 'حي العجمي، الإسكندرية • فرع المدرسة' : 'AL-AJAMI, ALEXANDRIA • SCHOOL BRANCH'}
                  </span>
                </div>
              </div>

              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                {t('footer.description')}
              </p>

              <div className="flex items-center gap-3 flex-row-dir justify-start">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-stone-400 text-xs font-mono font-bold uppercase tracking-wider">
                  {t('footer.accredited')}
                </span>
              </div>
            </div>

            {/* Quick Links Blocks (3 Columns) */}
            <div className="md:col-span-3">
              <h4 className={`text-white font-bold text-xs uppercase tracking-widest font-mono mb-4 border-amber-600 ${isRtl ? 'border-r-2 pr-3 text-right' : 'border-l-2 pl-3 text-left'}`}>
                {t('footer.navigation')}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleScrollTo(link.id)}
                      className="hover:text-amber-500 transition-colors text-right-dir cursor-pointer font-medium"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Communities (4 Columns) */}
            <div className="md:col-span-4 bg-stone-850/30 p-6 rounded-3xl border border-stone-800 flex flex-col gap-4 text-right-dir">
              <h4 className={`text-white font-bold text-xs uppercase tracking-widest font-mono border-amber-600 ${isRtl ? 'border-r-2 pr-3 text-right' : 'border-l-2 pl-3 text-left'}`}>
                {isRtl ? 'منصات التواصل الاجتماعي' : 'Social Communities'}
              </h4>
              <p className="text-stone-400 text-xs leading-normal">
                {isRtl 
                  ? 'تابعوا حساباتنا الرسمية على شبكات التواصل الاجتماعي لمتابعة أهم المنشورات، البث المباشر للفعاليات، وصور الأنشطة الطلابية اليومية.' 
                  : 'Follow our official social media channels to stay updated with daily announcements, event live streams, and student activity photos.'}
              </p>
              <div className="flex items-center gap-3 mt-2 flex-row-dir justify-start">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-sleek-amber text-white flex items-center justify-center transition-all shadow-xs hover:-translate-y-0.5">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-sleek-amber text-white flex items-center justify-center transition-all shadow-xs hover:-translate-y-0.5">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-sleek-amber text-white flex items-center justify-center transition-all shadow-xs hover:-translate-y-0.5">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-sleek-amber text-white flex items-center justify-center transition-all shadow-xs hover:-translate-y-0.5">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          <div className="h-px bg-stone-800 my-8" />

          {/* Sub-footer Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs flex-row-dir">
            <p className="text-stone-500">
              {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
            </p>
            <p className="text-stone-600 font-mono text-[10px]">
              {t('footer.subtext')}
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
