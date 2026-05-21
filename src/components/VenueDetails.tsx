import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Shirt, Train } from 'lucide-react';
export function VenueDetails() {
  const details = [
    { icon: <Clock className="w-5 h-5" />, label: "Time", value: "Arrival from 4:00 PM" },
    { icon: <Shirt className="w-5 h-5" />, label: "Dress Code", value: "Formal / Garden Chic" },
    { icon: <Train className="w-5 h-5" />, label: "Travel", value: "Central Line (Leytonstone)" },
    { icon: <MapPin className="w-5 h-5" />, label: "Parking", value: "Local residential streets" },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-12">
        <div className="space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">The Venue</h2>
          <p className="font-serif italic text-lg leading-relaxed text-muted-foreground">
            We are getting married at the beautiful and historic George Tomlinson Primary School in Leytonstone.
          </p>
          <div className="pt-4">
            <h3 className="font-serif text-xl font-bold text-sage uppercase tracking-widest mb-1">
              George Tomlinson School
            </h3>
            <p className="text-muted-foreground font-medium uppercase text-xs tracking-widest">
              Vernon Road, London E11 4QT
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {details.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center text-sage shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-serif text-xs uppercase tracking-widest text-sage/60 mb-1">{item.label}</h4>
                <p className="text-foreground text-sm font-medium">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative aspect-square rounded-3xl overflow-hidden bg-sage/5 border border-sage/10 p-8 flex items-center justify-center group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-sage/10 to-transparent opacity-50" />
        <svg className="w-64 h-64 text-sage/20 relative z-10" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="80" strokeWidth="0.5" strokeDasharray="4 4" />
          <path d="M40 100 H160 M100 40 V160" strokeWidth="0.5" strokeDasharray="2 2" />
          <rect x="85" y="85" width="30" height="30" className="fill-white stroke-sage/40" />
          <circle cx="100" cy="100" r="4" className="fill-sage" />
          <text x="100" y="130" className="text-[10px] font-serif uppercase tracking-widest text-sage/40" textAnchor="middle">Vernon Rd</text>
        </svg>
        <div className="absolute bottom-6 right-6 text-[10px] uppercase tracking-widest text-sage/40 font-medium">Digital Map No. 04</div>
      </motion.div>
    </div>
  );
}