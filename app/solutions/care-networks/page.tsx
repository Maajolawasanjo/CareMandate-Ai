"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, Network, Globe, BarChart3, ShieldCheck, 
  Layers, Users, CheckCircle2, AlertCircle, Sparkles,
  Database, Share2, TrendingUp
} from "lucide-react";
import React from "react";

export default function CareNetworksSolution() {
  return (
    <main className="bg-[#0F172A] min-h-screen pt-40 pb-0 overflow-x-hidden text-white">
      {/* 1. Global Scale Hero */}
      <section className="relative px-6 pb-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
          <div className="absolute inset-0 bg-topo opacity-[0.05]" />
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#5B1C6D]/20 blur-[180px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-soft text-xs font-bold uppercase tracking-widest">
                <Globe className="w-4 h-4" />
                <span>Enterprise Suite</span>
              </div>
              <h1 className="text-[64px] lg:text-[96px] font-bold text-white leading-[0.85] tracking-tighter">
                Scale the <br />
                <span className="text-primary-soft italic serif font-medium">Unscalable.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-xl font-medium">
                Unified operational control for multi-location care networks. Standardize clinical excellence across your entire organization.
              </p>
              <div className="flex flex-wrap gap-6 pt-6">
                <Link href="/demo">
                  <Button size="lg" className="h-16 px-10 rounded-[24px] bg-primary-soft text-[#0F172A] hover:bg-white shadow-2xl shadow-primary-soft/20 transition-all text-lg font-bold group">
                    Connect Your Network <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="p-2 rounded-[56px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-2xl">
                 <img src="/assets/analytics.jpg" className="w-full h-[500px] object-cover rounded-[54px] opacity-80" alt="Network Analytics" />
              </div>
              {/* Floating Node Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#5B1C6D] rounded-3xl flex items-center justify-center border-4 border-[#0F172A] shadow-2xl animate-float">
                 <Share2 className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 p-8 shadow-2xl flex flex-col justify-between">
                 <p className="text-[10px] font-bold text-primary-soft uppercase tracking-widest">Network Health</p>
                 <TrendingUp className="w-10 h-10 text-emerald-400" />
                 <p className="text-2xl font-bold text-white">99.8%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Unified Control Architecture */}
      <section className="py-40 bg-white text-[#0F172A] rounded-t-[80px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-32 space-y-6">
             <h2 className="text-[56px] lg:text-[80px] font-bold tracking-tighter leading-[0.9]">
                One Central <br />
                <span className="text-[#5B1C6D] italic serif font-medium">Source of Truth.</span>
             </h2>
             <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Stop managing silos. CareMandate provides the enterprise layer that connects your regional teams into one high-performance clinical system.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
             {[
                { icon: Database, title: "Central Data Hub", desc: "Consolidate clinical outcomes and operational logs across all sites into a single verifiable ledger." },
                { icon: Layers, title: "Protocol Standardization", desc: "Push clinical protocol updates to your entire network instantly. Zero lag between policy and practice." },
                { icon: ShieldCheck, title: "Unified Compliance", desc: "Verify audit readiness for 1 or 1,000 locations from a single high-fidelity dashboard." }
             ].map((box, i) => (
                <div key={i} className="p-12 rounded-[56px] bg-[#FBF9FE] border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                   <div className="w-20 h-20 rounded-[32px] bg-[#5B1C6D]/5 text-[#5B1C6D] flex items-center justify-center mb-10 group-hover:bg-[#5B1C6D] group-hover:text-white transition-all duration-500">
                      <box.icon className="w-10 h-10" />
                   </div>
                   <h4 className="text-2xl font-bold text-slate-900 mb-6">{box.title}</h4>
                   <p className="text-slate-500 font-medium leading-relaxed">{box.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. The "Network Effect" Visual */}
      <section className="py-40 bg-[#FBF9FE]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#0F172A] rounded-[80px] p-16 lg:p-32 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-full h-full bg-topo opacity-[0.03]" />
               <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
                  <div className="space-y-10">
                     <div className="inline-flex items-center gap-3 text-primary-soft font-bold text-xs uppercase tracking-widest">
                        <Sparkles className="w-5 h-5" />
                        <span>Exponential Growth</span>
                     </div>
                     <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tighter">
                        Manage a thousand <br />
                        <span className="text-primary-soft italic serif font-medium">locations</span> as easily as one.
                     </h2>
                     <p className="text-xl text-slate-400 font-medium leading-relaxed">
                        Our intelligent regional mapping and multi-tenancy architecture allow you to scale your care network horizontally without increasing administrative complexity.
                     </p>
                     <div className="flex gap-12 pt-6 border-t border-white/10">
                        <div>
                           <p className="text-4xl font-bold text-white">30%</p>
                           <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-2">Efficiency Gain</p>
                        </div>
                        <div>
                           <p className="text-4xl font-bold text-white">0%</p>
                           <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-2">Data Silos</p>
                        </div>
                     </div>
                  </div>
                  <div className="relative p-8 rounded-[64px] bg-white/5 border border-white/10 backdrop-blur-sm">
                     <img src="/assets/hero.png" className="rounded-[40px] w-full h-[500px] object-cover" alt="Enterprise Analytics" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-40 bg-white">
         <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-5xl lg:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tighter">
               Ready to <br />
               <span className="text-[#5B1C6D] italic serif font-medium italic">Unify Your Network?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
               <Link href="/demo">
                  <Button size="lg" className="h-20 px-12 text-2xl rounded-3xl bg-[#5B1C6D] text-white hover:bg-slate-900 transition-all shadow-xl font-bold">
                     Request Enterprise Demo
                  </Button>
               </Link>
            </div>
         </div>
      </section>
    </main>
  );
}
