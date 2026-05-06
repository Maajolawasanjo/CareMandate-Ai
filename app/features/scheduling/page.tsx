"use client";

import { Button } from "@/components/ui/button";
import { 
  Calendar, Users, Zap, Clock, 
  ArrowRight, Sparkles, MapPin, 
  LayoutGrid, Share2, MousePointer2,
  CheckCircle2, RefreshCcw
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SchedulingPage() {
  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-48 pb-0 overflow-x-hidden">
      {/* 1. High-Tech Scheduling Hero */}
      <section className="px-6 pb-32 relative">
        <div className="absolute inset-0 bg-topo opacity-[0.05] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 text-[#5B1C6D] font-bold text-xs uppercase tracking-[0.4em]">
              <Calendar className="w-5 h-5" />
              <span>Intelligent Dispatch</span>
            </div>
            <h1 className="text-[64px] lg:text-[100px] font-bold text-slate-900 leading-[0.85] tracking-tighter">
              Complexity <br />
              <span className="text-[#5B1C6D] italic serif font-medium">Simplified.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-xl font-medium">
              Coordinate complex care delivery without the operational chaos. Our AI-powered engine ensures the right caregiver is with the right patient at the right time.
            </p>
            <div className="flex gap-6">
              <Link href="/demo">
                <Button size="lg" className="h-16 px-10 rounded-2xl bg-[#5B1C6D] text-white hover:bg-slate-900 transition-all font-bold group">
                  Book a Roster Audit <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-20 bg-[#5B1C6D]/10 rounded-full blur-[120px] animate-pulse" />
             <div className="relative z-10 rounded-[64px] overflow-hidden border-[12px] border-white shadow-2xl aspect-[4/5] bg-slate-100">
                <img src="/assets/scheduling.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Intelligent Scheduling" />
                
                {/* Floating UI Mocks */}
                <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-4">
                   <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-md shadow-2xl border border-white/20 space-y-4">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <RefreshCcw className="w-4 h-4 text-[#5B1C6D] animate-spin-slow" />
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Optimizing Roster...</p>
                         </div>
                         <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest">99% Efficient</p>
                      </div>
                      <div className="grid grid-cols-5 gap-2">
                         {[...Array(5)].map((_, i) => (
                            <div key={i} className={`h-8 rounded-lg ${i === 2 ? 'bg-[#5B1C6D]' : 'bg-[#5B1C6D]/10'}`} />
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. The Engine Section - 3-Column Focus */}
      <section className="py-40 px-6 bg-white rounded-t-[80px]">
        <div className="max-w-7xl mx-auto space-y-32">
           <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter">Zero-Conflict <span className="text-[#5B1C6D] italic serif font-medium">Automation.</span></h2>
              <p className="text-xl text-slate-500 font-medium">Move from reactive coordination to proactive strategic oversight.</p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                 { title: "Smart Availability", icon: Clock, desc: "Real-time sync between caregiver mobile apps and your central roster engine.", color: "text-blue-500", bg: "bg-blue-50" },
                 { title: "Clinical Matchmaking", icon: Sparkles, desc: "Automatically match patients with staff who possess the exact required clinical skills.", color: "text-amber-500", bg: "bg-amber-50" },
                 { title: "Travel Intelligence", icon: MapPin, desc: "Minimize travel time and fuel costs through location-aware dispatching.", color: "text-emerald-500", bg: "bg-emerald-50" },
                 { title: "Multi-Site Sync", icon: LayoutGrid, desc: "Coordinate teams across dozens of locations from a single, unified command hub.", color: "text-[#5B1C6D]", bg: "bg-[#5B1C6D]/5" },
                 { title: "Conflict Guardian", icon: Zap, desc: "Proactive alerts that prevent double-bookings and certification lapses instantly.", color: "text-rose-500", bg: "bg-rose-50" },
                 { title: "Family Portal Sync", icon: Share2, desc: "Automatically update family portals with visit times and staff profiles.", color: "text-indigo-500", bg: "bg-indigo-50" }
              ].map((feat, i) => (
                 <div key={i} className="p-10 rounded-[56px] bg-[#FBF9FE] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                    <div className={`w-16 h-16 rounded-2xl ${feat.bg} ${feat.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                       <feat.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{feat.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm">{feat.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. The Transformation Section - Dark Mode */}
      <section className="py-40 bg-[#0F172A] relative overflow-hidden rounded-t-[80px]">
         <div className="absolute inset-0 bg-topo opacity-[0.03] pointer-events-none" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative group">
                  <div className="absolute -inset-10 bg-primary-soft/10 rounded-full blur-[120px]" />
                  <img src="/assets/care-ops.jpg" className="relative z-10 w-full h-[600px] object-cover rounded-[64px] border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-1000" alt="Scheduling ROI" />
               </div>
               <div className="space-y-12">
                  <h2 className="text-[56px] lg:text-[80px] font-bold text-white leading-[0.9] tracking-tighter">
                     40% Less Admin. <br />
                     <span className="text-primary-soft italic serif font-medium">100% Reliable.</span>
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed">
                     Free up your coordinators from the manual chaos of shift-filling. CareMandate automates the routine so you can focus on clinical excellence.
                  </p>
                  <div className="space-y-6 pt-6">
                     {[
                        "Eliminate 30+ manual phone calls per roster change.",
                        "Prevent visit no-shows with real-time field tracking.",
                        "Seamless integration with clinical assessments.",
                        "One-click roster publication to mobile teams."
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-white font-medium">
                           <CheckCircle2 className="w-6 h-6 text-primary-soft shrink-0" />
                           <span>{item}</span>
                        </div>
                     ))}
                  </div>
                  <Link href="/demo">
                     <Button size="lg" className="h-16 px-10 rounded-2xl bg-primary-soft text-[#0F172A] font-bold hover:bg-white transition-all text-lg">
                        Automate Your Scheduling
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Final Branding */}
      <section className="py-20 text-center bg-[#0F172A] border-t border-white/5">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em]">CareMandate • Dispatch Infrastructure • 2024</p>
      </section>
    </main>
  );
}
