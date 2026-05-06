"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, TrendingUp, BarChart3, 
  Users, ShieldCheck, Zap, Star, Quote, AlertCircle
} from "lucide-react";
import React from "react";

const studies = [
  {
    client: "St. Jude Clinical Group",
    industry: "Hospitals",
    challenge: "High post-discharge readmission rates due to fragmented home recovery tracking.",
    solution: "Implementation of CareMandate Integration Layer and automated clinical task verification.",
    results: [
      { label: "Readmissions", value: "-15%", icon: TrendingUp },
      { label: "Admin Efficiency", value: "+25%", icon: Zap },
      { label: "Audit Readiness", value: "100%", icon: ShieldCheck }
    ],
    image: "/assets/clinical-eval.jpg",
    testimonial: {
      text: "CareMandate provided the missing link between our acute care and home-based recovery. The data visibility is a game changer.",
      author: "Dr. Elena Vance, Chief of Clinical Ops"
    }
  },
  {
    client: "Heritage Home Care",
    industry: "Private Care",
    challenge: "Manual scheduling for 200+ caregivers leading to missed visits and family complaints.",
    solution: "Deployed AI-Powered Dispatch Engine and the Family Portal for real-time transparency.",
    results: [
      { label: "Missed Visits", value: "0.1%", icon: CheckCircle2 },
      { label: "Coordination Time", value: "-40%", icon: Users },
      { label: "Family CSAT", value: "4.9/5", icon: Star }
    ],
    image: "/assets/care-ops.jpg",
    testimonial: {
      text: "Scaling was impossible before. Now we manage 3x the client load with the same administrative staff.",
      author: "Marcus Thorne, Operations Director"
    }
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-40 pb-0 overflow-x-hidden">
      {/* 1. Impact-Focused Header */}
      <section className="px-6 pb-24 relative">
        <div className="absolute inset-0 bg-topo opacity-[0.05] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#5B1C6D]/5 border border-[#5B1C6D]/10 text-[#5B1C6D] text-xs font-bold uppercase tracking-widest">
            <BarChart3 className="w-4 h-4" />
            <span>Proven Outcomes</span>
          </div>
          <h1 className="text-[64px] lg:text-[100px] font-bold text-slate-900 leading-[0.85] tracking-tighter">
            Evidence of <br />
            <span className="text-[#5B1C6D] italic serif font-medium">Precision.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
            Real stories of clinical transformation and operational growth from leading care providers.
          </p>
        </div>
      </section>

      {/* 2. Case Study Vertical List */}
      <section className="py-24 px-6 bg-white rounded-t-[80px]">
        <div className="max-w-7xl mx-auto space-y-40">
          {studies.map((study, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-20 lg:gap-32 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
               {/* Left: Study Details */}
               <div className="lg:w-1/2 space-y-10">
                  <div className="space-y-4">
                     <p className="text-[#5B1C6D] font-bold text-sm uppercase tracking-widest">{study.industry}</p>
                     <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tighter">{study.client}</h2>
                  </div>
                  
                  <div className="space-y-8">
                     <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 space-y-4">
                        <h4 className="font-bold text-slate-900 flex items-center gap-2 uppercase text-xs tracking-widest">
                           <AlertCircle className="w-4 h-4 text-amber-500" /> The Challenge
                        </h4>
                        <p className="text-slate-600 font-medium leading-relaxed">{study.challenge}</p>
                     </div>
                     <div className="p-8 rounded-[32px] bg-[#5B1C6D]/5 border border-[#5B1C6D]/10 space-y-4">
                        <h4 className="font-bold text-[#5B1C6D] flex items-center gap-2 uppercase text-xs tracking-widest">
                           <Zap className="w-4 h-4" /> The Solution
                        </h4>
                        <p className="text-slate-600 font-medium leading-relaxed">{study.solution}</p>
                     </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-6">
                     {study.results.map((res, j) => (
                        <div key={j} className="space-y-1">
                           <res.icon className="w-6 h-6 text-[#5B1C6D] mb-2" />
                           <p className="text-3xl font-bold text-slate-900 tracking-tighter">{res.value}</p>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{res.label}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Right: Image & Testimonial */}
               <div className="lg:w-1/2 relative">
                  <div className="relative rounded-[64px] overflow-hidden shadow-2xl group">
                     <img 
                       src={study.image} 
                       className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000" 
                       alt={study.client}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                     
                     <div className="absolute bottom-10 left-10 right-10 p-10 bg-white/10 backdrop-blur-xl rounded-[40px] border border-white/20 shadow-2xl">
                        <Quote className="w-10 h-10 text-primary-soft mb-6 opacity-50" />
                        <p className="text-white text-lg font-bold italic serif leading-relaxed mb-6">
                           &quot;{study.testimonial.text}&quot;
                        </p>
                        <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                           <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-xs">
                              {study.testimonial.author.charAt(0)}
                           </div>
                           <p className="text-white/80 text-sm font-bold tracking-tight">{study.testimonial.author}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Final CTA */}
      <section className="py-40 bg-[#0F172A] rounded-t-[80px] text-center text-white">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <h2 className="text-[56px] lg:text-[88px] font-bold leading-[0.9] tracking-tighter">
            Achieve your <br />
            <span className="text-primary-soft italic serif font-medium">next milestone.</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium">Download our comprehensive ROI calculator for care organizations.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
            <Link href="/demo">
              <Button size="lg" className="h-20 px-12 text-2xl rounded-3xl bg-primary-soft text-[#0F172A] hover:bg-white transition-all shadow-xl font-bold">
                Download ROI Tool
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Final Branding */}
      <section className="py-20 text-center bg-[#0F172A] border-t border-white/5">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em]">CareMandate • Clinical Evidence • 2024</p>
      </section>
    </main>
  );
}
