import ProductPageTemplate from "@/components/landing/ProductPageTemplate";


export default function Page() {
  return (
    <ProductPageTemplate
      category="Feature"
      hero={{
        title: "Manage caregivers efficiently",
        subtitle: "Coordinate your workforce with precision, clinical alignment, and real-time availability."
      }}
      problem={{
        title: "Workforce fragmentation",
        text: "Managing skills, availability, and location without a central system leads to massive under-utilisation.",
        highlight: "Inefficient staffing coordination can waste up to 15% of clinical capacity."
      }}
      solution={{
        title: "Unified staff system",
        text: "Optimize your staff allocation based on clinical competence and real-time field availability.",
        points: ["Staff Profiles", "Assignments", "Availability Tracking"]
      }}
      features={{
        title: "Workforce Capabilities",
        items: [
          { icon: "Users", title: "Staff Profiles", description: "Central management of skills and certifications." },
          { icon: "UserPlus", title: "Assignments", description: "Match the best caregiver to the specific patient need." },
          { icon: "Activity", title: "Availability Tracking", description: "Live visibility into staff schedules and capacity." }
        ]
      }}
      benefits={{
        title: "Management Outcomes",
        items: [
          { title: "Better workforce utilisation", description: "Maximise care delivery capacity across your entire team." }
        ]
      }}
    />
  );
}


