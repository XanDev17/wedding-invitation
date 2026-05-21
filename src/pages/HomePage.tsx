import React from 'react';
import { HeroCard } from '@/components/HeroCard';
import { VenueDetails } from '@/components/VenueDetails';
import { CeremonyStoryboard } from '@/components/CeremonyStoryboard';
import { RSVPForm } from '@/components/RSVPForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <div className="relative min-h-screen">
      <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-sage text-white px-4 py-2 rounded-md">
        Skip to content
      </a>
      <ThemeToggle className="fixed top-20 right-6 z-50 bg-white/60 backdrop-blur-md rounded-full border border-white/10 sm:top-6" />
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/40 backdrop-blur-lg border-b border-sage/5">
        <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-center gap-6 sm:gap-12 text-[11px] font-medium tracking-[0.2em] uppercase text-sage font-serif">
          <a href="#hero" className="hover:text-foreground transition-colors">Home</a>
          <a href="#storyboard" className="hover:text-foreground transition-colors">Program</a>
          <a href="#venue" className="hover:text-foreground transition-colors">Venue</a>
          <a href="#rsvp" className="hover:text-foreground transition-colors">RSVP</a>
        </nav>
      </header>
      <main className="relative z-10">
        <section id="hero" className="scroll-mt-16">
          <HeroCard />
        </section>
        <div className="space-y-24 md:space-y-32 pb-24">
          <section id="storyboard" className="scroll-mt-16 section-container">
            <CeremonyStoryboard />
          </section>
          <section id="venue" className="scroll-mt-16 section-container">
            <VenueDetails />
          </section>
          <section id="rsvp" className="scroll-mt-16 max-w-3xl mx-auto px-4">
            <RSVPForm />
          </section>
        </div>
      </main>
      <footer className="py-20 text-center text-muted-foreground bg-sage/5 border-t border-sage/5">
        <div className="font-handwriting text-3xl text-sage/80 mb-2">Prince & Benedicta</div>
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-40">September 24th, 2025 • London</p>
      </footer>
      <Toaster position="top-center" richColors />
    </div>
  );
}