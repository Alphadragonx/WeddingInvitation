import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Sparkles } from 'lucide-react';
import { Language } from '../types/wedding';
import { triggerAkshathaluShower } from '../utils/confettiUtils';

interface AudioControllerProps {
  lang: Language;
}

const MP3_SRC = `${import.meta.env.BASE_URL}assets/aistudio/seetha_kalyanam.mp3`;
const WAV_SRC =
  `${import.meta.env.BASE_URL}assets/aistudio/Seetha_Kalyanam_Lyrical_Ranarangam_Songs_Sharwanand__Kalyani_Priyadarshan_Sudheer_Varma_-_Aditya_Music__128k__2ee2841b.wav`;

export const AudioController: React.FC<AudioControllerProps> = ({ lang }) => {
  const isTe = lang === 'te';
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.75;
    audio.loop = true;

    // Immediate attempt to play on website load
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setAutoplayBlocked(false);
        })
        .catch(() => {
          // Autoplay blocked by browser policy without prior interaction
          setIsPlaying(false);
          setAutoplayBlocked(true);
        });
    }

    // Retry autoplay when the browser next allows playback from a user gesture.
    const handleFirstGesture = () => {
      if (!audio.paused) {
        cleanup();
        return;
      }

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setAutoplayBlocked(false);
          cleanup();
        })
        .catch(() => {
          setIsPlaying(false);
          setAutoplayBlocked(true);
        });
    };

    const cleanup = () => {
      window.removeEventListener('pointerdown', handleFirstGesture, true);
      window.removeEventListener('touchstart', handleFirstGesture, true);
      window.removeEventListener('click', handleFirstGesture, true);
      window.removeEventListener('keydown', handleFirstGesture, true);
    };

    window.addEventListener('pointerdown', handleFirstGesture, { capture: true, passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { capture: true, passive: true });
    window.addEventListener('click', handleFirstGesture, { capture: true, passive: true });
    window.addEventListener('keydown', handleFirstGesture, { capture: true, passive: true });

    return () => {
      cleanup();
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false;
      setIsMuted(false);
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setAutoplayBlocked(false);
        })
        .catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newMuted = !isMuted;
    audio.muted = newMuted;
    setIsMuted(newMuted);

    if (!newMuted && audio.paused) {
      audio.play().then(() => setIsPlaying(true));
    }
  };

  const handleShower = () => {
    triggerAkshathaluShower();
  };

  return (
    <>
      {/* Audio element loading fast MP3 with fallback to WAV */}
      <audio ref={audioRef} preload="auto" autoPlay playsInline loop>
        <source src={MP3_SRC} type="audio/mpeg" />
        <source src={WAV_SRC} type="audio/wav" />
      </audio>

      {autoplayBlocked && !isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          className="fixed bottom-20 right-3 sm:bottom-24 sm:right-5 z-40 flex items-center gap-2 rounded-full bg-[#450D15] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <Play className="h-4 w-4" />
          {isTe ? 'సంగీతం ప్రారంభించడానికి తాకండి' : 'Tap to start wedding music'}
        </button>
      )}

      {/* Floating Modern Aesthetic Audio & Action Pill (Bottom Right) */}
      <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 flex items-center gap-2">
        {/* Akshathalu Blessings Button */}
        <button
          onClick={handleShower}
          title={isTe ? 'అక్షింతలు వేసి ఆశీర్వదించండి' : 'Shower Akshathalu Blessings'}
          className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white hover:bg-[#FAF8F5] text-[#9E7B3B] border border-[#DDD3C3] shadow-md cursor-pointer transition-transform hover:scale-105 active:scale-95 flex items-center justify-center shrink-0"
          aria-label="Shower Blessings"
        >
          <Sparkles className="w-4 h-4 text-[#9E7B3B] animate-spin-slow" />
        </button>

        {/* Music Control Pill - Modern Frosted Capsule */}
        <div className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white/95 border border-[#E5DDD0] shadow-md backdrop-blur-md text-[#1C1715] transition-all">
          {/* Animated Equalizer Waveform Bars */}
          <div
            onClick={togglePlay}
            className="flex items-end gap-0.5 h-3.5 cursor-pointer py-0.5"
            title={isPlaying ? (isTe ? 'సంగీతం ఆపండి' : 'Pause Music') : (isTe ? 'సంగీతం వినండి' : 'Play Music')}
          >
            <span
              className={`w-0.5 rounded-full bg-[#450D15] transition-all ${
                isPlaying && !isMuted ? 'h-3.5 animate-musicBar1' : 'h-1.5'
              }`}
            />
            <span
              className={`w-0.5 rounded-full bg-[#9E7B3B] transition-all ${
                isPlaying && !isMuted ? 'h-2.5 animate-musicBar2' : 'h-2'
              }`}
            />
            <span
              className={`w-0.5 rounded-full bg-[#450D15] transition-all ${
                isPlaying && !isMuted ? 'h-3.5 animate-musicBar3' : 'h-1'
              }`}
            />
            <span
              className={`w-0.5 rounded-full bg-[#9E7B3B] transition-all ${
                isPlaying && !isMuted ? 'h-2 animate-musicBar2' : 'h-1.5'
              }`}
            />
          </div>

          {/* Song Info */}
          <button
            onClick={togglePlay}
            className="text-left cursor-pointer focus:outline-none flex flex-col justify-center max-w-[100px] sm:max-w-[140px] truncate"
            title="సీత కళ్యాణ వైభోగమే"
          >
            <span className="text-[11px] sm:text-xs font-telugu-serif font-bold text-[#450D15] truncate leading-tight">
              {isTe ? 'సీత కళ్యాణం' : 'Seetha Kalyanam'}
            </span>
            <span className="text-[9px] text-[#9E7B3B] truncate leading-tight font-medium">
              {isPlaying && !isMuted ? (isTe ? 'మంగళ ధ్వని' : 'Now Playing') : (isTe ? 'ప్లే చేయండి' : 'Play')}
            </span>
          </button>

          {/* Play / Pause Button */}
          <button
            onClick={togglePlay}
            className="p-1 rounded-full bg-[#450D15] hover:bg-[#5C121D] text-white transition-transform active:scale-90 cursor-pointer flex items-center justify-center shrink-0"
            title={isPlaying ? (isTe ? 'ఆపు' : 'Pause') : (isTe ? 'ప్లే చేయి' : 'Play')}
            aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
          >
            {isPlaying ? (
              <Pause className="w-3 h-3" />
            ) : (
              <Play className="w-3 h-3 ml-0.5" />
            )}
          </button>

          {/* Dedicated Mute / Unmute Button at the bottom */}
          <button
            onClick={toggleMute}
            className={`p-1 rounded-full transition-colors cursor-pointer flex items-center justify-center shrink-0 border ${
              isMuted
                ? 'bg-rose-50 text-rose-800 border-rose-200'
                : 'bg-[#FAF8F5] text-[#450D15] border-[#E8E0D2] hover:bg-[#F2ECE1]'
            }`}
            title={isMuted ? (isTe ? 'అన్‌మ్యూట్ చేయండి' : 'Unmute Audio') : (isTe ? 'మ్యూట్ చేయండి' : 'Mute Audio')}
            aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? (
              <VolumeX className="w-3 h-3" />
            ) : (
              <Volume2 className="w-3 h-3" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
