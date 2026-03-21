import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Translation } from '../translations';

interface HeroProps {
  t: Translation;
  autoMode: boolean;
  setAutoMode: (mode: boolean) => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

export function Hero({ t }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let time = 0;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      return { width: rect.width, height: rect.height };
    };

    const { width, height } = updateCanvasSize();

    const initParticles = (w: number, h: number) => {
      particles = [];
      const particleCount = Math.floor((w * h) / 8000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01
        });
      }
    };

    initParticles(width, height);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);
      time += 0.016;

      particles.forEach((p, i) => {
        p.pulse += p.pulseSpeed;
        const pulseFactor = Math.sin(p.pulse) * 0.3 + 0.7;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150 && dist > 0) {
          const force = (150 - dist) / 150;
          p.vx -= (dx / dist) * force * 0.02;
          p.vy -= (dy / dist) * force * 0.02;
        }

        p.vx += (Math.random() - 0.5) * 0.01;
        p.vy += (Math.random() - 0.5) * 0.01;

        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        gradient.addColorStop(0, `rgba(219, 21, 0, ${p.opacity * pulseFactor})`);
        gradient.addColorStop(0.5, `rgba(219, 21, 0, ${p.opacity * pulseFactor * 0.3})`);
        gradient.addColorStop(1, 'rgba(219, 21, 0, 0)');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * pulseFactor * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p2.x - p.x;
          const dy2 = p2.y - p.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 120) {
            const opacity = (1 - dist2 / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(219, 21, 0, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const { width: w, height: h } = updateCanvasSize();
      initParticles(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(219,21,0,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(46,69,92,0.08),transparent)] pointer-events-none" />

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#DB1500]/[0.03] rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#2E455C]/[0.05] rounded-full blur-[80px] pointer-events-none animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="max-w-4xl">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#DB1500] animate-pulse" />
              <span className="text-[13px] text-zinc-400 font-medium tracking-wide">Visual Cognition Research Center</span>
            </div>

            <h1
              className={`text-[42px] sm:text-[56px] lg:text-[80px] font-[800] leading-[1.05] tracking-[-0.02em] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="block text-white">{t.hero.title.split('.')[0]}.</span>
              <span className="block bg-gradient-to-r from-[#DB1500] via-[#ff4d3a] to-[#DB1500] bg-clip-text text-transparent">{t.hero.title.split('.').slice(1).join('.')}</span>
            </h1>

            <p
              className={`text-[17px] sm:text-[19px] lg:text-[21px] leading-[1.7] text-zinc-400 max-w-[600px] font-light transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {t.hero.subtitle}
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <button className="group relative px-8 py-4 bg-white text-zinc-950 rounded-full font-semibold text-[15px] inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.cta1}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button className="group px-8 py-4 border border-white/20 text-white rounded-full font-medium text-[15px] transition-all duration-300 hover:border-white/40 hover:bg-white/[0.03]">
                <span className="flex items-center justify-center gap-2">
                  {t.hero.cta2}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DB1500] group-hover:scale-150 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          <div
            className={`mt-20 grid grid-cols-3 gap-8 max-w-xl transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="space-y-2">
              <div className="text-[36px] sm:text-[42px] font-[800] text-white">300+</div>
              <div className="text-[13px] text-zinc-500 uppercase tracking-wider">Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-[36px] sm:text-[42px] font-[800] text-white">20+</div>
              <div className="text-[13px] text-zinc-500 uppercase tracking-wider">Years</div>
            </div>
            <div className="space-y-2">
              <div className="text-[36px] sm:text-[42px] font-[800] text-white">50+</div>
              <div className="text-[13px] text-zinc-500 uppercase tracking-wider">Partners</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" style={{ animationDuration: '2s' }}>
        <span className="text-[11px] text-zinc-600 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}
