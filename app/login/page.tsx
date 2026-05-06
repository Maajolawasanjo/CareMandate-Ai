"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { login } from "@/app/actions/auth";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await login(formData);
    if (result?.error) {
      setError(result.error);
    }
  };
  return (
    <main className="bg-[#F8FAFC] min-h-screen flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-[500px] bg-white rounded-[24px] p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F1F5F9]">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold text-[#1E293B] mb-2">Welcome back</h2>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm font-bold text-center">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1E293B]">Email</label>
              <input 
                name="email"
                type="email" 
                required
                placeholder="your@example.com" 
                className="w-full h-[56px] px-4 rounded-lg border border-[#E2E8F0] bg-[#EAF2FF] text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1E293B]">Password</label>
            <div className="relative">
              <input 
                name="password"
                type="password" 
                required
                placeholder="........" 
                className="w-full h-[56px] px-4 rounded-lg border border-[#E2E8F0] bg-[#EAF2FF] text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link href="#" className="text-sm font-bold text-[#7C3AED] hover:underline">Forgot password?</Link>
          </div>

          <Button type="submit" size="lg" className="w-full h-[64px] rounded-2xl bg-[#5B1C6D] hover:bg-[#4A1658] text-white text-lg font-bold shadow-lg shadow-purple-900/20 transition-all">
            Sign In
          </Button>
        </form>

        <div className="relative my-10 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#E2E8F0]"></div></div>
          <span className="relative px-4 bg-white text-xs font-bold text-muted-foreground uppercase tracking-widest">OR</span>
        </div>

        <button className="w-full h-[56px] flex items-center justify-center gap-3 rounded-lg border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] transition-all font-bold text-[#1E293B]">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/smartlock/google.svg" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>
      </div>

      <p className="mt-12 text-sm text-[#64748B] text-center max-w-sm leading-relaxed">
        By signing in, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
      </p>
    </main>
  );
}
