"use client";

import React, { useState } from "react";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface TabSectionProps {
  tabs: Tab[];
  className?: string;
}

export function TabSection({ tabs, className = "" }: TabSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div className={className}>
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo text-white shadow-lg shadow-bakamo-cyan/20"
                : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              {tab.icon}
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-all duration-500 ${
              activeTab === tab.id
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
