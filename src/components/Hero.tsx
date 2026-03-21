import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Translation } from '../translations';

interface HeroProps {
  t: Translation;
  autoMode: boolean;
  setAutoMode: (mode: boolean) => void;
  interactiveMode: boolean;
}

export function Hero({ t, autoMode, setAutoMode, interactiveMode }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!interactiveMode) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      return { width: rect.width, height: rect.height };
    };

    const { width, height } = updateCanvasSize();

    const gridSize = 40;
    const nodeRadius = 2;
    const nodes: Array<{ x: number; y: number; originalX: number; originalY: number; vx: number; vy: number }> = [];

    for (let y = 0; y <= height; y += gridSize) {
      for (let x = 0; x <= width; x += gridSize) {
        nodes.push({ x, y, originalX: x, originalY: y, vx: 0, vy: 0 });
      }
    }

    let mouseX = -1000;
    let mouseY = -1000;
    let prevMouseX = -1000;
    let prevMouseY = -1000;
    let mouseVelocity = 0;

    let autoMouseX = width / 2;
    let autoMouseY = height / 2;
    let autoMouseTargetX = width / 2;
    let autoMouseTargetY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      prevMouseX = mouseX;
      prevMouseY = mouseY;
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      const dx = mouseX - prevMouseX;
      const dy = mouseY - prevMouseY;
      mouseVelocity = Math.sqrt(dx * dx + dy * dy);
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      mouseVelocity *= 0.95;

      let effectiveMouseX = mouseX;
      let effectiveMouseY = mouseY;
      let effectiveVelocity = mouseVelocity;

      if (autoMode) {
        const infinityScale = Math.min(width, height) * 0.45;
        const centerX = width / 2;
        const centerY = height / 2;

        const rotationX = Math.PI / 4.5;
        const rotationY = Math.PI / 3.5;
        const rotationZ = Math.PI / 12;

        const baseX = Math.sin(time) * Math.cos(time);
        const baseY = Math.sin(time * 2) / 2;
        const baseZ = Math.cos(time) * 0.8;

        const y1 = baseY * Math.cos(rotationX) - baseZ * Math.sin(rotationX);
        const z1 = baseY * Math.sin(rotationX) + baseZ * Math.cos(rotationX);

        const x2 = baseX * Math.cos(rotationY) + z1 * Math.sin(rotationY);
        const z2 = -baseX * Math.sin(rotationY) + z1 * Math.cos(rotationY);

        const x3 = x2 * Math.cos(rotationZ) - y1 * Math.sin(rotationZ);
        const y3 = x2 * Math.sin(rotationZ) + y1 * Math.cos(rotationZ);

        const perspective = 1 / (1 - z2 * 0.5);

        autoMouseX = centerX + infinityScale * x3 * perspective;
        autoMouseY = centerY + infinityScale * y3 * perspective;

        const dx = infinityScale * 0.3 * Math.cos(time * 0.3) * Math.cos(time * 0.3) - infinityScale * 0.3 * Math.sin(time * 0.3) * Math.sin(time * 0.3);
        const dy = infinityScale * 0.6 * Math.cos(time * 0.6) / 2;
        const autoVelocity = Math.sqrt(dx * dx + dy * dy) * 0.3;

        if (mouseVelocity > 1) {
          effectiveMouseX = mouseX;
          effectiveMouseY = mouseY;
          effectiveVelocity = mouseVelocity;
        } else {
          effectiveMouseX = autoMouseX;
          effectiveMouseY = autoMouseY;
          effectiveVelocity = autoVelocity;
        }
      }

      nodes.forEach(node => {
        const dx = effectiveMouseX - node.x;
        const dy = effectiveMouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 500;

        if (distance > 0 && effectiveVelocity > 0.5) {
          const force = Math.max(0, (maxDistance - distance) / maxDistance);
          const angle = Math.atan2(dy, dx);
          const velocityMultiplier = Math.min(1, effectiveVelocity * 0.1);

          node.vx += Math.cos(angle) * force * 3.5 * velocityMultiplier;
          node.vy += Math.sin(angle) * force * 3.5 * velocityMultiplier;
        }

        const targetX = node.originalX;
        const targetY = node.originalY;

        node.vx += (targetX - node.x) * 0.015;
        node.vy += (targetY - node.y) * 0.015;

        node.vx *= 0.95;
        node.vy *= 0.95;

        node.x += node.vx;
        node.y += node.vy;
      });

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        const distFromMouse = Math.sqrt(Math.pow(effectiveMouseX - node.x, 2) + Math.pow(effectiveMouseY - node.y, 2));
        const velocity = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        const isNearMouse = distFromMouse < 200;

        const waveDepth = Math.sin(time * 0.7 + node.originalX * 0.02) * 0.4 +
                          Math.cos(time * 1.2 + node.originalY * 0.025) * 0.4 +
                          Math.sin(time * 1.8 + (node.originalX + node.originalY) * 0.015) * 0.2;
        const depthScale = 0.5 + waveDepth * 0.5;

        const dynamicRadius = (nodeRadius + (isNearMouse ? velocity * 0.4 : 0)) * (0.7 + depthScale * 0.6);
        const baseOpacity = 0.15 + depthScale * 0.15;
        const distanceFactor = isNearMouse ? Math.pow(1 - (distFromMouse / 200), 2) : 0;
        const brightnessBoost = distanceFactor * Math.min(0.6, velocity * 0.08);

        ctx.beginPath();
        ctx.arc(node.x, node.y, dynamicRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(219, 21, 0, ${baseOpacity + brightnessBoost})`;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < gridSize * 1.8) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            const opacity = 0.15 * (1 - distance / (gridSize * 1.8));
            ctx.strokeStyle = `rgba(219, 21, 0, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      nodes.length = 0;
      for (let y = 0; y <= canvas.height; y += gridSize) {
        for (let x = 0; x <= canvas.width; x += gridSize) {
          nodes.push({ x, y, originalX: x, originalY: y, vx: 0, vy: 0 });
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [autoMode, interactiveMode]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {interactiveMode && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(219,21,0,0.15),rgba(0,0,0,0))] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_50%,rgba(46,69,92,0.08),transparent)] pointer-events-none"></div>
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#DB1500]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#2E455C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <div className="space-y-8 lg:space-y-10">
            {interactiveMode && (
              <button
                onClick={() => setAutoMode(!autoMode)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm transition-all cursor-pointer ${
                  autoMode
                    ? 'bg-[#DB1500]/10 border border-[#DB1500]/20 hover:bg-[#DB1500]/20 hover:border-[#DB1500]/30'
                    : 'bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800/70 hover:border-zinc-700/70'
                }`}
              >
                <Sparkles className={`h-4 w-4 ${autoMode ? 'text-[#DB1500]' : 'text-zinc-500'}`} />
                <span className={`text-sm font-medium ${autoMode ? 'text-[#DB1500]' : 'text-zinc-500'}`}>AI-Powered Research</span>
              </button>
            )}

            <div className="space-y-5 lg:space-y-6">
              <h1 className="text-[36px] sm:text-[48px] lg:text-[72px] font-[800] leading-[1.15] tracking-tight opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                {t.hero.title}
              </h1>
              <p className="text-[16px] sm:text-[17px] lg:text-[19px] leading-[1.6] text-zinc-400 max-w-[580px] font-normal opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <button className="group px-7 py-3.5 bg-white text-zinc-950 hover:bg-zinc-100 transition-all rounded-full font-semibold text-[15px] inline-flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl">
                {t.hero.cta1}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="px-7 py-3.5 border border-white/20 text-white bg-black hover:bg-white/5 transition-all rounded-full font-medium text-[15px] hover:scale-105 hover:border-white/40">
                {t.hero.cta2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
