"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, Heart, ShieldCheck, Zap, Users, Clock, 
  CheckCircle2, AlertCircle, LayoutGrid, Sparkles, MapPin, 
  Smartphone, BarChart3, Star
} from "lucide-react";
import React from "react";

export default function HomeCareSolution() {
  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-40 pb-0 overflow-x-hidden">
      {/* 1. Immersive Editorial Hero */}
      <section className="relative px-6 pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[#FBF9FE] pointer-events-none -z-20 overflow-hidden">
          <div className="absolute inset-0 bg-topo opacity-10" />
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#5B1C6D]/5 blur-[180px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#5B1C6D]/5 border border-[#5B1C6D]/10 text-[#5B1C6D] text-xs font-bold uppercase tracking-widest">
                <Heart className="w-4 h-4" />
                <span>Home Care Solution</span>
              </div>
              <h1 className="text-[64px] lg:text-[100px] font-bold text-[#0F172A] leading-[0.85] tracking-tighter">
                Care where it <br />
                <span className="text-[#5B1C6D] italic serif font-medium">matters most.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-xl font-medium">
                The unified clinical operating system for high-growth home care providers. Scale your private care delivery with total visibility and trust.
              </p>
              <div className="flex flex-wrap gap-6 pt-6">
                <Link href="/demo">
                  <Button size="lg" className="h-16 px-10 rounded-[24px] bg-[#5B1C6D] text-white hover:bg-[#4A1658] shadow-2xl shadow-[#5B1C6D]/20 transition-all text-lg group">
                    Start Scaling Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-[#5B1C6D]/10 rounded-[64px] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative z-10 rounded-[64px] overflow-hidden border-[12px] border-white shadow-2xl aspect-[5/6]">
                <img 
                  src="/assets/about.png" 
                  alt="Compassionate Home Care"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-10 left-10 p-8 bg-white/90 backdrop-blur-md rounded-[32px] border border-white/20 shadow-xl max-w-xs">
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-[#0F172A] font-bold text-sm italic serif leading-tight">&quot;CareMandate changed how we manage our 150+ caregivers. The visibility is unmatched.&quot;</p>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-4">Director, Premium Home Care UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Problem: Bento Grid of Challenges */}
      <section className="py-40 bg-[#0F172A] relative rounded-t-[80px]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-topo" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-32 space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Home care is <span className="text-primary-soft italic serif font-medium">difficult</span> to scale.
            </h2>
            <p className="text-slate-400 text-lg font-medium">Traditional methods fail as soon as you move beyond 50 clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 p-12 rounded-[48px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group">
              <AlertCircle className="w-12 h-12 text-primary-soft mb-8" />
              <h3 className="text-3xl font-bold text-white mb-6">Workforce Fragmentation</h3>
              <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                Managing a distributed workforce across hundreds of private homes creates constant friction, clinical silos, and safety risks.
              </p>
            </div>
            <div className="p-12 rounded-[48px] bg-[#5B1C6D]/20 border border-[#5B1C6D]/30 flex flex-col justify-between">
              <h4 className="text-6xl font-bold text-primary-soft leading-none mb-8">20%</h4>
              <p className="text-white font-bold text-lg leading-tight">Increase in missed visits when managing 50+ caregivers manually.</p>
            </div>
            <div className="p-12 rounded-[48px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all">
              <MapPin className="w-10 h-10 text-slate-400 mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">The "Invisible" Field</h3>
              <p className="text-slate-400">Relying on paper logs makes it impossible to verify clinical safety in real-time.</p>
            </div>
            <div className="md:col-span-2 p-12 rounded-[48px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all flex items-center gap-12">
               <div className="hidden lg:block w-40 h-40 rounded-full border-8 border-primary-soft/20 border-t-primary-soft animate-spin-slow" />
               <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Administrative Exhaustion</h3>
                  <p className="text-slate-400 text-lg">Coordination fatigue kills growth. Your team spends 80% of their time on logistics instead of clinical excellence.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Solution: Dynamic Workflow */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
            <div className="lg:w-1/2 space-y-10">
              <div className="inline-flex items-center gap-3 text-[#5B1C6D] font-bold text-xs uppercase tracking-widest">
                <Sparkles className="w-5 h-5" />
                <span>Engineered for Trust</span>
              </div>
              <h2 className="text-[56px] lg:text-[80px] font-bold text-[#0F172A] tracking-tighter leading-[0.9]">
                Clinical precision <br />
                <span className="text-[#5B1C6D] italic serif font-medium">at home.</span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed font-medium">
                We bridge the gap between clinical intent and home-based operational excellence.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "GPS Verified", color: "text-emerald-500", bg: "bg-emerald-50" },
                { icon: Zap, title: "Instant Dispatch", color: "text-[#5B1C6D]", bg: "bg-[#5B1C6D]/5" },
                { icon: Smartphone, title: "Caregiver App", color: "text-blue-500", bg: "bg-blue-50" },
                { icon: BarChart3, title: "Family Portal", color: "text-amber-500", bg: "bg-amber-50" },
              ].map((item, i) => (
                <div key={i} className={`p-8 rounded-[40px] ${item.bg} border border-white shadow-sm flex flex-col items-center text-center gap-6 group hover:scale-105 transition-all duration-500`}>
                  <div className={`w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center ${item.color}`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-slate-900 tracking-tight">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Highlight Image */}
          <div className="relative rounded-[64px] overflow-hidden group">
             <img src="/assets/visits.jpg" className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000" alt="Solution visualization" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
             <div className="absolute bottom-16 left-16 right-16 flex flex-col md:flex-row justify-between items-end gap-10">
                <div className="max-w-xl space-y-6">
                   <h3 className="text-4xl font-bold text-white leading-tight">A unified source of truth for your entire clinical network.</h3>
                   <p className="text-slate-300 text-lg">From initial care plan to GPS-verified visit completion, every data point is audit-ready and clinically validated.</p>
                </div>
                <Link href="/demo">
                   <Button size="lg" className="h-16 px-10 rounded-[24px] bg-white text-[#0F172A] hover:bg-slate-100 transition-all text-lg font-bold">
                      See it in Action
                   </Button>
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Benefits: Geometric Grid */}
      <section className="py-40 bg-[#FBF9FE]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[56px] lg:text-[72px] font-bold text-[#0F172A] tracking-tight leading-[0.9] text-center mb-32">
            Strategic <span className="text-[#5B1C6D] italic serif font-medium">Outcomes.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
               { title: "50% Less Admin", desc: "Automate scheduling, billing readiness, and compliance logs in one click." },
               { title: "Zero Billing Errors", desc: "GPS timestamps and digital task logs ensure every hour claimed is an hour delivered." },
               { title: "Scale with Confidence", desc: "Onboard new care networks in hours, not weeks, with standardized clinical protocols." },
               { title: "Clinical Retention", desc: "Reduce staff burnout by optimizing travel routes and ensuring balanced rosters." },
               { title: "Family Transparency", desc: "Build unmatched trust with families through real-time care updates and verified logs." },
               { title: "100% Audit Readiness", description: "Be constant-audit ready with immutable logs of every clinical decision." }
            ].map((benefit, i) => (
              <div key={i} className="p-12 rounded-[48px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5B1C6D]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#5B1C6D]/10 transition-all" />
                <div className="text-[#5B1C6D] font-bold text-5xl mb-8 opacity-20 group-hover:opacity-100 transition-all">0{i+1}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">{benefit.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">{benefit.desc || benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-40 bg-[#0F172A] rounded-t-[80px]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-16">
          <div className="w-24 h-24 rounded-full bg-primary-soft/10 flex items-center justify-center mx-auto border border-primary-soft/20">
            <Heart className="w-10 h-10 text-primary-soft" />
          </div>
          <h2 className="text-[56px] lg:text-[80px] font-bold text-white leading-[0.9] tracking-tighter">
            Build the future <br />
            <span className="text-primary-soft italic serif font-medium">of home care.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/demo">
              <Button size="lg" className="h-20 px-12 text-2xl rounded-3xl bg-primary-soft text-[#0F172A] hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary-soft/20 font-bold">
                Book a Solution Audit
              </Button>
            </Link>
          </div>
          <p className="text-slate-500 font-bold text-sm uppercase tracking-[0.5em] pt-20">CareMandate • Home Care Suite • 2024</p>
        </div>
      </section>
    </main>
  );
}
