"use client";

import { Button } from "@/components/ui/button";
import { 
  LineChart, BarChart3, PieChart, TrendingUp, 
  Target, Zap, ShieldCheck, ArrowRight, Activity,
  Brain, FileSpreadsheet, Layers
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AnalyticsFeaturePage() {
  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-48 pb-0 overflow-x-hidden">
      {/* 1. Data-Focused Hero */}
      <section className="px-6 pb-32 relative">
        <div className="absolute inset-0 bg-topo opacity-[0.03] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 text-[#5B1C6D] font-bold text-xs uppercase tracking-[0.3em]">
                <Activity className="w-5 h-5" />
                <span>Operational Intelligence</span>
              </div>
              <h1 className="text-[64px] lg:text-[96px] font-bold text-slate-900 leading-[0.85] tracking-tighter">
                Predictive <br />
                <span className="text-[#5B1C6D] italic serif font-medium">Precision.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-xl font-medium">
                Transform raw clinical data into a live command center. CareMandate Analytics identifies bottlenecks before they impact care.
              </p>
              <div className="flex gap-6">
                <Link href="/demo">
                  <Button size="lg" className="h-16 px-10 rounded-2xl bg-[#5B1C6D] text-white hover:bg-slate-900 transition-all font-bold group">
                    Explore Dashboards <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
               <div className="absolute -inset-10 bg-[#5B1C6D]/5 rounded-full blur-[100px] animate-pulse" />
               <div className="relative z-10 rounded-[64px] overflow-hidden border-[12px] border-white shadow-2xl aspect-square">
                  <img src="/assets/analytics.jpg" className="w-full h-full object-cover" alt="Data Analytics" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5B1C6D]/40 to-transparent" />
                  
                  {/* Floating Metric Card */}
                  <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
                     <div className="flex items-center justify-between mb-4">
                        <p className="text-white text-xs font-bold uppercase tracking-widest opacity-80">Real-time Efficiency</p>
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                     </div>
                     <p className="text-4xl font-bold text-white tracking-tighter">+24.8%</p>
                     <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[80%] bg-emerald-400 rounded-full" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Bento Insights Grid */}
      <section className="py-40 px-6 bg-white rounded-t-[80px]">
        <div className="max-w-7xl mx-auto space-y-24">
           <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter">Your Command <span className="text-[#5B1C6D] italic serif font-medium">Center.</span></h2>
              <p className="text-xl text-slate-500 font-medium">Stop guessing. Start knowing. Every clinical touchpoint visualized instantly.</p>
           </div>

           <div className="grid lg:grid-cols-3 gap-8">
              {/* Feature 1: Large Card */}
              <div className="lg:col-span-2 p-12 rounded-[56px] bg-[#FBF9FE] border border-slate-100 flex flex-col justify-between group overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B1C6D]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                 <div className="space-y-6 relative z-10">
                    <LineChart className="w-12 h-12 text-[#5B1C6D]" />
                    <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Clinical Outcomes Engine</h3>
                    <p className="text-lg text-slate-500 max-w-md font-medium">Track patient health trends longitudinally. Identify risk patterns across your entire patient base with AI-driven early detection.</p>
                 </div>
                 <div className="mt-12 relative z-10">
                    <img src="/assets/ai-breakthrough.jpg" className="w-full h-80 object-cover rounded-[32px] shadow-2xl group-hover:scale-105 transition-transform duration-1000" alt="Outcomes" />
                 </div>
              </div>

              {/* Feature 2: Tall Card */}
              <div className="p-12 rounded-[56px] bg-[#0F172A] text-white flex flex-col space-y-12">
                 <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <BarChart3 className="w-8 h-8 text-primary-soft" />
                 </div>
                 <div className="space-y-6">
                    <h3 className="text-3xl font-bold tracking-tight">Staff Utilisation Metrics</h3>
                    <p className="text-slate-400 font-medium">Optimise rosters based on travel time, skill matching, and field performance data.</p>
                 </div>
                 <div className="space-y-6 pt-12 border-t border-white/10">
                    {[
                       { label: "Travel Efficiency", val: "94%" },
                       { label: "Staff Satisfaction", val: "88%" },
                       { label: "Visit Adherence", val: "99.8%" }
                    ].map((stat, i) => (
                       <div key={i} className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</span>
                          <span className="text-xl font-bold text-primary-soft">{stat.val}</span>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Feature 3 & 4: Small Cards */}
              <div className="p-10 rounded-[48px] bg-white border border-slate-100 shadow-sm space-y-6 hover:shadow-2xl transition-all">
                 <Target className="w-10 h-10 text-emerald-500" />
                 <h4 className="text-2xl font-bold text-slate-900">KPI Auto-Tracking</h4>
                 <p className="text-slate-500 font-medium text-sm">Every visit completion and clinical task is automatically logged against your organization&apos;s KPIs.</p>
              </div>
              <div className="p-10 rounded-[48px] bg-white border border-slate-100 shadow-sm space-y-6 hover:shadow-2xl transition-all">
                 <Brain className="w-10 h-10 text-blue-500" />
                 <h4 className="text-2xl font-bold text-slate-900">Predictive Alerts</h4>
                 <p className="text-slate-500 font-medium text-sm">Identify caregiver fatigue or patient decline patterns before they become operational crises.</p>
              </div>
              <div className="p-10 rounded-[48px] bg-white border border-slate-100 shadow-sm space-y-6 hover:shadow-2xl transition-all">
                 <Layers className="w-10 h-10 text-[#5B1C6D]" />
                 <h4 className="text-2xl font-bold text-slate-900">Universal Exports</h4>
                 <p className="text-slate-500 font-medium text-sm">Export data in any format for hospital HIS integration or regulatory compliance reporting.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. The ROI Section - Dark Mode Impact */}
      <section className="py-40 bg-[#0F172A] relative overflow-hidden rounded-t-[80px]">
         <div className="absolute inset-0 bg-topo opacity-[0.03] pointer-events-none" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative group">
                  <div className="absolute -inset-10 bg-primary-soft/10 rounded-full blur-[120px]" />
                  <img src="/assets/clinical-eval.jpg" className="relative z-10 w-full h-[600px] object-cover rounded-[64px] border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-1000" alt="Clinical Evaluation" />
               </div>
               <div className="space-y-12">
                  <h2 className="text-[56px] lg:text-[80px] font-bold text-white leading-[0.9] tracking-tighter">
                     Move from intuition to <br />
                     <span className="text-primary-soft italic serif font-medium">Evidence.</span>
                  </h2>
                  <div className="space-y-8">
                     <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex gap-6">
                        <Zap className="w-10 h-10 text-primary-soft shrink-0" />
                        <div>
                           <h4 className="text-xl font-bold text-white mb-2">Automated Governance</h4>
                           <p className="text-slate-400 font-medium">Reduce manual data entry by 80%. Every clinical decision is backed by immutable digital logs.</p>
                        </div>
                     </div>
                     <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex gap-6">
                        <ShieldCheck className="w-10 h-10 text-emerald-400 shrink-0" />
                        <div>
                           <h4 className="text-xl font-bold text-white mb-2">Constant Audit Readiness</h4>
                           <p className="text-slate-400 font-medium">Stay ahead of regulators with one-click report generation for any historical time period.</p>
                        </div>
                     </div>
                  </div>
                  <Link href="/demo">
                     <Button size="lg" className="h-16 px-10 rounded-2xl bg-primary-soft text-[#0F172A] font-bold hover:bg-white transition-all text-lg">
                        Request ROI Analysis
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Final Branding */}
      <section className="py-20 text-center bg-[#0F172A] border-t border-white/5">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em]">CareMandate • Analytics Infrastructure • 2024</p>
      </section>
    </main>
  );
}
