"use client";

import { Button } from "@/components/ui/button";
import { 
  Zap, Calendar, MapPin, Users2, LineChart, ShieldCheck, ArrowRight, Sparkles, LayoutGrid, Cpu
} from "lucide-react";
import Link from "next/link";

const IconMap: Record<string, React.ElementType> = {
  Zap, Calendar, MapPin, Users2, LineChart, ShieldCheck
};

export default function FeaturesHub() {
  const features = [
    { icon: "Zap", title: "Care Operations", description: "The central nervous system for your entire clinical delivery workflow.", href: "/features/care-operations", color: "text-amber-500", bg: "bg-amber-50" },
    { icon: "Calendar", title: "Scheduling", description: "Intelligent AI-powered planning that eliminates double-bookings and roster gaps.", href: "/features/scheduling", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: "MapPin", title: "Visit Tracking", description: "High-fidelity GPS verification for total field visibility and staff safety.", href: "/features/visit-tracking", color: "text-emerald-500", bg: "bg-emerald-50" },
    { icon: "Users2", title: "Caregiver Management", description: "Match patients with the right clinical skills and caregiver availability instantly.", href: "/features/caregiver-management", color: "text-rose-500", bg: "bg-rose-50" },
    { icon: "LineChart", title: "Analytics", description: "Turn clinical data into actionable insights for better patient outcomes.", href: "/features/analytics", color: "text-[#5B1C6D]", bg: "bg-[#5B1C6D]/5" },
    { icon: "ShieldCheck", title: "Compliance", description: "Stay constant-audit ready with immutable digital logs and automated verification.", href: "/features/compliance", color: "text-indigo-500", bg: "bg-indigo-50" }
  ];

  const renderIcon = (iconName: string) => {
    const Icon = IconMap[iconName] || Zap;
    return <Icon className="w-10 h-10" />;
  };

  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-40 pb-0 overflow-x-hidden">
      {/* 1. Immersive Module Header */}
      <section className="px-6 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-topo opacity-[0.05] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 text-[#5B1C6D] font-bold text-xs uppercase tracking-widest">
              <Cpu className="w-5 h-5" />
              <span>Modular Architecture</span>
            </div>
            <h1 className="text-[64px] lg:text-[100px] font-bold text-slate-900 leading-[0.85] tracking-tighter">
              Precision <br />
              <span className="text-[#5B1C6D] italic serif font-medium">Capabilities.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-2xl font-medium">
              A comprehensive clinical operating system designed to eliminate manual fragmentation across your entire organization.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Feature Module Grid */}
      <section className="py-24 px-6 bg-white rounded-t-[80px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, i) => (
              <Link key={i} href={feature.href} className="group">
                <div className="p-12 rounded-[56px] bg-[#FBF9FE] border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 h-full flex flex-col">
                  <div className={`w-20 h-20 rounded-[32px] ${feature.bg} ${feature.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    {renderIcon(feature.icon)}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-slate-900 tracking-tight group-hover:text-[#5B1C6D] transition-colors">{feature.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-12 flex-grow font-medium">{feature.description}</p>
                  <div className="text-sm font-bold text-[#5B1C6D] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Module <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Platform Unity Section */}
      <section className="py-40 bg-[#0F172A] rounded-t-[80px] relative overflow-hidden">
        <div className="absolute inset-0 bg-topo opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12 text-white">
                 <div className="w-20 h-20 rounded-[32px] bg-primary-soft/10 text-primary-soft flex items-center justify-center">
                    <LayoutGrid className="w-10 h-10" />
                 </div>
                 <h2 className="text-[56px] lg:text-[80px] font-bold leading-[0.9] tracking-tighter">
                    Unified Operating <br />
                    <span className="text-primary-soft italic serif font-medium">System.</span>
                 </h2>
                 <p className="text-xl text-slate-400 font-medium leading-relaxed">
                    Don&apos;t just manage care. Orchestrate it. CareMandate modules work together to create a single source of truth for your entire clinical and operational workforce.
                 </p>
                 <div className="flex gap-6">
                    <Link href="/demo">
                       <Button size="lg" className="h-16 px-10 rounded-2xl bg-primary-soft text-[#0F172A] font-bold hover:bg-white transition-all text-lg">
                          Book a Strategy Session
                       </Button>
                    </Link>
                 </div>
              </div>
              <div className="relative group">
                 <div className="absolute -inset-10 bg-primary-soft/10 rounded-full blur-3xl opacity-50" />
                 <img src="/assets/hero.png" className="relative z-10 w-full h-[500px] object-cover rounded-[64px] border border-white/10 shadow-2xl" alt="Platform Overview" />
              </div>
           </div>
        </div>
      </section>

      {/* 4. Final Branding */}
      <section className="py-20 text-center bg-[#0F172A] border-t border-white/5">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em]">CareMandate • Capability Hub • 2024</p>
      </section>
    </main>
  );
}
