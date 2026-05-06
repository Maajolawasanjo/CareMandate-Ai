"use client";

import { Button } from "@/components/ui/button";
import { 
  MapPin, ShieldCheck, Activity, Smartphone, 
  ArrowRight, Globe, Lock, Clock, 
  Radar, Fingerprint, Eye, Zap
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function VisitTrackingPage() {
  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-48 pb-0 overflow-x-hidden">
      {/* 1. Visibility Hero */}
      <section className="px-6 pb-32 relative">
        <div className="absolute inset-0 bg-topo opacity-[0.05] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 text-[#5B1C6D] font-bold text-xs uppercase tracking-[0.4em]">
              <Radar className="w-5 h-5" />
              <span>Total Field Visibility</span>
            </div>
            <h1 className="text-[64px] lg:text-[100px] font-bold text-slate-900 leading-[0.85] tracking-tighter">
              Field Insight. <br />
              <span className="text-[#5B1C6D] italic serif font-medium">Verified.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-xl font-medium">
              Gain total visibility into care delivery with high-precision GPS verification and real-time clinical task tracking. Eliminate the &quot;Invisible Care Gap.&quot;
            </p>
            <div className="flex gap-6">
              <Link href="/demo">
                <Button size="lg" className="h-16 px-10 rounded-2xl bg-[#5B1C6D] text-white hover:bg-slate-900 transition-all font-bold group">
                  Track Your Field Ops <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-20 bg-[#5B1C6D]/5 rounded-full blur-[120px] animate-pulse" />
             <div className="relative z-10 rounded-[64px] overflow-hidden border-[12px] border-white shadow-2xl aspect-square">
                <img src="/assets/visits.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Visit Tracking" />
                
                {/* Floating GPS UI */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 rounded-full bg-[#5B1C6D]/20 border border-white/30 backdrop-blur-md flex items-center justify-center animate-ping" />
                   <div className="absolute w-6 h-6 bg-[#5B1C6D] rounded-full border-4 border-white shadow-2xl" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. The Verification Engine - Feature Grid */}
      <section className="py-40 px-6 bg-white rounded-t-[80px]">
        <div className="max-w-7xl mx-auto space-y-32">
           <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className="relative group">
                 <div className="absolute -inset-10 bg-[#5B1C6D]/5 rounded-full blur-[100px]" />
                 <img src="/assets/clinical-eval.jpg" className="relative z-10 w-full h-[550px] object-cover rounded-[56px] border border-slate-100 shadow-2xl" alt="Verification" />
              </div>

              <div className="space-y-16">
                 <div className="space-y-6">
                    <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-tight">
                       The Verification <br />
                       <span className="text-[#5B1C6D] italic serif font-medium">Standard.</span>
                    </h2>
                    <p className="text-xl text-slate-500 font-medium">Every visit is verified against three distinct layers of operational data.</p>
                 </div>

                 <div className="grid sm:grid-cols-2 gap-10">
                    {[
                       { title: "GPS Precision", icon: MapPin, desc: "Electronic Visit Verification (EVV) that meets national standards." },
                       { title: "Task Logs", icon: Activity, desc: "Real-time task completion with mandatory clinical sign-offs." },
                       { title: "Lone Worker Safety", icon: Eye, desc: "Automated welfare checks and emergency SOS for field staff." },
                       { title: "Biometric Proof", icon: Fingerprint, desc: "Tamper-proof identity verification for caregivers and patients." }
                    ].map((feat, i) => (
                       <div key={i} className="space-y-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#5B1C6D] group-hover:text-white transition-all">
                             <feat.icon className="w-6 h-6" />
                          </div>
                          <h4 className="text-xl font-bold text-slate-900">{feat.title}</h4>
                          <p className="text-slate-500 text-sm font-medium leading-relaxed">{feat.desc}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. The Trust Builder - Dark Mode */}
      <section className="py-40 bg-[#0F172A] relative overflow-hidden rounded-t-[80px]">
         <div className="absolute inset-0 bg-topo opacity-[0.03] pointer-events-none" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="space-y-12">
                  <h2 className="text-[56px] lg:text-[80px] font-bold text-white leading-[0.9] tracking-tighter">
                     Build Trust through <br />
                     <span className="text-primary-soft italic serif font-medium">Transparency.</span>
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed">
                     Provide families and patients with verifiable proof of care. CareMandate creates a seamless bridge between the patient&apos;s home and the clinical dashboard.
                  </p>
                  <div className="grid gap-6">
                     {[
                        { title: "Real-time Arrival Alerts", icon: Smartphone },
                        { title: "Immutable Audit Logs", icon: Lock },
                        { title: "Automated Welfare Checks", icon: Clock },
                        { title: "Clinical Outcome Sync", icon: Zap }
                     ].map((item, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-6 group hover:bg-white/10 transition-all">
                           <item.icon className="w-8 h-8 text-primary-soft" />
                           <span className="text-xl font-bold text-white">{item.title}</span>
                        </div>
                     ))}
                  </div>
                  <Link href="/demo">
                     <Button size="lg" className="h-16 px-10 rounded-2xl bg-primary-soft text-[#0F172A] font-bold hover:bg-white transition-all text-lg">
                        Enable Field Visibility
                     </Button>
                  </Link>
               </div>

               <div className="relative group">
                  <div className="absolute -inset-10 bg-primary-soft/10 rounded-full blur-[120px]" />
                  <img src="/assets/caregiver-management.jpg" className="relative z-10 w-full h-[600px] object-cover rounded-[64px] border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-1000" alt="Field Visibility" />
               </div>
            </div>
         </div>
      </section>

      {/* 4. Final Branding */}
      <section className="py-20 text-center bg-[#0F172A] border-t border-white/5">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em]">CareMandate • Visibility Infrastructure • 2024</p>
      </section>
    </main>
  );
}
