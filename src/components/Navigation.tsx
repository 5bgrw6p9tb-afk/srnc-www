import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Globe } from 'lucide-react';
import { Translation } from '../translations';

interface NavigationProps {
  currentLang: string;
  t: Translation;
  changeLanguage: (lang: string) => void;
}

const languages = [
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'pl', label: 'Polski', flag: 'PL' },
  { code: 'zh', label: '中文', flag: '中' },
  { code: 'ja', label: '日本語', flag: '日' },
];

const navLabels: Record<string, Record<string, string>> = {
  en: { solutions: 'Solutions' },
  pl: { solutions: 'Rozwiazania' },
  zh: { solutions: '解决方案' },
  ja: { solutions: 'ソリューション' }
};

export function Navigation({ currentLang, t, changeLanguage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code: string) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!isHomePage) {
      e.preventDefault();
      window.location.href = '/' + hash;
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-xl z-50 border-b border-white/[0.08]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/SRNC O copy.jpg" alt="SRNC Logo" className="h-9 w-9" style={{ mixBlendMode: 'screen' }} />
            <div className="flex flex-col">
              <span className="text-xl font-[900] tracking-tight leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>SRNC</span>
              <span className="text-[9px] text-zinc-400 tracking-wide">Inspire Science</span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            <a
              href="#our-story"
              onClick={(e) => handleAnchorClick(e, '#our-story')}
              className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {t.nav.about}
            </a>
            <Link
              to="/solutions"
              className={`px-4 py-2 text-[15px] font-medium transition-colors ${location.pathname === '/solutions' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              {navLabels[currentLang]?.solutions || navLabels.en.solutions}
            </Link>
            <a
              href="#about"
              onClick={(e) => handleAnchorClick(e, '#about')}
              className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {t.nav.innovations}
            </a>
            <a
              href="#knowledge-models"
              onClick={(e) => handleAnchorClick(e, '#knowledge-models')}
              className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {t.nav.knowledgeModels}
            </a>
            <a
              href="#cooperation"
              onClick={(e) => handleAnchorClick(e, '#cooperation')}
              className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {t.nav.cooperation}
            </a>
            <Link
              to="/contact"
              className={`ml-3 px-5 py-2 text-[15px] font-semibold transition-all rounded-full ${location.pathname === '/contact' ? 'bg-[#DB1500] text-white' : 'bg-white text-zinc-950 hover:bg-zinc-100'}`}
            >
              {t.nav.contact}
            </Link>

            <div className="relative ml-4 pl-4 border-l border-white/10" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 text-[13px] font-medium text-zinc-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage.flag}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-white/10 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-[13px] font-medium transition-colors ${
                        currentLang === lang.code
                          ? 'bg-white/10 text-white'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="w-6 text-center font-semibold">{lang.flag}</span>
                      <span>{lang.label}</span>
                      {currentLang === lang.code && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#DB1500]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
