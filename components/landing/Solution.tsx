import { Button } from "@/components/ui/button";
import { HeartPulse, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Solution() {
  const points = [
    { title: "Clinical Accountability", desc: "Every visit is verified with GPS and clinical task logs.", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Caregiver Safety", desc: "Real-time tracking and safety protocols for field staff.", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Patient Outcomes", desc: "Data-driven care plans that adapt to patient needs.", icon: HeartPulse, color: "text-primary-ui", bg: "bg-primary-soft" },
  ];

  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[64px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-[12px] border-white aspect-[5/6] group">
              <Image 
                src="/assets/about.png" 
                alt="Doctor with patient" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="absolute top-12 -left-8 p-6 rounded-[32px] bg-white/95 backdrop-blur-xl shadow-2xl border border-white z-20 flex items-center gap-4 animate-float">
               <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
               </div>
               <div>
                  <p className="text-[13px] font-bold text-slate-900">Clinical Verification</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">100% Audit Ready</p>
               </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col pt-10">
            <div className="space-y-8 mb-16">
              <h2 className="text-[56px] lg:text-[72px] font-bold text-slate-900 leading-[0.95] tracking-tight">
                Precision <span className="text-primary-ui italic serif font-medium">Care</span> <br />
                Management.
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                The infrastructure for exceptional care. We bridge the gap between clinical intent and operational excellence.
              </p>
            </div>

            <div className="grid gap-10">
              {points.map((point, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className={`w-14 h-14 rounded-2xl ${point.bg} ${point.color} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                    <point.icon className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary-ui transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-slate-500 mt-1 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <Button size="lg" className="h-16 px-10 text-lg rounded-[24px] bg-[#5B1C6D] text-white hover:bg-[#4A1658] shadow-2xl shadow-[#5B1C6D]/20 transition-all hover:scale-105 active:scale-95 group">
                Explore All Solutions
                <ArrowRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
