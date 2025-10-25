import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} FX Journal Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
