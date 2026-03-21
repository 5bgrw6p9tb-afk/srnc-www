import React from 'react';
import { Translation } from '../translations';

interface FooterProps {
  t: Translation;
  autoMode: boolean;
  setAutoMode: (mode: boolean) => void;
}

export function Footer({ t, autoMode, setAutoMode }: FooterProps) {
  return (
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
  );
}
