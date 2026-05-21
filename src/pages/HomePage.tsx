import React from 'react';
import { HeroCard } from '@/components/HeroCard';
import { VenueDetails } from '@/components/VenueDetails';
import { CeremonyStoryboard } from '@/components/CeremonyStoryboard';
import { RSVPForm } from '@/components/RSVPForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 z-[100] bg-sage text-white px-4 py-2 rounded-md">
        Skip to content
      </a>
      <ThemeToggle className="fixed top-20 right-6 z-50 bg-white/40 backdrop-blur-md rounded-full border border-white/20 sm:top-6" />
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/60 backdrop-blur-md border-b border-sage/10">
        <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-center gap-4 sm:gap-12 text-[10px] font-bold tracking-[0.25em] uppercase text-sage font-serif letterpress">
          <a href="#hero" className="hover:text-foreground transition-colors">Front</a>
          <a href="#storyboard" className="hover:text-foreground transition-colors">Program</a>
          <a href="#venue" className="hover:text-foreground transition-colors">Details</a>
          <a href="#rsvp" className="hover:text-foreground transition-colors">RSVP</a>
        </nav>
      </header>
      {/* Fixed wax seal/logo branding */}
      <div className="fixed bottom-8 left-8 z-30 opacity-20 hidden lg:block pointer-events-none">
        <div className="w-16 h-16 border-2 border-sage rounded-full flex items-center justify-center font-serif text-sage italic font-bold">
          P&B
        </div>
      </div>
      <main className="space-y-16 md:space-y-24 py-16">
        <section id="hero" className="scroll-mt-16 flex justify-center">
          <div className="w-full max-w-5xl px-4">
             <HeroCard />
          </div>
        </section>
        <section id="storyboard" className="scroll-mt-16 flex justify-center">
          <div className="w-full max-w-5xl px-4">
            <CeremonyStoryboard />
          </div>
        </section>
        <section id="venue" className="scroll-mt-16 flex justify-center">
          <div className="w-full max-w-5xl px-4">
            <VenueDetails />
          </div>
        </section>
        <section id="rsvp" className="scroll-mt-16 flex justify-center">
          <div className="w-full max-w-2xl px-4">
            <RSVPForm />
          </div>
        </section>
      </main>
      <footer className="py-20 text-center text-muted-foreground font-handwriting text-2xl border-t border-sage/10 bg-ivory/40">
        <div className="max-w-xs mx-auto mb-6 opacity-20">
          <svg viewBox="0 0 100 20" className="w-full text-sage">
            <path d="M0 10 Q25 0 50 10 T100 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <p>Prince & Benedicta</p>
        <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.4em] opacity-40">2025 • London</p>
      </footer>
      <Toaster position="top-center" richColors />
    </div>
  );
}