import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CoupleSection } from './components/CoupleSection';
import { MuhurthamSection } from './components/MuhurthamSection';
import { VenueSection } from './components/VenueSection';
import { CardModal } from './components/CardModal';
import { Footer } from './components/Footer';
import { FloatingAuspiciousParticles } from './components/FloatingAuspiciousParticles';
import { AudioController } from './components/AudioController';
import { Language } from './types/wedding';

export default function App() {
  const [lang, setLang] = useState<Language>('te');
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'te' ? 'en' : 'te'));
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1715] flex flex-col relative selection:bg-[#9E7B3B]/20 selection:text-[#450D15]">
      {/* Auspicious Falling Akshathalu & Flower Petals Animation Layer */}
      <FloatingAuspiciousParticles />

      {/* Top Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenCard={() => setIsCardModalOpen(true)}
      />

      {/* Main Content - Modern, Aesthetic & Clean Design */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <HeroSection
          lang={lang}
          onOpenCard={() => setIsCardModalOpen(true)}
        />

        {/* Couple & Formal Lineage Section */}
        <CoupleSection lang={lang} />

        {/* Sumuhurtham & Dinner Feast Section */}
        <MuhurthamSection lang={lang} />

        {/* Wedding Venue & Route Guide Section */}
        <VenueSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Modern Subtle Audio Controller with Mute / Unmute Button */}
      <AudioController lang={lang} />

      {/* Royal E-Lagna Patrika Modal */}
      <CardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
