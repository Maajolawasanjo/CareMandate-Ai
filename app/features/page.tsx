"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Zap, Calendar, MapPin, Users2, LineChart, ShieldCheck, ArrowRight 
} from "lucide-react";
import Link from "next/link";

const IconMap: Record<string, React.ElementType> = {
  Zap, Calendar, MapPin, Users2, LineChart, ShieldCheck
};

export default function FeaturesHub() {
  const features = [
    { icon: "Zap", title: "Care Operations", description: "Unified clinical operating system.", href: "/features/care-operations" },
    { icon: "Calendar", title: "Scheduling", description: "Intelligent planning and assignment.", href: "/features/scheduling" },
    { icon: "MapPin", title: "Visit Tracking", description: "Real-time field visibility and EVV.", href: "/features/visit-tracking" },
    { icon: "Users2", title: "Caregiver Management", description: "Workforce coordination and profiles.", href: "/features/caregiver-management" },
    { icon: "LineChart", title: "Analytics", description: "Performance insights and KPI tracking.", href: "/features/analytics" },
    { icon: "ShieldCheck", title: "Compliance", description: "Audit readiness and regulatory tracking.", href: "/features/compliance" }
  ];

  const renderIcon = (iconName: string) => {
    const Icon = IconMap[iconName] || Zap;
    return <Icon className="w-7 h-7" />;
  };

  return (
    <main className="bg-background pt-24 pb-32">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <h1 className="mb-6">Everything you need to <span className="text-primary-ui">manage care operations</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A comprehensive clinical operating system designed to eliminate manual fragmentation across your entire organization.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Link key={i} href={feature.href} className="group">
              <div className="p-10 rounded-3xl border border-border-light bg-surface hover:shadow-xl transition-all h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center text-primary-ui mb-8 group-hover:scale-110 transition-transform">
                  {renderIcon(feature.icon)}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-ui transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{feature.description}</p>
                <div className="text-xs font-bold text-primary-ui uppercase tracking-widest flex items-center gap-2">
                  Explore Module <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="p-12 rounded-[40px] bg-surface-elevated border border-border-light text-center">
          <h2 className="mb-6">Unified care operating system</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to reclaim control over your clinical workflows with a system built for precision?
          </p>
          <Button size="lg" className="h-12 px-8">Book a Demo</Button>
        </div>
      </section>
    </main>
  );
}


