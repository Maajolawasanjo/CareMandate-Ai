"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  // Hide footer on auth pages
  if (pathname?.includes("/login") || pathname?.includes("/register")) return null;

  const sections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Solutions", href: "/solutions" },
        { label: "Book Demo", href: "/demo" },
        { label: "Login", href: "/login" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Security", href: "/security" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "/resources" },
        { label: "API Docs", href: "/docs" },
        { label: "System Status", href: "/status" },
        { label: "Blog", href: "/blog" }
      ]
    }
  ];

  return (
    <footer className="bg-surface-elevated border-t border-border-light pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight mb-6">
              <Image src="/logo.svg" alt="CareMandate Logo" width={32} height={32} />
              CareMandate
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              The operational system for modern healthcare providers. Streamline workflows, automate compliance, and focus on care.
            </p>
          </div>
          
          {sections.map((section, i) => (
            <div key={i}>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary-ui transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-10 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CareMandate AI. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary-ui">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary-ui">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
