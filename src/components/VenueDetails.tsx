import React from 'react';
import { motion } from 'framer-motion';
export function VenueDetails() {
  return (
    <div className="paper-texture classic-card-border shadow-xl p-12 md:p-20 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto space-y-12"
      >
        <div className="space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl tracking-widest uppercase text-foreground">The Venue</h2>
          <div className="flex justify-center items-center gap-4">
            <div className="h-px w-8 bg-sage/30" />
            <div className="text-sage">❦</div>
            <div className="h-px w-8 bg-sage/30" />
          </div>
          <p className="font-serif italic text-lg leading-relaxed text-muted-foreground">
            A celebration of love within the historic architecture of
          </p>
          <h3 className="font-serif text-2xl font-bold text-sage tracking-wide uppercase">
            George Tomlinson Primary School
          </h3>
          <p className="font-serif text-muted-foreground tracking-wider uppercase text-sm">
            Vernon Road, Leytonstone, London E11 4QT
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 text-sm">
          <div className="space-y-3">
            <h4 className="font-serif font-bold uppercase tracking-widest text-sage border-b border-sage/10 pb-2">Dress Code</h4>
            <p className="text-muted-foreground font-serif">Formal Attire</p>
            <p className="text-muted-foreground font-serif italic text-xs">Garden elegance requested</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif font-bold uppercase tracking-widest text-sage border-b border-sage/10 pb-2">Travel</h4>
            <p className="text-muted-foreground font-serif">Leytonstone Underground Station</p>
            <p className="text-muted-foreground font-serif italic text-xs">Central Line, five minute walk</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 relative aspect-[16/9] bg-[#f9f7f2] border border-sage/20 rounded-sm overflow-hidden p-8 grayscale contrast-75 brightness-110 opacity-60"
        >
          {/* Sketchy parchment-style map placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-48 h-48 text-sage/40" viewBox="0 0 200 200" fill="none">
               <path d="M20 180 L180 180 M100 20 L100 180 M20 100 L180 100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
               <rect x="80" y="80" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="white" />
               <path d="M100 100 L110 90" stroke="currentColor" strokeWidth="1" />
               <text x="100" y="140" className="text-[10px] italic font-serif" fill="currentColor" textAnchor="middle">Vernon Road</text>
            </svg>
          </div>
          <div className="absolute top-4 right-4 text-[10px] font-serif uppercase tracking-[0.2em] text-sage/50">Site Map No. 12</div>
        </motion.div>
      </motion.div>
    </div>
  );
}