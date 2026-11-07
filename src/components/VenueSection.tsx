import React from 'react';
import { MapPin, Navigation, Compass, Car, HeartHandshake } from 'lucide-react';
import { Language } from '../types/wedding';
import { invitationData } from '../data/invitationData';

interface VenueSectionProps {
  lang: Language;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ lang }) => {
  const isTe = lang === 'te';
  const data = isTe ? invitationData.telugu : invitationData.english;
  const googleMapsUrl = invitationData.googleMapsUrl;

  return (
    <section id="venue" className="py-14 md:py-22 bg-[#F6F2EA]/40 relative border-t border-[#EAE3D6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9E7B3B] font-semibold">
            {isTe ? 'పవిత్ర స్థలము' : 'Location'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-telugu-serif font-bold text-[#450D15] mt-1.5 mb-2.5">
            {data.venue.label} & {isTe ? 'మార్గదర్శకము' : 'Travel Guide'}
          </h2>
          <p className="text-xs sm:text-sm text-[#70645E]">
            {isTe
              ? 'ఐనంపూడి గ్రామంలోని శ్రీ రుక్మిణీ సత్యభామా సమేత శ్రీ వేణుగోపాల స్వామి సన్నిధిలో వివాహ వేడుకలు.'
              : 'The sacred matrimony takes place at the divine precinct of Sri Venugopala Swamy Sannidhi & Residence.'}
          </p>
        </div>

        {/* Hero Visual of Traditional Mandap Stage - Modern Clean Frame */}
        <div className="mb-10 sm:mb-12 rounded-3xl overflow-hidden border border-[#EAE3D6] shadow-2xs relative max-h-[380px] sm:max-h-[440px]">
          <img
            src={invitationData.images.mandap}
            alt={isTe ? 'కళ్యాణ మండపం వేదిక - శ్రీ వేణుగోపాల స్వామి సన్నిధి' : 'Wedding Mandap Venue Stage'}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          {/* Floating Venue Tag */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-7 sm:left-7 sm:right-7 text-white max-w-2xl">
            <span className="text-[10px] uppercase tracking-widest text-[#EAE0D0] font-semibold bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full inline-block mb-1.5">
              {data.venue.label}
            </span>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-telugu-serif font-bold text-white mt-0.5 mb-1.5">
              {data.venue.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#F0EBE1] line-clamp-2">
              {data.venue.fullAddress}
            </p>
          </div>
        </div>

        {/* 2-Column Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Column 1: Detailed Address & Hosts */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#EAE3D6] shadow-2xs">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#FAF8F5] border border-[#DDD3C3] flex items-center justify-center text-[#450D15] shrink-0">
                  <MapPin className="w-5 h-5 text-[#450D15]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#9E7B3B] font-semibold">
                    {isTe ? 'చిరునామా' : 'Full Address'}
                  </span>
                  <h4 className="text-base sm:text-lg font-telugu-serif font-bold text-[#450D15] mt-0.5">
                    {data.venue.location}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-[#1C1715] mt-1">
                    {data.venue.title}
                  </p>
                  <p className="text-xs sm:text-sm text-[#70645E] mt-1 leading-relaxed">
                    {data.venue.village}, {data.venue.mandal}, {data.venue.district}, {data.venue.state}.
                  </p>
                </div>
              </div>

              {/* Direct Maps CTA */}
              <div className="pt-4 border-t border-[#F2ECE1] flex flex-wrap items-center gap-2.5">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#450D15] hover:bg-[#5C121D] text-white font-medium text-xs sm:text-sm shadow-2xs transition-all flex items-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#EAE0D0]" />
                  <span>{isTe ? 'గూగుల్ మ్యాప్స్‌లో దారి చూడండి' : 'Open in Google Maps'}</span>
                </a>
              </div>
            </div>

            {/* Inviters Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#EAE3D6] shadow-2xs">
              <div className="flex items-center gap-2.5 mb-2.5">
                <HeartHandshake className="w-4 h-4 text-[#9E7B3B]" />
                <span className="text-[10px] uppercase tracking-widest text-[#9E7B3B] font-bold">
                  {data.inviters.label}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-telugu-serif font-bold text-[#450D15] mb-0.5">
                {data.inviters.hosts}
              </h4>
              <p className="text-xs sm:text-sm text-[#70645E]">
                {data.inviters.associates}
              </p>

              <div className="mt-4 pt-3 border-t border-[#F2ECE1] text-[11px] text-[#7A6C65] flex items-center justify-between">
                <span>{isTe ? 'సకుటుంబ సపరివార సమేతంగా విచ్చేయగలరు' : 'Welcoming you and your family'}</span>
                <span className="text-[#9E7B3B] font-semibold">
                  {isTe ? 'శ్రీరస్తు — శుభమస్తు' : 'Shubhamastu'}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Route Guide */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#EAE3D6] shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-4 h-4 text-[#9E7B3B]" />
                <h4 className="text-xs sm:text-sm font-bold text-[#450D15] uppercase tracking-wider">
                  {isTe ? 'రవాణా & ప్రయాణ మార్గాలు' : 'How to Reach Venue'}
                </h4>
              </div>

              <ul className="space-y-3.5 text-xs text-[#5C504A]">
                <li className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1]">
                  <span className="font-bold text-[#450D15] block mb-1">
                    {isTe ? '1. విజయవాడ నుండి (From Vijayawada)' : 'From Vijayawada (Approx. 42 km)'}:
                  </span>
                  <span className="text-[#70645E] leading-relaxed block">
                    {isTe
                      ? 'బందర్ రోడ్డు (NH 65) మీదుగా వుయ్యూరు చేరి, అక్కడినుండి పమిడిముక్కల మార్గం ద్వారా ఐనంపూడి చేరుకోవచ్చును (సుమారు 1 గంట ప్రయాణం).'
                      : 'Take NH 65 via Bandar Road to Vuyyuru, then proceed along the Pamidimukkala route to reach Ainampudi.'}
                  </span>
                </li>

                <li className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1]">
                  <span className="font-bold text-[#450D15] block mb-1">
                    {isTe ? '2. మచిలీపట్నం నుండి (From Machilipatnam)' : 'From Machilipatnam (Approx. 38 km)'}:
                  </span>
                  <span className="text-[#70645E] leading-relaxed block">
                    {isTe
                      ? 'పామర్రు లేదా కూచిపూడి రహదారి మీదుగా పమిడిముక్కల చేరుకొని ఐనంపూడికి రావచ్చును.'
                      : 'Via Pamarru or Kuchipudi road connecting to Pamidimukkala and Ainampudi.'}
                  </span>
                </li>

                <li className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1] flex items-start gap-2">
                  <Car className="w-3.5 h-3.5 text-[#9E7B3B] shrink-0 mt-0.5" />
                  <span className="text-[#70645E]">
                    {isTe
                      ? 'వివాహ శాల వద్ద విశాలమైన వాహన పార్కింగ్ మరియు ఆత్మీయ స్వాగత ఏర్పాట్లు కలవు.'
                      : 'Spacious vehicle parking arranged at the venue.'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
