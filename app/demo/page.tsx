"use client";

import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, Calendar, Clock, Sparkles, Send, 
  ArrowRight, X, Check, Zap, Activity, ShieldCheck, TrendingUp 
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import { bookDemo } from "@/app/actions/demo";

export default function DemoPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedTime || !selectedDate) return;
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const date = selectedDate ? `December ${selectedDate}, 2024` : "December 14, 2024";

    if (email && selectedTime && selectedDate) {
      const result = await bookDemo({ email, date, time: selectedTime });
      if (result.success) {
        setIsSuccess(true);
      } else {
        alert("Failed to book demo");
      }
    } else {
      alert("Please select a date and time");
    }
    
    setIsSubmitting(false);
  };

  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-40 pb-32 overflow-x-hidden relative">
      {/* Background Texture Layer */}
      <div className="absolute inset-0 bg-topo opacity-10 pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-24 items-start">
          
          {/* Left: Conversion Copy */}
          <div className="space-y-20 lg:pr-12">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 text-[#5B1C6D] font-bold text-xs uppercase tracking-[0.3em]">
                <Sparkles className="w-5 h-5" />
                <span>Clinical Strategy Session</span>
              </div>
              <h1 className="text-[72px] lg:text-[100px] font-bold text-[#0F172A] leading-[0.85] tracking-tighter">
                See it in <br />
                <span className="text-[#5B1C6D] italic serif font-medium">action.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-xl font-medium">
                Experience the clinical operating system designed to eliminate manual fragmentation and clinical risk across your entire organization.
              </p>
            </div>

            <div className="space-y-12">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Strategic Walkthrough:</h3>
              <div className="grid gap-12">
                {[
                  { title: "Operational Audit", desc: "A deep dive into your current clinical bottlenecks and data silos.", icon: Zap },
                  { title: "Unified Dashboard", desc: "Real-time task tracking, field visibility, and patient outcomes.", icon: Activity },
                  { title: "Compliance Vault", desc: "A tour of our immutable, audit-ready data structures.", icon: ShieldCheck },
                  { title: "Scaling Roadmap", desc: "Custom implementation path for multi-site expansion.", icon: TrendingUp }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-50 flex items-center justify-center text-[#5B1C6D] shrink-0 group-hover:bg-[#5B1C6D] group-hover:text-white transition-all duration-500">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-slate-900">{item.title}</p>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: The High-Fidelity Booking Engine */}
          <div className="relative">
            <div className="bg-white rounded-[56px] p-10 lg:p-16 shadow-[0_50px_100px_-20px_rgba(91,28,109,0.1)] border border-slate-100 relative z-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#5B1C6D] via-primary-soft to-[#5B1C6D]" />
              
              <div className="mb-12 space-y-4">
                <div className="flex items-center gap-2 text-[#5B1C6D]">
                   <Sparkles className="w-5 h-5" />
                   <span className="text-xs font-bold uppercase tracking-widest">Priority Access</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Schedule Your Session</h3>
              </div>

              {/* Step 1: Visual Scheduler Mock */}
              <div className="space-y-10">
                <div className="space-y-6">
                   <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select Date</span>
                     <span className="text-sm font-bold text-slate-900">December 2024</span>
                   </div>
                   <div className="grid grid-cols-7 gap-2">
                     {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                       <div key={i} className="h-10 flex items-center justify-center text-[10px] font-bold text-slate-300 uppercase">{d}</div>
                     ))}
                     {[...Array(7)].map((_, i) => {
                       const dayNum = 14 + i;
                       return (
                        <button 
                          key={i} 
                          type="button"
                          onClick={() => setSelectedDate(dayNum)}
                          className={`h-12 rounded-2xl flex items-center justify-center text-sm font-bold transition-all hover:scale-105 active:scale-95 ${selectedDate === dayNum ? 'bg-[#5B1C6D] text-white shadow-lg shadow-[#5B1C6D]/20' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                        >
                          {dayNum}
                        </button>
                       );
                     })}
                   </div>
                </div>

                <div className="space-y-6">
                   <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available Times (GMT)</span>
                     <Clock className="w-4 h-4 text-slate-300" />
                   </div>
                   <div className="grid grid-cols-3 gap-3">
                     {["09:00", "11:30", "14:00", "15:30", "16:15", "17:00"].map((time) => (
                       <button 
                         key={time} 
                         type="button"
                         onClick={() => setSelectedTime(time)}
                         className={`h-12 rounded-xl text-xs font-bold border-2 transition-all hover:scale-105 active:scale-95 ${selectedTime === time ? 'border-[#5B1C6D] bg-[#5B1C6D]/5 text-[#5B1C6D]' : 'border-slate-100 text-slate-500 hover:border-slate-200'}`}
                       >
                         {time}
                       </button>
                     ))}
                   </div>
                </div>

                {/* Step 2: Contact Details */}
                <form className="space-y-10 pt-4 border-t border-slate-100" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block ml-1">Work Email</label>
                    <input name="email" required type="email" placeholder="john@hospital.com" className="w-full h-12 bg-transparent border-b-2 border-slate-100 focus:border-[#5B1C6D] transition-all outline-none px-1 text-slate-900 font-bold placeholder:text-slate-300 placeholder:font-normal" />
                  </div>

                  <Button 
                    size="lg" 
                    type="submit"
                    disabled={isSubmitting || !selectedTime || !selectedDate}
                    className="w-full h-16 rounded-2xl bg-[#5B1C6D] text-white hover:bg-[#4A1658] transition-all shadow-xl shadow-[#5B1C6D]/20 group text-lg disabled:opacity-50"
                  >
                    {isSubmitting ? "Securing slot..." : "Confirm Booking"}
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            onClick={() => setIsSuccess(false)}
          />
          
          <div className="relative w-full max-w-lg bg-white rounded-[56px] p-12 lg:p-16 shadow-2xl text-center">
            <div className="w-24 h-24 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-10">
              <Check className="w-12 h-12 stroke-[3]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Booking <span className="text-[#5B1C6D] italic serif font-medium">Confirmed.</span>
            </h2>
            
            <p className="text-lg text-slate-500 leading-relaxed mb-12">
              We&apos;ve sent a calendar invite to your inbox. Get ready for a precision tour of the future of clinical care.
            </p>
            
            <div className="space-y-4">
              <Link href="/">
                <Button className="w-full h-16 rounded-2xl bg-[#5B1C6D] text-white hover:bg-[#4A1658] transition-all shadow-lg text-lg">
                  Return to Homepage
                </Button>
              </Link>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:text-[#5B1C6D] transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trust Bar Footer */}
      <div className="mt-40 border-t border-slate-100 py-16 opacity-40 grayscale flex justify-center gap-16 px-6">
         {["Mayo Clinic", "Cleveland Clinic", "NHS Trust", "Stanford Health"].map((logo) => (
           <span key={logo} className="text-xl font-bold text-slate-400 uppercase tracking-widest serif italic">{logo}</span>
         ))}
      </div>
    </main>
  );
}
