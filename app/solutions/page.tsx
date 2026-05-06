"use client";

import { Button } from "@/components/ui/button";
import { 
  Home, Hotel, HeartPulse, Network, ArrowRight 
} from "lucide-react";
import Link from "next/link";

const IconMap: Record<string, React.ElementType> = {
  Home, Hotel, HeartPulse, Network
};

export default function SolutionsHub() {
  const industries = [
    { icon: "Home", title: "Home Care", description: "Optimised for private care providers.", href: "/solutions/home-care" },
    { icon: "Hotel", title: "Hospitals", description: "Coordinating post-acute recovery.", href: "/solutions/hospitals" },
    { icon: "HeartPulse", title: "Elderly Care", description: "Safety-first assisted living operations.", href: "/solutions/elderly-care" },
    { icon: "Network", title: "Care Networks", description: "Multi-location enterprise coordination.", href: "/solutions/care-networks" }
  ];

  const renderIcon = (iconName: string) => {
    const Icon = IconMap[iconName] || Home;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <main className="bg-background pt-24 pb-32">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <h1 className="mb-6">CareMandate for every <span className="text-primary-ui">care environment</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tailored clinical coordination systems designed to solve the unique operational challenges of different healthcare industries.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, i) => (
            <Link key={i} href={industry.href} className="group">
              <div className="p-8 rounded-3xl border border-border-light bg-surface hover:shadow-lg transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary-ui mb-6">
                  {renderIcon(industry.icon)}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-ui">{industry.title}</h3>
                <p className="text-sm text-muted-foreground mb-8 flex-grow">{industry.description}</p>
                <div className="text-xs font-bold text-primary-ui uppercase tracking-widest flex items-center gap-2">
                  Industry Details <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}


