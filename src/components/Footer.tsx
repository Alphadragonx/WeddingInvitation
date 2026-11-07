import React, { useState } from 'react';
import { Heart, Plus, Sparkles } from 'lucide-react';
import { Language } from '../types/wedding';
import { invitationData } from '../data/invitationData';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isTe = lang === 'te';
  const data = isTe ? invitationData.telugu : invitationData.english;

  const [customCompliments, setCustomCompliments] = useState<string[]>([
    isTe ? 'శ్రీమతి & శ్రీ అడపా మనోహర రావు' : 'Smt. & Sri Adapa Manohara Rao',
    isTe ? 'కీ.శే. బింకం మురళీకృష్ణ స్మృత్యర్థం' : 'In loving memory of Late Sri Binkam Murali Krishna',
    isTe ? 'కొల్లి వంశీయులు & బంధువర్గం' : 'Kolli family & relatives',
    isTe ? 'బింకం కుటుంబ సభ్యులు & ఆత్మీయులు' : 'Binkam family & well-wishers',
  ]);

  const [newName, setNewName] = useState('');
  const [showAddInput, setShowAddInput] = useState(false);

  const handleAddName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    setCustomCompliments([...customCompliments, newName.trim()]);
    setNewName('');
    setShowAddInput(false);
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE3D6] pt-12 pb-16 text-[#5C504A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Best Compliments Section - Modern Clean Card */}
        <div className="max-w-xl mx-auto mb-9 p-6 sm:p-7 rounded-3xl bg-white border border-[#EAE3D6] shadow-2xs">
          <div className="flex items-center justify-center gap-1.5 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#9E7B3B]" />
            <h4 className="text-[10px] uppercase tracking-widest text-[#9E7B3B] font-bold">
              {data.compliments.label} (Best Compliments)
            </h4>
          </div>

          <p className="text-xs sm:text-sm font-telugu-serif font-semibold text-[#450D15] mb-3.5">
            {data.compliments.text}
          </p>

          {/* List of custom family names */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-[#5C504A] mb-3">
            {customCompliments.map((name, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] text-[11px] text-[#450D15] font-medium"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Add custom name control */}
          {!showAddInput ? (
            <button
              onClick={() => setShowAddInput(true)}
              className="text-[11px] font-medium text-[#9E7B3B] hover:text-[#450D15] transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3 h-3" />
              <span>{isTe ? 'మరికొన్ని పేర్లు చేర్చండి' : 'Add another name'}</span>
            </button>
          ) : (
            <form onSubmit={handleAddName} className="flex items-center justify-center gap-2 max-w-xs mx-auto mt-2">
              <input
                type="text"
                autoFocus
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder={isTe ? 'పేరు నమోదు చేయండి' : 'Enter name'}
                className="px-3 py-1 text-xs rounded-lg bg-white border border-[#DDD3C3] focus:outline-none flex-1 text-[#1C1715]"
              />
              <button
                type="submit"
                className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#450D15] text-white hover:bg-[#5C121D] cursor-pointer"
              >
                {isTe ? 'చేర్చు' : 'Add'}
              </button>
              <button
                type="button"
                onClick={() => setShowAddInput(false)}
                className="px-2 py-1 text-xs text-[#7A6C65] cursor-pointer"
              >
                {isTe ? 'రద్దు' : 'Cancel'}
              </button>
            </form>
          )}
        </div>

        {/* Traditional Farewell Blessing */}
        <div className="space-y-1.5 mb-7">
          <p className="font-telugu-serif text-base sm:text-lg font-bold text-[#450D15]">
            {isTe
              ? 'సర్వే జనాః సుఖినో భవంతు · మంగళం మహత్'
              : 'Sarve Jana Sukhino Bhavantu · Mangalam Mahat'}
          </p>
          <p className="text-[11px] text-[#7A6C65]">
            {isTe
              ? 'శ్రీ రుక్మిణీ సత్యభామా సమేత శ్రీ వేణుగోపాల స్వామి వారి దివ్యాశీస్సులు సదా వర్ధిల్లును గాక.'
              : 'May the divine blessings of Sri Venugopala Swamy be with everyone forever.'}
          </p>
        </div>

        <div className="pt-4 border-t border-[#EAE3D6] text-[11px] text-[#7A6C65] flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-1.5">
            <span>చి.ల.సౌ. శ్రావణి</span>
            <Heart className="w-3 h-3 text-[#9E7B3B]" />
            <span>చి. ఫణీంద్ర కుమార్</span>
          </div>

          <div>
            <span>21-11-2026 · ఐనంపూడి, పమిడిముక్కల మండలం, కృష్ణా జిల్లా</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
