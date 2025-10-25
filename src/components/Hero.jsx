import { Rocket, ShieldCheck } from 'lucide-react';
import { useMemo, useState } from 'react';

function CandlesBackground() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const candles = useMemo(() => {
    const arr = [];
    const width = 1400;
    const height = 700;
    const stepX = 20;
    let idx = 0;
    for (let x = 0; x < width; x += stepX) {
      // deterministic pseudo-random for consistent build
      const r = (n) => {
        const s = Math.sin(n * 12.9898) * 43758.5453;
        return s - Math.floor(s);
      };
      const base = height * (0.35 + r(idx) * 0.3); // middle band
      const range = 40 + r(idx + 1) * 120;
      const high = Math.max(20, base + range * 0.5);
      const low = Math.min(height - 20, base - range * 0.5);
      const openDelta = (r(idx + 2) - 0.5) * range * 0.4;
      const closeDelta = (r(idx + 3) - 0.5) * range * 0.4;
      const open = base + openDelta;
      const close = base + closeDelta;
      const isBull = close > open;
      const bodyTop = Math.min(open, close);
      const bodyHeight = Math.max(4, Math.abs(close - open));
      const wickTop = Math.min(high, low);
      const wickHeight = Math.abs(high - low);
      const color = isBull ? 'rgba(34,197,94,0.7)' : 'rgba(239,68,68,0.7)'; // emerald/red

      arr.push({ x, bodyTop, bodyHeight, wickTop, wickHeight, color });
      idx++;
    }
    return { width: 1400, height: 700, items: arr };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        setOffset({ x: relX * 20, y: relY * 10 });
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(14,165,233,0.18),transparent),radial-gradient(1000px_600px_at_80%_120%,rgba(124,58,237,0.18),transparent)]" />
      <svg
        viewBox={`0 0 ${candles.width} ${candles.height}`}
        className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%]"
        style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Subtle grid */}
        <g opacity="0.08" stroke="white">
          {Array.from({ length: 28 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2={candles.height} strokeWidth="1" />
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 50} x2={candles.width} y2={i * 50} strokeWidth="1" />
          ))}
        </g>

        {/* Candlesticks */}
        <g filter="url(#glow)">
          {candles.items.map((c, i) => (
            <g key={i} opacity={0.4}>
              <rect x={c.x + 8} y={c.wickTop} width={2} height={c.wickHeight} fill={c.color} />
              <rect x={c.x + 4} y={c.bodyTop} width={10} height={c.bodyHeight} rx={2} fill={c.color} />
            </g>
          ))}
        </g>
      </svg>

      {/* Dark gradient backdrop to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900/90" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950">
      <CandlesBackground />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-20 text-center sm:px-8 lg:px-10">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 shadow-sm backdrop-blur">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          Trusted by active traders worldwide
        </span>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Trade Smarter with a Professional Forex Journal
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
          Track every position, analyze performance, and stay ahead with real-time economic calendar integration—all in one modern workspace.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
          >
            <Rocket className="h-5 w-5" />
            Start Free
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10"
          >
            View Demo
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Trades Logged', value: '2.1M+' },
            { label: 'Avg. Win Rate Lift', value: '+11%' },
            { label: 'Countries', value: '80+' },
            { label: 'Uptime', value: '99.9%' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-left shadow-sm backdrop-blur">
              <div className="text-xs uppercase tracking-wide text-slate-300">{stat.label}</div>
              <div className="mt-1 text-xl font-semibold text-white">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
