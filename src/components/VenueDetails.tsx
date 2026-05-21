import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
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
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">The Celebration</h2>
            <p className="text-body max-w-md leading-relaxed text-muted-foreground">
              We are so blessed to have you in our lives and can't wait to share our special day with you. 
              Prince and Benedicta invite you to join them as they exchange vows and celebrate the beginning 
              of their new life together in their favorite hidden garden.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold">The Date</h4>
                <p className="text-muted-foreground">Saturday, Sept 24, 2025</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold">The Time</h4>
                <p className="text-muted-foreground">Ceremony: 4:00 PM</p>
                <p className="text-muted-foreground">Reception: 6:30 PM</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold">The Venue</h4>
                <p className="text-muted-foreground">Conservatory of Flowers</p>
                <p className="text-muted-foreground">100 John F Kennedy Dr, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-4xl overflow-hidden bg-blush/20 border-8 border-white shadow-soft"
        >
          {/* Sketchy Venue Graphic Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-2/3 h-2/3 text-sage/30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10 90 L10 40 L50 10 L90 40 L90 90 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
               <path d="M30 90 L30 60 L70 60 L70 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
               <circle cx="50" cy="30" r="5" stroke="currentColor" strokeWidth="2"/>
               <path d="M10 50 Q30 40 50 50 T90 50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2"/>
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-sage/10 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}