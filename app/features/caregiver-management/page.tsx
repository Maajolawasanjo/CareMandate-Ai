"use client";

import { Button } from "@/components/ui/button";
import { 
  Users, UserPlus, Clock, ShieldCheck, 
  ArrowRight, HeartPulse, GraduationCap, 
  MapPin, Star, Sparkles, UserCheck, Zap
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CaregiverManagementPage() {
  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-48 pb-0 overflow-x-hidden">
      {/* 1. People-Focused Hero */}
      <section className="px-6 pb-32 relative">
        <div className="absolute inset-0 bg-topo opacity-[0.05] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 text-[#5B1C6D] font-bold text-xs uppercase tracking-[0.3em]">
                <Users className="w-5 h-5" />
                <span>Workforce Orchestration</span>
              </div>
              <h1 className="text-[64px] lg:text-[96px] font-bold text-slate-900 leading-[0.85] tracking-tighter">
                Empower your <br />
                <span className="text-[#5B1C6D] italic serif font-medium">Frontline.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-xl font-medium">
                Align your care team through real-time availability, clinical competence, and intelligent matching. Precision management for higher retention.
              </p>
              <div className="flex gap-6">
                <Link href="/demo">
                  <Button size="lg" className="h-16 px-10 rounded-2xl bg-[#5B1C6D] text-white hover:bg-slate-900 transition-all font-bold group">
                    Scale Your Team <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
               <div className="absolute -inset-10 bg-rose-500/5 rounded-full blur-[100px]" />
               <div className="relative z-10 rounded-[64px] overflow-hidden border-[12px] border-white shadow-2xl aspect-[4/5]">
                  <img src="/assets/caregiver-management.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Caregiver Team" />
                  <div className="absolute top-10 right-10 flex flex-col gap-4">
                     <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-white/20 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                           <UserCheck className="w-5 h-5" />
                        </div>
                        <div>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Staff</p>
                           <p className="text-sm font-bold text-slate-900">100% Compliant</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Digital Vault - Focus on Compliance */}
      <section className="py-40 px-6 bg-white rounded-t-[80px]">
        <div className="max-w-7xl mx-auto space-y-32">
           <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-24 items-start">
              <div className="space-y-10 sticky top-40">
                 <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-tight">
                    The Clinical <br />
                    <span className="text-[#5B1C6D] italic serif font-medium">Vault.</span>
                 </h2>
                 <p className="text-xl text-slate-500 font-medium">Centralized management of skills, certifications, and clinical competencies in one high-security digital vault.</p>
                 <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="space-y-2">
                       <p className="text-3xl font-bold text-slate-900">30%</p>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Faster Onboarding</p>
                    </div>
                    <div className="space-y-2">
                       <p className="text-3xl font-bold text-slate-900">Zero</p>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Manual Logs</p>
                    </div>
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                 {[
                    { title: "Credential Tracking", icon: GraduationCap, desc: "Automatic alerts for expiring certifications and mandatory training gaps.", color: "text-blue-500", bg: "bg-blue-50" },
                    { title: "Skill Matching", icon: Star, desc: "Assign caregivers based on specific clinical competencies required for the visit.", color: "text-amber-500", bg: "bg-amber-50" },
                    { title: "Live Roster Sync", icon: Clock, desc: "Instant visibility into staff capacity, travel time, and roster deviations.", color: "text-[#5B1C6D]", bg: "bg-[#5B1C6D]/5" },
                    { title: "Proximity Intelligence", icon: MapPin, desc: "Minimize travel time by matching staff with patients in their immediate vicinity.", color: "text-emerald-500", bg: "bg-emerald-50" }
                 ].map((feat, i) => (
                    <div key={i} className="p-12 rounded-[56px] bg-[#FBF9FE] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                       <div className={`w-16 h-16 rounded-2xl ${feat.bg} ${feat.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                          <feat.icon className="w-8 h-8" />
                       </div>
                       <h3 className="text-2xl font-bold text-slate-900 mb-4">{feat.title}</h3>
                       <p className="text-slate-500 font-medium leading-relaxed">{feat.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 3. Retention Section - People First */}
      <section className="py-40 bg-[#0F172A] relative overflow-hidden rounded-t-[80px]">
         <div className="absolute inset-0 bg-topo opacity-[0.03] pointer-events-none" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative group">
                  <div className="absolute -inset-10 bg-primary-soft/10 rounded-full blur-[120px]" />
                  <img src="/assets/scheduling.jpg" className="relative z-10 w-full h-[600px] object-cover rounded-[64px] border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-1000" alt="Workforce Success" />
               </div>
               <div className="space-y-12">
                  <h2 className="text-[56px] lg:text-[80px] font-bold text-white leading-[0.9] tracking-tighter">
                     Build a culture of <br />
                     <span className="text-primary-soft italic serif font-medium">Care.</span>
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed">
                     Improve caregiver satisfaction by optimizing travel routes, balancing workloads, and providing total clarity on patient needs through our mobile-first experience.
                  </p>
                  <div className="space-y-8">
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-soft shrink-0">
                           <HeartPulse className="w-6 h-6" />
                        </div>
                        <div className="space-y-2">
                           <h4 className="text-xl font-bold text-white">Reduced Burnout</h4>
                           <p className="text-slate-500">Intelligent scheduling prevents over-utilization and ensures fair visit distribution.</p>
                        </div>
                     </div>
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-soft shrink-0">
                           <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div className="space-y-2">
                           <h4 className="text-xl font-bold text-white">Verified Safety</h4>
                           <p className="text-slate-500">Real-time GPS check-ins ensure field staff safety and organizational accountability.</p>
                        </div>
                     </div>
                  </div>
                  <Link href="/demo">
                     <Button size="lg" className="h-16 px-10 rounded-2xl bg-primary-soft text-[#0F172A] font-bold hover:bg-white transition-all text-lg">
                        Empower Your Team
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Final Branding */}
      <section className="py-20 text-center bg-[#0F172A] border-t border-white/5">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em]">CareMandate • Workforce Infrastructure • 2024</p>
      </section>
    </main>
  );
}
