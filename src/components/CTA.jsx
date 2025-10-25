import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_-20%,rgba(56,189,248,0.35),transparent),radial-gradient(600px_200px_at_80%_120%,rgba(167,139,250,0.35),transparent)]" />
        <div className="relative z-10 flex flex-col items-start gap-6 text-left md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">Start journaling your edge today</h3>
            <p className="mt-2 max-w-2xl text-slate-300">
              Create unlimited trades, access analytics and performance reports, and sync with an economic calendar.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-slate-900 shadow-lg shadow-black/20 transition hover:bg-slate-100"
          >
            Create Free Account
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
