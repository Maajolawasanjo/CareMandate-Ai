import ProductPageTemplate from "@/components/landing/ProductPageTemplate";


export default function Page() {
  return (
    <ProductPageTemplate
      category="Feature"
      hero={{
        title: "Built-in compliance and audit readiness",
        subtitle: "Automate clinical documentation and verification to ensure regulatory compliance across all care delivery."
      }}
      problem={{
        title: "Manual compliance tracking",
        text: "Paper-based or fragmented documentation creates massive regulatory risk and administrative burden.",
        highlight: "Manual compliance audits can take weeks of clinical staff time."
      }}
      solution={{
        title: "Automated compliance system",
        text: "Ensure every visit and care activity meets clinical standards with automated documentation and tracking.",
        points: ["Audit Logs", "Documentation Hub", "Verification Tracking"]
      }}
      features={{
        title: "Regulatory Capabilities",
        items: [
          { icon: "Lock", title: "Audit Logs", description: "Immutable tracking of every care operation activity." },
          { icon: "FileText", title: "Documentation Hub", description: "Centralized clinical forms and records management." },
          { icon: "CheckCircle", title: "Verification Tracking", description: "Verify care delivery accuracy automatically." }
        ]
      }}
      benefits={{
        title: "Risk Outcomes",
        items: [
          { title: "Reduced regulatory risk", description: "Minimize errors and ensure 100% audit readiness." }
        ]
      }}
    />
  );
}


