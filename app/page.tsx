import Hero from "@/components/landing/Hero";
import Trust from "@/components/landing/Trust";
import Philosophy from "@/components/landing/Philosophy";
import Features from "@/components/landing/Features";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartPulse } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Trust />
      <Philosophy />
      <Features />
      <Solution />
      <HowItWorks />
      
      {/* Final Conversion Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-primary-soft font-bold label-small mb-8 uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
            Join the future of care
          </div>
          <h2 className="text-white text-[48px] lg:text-[64px] font-bold mb-10 leading-tight">
            Ready to <span className="text-primary-soft italic serif font-medium">transform</span> your <br /> care delivery?
          </h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the precision of a clinical operating system. Book your personalised demo and join 200+ care providers who trust CareMandate.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="h-16 px-12 text-xl rounded-2xl bg-white text-[#0F172A] hover:bg-slate-50 shadow-2xl shadow-white/10 transition-all hover:scale-105 active:scale-95">
              Book a Demo
              <ArrowRight className="ml-2 w-6 h-6 text-[#0F172A]" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 text-xl rounded-2xl border-2 border-white/30 hover:bg-white/10 text-white transition-all active:scale-95">
              Contact Sales
              <HeartPulse className="ml-2 w-6 h-6 text-white" />
            </Button>
          </div>
          
          <p className="mt-16 text-slate-500 font-bold text-sm uppercase tracking-widest">
            Enterprise Grade • HIPAA Compliant • 24/7 Support
          </p>
        </div>
      </section>
    </div>
  );
}
