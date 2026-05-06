"use client";

import { Newspaper, BookOpen, HelpCircle, ArrowRight, Sparkles, BookCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResourcesHub() {
  const resources = [
    { 
      icon: Newspaper, 
      title: "Blog", 
      description: "Editorial insights on care delivery, technology, and clinical precision.", 
      href: "/resources/blog",
      color: "bg-blue-50 text-blue-600"
    },
    { 
      icon: BookCheck, 
      title: "Case Studies", 
      description: "Proven results and ROI stories from our leading clinical partners.", 
      href: "/resources/case-studies",
      color: "bg-emerald-50 text-emerald-600"
    },
    { 
      icon: HelpCircle, 
      title: "Help Center", 
      description: "Detailed documentation and support for the CareMandate ecosystem.", 
      href: "/resources/help-center",
      color: "bg-[#5B1C6D]/5 text-[#5B1C6D]"
    }
  ];

  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-40 pb-0 overflow-x-hidden">
      {/* 1. Immersive Hub Header */}
      <section className="px-6 pb-24 relative">
        <div className="absolute inset-0 bg-topo opacity-[0.05] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-end">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 text-[#5B1C6D] font-bold text-xs uppercase tracking-widest">
                <Sparkles className="w-5 h-5" />
                <span>Knowledge Base</span>
              </div>
              <h1 className="text-[64px] lg:text-[100px] font-bold text-slate-900 leading-[0.85] tracking-tighter">
                Infrastructure <br />
                <span className="text-[#5B1C6D] italic serif font-medium">for Growth.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-xl font-medium">
                Deep-dives, clinical evidence, and technical support to help you build a high-performance operating system.
              </p>
            </div>
            
            <div className="hidden lg:block">
               <div className="p-12 rounded-[56px] bg-white border border-slate-100 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#5B1C6D]/5 rounded-full blur-3xl" />
                  <ShieldCheck className="w-12 h-12 text-[#5B1C6D] mb-6" />
                  <p className="text-xl font-bold text-slate-900 mb-2">Constant Audit Readiness</p>
                  <p className="text-slate-500 font-medium">Learn how to transition from reactive audit prep to automated, immutable logs.</p>
                  <Link href="/resources/blog">
                     <Button variant="link" className="px-0 text-[#5B1C6D] font-bold mt-6 gap-2">
                        Read Whitepaper <ArrowRight className="w-4 h-4" />
                     </Button>
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Resource Selection Grid */}
      <section className="py-24 px-6 bg-white rounded-t-[80px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {resources.map((res, i) => (
              <Link key={i} href={res.href} className="group p-12 rounded-[56px] bg-[#FBF9FE] border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 h-full flex flex-col">
                <div className={`w-20 h-20 rounded-[32px] ${res.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                   <res.icon className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-slate-900 tracking-tight group-hover:text-[#5B1C6D] transition-colors">{res.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-12 flex-grow font-medium">{res.description}</p>
                <div className="text-sm font-bold text-[#5B1C6D] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                   Explore Hub <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Final Call to Action */}
      <section className="py-40 bg-[#0F172A] rounded-t-[80px] text-center">
         <div className="max-w-4xl mx-auto px-6 space-y-12">
            <h2 className="text-[56px] lg:text-[88px] font-bold text-white leading-[0.9] tracking-tighter">
               Build your <br />
               <span className="text-primary-soft italic serif font-medium">Care Advantage.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
               <Link href="/demo">
                  <Button size="lg" className="h-20 px-12 text-2xl rounded-3xl bg-primary-soft text-[#0F172A] hover:bg-white transition-all font-bold">
                     Get Started Today
                  </Button>
               </Link>
            </div>
         </div>
      </section>

      {/* 4. Final Branding */}
      <section className="py-20 text-center bg-[#0F172A] border-t border-white/5">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em]">CareMandate • Knowledge Architecture • 2024</p>
      </section>
    </main>
  );
}
