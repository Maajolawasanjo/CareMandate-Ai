"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MobileMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  if (!open) return null;

  const links = [
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
  ];

  return (
    <div className="fixed inset-0 bg-white p-6 z-50 animate-in fade-in zoom-in-95 duration-200">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <Image src="/logo.svg" alt="CareMandate Logo" width={32} height={32} />
          CareMandate
        </div>
        <button onClick={() => setOpen(false)} className="text-2xl font-bold p-2">
          ✕
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {links.map((link) => (
          <Link 
            key={link.href}
            href={link.href} 
            onClick={() => setOpen(false)} 
            className="text-xl font-bold border-b border-border-light pb-4"
          >
            {link.label}
          </Link>
        ))}
        
        <div className="flex flex-col gap-4 mt-8">
          <Link href="/login" onClick={() => setOpen(false)} className="text-center font-semibold text-muted-foreground py-2">
            Login
          </Link>
          <Link href="/demo" onClick={() => setOpen(false)}>
            <Button className="w-full h-12 text-lg">Book Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
