"use client";

import { TrendingUp, Users, Eye, MousePointer, ArrowUpRight, ArrowDownLeft, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data for analytics
const visitorsData = [
  { date: "Mon", visitors: 2400, conversions: 240 },
  { date: "Tue", visitors: 1398, conversions: 221 },
  { date: "Wed", visitors: 9800, conversions: 229 },
  { date: "Thu", visitors: 3908, conversions: 200 },
  { date: "Fri", visitors: 4800, conversions: 218 },
  { date: "Sat", visitors: 3800, conversions: 250 },
  { date: "Sun", visitors: 4300, conversions: 210 },
];

const featureViewsData = [
  { name: "Care Operations", views: 2400 },
  { name: "Scheduling", views: 1800 },
  { name: "Visit Tracking", views: 1500 },
  { name: "Caregiver Management", views: 1200 },
  { name: "Analytics", views: 1000 },
  { name: "Compliance", views: 800 },
];

const pageViewsData = [
  { page: "Home", views: 12453, bounceRate: 32 },
  { page: "Features", views: 8923, bounceRate: 28 },
  { page: "Solutions", views: 6234, bounceRate: 35 },
  { page: "Resources", views: 4521, bounceRate: 42 },
  { page: "About", views: 3214, bounceRate: 38 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Total Visitors",
            value: "28,450",
            change: "+12.5%",
            trend: "up",
            icon: Users,
            color: "bg-blue-50 text-blue-600",
          },
          {
            label: "Page Views",
            value: "94,230",
            change: "+8.2%",
            trend: "up",
            icon: Eye,
            color: "bg-purple-50 text-purple-600",
          },
          {
            label: "Avg. Session Duration",
            value: "3m 42s",
            change: "+2.1%",
            trend: "up",
            icon: TrendingUp,
            color: "bg-emerald-50 text-emerald-600",
          },
          {
            label: "Conversion Rate",
            value: "4.2%",
            change: "-0.3%",
            trend: "down",
            icon: MousePointer,
            color: "bg-orange-50 text-orange-600",
          },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                <div className={`rounded-lg p-2.5 ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
              <div
                className={`flex items-center gap-1 text-sm font-semibold ${
                  stat.trend === "up" ? "text-emerald-600" : "text-red-600"
                }`}
              >
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownLeft className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Visitor Trends */}
        <div className="lg:col-span-2 bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900">Visitor Trends</h3>
            <p className="text-sm text-slate-500 mt-1">Weekly visitor and conversion activity</p>
          </div>
          <div className="h-[300px] flex items-end gap-2">
            {visitorsData.map((data, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex gap-1">
                  <div 
                    className="flex-1 bg-purple-600 rounded-t-lg transition-all hover:opacity-80" 
                    style={{ height: `${(data.visitors / 10000) * 200}px` }}
                  />
                  <div 
                    className="flex-1 bg-blue-500 rounded-t-lg transition-all hover:opacity-80" 
                    style={{ height: `${(data.conversions / 300) * 200}px` }}
                  />
                </div>
                <span className="text-xs text-slate-500">{data.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Engagement */}
        <div className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900">Feature Views</h3>
            <p className="text-sm text-slate-500 mt-1">Most viewed modules</p>
          </div>
          <div className="space-y-3">
            {featureViewsData.map((feature, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-slate-900">{feature.name}</span>
                  <span className="text-slate-500 text-xs">{feature.views}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all" 
                    style={{ width: `${(feature.views / 2400) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Pages */}
        <div className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900">Top Pages</h3>
            <p className="text-sm text-slate-500 mt-1">Most visited pages this week</p>
          </div>
          <div className="space-y-4">
            {pageViewsData.map((page, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{page.page}</p>
                  <p className="text-xs text-slate-500 mt-1">{page.bounceRate}% bounce rate</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">{page.views.toLocaleString()}</p>
                  <p className="text-xs text-slate-500">views</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Management Actions */}
        <div className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900">Content Management</h3>
            <p className="text-sm text-slate-500 mt-1">Quick access to editing tools</p>
          </div>
          <div className="space-y-3">
            <Link href="/admin/demos" className="block">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-slate-50">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-900">Manage Demo Requests</span>
                  <span className="text-xs text-slate-500">View and schedule incoming demos</span>
                </div>
              </Button>
            </Link>
            <Link href="/admin/features" className="block">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-slate-50">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-900">Manage Features</span>
                  <span className="text-xs text-slate-500">Edit feature modules and descriptions</span>
                </div>
              </Button>
            </Link>
            <Link href="/admin/media" className="block">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-slate-50">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-900">Manage Media</span>
                  <span className="text-xs text-slate-500">Upload and manage images and assets</span>
                </div>
              </Button>
            </Link>
            <Link href="/admin/visitors" className="block">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-slate-50">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-900">View Visitor Insights</span>
                  <span className="text-xs text-slate-500">Detailed analytics and visitor data</span>
                </div>
              </Button>
            </Link>
            <Link href="/admin/settings" className="block">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-slate-50">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-900">System Settings</span>
                  <span className="text-xs text-slate-500">Configure platform preferences</span>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
