"use client";

import { ArrowRight, ShieldCheck, Target, Heart, Zap, Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-40 pb-0 overflow-x-hidden">
      {/* Hero Section - Visual Narrative */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative">
        <div className="absolute inset-0 bg-[#FBF9FE] pointer-events-none -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-topo opacity-10" />
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#5B1C6D]/5 blur-[180px] rounded-full" />
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          <div className="max-w-3xl relative z-10">
            <span className="text-[11px] font-bold text-[#5B1C6D] uppercase tracking-[0.4em] mb-10 block">
              Our Mission
            </span>
            <h1 className="text-[56px] lg:text-[80px] font-bold text-[#0F172A] leading-[1.0] tracking-tighter mb-10">
              Redefining the <br />
              <span className="text-[#5B1C6D] italic serif font-medium">clinical standard</span> <br />
              for modern care.
            </h1>
            <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-xl font-medium">
              CareMandate was built because care providers deserve a clinical operating system as precise as the care they provide to their patients.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative rounded-[56px] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/3] bg-slate-50">
              <Image 
                src="/assets/about.png" 
                alt="Clinical Operations" 
                fill 
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Narrative Section - Deep Slate BREAK */}
      <section className="py-40 bg-[#0F172A] relative overflow-hidden rounded-t-[80px]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-topo" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                The problem <br />
                <span className="text-primary-soft italic serif font-medium">we solve.</span>
              </h2>
              <div className="h-1.5 w-20 bg-primary-soft rounded-full" />
            </div>
            
            <div className="space-y-8">
              <p className="text-xl text-slate-300 leading-relaxed font-medium">
                For too long, healthcare operations have been held back by fragmented tools, paper logs, and disconnected workflows. 
              </p>
              <p className="text-xl text-slate-400 leading-relaxed">
                This doesn&apos;t just slow down business—it impacts the quality of life for caregivers and the safety of patients. We bridge that gap with digital precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Minimalist & Airy */}
      <section className="py-40 max-w-7xl mx-auto px-6 bg-[#FBF9FE]">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-8">
          <h2 className="text-[56px] lg:text-[72px] font-bold text-[#0F172A] tracking-tight leading-[0.9]">
            The principles of <br />
            <span className="text-[#5B1C6D] italic serif font-medium">Precision.</span>
          </h2>
          <div className="space-y-4 max-w-sm">
             <div className="h-1 w-12 bg-[#5B1C6D]" />
             <p className="text-lg text-slate-500 font-medium">
               Our DNA is clinical. Every line of code is written with patient outcomes in mind.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-20">
          {[
            { icon: ShieldCheck, title: "Clinical Integrity", desc: "We maintain the highest standards of medical data security and clinical validation protocols." },
            { icon: Target, title: "Operational Focus", desc: "Everything we build is designed to eliminate friction and accelerate the delivery of care." },
            { icon: Heart, title: "Human Centricity", desc: "We don't just build for systems; we build for the humans who use them and those they care for." }
          ].map((v, i) => (
            <div key={i} className="space-y-8">
              <div className="text-[#5B1C6D]">
                <v.icon className="w-12 h-12 stroke-[1.5]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REDESIGNED: High-Fidelity Contact & HQ Section */}
      <section className="relative py-40 bg-[#0F172A] overflow-hidden rounded-[80px] mx-4 mb-4 shadow-2xl">
        {/* Luminous Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5B1C6D]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 bg-topo opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-32 items-start">
            
            {/* Left: HQ Detail Cards */}
            <div className="space-y-20">
              <div className="space-y-8">
                <span className="text-[11px] font-bold text-primary-soft uppercase tracking-[0.4em] block">
                  Connect with us
                </span>
                <h2 className="text-[56px] lg:text-[80px] font-bold text-white leading-[1.0] tracking-tighter">
                  Let&apos;s talk <br />
                  <span className="text-primary-soft italic serif font-medium">precision.</span>
                </h2>
              </div>

              <div className="grid gap-12">
                <div className="group space-y-4">
                  <div className="flex items-center gap-4 text-primary-soft">
                    <MapPin className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">Global Headquarters</span>
                  </div>
                  <p className="text-2xl font-bold text-white leading-snug">
                    12 Precision Way, Tech District<br />
                    <span className="text-slate-400">London, EC1V 4AD</span>
                  </p>
                </div>

                <div className="group space-y-4">
                  <div className="flex items-center gap-4 text-primary-soft">
                    <Mail className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">General Inquiries</span>
                  </div>
                  <p className="text-2xl font-bold text-white hover:text-primary-soft transition-colors cursor-pointer">
                    hello@caremandate.ai
                  </p>
                </div>

                <div className="group space-y-4">
                  <div className="flex items-center gap-4 text-primary-soft">
                    <Globe className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">Clinical Support</span>
                  </div>
                  <p className="text-2xl font-bold text-white">
                    support@caremandate.ai
                  </p>
                </div>
              </div>
            </div>

            {/* Right: The High-Contrast "Studio" Form */}
            <div className="relative pt-10 lg:pt-0">
              <div className="bg-white rounded-[56px] p-12 lg:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-soft via-[#5B1C6D] to-primary-soft" />
                
                <div className="mb-12 space-y-4">
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Direct Inquiry</h3>
                  <p className="text-slate-500 font-medium">Please fill out the form below and our clinical team will contact you within 24 hours.</p>
                </div>

                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block ml-1">Your Full Name</label>
                      <input type="text" placeholder="e.g. John Doe" className="w-full h-12 bg-transparent border-b-2 border-slate-100 focus:border-[#5B1C6D] transition-all outline-none px-1 text-slate-900 font-bold placeholder:text-slate-300 placeholder:font-normal" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block ml-1">Email Address</label>
                      <input type="email" placeholder="e.g. john@hospital.com" className="w-full h-12 bg-transparent border-b-2 border-slate-100 focus:border-[#5B1C6D] transition-all outline-none px-1 text-slate-900 font-bold placeholder:text-slate-300 placeholder:font-normal" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block ml-1">Subject Area</label>
                    <select className="w-full h-12 bg-transparent border-b-2 border-slate-100 focus:border-[#5B1C6D] transition-all outline-none px-1 text-slate-900 font-bold appearance-none">
                      <option>General Inquiry</option>
                      <option>Request a Demo</option>
                      <option>Clinical Compliance</option>
                      <option>Technical Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block ml-1">Message Detail</label>
                    <textarea rows={3} placeholder="How can we help your organization?" className="w-full bg-transparent border-b-2 border-slate-100 focus:border-[#5B1C6D] transition-all outline-none px-1 text-slate-900 font-bold placeholder:text-slate-300 placeholder:font-normal resize-none"></textarea>
                  </div>

                  <Button size="lg" className="w-full h-16 rounded-2xl bg-[#5B1C6D] text-white hover:bg-[#4A1658] transition-all shadow-xl shadow-[#5B1C6D]/20 group text-lg">
                    Submit Inquiry
                    <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section - Final Rounding */}
      <section className="max-w-7xl mx-auto px-6 mb-20 mt-32">
        <div className="rounded-[56px] bg-[#5B1C6D] py-24 px-12 text-center text-white relative overflow-hidden group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/10 blur-[120px] rounded-full" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-12">
            <Zap className="w-12 h-12 mx-auto text-primary-soft animate-pulse" />
            <h2 className="text-[48px] lg:text-[72px] font-bold leading-[1.1] tracking-tight">
              Ready to redefine <br />
              your operations?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/demo">
                <Button size="lg" className="h-16 px-12 text-lg rounded-2xl bg-white text-[#5B1C6D] hover:bg-slate-50 transition-all hover:scale-105 active:scale-95">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="h-16 px-12 text-lg rounded-2xl border-2 border-white/30 hover:bg-white/10 text-white transition-all">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Bottom Branding */}
      <section className="py-20 text-center">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.5em]">CareMandate • Clinical Precision • 2024</p>
      </section>
    </main>
  );
}
