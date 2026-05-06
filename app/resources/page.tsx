"use client";

import { motion } from "framer-motion";
import { Newspaper, BookOpen, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ResourcesHub() {
  const resources = [
    { icon: Newspaper, title: "Blog", description: "Insights on care operations, EVV, and workforce management.", href: "/resources/blog" },
    { icon: BookOpen, title: "Case Studies", description: "Real results from real-world care providers.", href: "/resources/case-studies" },
    { icon: HelpCircle, title: "Help Center", description: "Technical support, FAQs, and documentation.", href: "/resources/help-center" }
  ];

  return (
    <main className="bg-background pt-24 pb-32">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <h1 className="mb-6">Insights for better <span className="text-primary-ui">care operations</span></h1>
          <p className="text-xl text-muted-foreground">Resources to help you build a high-performance clinical operating system.</p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <Link key={i} href={res.href} className="group p-10 rounded-3xl border border-border-light bg-surface hover:shadow-xl transition-all h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center text-primary-ui mb-8"><res.icon className="w-7 h-7" /></div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-ui">{res.title}</h3>
              <p className="text-muted-foreground mb-8">{res.description}</p>
              <div className="text-xs font-bold text-primary-ui uppercase tracking-widest flex items-center gap-2">Explore <ArrowRight className="w-3 h-3" /></div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
