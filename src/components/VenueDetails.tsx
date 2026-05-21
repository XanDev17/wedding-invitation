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
              We've chosen the iconic Conservatory of Flowers for its timeless beauty and lush, romantic atmosphere. 
              Built in 1879, this Victorian greenhouse is a jewel of Golden Gate Park and the perfect backdrop 
              for our new beginning.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold">Location</h4>
                <p className="text-muted-foreground">Conservatory of Flowers</p>
                <p className="text-muted-foreground text-sm">100 John F Kennedy Dr, San Francisco, CA 94118</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage shrink-0">
                <Shirt className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold">Dress Code</h4>
                <p className="text-muted-foreground">Formal Attire</p>
                <p className="text-muted-foreground text-sm italic">Think garden elegance and comfortable shoes for the grass.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold">Getting There</h4>
                <p className="text-muted-foreground">Parking is available along JFK Drive.</p>
                <p className="text-muted-foreground text-sm italic">We recommend ride-sharing for a stress-free evening.</p>
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
               {/* Victorian Greenhouse Sketch */}
               <path d="M40 160 H160 V100 Q100 20 40 100 V160" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
               <path d="M100 20 V160" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4"/>
               <path d="M60 160 V75 Q100 40 140 75 V160" stroke="currentColor" strokeWidth="1"/>
               <circle cx="100" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05"/>
               <rect x="85" y="120" width="30" height="40" stroke="currentColor" strokeWidth="1"/>
               {/* Decorative Leaves */}
               <path d="M20 170 Q30 150 50 165" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
               <path d="M150 170 Q170 150 180 165" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            <div className="absolute bottom-12 text-center">
              <span className="font-serif text-sm italic">Est. 1879</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-sage/5 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}