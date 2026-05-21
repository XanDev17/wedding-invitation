import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle2, Send } from 'lucide-react';
const rsvpSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  attending: z.enum(["yes", "no"]),
  guests: z.string().optional(),
  dietary: z.string().optional(),
});
type RSVPValues = z.infer<typeof rsvpSchema>;
export function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<RSVPValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { attending: "yes" }
  });
  const attendingValue = watch("attending");
  const onSubmit = async (data: RSVPValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSubmitted(true);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8F9E8B', '#E8D8CE', '#FDFBF7']
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send RSVP. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-sage/5 border border-sage/5">
      <div className="text-center mb-10">
        <h2 className="font-serif text-4xl mb-3 text-foreground">RSVP</h2>
        <p className="font-serif italic text-sage/70">Kindly respond by August 1st, 2025</p>
      </div>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-xs uppercase tracking-widest text-sage font-semibold">Your Name</Label>
                <Input
                  id="name"
                  {...register("name")}
                  className="bg-sage/5 border-none h-12 rounded-xl focus-visible:ring-2 focus-visible:ring-sage/20 px-4"
                  placeholder="Guest Name"
                />
                {errors.name && <p className="text-destructive text-xs font-medium">{errors.name.message}</p>}
              </div>
              <div className="space-y-4">
                <Label className="text-xs uppercase tracking-widest text-sage font-semibold">Will you attend?</Label>
                <RadioGroup
                  defaultValue="yes"
                  onValueChange={(v) => setValue("attending", v as "yes" | "no")}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <div className="flex-1 flex items-center space-x-3 bg-sage/5 p-4 rounded-xl cursor-pointer hover:bg-sage/10 transition-colors">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="font-medium cursor-pointer">Accepts with pleasure</Label>
                  </div>
                  <div className="flex-1 flex items-center space-x-3 bg-sage/5 p-4 rounded-xl cursor-pointer hover:bg-sage/10 transition-colors">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="font-medium cursor-pointer">Declines with regret</Label>
                  </div>
                </RadioGroup>
              </div>
              {attendingValue === "yes" && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-6 overflow-hidden">
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-widest text-sage font-semibold">Total Guests</Label>
                    <Input {...register("guests")} className="bg-sage/5 border-none h-12 rounded-xl" placeholder="Number in party" />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-widest text-sage font-semibold">Dietary Notes</Label>
                    <Input {...register("dietary")} className="bg-sage/5 border-none h-12 rounded-xl" placeholder="Allergies or preferences" />
                  </div>
                </motion.div>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sage hover:bg-sage/90 text-white rounded-xl h-14 font-semibold text-lg shadow-lg shadow-sage/20 transition-all active:scale-95"
              >
                {isSubmitting ? "Sending..." : (
                  <span className="flex items-center gap-2">
                    Send RSVP <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center space-y-6">
            <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto text-sage">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-serif text-3xl mb-2">Thank You!</h3>
              <p className="font-serif italic text-muted-foreground text-lg">We've received your response and can't wait to see you.</p>
            </div>
            <button 
              onClick={() => setIsSubmitted(false)} 
              className="text-xs uppercase tracking-widest text-sage font-bold hover:underline"
            >
              Update my response
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}