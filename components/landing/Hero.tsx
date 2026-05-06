"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Activity, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#FBF9FE] -z-30" />
      <div className="absolute inset-0 bg-topo opacity-10 -z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#5B1C6D]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative w-full mb-16">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">
          
          <div className="flex flex-col gap-10">
            <div className="space-y-8">
              <h1 className="text-[64px] lg:text-[88px] leading-[0.9] font-bold tracking-tight text-slate-900">
                Your Health, <br />
                <span className="text-[#5B1C6D] italic serif font-medium">Our Priority.</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-lg font-medium">
                A professional-grade clinical operating system built for efficiency and patient safety. Precision care management, simplified.
              </p>
            </div>

            <div className="flex wrap gap-5">
              <Link href="/demo">
                <Button size="lg" className="h-16 px-10 rounded-[24px] bg-[#5B1C6D] text-white hover:bg-[#4A1658] shadow-2xl shadow-[#5B1C6D]/20 group transition-all text-lg active:scale-95">
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="h-16 px-10 rounded-[24px] border-2 border-slate-200 bg-transparent text-[#475569] hover:bg-slate-50 hover:border-slate-300 text-lg active:scale-95 transition-all">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Sophisticated Hero Image */}
          <div className="relative">
            <div className="relative rounded-[56px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border-[16px] border-white group aspect-[5/6] min-h-[500px] bg-slate-50">
              <Image
                src="/assets/hero.png"
                alt="Healthcare Team"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-7xl px-6 z-30 hidden lg:block">
        <div className="grid grid-cols-3 gap-8">
          {[
            { title: "Clinical Control", desc: "Full visibility and task tracking.", icon: ShieldCheck, color: "text-emerald-500" },
            { title: "Smart Scheduling", desc: "Automated shift management.", icon: Activity, color: "text-[#5B1C6D]" },
            { title: "Audit Ready", desc: "Automated regulatory logs.", icon: Sparkles, color: "text-blue-500" }
          ].map((card, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex items-start gap-6 hover:translate-y-[-10px] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center shrink-0">
                <card.icon className={`w-8 h-8 ${card.color}`} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                <button className="mt-4 text-[11px] font-bold text-[#5B1C6D] uppercase tracking-widest border-b-2 border-primary-soft hover:border-primary-ui transition-colors pb-1">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
