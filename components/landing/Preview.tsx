"use client";

import { Layout, Calendar, Map, Bell } from "lucide-react";

export default function Preview() {
  const tabs = [
    { icon: Layout, label: "Dashboard" },
    { icon: Calendar, label: "Schedule" },
    { icon: Map, label: "Visit Maps" },
    { icon: Bell, label: "Alerts" }
  ];

  return (
    <section className="py-24 bg-surface-elevated overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary-ui font-semibold label-small mb-4">
            <Layout className="w-4 h-4" />
            <span>Product Preview</span>
          </div>
          <h2 className="mb-6">Engineered for <span className="text-primary-ui">clinical excellence</span></h2>
          <p className="text-lg text-muted-foreground">Don&apos;t just take our word for it—see the system in action.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Simulated App Header */}
          <div className="bg-white rounded-t-2xl border-x border-t border-border-light p-4 flex items-center justify-between shadow-sm">
            <div className="flex gap-4">
              {tabs.map((tab, i) => (
                <div key={i} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold ${i === 0 ? 'bg-primary-soft text-primary-ui' : 'text-muted-foreground'}`}>
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </div>
              ))}
            </div>
            <div className="w-8 h-8 rounded-full bg-muted" />
          </div>

          {/* Main UI Mockup */}
          <div 
            className="bg-white border border-border-light rounded-b-2xl shadow-2xl p-8 min-h-[400px]"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-48 rounded-xl bg-muted/30 border border-border-light flex items-center justify-center">
                  <p className="text-sm font-medium text-muted-foreground italic">Clinical Schedule Visualization</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="h-32 rounded-xl bg-muted/30 border border-border-light flex items-center justify-center">
                    <p className="text-xs font-medium text-muted-foreground">Visit Metrics</p>
                  </div>
                  <div className="h-32 rounded-xl bg-muted/30 border border-border-light flex items-center justify-center">
                    <p className="text-xs font-medium text-muted-foreground">Compliance Score</p>
                  </div>
                </div>
              </div>
              <div className="h-full rounded-xl bg-muted/30 border border-border-light p-6">
                <p className="text-xs font-bold text-muted-foreground uppercase mb-4">Real-time Alerts</p>
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-2 h-2 rounded-full bg-error mt-1" />
                      <div className="h-12 flex-1 bg-white rounded-lg border" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Psychological Proof: A real working system
          </p>
        </div>
      </div>
    </section>
  );
}

