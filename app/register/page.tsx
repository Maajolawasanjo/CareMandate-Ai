"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, ShieldCheck, Zap, Activity, ArrowRight, UserPlus, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate registration
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Redirect to home after 2 seconds
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-40 pb-32 flex flex-col items-center justify-center bg-[#FBF9FE] relative overflow-hidden px-6">
      {/* 1. Back to Home Button */}
      <div className="absolute top-12 left-12 z-20">
        <Link href="/">
           <button className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-slate-100 text-slate-500 font-bold text-xs uppercase tracking-widest hover:text-[#5B1C6D] hover:border-[#5B1C6D] transition-all shadow-sm group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
           </button>
        </Link>
      </div>

      {/* Immersive Background */}
      <div className="absolute inset-0 bg-topo opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#5B1C6D]/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#5B1C6D]/5 rounded-full blur-[120px] animate-pulse" />

      <div className="w-full max-w-[580px] relative z-10">
        <div 
          className="bg-white rounded-[56px] p-10 lg:p-16 shadow-[0_40px_100px_-20px_rgba(91,28,109,0.08)] border border-slate-100 overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-soft via-[#5B1C6D] to-primary-soft" />
          
          {/* Header */}
          <div className="space-y-8 text-center mb-12">
            <div className="flex justify-center">
               <div className="w-16 h-16 rounded-3xl bg-[#5B1C6D]/5 flex items-center justify-center text-[#5B1C6D]">
                  <UserPlus className="w-8 h-8" />
               </div>
            </div>
            <div className="space-y-2">
               <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tighter">Onboarding.</h1>
               <p className="text-slate-500 font-medium">Request access to the CareMandate ecosystem.</p>
            </div>
          </div>

          {/* Social SSO */}
          <button className="w-full h-16 flex items-center justify-center gap-4 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-all font-bold text-slate-900 shadow-sm group mb-10 text-sm">
            <div className="w-6 h-6 flex items-center justify-center">
               <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
               </svg>
            </div>
            Continue with Clinical SSO
          </button>

          <div className="relative text-center mb-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-50"></div></div>
            <span className="relative px-6 bg-white text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em]">OR</span>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
               <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                  <input required placeholder="Sarah" className="w-full h-16 px-6 rounded-2xl border border-slate-100 bg-[#FBF9FE] text-slate-900 font-bold focus:border-[#5B1C6D] focus:bg-white outline-none transition-all placeholder:text-slate-300 placeholder:font-normal" />
               </div>
               <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                  <input required placeholder="Chen" className="w-full h-16 px-6 rounded-2xl border border-slate-100 bg-[#FBF9FE] text-slate-900 font-bold focus:border-[#5B1C6D] focus:bg-white outline-none transition-all placeholder:text-slate-300 placeholder:font-normal" />
               </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Professional Email</label>
              <input 
                required
                type="email" 
                placeholder="dr.chen@hospital.com" 
                className="w-full h-16 px-6 rounded-2xl border border-slate-100 bg-[#FBF9FE] text-slate-900 font-bold focus:border-[#5B1C6D] focus:bg-white outline-none transition-all placeholder:text-slate-300 placeholder:font-normal"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Organization / Network Name</label>
              <input 
                required
                placeholder="Central City Health Network" 
                className="w-full h-16 px-6 rounded-2xl border border-slate-100 bg-[#FBF9FE] text-slate-900 font-bold focus:border-[#5B1C6D] focus:bg-white outline-none transition-all placeholder:text-slate-300 placeholder:font-normal"
              />
            </div>

            <Button disabled={isSubmitting} size="lg" className="w-full h-16 rounded-2xl bg-[#5B1C6D] text-white hover:bg-slate-900 transition-all font-bold text-lg shadow-xl shadow-[#5B1C6D]/20 group">
              {isSubmitting ? "Processing..." : "Create Organization"}
              {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </Button>
          </form>

          <p className="mt-12 text-center text-slate-500 font-medium">
             Already part of a network? <br />
             <Link href="/login" className="text-[#5B1C6D] font-bold hover:underline">Log in to Access</Link>
          </p>

          {showSuccess && (
            <div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-8">
                 <Check className="w-10 h-10 stroke-[3]" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Request Received</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Your enterprise request has been logged. Redirecting you to the clinical dashboard...
              </p>
            </div>
          )}
        </div>

        {/* Security Trust Footnote */}
        <div className="mt-12 flex items-center justify-center gap-8 opacity-40 grayscale grayscale-100 scale-90">
           <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Enterprise Secured</span>
           </div>
           <div className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Verified Credentials</span>
           </div>
        </div>
      </div>
    </main>
  );
}
