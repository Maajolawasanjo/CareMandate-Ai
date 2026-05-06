"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Upload,
  Trash2,
  Copy,
  Download,
  Image as ImageIcon,
} from "lucide-react";

interface Media {
  id: number;
  name: string;
  url: string;
  size: string;
  uploadDate: string;
  type: "image" | "video";
}

const initialMedia: Media[] = [
  {
    id: 1,
    name: "hero.png",
    url: "/assets/hero.png",
    size: "2.4 MB",
    uploadDate: "2024-01-15",
    type: "image",
  },
  {
    id: 2,
    name: "feature-care-ops.jpg",
    url: "/assets/feature-care-ops.jpg",
    size: "1.8 MB",
    uploadDate: "2024-01-14",
    type: "image",
  },
  {
    id: 3,
    name: "solution-home-care.png",
    url: "/assets/solution-home-care.png",
    size: "3.1 MB",
    uploadDate: "2024-01-13",
    type: "image",
  },
  {
    id: 4,
    name: "testimonial-1.jpg",
    url: "/assets/testimonial-1.jpg",
    size: "1.2 MB",
    uploadDate: "2024-01-12",
    type: "image",
  },
];

export default function MediaPage() {
  const [media, setMedia] = useState<Media[]>(initialMedia);
  const [dragActive, setDragActive] = useState(false);

  const handleDelete = (id: number) => {
    setMedia(media.filter((m) => m.id !== id));
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // In a real app, handle file upload here
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Media Management</h1>
        <p className="text-slate-600 mt-2">
          Upload, organize, and manage all images and assets for your landing
          page.
        </p>
      </div>

      {/* Upload Area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`rounded-[24px] border-2 border-dashed p-12 text-center transition-colors ${
          dragActive
            ? "border-[#5B1C6D] bg-purple-50"
            : "border-slate-300 bg-slate-50"
        }`}
      >
        <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          Upload New Media
        </h3>
        <p className="text-slate-600 mb-6">
          Drag and drop your images here, or click to browse
        </p>
        <Button className="bg-[#5B1C6D] hover:bg-[#4A1658] text-white">
          Select Files
        </Button>
      </div>

      {/* Media Library */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Media Library</h2>
          <span className="text-sm text-slate-600">
            {media.length} files
          </span>
        </div>

        <div className="grid gap-4">
          {media.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] border border-slate-100 p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <ImageIcon className="w-8 h-8 text-slate-400" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {item.size} • {item.uploadDate}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 truncate font-mono">
                    {item.url}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 flex-shrink-0">
                  <Button
                    onClick={() => handleCopyUrl(item.url)}
                    variant="outline"
                    size="sm"
                    title="Copy URL"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => handleDelete(item.id)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:bg-red-50"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-blue-50 border border-blue-200 rounded-[24px] p-6">
          <h3 className="font-bold text-blue-900 mb-2">📏 Recommended Sizes</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Hero image: 1200x800px</li>
            <li>• Feature cards: 400x300px</li>
            <li>• Solution images: 600x400px</li>
            <li>• Testimonial avatars: 80x80px</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-[24px] p-6">
          <h3 className="font-bold text-green-900 mb-2">✅ Best Practices</h3>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Use descriptive file names</li>
            <li>• Compress images before upload</li>
            <li>• Use PNG for graphics, JPG for photos</li>
            <li>• Keep file sizes under 5MB</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
