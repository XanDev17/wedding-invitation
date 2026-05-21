import React from 'react';
import { HeroCard } from '@/components/HeroCard';
import { VenueDetails } from '@/components/VenueDetails';
import { CeremonyStoryboard } from '@/components/CeremonyStoryboard';
import { RSVPForm } from '@/components/RSVPForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-blush selection:text-sage">
      <ThemeToggle className="fixed top-6 right-6 z-50 bg-white/40 backdrop-blur-md rounded-full border border-white/20" />
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-center gap-6 sm:gap-8 text-[10px] sm:text-xs font-medium tracking-widest uppercase text-sage">
          <a href="#hero" className="hover:text-foreground transition-colors">Our Story</a>
          <a href="#storyboard" className="hover:text-foreground transition-colors">The Day</a>
          <a href="#venue" className="hover:text-foreground transition-colors">The Venue</a>
          <a href="#rsvp" className="hover:text-foreground transition-colors">RSVP</a>
        </nav>
      </header>
      <main>
        <section id="hero" className="scroll-mt-16">
          <HeroCard />
        </section>
        <section id="storyboard" className="bg-white/30 scroll-mt-16">
          <CeremonyStoryboard />
        </section>
        <section id="venue" className="bg-sage/5 scroll-mt-16">
          <VenueDetails />
        </section>
        <section id="rsvp" className="scroll-mt-16">
          <RSVPForm />
        </section>
      </main>
      <footer className="py-12 px-4 text-center text-muted-foreground font-handwriting text-xl sm:text-2xl border-t border-sage/10">
        <p>Prince & Benedicta — Happily Ever After starts here...</p>
      </footer>
      <Toaster position="top-center" richColors />
    </div>
  );
}