import ProductPageTemplate from "@/components/landing/ProductPageTemplate";


export default function Page() {
  return (
    <ProductPageTemplate
      category="Feature"
      hero={{
        title: "Centralised care operations for full visibility",
        subtitle: "A unified clinical operating system designed to eliminate manual fragmentation."
      }}
      problem={{
        title: "Fragmented systems create operational blindspots",
        text: "Managing clinical delivery through a patchwork of tools leads to disconnected workflows and data silos.",
        highlight: "Disconnected systems increase administrative overhead by 25%."
      }}
      solution={{
        title: "Unified control layer for all operations",
        text: "Centralise your clinical protocols, caregiver coordination, and visit tracking into one source of truth.",
        points: ["Central Dashboard", "Task Orchestration", "Real-time Updates"]
      }}
      howItWorks={{
        title: "Three steps to unified operations",
        steps: [
          { title: "Setup organisation", description: "Onboard staff and clinical protocols into one workspace." },
          { title: "Assign workflows", description: "Automate care delivery processes across all locations." },
          { title: "Monitor execution", description: "Gain real-time visibility into every operational activity." }
        ]
      }}
      features={{
        title: "Core Operations Capabilities",
        items: [
          { icon: "LayoutGrid", title: "Central Dashboard", description: "One view for all clinical and staff activities." },
          { icon: "Zap", title: "Task Orchestration", description: "Automate manual task assignment and follow-ups." },
          { icon: "Activity", title: "Real-time Updates", description: "Instant notification for any operational deviations." }
        ]
      }}
      benefits={{
        title: "Business Outcomes",
        items: [
          { title: "Reduced Admin Overhead", description: "Eliminate manual data entry across disparate tools." },
          { title: "Operational Clarity", description: "Know exactly what is happening in the field at any moment." }
        ]
      }}
    />
  );
}


