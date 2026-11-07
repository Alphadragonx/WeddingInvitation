import React, { useMemo } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: 'rice' | 'petal-pink' | 'petal-yellow' | 'jasmine';
  opacity: number;
}

export const FloatingAuspiciousParticles: React.FC = () => {
  // Generate a set of gentle floating auspicious particles
  const particles = useMemo<Particle[]>(() => {
    const list: Particle[] = [];
    const types: ('rice' | 'petal-pink' | 'petal-yellow' | 'jasmine')[] = [
      'rice',
      'petal-pink',
      'petal-yellow',
      'jasmine',
      'rice',
    ];

    for (let i = 0; i < 28; i++) {
      list.push({
        id: i,
        left: Math.random() * 100, // percentage across width
        delay: Math.random() * 8, // staggered starts
        duration: 9 + Math.random() * 10, // smooth gentle fall
        size: 6 + Math.random() * 8,
        type: types[i % types.length],
        opacity: 0.35 + Math.random() * 0.45,
      });
    }
    return list;
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-20"
      aria-hidden="true"
    >
      {particles.map((p) => {
        let bgStyle = '';
        let shapeClass = '';

        if (p.type === 'rice') {
          // Turmeric yellow elongated grain
          bgStyle = 'bg-gradient-to-br from-[#FBBF24] via-[#F59E0B] to-[#D97706]';
          shapeClass = 'rounded-full w-1.5 h-3 shadow-xs';
        } else if (p.type === 'petal-pink') {
          // Soft pink rose petal
          bgStyle = 'bg-gradient-to-br from-[#FDA4AF] to-[#E11D48]';
          shapeClass = 'rounded-tl-full rounded-br-full w-2.5 h-3.5';
        } else if (p.type === 'petal-yellow') {
          // Marigold petal
          bgStyle = 'bg-gradient-to-br from-[#FDE68A] to-[#F59E0B]';
          shapeClass = 'rounded-tl-full rounded-tr-full w-2 h-3';
        } else {
          // White fragrant jasmine bud
          bgStyle = 'bg-gradient-to-br from-[#FFFFFF] to-[#FEF3C7] border border-[#FDE68A]/60';
          shapeClass = 'rounded-full w-2 h-2.5';
        }

        return (
          <span
            key={p.id}
            className={`absolute ${shapeClass} ${bgStyle}`}
            style={{
              left: `${p.left}%`,
              top: '-30px',
              opacity: p.opacity,
              animation: `gentleFall ${p.duration}s linear ${p.delay}s infinite`,
              transform: `scale(${p.size / 8})`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes gentleFall {
          0% {
            transform: translate3d(0, -20px, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.7;
          }
          100% {
            transform: translate3d(35px, 105vh, 0) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
