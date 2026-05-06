import ProductPageTemplate from "@/components/landing/ProductPageTemplate";


export default function Page() {
  return (
    <ProductPageTemplate
      category="Solution"
      hero={{
        title: "Hospital workflow coordination",
        subtitle: "Bridging the gap between acute care and home-based recovery with seamless data flow."
      }}
      problem={{
        title: "Hospital operations complexity",
        text: "Coordinating post-discharge care and recovery milestones is often fragmented, leading to readmissions.",
        highlight: "Inconsistent discharge coordination increases readmission risks by 15%."
      }}
      solution={{
        title: "CareMandate integration layer",
        text: "Connect hospital protocols with recovery activities in one unified coordination system.",
        points: ["Staff Coordination", "Patient Tracking", "Compliance Support"]
      }}
      features={{
        title: "Hospital Focus",
        items: [
          { icon: "Hotel", title: "Clinical Support", description: "Ensure discharge protocols are followed precisely." },
          { icon: "Activity", title: "Analytics Usage", description: "Track recovery outcomes and efficiency metrics." }
        ]
      }}
      benefits={{
        title: "Clinical Outcomes",
        items: [
          { title: "Compliance readiness", description: "Ensure all clinical documentation is audit-ready." }
        ]
      }}
    />
  );
}


