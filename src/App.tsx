import React, { useState, useEffect, useRef } from 'react';
import { Eye, Building2, Cloud, Mail, Phone, MapPin, ArrowRight, Users, Microscope, Bot, ArrowUpRight, Sparkles } from 'lucide-react';
import { translations, Translation } from './translations';

function App() {
  const [currentLang, setCurrentLang] = useState<string>('en');
  const t: Translation = translations[currentLang];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [autoMode, setAutoMode] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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
  }, [autoMode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const changeLanguage = (lang: string) => {
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-[#DB1500]/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-xl z-50 border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src="/SRNC O copy.jpg" alt="SRNC Logo" className="h-9 w-9" style={{ mixBlendMode: 'screen' }} />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight leading-none">SRNC</span>
                <span className="text-[9px] text-zinc-400 tracking-wide">Inspire Science</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-1">
              <a href="#about" className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors">{t.nav.about}</a>
              <a href="#services" className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors">{t.nav.services}</a>
              <a href="#innovations" className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors">{t.nav.innovations}</a>
              <a href="#knowledge-models" className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors">{t.nav.knowledgeModels}</a>
              <a href="#cooperation" className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors">{t.nav.cooperation}</a>
              <a href="#our-story" className="px-4 py-2 text-[15px] font-medium text-zinc-400 hover:text-white transition-colors">{t.nav.ourStory}</a>
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(219,21,0,0.15),rgba(0,0,0,0))] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <div className="space-y-8 lg:space-y-10">
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

              <div className="space-y-5 lg:space-y-6">
                <h1 className="text-[36px] sm:text-[48px] lg:text-[72px] font-[800] leading-[1.15] tracking-tight">
                  {t.hero.title}
                </h1>
                <p className="text-[16px] sm:text-[17px] lg:text-[19px] leading-[1.6] text-zinc-400 max-w-[580px] font-normal">
                  {t.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-7 py-3.5 bg-white text-zinc-950 hover:bg-zinc-100 transition-all rounded-full font-semibold text-[15px] inline-flex items-center justify-center gap-2">
                  {t.hero.cta1}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button className="px-7 py-3.5 border border-white/20 text-white bg-black hover:bg-white/5 transition-all rounded-full font-medium text-[15px]">
                  {t.hero.cta2}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 pb-40 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="max-w-[800px] mx-auto text-center mb-20">
            <h2 className="text-[48px] font-[700] leading-[1.15] tracking-tight mb-6">{t.about.title}</h2>
            <p className="text-[17px] leading-[1.7] text-zinc-400 font-normal">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group p-6 pt-4 hover:bg-white/[0.02] transition-all duration-300">
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-[#2E455C]" />
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item1.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item1.description}
              </p>
            </div>

            <div className="group p-6 pt-4 hover:bg-white/[0.02] transition-all duration-300">
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6 text-[#2E455C]" />
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item2.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item2.description}
              </p>
            </div>

            <div className="group p-6 pt-4 hover:bg-white/[0.02] transition-all duration-300">
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-[#2E455C]" />
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item3.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item3.description}
              </p>
            </div>

            <div className="group p-6 pt-4 hover:bg-white/[0.02] transition-all duration-300">
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#2E455C]" />
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item4.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item4.description}
              </p>
            </div>

            <div className="group p-6 pt-4 hover:bg-white/[0.02] transition-all duration-300">
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

            <div className="group p-6 pt-4 hover:bg-white/[0.02] transition-all duration-300">
              <div className="h-12 w-12 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-[#2E455C]" />
              </div>
              <h3 className="text-[19px] font-semibold mb-3 leading-tight">{t.about.item6.title}</h3>
              <p className="text-[15px] leading-[1.6] text-zinc-400">
                {t.about.item6.description}
              </p>
            </div>

            <div className="group p-6 pt-4 hover:bg-white/[0.02] transition-all duration-300">
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

            <div className="group p-6 pt-4 hover:bg-white/[0.02] transition-all duration-300">
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

            <div className="group p-6 pt-4 hover:bg-white/[0.02] transition-all duration-300">
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

      {/* We Inspire Science CTA Section */}
      <section className="relative h-[65vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/specialist-researcher-doctor-monitoring-brain-acti-2025-02-19-15-16-15-utc.JPG"
            alt="We Inspire Science"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-[900px] mx-auto px-8">
            <h2 className="text-[48px] sm:text-[56px] lg:text-[64px] font-[800] leading-[1.1] tracking-tight text-white mb-8">
              We Inspire Science
            </h2>
            <button className="group px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-100 transition-all rounded-full font-semibold text-[16px] inline-flex items-center justify-center gap-2">
              {t.hero.cta1}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* AI & Neuroscience Section */}
      <section className="relative py-24 border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              <h4 className="text-[14px] font-[600] text-zinc-300 mb-3">{t.aiSection.col1.subtitle}</h4>
              <p className="text-[14px] leading-[1.8] text-zinc-400">
                {t.aiSection.col1.p1}
              </p>
              <p className="text-[14px] leading-[1.8] text-zinc-400">
                {t.aiSection.col1.p2}
              </p>
            </div>

            <div className="space-y-5">
              <h4 className="text-[14px] font-[600] text-zinc-300 mb-3">{t.aiSection.col2.subtitle}</h4>
              <p className="text-[14px] leading-[1.8] text-zinc-400">
                {t.aiSection.col2.p1}
              </p>
              <p className="text-[14px] leading-[1.8] text-zinc-400">
                {t.aiSection.col2.p2}
              </p>
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
            <div className="group p-8 rounded-lg hover:bg-white/[0.04] transition-all duration-300 flex flex-col">
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
            <div className="group p-8 rounded-lg hover:bg-white/[0.04] transition-all duration-300 flex flex-col">
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
            <div className="group p-8 rounded-lg hover:bg-white/[0.04] transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-1">
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
                <div key={num} className="group relative p-8 rounded-lg bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all">
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
                  <Bot className="h-6 w-6 text-[#DB1500]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-[600] mb-2.5 leading-tight">AI-Powered Innovation</h3>
                  <p className="text-[15px] leading-[1.7] text-zinc-400">
                    {t.ourStory.aiHighlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="relative py-32 border-t border-white/[0.08]">
        <div className="max-w-[1100px] mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-[700] leading-[1.15] tracking-tight mb-6">{t.contact.title}</h2>
            <p className="text-[17px] leading-[1.7] text-zinc-400">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-md bg-[#2E455C]/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#2E455C]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold mb-1.5">{t.contact.address}</h3>
                    <p className="text-[15px] text-zinc-400 leading-relaxed">SRNC Group<br />Spaces Platinum Business Park<br />ul. Domaniewska 44<br />02-672 Warszawa, Poland</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-md bg-[#2E455C]/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#2E455C]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold mb-1.5">{t.contact.phone}</h3>
                    <p className="text-[15px] text-zinc-400">+48 789 59 74 59</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-md bg-[#2E455C]/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#2E455C]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold mb-1.5">{t.contact.email}</h3>
                    <p className="text-[15px] text-zinc-400">hello@srnc.pl</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.form.name}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-md text-white text-[15px] placeholder-zinc-500 focus:border-[#DB1500] focus:outline-none focus:ring-2 focus:ring-[#DB1500]/20 transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.form.email}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-md text-white text-[15px] placeholder-zinc-500 focus:border-[#DB1500] focus:outline-none focus:ring-2 focus:ring-[#DB1500]/20 transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder={t.contact.form.company}
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-md text-white text-[15px] placeholder-zinc-500 focus:border-[#DB1500] focus:outline-none focus:ring-2 focus:ring-[#DB1500]/20 transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder={t.contact.form.message}
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-md text-white text-[15px] placeholder-zinc-500 focus:border-[#DB1500] focus:outline-none focus:ring-2 focus:ring-[#DB1500]/20 transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-7 py-3.5 bg-white text-zinc-950 hover:bg-zinc-100 transition-all rounded-full font-semibold text-[15px]"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/SRNC O copy.jpg" alt="SRNC Logo" className="h-7 w-7" style={{ mixBlendMode: 'screen' }} />
              <div className="flex flex-col">
                <span className="text-base font-black tracking-tight leading-none">SRNC</span>
                <span className="text-[8px] text-zinc-400 tracking-wide">Inspire Science</span>
              </div>
            </div>
            <button
              onClick={() => setAutoMode(!autoMode)}
              className="text-zinc-600 hover:text-zinc-400 text-[11px] transition-colors"
            >
              {autoMode ? '○' : '●'}
            </button>
            <p className="text-zinc-500 text-[14px]">
              {t.footer.rights}
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-white/[0.05]">
            <p className="text-zinc-600 text-[11px] leading-relaxed mb-6">
              SRNC GROUP SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, KRS: 0001139372, NIP: 583 352 41 90, REGON: 540229925, zarejestrowana w Sądzie Rejonowym Gdańsk – Północ, VII Wydział Gospodarczy Krajowego Rejestru Sądowego, ul. Piekarnicza 10, 80-126 Gdańsk.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-zinc-500 text-[12px] font-semibold mb-2">Privacy Policy</h4>
                <p className="text-zinc-600 text-[11px] leading-relaxed">
                  We respect your privacy. We collect only the necessary personal data to provide our services and communicate with clients. Data is processed in accordance with GDPR and is not shared with third parties without user consent. You have the right to access, correct, and delete your data at any time.
                </p>
              </div>
              <div>
                <h4 className="text-zinc-500 text-[12px] font-semibold mb-2">Polityka Prywatności</h4>
                <p className="text-zinc-600 text-[11px] leading-relaxed">
                  Szanujemy Twoją prywatność. Zbieramy jedynie niezbędne dane osobowe w celu realizacji usług i kontaktu z klientami. Dane są przetwarzane zgodnie z RODO i nie są udostępniane osobom trzecim bez zgody użytkownika. Masz prawo dostępu, poprawy i usunięcia swoich danych w każdej chwili.
                </p>
              </div>
              <div>
                <h4 className="text-zinc-500 text-[12px] font-semibold mb-2">隐私政策</h4>
                <p className="text-zinc-600 text-[11px] leading-relaxed">
                  我们尊重您的隐私。我们仅收集必要的个人数据以提供服务和与客户沟通。数据按照GDPR进行处理，未经用户同意不会与第三方共享。您有权随时访问、更正和删除您的数据。
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;