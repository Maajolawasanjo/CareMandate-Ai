"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Search, LifeBuoy, BookOpen, MessageCircle, 
  Users, ShieldCheck, Zap, BarChart3, HelpCircle,
  FileQuestion, Mail, Phone, ChevronRight
} from "lucide-react";
import React from "react";

const categories = [
  { icon: Users, title: "Workforce Management", desc: "Scheduling, caregiver profiles, and mobile app usage." },
  { icon: ShieldCheck, title: "Compliance & Audits", desc: "Digital logs, verification standards, and reporting." },
  { icon: BarChart3, title: "Billing & Analytics", desc: "Invoicing integration, data exports, and clinical insights." },
  { icon: Zap, title: "Getting Started", desc: "Onboarding guides, initial setup, and team training." },
  { icon: BookOpen, title: "Developer APIs", desc: "Technical documentation for hospital-HIS integrations." },
  { icon: HelpCircle, title: "Account & Safety", desc: "Login issues, security settings, and data privacy." }
];

const topArticles = [
  "How to enable GPS-verified check-ins",
  "Setting up multi-location rosters",
  "Integrating CareMandate with your HIS",
  "Generating audit-ready compliance reports",
  "Troubleshooting mobile app notifications"
];

export default function HelpCenterPage() {
  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-40 pb-0 overflow-x-hidden">
      {/* 1. Search Hero */}
      <section className="px-6 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-topo opacity-[0.05] pointer-events-none -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#5B1C6D]/5 border border-[#5B1C6D]/10 text-[#5B1C6D] text-xs font-bold uppercase tracking-widest">
            <LifeBuoy className="w-4 h-4" />
            <span>Support & Documentation</span>
          </div>
          <h1 className="text-[64px] lg:text-[88px] font-bold text-slate-900 leading-[0.9] tracking-tighter">
            How can we <br />
            <span className="text-[#5B1C6D] italic serif font-medium">help you?</span>
          </h1>
          
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute -inset-1 bg-[#5B1C6D]/10 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
               <input 
                type="text" 
                placeholder="Search for articles, guides, or troubleshooting..." 
                className="w-full h-20 pl-16 pr-8 rounded-[32px] bg-white border border-slate-100 shadow-2xl outline-none focus:border-[#5B1C6D] transition-all text-lg font-medium"
               />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Grid */}
      <section className="py-24 px-6 bg-white rounded-t-[80px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="p-10 rounded-[48px] bg-[#FBF9FE] border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
                 <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#5B1C6D] mb-8 group-hover:bg-[#5B1C6D] group-hover:text-white transition-all">
                    <cat.icon className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h3>
                 <p className="text-slate-500 font-medium leading-relaxed mb-8">{cat.desc}</p>
                 <div className="flex items-center gap-2 text-[#5B1C6D] font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                    Browse Guides <ChevronRight className="w-4 h-4" />
                 </div>
              </div>
            ))}
          </div>

          {/* Top Articles & Support Sidebar */}
          <div className="mt-40 grid lg:grid-cols-3 gap-20">
             <div className="lg:col-span-2 space-y-12">
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-4">
                   {topArticles.map((art, i) => (
                      <div key={i} className="p-8 rounded-[32px] bg-white border border-slate-100 hover:border-[#5B1C6D]/20 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer">
                         <div className="flex items-center gap-6">
                            <FileQuestion className="w-6 h-6 text-slate-300" />
                            <span className="text-lg font-bold text-slate-700 group-hover:text-[#5B1C6D] transition-colors">{art}</span>
                         </div>
                         <ChevronRight className="w-6 h-6 text-slate-200 group-hover:text-[#5B1C6D] transition-all" />
                      </div>
                   ))}
                </div>
             </div>

             <div className="space-y-12">
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Need Support?</h2>
                <div className="p-10 rounded-[56px] bg-[#0F172A] text-white space-y-10 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#5B1C6D]/30 blur-[60px] rounded-full" />
                   
                   <div className="space-y-8 relative z-10">
                      <div className="flex items-center gap-6 group">
                         <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <MessageCircle className="w-6 h-6 text-primary-soft" />
                         </div>
                         <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Chat</p>
                            <p className="text-lg font-bold">Start an instant chat</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6 group">
                         <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <Mail className="w-6 h-6 text-primary-soft" />
                         </div>
                         <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Support</p>
                            <p className="text-lg font-bold">support@caremandate.ai</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6 group">
                         <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <Phone className="w-6 h-6 text-primary-soft" />
                         </div>
                         <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enterprise Support</p>
                            <p className="text-lg font-bold">+44 (0) 20 1234 5678</p>
                         </div>
                      </div>
                   </div>

                   <Button className="w-full h-16 rounded-2xl bg-primary-soft text-[#0F172A] font-bold hover:bg-white transition-all text-lg">
                      Submit a Request
                   </Button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Final Branding */}
      <section className="py-20 text-center bg-white border-t border-slate-100">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em]">CareMandate • Help & Knowledge Base • 2024</p>
      </section>
    </main>
  );
}
