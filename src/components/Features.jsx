import { LineChart, Calendar, BarChart3, NotebookPen } from 'lucide-react';

function Sparkline({ color = '#0ea5e9' }) {
  return (
    <svg viewBox="0 0 200 60" className="h-12 w-full">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="url(#grad)"
        stroke="none"
        points="0,50 10,45 20,40 30,42 40,35 50,30 60,25 70,28 80,22 90,18 100,20 110,16 120,18 130,14 140,12 150,10 160,15 170,12 180,16 190,12 200,10 200,60 0,60"
      />
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        points="0,50 10,45 20,40 30,42 40,35 50,30 60,25 70,28 80,22 90,18 100,20 110,16 120,18 130,14 140,12 150,10 160,15 170,12 180,16 190,12 200,10"
      />
    </svg>
  );
}

export default function Features() {
  const featureList = [
    {
      icon: NotebookPen,
      title: 'Trade Tracking',
      desc:
        'Log forex entries, exits, reasons, screenshots, and notes with multi-asset support and automatic price fetching.',
      accent: 'from-sky-500/20 to-sky-500/5',
      color: '#0ea5e9',
    },
    {
      icon: LineChart,
      title: 'Analytics & Insights',
      desc:
        'Visualize performance with equity curves, expectancy, win rate by pair/session, and risk metrics like R-multiple.',
      accent: 'from-emerald-500/20 to-emerald-500/5',
      color: '#10b981',
    },
    {
      icon: BarChart3,
      title: 'Performance Reports',
      desc:
        'Generate period reports, tag-based analysis, and strategy breakdowns. Export to CSV/PDF for reviews.',
      accent: 'from-violet-500/20 to-violet-500/5',
      color: '#8b5cf6',
    },
    {
      icon: Calendar,
      title: 'Economic Calendar',
      desc:
        'Overlay events on your trades. Filter by impact and currency to avoid news whipsaws and plan entries.',
      accent: 'from-amber-500/20 to-amber-500/5',
      color: '#f59e0b',
    },
  ];

  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Everything you need to master your edge</h2>
        <p className="mt-3 text-slate-600">
          A single hub for journaling, analysis, and planning—built for discretionary and systematic traders.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {featureList.map(({ icon: Icon, title, desc, accent, color }) => (
          <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`} />
            <div className="relative z-10 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                <Icon className="h-6 w-6 text-slate-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            </div>
            <div className="relative z-10 mt-6">
              <Sparkline color={color} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-sm font-semibold text-slate-900">Equity Curve</h4>
          <p className="mt-1 text-sm text-slate-600">Track cumulative returns and drawdowns over time.</p>
          <div className="mt-4">
            <Sparkline color="#0ea5e9" />
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-sm font-semibold text-slate-900">Win Rate by Pair</h4>
          <p className="mt-1 text-sm text-slate-600">Identify strengths across EURUSD, GBPUSD, USDJPY, and more.</p>
          <div className="mt-4 grid grid-cols-4 items-end gap-2">
            {[60, 72, 48, 66].map((v, i) => (
              <div key={i} className="flex h-20 w-full items-end">
                <div style={{ height: `${v}%` }} className="w-full rounded-md bg-sky-500/80" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-sm font-semibold text-slate-900">Session Heatmap</h4>
          <p className="mt-1 text-sm text-slate-600">See when you perform best across London, NY, and Asia sessions.</p>
          <div className="mt-4 grid grid-cols-7 gap-1">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="h-6 rounded"
                style={{ backgroundColor: `hsl(200, 90%, ${80 - (i % 7) * 6}%)` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
