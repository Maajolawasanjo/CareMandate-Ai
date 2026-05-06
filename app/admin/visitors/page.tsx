"use client";

import { useState } from "react";
import { Globe, MapPin, Monitor, Smartphone, Zap } from "lucide-react";

interface Visitor {
  id: number;
  location: string;
  device: string;
  browser: string;
  visitDate: string;
  sessionDuration: string;
  pageViews: number;
  source: string;
}

const mockVisitors: Visitor[] = [
  {
    id: 1,
    location: "United States, New York",
    device: "Desktop",
    browser: "Chrome",
    visitDate: "2024-01-16 14:23",
    sessionDuration: "5m 32s",
    pageViews: 8,
    source: "Google Search",
  },
  {
    id: 2,
    location: "United Kingdom, London",
    device: "Mobile",
    browser: "Safari",
    visitDate: "2024-01-16 13:45",
    sessionDuration: "3m 12s",
    pageViews: 4,
    source: "Direct",
  },
  {
    id: 3,
    location: "Canada, Toronto",
    device: "Desktop",
    browser: "Chrome",
    visitDate: "2024-01-16 12:15",
    sessionDuration: "7m 45s",
    pageViews: 12,
    source: "LinkedIn",
  },
  {
    id: 4,
    location: "Australia, Sydney",
    device: "Tablet",
    browser: "Safari",
    visitDate: "2024-01-16 11:30",
    sessionDuration: "2m 18s",
    pageViews: 3,
    source: "Facebook",
  },
  {
    id: 5,
    location: "Germany, Berlin",
    device: "Mobile",
    browser: "Chrome",
    visitDate: "2024-01-16 10:45",
    sessionDuration: "4m 56s",
    pageViews: 6,
    source: "Email Campaign",
  },
];

const browserStats = [
  { name: "Chrome", percentage: 58, color: "bg-yellow-500" },
  { name: "Safari", percentage: 24, color: "bg-gray-500" },
  { name: "Firefox", percentage: 12, color: "bg-orange-500" },
  { name: "Other", percentage: 6, color: "bg-slate-400" },
];

const sourceStats = [
  { name: "Organic Search", visitors: 8245, percentage: 29 },
  { name: "Direct", visitors: 7123, percentage: 25 },
  { name: "Social Media", visitors: 5234, percentage: 18 },
  { name: "Email Campaign", visitors: 4156, percentage: 15 },
  { name: "Referral", visitors: 3702, percentage: 13 },
];

const deviceStats = [
  { name: "Desktop", visitors: 14250, percentage: 50 },
  { name: "Mobile", visitors: 11340, percentage: 40 },
  { name: "Tablet", visitors: 2870, percentage: 10 },
];

export default function VisitorsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Visitor Analytics
        </h1>
        <p className="text-slate-600 mt-2">
          Detailed insights about your landing page visitors and their behavior.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Total Visitors", value: "28,460", change: "+12.5%" },
          { label: "Avg. Session", value: "3m 42s", change: "+2.1%" },
          { label: "Conversion Rate", value: "4.2%", change: "-0.3%" },
          { label: "Bounce Rate", value: "32.5%", change: "-1.8%" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-[24px] border border-slate-100 p-6"
          >
            <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">{stat.value}</p>
            <p className="text-xs text-emerald-600 mt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Device & Browser Stats */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Device Stats */}
        <div className="bg-white rounded-[24px] border border-slate-100 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Visitors by Device
          </h2>
          <div className="space-y-4">
            {deviceStats.map((device, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-900">
                    {device.name}
                  </span>
                  <span className="text-sm text-slate-600">
                    {device.visitors.toLocaleString()}{" "}
                    <span className="font-semibold">{device.percentage}%</span>
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    style={{ width: `${device.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Browser Stats */}
        <div className="bg-white rounded-[24px] border border-slate-100 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Visitors by Browser
          </h2>
          <div className="space-y-4">
            {browserStats.map((browser, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-900">
                    {browser.name}
                  </span>
                  <span className="text-sm text-slate-600 font-semibold">
                    {browser.percentage}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className={`${browser.color} h-2 rounded-full`}
                    style={{ width: `${browser.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="bg-white rounded-[24px] border border-slate-100 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Traffic Sources
        </h2>
        <div className="space-y-3">
          {sourceStats.map((source, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-slate-900">{source.name}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {source.visitors.toLocaleString()} visitors
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
                <span className="font-bold text-slate-900 w-10 text-right">
                  {source.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Visitors */}
      <div className="bg-white rounded-[24px] border border-slate-100 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Recent Visitors
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-900 text-sm">
                  Location
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900 text-sm">
                  Device
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900 text-sm">
                  Browser
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900 text-sm">
                  Visit Time
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900 text-sm">
                  Duration
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900 text-sm">
                  Pages
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900 text-sm">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {mockVisitors.map((visitor) => (
                <tr key={visitor.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4 text-sm text-slate-900">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      {visitor.location}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-600">
                    {visitor.device}
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-600">
                    {visitor.browser}
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-600">
                    {visitor.visitDate}
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-600">
                    {visitor.sessionDuration}
                  </td>
                  <td className="py-3 px-4 text-sm font-semibold text-slate-900">
                    {visitor.pageViews}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      {visitor.source}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
