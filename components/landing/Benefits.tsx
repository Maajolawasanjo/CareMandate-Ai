"use client";

import { TrendingUp, Clock, Eye, ShieldCheck, UserCheck } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Reduce Coordination Workload",
      description: "Automate manual scheduling and coordination tasks, freeing up your team for clinical management."
    },
    {
      icon: TrendingUp,
      title: "Improve Efficiency",
      description: "Optimise caregiver routes and activities to ensure maximum delivery value per visit."
    },
    {
      icon: Eye,
      title: "Operational Visibility",
      description: "Gain real-time insight into visit completion, caregiver location, and patient status."
    },
    {
      icon: ShieldCheck,
      title: "Strengthen Compliance",
      description: "Automate documentation and verification to significantly reduce audit risks and errors."
    },
    {
      icon: UserCheck,
      title: "Improve Staff Utilisation",
      description: "Allocate the right care for the right patient based on staff skill-sets and availability."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="mb-8">Business impact beyond <span className="text-primary-ui">feature lists</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Users don&apos;t just buy software; they buy better operations and reduced operational stress.
            </p>
            
            <div className="space-y-10">
              {benefits.map((benefit, i) => (
                <div 
                  key={i}
                  className="flex gap-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center text-primary-ui shrink-0">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="bg-primary-soft/30 rounded-3xl p-12 border border-primary/5"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-border-light">
              <p className="text-3xl font-bold text-primary-ui mb-2">+40%</p>
              <p className="text-sm font-semibold mb-6 uppercase tracking-wider">Efficiency Increase</p>
              <div className="space-y-3">
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[40%] bg-primary" />
                </div>
                <p className="text-xs text-muted-foreground">Reported average improvement in coordination speed after 3 months.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

