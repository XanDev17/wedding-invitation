import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, CheckCircle2 } from 'lucide-react';
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
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="section-container max-w-2xl">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">RSVP</h2>
        <p className="text-muted-foreground">Please let us know if you can join us by August 1st.</p>
      </div>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <Card className="illustrative-card">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sage font-bold uppercase tracking-widest text-xs">Full Name</Label>
                    <Input id="name" {...register("name")} placeholder="Your name" className="bg-ivory/50 border-sage/20 h-12" />
                    {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <Label className="text-sage font-bold uppercase tracking-widest text-xs">Will you be attending?</Label>
                    <RadioGroup 
                      defaultValue="yes" 
                      onValueChange={(v) => setValue("attending", v as "yes" | "no")}
                      className="flex gap-8"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes">Joyfully Accept</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no">Regretfully Decline</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  {attendingValue === "yes" && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="guests" className="text-sage font-bold uppercase tracking-widest text-xs">Number of Guests</Label>
                        <Input id="guests" {...register("guests")} placeholder="Including yourself" type="number" className="bg-ivory/50 border-sage/20 h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dietary" className="text-sage font-bold uppercase tracking-widest text-xs">Dietary Restrictions</Label>
                        <Input id="dietary" {...register("dietary")} placeholder="None, Vegan, GF, etc." className="bg-ivory/50 border-sage/20 h-12" />
                      </div>
                    </motion.div>
                  )}
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-sage hover:bg-sage/90 text-ivory h-14 rounded-full text-lg font-serif">
                    {isSubmitting ? <Loader2 className="animate-spin" /> : "Send Response"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 px-6 bg-sage/10 rounded-4xl border-2 border-dashed border-sage/30"
          >
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="w-16 h-16 text-sage" />
            </div>
            <h3 className="font-serif text-3xl mb-4">Thank You!</h3>
            <p className="text-muted-foreground leading-relaxed">Your response has been received. {attendingValue === "yes" ? "We can't wait to celebrate with you!" : "We will miss you, but we appreciate you letting us know."}</p>
            <Button variant="ghost" className="mt-8 text-sage" onClick={() => setIsSubmitted(false)}>Update RSVP</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}