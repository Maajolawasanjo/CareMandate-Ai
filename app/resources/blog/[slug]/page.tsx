"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowLeft, Calendar, Clock, User, Share2, 
  MessageCircle, Bookmark, Sparkles, HeartPulse
} from "lucide-react";
import React from "react";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Format slug for display
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="bg-[#FBF9FE] min-h-screen pt-48 pb-32 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link href="/resources/blog" className="inline-flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-[#5B1C6D] transition-colors mb-16 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to perspective
        </Link>

        {/* Article Header */}
        <div className="space-y-12 mb-20">
          <div className="inline-flex items-center gap-3 text-[#5B1C6D] font-bold text-xs uppercase tracking-widest">
            <Sparkles className="w-5 h-5" />
            <span>Clinical Insights</span>
          </div>
          <h1 className="text-[56px] lg:text-[80px] font-bold text-slate-900 leading-[0.95] tracking-tighter">
            {title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-slate-100">
             <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#5B1C6D]/5 flex items-center justify-center text-[#5B1C6D] font-bold text-xl">
                   S
                </div>
                <div>
                   <p className="text-slate-900 font-bold text-lg">Dr. Sarah Chen</p>
                   <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Chief Clinical Officer</p>
                </div>
             </div>
             <div className="flex items-center gap-8 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> May 4, 2024</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 8 min read</span>
             </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-[64px] overflow-hidden aspect-[21/9] mb-20 shadow-2xl">
           <img src="/assets/ai-breakthrough.jpg" className="w-full h-full object-cover" alt="Article Hero" />
        </div>

        {/* Article Content */}
        <article className="prose prose-slate prose-xl max-w-none">
           <p className="text-2xl text-slate-600 leading-relaxed font-medium mb-12">
              As healthcare systems globally move toward more integrated, home-based models, the role of artificial intelligence in predicting and preventing hospital readmissions has become a cornerstone of clinical strategy.
           </p>

           <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">The readmission challenge</h2>
           <p className="text-slate-500 mb-10">
              Fragmented data and manual tracking have historically left a &quot;visibility gap&quot; between hospital discharge and the patient&apos;s recovery at home. This gap is where most preventable complications arise. Traditional home care systems rely on paper logs or disconnected apps that don&apos;t provide real-time alerts to clinical teams.
           </p>

           <div className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-xl my-16 space-y-8">
              <HeartPulse className="w-12 h-12 text-[#5B1C6D]" />
              <h3 className="text-2xl font-bold text-slate-900">Key Finding: Precision Matters</h3>
              <p className="text-slate-500 italic font-medium leading-relaxed">
                 &quot;By implementing GPS-verified task logging and real-time clinical dashboards, we observed a 15% reduction in avoidable readmissions within the first six months. The secret wasn&apos;t just data—it was the precision of the delivery.&quot;
              </p>
           </div>

           <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Bridging the Gap</h2>
           <p className="text-slate-500 mb-10">
              CareMandate&apos;s approach focuses on three core pillars: Automated Documentation, Real-time Field Verification, and Intelligent Alerting. When a caregiver in the field logs a clinical task, that data is instantly verified against hospital-level discharge protocols.
           </p>

           <ul className="space-y-4 text-slate-600 font-medium mb-12 list-none p-0">
              <li className="flex gap-4 items-center">
                 <div className="w-2 h-2 bg-[#5B1C6D] rounded-full" />
                 Instant verification of medication adherence.
              </li>
              <li className="flex gap-4 items-center">
                 <div className="w-2 h-2 bg-[#5B1C6D] rounded-full" />
                 GPS-verified visits ensuring patient safety.
              </li>
              <li className="flex gap-4 items-center">
                 <div className="w-2 h-2 bg-[#5B1C6D] rounded-full" />
                 Real-time escalation for clinical red flags.
              </li>
           </ul>
        </article>

        {/* Sharing & Interaction */}
        <div className="mt-32 pt-16 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="flex items-center gap-10">
              <button className="flex items-center gap-3 text-slate-400 hover:text-[#5B1C6D] font-bold text-sm uppercase tracking-widest transition-colors">
                 <Share2 className="w-5 h-5" /> Share
              </button>
              <button className="flex items-center gap-3 text-slate-400 hover:text-[#5B1C6D] font-bold text-sm uppercase tracking-widest transition-colors">
                 <Bookmark className="w-5 h-5" /> Save
              </button>
           </div>
           
           <Link href="/demo">
              <Button size="lg" className="h-16 px-10 rounded-2xl bg-[#5B1C6D] text-white hover:bg-slate-900 transition-all font-bold group">
                 Discuss with an Expert <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
           </Link>
        </div>
      </div>
    </main>
  );
}
