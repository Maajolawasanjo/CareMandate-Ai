"use client";

import { Button } from "@/components/ui/button";
import { 
  Zap, LayoutGrid, Activity, ShieldCheck, 
  ArrowRight, Smartphone, Monitor, Globe,
  Briefcase, Heart, CheckCircle2, Search
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CareOpsFeaturePage() {
  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-48 pb-0 overflow-x-hidden">
      {/* 1. Editorial Hero */}
      <section className="px-6 pb-32 relative">
        <div className="absolute inset-0 bg-topo opacity-[0.05] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 text-[#5B1C6D] font-bold text-xs uppercase tracking-[0.4em]">
              <Zap className="w-5 h-5" />
              <span>Unified Orchestration</span>
            </div>
            <h1 className="text-[64px] lg:text-[110px] font-bold text-slate-900 leading-[0.85] tracking-tighter">
              Care Delivery <br />
              <span className="text-[#5B1C6D] italic serif font-medium">Orchestrated.</span>
            </h1>
            <p className="text-xl lg:text-3xl text-slate-500 leading-relaxed max-w-2xl font-medium">
              A unified clinical operating system designed to eliminate manual fragmentation and clinical risk across your entire network.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-10 bg-[#5B1C6D]/5 rounded-full blur-[120px]" />
            <div className="relative z-10 rounded-[64px] overflow-hidden border-[16px] border-white shadow-2xl aspect-[21/9]">
              <img src="/assets/care-ops.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Care Operations" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Operational Backbone - Flow Layout */}
      <section className="py-40 px-6 bg-white rounded-t-[80px]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
           <div className="space-y-16">
              <div className="space-y-6">
                 <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-tight">
                    The Clinical <br />
                    <span className="text-[#5B1C6D] italic serif font-medium">Backbone.</span>
                 </h2>
                 <p className="text-xl text-slate-500 font-medium">From initial intake to patient discharge, every step is governed by precision protocols.</p>
              </div>

              <div className="space-y-12">
                 {[
                    { title: "Task Orchestration", icon: LayoutGrid, desc: "Automate manual task assignment and follow-ups based on clinical priority." },
                    { title: "Real-time Field Updates", icon: Activity, desc: "Instant notifications for any operational deviations or clinical red flags." },
                    { title: "Immutable Digital Logs", icon: ShieldCheck, desc: "Every care interaction is automatically logged for audit-ready compliance." }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                       <div className="w-16 h-16 rounded-2xl bg-[#5B1C6D]/5 flex items-center justify-center text-[#5B1C6D] shrink-0 group-hover:bg-[#5B1C6D] group-hover:text-white transition-all">
                          <item.icon className="w-8 h-8" />
                       </div>
                       <div className="space-y-2">
                          <h4 className="text-2xl font-bold text-slate-900">{item.title}</h4>
                          <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="relative">
              <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-8 pt-20">
                    <div className="p-10 rounded-[48px] bg-[#FBF9FE] border border-slate-100 space-y-6">
                       <Smartphone className="w-10 h-10 text-[#5B1C6D]" />
                       <h4 className="text-xl font-bold">Mobile First</h4>
                       <p className="text-slate-500 text-sm font-medium">Field staff have total clarity on tasks and patient needs via the mobile app.</p>
                    </div>
                    <div className="p-10 rounded-[48px] bg-[#FBF9FE] border border-slate-100 space-y-6">
                       <Briefcase className="w-10 h-10 text-emerald-500" />
                       <h4 className="text-xl font-bold">Agency Web</h4>
                       <p className="text-slate-500 text-sm font-medium">Administrators manage complex rosters and billing from a central web hub.</p>
                    </div>
                 </div>
                 <div className="space-y-8">
                    <div className="p-10 rounded-[48px] bg-[#FBF9FE] border border-slate-100 space-y-6">
                       <Heart className="w-10 h-10 text-rose-500" />
                       <h4 className="text-xl font-bold">Patient Portal</h4>
                       <p className="text-slate-500 text-sm font-medium">Families and patients stay informed with real-time visit tracking and updates.</p>
                    </div>
                    <div className="p-10 rounded-[48px] bg-[#FBF9FE] border border-slate-100 space-y-6">
                       <Globe className="w-10 h-10 text-blue-500" />
                       <h4 className="text-xl font-bold">Network Wide</h4>
                       <p className="text-slate-500 text-sm font-medium">Scale from a single location to a national network on one infrastructure.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. The Lifecycle Section - Macro View */}
      <section className="py-40 bg-[#0F172A] relative overflow-hidden rounded-t-[80px]">
         <div className="absolute inset-0 bg-topo opacity-[0.03] pointer-events-none" />
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-24">
            <div className="max-w-3xl mx-auto space-y-6">
               <h2 className="text-5xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9]">One System. <br /><span className="text-primary-soft italic serif font-medium">End-to-End.</span></h2>
               <p className="text-xl text-slate-400 font-medium">Reclaim 25% of your administrative time with automated clinical workflows.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
               {[
                  { title: "Intake & Assessment", val: "Instant", icon: CheckCircle2 },
                  { title: "Scheduling & Dispatch", val: "Automated", icon: CheckCircle2 },
                  { title: "Clinical Delivery", val: "Verified", icon: CheckCircle2 }
               ].map((step, i) => (
                  <div key={i} className="p-12 rounded-[56px] bg-white/5 border border-white/10 space-y-8 group hover:bg-white/10 transition-all">
                     <div className="w-20 h-20 rounded-[32px] bg-primary-soft/10 text-primary-soft flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                        <step.icon className="w-10 h-10" />
                     </div>
                     <div className="space-y-2">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{step.title}</p>
                        <p className="text-3xl font-bold text-white">{step.val}</p>
                     </div>
                  </div>
               ))}
            </div>

            <div className="pt-20">
               <Link href="/demo">
                  <Button size="lg" className="h-20 px-12 text-2xl rounded-3xl bg-primary-soft text-[#0F172A] hover:bg-white transition-all font-bold">
                     Book an Operations Audit
                  </Button>
               </Link>
            </div>
         </div>
      </section>

      {/* 4. Final Branding */}
      <section className="py-20 text-center bg-[#0F172A] border-t border-white/5">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em]">CareMandate • Clinical Operations • 2024</p>
      </section>
    </main>
  );
}
