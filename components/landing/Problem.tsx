"use client";

import { AlertCircle, Clock, Users, ShieldAlert, Database } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: Clock,
      title: "Disjointed Scheduling",
      description: "Manual planning leads to double-bookings, missed visits, and coordination fatigue."
    },
    {
      icon: Users,
      title: "Inconsistent Tracking",
      description: "Relying on paper logs or disparate apps makes visit verification nearly impossible."
    },
    {
      icon: ShieldAlert,
      title: "Compliance Blindspots",
      description: "Manual audits and scattered documentation create massive regulatory risks."
    },
    {
      icon: Database,
      title: "Fragmented Data",
      description: "Critical operational insights are buried in disconnected systems and spreadsheets."
    }
  ];

  return (
    <section className="py-24 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-error font-semibold label-small mb-4">
            <AlertCircle className="w-4 h-4" />
            <span>The Status Quo</span>
          </div>
          <h2 className="mb-6">Care operations are still <span className="text-error">fragmented and manual</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most care providers are struggling with operational chaos—managing clinical delivery through a patchwork of tools that don&apos;t talk to each other.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, i) => (
            <div 
              key={i}
              className="p-8 rounded-2xl bg-white border border-border-light shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-error/5 flex items-center justify-center text-error mb-6">
                <problem.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

