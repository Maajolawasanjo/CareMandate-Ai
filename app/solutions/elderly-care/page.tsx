import ProductPageTemplate from "@/components/landing/ProductPageTemplate";


export default function Page() {
  return (
    <ProductPageTemplate
      category="Solution"
      hero={{
        title: "Safety-first elderly care operations",
        subtitle: "Ensuring precision and safety for assisted living and elderly care providers."
      }}
      problem={{
        title: "Elderly care challenges",
        text: "Ensuring the safety of vulnerable patients requires constant vigilance and rigorous documentation.",
        highlight: "Safety monitoring is the highest priority for 95% of elderly care providers."
      }}
      solution={{
        title: "Safety & monitoring coordination",
        text: "Implement rigorous visit tracking and clinical task verification for elderly care delivery.",
        points: ["Caregiver Scheduling", "Safety Monitoring", "Compliance Hub"]
      }}
      features={{
        title: "Elderly Care Focus",
        items: [
          { icon: "HeartPulse", title: "Caregiver Scheduling", description: "Consistent staffing for familiar care delivery." },
          { icon: "ShieldCheck", title: "Safety Monitoring", description: "Real-time alerts for visit deviations or safety risks." }
        ]
      }}
      benefits={{
        title: "Safety Outcomes",
        items: [
          { title: "Compliance importance", description: "Ensure 100% adherence to safety regulations." }
        ]
      }}
    />
  );
}


