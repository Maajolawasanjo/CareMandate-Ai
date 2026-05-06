import ProductPageTemplate from "@/components/landing/ProductPageTemplate";


export default function Page() {
  return (
    <ProductPageTemplate
      category="Solution"
      hero={{
        title: "Scale enterprise care networks",
        subtitle: "Centralised operational control for multi-location care systems and providers."
      }}
      problem={{
        title: "Multi-location coordination issues",
        text: "Scaling care operations across locations often creates disconnected regional teams and data silos.",
        highlight: "Data silos can hide up to 30% in operational efficiency losses."
      }}
      solution={{
        title: "Unified enterprise control system",
        text: "Standardise clinical workflows and reporting across your entire multi-location care network.",
        points: ["Regional Visibility", "Centralised Reporting", "Standardised Protocols"]
      }}
      features={{
        title: "Network Focus",
        items: [
          { icon: "LineChart", title: "Analytics focus", description: "Compare regional performance across the network." },
          { icon: "Network", title: "Protocol Sync", description: "Deploy operational standards instantly to all locations." }
        ]
      }}
      benefits={{
        title: "Enterprise Outcomes",
        items: [
          { title: "Unified visibility", description: "Control all operations from one central dashboard." }
        ]
      }}
    />
  );
}


