import React, { useState } from 'react';
import { Menu, X, Sparkles, FileText } from 'lucide-react';
import { Language } from '../types/wedding';
import { triggerAkshathaluShower } from '../utils/confettiUtils';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenCard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenCard,
}) => {
  const isTe = lang === 'te';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'invitation', labelTe: 'ఆహ్వానం', labelEn: 'Invitation' },
    { id: 'couple', labelTe: 'వధూవరులు', labelEn: 'Couple' },
    { id: 'muhurtham', labelTe: 'సుముహూర్తం & విందు', labelEn: 'Muhurtham & Feast' },
    { id: 'venue', labelTe: 'కళ్యాణ వేదిక', labelEn: 'Venue' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE3D6] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Wordmark (Clean & Modern Architectural) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-left cursor-pointer focus-visible:outline-none rounded p-1 whitespace-nowrap shrink-0 group"
          aria-label="Home"
        >
          <span className="font-telugu-serif text-base sm:text-lg font-bold tracking-tight text-[#450D15] group-hover:text-[#601420] transition-colors">
            {isTe ? 'శ్రీరస్తు · శ్రావణి & ఫణీంద్ర' : 'Sri Rastu · Sravani & Phaneendra'}
          </span>
        </button>

        {/* Clean Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#5C504A]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="hover:text-[#450D15] transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#450D15] hover:after:w-full after:transition-all"
            >
              {isTe ? link.labelTe : link.labelEn}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Subtle Akshathalu Blessings Button */}
          <button
            onClick={triggerAkshathaluShower}
            title={isTe ? 'అక్షింతలు వేయండి' : 'Shower Akshathalu'}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-white text-[#450D15] border border-[#DDD3C3] hover:bg-[#FAF8F5] transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#9E7B3B]" />
            <span>{isTe ? 'అక్షింతలు' : 'Bless'}</span>
          </button>

          {/* Minimalist E-Card Button */}
          <button
            onClick={onOpenCard}
            className="px-3 py-1.5 text-xs font-medium rounded-full text-[#450D15] bg-white border border-[#DDD3C3] hover:bg-[#FAF8F5] shadow-2xs transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-[#9E7B3B]" />
            <span>{isTe ? 'లగ్న పత్రిక' : 'E-Card'}</span>
          </button>

          {/* Bilingual Switcher */}
          <button
            onClick={onToggleLang}
            className="px-3 py-1.5 text-xs font-semibold rounded-full text-white bg-[#450D15] hover:bg-[#5C121D] transition-all cursor-pointer shadow-2xs whitespace-nowrap shrink-0 active:scale-95"
            aria-label="Switch Language"
          >
            <span className={isTe ? 'font-telugu-serif' : 'font-ui-sans'}>
              {isTe ? 'English' : 'తెలుగు'}
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-[#450D15] hover:bg-[#F2ECE1] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#EAE3D6] px-4 py-3 space-y-1.5 shadow-sm animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left py-2 px-3 text-xs uppercase tracking-wider font-semibold rounded-lg text-[#450D15] hover:bg-[#F2ECE1] transition-colors cursor-pointer"
            >
              {isTe ? link.labelTe : link.labelEn}
            </button>
          ))}
          <div className="pt-2 border-t border-[#EAE3D6]">
            <button
              onClick={() => {
                triggerAkshathaluShower();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 text-xs font-medium rounded-lg bg-white text-[#450D15] border border-[#DDD3C3] flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#9E7B3B]" />
              <span>{isTe ? 'అక్షింతల ఆశీర్వాదం' : 'Shower Blessings'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
