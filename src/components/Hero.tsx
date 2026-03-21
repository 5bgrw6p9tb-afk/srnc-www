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
  hue: number;
}

interface FloatingOrb {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  hue: number;
  opacity: number;
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
    let orbs: FloatingOrb[] = [];
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
      const particleCount = Math.floor((w * h) / 4000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 3 + 1.5,
          opacity: Math.random() * 0.7 + 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.03 + 0.015,
          hue: Math.random() > 0.7 ? 200 : 8
        });
      }

      orbs = [];
      for (let i = 0; i < 5; i++) {
        orbs.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 150 + 100,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          hue: i % 2 === 0 ? 8 : 210,
          opacity: 0.08
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

      ctx.fillStyle = 'rgba(9, 9, 11, 0.15)';
      ctx.fillRect(0, 0, w, h);
      time += 0.016;

      orbs.forEach(orb => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -orb.radius) orb.x = w + orb.radius;
        if (orb.x > w + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = h + orb.radius;
        if (orb.y > h + orb.radius) orb.y = -orb.radius;

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        if (orb.hue === 8) {
          gradient.addColorStop(0, `rgba(219, 21, 0, ${orb.opacity * 1.5})`);
          gradient.addColorStop(0.5, `rgba(219, 21, 0, ${orb.opacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(219, 21, 0, 0)');
        } else {
          gradient.addColorStop(0, `rgba(46, 69, 92, ${orb.opacity * 1.2})`);
          gradient.addColorStop(0.5, `rgba(46, 69, 92, ${orb.opacity * 0.4})`);
          gradient.addColorStop(1, 'rgba(46, 69, 92, 0)');
        }

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      particles.forEach((p, i) => {
        p.pulse += p.pulseSpeed;
        const pulseFactor = Math.sin(p.pulse) * 0.4 + 0.6;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200;
          p.vx += (dx / dist) * force * 0.15;
          p.vy += (dy / dist) * force * 0.15;
        }

        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;

        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const particleRadius = p.radius * pulseFactor;

        if (p.hue === 8) {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, particleRadius * 4);
          gradient.addColorStop(0, `rgba(255, 60, 40, ${p.opacity * pulseFactor})`);
          gradient.addColorStop(0.3, `rgba(219, 21, 0, ${p.opacity * pulseFactor * 0.6})`);
          gradient.addColorStop(1, 'rgba(219, 21, 0, 0)');
          ctx.fillStyle = gradient;
        } else {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, particleRadius * 4);
          gradient.addColorStop(0, `rgba(100, 140, 180, ${p.opacity * pulseFactor})`);
          gradient.addColorStop(0.3, `rgba(46, 69, 92, ${p.opacity * pulseFactor * 0.6})`);
          gradient.addColorStop(1, 'rgba(46, 69, 92, 0)');
          ctx.fillStyle = gradient;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, particleRadius * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, particleRadius * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = p.hue === 8
          ? `rgba(255, 120, 100, ${p.opacity * pulseFactor})`
          : `rgba(150, 180, 210, ${p.opacity * pulseFactor})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p2.x - p.x;
          const dy2 = p2.y - p.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 180) {
            const opacity = (1 - dist2 / 180) * 0.4;
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);

            if (p.hue === 8 && p2.hue === 8) {
              gradient.addColorStop(0, `rgba(219, 21, 0, ${opacity})`);
              gradient.addColorStop(1, `rgba(219, 21, 0, ${opacity})`);
            } else if (p.hue === 200 && p2.hue === 200) {
              gradient.addColorStop(0, `rgba(46, 69, 92, ${opacity})`);
              gradient.addColorStop(1, `rgba(46, 69, 92, ${opacity})`);
            } else {
              gradient.addColorStop(0, `rgba(219, 21, 0, ${opacity})`);
              gradient.addColorStop(1, `rgba(46, 69, 92, ${opacity})`);
            }

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = (1 - dist2 / 180) * 2;
            ctx.stroke();
          }
        }
      });

      if (mouseX > 0 && mouseY > 0) {
        const mouseGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 150);
        mouseGradient.addColorStop(0, 'rgba(219, 21, 0, 0.15)');
        mouseGradient.addColorStop(0.5, 'rgba(219, 21, 0, 0.05)');
        mouseGradient.addColorStop(1, 'rgba(219, 21, 0, 0)');
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 150, 0, Math.PI * 2);
        ctx.fillStyle = mouseGradient;
        ctx.fill();
      }

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
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-zinc-950">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/80 pointer-events-none" style={{ zIndex: 2 }} />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative" style={{ zIndex: 10 }}>
        <div className="max-w-4xl">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[#DB1500] animate-pulse" />
              <span className="text-[13px] text-zinc-300 font-medium tracking-wide">Visual Cognition Research Center</span>
            </div>

            <h1
              className={`text-[42px] sm:text-[56px] lg:text-[80px] font-[800] leading-[1.05] tracking-[-0.02em] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">{t.hero.title.split('.')[0]}.</span>
              <span className="block bg-gradient-to-r from-[#DB1500] via-[#ff4d3a] to-[#DB1500] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(219,21,0,0.3)]">{t.hero.title.split('.').slice(1).join('.')}</span>
            </h1>

            <p
              className={`text-[17px] sm:text-[19px] lg:text-[21px] leading-[1.7] text-zinc-300 max-w-[600px] font-light transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {t.hero.subtitle}
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <button className="group relative px-8 py-4 bg-white text-zinc-950 rounded-full font-semibold text-[15px] inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.cta1}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button className="group px-8 py-4 border border-white/30 text-white rounded-full font-medium text-[15px] transition-all duration-300 hover:border-white/60 hover:bg-white/[0.05] backdrop-blur-sm">
                <span className="flex items-center justify-center gap-2">
                  {t.hero.cta2}
                  <span className="w-2 h-2 rounded-full bg-[#DB1500] group-hover:scale-150 group-hover:shadow-[0_0_20px_rgba(219,21,0,0.8)] transition-all" />
                </span>
              </button>
            </div>
          </div>

          <div
            className={`mt-20 grid grid-cols-3 gap-8 max-w-xl transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ zIndex: 10 }}>
        <span className="text-[11px] text-zinc-500 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#DB1500] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
