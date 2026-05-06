"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Image as ImageIcon,
  FileText,
  Users,
  Settings,
  ArrowLeft,
  Menu,
  X,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { logout } from "@/app/actions/auth";

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: number;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sidebarItems: SidebarItem[] = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      label: "Features",
      href: "/admin/features",
      icon: <FileText className="w-5 h-5" />,
      badge: 6,
    },
    {
      label: "Media",
      href: "/admin/media",
      icon: <ImageIcon className="w-5 h-5" />,
    },
    {
      label: "Visitors",
      href: "/admin/visitors",
      icon: <Users className="w-5 h-5" />,
      badge: 2847,
    },
    {
      label: "Settings",
      href: "/admin/settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        } ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-slate-700 flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="font-bold text-xl">CareMandate Admin</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden lg:block p-1.5 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden p-1.5 hover:bg-slate-800 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white group"
            >
              <div className="flex items-center gap-3">
                <div className="text-slate-400 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </div>
              {item.badge && sidebarOpen && (
                <span className="bg-primary/30 text-primary-soft text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-6 left-4 right-4">
          <Link href="/">
            <Button
              variant="outline"
              className={`w-full justify-center gap-2 border-slate-600 hover:bg-slate-800 text-slate-300 ${
                !sidebarOpen && "p-2"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              {sidebarOpen && "Back to Site"}
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}
      >
        {/* Top Navigation */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
          <div className="px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-xl font-bold text-slate-900">
                Welcome to Admin Dashboard
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-4 px-4 py-2 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#5B1C6D]/10 flex items-center justify-center text-[#5B1C6D] font-bold">
                    A
                  </div>
                  <span className="text-sm font-medium text-slate-700">Admin</span>
                </div>
                <div className="w-px h-6 bg-slate-200"></div>
                <form action={logout}>
                  <button type="submit" className="flex items-center gap-1 text-sm font-bold text-red-600 hover:text-red-700 transition-colors">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">{children}</div>
      </main>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
