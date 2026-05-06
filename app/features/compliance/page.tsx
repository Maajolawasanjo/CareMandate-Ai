"use client";

import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, Lock, FileText, CheckCircle2, 
  ArrowRight, Landmark, Search, History,
  Database, Scale, Zap, Activity
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CompliancePage() {
  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-48 pb-0 overflow-x-hidden">
      {/* 1. High-Security Hero */}
      <section className="px-6 pb-32 relative">
        <div className="absolute inset-0 bg-topo opacity-[0.03] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-3 text-[#5B1C6D] font-bold text-xs uppercase tracking-[0.4em]">
              <Lock className="w-5 h-5" />
              <span>Immutable Governance</span>
            </div>
            <h1 className="text-[64px] lg:text-[100px] font-bold text-slate-900 leading-[0.85] tracking-tighter">
              Constant Audit <br />
              <span className="text-[#5B1C6D] italic serif font-medium">Readiness.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
              Automate clinical documentation and verification to ensure 100% regulatory compliance across every care touchpoint.
            </p>
            <div className="flex justify-center gap-6 pt-6">
               <Link href="/demo">
                  <Button size="lg" className="h-16 px-10 rounded-2xl bg-[#5B1C6D] text-white hover:bg-slate-900 transition-all font-bold group">
                    View Security Standards <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </Link>
            </div>
          </div>

          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-20 bg-[#5B1C6D]/5 rounded-full blur-[120px]" />
            <div className="relative z-10 rounded-[64px] overflow-hidden border-[12px] border-white shadow-2xl aspect-[21/10]">
              <img src="/assets/compliance.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Compliance Systems" />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Timeline of Truth - Audit Trail */}
      <section className="py-40 px-6 bg-white rounded-t-[80px]">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-tight">
                    The Immutable <br />
                    <span className="text-[#5B1C6D] italic serif font-medium">Audit Trail.</span>
                 </h2>
                 <p className="text-xl text-slate-500 font-medium">From the moment a staff member logs in to the final patient sign-off, every action is cryptographically timestamped.</p>
                 
                 <div className="space-y-10">
                    {[
                       { title: "Point-of-Care Entry", icon: Activity, desc: "Data is captured instantly at the point of care, eliminating retrospective errors." },
                       { title: "Digital Fingerprinting", icon: History, desc: "Every modification is tracked with a full version history and user attribution." },
                       { title: "Instant Report Generation", icon: FileText, desc: "Transform months of activity into a unified, audit-ready report in seconds." }
                    ].map((step, i) => (
                       <div key={i} className="flex gap-8 group">
                          <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#5B1C6D] group-hover:border-[#5B1C6D]/20 transition-all">
                             <step.icon className="w-6 h-6" />
                          </div>
                          <div className="space-y-2">
                             <h4 className="text-2xl font-bold text-slate-900">{step.title}</h4>
                             <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="relative p-12 lg:p-20 rounded-[64px] bg-[#FBF9FE] border border-slate-100 shadow-sm overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B1C6D]/5 blur-3xl" />
                 <div className="space-y-12 relative z-10">
                    <Database className="w-16 h-16 text-[#5B1C6D]" />
                    <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Regulated Storage Architecture</h3>
                    <p className="text-lg text-slate-500 font-medium">Our data infrastructure meets the highest standards for clinical data residency and encryption at rest.</p>
                    
                    <div className="grid grid-cols-2 gap-8 pt-8">
                       <div className="p-6 rounded-3xl bg-white shadow-sm border border-slate-100 space-y-4">
                          <ShieldCheck className="w-8 h-8 text-emerald-500" />
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">Regulatory Standards</p>
                          <p className="text-lg font-bold">CQC / GDPR / HIPAA</p>
                       </div>
                       <div className="p-6 rounded-3xl bg-white shadow-sm border border-slate-100 space-y-4">
                          <Landmark className="w-8 h-8 text-blue-500" />
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">Data Integrity</p>
                          <p className="text-lg font-bold">99.99% Verifiable</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. The Safeguard Section - Dark Mode */}
      <section className="py-40 bg-[#0F172A] relative overflow-hidden rounded-t-[80px]">
         <div className="absolute inset-0 bg-topo opacity-[0.03] pointer-events-none" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative group order-2 lg:order-1">
                  <div className="absolute -inset-10 bg-primary-soft/10 rounded-full blur-[120px]" />
                  <img src="/assets/billing.jpg" className="relative z-10 w-full h-[600px] object-cover rounded-[64px] border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-1000" alt="Compliance ROI" />
               </div>
               <div className="space-y-12 order-1 lg:order-2">
                  <h2 className="text-[56px] lg:text-[80px] font-bold text-white leading-[0.9] tracking-tighter">
                     Revenue & Reputation <br />
                     <span className="text-primary-soft italic serif font-medium">Safeguarded.</span>
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed">
                     Protect your funding and your standing with regulators by embedding compliance into every care interaction. No more reactive &quot;audit prep&quot; weeks.
                  </p>
                  <div className="space-y-8">
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-soft shrink-0">
                           <Scale className="w-6 h-6" />
                        </div>
                        <div className="space-y-2">
                           <h4 className="text-xl font-bold text-white">Risk Mitigation</h4>
                           <p className="text-slate-500">Automatically flag documentation gaps or missing staff certifications before they surface in an audit.</p>
                        </div>
                     </div>
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-soft shrink-0">
                           <Zap className="w-6 h-6" />
                        </div>
                        <div className="space-y-2">
                           <h4 className="text-xl font-bold text-white">Clinical Governance</h4>
                           <p className="text-slate-500">Ensure patient safety by enforcing standardized clinical assessment protocols network-wide.</p>
                        </div>
                     </div>
                  </div>
                  <Link href="/demo">
                     <Button size="lg" className="h-16 px-10 rounded-2xl bg-primary-soft text-[#0F172A] font-bold hover:bg-white transition-all text-lg">
                        Book a Compliance Review
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Final Branding */}
      <section className="py-20 text-center bg-[#0F172A] border-t border-white/5">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em]">CareMandate • Governance Infrastructure • 2024</p>
      </section>
    </main>
  );
}
