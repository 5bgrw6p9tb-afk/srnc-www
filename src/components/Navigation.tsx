import React from 'react';
import { Translation } from '../translations';

interface NavigationProps {
  currentLang: string;
  t: Translation;
  changeLanguage: (lang: string) => void;
}

export function Navigation({ currentLang, t, changeLanguage }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-xl z-50 border-b border-white/[0.08]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/SRNC O copy.jpg" alt="SRNC Logo" className="h-9 w-9" style={{ mixBlendMode: 'screen' }} />
            <div className="flex flex-col">
              <span className="text-xl font-[900] tracking-tight leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>SRNC</span>
              <span className="text-[9px] text-zinc-400 tracking-wide">Inspire Science</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-1">
            <a href="#our-story" className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#services" className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#about" className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors">{t.nav.innovations}</a>
            <a href="#knowledge-models" className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors">{t.nav.knowledgeModels}</a>
            <a href="#cooperation" className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors">{t.nav.cooperation}</a>
            <a href="#contact" className="ml-3 px-5 py-2 text-[15px] font-semibold bg-white text-zinc-950 hover:bg-zinc-100 transition-all rounded-full">{t.nav.contact}</a>
            <div className="flex items-center gap-1 ml-4 pl-4 border-l border-white/10">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1.5 text-[13px] font-medium rounded transition-colors ${currentLang === 'en' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('pl')}
                className={`px-3 py-1.5 text-[13px] font-medium rounded transition-colors ${currentLang === 'pl' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                PL
              </button>
              <button
                onClick={() => changeLanguage('zh')}
                className={`px-3 py-1.5 text-[13px] font-medium rounded transition-colors ${currentLang === 'zh' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
