"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, AlertCircle, LayoutGrid, Zap, BarChart3, ShieldCheck,
  Calendar, MapPin, Users, Clock, Activity, UserPlus, Award, LineChart, PieChart, 
  Lock, FileText, Home, Hotel, HeartPulse, Network, Newspaper, BookOpen, HelpCircle,
  Send, Sparkles
} from "lucide-react";
import React from "react";

interface ProductPageProps {
  category: string;
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary?: string;
    ctaSecondary?: string;
  };
  problem: {
    title: string;
    text: string;
    highlight?: string;
  };
  solution: {
    title: string;
    text: string;
    points?: string[];
  };
  howItWorks?: {
    title: string;
    steps: { title: string; description: string }[];
  };
  features?: {
    title: string;
    items: { title: string; description: string; icon?: string }[];
  };
  benefits?: {
    title: string;
    items: { title: string; description: string }[];
  };
}

const IconMap: Record<string, React.ElementType> = {
  Calendar, MapPin, Users, Zap, ShieldCheck, Clock, CheckCircle2, AlertCircle, LayoutGrid, BarChart3, 
  Activity, UserPlus, Award, LineChart, PieChart, Lock, FileText, Home, Hotel, HeartPulse, Network, 
  Newspaper, BookOpen, HelpCircle
};

