"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, Search, Calendar, Clock, User, 
  ChevronRight, Newspaper, Sparkles, Filter
} from "lucide-react";
import React from "react";

const blogPosts = [
  {
    category: "Clinical Insights",
    title: "How AI is Reducing Hospital Readmissions in Private Care",
    excerpt: "New data shows that proactive clinical monitoring can reduce avoidable hospital visits by up to 15% through earlier intervention.",
    author: "Dr. Sarah Chen",
    date: "May 4, 2024",
    readTime: "8 min read",
    image: "/assets/ai-breakthrough.jpg",
    featured: true
  },
  {
    category: "Operations",
    title: "Scaling Your Home Care Agency from 50 to 500 Clients",
    excerpt: "The operational bottlenecks you'll face and how to build a unified system that scales with your growth.",
    author: "James Wilson",
    date: "April 28, 2024",
    readTime: "12 min read",
    image: "/assets/care-ops.jpg"
  },
  {
    category: "Technology",
    title: "The Future of GPS Verification in Care Delivery",
    excerpt: "Beyond check-ins: How high-precision location data is improving caregiver safety and clinical trust.",
    author: "Marcus Thorne",
    date: "April 22, 2024",
    readTime: "6 min read",
    image: "/assets/visits.jpg"
  },
  {
    category: "Governance",
    title: "Preparing for Your Next Audit: A Digital Checklist",
    excerpt: "Transition from manual spreadsheets to immutable digital logs. How to stay constant-audit ready.",
    author: "Elena Rodriguez",
    date: "April 15, 2024",
    readTime: "10 min read",
    image: "/assets/compliance.jpg"
  },
  {
    category: "Clinical",
    title: "The Impact of Visit Frequency on Patient Recovery",
    excerpt: "A deep dive into how optimized scheduling leads to faster clinical recovery milestones.",
    author: "Dr. Sarah Chen",
    date: "April 10, 2024",
    readTime: "7 min read",
    image: "/assets/clinical-eval.jpg"
  },
  {
    category: "Strategy",
    title: "Building a Multi-Site Care Network in 2024",
    excerpt: "Strategies for horizontal expansion without increasing administrative overhead.",
    author: "James Wilson",
    date: "April 5, 2024",
    readTime: "15 min read",
    image: "/assets/hero.png"
  },
  {
    category: "Workforce",
    title: "Caregiver Retention: Why Culture is Your Best Tool",
    excerpt: "How transparent scheduling and safety tracking improve staff satisfaction and retention.",
    author: "Elena Rodriguez",
    date: "March 30, 2024",
    readTime: "9 min read",
    image: "/assets/caregiver-management.jpg"
  }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(p => p.featured);
  const regularPosts = blogPosts.filter(p => !p.featured);

  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-32 pb-0 overflow-x-hidden">
      {/* 1. Compact Header */}
      <section className="px-6 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-topo opacity-[0.02] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-slate-100 pb-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[#5B1C6D] font-bold text-[10px] uppercase tracking-[0.3em]">
                <Newspaper className="w-4 h-4" />
                <span>Editorial Hub</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter">
                CareMandate <span className="text-[#5B1C6D] italic serif font-medium">Perspective.</span>
              </h1>
            </div>
            
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="h-14 pl-12 pr-6 rounded-2xl bg-white border border-slate-200 shadow-sm focus:border-[#5B1C6D] outline-none transition-all w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contained Featured Card */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          {featuredPost && (
            <div className="relative group rounded-[48px] overflow-hidden bg-white border border-slate-100 shadow-xl flex flex-col lg:flex-row h-full lg:h-[480px] hover:shadow-2xl transition-all duration-700">
               <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">
                  <img 
                    src={featuredPost.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                    alt={featuredPost.title}
                  />
                  <div className="absolute top-6 left-6">
                     <span className="px-5 py-2 rounded-full bg-[#5B1C6D] text-white text-[9px] font-bold uppercase tracking-widest shadow-xl">
                        Featured Analysis
                     </span>
                  </div>
               </div>
               <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-4 text-[#5B1C6D] text-[10px] font-bold uppercase tracking-widest">
                     <span>{featuredPost.category}</span>
                     <span className="w-1 h-1 bg-[#5B1C6D]/20 rounded-full" />
                     <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                     {featuredPost.title}
                  </h2>
                  <p className="text-base text-slate-500 leading-relaxed font-medium line-clamp-3">
                     {featuredPost.excerpt}
                  </p>
                  <div className="pt-6 flex items-center justify-between border-t border-slate-50">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#5B1C6D]/5 flex items-center justify-center text-[#5B1C6D] font-bold">
                           {featuredPost.author.charAt(0)}
                        </div>
                        <div>
                           <p className="text-slate-900 font-bold text-xs">{featuredPost.author}</p>
                           <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-0.5">{featuredPost.date}</p>
                        </div>
                     </div>
                     <Link href={`/resources/blog/${featuredPost.title.toLowerCase().replace(/ /g, '-')}`}>
                        <Button className="h-12 px-6 rounded-xl bg-[#5B1C6D] text-white hover:bg-slate-900 transition-all group text-sm font-bold gap-2">
                           Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Balanced Grid */}
      <section className="py-32 px-6 bg-white rounded-t-[64px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {regularPosts.map((post, i) => (
              <Link key={i} href={`/resources/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="group block">
                <div className="space-y-6">
                  <div className="relative rounded-[32px] overflow-hidden aspect-[1.4] shadow-md">
                    <img 
                      src={post.image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                      alt={post.title}
                    />
                    <div className="absolute top-5 left-5">
                       <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#5B1C6D] text-[9px] font-bold uppercase tracking-widest shadow-sm">
                          {post.category}
                       </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em]">
                       <span>{post.date}</span>
                       <span className="w-1 h-1 bg-slate-200 rounded-full" />
                       <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#5B1C6D] transition-colors leading-[1.3] tracking-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-medium line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-32 p-12 lg:p-20 rounded-[64px] bg-[#0F172A] relative overflow-hidden text-center group">
             <div className="absolute top-0 left-0 w-full h-full bg-topo opacity-[0.03]" />
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B1C6D]/20 blur-[100px] rounded-full" />
             
             <div className="relative z-10 max-w-2xl mx-auto space-y-10">
                <Sparkles className="w-16 h-16 text-primary-soft mx-auto" />
                <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter leading-tight">
                   Stay ahead in <br />
                   <span className="text-primary-soft italic serif font-medium">clinical precision.</span>
                </h2>
                <p className="text-xl text-slate-400 font-medium">Join 5,000+ care leaders receiving our weekly insights on clinical operations and technology.</p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                   <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="h-16 px-6 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-primary-soft transition-all w-full"
                   />
                   <Button className="h-16 px-10 rounded-2xl bg-primary-soft text-[#0F172A] font-bold hover:bg-white transition-all whitespace-nowrap">
                      Subscribe
                   </Button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Final Branding */}
      <section className="py-20 text-center bg-white border-t border-slate-100">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em]">CareMandate • Editorial Insights • 2024</p>
      </section>
    </main>
  );
}
