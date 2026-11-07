import confetti from 'canvas-confetti';

/**
 * Triggers an authentic Akshathalu (golden turmeric rice grains & flower petals) shower
 */
export function triggerAkshathaluShower() {
  // Akshinthalu colors: Golden Turmeric yellow, Kumkum red, Jasmine ivory, Rose petal pink, Marigold orange
  const colors = ['#F59E0B', '#FBBF24', '#DC2626', '#FEF3C7', '#FB7185', '#D97706'];

  // Left side shower
  confetti({
    particleCount: 45,
    angle: 60,
    spread: 55,
    origin: { x: 0.1, y: 0.7 },
    colors: colors,
    gravity: 0.85,
    scalar: 0.9,
    ticks: 200,
  });

  // Right side shower
  confetti({
    particleCount: 45,
    angle: 120,
    spread: 55,
    origin: { x: 0.9, y: 0.7 },
    colors: colors,
    gravity: 0.85,
    scalar: 0.9,
    ticks: 200,
  });

  // Center gentle cascade of auspicious yellow rice grains
  window.setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 90,
      spread: 70,
      origin: { x: 0.5, y: 0.3 },
      colors: ['#F59E0B', '#FBBF24', '#FDE68A', '#DC2626'],
      gravity: 0.65,
      scalar: 0.8,
      ticks: 240,
    });
  }, 200);
}
