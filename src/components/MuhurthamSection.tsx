import React from 'react';
import { Clock, Utensils, Sun, CheckCircle } from 'lucide-react';
import { Language } from '../types/wedding';
import { invitationData } from '../data/invitationData';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendarUtils';

interface MuhurthamSectionProps {
  lang: Language;
}

export const MuhurthamSection: React.FC<MuhurthamSectionProps> = ({ lang }) => {
  const isTe = lang === 'te';
  const data = isTe ? invitationData.telugu : invitationData.english;

  return (
    <section id="muhurtham" className="py-14 md:py-22 bg-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9E7B3B] font-semibold">
            {isTe ? 'శుభ ముహూర్తం & విందు' : 'Auspicious Timings'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-telugu-serif font-bold text-[#450D15] mt-1.5 mb-2.5">
            {data.sumuhurtham.label} & {isTe ? 'వివాహ విందు' : 'Feast Details'}
          </h2>
          <p className="text-xs sm:text-sm text-[#70645E]">
            {isTe
              ? 'కార్తీక మాస పవిత్ర ద్వాదశి వేళ నిర్ణయించబడిన దివ్య సుముహూర్తము.'
              : 'Sacred timings sanctioned according to traditional Vedic astrological principles.'}
          </p>
        </div>

        {/* Vedic Panchangam Card - Modern Editorial Style */}
        <div className="mb-10 sm:mb-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#EAE3D6] shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <Sun className="w-4 h-4 text-[#9E7B3B]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#9E7B3B]">
              {isTe ? 'వేద పంచాంగ నిర్ణయం' : 'Vedic Panchangam Sanction'}
            </span>
          </div>

          <p className="text-sm sm:text-base md:text-lg font-telugu-serif font-semibold text-[#450D15] leading-relaxed mb-6">
            "{data.panchangam}"
          </p>

          {/* Structured Vedic Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-5 border-t border-[#F2ECE1]">
            <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1]">
              <span className="text-[10px] text-[#7A6C65] block font-medium">
                {isTe ? 'సంవత్సరం' : 'Samvatsara'}
              </span>
              <span className="text-xs font-semibold text-[#1C1715]">
                {isTe ? 'శ్రీ పరాభవ' : 'Sri Parabhava'}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1]">
              <span className="text-[10px] text-[#7A6C65] block font-medium">
                {isTe ? 'మాసం & పక్షం' : 'Masa & Paksha'}
              </span>
              <span className="text-xs font-semibold text-[#1C1715]">
                {isTe ? 'కార్తీక శుద్ధ' : 'Karthika Shukla'}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1]">
              <span className="text-[10px] text-[#7A6C65] block font-medium">
                {isTe ? 'తిథి' : 'Tithi'}
              </span>
              <span className="text-xs font-semibold text-[#1C1715]">
                {isTe ? 'ద్వాదశి' : 'Dwadashi'}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1]">
              <span className="text-[10px] text-[#7A6C65] block font-medium">
                {isTe ? 'వారం' : 'Day'}
              </span>
              <span className="text-xs font-semibold text-[#1C1715]">
                {isTe ? 'స్థిరవారము' : 'Saturday'}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1]">
              <span className="text-[10px] text-[#7A6C65] block font-medium">
                {isTe ? 'నక్షత్రం' : 'Nakshatra'}
              </span>
              <span className="text-xs font-semibold text-[#1C1715]">
                {isTe ? 'రేవతి నక్షత్రం' : 'Revathi'}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1]">
              <span className="text-[10px] text-[#7A6C65] block font-medium">
                {isTe ? 'లగ్నం' : 'Lagnam'}
              </span>
              <span className="text-xs font-semibold text-[#1C1715]">
                {isTe ? 'మిథున లగ్నం' : 'Mithuna'}
              </span>
            </div>
          </div>
        </div>

        {/* 2 Focus Blocks: Sumuhurtham & Dinner Feast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Sumuhurtham Box */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#450D15] text-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase tracking-widest text-[#EAE0D0] font-bold">
                  {data.sumuhurtham.label}
                </span>
                <Clock className="w-4 h-4 text-[#EAE0D0]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-telugu-serif font-bold text-white mb-1.5">
                {data.sumuhurtham.time}
              </h3>

              <p className="text-xs font-medium text-[#EAE0D0] mb-3">
                {data.sumuhurtham.date}
              </p>

              <p className="text-xs sm:text-sm text-[#F0DCDD] leading-relaxed mb-6">
                {isTe
                  ? 'జీలకర్ర-బెల్లం మరియు మాంగళ్యధారణ ప్రధాన వేడుక. రేవతి నక్షత్రయుక్త మిథున లగ్న పుష్కరాంశం నందు దైవసాక్షిగా పరిణయం.'
                  : 'Sacred tying of Mangalasutra and placing of Jeelakarra-Bellam in the divine Mithuna Lagna Pushkaramsha.'}
              </p>
            </div>

            <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs">
              <span className="text-[#EAE0D0] text-[11px]">
                {isTe ? 'వేదిక: వివాహ శాల, ఐనంపూడి' : 'Venue: Vivaha Shala, Ainampudi'}
              </span>
              <a
                href={getGoogleCalendarUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-[#450D15] hover:bg-[#FAF8F5] transition-colors"
              >
                {isTe ? 'క్యాలెండర్' : 'Save Date'}
              </a>
            </div>
          </div>

          {/* Dinner Box */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#EAE3D6] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase tracking-widest text-[#9E7B3B] font-bold">
                  {data.dinner.label}
                </span>
                <Utensils className="w-4 h-4 text-[#9E7B3B]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-telugu-serif font-bold text-[#450D15] mb-1.5">
                {data.dinner.time}
              </h3>

              <p className="text-xs font-medium text-[#9E7B3B] mb-3">
                {data.dinner.date}
              </p>

              <p className="text-xs sm:text-sm text-[#5C504A] leading-relaxed mb-6">
                {isTe
                  ? 'విచ్చేసిన ఆత్మీయులు, బంధుమిత్రులందరికీ సాంప్రదాయ ఆంధ్రా రుచులతో కూడిన షడ్రుచుల వివాహ శుభ విందు మరియు తాంబూలాదులు ఏర్పాటు చేయబడినవి.'
                  : 'A celebratory feast featuring traditional Andhra festive delicacies and tambulam for all honored guests.'}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between text-xs">
              <span className="text-[#9E7B3B] text-[11px] font-medium">
                {isTe ? 'అందరికీ సాదర ఆహ్వానం' : 'Cordially Invited'}
              </span>
              <span className="font-semibold text-[#450D15] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#EFEAE1]">
                {isTe ? 'రాత్రి 7:00 నుండి' : '7:00 PM Onwards'}
              </span>
            </div>
          </div>
        </div>

        {/* Schedule of Events Grid */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#EAE3D6] shadow-2xs">
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#9E7B3B] font-semibold block">
                {isTe ? 'కార్యక్రమ క్రమము' : 'Schedule'}
              </span>
              <h3 className="text-lg sm:text-xl font-telugu-serif font-bold text-[#450D15] mt-0.5">
                {isTe ? 'వివాహ వేడుకల కాలపట్టిక' : 'Wedding Celebration Itinerary'}
              </h3>
            </div>
            <button
              onClick={() => downloadIcsFile(lang)}
              className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-[#DDD3C3] text-[#450D15] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            >
              {isTe ? '.ICS డౌన్‌లోడ్' : '.ics File'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {invitationData.events.map((evt) => (
              <div
                key={evt.id}
                className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1] hover:border-[#DDD3C3] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono tabular-nums text-xs font-bold text-[#9E7B3B]">
                      {isTe ? evt.time : evt.timeEn}
                    </span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#9E7B3B]" />
                  </div>
                  <h4 className="font-telugu-serif font-semibold text-xs sm:text-sm text-[#450D15] mb-1">
                    {isTe ? evt.name : evt.nameEn}
                  </h4>
                  <p className="text-[11px] text-[#70645E] leading-relaxed">
                    {isTe ? evt.description : evt.descriptionEn}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#EAE3D6] text-[10px] text-[#9E7B3B]">
                  <span>21-11-2026</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
