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
import { CheckCircle2 } from 'lucide-react';
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
    const toastId = toast.loading("Sending your reply...");
    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Response recorded", { id: toastId });
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8F9E8B', '#E8D8CE', '#FDFBF7']
        });
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      toast.error("Error sending response", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="paper-texture deckle-edge p-12 md:p-16 border border-sage/10 text-center relative overflow-hidden shadow-xl">
      {/* Stamp illustration */}
      <div className="absolute top-8 right-8 w-16 h-20 border-[1.5px] border-dashed border-sage/40 flex flex-col items-center justify-center p-2 opacity-40">
        <div className="w-full h-full border border-sage/20 flex items-center justify-center font-serif text-[10px] uppercase text-sage">
          Place<br/>Stamp
        </div>
      </div>
      <div className="mb-12">
        <h2 className="font-serif text-3xl mb-4 tracking-widest uppercase text-foreground">Reply</h2>
        <p className="font-serif italic text-muted-foreground">The favor of a response is requested by August 1st</p>
      </div>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 text-left">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-serif uppercase tracking-widest text-xs text-sage/80">M.</Label>
                <Input 
                  id="name" 
                  {...register("name")} 
                  placeholder="Enter full name" 
                  className="bg-transparent border-t-0 border-x-0 border-b border-dotted border-sage/50 rounded-none h-10 px-0 focus-visible:ring-0 focus-visible:border-sage placeholder:italic placeholder:text-muted-foreground/30" 
                />
                {errors.name && <p className="text-destructive text-[10px] font-serif italic">{errors.name.message}</p>}
              </div>
              <div className="space-y-6">
                <RadioGroup
                  defaultValue="yes"
                  onValueChange={(v) => setValue("attending", v as "yes" | "no")}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="yes" id="yes" className="border-sage/40" />
                    <Label htmlFor="yes" className="font-serif cursor-pointer uppercase tracking-wider text-sm">Accepts with Pleasure</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="no" id="no" className="border-sage/40" />
                    <Label htmlFor="no" className="font-serif cursor-pointer uppercase tracking-wider text-sm">Declines with Regret</Label>
                  </div>
                </RadioGroup>
              </div>
              {attendingValue === "yes" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 pt-4">
                  <div className="space-y-2">
                    <Label className="font-serif uppercase tracking-widest text-[10px] text-sage/80">Number in Party</Label>
                    <Input {...register("guests")} className="bg-transparent border-t-0 border-x-0 border-b border-dotted border-sage/50 rounded-none px-0 h-8" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-serif uppercase tracking-widest text-[10px] text-sage/80">Special Dietary Requirements</Label>
                    <Input {...register("dietary")} className="bg-transparent border-t-0 border-x-0 border-b border-dotted border-sage/50 rounded-none px-0 h-8" />
                  </div>
                </motion.div>
              )}
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-sage/90 hover:bg-sage text-ivory rounded-none font-serif uppercase tracking-[0.2em] h-12 shadow-sm"
              >
                {isSubmitting ? "Sending..." : "Send Reply"}
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-12 space-y-6">
             <div className="w-16 h-16 border border-sage rounded-full flex items-center justify-center mx-auto text-sage">
               <CheckCircle2 className="w-8 h-8" />
             </div>
             <h3 className="font-serif text-2xl uppercase tracking-widest">Delivered</h3>
             <p className="font-serif italic text-muted-foreground">Your response has been carefully noted. Thank you.</p>
             <button onClick={() => setIsSubmitted(false)} className="text-[10px] uppercase tracking-widest text-sage hover:underline underline-offset-4">Update Reply</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}