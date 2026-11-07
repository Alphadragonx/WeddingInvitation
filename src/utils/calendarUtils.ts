import { Language } from '../types/wedding';

export function getGoogleCalendarUrl(lang: Language): string {
  const isTe = lang === 'te';
  const title = isTe
    ? 'కళ్యాణ మహోత్సవం: శ్రావణి & ఫణీంద్ర కుమార్'
    : 'Wedding Ceremony: Sravani & Phaneendra Kumar';

  const details = isTe
    ? 'శ్రీ రుక్మిణీ సత్యభామా సమేత శ్రీ వేణుగోపాల స్వామి ఆశీస్సులతో చి.ల.సౌ. శ్రావణి & చి. ఫణీంద్ర కుమార్ వివాహ మహోత్సవం. సుముహూర్తం: రాత్రి గం॥ 8:52 ని॥లకు (రేవతి నక్షత్రయుక్త మిథున లగ్నం). విందు: రాత్రి 7:00 గంటల నుండి.'
    : 'Grand Wedding of Chi. La. Sow. Sravani and Chi. Phaneendra Kumar. Sumuhurtham: 8:52 PM (Mithuna Lagnam). Dinner from 7:00 PM onwards.';

  const location =
    'Sri Rukmini Satyabhama Sametha Sri Venugopala Swamy Sannidhi, Vivaha Shala, Ainampudi Village, Pamidimukkala Mandal, Krishna District, Andhra Pradesh 521157';

  // 2026-11-21 19:00 IST = 2026-11-21 13:30 UTC
  // 2026-11-22 00:30 IST = 2026-11-21 19:00 UTC
  const startTime = '20261121T133000Z';
  const endTime = '20261121T190000Z';

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${startTime}/${endTime}`,
    details: details,
    location: location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile(lang: Language) {
  const isTe = lang === 'te';
  const title = isTe
    ? 'కళ్యాణ మహోత్సవం: శ్రావణి & ఫణీంద్ర కుమార్'
    : 'Wedding: Sravani & Phaneendra Kumar';

  const description = isTe
    ? 'శ్రీ రుక్మిణీ సత్యభామా సమేత శ్రీ వేణుగోపాల స్వామి ఆశీస్సులతో చి.ల.సౌ. శ్రావణి & చి. ఫణీంద్ర కుమార్ వివాహ మహోత్సవం. సుముహూర్తం: రాత్రి గం॥ 8:52 ని॥లకు.'
    : 'Wedding Ceremony of Sravani & Phaneendra Kumar. Sumuhurtham: 8:52 PM.';

  const location =
    'Sri Rukmini Satyabhama Sametha Sri Venugopala Swamy Sannidhi, Ainampudi, Krishna District, Andhra Pradesh';

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Sravani and Phaneendra Wedding//Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:wedding-sravani-phaneendra-20261121@invitation',
    'DTSTAMP:20261107T000000Z',
    'DTSTART:20261121T133000Z',
    'DTEND:20261121T190000Z',
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Sravani_Phaneendra_Wedding_Invitation.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
