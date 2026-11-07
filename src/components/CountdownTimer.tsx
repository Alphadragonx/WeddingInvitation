import React, { useState, useEffect } from 'react';
import { Language } from '../types/wedding';

interface CountdownTimerProps {
  targetDateISO: string;
  lang: Language;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDateISO, lang }) => {
  const isTe = lang === 'te';

  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(targetDateISO).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateISO]);

  const units = [
    { value: timeLeft.days, labelTe: 'రోజులు', labelEn: 'Days' },
    { value: timeLeft.hours, labelTe: 'గంటలు', labelEn: 'Hours' },
    { value: timeLeft.minutes, labelTe: 'నిమిషాలు', labelEn: 'Mins' },
    { value: timeLeft.seconds, labelTe: 'సెకన్లు', labelEn: 'Secs' },
  ];

  return (
    <div className="w-full max-w-md mx-auto py-4 px-4 sm:px-6 rounded-2xl bg-white/90 border border-[#EAE3D6] shadow-2xs backdrop-blur-xs">
      <div className="text-center mb-2.5">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9E7B3B] font-semibold">
          {isTe ? 'సుముహూర్తానికి మిగిలిన సమయం' : 'Sumuhurtham Countdown'}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-2.5 text-center">
        {units.map((unit, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-2 sm:py-2.5 px-1 rounded-xl bg-[#FAF8F5] border border-[#EFE8DC] transition-all hover:bg-white"
          >
            <span className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-[#450D15]">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-[#7A6C65] mt-0.5 tracking-wider">
              {isTe ? unit.labelTe : unit.labelEn}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center mt-2.5 text-[11px] text-[#7A6C65]">
        <span>
          {isTe
            ? 'ది. 21 నవంబర్ 2026 శనివారం రాత్రి గం॥ 8:52 ని॥లకు'
            : 'Saturday, 21st November 2026 at 8:52 PM IST'}
        </span>
      </div>
    </div>
  );
};
