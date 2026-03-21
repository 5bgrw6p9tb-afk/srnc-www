import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Translation } from '../translations';

interface ContactFormProps {
  t: Translation;
  currentLang: string;
}

export function ContactForm({ t, currentLang }: ContactFormProps) {
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
<h2>Nowa wiadomość z formularza kontaktowego SRNC</h2>
<p><strong>Imię i nazwisko:</strong> ${formData.name}</p>
<p><strong>Email:</strong> ${formData.email}</p>
<p><strong>Firma:</strong> ${formData.company || "Nie podano"}</p>
<h3>Wiadomość:</h3>
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
          subject: `Nowa wiadomość z SRNC.pl od: ${formData.name}`,
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

  return (
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
              disabled={isSubmitting}
              className="w-full px-7 py-3.5 bg-white text-zinc-950 hover:bg-zinc-100 transition-all rounded-full font-semibold text-[15px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : t.contact.form.submit}
            </button>
            {submitStatus === 'success' && (
              <div className="text-green-500 text-[14px] text-center">
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-red-500 text-[14px] text-center">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
