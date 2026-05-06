"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Save, RotateCcw } from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "CareMandate",
    siteUrl: "https://caremandate.com",
    email: "admin@caremandate.com",
    phone: "+1 (555) 123-4567",
    maintenanceMode: false,
    analyticsEnabled: true,
    emailNotifications: true,
    autoBackup: true,
    backupFrequency: "daily",
    maxFileSize: "5",
    sessionTimeout: "30",
    theme: "light",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (
    key: string,
    value: string | boolean
  ) => {
    setSettings({ ...settings, [key]: value });
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setSettings({
      siteName: "CareMandate",
      siteUrl: "https://caremandate.com",
      email: "admin@caremandate.com",
      phone: "+1 (555) 123-4567",
      maintenanceMode: false,
      analyticsEnabled: true,
      emailNotifications: true,
      autoBackup: true,
      backupFrequency: "daily",
      maxFileSize: "5",
      sessionTimeout: "30",
      theme: "light",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">System Settings</h1>
        <p className="text-slate-600 mt-2">
          Configure your admin dashboard and platform preferences.
        </p>
      </div>

      {saved && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-[24px] p-4 text-emerald-800">
          ✅ Settings saved successfully!
        </div>
      )}

      {/* Site Information */}
      <div className="bg-white rounded-[24px] border border-slate-100 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Site Information
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-slate-900">
              Site Name
            </label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => handleChange("siteName", e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-900">
              Site URL
            </label>
            <input
              type="url"
              value={settings.siteUrl}
              onChange={(e) => handleChange("siteUrl", e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-900">
              Admin Email
            </label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-900">
              Support Phone
            </label>
            <input
              type="tel"
              value={settings.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>

      {/* Feature Toggles */}
      <div className="bg-white rounded-[24px] border border-slate-100 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Features & Integrations
        </h2>
        <div className="space-y-4">
          {[
            {
              key: "maintenanceMode",
              label: "Maintenance Mode",
              description: "Temporarily disable public access to the site",
            },
            {
              key: "analyticsEnabled",
              label: "Analytics Tracking",
              description: "Enable visitor analytics and tracking",
            },
            {
              key: "emailNotifications",
              label: "Email Notifications",
              description: "Receive alerts and notifications via email",
            },
            {
              key: "autoBackup",
              label: "Automatic Backups",
              description: "Automatically backup site content",
            },
          ].map((toggle) => (
            <div
              key={toggle.key}
              className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
            >
              <div>
                <p className="font-medium text-slate-900">{toggle.label}</p>
                <p className="text-sm text-slate-600">{toggle.description}</p>
              </div>
              <input
                type="checkbox"
                checked={settings[toggle.key as keyof typeof settings] as boolean}
                onChange={(e) =>
                  handleChange(toggle.key, e.target.checked)
                }
                className="w-5 h-5 rounded cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Settings */}
      <div className="bg-white rounded-[24px] border border-slate-100 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Advanced Settings
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-slate-900">
              Backup Frequency
            </label>
            <select
              value={settings.backupFrequency}
              onChange={(e) => handleChange("backupFrequency", e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-900">
              Max File Size (MB)
            </label>
            <input
              type="number"
              value={settings.maxFileSize}
              onChange={(e) => handleChange("maxFileSize", e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-900">
              Session Timeout (minutes)
            </label>
            <input
              type="number"
              value={settings.sessionTimeout}
              onChange={(e) => handleChange("sessionTimeout", e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-900">
              Theme
            </label>
            <select
              value={settings.theme}
              onChange={(e) => handleChange("theme", e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 border border-red-200 rounded-[24px] p-6">
        <h2 className="text-xl font-bold text-red-900 mb-4">Danger Zone</h2>
        <p className="text-sm text-red-800 mb-6">
          These actions are irreversible. Proceed with caution.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
            Clear Cache
          </Button>
          <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
            Reset Analytics
          </Button>
          <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
            Delete All Data
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-end sticky bottom-6">
        <Button
          onClick={handleReset}
          variant="outline"
          className="gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </Button>
        <Button
          onClick={handleSave}
          className="bg-[#5B1C6D] hover:bg-[#4A1658] text-white gap-2"
        >
          <Save className="w-4 h-4" />
          Save Settings
        </Button>
      </div>
    </div>
  );
}
