import React, { useEffect, useState } from 'react';
import { X, Printer, Share2, Check } from 'lucide-react';
import { Language } from '../types/wedding';
import { invitationData } from '../data/invitationData';

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CardModal: React.FC<CardModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);
  const isTe = lang === 'te';
  const data = isTe ? invitationData.telugu : invitationData.english;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = async () => {
    const textToShare = isTe
      ? `🙏 శ్రీరస్తు — శుభమస్తు — అవిఘ్నమస్తు 🙏
ఓం శ్రీ మాత్రే నమః | ఓం శ్రీ గణపతయే నమః
శ్రీ రుక్మిణీ సత్యభామా సమేత శ్రీ వేణుగోపాల స్వామి ఆశీస్సులతో

వివాహ మహోత్సవ ఆహ్వాన పత్రిక

వధువు: చి.ల.సౌ. శ్రావణి
(కీ.శే. బింకం మురళీకృష్ణ, శ్రీమతి నాగలక్ష్మి గార్ల పుత్రిక - జీడిమెట్ల, తెలంగాణ)

వరుడు: చి. ఫణీంద్ర కుమార్
(మహారాజశ్రీ కొల్లి నరసింహారావు, శ్రీమతి లక్ష్మీ నాంచారమ్మ దంపతుల కనిష్ఠ కుమారుడు - ఐనంపూడి, కృష్ణా జిల్లా)

సుముహూర్తం: ది. 21-11-2026 (శనివారము) రాత్రి గం॥ 8:52 ని॥లకు (రేవతి నక్షత్రయుక్త మిథున లగ్న పుష్కరాంశం)
విందు: రాత్రి 7:00 గంటల నుండి
కళ్యాణ వేదిక: శ్రీ రుక్మిణీ సత్యభామా సమేత శ్రీ వేణుగోపాల స్వామి సన్నిధి, వివాహ శాల, నివాస గృహము, ఇనాంపూడి గ్రామం, పమిడిముక్కల మండలం, కృష్ణా జిల్లా, ఆంధ్రప్రదేశ్.
లొకేషన్: ${invitationData.googleMapsUrl}

ఆహ్వానించువారు:
శ్రీ అడపా మనోహర రావు, శ్రీమతి దుర్గ దంపతులు మరియు బంధుమిత్రులు.`
      : `🙏 Sri Rastu — Shubhamastu — Avighnamastu 🙏
With the divine blessings of Sri Rukmini Satyabhama Sametha Sri Venugopala Swamy

Grand Wedding Invitation

Bride: Chi. La. Sow. Sravani
(D/o Late Sri Binkam Murali Krishna & Smt. Nagalakshmi - Jeedimetla, Telangana)

Groom: Chi. Phaneendra Kumar
(S/o Maharajashri Kolli Narasimha Rao & Smt. Lakshmi Nancharamma - Ainampudi, Krishna Dist.)

Sumuhurtham: Saturday, 21st November 2026 at 8:52 PM (Mithuna Lagna)
Dinner: 7:00 PM Onwards
Venue: Sri Rukmini Satyabhama Sametha Sri Venugopala Swamy Sannidhi, Vivaha Shala, Ainampudi Village, Pamidimukkala Mandal, Krishna District, AP.
Map Location: ${invitationData.googleMapsUrl}

Cordially Invited By:
Sri Adapa Manohara Rao & Smt. Durga couple and Relatives & Friends.`;

    try {
      await navigator.clipboard.writeText(textToShare);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="fixed top-4 right-4 z-[60] p-2 rounded-full bg-white text-[#450D15] shadow-md border border-[#EAE3D6] hover:bg-[#F2ECE1] transition-colors cursor-pointer"
        aria-label={isTe ? 'మూసివేయండి' : 'Close invitation'}
      >
        <X className="w-5 h-5" />
      </button>

      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-xl border border-[#DDD3C3] p-5 sm:p-7 my-6 text-[#1C1715]"
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Action Bar (Top) */}
        <div className="no-print flex items-center justify-between gap-2 mb-5 pb-3 border-b border-[#F2ECE1]">
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#9E7B3B]">
            {isTe ? 'డిజిటల్ వివాహ లగ్న పత్రిక' : 'Digital Wedding Card'}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#450D15] border border-[#DDD3C3] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Share2 className="w-3.5 h-3.5 text-[#9E7B3B]" />}
              <span>{copied ? (isTe ? 'కాపీ అయింది' : 'Copied!') : (isTe ? 'షేర్ టెక్స్ట్' : 'Share Text')}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#450D15] hover:bg-[#5C121D] text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5 text-[#EAE0D0]" />
              <span>{isTe ? 'ప్రింట్' : 'Print'}</span>
            </button>
          </div>
        </div>

        {/* CARD CONTENT */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D6] text-center space-y-3.5">
          <div className="space-y-1">
            <p className="font-telugu-serif font-bold text-xs sm:text-sm text-[#9E7B3B]">
              {data.invocations.mangalam}
            </p>
            <p className="font-telugu-serif text-[11px] text-[#7A6C65]">
              {data.invocations.deities}
            </p>
            <p className="font-telugu-serif font-medium text-xs text-[#450D15] pt-0.5">
              {data.invocations.blessingGod}
            </p>
          </div>

          <div className="py-1">
            <h3 className="text-xl sm:text-2xl font-telugu-serif font-bold text-[#450D15]">
              {data.invocations.heading}
            </h3>
            <div className="w-20 h-[1px] bg-[#DDD3C3] mx-auto mt-1.5" />
          </div>

          {/* Panchangam prose */}
          <p className="text-xs font-telugu-serif text-[#3E322D] leading-relaxed max-w-lg mx-auto italic bg-white p-3.5 rounded-xl border border-[#EFEAE1]">
            {data.panchangam}
          </p>

          {/* Bride */}
          <div className="py-1">
            <p className="text-[11px] text-[#7A6C65]">{data.bride.state}, {data.bride.residence} వాస్తవ్యులు</p>
            <p className="text-xs text-[#1C1715] font-semibold">{data.bride.parents} గార్ల పుత్రిక</p>
            <h4 className="text-lg sm:text-xl font-telugu-serif font-bold text-[#450D15] mt-0.5">
              {data.bride.prefix}: {data.bride.title} {data.bride.name}
            </h4>
          </div>

          <p className="text-[11px] font-semibold text-[#9E7B3B] uppercase tracking-wider">
            {isTe ? '— ని —' : '— with —'}
          </p>

          {/* Groom */}
          <div className="py-1">
            <p className="text-[11px] text-[#7A6C65]">{data.groom.state}, {data.groom.district}, {data.groom.residence} వాస్తవ్యులు</p>
            <p className="text-xs text-[#1C1715] font-semibold">{data.groom.parents} దంపతుల కనిష్ఠ కుమారుడు</p>
            <h4 className="text-lg sm:text-xl font-telugu-serif font-bold text-[#450D15] mt-0.5">
              {data.groom.prefix}: {data.groom.title} {data.groom.name}
            </h4>
          </div>

          <p className="text-xs font-telugu-serif text-[#3E322D] leading-relaxed max-w-lg mx-auto pt-1">
            {data.invitationNote}
          </p>

          {/* Muhurtham & Dinner Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left pt-3 border-t border-[#EAE3D6] text-xs">
            <div className="p-3 rounded-xl bg-white border border-[#EFEAE1]">
              <span className="font-bold text-[#450D15] block mb-0.5">
                {data.sumuhurtham.label}:
              </span>
              <p className="font-semibold text-[#1C1715]">{data.sumuhurtham.date}</p>
              <p className="text-[#450D15] font-bold">{data.sumuhurtham.time}</p>
              <p className="text-[#7A6C65] mt-0.5 text-[11px]">{data.sumuhurtham.details}</p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#EFEAE1]">
              <span className="font-bold text-[#450D15] block mb-0.5">
                {data.dinner.label}:
              </span>
              <p className="font-semibold text-[#1C1715]">{data.dinner.date}</p>
              <p className="text-[#450D15] font-bold">{data.dinner.time}</p>
              <p className="text-[#7A6C65] mt-0.5 text-[11px]">{data.dinner.note}</p>
            </div>
          </div>

          {/* Venue Card */}
          <div className="p-3 rounded-xl bg-white border border-[#EFEAE1] text-left text-xs">
            <span className="font-bold text-[#450D15] block mb-0.5">
              {data.venue.label}:
            </span>
            <p className="font-semibold text-[#1C1715]">{data.venue.title}</p>
            <p className="text-[#70645E] mt-0.5 text-[11px]">{data.venue.fullAddress}</p>
          </div>

          {/* Inviters */}
          <div className="pt-3 border-t border-[#EAE3D6] text-center space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-[#9E7B3B] font-bold block">
              {data.inviters.label}
            </span>
            <p className="text-xs sm:text-sm font-bold text-[#450D15]">
              {data.inviters.hosts}
            </p>
            <p className="text-[11px] text-[#7A6C65]">
              {data.inviters.associates}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
