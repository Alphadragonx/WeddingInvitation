import React from 'react';
import { Sparkles, MapPin, Users } from 'lucide-react';
import { Language } from '../types/wedding';
import { invitationData } from '../data/invitationData';
import { triggerAkshathaluShower } from '../utils/confettiUtils';

interface CoupleSectionProps {
  lang: Language;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ lang }) => {
  const isTe = lang === 'te';
  const data = isTe ? invitationData.telugu : invitationData.english;

  return (
    <section id="couple" className="py-14 md:py-22 bg-[#F6F2EA]/40 relative border-y border-[#EAE3D6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9E7B3B] font-semibold">
            {isTe ? 'పవిత్ర పరిణయం' : 'Sacred Union'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-telugu-serif font-bold text-[#450D15] mt-1.5 mb-2.5">
            {isTe ? 'వధూవరుల పరిచయం & శుభ నిశ్చయం' : 'The Bride & Groom'}
          </h2>
          <p className="text-xs sm:text-sm text-[#70645E] leading-relaxed">
            {isTe
              ? 'శ్రీ వేణుగోపాల స్వామి వారి దివ్య కృపతో, పెద్దల ఆశీస్సులతో ఒక్కటవుతున్న నూతన జంట.'
              : 'United in holy matrimony with divine blessings of the Almighty and beloved elders.'}
          </p>
        </div>

        {/* Ritual Photographic Feature: Thalambralu in Modern Editorial Composition */}
        <div className="mb-10 sm:mb-12 rounded-3xl overflow-hidden border border-[#EAE3D6] bg-white shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Image */}
            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[360px]">
              <img
                src={invitationData.images.thalambralu}
                alt={isTe ? 'తలంబ్రాల మహోత్సవం - పవిత్ర వేడుక' : 'Thalambralu - Auspicious Wedding Ritual'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-3 left-3 right-3 text-white lg:hidden">
                <span className="text-[10px] uppercase tracking-widest text-[#EAE0D0] font-semibold">
                  {isTe ? 'తలంబ్రాల మహోత్సవం' : 'Sacred Thalambralu'}
                </span>
                <p className="text-xs font-medium">
                  {isTe ? 'పసుపు అక్షింతల పవిత్ర ఆశీర్వాదం' : 'Consecrated Akshathalu showers'}
                </p>
              </div>
            </div>

            {/* Formal Elders Accord & Invitation Quote */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center bg-[#FAF8F5]">
              <span className="text-[10px] uppercase tracking-widest text-[#9E7B3B] font-semibold mb-1.5">
                {isTe ? 'పెద్దల నిశ్చయం' : 'Sacred Consent'}
              </span>

              <h3 className="text-lg sm:text-xl font-telugu-serif font-bold text-[#450D15] mb-3">
                {isTe ? 'వివాహ ఆహ్వాన నిశ్చయ తాంబూలములు' : 'Auspicious Invitation Announcement'}
              </h3>

              <blockquote className="text-xs sm:text-sm text-[#3E322D] font-telugu-serif leading-relaxed mb-5 italic border-l-2 border-[#9E7B3B] pl-3.5">
                "{data.invitationNote}"
              </blockquote>

              <div className="pt-3 border-t border-[#EAE3D6] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#9E7B3B] font-medium block">
                    {data.inviters.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#450D15]">
                    {data.inviters.hosts}
                  </span>
                </div>

                <button
                  onClick={triggerAkshathaluShower}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#450D15] text-white hover:bg-[#5C121D] transition-all cursor-pointer shadow-2xs active:scale-95 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-[#EAE0D0]" />
                  <span>{isTe ? 'ఆశీర్వదించండి' : 'Bless'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Lineage Cards for Bride & Groom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Bride Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#EAE3D6] shadow-2xs transition-all hover:border-[#DDD3C3] hover:shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-widest text-[#9E7B3B] font-bold">
                {data.bride.prefix}
              </span>
              <span className="text-xs text-[#7A6C65] bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#EFEAE1]">
                {isTe ? 'కన్యాదాతల గృహం' : "Bride's Family"}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-telugu-serif font-bold text-[#450D15] mb-0.5">
              <span className="text-sm sm:text-base font-normal text-[#9E7B3B] mr-1">
                {data.bride.title}
              </span>
              {data.bride.name}
            </h3>

            <p className="text-xs text-[#9E7B3B] italic mb-5">
              {data.bride.tagline}
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-[#4F433E] pt-4 border-t border-[#F2ECE1]">
              <div className="flex items-start gap-2.5">
                <Users className="w-4 h-4 text-[#9E7B3B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-[#7A6C65] block">{data.bride.parentsTitle}:</span>
                  <span className="font-semibold text-[#1C1715]">{data.bride.parents}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9E7B3B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-[#7A6C65] block">{isTe ? 'నివాసం' : 'Residence'}:</span>
                  <span className="text-[#1C1715]">
                    {data.bride.residence}, {data.bride.district}, {data.bride.state}.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#F2ECE1] text-[11px] text-[#7A6C65] flex items-center justify-between">
              <span>{isTe ? 'తెలంగాణ వాస్తవ్యులు' : 'Telangana Resident'}</span>
              <span className="text-[#9E7B3B] font-medium">
                {isTe ? 'శుభలక్షణం' : 'Auspicious'}
              </span>
            </div>
          </div>

          {/* Groom Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#EAE3D6] shadow-2xs transition-all hover:border-[#DDD3C3] hover:shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-widest text-[#9E7B3B] font-bold">
                {data.groom.prefix}
              </span>
              <span className="text-xs text-[#7A6C65] bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#EFEAE1]">
                {isTe ? 'వరుని గృహం' : "Groom's Family"}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-telugu-serif font-bold text-[#450D15] mb-0.5">
              <span className="text-sm sm:text-base font-normal text-[#9E7B3B] mr-1">
                {data.groom.title}
              </span>
              {data.groom.name}
            </h3>

            <p className="text-xs text-[#9E7B3B] italic mb-5">
              {data.groom.tagline}
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-[#4F433E] pt-4 border-t border-[#F2ECE1]">
              <div className="flex items-start gap-2.5">
                <Users className="w-4 h-4 text-[#9E7B3B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-[#7A6C65] block">{data.groom.parentsTitle}:</span>
                  <span className="font-semibold text-[#1C1715]">{data.groom.parents}</span>
                  <span className="text-[11px] text-[#450D15] block font-medium mt-0.5">
                    ({data.groom.relation})
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9E7B3B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-[#7A6C65] block">{isTe ? 'నివాసం' : 'Residence'}:</span>
                  <span className="text-[#1C1715]">
                    {data.groom.residence}, {data.groom.district}, {data.groom.state}.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#F2ECE1] text-[11px] text-[#7A6C65] flex items-center justify-between">
              <span>{isTe ? 'కృష్ణా జిల్లా, ఆంధ్రప్రదేశ్' : 'Krishna District, AP'}</span>
              <span className="text-[#9E7B3B] font-medium">
                {isTe ? 'పుష్కరాంశ యోగం' : 'Pushkaramsha Yogam'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
