"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Zap, Activity, Building2, 
  BarChart3, Layers, FileText, CheckCircle2, AlertCircle,
  Network, Cpu, ClipboardCheck
} from "lucide-react";
import React from "react";

export default function HospitalSolution() {
  return (
    <main className="bg-[#0F172A] min-h-screen pt-40 pb-0 overflow-x-hidden text-white">
      {/* 1. Tech-Forward Dark Hero */}
      <section className="relative px-6 pb-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
          <div className="absolute inset-0 bg-topo opacity-[0.05]" />
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-primary-soft/10 blur-[180px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#5B1C6D]/20 blur-[180px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-12 mb-24">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-soft text-xs font-bold uppercase tracking-widest">
              <Building2 className="w-4 h-4" />
              <span>Hospital Integration Suite</span>
            </div>
            <h1 className="text-[64px] lg:text-[110px] font-bold text-white leading-[0.85] tracking-tighter max-w-5xl">
              Precision <span className="text-primary-soft italic serif font-medium">Infrastructure</span> <br />
              for Acute Care.
            </h1>
            <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-2xl font-medium">
              Bridging the gap between hospital discharge and home-based recovery through seamless data orchestration.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link href="/demo">
                <Button size="lg" className="h-20 px-12 rounded-3xl bg-primary-soft text-[#0F172A] hover:bg-white shadow-2xl shadow-primary-soft/20 transition-all text-xl font-bold group">
                  Deploy Integration <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative group max-w-6xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-soft to-[#5B1C6D] rounded-[64px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative z-10 rounded-[64px] overflow-hidden border border-white/10 bg-slate-900 aspect-[16/9] lg:aspect-[21/9]">
              <img 
                src="/assets/ai-breakthrough.jpg" 
                alt="Hospital Integration Tech"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                    { label: "Uptime", value: "99.99%" },
                    { label: "Data Latency", value: "< 50ms" },
                    { label: "Encryption", value: "AES-256" },
                    { label: "Compliance", value: "HIPAA/GDPR" }
                 ].map((stat, i) => (
                    <div key={i} className="space-y-1">
                       <p className="text-[10px] font-bold text-primary-soft uppercase tracking-widest">{stat.label}</p>
                       <p className="text-3xl font-bold text-white tracking-tighter">{stat.value}</p>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Solution: Interconnected Architecture */}
      <section className="py-40 bg-white text-slate-900 rounded-t-[80px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div className="w-20 h-20 rounded-[32px] bg-[#5B1C6D]/5 text-[#5B1C6D] flex items-center justify-center">
                  <Network className="w-10 h-10" />
               </div>
               <h2 className="text-[56px] lg:text-[80px] font-bold leading-[0.9] tracking-tighter">
                  The <span className="text-[#5B1C6D] italic serif font-medium">Integration</span> <br />
                  Layer.
               </h2>
               <p className="text-xl text-slate-500 leading-relaxed font-medium">
                  CareMandate doesn&apos;t replace your HIS. We augment it. Our layer translates complex discharge protocols into executable field tasks.
               </p>
               <div className="space-y-6">
                  {[
                     { title: "Protocol Orchestration", desc: "Convert hospital clinical standards into home-based checklists." },
                     { title: "Real-time Feedback Loops", desc: "Home caregivers feed clinical data directly back to hospital teams." },
                     { title: "Smart Transition Management", desc: "Automated alerts for recovery deviations post-discharge." }
                  ].map((point, i) => (
                     <div key={i} className="flex gap-6 group">
                        <CheckCircle2 className="w-6 h-6 text-[#5B1C6D] shrink-0 mt-1" />
                        <div>
                           <h4 className="text-xl font-bold text-slate-900">{point.title}</h4>
                           <p className="text-slate-500">{point.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
               {[
                  { icon: Cpu, title: "Automation Engine", color: "bg-blue-500" },
                  { icon: Layers, title: "Protocol Stacks", color: "bg-[#5B1C6D]" },
                  { icon: ClipboardCheck, title: "Audit Verification", color: "bg-emerald-500" }
               ].map((box, i) => (
                  <div key={i} className="p-10 rounded-[48px] bg-[#FBF9FE] border border-slate-100 flex items-center gap-10 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                     <div className={`w-20 h-20 rounded-3xl ${box.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <box.icon className="w-10 h-10" />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{box.title}</h3>
                        <p className="text-slate-500 font-medium tracking-tight">Enterprise-grade reliability for critical care transitions.</p>
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Clinical Impact Section */}
      <section className="py-40 bg-[#FBF9FE]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#0F172A] rounded-[80px] p-16 lg:p-32 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-96 h-96 bg-primary-soft/10 blur-[120px] rounded-full" />
               <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
                  <div className="space-y-10">
                     <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                        Reduce <br />
                        <span className="text-primary-soft italic serif font-medium">Readmissions</span> <br />
                        by 15%.
                     </h2>
                     <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
                        By ensuring discharge protocols are followed with 100% precision in the home, we help hospitals reduce avoidable readmissions and optimize bed utilization.
                     </p>
                     <Button className="h-16 px-10 rounded-2xl bg-white text-[#0F172A] hover:bg-primary-soft transition-all font-bold text-lg">
                        View Clinical Case Studies
                     </Button>
                  </div>
                  <div className="relative">
                     <img src="/assets/clinical-eval.jpg" className="rounded-[56px] w-full h-[500px] object-cover shadow-2xl border border-white/10" alt="Clinical Evaluation" />
                     <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#5B1C6D] rounded-full flex flex-col items-center justify-center text-center p-6 border-8 border-[#0F172A] animate-float">
                        <p className="text-white font-bold text-3xl">100%</p>
                        <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest leading-tight">Compliance Readiness</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-5xl lg:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tighter">
            Ready for a <br />
            <span className="text-[#5B1C6D] italic serif font-medium">Smarter Transition?</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium">Request a technical integration walkthrough with our clinical engineering team.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
            <Link href="/demo">
              <Button size="lg" className="h-20 px-12 text-2xl rounded-[32px] bg-[#5B1C6D] text-white hover:bg-slate-900 transition-all shadow-2xl shadow-[#5B1C6D]/20 font-bold">
                Technical Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
