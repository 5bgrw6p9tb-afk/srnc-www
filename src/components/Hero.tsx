import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Translation } from '../translations';

interface HeroProps {
  t: Translation;
  autoMode: boolean;
  setAutoMode: (mode: boolean) => void;
}

export function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(219,21,0,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(46,69,92,0.08),transparent)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/80 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[#DB1500]" />
              <span className="text-[13px] text-zinc-300 font-medium tracking-wide">Visual Cognition Research Center</span>
            </div>

            <h1 className="text-[42px] sm:text-[56px] lg:text-[80px] font-[800] leading-[1.05] tracking-[-0.02em]">
              <span className="block text-white">{t.hero.title.split('.')[0]}.</span>
              <span className="block bg-gradient-to-r from-[#DB1500] via-[#ff4d3a] to-[#DB1500] bg-clip-text text-transparent">{t.hero.title.split('.').slice(1).join('.')}</span>
            </h1>

            <p className="text-[17px] sm:text-[19px] lg:text-[21px] leading-[1.7] text-zinc-300 max-w-[600px] font-light">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-white text-zinc-950 rounded-full font-semibold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-zinc-100 transition-colors">
                {t.hero.cta1}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-4 border border-white/30 text-white rounded-full font-medium text-[15px] hover:border-white/60 hover:bg-white/[0.05] transition-colors">
                <span className="flex items-center justify-center gap-2">
                  {t.hero.cta2}
                  <span className="w-2 h-2 rounded-full bg-[#DB1500]" />
                </span>
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl">
            <div className="space-y-2">
              <div className="text-[36px] sm:text-[42px] font-[800] text-white">300+</div>
              <div className="text-[13px] text-zinc-400 uppercase tracking-wider">Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-[36px] sm:text-[42px] font-[800] text-white">20+</div>
              <div className="text-[13px] text-zinc-400 uppercase tracking-wider">Years</div>
            </div>
            <div className="space-y-2">
              <div className="text-[36px] sm:text-[42px] font-[800] text-white">50+</div>
              <div className="text-[13px] text-zinc-400 uppercase tracking-wider">Partners</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[11px] text-zinc-500 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#DB1500]" />
        </div>
      </div>
    </section>
  );
}
