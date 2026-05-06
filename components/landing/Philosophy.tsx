import { ArrowRight } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="py-40 bg-[#0F172A] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1000' height='1000' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='2'%3E%3Cpath d='M0 100c50-20 100 20 150 0s100-60 200-20 150 80 250 40 150-60 250 0M0 200c50-20 100 20 150 0s100-60 200-20 150 80 250 40 150-60 250 0M0 300c50-20 100 20 150 0s100-60 200-20 150 80 250 40 150-60 250 0M0 400c50-20 100 20 150 0s100-60 200-20 150 80 250 40 150-60 250 0M0 500c50-20 100 20 150 0s100-60 200-20 150 80 250 40 150-60 250 0'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '1000px 1000px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-24 lg:gap-40 items-start">
          
          <div className="space-y-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-primary-soft animate-pulse" />
              <span className="text-[10px] font-bold text-primary-soft uppercase tracking-[0.3em]">The Care OS Philosophy</span>
            </div>
            
            <h2 className="text-[64px] lg:text-[88px] font-bold text-white leading-[0.9] tracking-tight">
              Designed for the <br />
              <span className="text-primary-soft italic serif font-medium">clinical reality</span> <br />
              of care.
            </h2>
            
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
              We provide the digital infrastructure for providers who refuse to compromise on patient safety and operational integrity.
            </p>
          </div>

          {/* Right: The Three Pillars - No Cards, just Pure Type & Accents */}
          <div className="flex flex-col gap-16 pt-16 lg:pt-32">
            {[
              { id: "01", title: "Operational Orchestration", desc: "Beyond mere management. A living system that adapts to every clinical shift." },
              { id: "02", title: "Clinical Verification", desc: "Automated protocols that bridge the gap between intent and execution." },
              { id: "03", title: "Total Situation Awareness", desc: "Every visit, every caregiver, every patient outcome—verified in real-time." }
            ].map((pillar, i) => (
              <div key={pillar.id} className="space-y-4 group">
                <div className="flex items-center gap-6">
                  <span className="text-4xl font-serif italic text-primary-soft/30 group-hover:text-primary-soft transition-colors duration-500">{pillar.id}</span>
                  <h3 className="text-3xl font-bold text-white">{pillar.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed pl-16 max-w-sm">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
