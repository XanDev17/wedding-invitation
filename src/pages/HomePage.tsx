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
      <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 z-[100] bg-sage text-white px-4 py-2 rounded-md">
        Skip to content
      </a>
      <ThemeToggle className="fixed top-20 right-6 z-50 bg-white/40 backdrop-blur-md rounded-full border border-white/20 sm:top-6" />
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/30 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-center gap-4 sm:gap-10 text-[11px] font-semibold tracking-widest uppercase text-sage">
          <a href="#hero" className="relative group transition-colors hover:text-foreground">
            Our Story
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-sage transition-all group-hover:w-full"></span>
          </a>
          <a href="#storyboard" className="relative group transition-colors hover:text-foreground">
            The Day
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-sage transition-all group-hover:w-full"></span>
          </a>
          <a href="#venue" className="relative group transition-colors hover:text-foreground">
            The Venue
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-sage transition-all group-hover:w-full"></span>
          </a>
          <a href="#rsvp" className="relative group transition-colors hover:text-foreground">
            RSVP
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-sage transition-all group-hover:w-full"></span>
          </a>
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
      <footer className="py-16 px-4 text-center text-muted-foreground font-handwriting text-xl sm:text-2xl border-t border-sage/10 bg-white/20">
        <p>Prince & Benedicta — Happily Ever After starts here...</p>
        <p className="mt-4 font-sans text-[10px] uppercase tracking-widest opacity-60">Forever Together • 2025</p>
      </footer>
      <Toaster position="top-center" richColors />
    </div>
  );
}