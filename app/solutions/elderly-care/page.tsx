"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, HeartPulse, ShieldCheck, Heart, Users, 
  Home, Phone, Star, CheckCircle2, AlertCircle, Sparkles,
  Camera, Coffee
} from "lucide-react";
import React from "react";

export default function ElderlyCareSolution() {
  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-40 pb-0 overflow-x-hidden">
      {/* 1. Compassionate "Peace of Mind" Hero */}
      <section className="relative px-6 pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[#FBF9FE] pointer-events-none -z-20 overflow-hidden">
           <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-[#5B1C6D]/5 blur-[150px] rounded-full" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#5B1C6D]/5 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12 order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#5B1C6D]/10 text-[#5B1C6D] text-xs font-bold uppercase tracking-widest shadow-sm">
                <Heart className="w-4 h-4 fill-current" />
                <span>Elderly Care Suite</span>
              </div>
              <h1 className="text-[64px] lg:text-[90px] font-bold text-slate-900 leading-[0.9] tracking-tighter">
                Dignity in every <br />
                <span className="text-[#5B1C6D] italic serif font-medium">interaction.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-xl font-medium">
                The safety-first operations platform designed for assisted living and private elderly care. We provide families the peace of mind they deserve.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <Link href="/demo">
                  <Button size="lg" className="h-16 px-10 rounded-[24px] bg-[#5B1C6D] text-white hover:bg-[#4A1658] shadow-xl shadow-[#5B1C6D]/20 transition-all text-lg font-bold group">
                    Request Solution Tour <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="h-16 px-10 rounded-[24px] border-2 border-[#5B1C6D]/10 bg-white text-slate-900 hover:bg-slate-50 text-lg font-bold transition-all">
                    Our Philosophy
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-10 bg-[#5B1C6D]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />
              <div className="relative z-10 rounded-[80px] overflow-hidden border-[16px] border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="/assets/elderly-care.jpg" 
                  alt="Compassionate Elderly Care"
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute top-10 right-10 p-6 bg-white/95 backdrop-blur-md rounded-[32px] shadow-xl border border-white flex items-center gap-4 animate-float">
                   <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-900">Verified Safety</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">100% Secure</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition: The "Peace of Mind" Grid */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
             <div className="space-y-12">
                <div className="inline-flex items-center gap-3 text-[#5B1C6D] font-bold text-xs uppercase tracking-widest">
                  <Sparkles className="w-5 h-5" />
                  <span>The Family-First Approach</span>
                </div>
                <h2 className="text-[56px] lg:text-[72px] font-bold text-slate-900 tracking-tighter leading-[0.95]">
                   Trust is <br />
                   <span className="text-[#5B1C6D] italic serif font-medium italic">verifiable.</span>
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed font-medium">
                   Families shouldn&apos;t have to wonder. We provide 100% transparency through GPS-verified logs and clinical task verification for every elderly care visit.
                </p>
                <div className="grid grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <p className="text-4xl font-bold text-[#5B1C6D]">95%</p>
                      <p className="text-slate-500 text-sm font-medium">Provider Priority: Safety Monitoring</p>
                   </div>
                   <div className="space-y-2">
                      <p className="text-4xl font-bold text-[#5B1C6D]">100%</p>
                      <p className="text-slate-500 text-sm font-medium">Audit-Ready Documentation</p>
                   </div>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                   { icon: ShieldCheck, title: "Safety First", desc: "Automated alerts for late arrivals or safety deviations." },
                   { icon: Coffee, title: "Personalized", desc: "Care plans that respect long-term habits and preferences." },
                   { icon: Users, title: "Continuity", desc: "Consistent caregiver assignments to build patient trust." },
                   { icon: Camera, title: "Visual Proof", desc: "Optional photo-verification for specific clinical tasks." }
                ].map((card, i) => (
                   <div key={i} className="p-10 rounded-[48px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                      <div className="w-16 h-16 rounded-[24px] bg-white shadow-sm flex items-center justify-center text-[#5B1C6D] mb-8 group-hover:bg-[#5B1C6D] group-hover:text-white transition-all">
                         <card.icon className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                   </div>
                ))}
             </div>
          </div>

          <div className="bg-slate-900 rounded-[80px] p-16 lg:p-32 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-topo opacity-10" />
             <div className="relative z-10 max-w-3xl mx-auto space-y-12">
                <HeartPulse className="w-20 h-20 mx-auto text-primary-soft" />
                <h2 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tighter">
                   Scaling safety <br />
                   <span className="text-primary-soft italic serif font-medium">without</span> compromising care.
                </h2>
                <p className="text-xl text-slate-400 font-medium">Every implementation includes our family portal, giving your clients&apos; loved ones a real-time window into the care being delivered.</p>
                <Link href="/demo">
                   <Button size="lg" className="h-16 px-10 rounded-2xl bg-[#5B1C6D] text-white hover:bg-white hover:text-[#5B1C6D] transition-all font-bold text-lg">
                      Explore the Family Portal
                   </Button>
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Final Branding */}
      <section className="py-20 text-center bg-[#FBF9FE] border-t border-slate-100">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em]">CareMandate • Compassionate Precision • 2024</p>
      </section>
    </main>
  );
}
