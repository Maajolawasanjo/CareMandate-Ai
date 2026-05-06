import { Zap, Calendar, MapPin, Users, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Care Operations",
    description: "Centralised care operations for full visibility and clinical control.",
    icon: Zap,
    href: "/features/care-operations",
    color: "text-purple-600",
    bg: "bg-purple-50",
    outcome: "Unified Hub"
  },
  {
    title: "Intelligent Scheduling",
    description: "Automate complex shift management and patient coordination.",
    icon: Calendar,
    href: "/features/scheduling",
    color: "text-blue-600",
    bg: "bg-blue-50",
    outcome: "Auto-Routing"
  },
  {
    title: "Visit Tracking",
    description: "Real-time verification and GPS tracking for field caregivers.",
    icon: MapPin,
    href: "/features/visit-tracking",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    outcome: "GPS Verified"
  },
  {
    title: "Staff Management",
    description: "Unified staff system for skills, availability and compliance.",
    icon: Users,
    href: "/features/caregiver-management",
    color: "text-orange-600",
    bg: "bg-orange-50",
    outcome: "Skill-Match"
  },
  {
    title: "Clinical Analytics",
    description: "Data-driven insights to improve patient outcomes and efficiency.",
    icon: BarChart3,
    href: "/features/analytics",
    color: "text-rose-600",
    bg: "bg-rose-50",
    outcome: "Outcome-Led"
  },
  {
    title: "Audit Compliance",
    description: "Automated audit readiness and regulatory documentation.",
    icon: ShieldCheck,
    href: "/features/compliance",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    outcome: "Audit-Ready"
  }
];

// Duplicate features for infinite loop
const doubledFeatures = [...features, ...features];



export default function Features() {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-soft/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20 text-center">
        <h2 
          className="text-[56px] lg:text-[72px] font-bold text-slate-900 tracking-tight italic serif font-medium"
        >
          Expertise & specializations
        </h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mt-6">
          Advanced clinical capabilities across every facet of care delivery.
        </p>
      </div>

      {/* Infinite Looping Carousel - Styled like reference "Collections" */}
      <div className="relative w-full overflow-hidden flex items-center group/marquee py-12">
        <div className="flex gap-10 px-4 w-fit animate-marquee hover:[animation-play-state:paused]">
          {doubledFeatures.map((feature, i) => (
            <div key={i} className="w-[440px] flex-none group">
              <Link href={feature.href}>
                <div className="rounded-[56px] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col h-[520px]">
                  {/* Top Visual Area like reference */}
                  <div className="h-64 bg-slate-50 flex items-center justify-center relative overflow-hidden">
                    <div className={`w-24 h-24 rounded-[32px] ${feature.bg} ${feature.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-700`}>
                      <feature.icon className="w-12 h-12" />
                    </div>
                    {/* Subtle Mesh Background */}
                    <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary/20 to-transparent" />
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-[28px] font-bold text-slate-900 group-hover:text-primary-ui transition-colors">
                        {feature.title}
                      </h3>
                      <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <p className="text-slate-500 leading-relaxed text-[17px]">
                      {feature.description}
                    </p>
                    
                    <div className="mt-auto pt-8 border-t border-slate-50">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.25em]">
                         Clinical Module 0{ (i % 6) + 1 }
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
