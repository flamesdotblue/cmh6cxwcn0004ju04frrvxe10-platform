import Spline from '@splinetool/react-spline';
import { Rocket, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-20 text-center sm:px-8 lg:px-10">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          Trusted by active traders worldwide
        </span>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          Trade Smarter with a Professional Forex Journal
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
          Track every position, analyze performance, and stay ahead with real-time economic calendar integration—all in one modern workspace.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
          >
            <Rocket className="h-5 w-5" />
            Start Free
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-slate-900 transition hover:bg-slate-50"
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
            <div key={stat.label} className="rounded-xl border border-slate-200 bg-white/80 p-4 text-left shadow-sm backdrop-blur">
              <div className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</div>
              <div className="mt-1 text-xl font-semibold text-slate-900">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
