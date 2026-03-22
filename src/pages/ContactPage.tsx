import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Translation } from '../translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ContactPageProps {
  t: Translation;
  currentLang: string;
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

export function ContactPage({ t, currentLang }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const emailBody = `
<h2>Nowa wiadomosc z formularza kontaktowego SRNC</h2>
<p><strong>Imie i nazwisko:</strong> ${formData.name}</p>
<p><strong>Email:</strong> ${formData.email}</p>
<p><strong>Firma:</strong> ${formData.company || "Nie podano"}</p>
<h3>Wiadomosc:</h3>
<p>${formData.message.replace(/\n/g, "<br>")}</p>
      `;

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "j@srnc.pl",
          subject: `Nowa wiadomosc z SRNC.pl od: ${formData.name}`,
          message: emailBody,
          fromName: "SRNC Website",
          replyTo: formData.email,
          html: true,
          language: currentLang,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const successMessages: Record<string, string> = {
    en: 'Message sent successfully!',
    pl: 'Wiadomosc wyslana pomyslnie!',
    zh: '消息发送成功！',
    ja: 'メッセージが正常に送信されました！'
  };

  const errorMessages: Record<string, string> = {
    en: 'Failed to send message. Please try again.',
    pl: 'Nie udalo sie wyslac wiadomosci. Sprobuj ponownie.',
    zh: '发送消息失败，请重试。',
    ja: 'メッセージの送信に失敗しました。もう一度お試しください。'
  };

  const sendingText: Record<string, string> = {
    en: 'Sending...',
    pl: 'Wysylanie...',
    zh: '发送中...',
    ja: '送信中...'
  };

  return (
    <div className="pt-20">
      <section className="relative py-24 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(219,21,0,0.15),transparent)]" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative">
          <AnimatedSection className="max-w-[900px] mx-auto text-center">
            <span className="inline-block text-[13px] text-[#DB1500] font-semibold tracking-wider uppercase mb-4">Contact</span>
            <h1 className="text-[48px] sm:text-[64px] lg:text-[72px] font-[800] leading-[1.05] tracking-tight mb-6">
              {t.contact.title}
            </h1>
            <p className="text-[18px] sm:text-[20px] leading-[1.6] text-zinc-400">
              {t.contact.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24 bg-zinc-900/30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1100px] mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
            <AnimatedSection>
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="h-12 w-12 rounded-xl bg-[#2E455C]/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#2E455C]" />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold mb-2">{t.contact.address}</h3>
                      <p className="text-[15px] text-zinc-400 leading-relaxed">
                        SRNC Group<br />
                        Spaces Platinum Business Park<br />
                        ul. Domaniewska 44<br />
                        02-672 Warszawa, Poland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="h-12 w-12 rounded-xl bg-[#DB1500]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#DB1500]" />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold mb-2">{t.contact.phone}</h3>
                      <a href="tel:+48789597459" className="text-[15px] text-zinc-400 hover:text-white transition-colors">
                        +48 789 59 74 59
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="h-12 w-12 rounded-xl bg-[#059669]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#059669]" />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold mb-2">{t.contact.email}</h3>
                      <a href="mailto:hello@srnc.pl" className="text-[15px] text-zinc-400 hover:text-white transition-colors">
                        hello@srnc.pl
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder={t.contact.form.name}
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[15px] placeholder-zinc-500 focus:border-[#DB1500] focus:outline-none focus:ring-2 focus:ring-[#DB1500]/20 transition-all"
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
                      className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[15px] placeholder-zinc-500 focus:border-[#DB1500] focus:outline-none focus:ring-2 focus:ring-[#DB1500]/20 transition-all"
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
                      className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[15px] placeholder-zinc-500 focus:border-[#DB1500] focus:outline-none focus:ring-2 focus:ring-[#DB1500]/20 transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder={t.contact.form.message}
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[15px] placeholder-zinc-500 focus:border-[#DB1500] focus:outline-none focus:ring-2 focus:ring-[#DB1500]/20 transition-all resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-100 transition-all rounded-full font-semibold text-[15px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? sendingText[currentLang] || sendingText.en : t.contact.form.submit}
                  </button>
                  {submitStatus === 'success' && (
                    <div className="text-green-500 text-[14px] text-center py-3 rounded-xl bg-green-500/10">
                      {successMessages[currentLang] || successMessages.en}
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-red-500 text-[14px] text-center py-3 rounded-xl bg-red-500/10">
                      {errorMessages[currentLang] || errorMessages.en}
                    </div>
                  )}
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-zinc-950">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1100px] mx-auto px-8 lg:px-12">
          <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.6175!2d21.0088!3d52.1831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDExJzAyLjQiTiAyMcKwMDAnMzEuNiJF!5e0!3m2!1spl!2spl!4v1620000000000!5m2!1spl!2spl"
              width="100%"
              height="400"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SRNC Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
