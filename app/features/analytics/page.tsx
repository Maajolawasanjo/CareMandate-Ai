import ProductPageTemplate from "@/components/landing/ProductPageTemplate";


export default function Page() {
  return (
    <ProductPageTemplate
      category="Feature"
      hero={{
        title: "Operational insights in real time",
        subtitle: "Transform raw care data into actionable clinical and business insights automatically."
      }}
      problem={{
        title: "Lack of operational visibility",
        text: "Without data-driven insights, you are guessing about visit completion rates and clinical efficiency.",
        highlight: "Operational blindspots hide up to 20% in potential efficiency gains."
      }}
      solution={{
        title: "Analytics engine for care ops",
        text: "Monitor performance, patient outcomes, and staff utilisation in real time with automated reporting.",
        points: ["Performance Dashboards", "KPI Tracking", "Custom Reports"]
      }}
      features={{
        title: "Insight Capabilities",
        items: [
          { icon: "LineChart", title: "Performance Dashboards", description: "Real-time visibility into all care activities." },
          { icon: "BarChart3", title: "KPI Tracking", description: "Monitor clinical and operational success metrics." },
          { icon: "PieChart", title: "Custom Reports", description: "Generate automated reports for stakeholders." }
        ]
      }}
      benefits={{
        title: "Data Outcomes",
        items: [
          { title: "Data-driven decisions", description: "Improve operations based on hard evidence, not guesswork." }
        ]
      }}
    />
  );
}


