import ProductPageTemplate from "@/components/landing/ProductPageTemplate";


export default function Page() {
  return (
    <ProductPageTemplate
      category="Feature"
      hero={{
        title: "Real-time visit tracking and verification",
        subtitle: "Gain full visibility into care delivery with GPS-backed verification and clinical task tracking."
      }}
      problem={{
        title: "No visibility into care delivery",
        text: "Relying on paper logs or disparate apps makes it impossible to verify visit completion and safety in real time.",
        highlight: "Lack of field visibility is the #1 cause of compliance failures in home care."
      }}
      solution={{
        title: "Live visit monitoring system",
        text: "Verify care delivery instantly with GPS check-ins and clinical task tracking in the field.",
        points: ["EVV Tracking", "GPS/Time Stamps", "Status Updates"]
      }}
      howItWorks={{
        title: "The tracking process",
        steps: [
          { title: "Assign visit", description: "Schedule activities for caregivers in the central dashboard." },
          { title: "Track execution", description: "Monitor visits as they happen with real-time field data." },
          { title: "Verify completion", description: "Automatically confirm visit duration and task accuracy." }
        ]
      }}
      features={{
        title: "Tracking Capabilities",
        items: [
          { icon: "MapPin", title: "EVV Tracking", description: "Electronic Visit Verification for all field activities." },
          { icon: "ShieldCheck", title: "GPS/Time Stamps", description: "Precise verification of visit location and duration." },
          { icon: "Activity", title: "Status Updates", description: "Real-time alerts for visit arrivals and completions." }
        ]
      }}
      benefits={{
        title: "Compliance & Trust",
        items: [
          { title: "Compliance Assurance", description: "Audit-ready data for all care delivery visits." },
          { title: "Staff Accountability", description: "Clear visibility into field staff performance." }
        ]
      }}
    />
  );
}


