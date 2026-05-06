"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit2, Save, X, Plus, Trash2 } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
}

const initialFeatures: Feature[] = [
  {
    id: 1,
    title: "Care Operations",
    description: "Unified clinical workflows and care coordination.",
    icon: "ClipboardList",
    href: "/features/care-operations",
  },
  {
    id: 2,
    title: "Scheduling",
    description: "Automated staff assignments and patient routing.",
    icon: "MapPin",
    href: "/features/scheduling",
  },
  {
    id: 3,
    title: "Visit Tracking",
    description: "Real-time field verification and EVV compliance.",
    icon: "Globe",
    href: "/features/visit-tracking",
  },
  {
    id: 4,
    title: "Caregiver Management",
    description: "Skills, availability, and compliance in one place.",
    icon: "Users2",
    href: "/features/caregiver-management",
  },
  {
    id: 5,
    title: "Analytics",
    description: "Operational insights and clinical performance metrics.",
    icon: "BarChart3",
    href: "/features/analytics",
  },
  {
    id: 6,
    title: "Compliance",
    description: "Audit-ready documentation and regulatory control.",
    icon: "ShieldCheck",
    href: "/features/compliance",
  },
];

export default function FeaturesPage() {
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<Feature>>({});

  const handleEdit = (feature: Feature) => {
    setEditingId(feature.id);
    setEditData(feature);
  };

  const handleSave = () => {
    if (editingId !== null) {
      setFeatures(
        features.map((f) => (f.id === editingId ? { ...f, ...editData } : f))
      );
      setEditingId(null);
      setEditData({});
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleDelete = (id: number) => {
    setFeatures(features.filter((f) => f.id !== id));
  };

  const handleAddNew = () => {
    const newFeature: Feature = {
      id: Math.max(...features.map((f) => f.id), 0) + 1,
      title: "New Feature",
      description: "Feature description",
      icon: "Zap",
      href: "/features/new-feature",
    };
    setFeatures([...features, newFeature]);
    handleEdit(newFeature);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Manage Features</h1>
          <p className="text-slate-600 mt-2">
            Edit, update, or add new feature modules to your landing page.
          </p>
        </div>
        <Button
          onClick={handleAddNew}
          className="bg-[#5B1C6D] hover:bg-[#4A1658] text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Feature
        </Button>
      </div>

      <div className="grid gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm"
          >
            {editingId === feature.id ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-slate-900">
                    Feature Title
                  </label>
                  <input
                    type="text"
                    value={editData.title || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, title: e.target.value })
                    }
                    className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900">
                    Description
                  </label>
                  <textarea
                    value={editData.description || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, description: e.target.value })
                    }
                    className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-900">
                      Icon Name
                    </label>
                    <input
                      type="text"
                      value={editData.icon || ""}
                      onChange={(e) =>
                        setEditData({ ...editData, icon: e.target.value })
                      }
                      className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-900">
                      URL Path
                    </label>
                    <input
                      type="text"
                      value={editData.href || ""}
                      onChange={(e) =>
                        setEditData({ ...editData, href: e.target.value })
                      }
                      className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={handleSave}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    className="flex-1"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mt-2">{feature.description}</p>
                  <div className="flex gap-4 mt-4 text-xs text-slate-500">
                    <span>
                      <strong>Icon:</strong> {feature.icon}
                    </span>
                    <span>
                      <strong>URL:</strong> {feature.href}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleEdit(feature)}
                    variant="outline"
                    size="sm"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => handleDelete(feature.id)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-[24px] p-6">
        <h3 className="font-bold text-blue-900 mb-2">✨ Tip</h3>
        <p className="text-blue-800 text-sm">
          Changes made here will be reflected on the landing page features section.
          Make sure to use valid icon names and URLs for features to display correctly.
        </p>
      </div>
    </div>
  );
}
