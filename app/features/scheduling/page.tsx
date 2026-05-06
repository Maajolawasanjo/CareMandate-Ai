import ProductPageTemplate from "@/components/landing/ProductPageTemplate";


export default function Page() {
  return (
    <ProductPageTemplate
      category="Feature"
      hero={{
        title: "Intelligent scheduling for care teams",
        subtitle: "Coordinate care delivery without the operational chaos of spreadsheets and manual planning."
      }}
      problem={{
        title: "Manual scheduling is a clinical risk",
        text: "Spreadsheets lead to double-bookings, missed visits, and coordination fatigue that affects patient outcomes.",
        highlight: "Manual scheduling errors cause over 30% of operational inefficiencies in care delivery."
      }}
      solution={{
        title: "Automated scheduling engine",
        text: "Our system ensures the right caregiver is with the right patient at the right time, every time.",
        points: ["Conflict Detection", "Shift Management", "Automated Matching"]
      }}
      howItWorks={{
        title: "How it works",
        steps: [
          { title: "Create schedule", description: "Plan activities and clinical visits across your entire organization." },
          { title: "Assign caregiver", description: "Use intelligent matching to find the best staff member for the task." },
          { title: "Track updates", description: "Instantly notify staff of changes via the mobile app." }
        ]
      }}
      features={{
        title: "Core Scheduling Capabilities",
        items: [
          { icon: "Calendar", title: "Calendar System", description: "Unified view of all clinical activities." },
          { icon: "Users", title: "Shift Management", description: "Easily manage availability and rotations." },
          { icon: "Zap", title: "Conflict Detection", description: "Real-time alerts for scheduling overlaps." }
        ]
      }}
      benefits={{
        title: "Scheduling Outcomes",
        items: [
          { title: "Reduced Conflicts", description: "Eliminate double-bookings and missed visits entirely." },
          { title: "Improved Efficiency", description: "Decrease coordination workload by up to 40%." }
        ]
      }}
    />
  );
}


