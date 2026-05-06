import ProductPageTemplate from "@/components/landing/ProductPageTemplate";


export default function Page() {
  return (
    <ProductPageTemplate
      category="Solution"
      hero={{
        title: "Optimised for home care providers",
        subtitle: "Scale private care delivery with precision, trust, and a unified operating system."
      }}
      problem={{
        title: "Manual scheduling & scattered caregivers",
        text: "Managing a distributed workforce across hundreds of client homes creates constant friction and safety risks.",
        highlight: "Coordinating 50+ caregivers manually leads to a 20% increase in missed visits."
      }}
      solution={{
        title: "Home care coordination engine",
        text: "Centralize your workforce management and visit tracking into one high-performance clinical platform.",
        points: ["Visit Coordination", "Caregiver Dispatch", "Client Transparency"]
      }}
      howItWorks={{
        title: "Home care use cases",
        steps: [
          { title: "Onboard clients", description: "Set up care plans and home-specific protocols." },
          { title: "Dispatch caregivers", description: "Match the best staff to the client based on location and skill." },
          { title: "Monitor delivery", description: "Track visits in real time to ensure safety and quality." }
        ]
      }}
      features={{
        title: "Home Care Capabilities",
        items: [
          { icon: "Zap", title: "Scheduling", description: "Intelligent planning for complex home visit rotations." },
          { icon: "MapPin", title: "Visit Tracking", description: "GPS verification for field caregiver safety." }
        ]
      }}
      benefits={{
        title: "Solution Outcomes",
        items: [
          { title: "Faster Operations", description: "Reduce scheduling time by up to 50%." }
        ]
      }}
    />
  );
}


