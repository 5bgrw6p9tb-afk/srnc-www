import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Building2, Cloud, ArrowRight, Users, Microscope, Bot, ArrowUpRight } from 'lucide-react';
import { Translation } from '../translations';
import { Hero } from '../components/Hero';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HomePageProps {
  t: Translation;
  currentLang: string;
  autoMode: boolean;
  setAutoMode: (mode: boolean) => void;
}

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function HomePage({ t, currentLang, autoMode, setAutoMode }: HomePageProps) {
  return (
    <>
      <Hero t={t} autoMode={autoMode} setAutoMode={setAutoMode} />

      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/specialist-researcher-doctor-monitoring-brain-acti-2025-02-19-15-16-15-utc.JPG"
            alt="Multidisciplinary Research"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
            <AnimatedSection className="max-w-2xl">
              <span className="inline-block text-[13px] text-[#DB1500] font-semibold tracking-wider uppercase mb-6">Research Excellence</span>
              <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-[800] leading-[1.05] tracking-tight text-white mb-8">
                {currentLang === 'pl' ? 'Laczymy dyscypliny naukowe' : currentLang === 'zh' ? '融合科学学科' : currentLang === 'ja' ? '科学分野を融合' : 'Bridging Scientific Disciplines'}
              </h2>
              <Link to="/solutions" className="group px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-100 transition-all rounded-full font-semibold text-[15px] inline-flex items-center justify-center gap-3">
                {t.hero.cta1}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(219,21,0,0.03),transparent)]" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block text-[13px] text-[#DB1500] font-semibold tracking-wider uppercase mb-4">Our Methodology</span>
            <h2 className="text-[42px] sm:text-[52px] font-[700] leading-[1.1] tracking-tight mb-6">
              {currentLang === 'pl' ? 'Nasze podejscie' : currentLang === 'zh' ? '我们的方法' : currentLang === 'ja' ? '私たちのアプローチ' : 'Our Approach'}
            </h2>
            <p className="text-[17px] leading-[1.7] text-zinc-400 max-w-[700px] mx-auto">
              {currentLang === 'pl'
                ? 'Laczymy badania multidyscyplinarne z zaawansowanymi narzedziami analitycznymi'
                : currentLang === 'zh'
                ? '我们将多学科研究与先进的分析工具相结合'
                : currentLang === 'ja'
                ? '学際的研究と高度な分析ツールを組み合わせています'
                : 'Combining multidisciplinary research with advanced analytical tools'}
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: Microscope, color: '#2E455C', title: t.aiSection.col1.subtitle, p1: t.aiSection.col1.p1, p2: t.aiSection.col1.p2 },
              { icon: Eye, color: '#DB1500', title: t.aiSection.col2.subtitle, p1: t.aiSection.col2.p1, p2: t.aiSection.col2.p2 },
              { icon: Bot, color: '#71717a', title: t.aiSection.col3.subtitle, p1: t.aiSection.col3.p1, p2: t.aiSection.col3.p2 }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="group h-full p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:translate-y-[-4px]">
                  <div
                    className="h-14 w-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon className="h-7 w-7" style={{ color: item.color }} />
                  </div>
                  <h4 className="text-[20px] font-[600] text-white mb-4">{item.title}</h4>
                  <p className="text-[14px] leading-[1.8] text-zinc-400 mb-3">{item.p1}</p>
                  <p className="text-[14px] leading-[1.8] text-zinc-500">{item.p2}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {[
              { label: currentLang === 'pl' ? 'Metodologie' : currentLang === 'ja' ? '方法論' : 'Methodologies', value: 'Eye-tracking, EEG, GSR, EMG', color: '#2E455C' },
              { label: currentLang === 'pl' ? 'Obszary badan' : currentLang === 'ja' ? '研究分野' : 'Research Areas', value: 'Attention, Perception, Memory', color: '#DB1500' },
              { label: currentLang === 'pl' ? 'Narzedzia AI' : currentLang === 'ja' ? 'AIツール' : 'AI Tools', value: 'Data analysis, Modeling', color: '#71717a' }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100 + 300}>
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
                  <div className="text-[13px] font-semibold mb-2" style={{ color: item.color }}>{item.label}</div>
                  <div className="text-[12px] text-zinc-500">{item.value}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-32 bg-zinc-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <AnimatedSection className="max-w-[800px] mx-auto text-center mb-20">
            <span className="inline-block text-[13px] text-[#DB1500] font-semibold tracking-wider uppercase mb-4">About SRNC</span>
            <h2 className="text-[42px] sm:text-[52px] font-[700] leading-[1.1] tracking-tight mb-6">{t.about.title}</h2>
            <p className="text-[17px] leading-[1.7] text-zinc-400">{t.about.subtitle}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Bot, title: t.about.item1.title, desc: t.about.item1.description },
              { icon: Microscope, title: t.about.item2.title, desc: t.about.item2.description },
              { icon: Building2, title: t.about.item3.title, desc: t.about.item3.description },
              { icon: Users, title: t.about.item4.title, desc: t.about.item4.description },
              { icon: null, svg: 'shield', title: t.about.item5.title, desc: t.about.item5.description },
              { icon: Eye, title: t.about.item6.title, desc: t.about.item6.description },
              { icon: null, svg: 'accessibility', title: t.about.item7.title, desc: t.about.item7.description },
              { icon: null, svg: 'check', title: t.about.item8.title, desc: t.about.item8.description },
              { icon: Cloud, title: t.about.item9.title, desc: t.about.item9.description }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="group h-full p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300">
                  <div className="h-11 w-11 rounded-lg bg-[#2E455C]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon ? (
                      <item.icon className="h-5 w-5 text-[#2E455C]" />
                    ) : item.svg === 'shield' ? (
                      <svg className="w-5 h-5 text-[#2E455C]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    ) : item.svg === 'accessibility' ? (
                      <svg className="w-5 h-5 text-[#2E455C]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V11h2.5c.83 0 1.5.67 1.5 1.5V18h2v-5.5c0-1.1-.9-2-2-2H13v-.5c0-1.93-1.57-3.5-3.5-3.5S6 8.07 6 10v8h-2z"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-[#2E455C]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-[17px] font-semibold mb-3 leading-tight group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-[14px] leading-[1.7] text-zinc-500">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="our-story" className="relative py-32 bg-zinc-900/30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="max-w-[1100px] mx-auto">
            <AnimatedSection className="mb-16">
              <span className="inline-block text-[13px] text-[#DB1500] font-semibold tracking-wider uppercase mb-4">Our Journey</span>
              <h2 className="text-[42px] sm:text-[52px] font-[700] leading-[1.1] tracking-tight mb-4">{t.ourStory.title}</h2>
              <p className="text-[19px] leading-[1.4] text-zinc-400 font-light">{t.ourStory.subtitle}</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <AnimatedSection delay={100}>
                <div className="relative pl-8 border-l-2 border-[#DB1500]/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#DB1500]" />
                  <div className="text-[64px] font-[900] text-[#DB1500]/20 leading-none mb-2">2005</div>
                  <p className="text-[15px] leading-[1.8] text-zinc-400">{t.ourStory.milestone1}</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="relative pl-8 border-l-2 border-[#2E455C]/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#2E455C]" />
                  <div className="text-[64px] font-[900] text-[#2E455C]/20 leading-none mb-2">300+</div>
                  <p className="text-[15px] leading-[1.8] text-zinc-400">{t.ourStory.milestone2}</p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={300}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#DB1500]/10 via-zinc-900/50 to-[#2E455C]/10 border border-white/[0.08] backdrop-blur-sm">
                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 rounded-xl bg-[#DB1500]/20 flex items-center justify-center flex-shrink-0">
                    <Eye className="h-7 w-7 text-[#DB1500]" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-[600] mb-3 leading-tight">
                      {currentLang === 'pl' ? 'Multidyscyplinarne laboratoria dzisiaj' : currentLang === 'zh' ? '今日的多学科实验室' : currentLang === 'ja' ? '今日の学際的研究所' : 'Multidisciplinary Labs Today'}
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-zinc-400">{t.ourStory.aiHighlight}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="services" className="relative py-32 bg-zinc-950">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <AnimatedSection className="max-w-[800px] mx-auto text-center mb-20">
            <span className="inline-block text-[13px] text-[#DB1500] font-semibold tracking-wider uppercase mb-4">Our Services</span>
            <h2 className="text-[42px] sm:text-[52px] font-[700] leading-[1.1] tracking-tight mb-6">{t.services.title}</h2>
            <p className="text-[17px] leading-[1.7] text-zinc-400">{t.services.subtitle}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { logo: 'https://eyetracking.pl/wp-content/uploads/2024/03/ETS-logo-trans-white.png', title: t.services.eyetracking.title, desc: t.services.eyetracking.description, features: t.services.eyetracking.features, url: 'https://www.eyetracking.pl' },
              { logo: '/df.png', title: t.services.digitalForce.title, desc: t.services.digitalForce.description, features: t.services.digitalForce.features, url: 'https://www.digitalforce.pl' },
              { logo: '/MC1 logo.png', title: t.services.mindcloud.title, desc: t.services.mindcloud.description, features: t.services.mindcloud.features, url: 'https://www.mindcloud.one', span: 'md:col-span-2 lg:col-span-1' }
            ].map((service, i) => (
              <AnimatedSection key={i} delay={i * 150} className={service.span || ''}>
                <div className="group h-full p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 flex flex-col">
                  <div className="h-16 w-full flex items-center justify-center mb-8">
                    <img src={service.logo} alt={service.title} className="max-h-14 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" style={{ mixBlendMode: 'screen' }} />
                  </div>
                  <h3 className="text-[24px] font-[700] mb-4 leading-tight">{service.title}</h3>
                  <p className="text-[15px] leading-[1.7] text-zinc-400 mb-6">{service.desc}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="text-[14px] text-zinc-500 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DB1500] mt-2 flex-shrink-0" />
                        <span>{feature.replace('• ', '').replace('・', '')}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-[14px] font-medium text-white hover:text-[#DB1500] transition-colors"
                  >
                    <span>{service.url.replace('https://www.', '')}</span>
                    <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="cooperation" className="relative py-32 bg-gradient-to-b from-zinc-900/50 to-zinc-950">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-[13px] text-[#DB1500] font-semibold tracking-wider uppercase mb-4">Partnerships</span>
            <h2 className="text-[42px] sm:text-[52px] font-[700] leading-[1.1] tracking-tight mb-6">{t.cooperation.title}</h2>
            <p className="text-[17px] leading-[1.7] text-zinc-400 max-w-[700px] mx-auto">{t.cooperation.subtitle}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-[900px] mx-auto">
            <AnimatedSection delay={100}>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <h3 className="text-[16px] font-semibold mb-3">{t.cooperation.columns.technology.title}</h3>
                <p className="text-[14px] leading-[1.7] text-zinc-400">{t.cooperation.columns.technology.description}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <h3 className="text-[16px] font-semibold mb-3">{t.cooperation.columns.commercialization.title}</h3>
                <p className="text-[14px] leading-[1.7] text-zinc-400">{t.cooperation.columns.commercialization.description}</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { value: '50+', label: t.cooperation.stats.partnerships },
                { value: '15', label: t.cooperation.stats.universities },
                { value: '200+', label: t.cooperation.stats.projects },
                { value: '250+', label: t.cooperation.stats.publications }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center hover:bg-white/[0.04] transition-colors">
                  <div className="text-[40px] sm:text-[48px] font-[800] text-[#DB1500] mb-1">{stat.value}</div>
                  <div className="text-[13px] text-zinc-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400} className="text-center">
            <Link to="/contact" className="px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-100 transition-all rounded-full font-semibold text-[15px] inline-block">
              {t.cooperation.cta}
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section id="knowledge-models" className="relative py-32 bg-zinc-950">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-[13px] text-[#DB1500] font-semibold tracking-wider uppercase mb-4">Research Focus</span>
            <h2 className="text-[42px] sm:text-[52px] font-[700] leading-[1.1] tracking-tight mb-6">{t.knowledgeModels.title}</h2>
            <p className="text-[17px] leading-[1.7] text-zinc-400 max-w-[800px] mx-auto">{t.knowledgeModels.subtitle}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((num) => {
              const item = t.knowledgeModels[`item${num}` as keyof typeof t.knowledgeModels] as { title: string; description: string };
              return (
                <AnimatedSection key={num} delay={num * 100}>
                  <div className="group h-full p-7 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DB1500]/10 flex items-center justify-center group-hover:bg-[#DB1500]/20 transition-colors">
                        <span className="text-[#DB1500] font-bold text-[15px]">{num}</span>
                      </div>
                      <h3 className="text-[17px] font-[600] leading-[1.3] pt-2">{item.title}</h3>
                    </div>
                    <p className="text-[14px] leading-[1.8] text-zinc-500">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-zinc-900/30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block text-[13px] text-[#DB1500] font-semibold tracking-wider uppercase mb-4">Our Network</span>
            <h2 className="text-[42px] sm:text-[52px] font-[700] leading-[1.1] tracking-tight">{t.partners.title}</h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="mb-16">
              <h3 className="text-[16px] font-semibold text-center mb-10 text-zinc-500">{t.partners.business}</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
                {[
                  { src: 'https://imotions.com/wp-content/uploads/2022/11/iMotions_logo.png', alt: 'iMotions' },
                  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Pupil_Labs_logo.svg', alt: 'Pupil Labs', invert: true },
                  { src: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/SmartEye_logo_PNG_200px.png', alt: 'Smart Eye' },
                  { src: 'https://www.eyelogicsolutions.com/wp-content/uploads/2021/09/Logo_neu-e1640256460644.png', alt: 'EyeLogic' },
                  { src: 'https://www.psychopy.org/_static/psychopy_logotext.png', alt: 'PsychoPy', invert: true },
                  { src: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/crewai-text.png', alt: 'CrewAI' },
                  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuDvlNDmDGF5QwPETEs3eh7RHNGmKBpgwyw&s', alt: 'OpenAI', invert: true }
                ].map((logo, i) => (
                  <div key={i} className="w-24 h-14 flex items-center justify-center p-2 opacity-40 hover:opacity-70 transition-opacity">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`max-w-full max-h-full object-contain filter grayscale ${logo.invert ? 'invert' : ''} brightness-125`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div>
              <h3 className="text-[16px] font-semibold text-center mb-10 text-zinc-500">{t.partners.academic}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-items-center">
                {['Politechnika Slaska', 'Politechnika Poznanska', 'Politechnika Lodzka', 'ASP w Lodzi', 'Uniwersytet Ekonomiczny we Wroclawiu'].map((uni, i) => (
                  <div key={i} className="w-full h-20 flex items-center justify-center p-4 border border-white/[0.06] rounded-xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all">
                    <span className="text-[13px] font-medium text-zinc-500 text-center">{uni}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
