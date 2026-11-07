import React from 'react';
import { Calendar, Sparkles, FileText, MapPin, Heart } from 'lucide-react';
import { Language } from '../types/wedding';
import { invitationData } from '../data/invitationData';
import { CountdownTimer } from './CountdownTimer';
import { triggerAkshathaluShower } from '../utils/confettiUtils';
import { getGoogleCalendarUrl } from '../utils/calendarUtils';

interface HeroSectionProps {
  lang: Language;
  onOpenCard: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onOpenCard }) => {
  const isTe = lang === 'te';
  const data = isTe ? invitationData.telugu : invitationData.english;

  const handleShower = () => {
    triggerAkshathaluShower();
  };

  return (
    <section id="invitation" className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 overflow-hidden">
      {/* Subtle modern ambient background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[340px] sm:w-[580px] md:w-[720px] h-[340px] sm:h-[580px] md:h-[720px] rounded-full bg-gradient-to-b from-[#F2ECE1] to-transparent blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Invocations & Ganesha Vigneshwara Seal */}
        <div className="space-y-1.5 mb-7 sm:mb-9">
          <div className="inline-flex items-center justify-center gap-3 mb-1">
            <span className="h-[1px] w-10 sm:w-20 bg-[#E0D7C8]" />
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#D9CEBE] p-0.5 bg-white shadow-2xs">
              <img
                src={invitationData.images.ganesha}
                alt="Lord Ganesha"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="h-[1px] w-10 sm:w-20 bg-[#E0D7C8]" />
          </div>

          <p className="font-telugu-serif text-xs sm:text-sm font-semibold tracking-wide text-[#8C6D37]">
            {data.invocations.mangalam}
          </p>
          <p className="font-telugu-serif text-[11px] sm:text-xs text-[#70645E] tracking-wider">
            {data.invocations.deities}
          </p>

          <p className="text-xs sm:text-sm font-telugu-serif font-medium text-[#450D15] pt-0.5">
            {data.invocations.blessingGod}
          </p>
        </div>

        {/* Central Archival Portrait of Sri Rukmini Satyabhama Sametha Sri Venugopala Swamy */}
        <div className="flex flex-col items-center mb-8 sm:mb-10">
          <div className="relative mb-5 group">
            {/* Museum-grade delicate medallion frame */}
            <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden p-1.5 bg-white border border-[#DDD3C3] shadow-md transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF8F5] ring-1 ring-[#EFEAE1]">
                <img
                  src={invitationData.images.venugopala}
                  alt={isTe ? 'శ్రీ రుక్మిణీ సత్యభామా సమేత శ్రీ వేణుగోపాల స్వామి' : 'Sri Venugopala Swamy'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#450D15] text-[#FAF8F5] px-3.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium whitespace-nowrap shadow-xs border border-[#9E7B3B]/50 tracking-wider">
              {isTe ? 'దివ్యాశీస్సులు' : 'Divine Grace'}
            </div>
          </div>

          {/* Heading */}
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9E7B3B] font-semibold mb-1.5">
            {isTe ? 'కళ్యాణ మహోత్సవం' : 'Auspicious Matrimony'}
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-telugu-serif font-bold text-[#450D15] tracking-tight leading-tight max-w-2xl mb-3">
            {data.invocations.heading}
          </h1>

          <div className="w-20 h-[1px] bg-[#DDD3C3] mx-auto mb-7" />

          {/* The Couple Lockup - Modern Aesthetic Editorial Card */}
          <div className="w-full py-6 sm:py-9 px-5 sm:px-8 rounded-3xl bg-white border border-[#EAE3D6] shadow-sm mb-7 sm:mb-9 transition-all hover:border-[#DDD3C3]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              {/* Bride Name & Family */}
              <div className="text-center md:text-right flex-1 w-full">
                <span className="text-[10px] sm:text-[11px] font-medium text-[#9E7B3B] tracking-wider uppercase block mb-1">
                  {data.bride.prefix}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-telugu-serif font-bold text-[#450D15] leading-tight">
                  <span className="text-base sm:text-xl font-normal text-[#9E7B3B] mr-1">
                    {data.bride.title}
                  </span>
                  {data.bride.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#5C504A] mt-1.5 font-medium">
                  {isTe ? 'శ్రీమతి నాగలక్ష్మి & కీ.శే. బింకం మురళీకృష్ణ గార్ల పుత్రిక' : 'D/o Late Sri Binkam Murali Krishna & Smt. Nagalakshmi'}
                </p>
                <p className="text-[11px] text-[#8C6D37] mt-0.5">
                  {isTe ? 'జీడిమెట్ల, సుభాష్ నగర్, తెలంగాణ' : 'Subhash Nagar, Jeedimetla, Telangana'}
                </p>
              </div>

              {/* Minimalist Central Sacred Connector */}
              <div className="shrink-0 flex flex-col items-center justify-center my-0.5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF8F5] border border-[#DDD3C3] text-[#450D15] flex items-center justify-center shadow-2xs">
                  <Heart className="w-4 h-4 text-[#450D15]" />
                </div>
                <span className="text-[10px] font-semibold text-[#9E7B3B] mt-1.5 uppercase tracking-widest">
                  {isTe ? 'పరిణయం' : 'Weds'}
                </span>
              </div>

              {/* Groom Name & Family */}
              <div className="text-center md:text-left flex-1 w-full">
                <span className="text-[10px] sm:text-[11px] font-medium text-[#9E7B3B] tracking-wider uppercase block mb-1">
                  {data.groom.prefix}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-telugu-serif font-bold text-[#450D15] leading-tight">
                  <span className="text-base sm:text-xl font-normal text-[#9E7B3B] mr-1">
                    {data.groom.title}
                  </span>
                  {data.groom.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#5C504A] mt-1.5 font-medium">
                  {isTe ? 'శ్రీమతి లక్ష్మీ నాంచారమ్మ & కొల్లి నరసింహారావు గార్ల కనిష్ఠ కుమారుడు' : 'Youngest Son of Sri Kolli Narasimha Rao & Smt. Lakshmi Nancharamma'}
                </p>
                <p className="text-[11px] text-[#8C6D37] mt-0.5">
                  {isTe ? 'ఐనంపూడి, పమిడిముక్కల మండలం, కృష్ణా జిల్లా' : 'Ainampudi, Pamidimukkala, Krishna Dist.'}
                </p>
              </div>
            </div>

            {/* Clean metadata badge line */}
            <div className="mt-7 pt-5 border-t border-[#F2ECE1] flex flex-wrap items-center justify-center gap-2 text-xs text-[#5C504A]">
              <span className="font-semibold text-[#450D15] bg-[#F7F3EA] px-3 py-1 rounded-full border border-[#EBE3D5]">
                {isTe ? 'ది. 21 నవంబర్ 2026 (శనివారం)' : 'Saturday, 21 November 2026'}
              </span>
              <span className="font-medium text-[#5C504A] bg-[#F7F3EA] px-3 py-1 rounded-full border border-[#EBE3D5]">
                {isTe ? 'రాత్రి గం॥ 8:52 ని॥లకు (మిథున లగ్నం)' : '8:52 PM (Mithuna Lagna)'}
              </span>
              <span className="font-medium text-[#5C504A] bg-[#F7F3EA] px-3 py-1 rounded-full border border-[#EBE3D5]">
                {isTe ? 'ఐనంపూడి గ్రామం, కృష్ణా జిల్లా' : 'Ainampudi, Krishna Dist.'}
              </span>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="w-full mb-7 sm:mb-9">
            <CountdownTimer targetDateISO={invitationData.weddingDateISO} lang={lang} />
          </div>

          {/* Action CTAs - Modern, Aesthetic Satin Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full">
            {/* Blessings Button */}
            <button
              onClick={handleShower}
              className="px-5 py-2.5 rounded-full bg-[#450D15] hover:bg-[#5C121D] text-white text-xs sm:text-sm font-medium shadow-2xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 min-h-[42px]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EAE0D0]" />
              <span>{isTe ? 'అక్షింతలతో ఆశీర్వదించండి' : 'Shower Akshathalu'}</span>
            </button>

            {/* View E-Card Modal Button */}
            <button
              onClick={onOpenCard}
              className="px-4 py-2.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#450D15] border border-[#DDD3C3] text-xs sm:text-sm font-medium shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 min-h-[42px]"
            >
              <FileText className="w-3.5 h-3.5 text-[#9E7B3B]" />
              <span>{isTe ? 'లగ్న పత్రిక దర్శించండి' : 'View Invitation Card'}</span>
            </button>

            {/* Add to Calendar */}
            <a
              href={getGoogleCalendarUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#5C504A] border border-[#DDD3C3] text-xs sm:text-sm font-medium shadow-2xs transition-all flex items-center justify-center gap-1.5 min-h-[42px]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#9E7B3B]" />
              <span>{isTe ? 'క్యాలెండర్‌కు చేర్చండి' : 'Calendar'}</span>
            </a>

            {/* Google Maps Location Button */}
            <a
              href={invitationData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#5C504A] border border-[#DDD3C3] text-xs sm:text-sm font-medium shadow-2xs transition-all flex items-center justify-center gap-1.5 min-h-[42px]"
            >
              <MapPin className="w-3.5 h-3.5 text-[#450D15]" />
              <span>{isTe ? 'గూగుల్ మ్యాప్స్' : 'Maps'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
