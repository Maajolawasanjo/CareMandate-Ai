"use client";

import { UserPlus, Activity, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Onboard Teams",
    description: "Easily set up your care organization, staff profiles, and clinical protocols.",
    icon: UserPlus
  },
  {
    title: "Orchestrate Care",
    description: "Automate scheduling and assign visits based on clinical need and caregiver skill.",
    icon: Activity
  },
  {
    title: "Verify Delivery",
    description: "Monitor execution in real-time with automated verification and audit logs.",
    icon: CheckCircle2
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h2 className="text-h2 font-bold mb-6 text-slate-900">How CareMandate Works</h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We&apos;ve simplified complex care operations into a seamless three-step clinical workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-slate-100 -z-10" />
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-[32px] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center text-primary-ui mb-8 group-hover:scale-110 group-hover:shadow-xl transition-all relative">
                <step.icon className="w-10 h-10" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-ui text-white flex items-center justify-center text-sm font-bold border-4 border-white">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

