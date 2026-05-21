import React from 'react';
import { HeroCard } from '@/components/HeroCard';
import { VenueDetails } from '@/components/VenueDetails';
import { RSVPForm } from '@/components/RSVPForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-blush selection:text-sage">
      <ThemeToggle className="fixed top-6 right-6 z-50 bg-white/40 backdrop-blur-md rounded-full border border-white/20" />
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-center gap-8 text-sm font-medium tracking-widest uppercase text-sage">
          <a href="#hero" className="hover:text-foreground transition-colors">Our Story</a>
          <a href="#venue" className="hover:text-foreground transition-colors">Details</a>
          <a href="#rsvp" className="hover:text-foreground transition-colors">RSVP</a>
        </nav>
      </header>
      <main>
        <section id="hero">
          <HeroCard />
        </section>
        <section id="venue" className="bg-sage/5">
          <VenueDetails />
        </section>
        <section id="rsvp">
          <RSVPForm />
        </section>
      </main>
      <footer className="py-12 text-center text-muted-foreground font-handwriting text-2xl">
        <p>Happily Ever After starts here...</p>
      </footer>
      <Toaster position="top-center" richColors />
    </div>
  );
}