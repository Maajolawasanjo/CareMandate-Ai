"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const features = [
  { title: "Care Operations", href: "/features/care-operations", desc: "Unified clinical system" },
  { title: "Intelligent Scheduling", href: "/features/scheduling", desc: "Automated planning" },
  { title: "Visit Tracking", href: "/features/visit-tracking", desc: "Real-time field visibility" },
  { title: "Staff Management", href: "/features/caregiver-management", desc: "Workforce coordination" },
  { title: "Clinical Analytics", href: "/features/analytics", desc: "Performance insights" },
  { title: "Compliance Hub", href: "/features/compliance", desc: "Audit readiness" },
];

const solutions = [
  { title: "Home Care", href: "/solutions/home-care", desc: "For private providers" },
  { title: "Hospitals", href: "/solutions/hospitals", desc: "Post-acute recovery" },
  { title: "Elderly Care", href: "/solutions/elderly-care", desc: "Assisted living safety" },
  { title: "Care Networks", href: "/solutions/care-networks", desc: "Enterprise operations" },
];

const resources = [
  { title: "Blog", href: "/resources/blog", desc: "Industry insights" },
  { title: "Case Studies", href: "/resources/case-studies", desc: "Real provider results" },
  { title: "Help Center", href: "/resources/help-center", desc: "Technical support" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const windowHeight = scrollHeight - clientHeight;
      const currentScroll = window.scrollY;
      
      if (windowHeight > 0) {
        const progress = (currentScroll / windowHeight) * 100;
        setScrollProgress(progress);
      }
      
      setIsScrolled(currentScroll > 10);
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll();
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-xl py-3 shadow-lg" : "bg-white py-5 border-b border-slate-100"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight group">
          <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110 relative">
             <Image src="/logo.svg" alt="Logo" width={36} height={36} />
          </div>
          <span className="text-slate-900 group-hover:text-primary-ui transition-colors">CareMandate</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Features Dropdown */}
          <div className="relative group px-4 py-2">
            <button className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-primary-ui transition-colors">
              Features <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-2">
                {features.map((item, i) => (
                  <Link key={i} href={item.href} className="p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <p className="text-sm font-bold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="relative group px-4 py-2">
            <button className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-primary-ui transition-colors">
              Solutions <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-2">
                {solutions.map((item, i) => (
                  <Link key={i} href={item.href} className="p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <p className="text-sm font-bold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-primary-ui transition-colors">Company</Link>
          <Link href="/admin" className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-primary-ui transition-colors">Admin</Link>

          {/* Resources Dropdown */}
          <div className="relative group px-4 py-2">
            <button className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-primary-ui transition-colors">
              Resources <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full right-0 mt-2 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 p-6 flex flex-col gap-2">
                {resources.map((item, i) => (
                  <Link key={i} href={item.href} className="p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <p className="text-sm font-bold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/login" className="text-sm font-bold text-slate-600 hover:text-[#5B1C6D] transition-colors">Sign In</Link>
          <Link href="/demo">
            <Button size="lg" className="h-11 px-6 rounded-xl bg-[#5B1C6D] text-white hover:bg-[#4A1658] shadow-lg shadow-[#5B1C6D]/20 transition-all active:scale-95">
              Book a Demo
              <ArrowRight className="ml-2 w-4 h-4 text-white" />
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-slate-900" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-7 h-7" />
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white p-6 flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="font-bold text-2xl tracking-tight">CareMandate</div>
            <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
          </div>
          <div className="space-y-8 flex-grow">
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Features</p>
              {features.map((item, i) => (
                <Link key={i} href={item.href} className="block text-2xl font-bold text-slate-900">{item.title}</Link>
              ))}
            </div>
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Company</p>
              <Link href="/about" className="block text-2xl font-bold text-slate-900">Our Story</Link>
              <Link href="/about" className="block text-2xl font-bold text-slate-900">Careers</Link>
              <Link href="/admin" className="block text-2xl font-bold text-slate-900">Admin Dashboard</Link>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col gap-4">
            <Link href="/demo">
              <Button size="lg" className="w-full h-14 rounded-2xl bg-[#5B1C6D] text-white">Book a Demo</Button>
            </Link>
            <Link href="/login" className="text-center font-bold py-4">Sign In</Link>
          </div>
        </div>
      )}

      {/* PROGRESS BAR */}
      <div 
        className="absolute bottom-0 left-0 h-[3px] bg-[#5B1C6D] transition-all duration-150 ease-out z-50 shadow-[0_2px_10px_rgba(91,28,109,0.4)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
}