export default function ProductPageTemplate({
  category,
  hero,
  problem,
  solution,
  howItWorks,
  features,
  benefits,
}: ProductPageProps) {
  const renderIcon = (iconName?: string) => {
    if (!iconName) return null;
    const Icon = IconMap[iconName] || Zap;
    return <Icon className="w-8 h-8 stroke-[1.5]" />;
  };

  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-40 pb-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 pb-32 overflow-hidden">
        {/* Background Texture Layer */}
        <div className="absolute inset-0 bg-[#FBF9FE] pointer-events-none -z-20 overflow-hidden">
          <div className="absolute inset-0 bg-topo opacity-10" />
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#5B1C6D]/5 blur-[180px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-bold text-[#5B1C6D] uppercase tracking-[0.4em] mb-10 block">
              {category}
            </span>
            <h1 className="text-[56px] lg:text-[96px] font-bold text-[#0F172A] leading-[0.9] tracking-tighter mb-12">
              {hero.title.split(' ').map((word, i) => (
                <span key={i} className={i === hero.title.split(' ').length - 1 ? "text-[#5B1C6D] italic serif font-medium" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed mb-16 max-w-2xl font-medium">
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/demo">
                <Button size="lg" className="h-16 px-10 rounded-[24px] bg-[#5B1C6D] text-white hover:bg-[#4A1658] shadow-2xl shadow-[#5B1C6D]/20 transition-all text-lg group">
                  {hero.ctaPrimary || "Book Demo"} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              {hero.ctaSecondary && (
                <Link href="/about">
                  <Button variant="outline" size="lg" className="h-16 px-10 rounded-[24px] border-2 border-slate-200 bg-transparent text-[#475569] hover:bg-slate-50 hover:border-slate-300 text-lg transition-all">
                    {hero.ctaSecondary}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - High Contrast Deep Slate */}
      <section className="py-40 bg-[#0F172A] relative overflow-hidden rounded-t-[80px]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-topo" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-24 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 text-primary-soft font-bold text-xs uppercase tracking-widest">
                <AlertCircle className="w-5 h-5" />
                <span>The Operational Gap</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                {problem.title}
              </h2>
              <div className="h-1.5 w-20 bg-primary-soft rounded-full" />
              <p className="text-xl text-slate-300 leading-relaxed font-medium">
                {problem.text}
              </p>
            </div>
            
            <div className="p-12 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-soft/10 blur-3xl -z-10 group-hover:bg-primary-soft/20 transition-all" />
              <p className="font-bold text-[10px] text-primary-soft uppercase tracking-[0.3em] mb-6">Strategic Impact</p>
              <p className="text-2xl font-bold text-white leading-snug italic serif">
                &quot;{problem.highlight || "Manual fragmentation leads to clinical risk and operational exhaustion."}&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Airy & Geometric */}
      <section className="py-40 bg-[#FBF9FE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-24 space-y-8">
            <div className="inline-flex items-center gap-3 text-[#5B1C6D] font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-5 h-5" />
              <span>A New Standard</span>
            </div>
            <h2 className="text-[56px] lg:text-[72px] font-bold text-[#0F172A] tracking-tight leading-[1.0]">
              {solution.title}
            </h2>
            <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed font-medium">
              {solution.text}
            </p>
          </div>

          {solution.points && (
            <div className="grid md:grid-cols-3 gap-8">
              {solution.points.map((point, i) => (
                <div key={i} className="flex items-center gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#5B1C6D] shrink-0">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <span className="text-lg font-bold text-slate-900 tracking-tight">{point}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How It Works - The Process */}
      {howItWorks && (
        <section className="py-40 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-32 space-y-6">
              <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight">{howItWorks.title}</h2>
              <p className="text-slate-500 text-lg font-medium tracking-wide">A seamless transition from chaos to clinical precision.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16 relative">
              {howItWorks.steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-[32px] bg-slate-50 text-[#5B1C6D] font-bold text-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-[#5B1C6D] group-hover:text-white group-hover:shadow-xl group-hover:shadow-[#5B1C6D]/20 transition-all duration-500">
                    0{i + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Grid - Clinical Cards */}
      {features && (
        <section className="py-40 bg-[#FBF9FE]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[56px] lg:text-[72px] font-bold text-[#0F172A] tracking-tight leading-[0.9] text-center mb-32">
              Clinical <span className="text-[#5B1C6D] italic serif font-medium">Capabilites.</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.items.map((item, i) => (
                <div key={i} className="p-10 rounded-[48px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
                  {item.icon && (
                    <div className="w-16 h-16 rounded-[24px] bg-slate-50 flex items-center justify-center text-[#5B1C6D] mb-8 group-hover:bg-[#5B1C6D] group-hover:text-white transition-all">
                      {renderIcon(item.icon)}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits && (
        <section className="py-40 bg-white rounded-t-[80px]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-16">
                <h2 className="text-5xl lg:text-7xl font-bold text-[#0F172A] tracking-tight leading-tight">
                  Built for <br />
                  <span className="text-[#5B1C6D] italic serif font-medium">Impact.</span>
                </h2>
                <div className="grid gap-12">
                  {benefits.items.map((benefit, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#5B1C6D] shrink-0 group-hover:bg-[#5B1C6D] group-hover:text-white transition-all">
                        <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{benefit.title}</h3>
                        <p className="text-slate-500 leading-relaxed font-medium">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-[#0F172A] rounded-[56px] p-16 lg:p-24 shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B1C6D]/20 blur-[100px] rounded-full" />
                   <div className="relative z-10 space-y-10">
                      <PieChart className="w-16 h-16 text-primary-soft" />
                      <h3 className="text-4xl font-bold text-white leading-[1.1]">Outcome <br />Optimisation</h3>
                      <p className="text-xl text-slate-400 font-medium leading-relaxed">Transition from feature lists to business impact and clinical precision. Every metric we track is designed to improve care.</p>
                      <Link href="/demo">
                        <Button className="h-14 px-8 rounded-2xl bg-white text-[#0F172A] hover:bg-slate-100 transition-all font-bold group">
                          Request Full Audit <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA - Floating Studio Card */}
      <section className="py-40 bg-[#FBF9FE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[80px] bg-[#5B1C6D] py-32 px-12 text-center text-white relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(91,28,109,0.3)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/10 blur-[120px] rounded-full" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-16">
              <Zap className="w-16 h-16 mx-auto text-primary-soft animate-pulse" />
              <h2 className="text-[56px] lg:text-[88px] font-bold leading-[0.9] tracking-tighter">
                Ready to transform <br />
                <span className="text-white italic serif font-medium italic">your {category.toLowerCase()}?</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/demo">
                  <Button size="lg" className="h-16 px-12 text-xl rounded-2xl bg-white text-[#5B1C6D] hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-xl font-bold">
                    Book a Demo
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="h-16 px-12 text-xl rounded-2xl border-2 border-white/30 hover:bg-white/10 text-white transition-all font-bold">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Branding Footer */}
      <section className="py-20 text-center border-t border-slate-100 bg-white">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.5em]">CareMandate • Clinical Precision • 2024</p>
      </section>
    </main>
  );
}
