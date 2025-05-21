"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// ✅ Export this for use in any page
export type FilterField = {
  name: string;
  label: string;
  type: "text" | "select" | "date";
  options?: string[]; // Only for select
};

type ExtraButton = {
  label: string;
  dropdown?: string[];
};

interface FilterBoxProps {
  fields: FilterField[];
  onChange: (filters: Record<string, string>) => void;
  onReset?: () => void;
  showDownloadDropdown?: boolean;
  extraButtons?: ExtraButton[];
}

export default function FilterBox({
  fields,
  onChange,
  onReset,
  showDownloadDropdown = false,
  extraButtons = [],
}: FilterBoxProps) {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [showFilter, setShowFilter] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleChange = (name: string, value: string) => {
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    onChange(updated);
  };

  const handleReset = () => {
    setFilters({});
    onReset?.();
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div className="w-full">
      {/* Top Controls */}
      <div className="flex justify-end items-center gap-2 mb-2">
        {extraButtons.map((btn) => (
          <div className="relative" key={btn.label}>
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded text-sm flex items-center gap-1"
              onClick={() => toggleDropdown(btn.label)}
            >
              {btn.label}
              {btn.dropdown && <ChevronDown className="w-4 h-4" />}
            </button>
            {btn.dropdown && activeDropdown === btn.label && (
              <div className="absolute top-full mt-1 left-0 z-50 w-44 bg-white border rounded shadow">
                {btn.dropdown.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Filter Toggle */}
        <button
          className="bg-teal-600 text-white px-4 py-2 rounded text-sm"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          {showFilter ? "Hide Filter" : "Apply Filter"}
        </button>
      </div>

      {/* Slide Filter Panel */}
      <div
        className={cn(
          "transition-all duration-500 overflow-hidden",
          showFilter ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 border rounded bg-white">
          {fields.map((field) => (
            <div key={field.name}>
              {field.type === "text" || field.type === "date" ? (
                <input
                  type={field.type}
                  placeholder={field.label}
                  value={filters[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full border px-3 py-2 rounded text-sm"
                />
              ) : field.type === "select" ? (
                <select
                  value={filters[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full border px-3 py-2 rounded text-sm"
                >
                  <option value="">{field.label}</option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : null}
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-4 mt-3 px-4">
          <button
            onClick={handleReset}
            className="bg-gray-400 text-white px-4 py-2 rounded text-sm"
          >
            Reset
          </button>

          <div className="relative" onBlur={() => setShowDownloadMenu(false)} tabIndex={0}>
            <button
              className="bg-secondary text-white px-4 py-2 rounded text-sm"
              onClick={() => setShowDownloadMenu((prev) => !prev)}
            >
              Download
            </button>
            {showDownloadDropdown && showDownloadMenu && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded shadow text-sm z-50">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Summary
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Summary with Statement
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
