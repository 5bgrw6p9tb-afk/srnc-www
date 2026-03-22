import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { translations, Translation } from './translations';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ContactPage } from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [currentLang, setCurrentLang] = useState<string>('en');
  const t: Translation = translations[currentLang];
  const [autoMode, setAutoMode] = useState<boolean>(true);

  const changeLanguage = (lang: string) => {
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-[#DB1500]/20 overflow-x-hidden">
      <Navigation currentLang={currentLang} t={t} changeLanguage={changeLanguage} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage t={t} currentLang={currentLang} autoMode={autoMode} setAutoMode={setAutoMode} />} />
        <Route path="/solutions" element={<SolutionsPage t={t} currentLang={currentLang} />} />
        <Route path="/contact" element={<ContactPage t={t} currentLang={currentLang} />} />
      </Routes>
      <Footer t={t} autoMode={autoMode} setAutoMode={setAutoMode} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
