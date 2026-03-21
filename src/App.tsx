import React, { useState } from 'react';
import { Eye, Building2, Cloud, ArrowRight, Users, Microscope, Bot, ArrowUpRight } from 'lucide-react';
import { translations, Translation } from './translations';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  const [currentLang, setCurrentLang] = useState<string>('en');
  const t: Translation = translations[currentLang];
  const [autoMode, setAutoMode] = useState<boolean>(true);

  const changeLanguage = (lang: string) => {
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-[#DB1500]/20">
      <Navigation currentLang={currentLang} t={t} changeLanguage={changeLanguage} />
      <Hero t={t} autoMode={autoMode} setAutoMode={setAutoMode} interactiveMode={false} />

      {/* Visual Cognition Research CTA Section */}
      <section className="relative h-[65vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/specialist-researcher-doctor-monitoring-brain-acti-2025-02-19-15-16-15-utc.JPG"
            alt="Multidisciplinary Research"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-[900px] mx-auto px-8">
            <h2 className="text-[48px] sm:text-[56px] lg:text-[64px] font-[800] leading-[1.1] tracking-tight text-white mb-8">
              {currentLang === 'pl' ? 'Łączymy dyscypliny naukowe' : currentLang === 'zh' ? '融合科学学科' : 'Bridging Scientific Disciplines'}
            </h2>
            <button className="group px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-100 transition-all rounded-full font-semibold text-[16px] inline-flex items-center justify-center gap-2">
              {t.hero.cta1}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Multidisciplinary Cognitive Science Section */}
      <section className="relative py-32 border-t border-white/[0.08] bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-[42px] font-[700] leading-[1.15] tracking-tight mb-5">
              {currentLang === 'pl' ? 'Nasze podejście' : currentLang === 'zh' ? '我们的方法' : 'Our Approach'}
            </h2>
            <p className="text-[16px] leading-[1.6] text-zinc-400 max-w-[800px] mx-auto">
              {currentLang === 'pl'
                ? 'Łączymy badania multidyscyplinarne z zaawansowanymi narzędziami analitycznymi, tworząc kompleksowe rozwiązania badawcze'
                : currentLang === 'zh'
                ? '我们将多学科研究与先进的分析工具相结合，创建综合研究解决方案'
                : 'Combining multidisciplinary research with advanced analytical tools to create comprehensive research solutions'}
            </p>
          </div>

          {/* Three Column Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Column 1: Multidisciplinary */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-[#2E455C]/20 to-transparent border border-white/[0.08] hover:border-white/[0.15] transition-all">
              <div className="h-14 w-14 rounded-xl bg-[#2E455C]/30 flex items-center justify-center mb-6">
                <Microscope className="h-7 w-7 text-[#2E455C]" />
              </div>
              <h4 className="text-[18px] font-[600] text-zinc-200 mb-4">{t.aiSection.col1.subtitle}</h4>
              <p className="text-[14px] leading-[1.7] text-zinc-400 mb-3">
                {t.aiSection.col1.p1}
              </p>
              <p className="text-[14px] leading-[1.7] text-zinc-400">
                {t.aiSection.col1.p2}
              </p>
            </div>

            {/* Column 2: Visual Cognition */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-[#DB1500]/10 to-transparent border border-white/[0.08] hover:border-[#DB1500]/30 transition-all">
              <div className="h-14 w-14 rounded-xl bg-[#DB1500]/20 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-[#DB1500]" />
              </div>
              <h4 className="text-[18px] font-[600] text-zinc-200 mb-4">{t.aiSection.col2.subtitle}</h4>
              <p className="text-[14px] leading-[1.7] text-zinc-400 mb-3">
                {t.aiSection.col2.p1}
              </p>
              <p className="text-[14px] leading-[1.7] text-zinc-400">
                {t.aiSection.col2.p2}
              </p>
            </div>

            {/* Column 3: AI-Powered Analysis */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-zinc-800/30 to-transparent border border-white/[0.08] hover:border-white/[0.15] transition-all">
              <div className="h-14 w-14 rounded-xl bg-zinc-800/50 flex items-center justify-center mb-6">
                <Bot className="h-7 w-7 text-zinc-400" />
              </div>
              <h4 className="text-[18px] font-[600] text-zinc-200 mb-4">{t.aiSection.col3.subtitle}</h4>
              <p className="text-[14px] leading-[1.7] text-zinc-400 mb-3">
                {t.aiSection.col3.p1}
              </p>
              <p className="text-[14px] leading-[1.7] text-zinc-400">
                {t.aiSection.col3.p2}
              </p>
            </div>
          </div>

          {/* Bottom Stats/Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-[14px] font-semibold text-[#2E455C] mb-2">
                {currentLang === 'pl' ? 'Metodologie' : currentLang === 'zh' ? '方法论' : 'Methodologies'}
              </div>
              <div className="text-[13px] text-zinc-500">
                {currentLang === 'pl'
                  ? 'Eye-tracking, EEG, GSR, EMG, badania behawioralne'
                  : currentLang === 'zh'
                  ? '眼动追踪、EEG、GSR、EMG、行为研究'
                  : 'Eye-tracking, EEG, GSR, EMG, Behavioral studies'}
              </div>
            </div>

            <div className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-[14px] font-semibold text-[#DB1500] mb-2">
                {currentLang === 'pl' ? 'Obszary badań' : currentLang === 'zh' ? '研究领域' : 'Research Areas'}
              </div>
              <div className="text-[13px] text-zinc-500">
                {currentLang === 'pl'
                  ? 'Uwaga, percepcja, pamięć, podejmowanie decyzji'
                  : currentLang === 'zh'
                  ? '注意力、感知、记忆、决策'
                  : 'Attention, Perception, Memory, Decision-making'}
              </div>
            </div>

            <div className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-[14px] font-semibold text-zinc-400 mb-2">
                {currentLang === 'pl' ? 'Narzędzia AI' : currentLang === 'zh' ? 'AI工具' : 'AI Tools'}
              </div>
              <div className="text-[13px] text-zinc-500">
                {currentLang === 'pl'
                  ? 'Analiza danych, modelowanie, automatyzacja'
                  : currentLang === 'zh'
                  ? '数据分析、建模、自动化'
                  : 'Data analysis, Modeling, Automation'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 pb-40 bg-zinc-950 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="max-w-[800px] mx-auto text-center mb-20 opacity-0 animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <h2 className="text-[48px] font-[700] leading-[1.15] tracking-tight mb-6">{t.about.title}</h2>
            <p className="text-[17px] leading-[1.7] text-zinc-400 font-normal">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`group p-6 pt-4 rounded-lg border border-transparent hover:border-white/10 transition-all duration-500 ${interactiveMode ? 'hover:bg-white/[0.04] hover:scale-105 hover:shadow-2xl hover:shadow-[#DB1500]/10' : 'hover:bg-white/[0.02]'}`}>
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-[#2E455C]" />
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item1.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item1.description}
              </p>
            </div>

            <div className={`group p-6 pt-4 rounded-lg border border-transparent hover:border-white/10 transition-all duration-500 ${interactiveMode ? 'hover:bg-white/[0.04] hover:scale-105 hover:shadow-2xl hover:shadow-[#DB1500]/10' : 'hover:bg-white/[0.02]'}`}>
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6 text-[#2E455C]" />
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item2.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item2.description}
              </p>
            </div>

            <div className={`group p-6 pt-4 rounded-lg border border-transparent hover:border-white/10 transition-all duration-500 ${interactiveMode ? 'hover:bg-white/[0.04] hover:scale-105 hover:shadow-2xl hover:shadow-[#DB1500]/10' : 'hover:bg-white/[0.02]'}`}>
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-[#2E455C]" />
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item3.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item3.description}
              </p>
            </div>

            <div className={`group p-6 pt-4 rounded-lg border border-transparent hover:border-white/10 transition-all duration-500 ${interactiveMode ? 'hover:bg-white/[0.04] hover:scale-105 hover:shadow-2xl hover:shadow-[#DB1500]/10' : 'hover:bg-white/[0.02]'}`}>
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#2E455C]" />
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item4.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item4.description}
              </p>
            </div>

            <div className={`group p-6 pt-4 rounded-lg border border-transparent hover:border-white/10 transition-all duration-500 ${interactiveMode ? 'hover:bg-white/[0.04] hover:scale-105 hover:shadow-2xl hover:shadow-[#DB1500]/10' : 'hover:bg-white/[0.02]'}`}>
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#2E455C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item5.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item5.description}
              </p>
            </div>

            <div className={`group p-6 pt-4 rounded-lg border border-transparent hover:border-white/10 transition-all duration-500 ${interactiveMode ? 'hover:bg-white/[0.04] hover:scale-105 hover:shadow-2xl hover:shadow-[#DB1500]/10' : 'hover:bg-white/[0.02]'}`}>
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-[#2E455C]" />
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item6.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item6.description}
              </p>
            </div>

            <div className={`group p-6 pt-4 rounded-lg border border-transparent hover:border-white/10 transition-all duration-500 ${interactiveMode ? 'hover:bg-white/[0.04] hover:scale-105 hover:shadow-2xl hover:shadow-[#DB1500]/10' : 'hover:bg-white/[0.02]'}`}>
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#2E455C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V11h2.5c.83 0 1.5.67 1.5 1.5V18h2v-5.5c0-1.1-.9-2-2-2H13v-.5c0-1.93-1.57-3.5-3.5-3.5S6 8.07 6 10v8h-2z"/>
                </svg>
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item7.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item7.description}
              </p>
            </div>

            <div className={`group p-6 pt-4 rounded-lg border border-transparent hover:border-white/10 transition-all duration-500 ${interactiveMode ? 'hover:bg-white/[0.04] hover:scale-105 hover:shadow-2xl hover:shadow-[#DB1500]/10' : 'hover:bg-white/[0.02]'}`}>
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#2E455C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item8.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item8.description}
              </p>
            </div>

            <div className={`group p-6 pt-4 rounded-lg border border-transparent hover:border-white/10 transition-all duration-500 ${interactiveMode ? 'hover:bg-white/[0.04] hover:scale-105 hover:shadow-2xl hover:shadow-[#DB1500]/10' : 'hover:bg-white/[0.02]'}`}>
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-[#2E455C]" />
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item9.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item9.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="relative py-24 border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="max-w-[1100px] mx-auto">
            <div className="mb-16">
              <h2 className="text-[48px] font-[700] leading-[1.15] tracking-tight mb-4">{t.ourStory.title}</h2>
              <p className="text-[19px] leading-[1.4] text-[#DB1500] font-medium">
                {t.ourStory.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-[52px] font-[900] text-[#DB1500]/20 leading-none">2005</div>
                </div>
                <p className="text-[15px] leading-[1.7] text-zinc-400">
                  {t.ourStory.milestone1}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-[52px] font-[900] text-[#DB1500]/20 leading-none">300+</div>
                </div>
                <p className="text-[15px] leading-[1.7] text-zinc-400">
                  {t.ourStory.milestone2}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#2E455C]/30 via-zinc-900/50 to-[#DB1500]/20 border border-white/[0.1] backdrop-blur-sm">
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-[#DB1500]/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-[#DB1500]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-[600] mb-2.5 leading-tight">{currentLang === 'pl' ? 'Multidyscyplinarne laboratoria dzisiaj' : currentLang === 'zh' ? '今日的多学科实验室' : 'Multidisciplinary Labs Today'}</h3>
                  <p className="text-[15px] leading-[1.7] text-zinc-400">
                    {t.ourStory.aiHighlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="max-w-[800px] mx-auto text-center mb-20">
            <h2 className="text-[48px] font-[700] leading-[1.15] tracking-tight mb-6">{t.services.title}</h2>
            <p className="text-[17px] leading-[1.7] text-zinc-400">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Eyetracking Solutions */}
            <div className={`group p-8 rounded-lg border border-white/5 transition-all duration-500 flex flex-col ${interactiveMode ? 'hover:bg-gradient-to-br hover:from-[#2E455C]/20 hover:to-[#DB1500]/5 hover:border-[#DB1500]/30 hover:scale-105 hover:shadow-2xl hover:shadow-[#DB1500]/20' : 'hover:bg-white/[0.04]'}`}>
              <div className="h-16 w-full flex items-center justify-center mb-6">
                <img src="https://eyetracking.pl/wp-content/uploads/2024/03/ETS-logo-trans-white.png" alt="Eyetracking Solutions" className="max-h-12 w-auto object-contain" />
              </div>
              <h3 className="text-[24px] font-[700] mb-4 leading-tight">{t.services.eyetracking.title}</h3>
              <p className="text-[15px] leading-[1.7] text-zinc-400 mb-6">
                {t.services.eyetracking.description}
              </p>
              <ul className="space-y-2.5 mb-6 flex-grow">
                {t.services.eyetracking.features.map((feature, index) => (
                  <li key={index} className="text-[14px] text-zinc-500 flex items-start gap-2.5">
                    <span className="text-[#DB1500] mt-0.5 text-xs">→</span>
                    <span>{feature.replace('• ', '')}</span>
                  </li>
                ))}
              </ul>
              <div>
                <a
                  href="https://www.eyetracking.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-[14px] font-medium text-white hover:text-[#DB1500] transition-colors"
                >
                  <span>www.eyetracking.pl</span>
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Digital Force */}
            <div className={`group p-8 rounded-lg border border-white/5 transition-all duration-500 flex flex-col ${interactiveMode ? 'hover:bg-gradient-to-br hover:from-[#2E455C]/20 hover:to-[#DB1500]/5 hover:border-[#DB1500]/30 hover:scale-105 hover:shadow-2xl hover:shadow-[#DB1500]/20' : 'hover:bg-white/[0.04]'}`}>
              <div className="h-16 w-full flex items-center justify-center mb-6">
                <img src="/df.png" alt="Digital Force" className="max-h-16 w-auto object-contain" style={{ mixBlendMode: 'screen' }} />
              </div>
              <h3 className="text-[24px] font-[700] mb-4 leading-tight">{t.services.digitalForce.title}</h3>
              <p className="text-[15px] leading-[1.7] text-zinc-400 mb-6">
                {t.services.digitalForce.description}
              </p>
              <ul className="space-y-2.5 mb-6 flex-grow">
                {t.services.digitalForce.features.map((feature, index) => (
                  <li key={index} className="text-[14px] text-zinc-500 flex items-start gap-2.5">
                    <span className="text-[#DB1500] mt-0.5 text-xs">→</span>
                    <span>{feature.replace('• ', '')}</span>
                  </li>
                ))}
              </ul>
              <div>
                <a
                  href="https://www.digitalforce.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-[14px] font-medium text-white hover:text-[#DB1500] transition-colors"
                >
                  <span>www.digitalforce.pl</span>
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Mindcloud One */}
            <div className={`group p-8 rounded-lg border border-white/5 transition-all duration-500 flex flex-col md:col-span-2 lg:col-span-1 ${interactiveMode ? 'hover:bg-gradient-to-br hover:from-[#2E455C]/20 hover:to-[#DB1500]/5 hover:border-[#DB1500]/30 hover:scale-105 hover:shadow-2xl hover:shadow-[#DB1500]/20' : 'hover:bg-white/[0.04]'}`}>
              <div className="h-16 w-full flex items-center justify-center mb-6">
                <img src="/MC1 logo.png" alt="Mindcloud One" className="max-h-16 w-auto object-contain" style={{ mixBlendMode: 'screen' }} />
              </div>
              <h3 className="text-[24px] font-[700] mb-4 leading-tight">{t.services.mindcloud.title}</h3>
              <p className="text-[15px] leading-[1.7] text-zinc-400 mb-6">
                {t.services.mindcloud.description}
              </p>
              <ul className="space-y-2.5 mb-6 flex-grow">
                {t.services.mindcloud.features.map((feature, index) => (
                  <li key={index} className="text-[14px] text-zinc-500 flex items-start gap-2.5">
                    <span className="text-[#DB1500] mt-0.5 text-xs">→</span>
                    <span>{feature.replace('• ', '')}</span>
                  </li>
                ))}
              </ul>
              <div>
                <a
                  href="https://www.mindcloud.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-[14px] font-medium text-white hover:text-[#DB1500] transition-colors"
                >
                  <span>www.mindcloud.one</span>
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooperation Section */}
      <section id="cooperation" className="relative py-32 bg-zinc-900/50 border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
          <h2 className="text-[48px] font-bold leading-[1.15] tracking-tight mb-6">{t.cooperation.title}</h2>
          <p className="text-[17px] leading-[1.7] text-zinc-400 mb-10 max-w-[700px] mx-auto">
            {t.cooperation.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-[900px] mx-auto text-left">
            <div>
              <h3 className="text-[15px] font-semibold mb-3">{t.cooperation.columns.technology.title}</h3>
              <p className="text-[13px] leading-[1.6] text-zinc-400">
                {t.cooperation.columns.technology.description}
              </p>
            </div>
            <div>
              <h3 className="text-[15px] font-semibold mb-3">{t.cooperation.columns.commercialization.title}</h3>
              <p className="text-[13px] leading-[1.6] text-zinc-400">
                {t.cooperation.columns.commercialization.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-8 rounded-lg bg-white/[0.02] border border-white/[0.08]">
              <div className="text-[48px] font-[800] text-[#DB1500] mb-2">50+</div>
              <div className="text-[14px] text-zinc-400 font-medium">{t.cooperation.stats.partnerships}</div>
            </div>
            <div className="p-8 rounded-lg bg-white/[0.02] border border-white/[0.08]">
              <div className="text-[48px] font-[800] text-[#DB1500] mb-2">15</div>
              <div className="text-[14px] text-zinc-400 font-medium">{t.cooperation.stats.universities}</div>
            </div>
            <div className="p-8 rounded-lg bg-white/[0.02] border border-white/[0.08]">
              <div className="text-[48px] font-[800] text-[#DB1500] mb-2">200+</div>
              <div className="text-[14px] text-zinc-400 font-medium">{t.cooperation.stats.projects}</div>
            </div>
            <div className="p-8 rounded-lg bg-white/[0.02] border border-white/[0.08]">
              <div className="text-[48px] font-[800] text-[#DB1500] mb-2">250+</div>
              <div className="text-[14px] text-zinc-400 font-medium">{t.cooperation.stats.publications}</div>
            </div>
          </div>

          <button className="px-7 py-3.5 bg-white text-zinc-950 hover:bg-zinc-100 transition-all rounded-full font-semibold text-[15px]">
            {t.cooperation.cta}
          </button>
        </div>
      </section>

      {/* Knowledge Models Section */}
      <section id="knowledge-models" className="relative py-32 border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-[700] leading-[1.15] tracking-tight mb-6">{t.knowledgeModels.title}</h2>
            <p className="text-[17px] leading-[1.7] text-zinc-400 max-w-[800px] mx-auto">
              {t.knowledgeModels.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => {
              const item = t.knowledgeModels[`item${num}` as keyof typeof t.knowledgeModels] as { title: string; description: string };
              return (
                <div key={num} className={`group relative p-8 rounded-lg bg-white/[0.02] border border-white/[0.08] transition-all duration-500 ${interactiveMode ? 'hover:bg-gradient-to-br hover:from-[#DB1500]/10 hover:to-transparent hover:border-[#DB1500]/40 hover:scale-105 hover:shadow-xl hover:shadow-[#DB1500]/10' : 'hover:bg-white/[0.04] hover:border-white/[0.15]'}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DB1500]/10 flex items-center justify-center">
                      <span className="text-[#DB1500] font-bold text-[15px]">{num}</span>
                    </div>
                    <h3 className="text-[17px] font-[600] leading-[1.3] pt-2">{item.title}</h3>
                  </div>
                  <p className="text-[14px] leading-[1.7] text-zinc-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative py-32 border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-[48px] font-[700] leading-[1.15] tracking-tight">{t.partners.title}</h2>
          </div>

          {/* Business Partners */}
          <div className="mb-20">
            <h3 className="text-[19px] font-semibold text-center mb-10 text-zinc-400">{t.partners.business}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
              {/* iMotions */}
              <div className="w-28 h-16 flex items-center justify-center p-2 hover:opacity-100 transition-opacity">
                <img src="https://imotions.com/wp-content/uploads/2022/11/iMotions_logo.png" alt="iMotions" className="max-w-full max-h-full object-contain filter grayscale brightness-150 contrast-125 opacity-30" />
              </div>

              {/* Pupil Labs */}
              <div className="w-28 h-16 flex items-center justify-center p-2 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Pupil_Labs_logo.svg" alt="Pupil Labs" className="max-w-full max-h-full object-contain filter grayscale invert brightness-110 opacity-30" />
              </div>

              {/* Smart Eye */}
              <div className="w-28 h-16 flex items-center justify-center p-2 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/SmartEye_logo_PNG_200px.png" alt="Smart Eye" className="max-w-full max-h-full object-contain filter grayscale brightness-125 contrast-110 opacity-30" />
              </div>

              {/* Eye Logic */}
              <div className="w-28 h-16 flex items-center justify-center p-2 hover:opacity-100 transition-opacity">
                <img src="https://www.eyelogicsolutions.com/wp-content/uploads/2021/09/Logo_neu-e1640256460644.png" alt="EyeLogic" className="max-w-full max-h-full object-contain filter grayscale brightness-150 contrast-125 opacity-30" />
              </div>

              {/* PsychoPy */}
              <div className="w-28 h-16 flex items-center justify-center p-2 hover:opacity-100 transition-opacity">
                <img src="https://www.psychopy.org/_static/psychopy_logotext.png" alt="PsychoPy" className="max-w-full max-h-full object-contain filter grayscale invert brightness-110 opacity-30" />
              </div>

              {/* CrewAI */}
              <div className="w-28 h-16 flex items-center justify-center p-2 hover:opacity-100 transition-opacity">
                <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/crewai-text.png" alt="CrewAI" className="max-w-full max-h-full object-contain filter grayscale brightness-125 opacity-30" />
              </div>

              {/* OpenAI */}
              <div className="w-28 h-16 flex items-center justify-center p-2 hover:opacity-100 transition-opacity">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuDvlNDmDGF5QwPETEs3eh7RHNGmKBpgwyw&s" alt="OpenAI" className="max-w-full max-h-full object-contain filter grayscale invert brightness-110 opacity-30" />
              </div>

              {/* ElevenLabs */}
              <div className="w-28 h-16 flex items-center justify-center p-2 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/ElevenLabs_Logo_01.svg" alt="ElevenLabs" className="max-w-full max-h-full object-contain filter grayscale brightness-125 contrast-110 opacity-30" />
              </div>

              {/* Gazepoint */}
              <div className="w-28 h-16 flex items-center justify-center p-2 hover:opacity-100 transition-opacity">
                <img src="https://www.gazept.com/wp-content/uploads/logo-color.png" alt="Gazepoint" className="max-w-full max-h-full object-contain filter grayscale brightness-125 contrast-110 opacity-30" />
              </div>

              {/* Base44 */}
              <div className="w-28 h-16 flex items-center justify-center p-2 hover:opacity-100 transition-opacity">
                <img src="https://mintcdn.com/base44/-Vklow6W-uVvNnvR/images/light-mode.svg?fit=max&auto=format&n=-Vklow6W-uVvNnvR&q=85&s=c6e087bf9d4fcb53cdf9aa24a0a0a488" alt="Base44" className="max-w-full max-h-full object-contain filter grayscale invert brightness-125 contrast-110 opacity-30" />
              </div>

              {/* n8n */}
              <div className="w-28 h-16 flex items-center justify-center p-2 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/N8n-logo-new.svg/1280px-N8n-logo-new.svg.png" alt="n8n" className="max-w-full max-h-full object-contain filter grayscale invert brightness-125 contrast-110 opacity-30" />
              </div>

              {/* DeepSeek */}
              <div className="w-28 h-16 flex items-center justify-center p-2 hover:opacity-100 transition-opacity">
                <img src="https://cdn.deepseek.com/logo.png?x-image-process=image%2Fresize%2Cw_1920" alt="DeepSeek" className="max-w-full max-h-full object-contain filter grayscale brightness-125 contrast-110 opacity-30" />
              </div>

              {/* Google Gemini */}
              <div className="w-24 h-14 flex items-center justify-center p-2 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/2560px-Google_Gemini_logo.svg.png" alt="Google Gemini" className="max-w-full max-h-full object-contain filter grayscale brightness-125 contrast-110 opacity-30" />
              </div>
            </div>
          </div>

          {/* Academic Partners */}
          <div>
            <h3 className="text-[19px] font-semibold text-center mb-10 text-zinc-400">{t.partners.academic}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {/* Politechnika Śląska */}
              <div className="w-full h-24 flex items-center justify-center p-4 border border-white/10 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                <span className="text-sm font-medium text-zinc-400 text-center">Politechnika Śląska</span>
              </div>

              {/* Politechnika Poznańska */}
              <div className="w-full h-24 flex items-center justify-center p-4 border border-white/10 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                <span className="text-sm font-medium text-zinc-400 text-center">Politechnika Poznańska</span>
              </div>

              {/* Politechnika Łódzka */}
              <div className="w-full h-24 flex items-center justify-center p-4 border border-white/10 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                <span className="text-sm font-medium text-zinc-400 text-center">Politechnika Łódzka</span>
              </div>

              {/* ASP w Łodzi */}
              <div className="w-full h-24 flex items-center justify-center p-4 border border-white/10 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                <span className="text-sm font-medium text-zinc-400 text-center">ASP w Łodzi</span>
              </div>

              {/* Uniwersytet Ekonomiczny we Wrocławiu */}
              <div className="w-full h-24 flex items-center justify-center p-4 border border-white/10 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                <span className="text-sm font-medium text-zinc-400 text-center">Uniwersytet Ekonomiczny we Wrocławiu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm t={t} currentLang={currentLang} />
      <Footer t={t} autoMode={autoMode} setAutoMode={setAutoMode} />
    </div>
  );
}

export default App;