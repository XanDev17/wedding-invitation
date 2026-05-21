import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Info, Car, Shirt } from 'lucide-react';
export function VenueDetails() {
  return (
    <div className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">The Destination</h2>
            <p className="text-body max-w-md leading-relaxed text-muted-foreground">
              We've chosen George Tomlinson Primary School for its historic architecture and community charm.
              The classic Victorian red-brick building provides a nostalgic yet elegant backdrop
              for our wedding celebration in the heart of East London.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold">Location</h4>
                <p className="text-muted-foreground">George Tomlinson Primary School</p>
                <p className="text-muted-foreground text-sm">Vernon Rd, Leytonstone, London E11 4QT</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage shrink-0">
                <Shirt className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold">Dress Code</h4>
                <p className="text-muted-foreground">Formal Attire</p>
                <p className="text-muted-foreground text-sm italic">Think garden elegance and comfortable shoes for the hall floor.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold">Getting There</h4>
                <p className="text-muted-foreground">Limited street parking available nearby.</p>
                <p className="text-muted-foreground text-sm italic">We recommend taking the Central Line to Leytonstone Station.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-4xl overflow-hidden bg-white border-8 border-white shadow-soft"
        >
          {/* Detailed Venue Illustration */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-sage/40">
            <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
               {/* Victorian School Building Sketch */}
               <path d="M30 160 H170 V90 L100 40 L30 90 V160" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
               <path d="M100 40 V160" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4"/>
               <path d="M50 160 V105 H150 V160" stroke="currentColor" strokeWidth="1"/>
               <rect x="85" y="120" width="30" height="40" stroke="currentColor" strokeWidth="1"/>
               <rect x="55" y="115" width="20" height="20" stroke="currentColor" strokeWidth="0.5"/>
               <rect x="125" y="115" width="20" height="20" stroke="currentColor" strokeWidth="0.5"/>
               {/* Decorative Details */}
               <path d="M20 170 Q30 150 50 165" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
               <path d="M150 170 Q170 150 180 165" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            <div className="absolute bottom-12 text-center">
              <span className="font-serif text-sm italic">Leytonstone, London</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-sage/5 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}