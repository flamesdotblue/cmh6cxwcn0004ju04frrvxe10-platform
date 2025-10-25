import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'My win rate jumped 9% after three weeks. The tag-based reports and screenshots made my weak spots obvious.',
    name: 'Amelia R.',
    role: 'Swing Trader, EURUSD/GBPUSD',
  },
  {
    quote:
      'Finally a journal that feels modern. The calendar overlay helps me avoid getting steamrolled by red folder news.',
    name: 'Marcus L.',
    role: 'Day Trader, USDJPY/XAUUSD',
  },
  {
    quote:
      'Exports and risk metrics are spot on. I can share clean reports with my mentor after every week.',
    name: 'Priya S.',
    role: 'Systematic Trader',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Loved by focused traders</h2>
          <p className="mt-3 text-slate-600">Built for clarity, speed, and real results.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
