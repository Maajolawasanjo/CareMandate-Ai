import { ShieldCheck, Award, HeartPulse, Star } from "lucide-react";

export default function Trust() {
  const stats = [
    { label: "Providers Trust Us", value: "200+", icon: ShieldCheck, sub: "Enterprise infrastructure", color: "text-purple-600" },
    { label: "Visits Verified", value: "50k+", icon: Award, sub: "Precision documentation", color: "text-blue-600" },
    { label: "Clinical Success", value: "98%", icon: HeartPulse, sub: "Patient outcomes focus", color: "text-emerald-600" },
    { label: "Market Rating", value: "4.9/5", icon: Star, sub: "Top care platform", color: "text-amber-600" },
  ];

  return (
    <section className="bg-transparent py-32 border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="group p-10 rounded-[48px] bg-[#FAFAFA] border border-slate-100/50 flex flex-col items-center text-center hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className={`w-20 h-20 rounded-[32px] bg-white flex items-center justify-center ${stat.color} mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon className="w-10 h-10" />
              </div>
              <p className="text-5xl font-bold text-slate-900 mb-4 tracking-tighter">{stat.value}</p>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">{stat.label}</p>
              <div className="w-8 h-[2px] bg-slate-200 group-hover:w-16 group-hover:bg-primary-ui transition-all duration-500 mb-6"></div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
