"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 1, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-white mb-6">Ready to simplify care operations?</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Join the modern care providers who have reclaimed control over their clinical workflows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-10 text-lg shadow-2xl">
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white">
              View All Features
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-white/60 font-medium">
            No credit card required • Personalised walkthrough • 15-minute call
          </p>
        </motion.div>
      </div>
    </section>
  );
}

