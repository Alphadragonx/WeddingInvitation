/**
 * Web Audio API synthesizer for auspicious South Indian wedding Mangala Vadyam
 * Produces traditional Tanpura drone, sweet bamboo flute/shehnai melodies, and temple bell chimes.
 */

class MangalaVadyamEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private timerId: number | null = null;
  private tanpuraOscs: OscillatorNode[] = [];

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    if (this.isPlaying) return;

    this.isPlaying = true;
    this.startTanpuraDrone();
    this.startMelodyLoop();
  }

  public stop() {
    if (!this.isPlaying) return;
    this.isPlaying = false;

    if (this.timerId) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }

    this.tanpuraOscs.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // already stopped
      }
    });
    this.tanpuraOscs = [];
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public setVolume(val: number) {
    if (this.masterGain && this.ctx) {
      const clamped = Math.max(0, Math.min(1, val));
      this.masterGain.gain.linearRampToValueAtTime(clamped * 0.4, this.ctx.currentTime + 0.1);
    }
  }

  private startTanpuraDrone() {
    if (!this.ctx || !this.masterGain) return;

    // Pitch: C# (138.59 Hz) - Standard Carnatic 1st kattai
    const baseFreq = 138.59;
    const notes = [
      baseFreq * 1.5, // Pa (G#3 ~ 207.65)
      baseFreq * 2,   // Sa (C#4 ~ 277.18)
      baseFreq * 2,   // Sa (C#4 ~ 277.18)
      baseFreq,       // Mandra Sa (C#3 ~ 138.59)
    ];

    notes.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq + (Math.random() * 0.6 - 0.3), this.ctx.currentTime);

      // Slow cyclical volume swell for tanpura pluck feel
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      this.tanpuraOscs.push(osc);
    });
  }

  private playFluteNote(freq: number, duration: number, delay: number) {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const startTime = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    // Warm bamboo flute / shehnai harmonic
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);
    // Subtle portamento / gamaka
    osc.frequency.exponentialRampToValueAtTime(freq * 1.006, startTime + duration * 0.4);
    osc.frequency.exponentialRampToValueAtTime(freq, startTime + duration);

    subOsc.type = 'triangle';
    subOsc.frequency.setValueAtTime(freq * 2, startTime);

    // Envelope
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.exponentialRampToValueAtTime(0.12, startTime + 0.15);
    noteGain.gain.exponentialRampToValueAtTime(0.09, startTime + duration * 0.7);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(noteGain);
    subOsc.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(startTime);
    subOsc.start(startTime);
    osc.stop(startTime + duration + 0.1);
    subOsc.stop(startTime + duration + 0.1);
  }

  private playTempleBell(delay: number) {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const startTime = this.ctx.currentTime + delay;
    const bellOsc = this.ctx.createOscillator();
    const bellGain = this.ctx.createGain();

    bellOsc.type = 'sine';
    bellOsc.frequency.setValueAtTime(1108.73, startTime); // C#6 bright bell

    bellGain.gain.setValueAtTime(0.0001, startTime);
    bellGain.gain.linearRampToValueAtTime(0.08, startTime + 0.02);
    bellGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.5);

    bellOsc.connect(bellGain);
    bellGain.connect(this.masterGain);

    bellOsc.start(startTime);
    bellOsc.stop(startTime + 2.6);
  }

  private startMelodyLoop() {
    // Kalyani / Mohanam ragam auspicious notes:
    // C#4, D#4, F4, G#4, A#4, C#5
    const base = 277.18; // C#4
    const scale = {
      Sa: base,
      Ri: base * (9 / 8),
      Ga: base * (5 / 4),
      Pa: base * (3 / 2),
      Dha: base * (5 / 3),
      TaraSa: base * 2,
      TaraRi: base * (9 / 4),
      TaraGa: base * (5 / 2),
    };

    const phrases = [
      // Phrase 1: Divine invocation
      [
        { note: scale.Sa, d: 1.2 },
        { note: scale.Ri, d: 0.8 },
        { note: scale.Ga, d: 1.6 },
        { note: scale.Pa, d: 2.0 },
      ],
      // Phrase 2: Joyous Kalyanotsavam motif
      [
        { note: scale.Pa, d: 1.0 },
        { note: scale.Dha, d: 1.0 },
        { note: scale.TaraSa, d: 2.0 },
        { note: scale.TaraRi, d: 1.2 },
        { note: scale.TaraSa, d: 2.2 },
      ],
      // Phrase 3: Graceful descent
      [
        { note: scale.TaraSa, d: 1.0 },
        { note: scale.Dha, d: 0.9 },
        { note: scale.Pa, d: 1.2 },
        { note: scale.Ga, d: 1.4 },
        { note: scale.Ri, d: 1.2 },
        { note: scale.Sa, d: 2.5 },
      ],
    ];

    let currentPhraseIdx = 0;

    const playSequence = () => {
      if (!this.isPlaying) return;

      const phrase = phrases[currentPhraseIdx % phrases.length];
      currentPhraseIdx++;

      let curDelay = 0.5;
      // Play soft temple bell at the start of phrases
      if (currentPhraseIdx % 2 === 1) {
        this.playTempleBell(0.2);
      }

      phrase.forEach((item) => {
        this.playFluteNote(item.note, item.d, curDelay);
        curDelay += item.d + 0.35;
      });
    };

    // Initial play
    playSequence();
    // Schedule repeating cycles
    this.timerId = window.setInterval(() => {
      playSequence();
    }, 9500);
  }
}

export const mangalaAudio = new MangalaVadyamEngine();
